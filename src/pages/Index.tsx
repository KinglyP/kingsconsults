
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
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
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
                alt="JKings Consults Logo" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-red-800 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-600 hover:text-red-800 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#clients" className="text-gray-600 hover:text-red-800 transition-all duration-300 font-medium relative group">
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-red-800 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
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
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Purpose-Driven Consulting
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Empowering{' '}
                  <span className="text-yellow-400">
                    Visionary
                  </span>{' '}
                  Entrepreneurs
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Transform your business vision into reality with strategic consulting that drives sustainable growth and meaningful impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
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
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                Leadership Excellence
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About the CEO – Favour Nicholas</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Favour Nicholas is a business strategist and mentor with 5+ years of experience launching, scaling, and leading businesses in Nigeria and Atlanta, USA. She has served as Chief Operating Officer and guided entrepreneurs through business development and operations.
                </p>
                <p>
                  Her journey began with launching a business with ₦65,000 and scaling it to half a million in six months—empowering others along the way. That success story sparked the birth of JKings Consults: a mission to mentor, equip, and elevate purpose-driven leaders.
                </p>
              </div>
            </div>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-800 text-sm">🎓</span>
                  </div>
                  <span>Education & Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Bachelor's in Public Health</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Diploma in Operations Management</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Certified Scrum Master</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About JKings Consults */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About JKings Consults</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launched in 2024, serving entrepreneurs, professionals, and businesses with purpose-driven consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center space-x-2">
                  <Briefcase className="w-6 h-6" />
                  <span>What We Offer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800">What Makes Us Different</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We are rooted in purpose, committed to impact, and driven by values. Our faith foundation inspires our approach to business with integrity, innovation, and empowerment at the core.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Core Values:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coreValues.map((value, index) => (
                      <Badge key={index} variant="secondary" className="bg-yellow-100 text-red-800">
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
              <CardTitle className="text-red-800 text-2xl">Recognition & Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's build something that reflects your purpose.
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Ready to grow your brand with clarity and strategy?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg">
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 text-lg">
              Get in Touch
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Let's discuss how we can help you achieve your business goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                <Textarea
                  placeholder="Tell us about your project or how we can help..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Links */}
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:contact@jkingsconsults.com" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
              <span>📱</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-200">
            © 2024 JKings Consults. Empowering purpose-driven entrepreneurs.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
