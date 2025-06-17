import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Mail, Instagram, Briefcase, ArrowRight, Phone, Menu, ChevronDown, Lightbulb, Target, Heart } from "lucide-react";
import { Label } from "@/components/ui/label";

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
  const [nameSuggestions, setNameSuggestions] = useState<string[]>([]);
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState({
    about: false,
    services: false,
    contact: false,
    connect: false
  });

  // Common name suggestions
  const commonNames = [
    'Adaora', 'Chidi', 'Emeka', 'Kemi', 'Tunde', 'Chioma', 'Ibrahim', 'Fatima', 'James', 'Mary',
    'David', 'Sarah', 'Michael', 'Grace', 'Joseph', 'Ruth', 'Daniel', 'Esther', 'Samuel', 'Rebecca'
  ];

  // Email domain suggestions
  const emailDomains = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com'];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  // Check if selected date is today
  const isToday = (date: string) => {
    return date === today;
  };

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
      if (!isToday(formData.preferredDate) || timeSlot > getCurrentTime()) {
        slots.push(timeSlot);
      }
    }
    return slots;
  };

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Handle name suggestions
    if (name === 'name' && value.length > 0) {
      const suggestions = commonNames.filter(name => 
        name.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 3);
      setNameSuggestions(suggestions);
    } else if (name === 'name') {
      setNameSuggestions([]);
    }

    // Handle email suggestions
    if (name === 'email' && value.includes('@') && !value.includes('@gmail') && !value.includes('@yahoo') && !value.includes('@hotmail') && !value.includes('@outlook')) {
      const [localPart] = value.split('@');
      const suggestions = emailDomains.map(domain => localPart + domain);
      setEmailSuggestions(suggestions);
    } else if (name === 'email' && value.length > 0 && !value.includes('@')) {
      const suggestions = emailDomains.map(domain => value + domain);
      setEmailSuggestions(suggestions);
    } else {
      setEmailSuggestions([]);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const selectSuggestion = (suggestion: string, field: string) => {
    setFormData({
      ...formData,
      [field]: suggestion
    });
    if (field === 'name') setNameSuggestions([]);
    if (field === 'email') setEmailSuggestions([]);
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

  // Enhanced scroll reveal animation logic with unified behavior
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all unified scroll reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-subtle, .scroll-reveal-gentle, .scroll-reveal-scale');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter" style={{ scrollBehavior: 'smooth' }}>
      {/* Enhanced Header with Transparent Logo */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="logo-transparent rounded-lg p-0">
                <img 
                  src="/lovable-uploads/9c613978-8093-4547-86bb-5bf5e848f137.png" 
                  alt="Kings Consults Logo" 
                  className="h-8 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="hamburger-menu">
                    <Menu className="w-6 h-6 text-gray-600" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md bg-[#701015] overflow-y-auto max-h-screen">
                  <SheetHeader className="text-left pb-6">
                    <SheetTitle className="text-white text-xl font-bold">Kings Consults</SheetTitle>
                    <SheetDescription className="text-gray-300">
                      Empowering purpose-driven entrepreneurs
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-4 pb-8">
                    {/* About Section */}
                    <Collapsible 
                      open={openSections.about} 
                      onOpenChange={() => toggleSection('about')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <span className="text-white font-medium">About Kings Consulting</span>
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${openSections.about ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-lg">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Kings Consulting is a business consulting agency that partners with entrepreneurs, startups, and organizations to bring clarity to their ideas, build strategic business structures, and execute winning plans. Whether you're refining a concept, launching a new venture, or scaling operations, we help you position your business for real results.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Services Section */}
                    <Collapsible 
                      open={openSections.services} 
                      onOpenChange={() => toggleSection('services')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <span className="text-white font-medium">Our Services</span>
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${openSections.services ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-lg">
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Business & Idea Consultation</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Business Structuring & Strategic Planning</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Brand & Market Positioning</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Execution Strategy & Roadmapping</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Acting COO Services</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Operations & Team Structuring</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Brand Identity Advisory</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F8A301] rounded-full mt-2 flex-shrink-0"></div>
                            <span>Go-to-Market Support</span>
                          </li>
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Contact Section */}
                    <Collapsible 
                      open={openSections.contact} 
                      onOpenChange={() => toggleSection('contact')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <span className="text-white font-medium">Contact Us</span>
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${openSections.contact ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-lg">
                        <div className="space-y-3">
                          <a 
                            href="tel:+2348113829471" 
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                          >
                            <div className="w-8 h-8 bg-[#F8A301]/20 rounded-lg flex items-center justify-center">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm">+234 811 382 9471</span>
                          </a>
                          <a 
                            href="mailto:info.kingsconsults@gmail.com" 
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                          >
                            <div className="w-8 h-8 bg-[#F8A301]/20 rounded-lg flex items-center justify-center">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm">info.kingsconsults@gmail.com</span>
                          </a>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Connect Section */}
                    <Collapsible 
                      open={openSections.connect} 
                      onOpenChange={() => toggleSection('connect')}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <span className="text-white font-medium">Connect With Us</span>
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${openSections.connect ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-lg">
                        <div className="grid grid-cols-2 gap-3">
                          <a 
                            href="tel:+2348113829471" 
                            className="flex flex-col items-center space-y-2 p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                          >
                            <Phone className="w-5 h-5" />
                            <span>Call Us</span>
                          </a>
                          <a 
                            href="mailto:info.kingsconsults@gmail.com" 
                            className="flex flex-col items-center space-y-2 p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                          >
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                          </a>
                          <a 
                            href="https://wa.me/2348113829471" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-col items-center space-y-2 p-3 bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/30 transition-colors text-sm"
                          >
                            <Phone className="w-5 h-5" />
                            <span>WhatsApp</span>
                          </a>
                          <a 
                            href="https://www.instagram.com/kingsconsults.ng?igsh=MWpqOWY2ZGZtYm04bQ==" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-col items-center space-y-2 p-3 bg-pink-600/20 text-pink-300 rounded-lg hover:bg-pink-600/30 transition-colors text-sm"
                          >
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                          </a>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-16">
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[70vh] min-h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/15 z-10"></div>
            
            <img 
              src="/lovable-uploads/cb6a2ab8-2783-4538-b6e8-9363c3597977.png" 
              alt="A confident businesswoman in white attire holding a coral-colored folder, standing in front of a modern boardroom team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-shadow-lg scroll-reveal">
                  Empowering{' '}
                  <span className="text-[#F8A301] font-black">
                    Visionary
                  </span>{' '}
                  Entrepreneurs
                </h1>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto text-center px-6 scroll-reveal-gentle stagger-3">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                Transform your business vision into reality with strategic consulting that drives sustainable growth and meaningful impact.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-[#701015] text-white rounded-full text-lg font-medium animate-pulse-scale">
                <span className="w-3 h-3 bg-[#F8A301] rounded-full mr-3 animate-float"></span>
                The Purpose-Driven Consortium
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Where vision meets strategy, and dreams become sustainable business realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kings Consults */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-xl font-bold text-[#701015] mb-6">About Kings Consults</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Kings Consults is a strategy-first consulting brand helping purpose-driven entrepreneurs build structure, clarity, and confidence in their business. We guide founders through brand discovery, strategic positioning, and alignment so they can grow with intention and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <Card className="shadow-lg scroll-reveal-subtle card-hover">
              <CardHeader>
                <CardTitle className="text-[#701015] flex items-center space-x-2">
                  <Briefcase className="w-6 h-6" />
                  <span>What We Offer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 scroll-reveal-gentle" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                      <div className="w-2 h-2 bg-[#F8A301] rounded-full animate-pulse-scale"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg scroll-reveal-subtle card-hover">
              <CardHeader>
                <CardTitle className="text-[#701015]">What Makes Us Different</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 scroll-reveal-gentle">
                  We are rooted in purpose, committed to impact, and driven by values. Our faith foundation inspires our approach to business with integrity, innovation, and empowerment at the core.
                </p>
                <div className="scroll-reveal-gentle">
                  <h4 className="font-semibold text-gray-800 mb-2">Core Values:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coreValues.map((value, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F8A301]/20 text-[#701015] scroll-reveal-scale" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
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

      {/* Meet the CEO Section */}
      <section id="ceo" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#701015]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal">
              <h2 className="text-xl font-bold text-white mb-6 scroll-reveal-subtle stagger-2">Meet the CEO</h2>
              <div className="prose prose-lg text-white/90 space-y-6">
                <p className="scroll-reveal-gentle stagger-3">
                  <strong>Favour Nicholas</strong> is a business strategist and mentor with 5+ years of experience launching, scaling, and leading businesses in Nigeria and Atlanta, USA. She has served as Chief Operating Officer and guided entrepreneurs through business development and operations.
                </p>
                <p className="scroll-reveal-gentle stagger-4">
                  Years ago, she launched a business with just ₦65,000 and scaled it to half a million within six months — a milestone that ignited her passion for empowering entrepreneurs.
                </p>
                <p className="scroll-reveal-gentle stagger-5">
                  Today, as the driving force behind Kings Consults, <strong>Favour</strong> is on a mission to mentor and equip purpose-driven leaders to build, grow, and lead successful ventures.
                </p>
              </div>
            </div>
            
            <div className="scroll-reveal-subtle relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/a9446baf-23ed-4fb0-8052-0703bffd7093.png" 
                  alt="Favour Nicholas - CEO of Kings Consults" 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 mt-8 card-hover scroll-reveal-scale stagger-6">
                <CardHeader>
                  <CardTitle className="text-[#701015] flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#F8A301]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#701015] text-sm">🎓</span>
                    </div>
                    <span>Education & Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['Bachelor\'s in Public Health', 'Diploma in Operations Management', 'Certified Scrum Master'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm scroll-reveal-gentle" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                      <div className="w-3 h-3 bg-[#F8A301] rounded-full flex-shrink-0 animate-pulse-scale"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Session Section */}
      <section id="book-session" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-2xl font-bold text-[#701015] mb-6">Ready to Transform Your Business?</h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a clarity session with our team and start your journey toward sustainable business growth and success.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-[#F8A301] to-[#F8A301]/90 hover:from-[#F8A301]/90 hover:to-[#F8A301]/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group scroll-reveal-scale stagger-2">
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
                    className="bg-[#F8A301] hover:bg-[#F8A301]/90 px-6 py-2"
                  >
                    Book Another Session
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                      {nameSuggestions.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                          {nameSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              className="w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors"
                              onClick={() => selectSuggestion(suggestion, 'name')}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                      {emailSuggestions.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                          {emailSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              className="w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors"
                              onClick={() => selectSuggestion(suggestion, 'email')}
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-11 bg-white border-gray-300"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700 mb-2 block">
                        Preferred Booking Date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={today}
                        required
                        className="h-11 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="text-sm font-medium text-gray-700 mb-2 block">
                        Preferred Time
                      </Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                        required
                        className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        <option value="">Select time</option>
                        {getAvailableTimeSlots().map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      Tell us about your business goals or challenges
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your business goals, challenges, or what you'd like to discuss..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none bg-white border-gray-300"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <strong>Note:</strong> This is a paid consultation. Our team will contact you to confirm the session and complete the booking process.
                  </p>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#E4B429] hover:bg-[#E4B429]/90 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Request Session'}
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Our Vision, Mission & Purpose Section */}
      <section id="vision-mission-purpose" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-xl font-bold text-[#701015] mb-6">Our Vision, Mission & Purpose</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Driven by clear values and a commitment to meaningful impact, we guide entrepreneurs toward purpose-driven success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="text-center scroll-reveal-subtle stagger-1">
              <div className="w-24 h-24 mx-auto mb-6 vmp-icon rounded-full flex items-center justify-center">
                <Lightbulb className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-[#701015] mb-4 scroll-reveal-gentle stagger-2">Vision</h3>
              <p className="text-gray-600 leading-relaxed scroll-reveal-gentle stagger-3">
                To see entrepreneurs build intentional, values-driven brands that create lasting impact and reflect true purpose.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center scroll-reveal-subtle stagger-2">
              <div className="w-24 h-24 mx-auto mb-6 vmp-icon rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-[#701015] mb-4 scroll-reveal-gentle stagger-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed scroll-reveal-gentle stagger-4">
                To equip individuals with clarity, structure, and brand strategy that transforms vision into confident execution.
              </p>
            </div>

            {/* Purpose */}
            <div className="text-center scroll-reveal-subtle stagger-3">
              <div className="w-24 h-24 mx-auto mb-6 vmp-icon rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" strokeWidth={2.5} fill="currentColor" />
              </div>
              <h3 className="text-lg font-bold text-[#701015] mb-4 scroll-reveal-gentle stagger-4">Purpose</h3>
              <p className="text-gray-600 leading-relaxed scroll-reveal-gentle stagger-5">
                To help purpose-driven founders transition from confusion to clarity, and from passion to measurable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Milestones */}
      <section id="recognition" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-lg scroll-reveal">
            <CardHeader>
              <CardTitle className="text-[#701015] text-2xl">Recognition & Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 scroll-reveal-gentle" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-3 h-3 bg-[#F8A301] rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clients & Testimonials */}
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Clients & Testimonials</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 scroll-reveal-subtle stagger-${(index % 4) + 1}`}>
                    <CardHeader>
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{client.service}</p>
                      <p className="text-[#F8A301] text-xs mt-2 font-medium">Click to view case study</p>
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
                      <blockquote className="text-gray-600 italic border-l-4 border-[#F8A301] pl-4">
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#701015] to-[#701015]/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-white">
            <div className="mb-12 text-center scroll-reveal">
              <h2 className="text-xl lg:text-2xl font-bold mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-base text-white/90 leading-relaxed">
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
                  className="bg-[#F8A301] hover:bg-[#F8A301]/90 px-6 py-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleContactSubmit} className="space-y-4 scroll-reveal-subtle stagger-2">
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
                    className="w-full bg-[#F8A301] hover:bg-[#F8A301]/90 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isContactSubmitting}
                  >
                    {isContactSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <div className="mt-16 pt-8 border-t border-white/20 scroll-reveal-gentle stagger-4">
                  <h3 className="text-xl font-bold text-white text-center mb-8">Connect With Us</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <a 
                      href="mailto:info.kingsconsults@gmail.com" 
                      className="flex flex-col items-center justify-center p-3 contact-icon rounded-lg text-white transition-all duration-300 group shadow-md scroll-reveal-scale stagger-5"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mb-2">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-xs text-center">Email</span>
                    </a>
                    
                    <a 
                      href="tel:+2348113829471" 
                      className="flex flex-col items-center justify-center p-3 contact-icon rounded-lg text-white transition-all duration-300 group shadow-md scroll-reveal-scale stagger-6"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mb-2">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-xs text-center">Phone Call</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/2348113829471" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 contact-icon rounded-lg text-white transition-all duration-300 group shadow-md scroll-reveal-scale stagger-1"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mb-2">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-xs text-center">WhatsApp</span>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/kingsconsults.ng?igsh=MWpqOWY2ZGZtYm04bQ==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 contact-icon rounded-lg text-white transition-all duration-300 group shadow-md scroll-reveal-scale stagger-2"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mb-2">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-xs text-center">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#701015]/95 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal">
            <p className="text-gray-300">
              © 2024 Kings Consults. Empowering purpose-driven entrepreneurs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
