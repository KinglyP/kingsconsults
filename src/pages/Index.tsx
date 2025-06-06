
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Instagram, Briefcase, ArrowRight, Calendar, Phone } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showContactConfirmation, setShowContactConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbkeeeq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setShowConfirmation(true);
        setFormData({ name: '', email: '', phone: '', message: '', preferredDate: '', preferredTime: '' });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbkeeeq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactFormData)
      });
      
      if (response.ok) {
        setShowContactConfirmation(true);
        setContactFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Business Startup Consulting",
    "Strategy & Growth Planning", 
    "Entrepreneur Mentorship Programs",
    "Operations Management",
    "Sales & Marketing Strategy",
    "Training & Workshops"
  ];

  const coreValues = [
    "Integrity", "Impact", "Empowerment", "Innovation", "Collaboration"
  ];

  const clients = [
    { 
      name: "Simbi's Secret", 
      service: "Business Startup Consulting",
      testimonial: "Kings Consults transformed our business vision into reality. Their strategic guidance was invaluable.",
      services: "Business Startup Consulting, Brand Strategy Development, Operations Setup"
    },
    { 
      name: "Zenny's Cookware", 
      service: "Consulting & Growth Strategy",
      testimonial: "The growth strategy they developed helped us scale beyond our expectations.",
      services: "Growth Strategy Planning, Market Analysis, Operational Optimization"
    },
    { 
      name: "Bills Grub", 
      service: "Business Strategy",
      testimonial: "Professional, insightful, and results-driven. Highly recommend their services.",
      services: "Business Strategy Development, Process Improvement, Team Training"
    },
    { 
      name: "Shores Global", 
      service: "Consulting",
      testimonial: "Their expertise in operations management streamlined our entire business process.",
      services: "Operations Consulting, Strategic Planning, Leadership Development"
    }
  ];

  const achievements = [
    "COO for firms in Nigeria and Atlanta",
    "Mentored multiple entrepreneurs from startup to scale", 
    "5+ years of hands-on experience across multiple industries"
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Compact Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9c613978-8093-4547-86bb-5bf5e848f137.png" 
                alt="Kings Consults Logo" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#701015] transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701015] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-600 hover:text-[#701015] transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701015] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#clients" className="text-gray-600 hover:text-[#701015] transition-all duration-300 font-medium relative group">
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701015] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#701015] transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#701015] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Menu</span>
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="pt-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image Container */}
          <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
            
            {/* Professional Image */}
            <img 
              src="/lovable-uploads/97e0d125-2c26-44f8-b200-bbce09b5ba23.png" 
              alt="Professional consulting team collaboration" 
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white max-w-4xl px-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-[#F8A615] rounded-full mr-2"></span>
                  Purpose-Driven Consulting
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Empowering{' '}
                  <span className="text-[#F8A615]">
                    Visionary
                  </span>{' '}
                  Entrepreneurs
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Transform your business vision into reality with strategic consulting that drives sustainable growth and meaningful impact.
                </p>
              </div>
            </div>
          </div>
          
          {/* Book Session Button - Positioned below hero image */}
          <div className="flex justify-center pb-16">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-[#F8A615] to-[#F8A615]/90 hover:from-[#F8A615]/90 hover:to-[#F8A615]/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Book a Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#701015] mb-2">Book a Clarity Session</DialogTitle>
                </DialogHeader>
                
                {showConfirmation ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Thank You!</h3>
                    <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                      Your session request has been received. A team member from Kings Consults will contact you shortly to confirm and complete the booking.
                    </p>
                    <Button 
                      onClick={() => setShowConfirmation(false)} 
                      className="bg-[#F8A615] hover:bg-[#F8A615]/90 px-6 py-2"
                    >
                      Book Another Session
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                    </div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-11 bg-white border-gray-300"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="date"
                        placeholder="Preferred Date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                      <Input
                        type="time"
                        placeholder="Preferred Time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                    </div>
                    <Textarea
                      placeholder="Tell us about your business goals or challenges..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none bg-white border-gray-300"
                    />
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <strong>Note:</strong> This is a paid consultation. Our team will contact you to confirm the session and complete the booking process.
                    </p>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#F8A615] hover:bg-[#F8A615]/90 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request Session'}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* About the CEO Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#701015]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                Leadership Excellence
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">About the CEO – Favour Nicholas</h2>
              <div className="prose prose-lg text-white/90 space-y-6">
                <p>
                  Favour Nicholas is a business strategist and mentor with 5+ years of experience launching, scaling, and leading businesses in Nigeria and Atlanta, USA. She has served as Chief Operating Officer and guided entrepreneurs through business development and operations.
                </p>
                <p>
                  Her journey began with launching a business with ₦65,000 and scaling it to half a million in six months—empowering others along the way. That success story sparked the birth of Kings Consults: a mission to mentor, equip, and elevate purpose-driven leaders.
                </p>
              </div>
            </div>
            
            {/* CEO Image */}
            <div className="animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/a9446baf-23ed-4fb0-8052-0703bffd7093.png" 
                  alt="Favour Nicholas - CEO of Kings Consults" 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Education & Certifications Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 mt-8">
                <CardHeader>
                  <CardTitle className="text-[#701015] flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#F8A615]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#701015] text-sm">🎓</span>
                    </div>
                    <span>Education & Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-[#F8A615] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Bachelor's in Public Health</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-[#F8A615] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Diploma in Operations Management</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-[#F8A615] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Certified Scrum Master</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Kings Consults */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#701015] mb-6">About Kings Consults</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kings Consults is a strategy-first consulting brand helping purpose-driven entrepreneurs build structure, clarity, and confidence in their business. We guide founders through brand discovery, strategic positioning, and alignment so they can grow with intention and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#701015] flex items-center space-x-2">
                  <Briefcase className="w-6 h-6" />
                  <span>What We Offer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#F8A615] rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#701015]">What Makes Us Different</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We are rooted in purpose, committed to impact, and driven by values. Our faith foundation inspires our approach to business with integrity, innovation, and empowerment at the core.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Core Values:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coreValues.map((value, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F8A615]/20 text-[#701015]">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients & Portfolio */}
      <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Clients & Portfolio</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clients.map((client, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{client.service}</p>
                      <p className="text-[#F8A615] text-xs mt-2 font-medium">Click to view case study</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-[#701015] mb-4">{client.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Placeholder for client logo */}
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-500 text-sm">Client Logo Placeholder</span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Client Testimonial</h4>
                      <blockquote className="text-gray-600 italic border-l-4 border-[#F8A615] pl-4">
                        "{client.testimonial}"
                      </blockquote>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Services Provided</h4>
                      <p className="text-gray-600">{client.services}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Recognition & Milestones */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#701015] text-2xl">Recognition & Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#F8A615] rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#701015] to-[#701015]/90">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            
            {/* Contact Form */}
            <div className="text-white">
              <div className="mb-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Have questions about our services? We'd love to hear from you.
                </p>
              </div>
              
              {showContactConfirmation ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-white/90 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for reaching out! We'll be in touch with you shortly.
                  </p>
                  <Button 
                    onClick={() => setShowContactConfirmation(false)} 
                    className="bg-[#F8A615] hover:bg-[#F8A615]/90 px-6 py-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactChange}
                        required
                        className="h-11 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleContactChange}
                        required
                        className="h-11 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      />
                    </div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={contactFormData.phone}
                      onChange={handleContactChange}
                      required
                      className="h-11 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                    <Textarea
                      placeholder="Your message..."
                      name="message"
                      value={contactFormData.message}
                      onChange={handleContactChange}
                      rows={4}
                      className="resize-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-[#F8A615] hover:bg-[#F8A615]/90 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isContactSubmitting}
                    >
                      {isContactSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>

                  {/* Contact Links */}
                  <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <a href="mailto:contact@kingsconsults.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Email</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/kingsconsults.ng?igsh=MWpqOWY2ZGZtYm04bQ==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Instagram</span>
                    </a>
                    <a 
                      href="https://wa.me/2348113829471" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
                    >
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="tel:+2348113829471" 
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
                    >
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Phone Call</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#701015]/95 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">
            © 2024 Kings Consults. Empowering purpose-driven entrepreneurs.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
