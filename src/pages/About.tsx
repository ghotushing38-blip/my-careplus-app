import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Heart, value: "20+", label: "Expert Doctors" },
    { icon: Award, value: "15", label: "Years of Excellence" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  const values = [
    {
      title: "Patient-Centered Care",
      description: "We put your health and comfort first in every decision we make",
    },
    {
      title: "Medical Excellence",
      description: "Our team maintains the highest standards of medical practice and expertise",
    },
    {
      title: "Compassion & Empathy",
      description: "We treat every patient with kindness, respect, and understanding",
    },
    {
      title: "Innovation",
      description: "We embrace advanced technology and modern treatment methods",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent py-20">
          <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About CarePlus Clinic</h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to providing exceptional healthcare services with compassion, expertise, and innovation since 2010
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    CarePlus Clinic was founded in 2010 by a group of passionate healthcare professionals who shared a
                    common vision: to create a medical practice where quality care, compassion, and innovation come
                    together to serve our community.
                  </p>
                  <p>
                    What started as a small family practice has grown into a comprehensive multi-specialty clinic,
                    serving over 5,000 patients annually. Our success is built on the trust and relationships we've
                    developed with our patients over the years.
                  </p>
                  <p>
                    Today, we're proud to offer a wide range of medical services under one roof, from cardiology and
                    pediatrics to dentistry and orthopedics. Our team of over 20 specialists brings decades of combined
                    experience and expertise to provide you with the best possible care.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop"
                  alt="Medical team"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=400&fit=crop"
                  alt="Clinic interior"
                  className="rounded-xl shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=400&fit=crop"
                  alt="Patient care"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop"
                  alt="Medical consultation"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold">Our Achievements</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center space-y-4 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="h-12 w-12 mx-auto opacity-90" />
                    <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                    <p className="text-base opacity-90">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl border border-border p-8 space-y-4 animate-fadeInUp">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive, high-quality healthcare services that improve the well-being of our patients
                  and community. We strive to deliver personalized care with compassion, respect, and clinical
                  excellence, making quality healthcare accessible to all.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8 space-y-4 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted healthcare provider in our region, recognized for our commitment to patient
                  satisfaction, medical innovation, and community wellness. We envision a healthier future where everyone
                  has access to exceptional medical care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 space-y-3 hover:shadow-lg transition-shadow animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl mx-auto animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team of healthcare professionals is committed to providing you with personalized,
              compassionate care. Each member brings unique expertise and a shared dedication to your health and
              well-being.
            </p>
            <div className="pt-6">
              <a
                href="/doctors"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View All Doctors
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
