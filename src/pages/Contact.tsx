import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Healthcare Ave, Medical District",
      content2: "New York, NY 10001",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (234) 567-890",
      content2: "Emergency: +1 (234) 567-999",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@careplusclinic.com",
      content2: "appointments@careplusclinic.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday: 8:00 AM - 8:00 PM",
      content2: "Saturday - Sunday: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent py-16">
          <div className="container mx-auto px-4 text-center space-y-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border p-6 space-y-3 hover:shadow-lg transition-shadow animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                    {info.content2 && <p className="text-sm text-muted-foreground">{info.content2}</p>}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fadeInUp">
                <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Map */}
              <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6873807103504!2d-73.98823492346652!3d40.74844097138779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CarePlus Clinic Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-foreground">Need Immediate Assistance?</h2>
              <p className="text-lg text-muted-foreground">
                For urgent medical concerns, please call our emergency line or visit us directly. Our team is always
                ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <a href="tel:+1234567890">Call Emergency: +1 (234) 567-999</a>
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

export default Contact;
