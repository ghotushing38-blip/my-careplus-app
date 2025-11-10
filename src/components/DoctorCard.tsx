import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  qualification: string;
  image: string;
  available: boolean;
  schedule?: string;
}

const DoctorCard = ({ name, specialty, qualification, image, available, schedule }: DoctorCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeInUp">
      {/* Doctor Image */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {available && (
          <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
            Available Today
          </div>
        )}
      </div>

      {/* Doctor Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-primary font-medium">{specialty}</p>
          <p className="text-xs text-muted-foreground mt-1">{qualification}</p>
        </div>

        {schedule && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{schedule}</span>
          </div>
        )}

        <Button className="w-full" size="sm">
          <Calendar className="h-4 w-4" />
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
