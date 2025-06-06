
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Briefcase, ArrowRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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
        setFormData({ name: '', email: '', phone: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
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
    { name: "Simbi's Secret", service: "Business Startup Consulting" },
    { name: "Zenny's Cookware", service: "Consulting & Growth Strategy" },
    { name: "Bills Grub", service: "Business Strategy" },
    { name: "Shores Global", service: "Consulting" }
  ];

  const achievements = [
    "COO for firms in Nigeria and Atlanta",
    "Mentored multiple entrepreneurs from startup to scale", 
    "5+ years of hands-on experience across multiple industries"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Lightweight Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/cb6a2ab8-2783-4538-b6e8-9363c3597977.png" 
                alt="Kings Consults Logo" 
                className="h-22 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#901219] transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#901219] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-600 hover:text-[#901219] transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#901219] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#clients" className="text-gray-600 hover:text-[#901219] transition-all duration-300 font-medium relative group">
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#901219] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#901219] transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#901219] transition-all duration-300 group-hover:w-full"></span>
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
      <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image Container */}
          <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-[#F8A615] to-[#F8A615]/90 hover:from-[#F8A615]/90 hover:to-[#F8A615]/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Book a Session
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-all duration-300 hover:shadow-md">
                    Let's Work Together
                  </Button>
                </div>
              </div>
            </div>
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-5">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📸</span>
                </div>
                <p className="text-sm">Hero Image Space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the CEO Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#901219]">
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
                  <CardTitle className="text-[#901219] flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#F8A615]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#901219] text-sm">🎓</span>
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
            <h2 className="text-4xl font-bold text-[#901219] mb-6">About Kings Consults</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kings Consults is a strategy-first consulting brand helping purpose-driven entrepreneurs build structure, clarity, and confidence in their business. We guide founders through brand discovery, strategic positioning, and alignment so they can grow with intention and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#901219] flex items-center space-x-2">
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
                <CardTitle className="text-[#901219]">What Makes Us Different</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We are rooted in purpose, committed to impact, and driven by values. Our faith foundation inspires our approach to business with integrity, innovation, and empowerment at the core.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Core Values:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coreValues.map((value, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F8A615]/20 text-[#901219]">
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
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{client.service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recognition & Milestones */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#901219] text-2xl">Recognition & Milestones</CardTitle>
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
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#901219] to-[#901219]/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's build something that reflects your purpose.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to grow your brand with clarity and strategy?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#F8A615] hover:bg-[#F8A615]/90 text-white px-8 py-4 text-lg">
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#901219] px-8 py-4 text-lg">
              Get in Touch
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Book a Clarity Session</CardTitle>
              <CardDescription>
                Let's discuss how we can help you achieve your business goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showConfirmation ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out! We've received your details and will get in touch with you shortly.
                  </p>
                  <Button 
                    onClick={() => setShowConfirmation(false)} 
                    className="mt-4 bg-[#F8A615] hover:bg-[#F8A615]/90"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    placeholder="Tell us about your project or how we can help..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F8A615] hover:bg-[#F8A615]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Links */}
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:contact@kingsconsults.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <span>📱</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#901219]/95 text-white py-8 px-4 sm:px-6 lg:px-8">
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
