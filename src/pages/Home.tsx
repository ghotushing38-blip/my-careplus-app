import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-medical.jpg";
import {
  Calendar,
  Users,
  Award,
  Heart,
  Stethoscope,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Home = () => {
  const featuredDoctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      qualification: "MD, FACC - 15 years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      qualification: "MD, FAAP - 12 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      available: true,
      schedule: "Mon-Sat, 10:00 AM - 6:00 PM",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Dentist",
      qualification: "DDS, MSc - 10 years experience",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      available: false,
      schedule: "Tue-Sat, 8:00 AM - 4:00 PM",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Williams",
      role: "Patient since 2020",
      content:
        "CarePlus Clinic has been amazing! The doctors are knowledgeable, caring, and always take the time to listen. I feel confident in the care I receive here.",
      rating: 5,
    },
    {
      name: "Robert Martinez",
      role: "Patient since 2019",
      content:
        "Outstanding service from start to finish. The booking system is easy to use, and the staff is incredibly professional. Highly recommend!",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Patient since 2021",
      content:
        "My family and I have been coming here for years. The pediatric care is exceptional, and Dr. Chen is wonderful with children.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Stethoscope, value: "20+", label: "Expert Doctors" },
    { icon: Award, value: "15", label: "Years of Excellence" },
    { icon: Activity, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Medical professionals" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl space-y-6 animate-fadeInUp">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Your Health, Our Priority</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Quality Healthcare
                <br />
                <span className="text-primary">You Can Trust</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Experience compassionate, comprehensive medical care from our team of experienced specialists. Book your
                appointment today and take the first step towards better health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/doctors">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Icon className="h-8 w-8 mx-auto opacity-90" />
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm opacity-90">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Doctors Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fadeInUp">
              <h2 className="text-4xl font-bold text-foreground">Available Doctors Today</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet our experienced specialists who are ready to provide you with exceptional care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDoctors.map((doctor, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <DoctorCard {...doctor} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link to="/doctors">
                  View All Doctors
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fadeInUp">
              <h2 className="text-4xl font-bold text-foreground">Why Choose CarePlus?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the highest quality healthcare services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle2,
                  title: "Expert Specialists",
                  description: "Board-certified doctors with years of experience in their respective fields",
                },
                {
                  icon: Calendar,
                  title: "Easy Booking",
                  description: "Simple online appointment system with real-time availability",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "Patient-centered approach focusing on your comfort and well-being",
                },
                {
                  icon: Activity,
                  title: "Advanced Technology",
                  description: "State-of-the-art medical equipment for accurate diagnoses",
                },
                {
                  icon: Users,
                  title: "Friendly Staff",
                  description: "Welcoming team dedicated to making your visit comfortable",
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description: "15 years of excellence with thousands of satisfied patients",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border p-6 space-y-4 hover:shadow-lg transition-shadow animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fadeInUp">
              <h2 className="text-4xl font-bold text-foreground">What Our Patients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read reviews from our satisfied patients who trust us with their healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Book your appointment today and experience quality healthcare that puts you first
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/doctors">
                  <Calendar className="h-5 w-5" />
                  Book Appointment Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
