
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Briefcase } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1cc2bfe3-2ea0-4eae-95b5-73369bfdfbcb.png" 
                alt="JKings Consults Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-red-800 transition-colors">About</a>
              <a href="#services" className="text-slate-600 hover:text-red-800 transition-colors">Services</a>
              <a href="#clients" className="text-slate-600 hover:text-red-800 transition-colors">Clients</a>
              <a href="#contact" className="text-slate-600 hover:text-red-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Purpose-Driven Consulting for{' '}
                <span className="text-yellow-600">Visionary Entrepreneurs</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Empowering entrepreneurs and professionals to build values-driven, sustainable brands with clarity and strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg">
                  Book a Session
                </Button>
                <Button variant="outline" size="lg" className="border-red-800 text-red-800 hover:bg-red-50 px-8 py-4 text-lg">
                  Let's Work Together
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👑</span>
                  </div>
                  <p className="text-slate-600">CEO Professional Photo</p>
                  <p className="text-sm text-slate-500 mt-2">Upload photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the CEO Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About the CEO – Favour Nicholas</h2>
              <div className="prose prose-lg text-slate-600 space-y-4">
                <p>
                  Favour Nicholas is a business strategist and mentor with 5+ years of experience launching, scaling, and leading businesses in Nigeria and Atlanta, USA. She has served as Chief Operating Officer and guided entrepreneurs through business development and operations.
                </p>
                <p>
                  Her journey began with launching a business with ₦65,000 and scaling it to half a million in six months—empowering others along the way. That success story sparked the birth of JKings Consults: a mission to mentor, equip, and elevate purpose-driven leaders.
                </p>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800">Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Bachelor's in Public Health</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Diploma in Operations Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Certified Scrum Master</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About JKings Consults */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About JKings Consults</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Launched in 2024, serving entrepreneurs, professionals, and businesses with purpose-driven consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
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
                <p className="text-slate-600">
                  We are rooted in purpose, committed to impact, and driven by values. Our faith foundation inspires our approach to business with integrity, innovation, and empowerment at the core.
                </p>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Core Values:</h4>
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
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Clients & Portfolio</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clients.map((client, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{client.service}</p>
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
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-900">
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
