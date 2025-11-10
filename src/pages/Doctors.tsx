import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Heart, Bone, Baby, Smile, Eye, Brain } from "lucide-react";
import { useState } from "react";

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const specialties = [
    { id: "all", label: "All Doctors", icon: Heart },
    { id: "cardiology", label: "Cardiology", icon: Heart },
    { id: "pediatrics", label: "Pediatrics", icon: Baby },
    { id: "dentistry", label: "Dentistry", icon: Smile },
    { id: "orthopedics", label: "Orthopedics", icon: Bone },
    { id: "ophthalmology", label: "Ophthalmology", icon: Eye },
    { id: "neurology", label: "Neurology", icon: Brain },
  ];

  const doctors = [
    {
      name: "Dr. Johnny Seance",
      specialty: "neurology",
      specialtyLabel: "Neurologist",
      qualification: "MD, PhD - 22 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      available: true,
      schedule: "Tue-Sat, 9:00 AM - 6:00 PM",
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "cardiology",
      specialtyLabel: "Cardiologist",
      qualification: "MD, FACC - 15 years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "pediatrics",
      specialtyLabel: "Pediatrician",
      qualification: "MD, FAAP - 12 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Sat, 10:00 AM - 6:00 PM",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "dentistry",
      specialtyLabel: "Dentist",
      qualification: "DDS, MSc - 10 years experience",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      available: false,
      schedule: "Tue-Sat, 8:00 AM - 4:00 PM",
    },
    {
      name: "Dr. James Wilson",
      specialty: "orthopedics",
      specialtyLabel: "Orthopedic Surgeon",
      qualification: "MD, FAAOS - 18 years experience",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Thu, 8:00 AM - 4:00 PM",
    },
    {
      name: "Dr. Priya Patel",
      specialty: "ophthalmology",
      specialtyLabel: "Ophthalmologist",
      qualification: "MD, FACS - 14 years experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      available: true,
      schedule: "Wed-Sun, 9:00 AM - 5:00 PM",
    },
    {
      name: "Dr. David Kim",
      specialty: "neurology",
      specialtyLabel: "Neurologist",
      qualification: "MD, PhD - 20 years experience",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      available: false,
      schedule: "Mon-Fri, 10:00 AM - 6:00 PM",
    },
    {
      name: "Dr. Amanda Foster",
      specialty: "pediatrics",
      specialtyLabel: "Pediatrician",
      qualification: "MD, FAAP - 9 years experience",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      available: true,
      schedule: "Tue-Sat, 9:00 AM - 5:00 PM",
    },
    {
      name: "Dr. Robert Taylor",
      specialty: "cardiology",
      specialtyLabel: "Cardiologist",
      qualification: "MD, FACC - 16 years experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      available: false,
      schedule: "Mon-Fri, 8:00 AM - 4:00 PM",
    },
    {
      name: "Dr. Lisa Zhang",
      specialty: "dentistry",
      specialtyLabel: "Dentist",
      qualification: "DDS - 11 years experience",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Fri, 9:00 AM - 6:00 PM",
    },
  ];

  const filteredDoctors =
    selectedSpecialty === "all" ? doctors : doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent py-16">
          <div className="container mx-auto px-4 text-center space-y-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Medical Specialists</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our team of experienced doctors dedicated to providing you with exceptional healthcare
            </p>
          </div>
        </section>

        {/* Specialty Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-sm bg-background/95">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {specialties.map((specialty) => {
                const Icon = specialty.icon;
                return (
                  <Button
                    key={specialty.id}
                    variant={selectedSpecialty === specialty.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty.id)}
                    className="whitespace-nowrap flex-shrink-0"
                  >
                    <Icon className="h-4 w-4" />
                    {specialty.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? "doctor" : "doctors"}
                {selectedSpecialty !== "all" && (
                  <span>
                    {" "}
                    in <span className="font-semibold text-foreground">{specialties.find((s) => s.id === selectedSpecialty)?.label}</span>
                  </span>
                )}
              </p>
            </div>

            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    <DoctorCard
                      name={doctor.name}
                      specialty={doctor.specialtyLabel}
                      qualification={doctor.qualification}
                      image={doctor.image}
                      available={doctor.available}
                      schedule={doctor.schedule}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No doctors found in this specialty.</p>
              </div>
            )}
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl border border-border p-8 text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground">Need Immediate Assistance?</h2>
              <p className="text-muted-foreground">
                For urgent medical concerns or to speak with our staff, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <a href="tel:+1234567890">Call: +1 (234) 567-890</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;
