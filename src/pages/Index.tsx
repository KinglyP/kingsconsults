import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 logo-transparent">
            <img
              src="/lovable-uploads/cb6a2ab8-2783-4538-b6e8-9363c3597977.png"
              alt="Kings Consults"
              className="h-10 w-auto"
            />
          </div>
          
          <button className="hamburger-menu">
            <Menu size={32} className="text-foreground" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-accent/10">
        <div className="container mx-auto text-center py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-shadow-lg animate-fade-in">
            Elevate Your Business with Expert Guidance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in stagger-1">
            Strategic consulting to drive growth, optimize operations, and achieve sustainable success.
          </p>
          <div className="space-x-4 animate-fade-in stagger-2">
            <a href="#services" className="btn btn-primary btn-lg btn-animate">
              Explore Our Services
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg btn-animate">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing px-4 bg-background scroll-reveal" id="about">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">About Kings Consults</h2>
            <p className="text-lg text-muted-foreground text-center">
              We are a premier consulting firm dedicated to empowering businesses across various industries.
              With a focus on innovation and strategic solutions, we help our clients navigate challenges and
              achieve their business objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Our Expertise</h3>
                <p className="text-muted-foreground">
                  We bring deep industry knowledge and functional expertise to every project.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
                <p className="text-muted-foreground">
                  We prioritize our clients' needs, working collaboratively to deliver tailored solutions.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-muted-foreground">
                  We are committed to delivering measurable results and creating long-term value for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-spacing px-4 bg-accent/5 scroll-reveal">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground text-center">
              At Kings Consults, we stand out through our unique blend of experience, innovation, and dedication
              to client success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technologies and creative strategies to solve complex business challenges.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Experienced Consultants</h3>
                <p className="text-muted-foreground">
                  Our team comprises seasoned professionals with diverse backgrounds and proven track records.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Customized Strategies</h3>
                <p className="text-muted-foreground">
                  We develop bespoke strategies tailored to each client's specific needs and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the CEO */}
      <section className="section-spacing px-4 bg-background scroll-reveal">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Meet the CEO</h2>
            <div className="flex flex-col md:flex-row items-center justify-center mt-8">
              <img
                src="/lovable-uploads/4e94995d-9c99-495d-919d-99551998a393.png"
                alt="CEO of Kings Consults"
                className="rounded-full w-48 h-48 object-cover shadow-lg mb-4 md:mb-0 md:mr-8"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">Ayo Oladeji</h3>
                <p className="text-lg text-muted-foreground">
                  Founder and CEO of Kings Consults, Ayo is a visionary leader with a passion for driving business
                  transformation.
                </p>
                <p className="text-muted-foreground mt-4">
                  With over 15 years of experience in strategic consulting, Ayo has helped numerous organizations
                  achieve remarkable growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Session */}
      <section className="section-spacing px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground scroll-reveal">
        <div className="container mx-auto text-center">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold">Book a Session</h2>
            <p className="text-lg">
              Ready to take your business to the next level? Schedule a consultation with our expert team today.
            </p>
            <a href="#contact" className="btn btn-secondary btn-lg btn-animate mt-6">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Purpose */}
      <section className="section-spacing px-4 bg-background scroll-reveal">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Vision, Mission & Purpose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="vmp-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye text-primary-foreground animate-icon-glow"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-4">Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading consulting firm, recognized for driving innovation and client success globally.
                </p>
              </div>
              <div className="text-center">
                <div className="vmp-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target text-primary-foreground animate-icon-glow"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-4">Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with strategic insights and tailored solutions, fostering sustainable growth
                  and success.
                </p>
              </div>
              <div className="text-center">
                <div className="vmp-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-primary-foreground animate-icon-glow"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3 5.5 5.5 0 0 0 11 5.5 5.5 5.5 0 0 0 8 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-4">Purpose</h3>
                <p className="text-muted-foreground">
                  To create lasting value for our clients, employees, and communities through ethical and
                  impactful consulting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions & Milestones */}
      <section className="section-spacing px-4 bg-accent/5 scroll-reveal">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Recognitions & Milestones</h2>
            <p className="text-lg text-muted-foreground text-center">
              We are proud to have achieved significant milestones and received recognition for our commitment to
              excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Industry Awards</h3>
                <p className="text-muted-foreground">
                  Recognized as a top consulting firm by leading industry publications.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Client Success Stories</h3>
                <p className="text-muted-foreground">
                  Helped numerous clients achieve significant growth and improve their bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Testimonials */}
      <section className="section-spacing px-4 bg-background scroll-reveal">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Clients & Testimonials</h2>
            <p className="text-lg text-muted-foreground text-center">
              We have had the privilege of working with a diverse range of clients, delivering exceptional results
              and building lasting relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Our Clients</h3>
                <p className="text-muted-foreground">
                  We serve clients across various industries, from startups to Fortune 500 companies.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
                <p className="text-muted-foreground">
                  "Kings Consults has been instrumental in helping us transform our business and achieve our strategic
                  goals." - John Smith, CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing px-4 bg-gradient-to-br from-primary/5 to-accent/10 scroll-reveal" id="contact">
        <div className="container mx-auto">
          <div className="content-spacing">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Contact Us</h2>
            <p className="text-lg text-muted-foreground text-center">
              Get in touch with us to learn more about our services and how we can help your business thrive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <a href="mailto:info@kingsconsults.com" className="contact-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-primary-foreground animate-pulse-scale"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <p className="text-muted-foreground mt-2">info@kingsconsults.com</p>
              </div>
              <div className="text-center">
                <a href="tel:+15551234567" className="contact-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone text-primary-foreground animate-pulse-scale"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 1.94 1.94 0 0 1-2-2.17v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 6.06 6.06 0 0 0 .7 3.73 6.06 6.06 0 0 0 3.73.7h.03a6.06 6.06 0 0 0 3.73-.7 6.06 6.06 0 0 0 .7-3.73h3a2 2 0 0 1 2 2Z" />
                  </svg>
                </a>
                <p className="text-muted-foreground mt-2">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-icon rounded-full p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-primary-foreground animate-pulse-scale"
                  >
                    <path d="M20.9 4.4a9 9 0 0 0-17.8 0c0 4.5 8.9 16.6 8.9 16.6s8.9-12.1 8.9-16.6Z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </a>
                <p className="text-muted-foreground mt-2">123 Consulting Rd, City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
