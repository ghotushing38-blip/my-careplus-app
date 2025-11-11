import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctorName: string;
  doctorSpecialty: string;
  schedule?: string;
}

const BookingModal = ({ open, onOpenChange, doctorName, doctorSpecialty, schedule }: BookingModalProps) => {
  // Parse schedule to get available days
  const getAvailableDays = () => {
    if (!schedule) return [1, 2, 3, 4, 5]; // Default to Mon-Fri
    
    const dayMap: Record<string, number> = {
      'mon': 1, 'tue': 2, 'wed': 3, 'thu': 4, 'fri': 5, 'sat': 6, 'sun': 0
    };
    
    const scheduleLower = schedule.toLowerCase();
    const availableDays: number[] = [];
    
    if (scheduleLower.includes('mon-fri')) {
      return [1, 2, 3, 4, 5];
    } else if (scheduleLower.includes('tue-sat')) {
      return [2, 3, 4, 5, 6];
    } else if (scheduleLower.includes('mon-sat')) {
      return [1, 2, 3, 4, 5, 6];
    } else if (scheduleLower.includes('wed-sun')) {
      return [3, 4, 5, 6, 0];
    } else if (scheduleLower.includes('mon-thu')) {
      return [1, 2, 3, 4];
    }
    
    Object.entries(dayMap).forEach(([day, num]) => {
      if (scheduleLower.includes(day)) availableDays.push(num);
    });
    
    return availableDays.length > 0 ? availableDays : [1, 2, 3, 4, 5];
  };

  const availableDays = getAvailableDays();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast.error("Please select date and time");
      return;
    }

    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        toast.error("Please login to book an appointment");
        setLoading(false);
        return;
      }

      // Get existing appointments count for queue number
      const { data: existingAppointments } = await supabase
        .from("appointments")
        .select("id")
        .eq("appointment_date", format(date, "yyyy-MM-dd"))
        .eq("doctor_name", doctorName);

      const queueNumber = (existingAppointments?.length || 0) + 1;

      const { error } = await supabase.from("appointments").insert({
        user_id: session.user.id,
        doctor_name: doctorName,
        doctor_specialty: doctorSpecialty,
        appointment_date: format(date, "yyyy-MM-dd"),
        appointment_time: time,
        reason: reason || null,
        status: "scheduled",
        queue_number: queueNumber,
      });

      if (error) {
        toast.error("Failed to book appointment");
        console.error(error);
      } else {
        toast.success(
          `✅ Appointment booked! You are number ${queueNumber} in the queue. Your appointment is scheduled for ${time}, ${format(date, "MMM dd, yyyy")}.`
        );
        onOpenChange(false);
        setDate(undefined);
        setTime("");
        setReason("");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            Book an appointment with {doctorName} - {doctorSpecialty}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today || !availableDays.includes(date.getDay());
              }}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Select Time</Label>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((availableTime) => (
                <Button
                  key={availableTime}
                  type="button"
                  variant={time === availableTime ? "default" : "outline"}
                  onClick={() => setTime(availableTime)}
                  className="w-full"
                >
                  {availableTime}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit (Optional)</Label>
            <Textarea
              id="reason"
              placeholder="Describe your symptoms or reason for visit..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirm Booking
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
