"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center space-x-3"
                  >
                    <Icon size={20} />
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Circular Profile Photo */}
          <div className="mb-6">
            <img
              src="/portfolio_pic.JPG"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Aleister Alinsunurin
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Full Stack Developer | Cybersecurity Enthusiast | Steady Learner
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 text-center">
            This is the About section. Add your bio and information here.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
          <p className="text-lg text-gray-600 text-center">
            This is the Skills section. Display your technical skills here.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
          <p className="text-lg text-gray-600 text-center">
            This is the Projects section. Showcase your work here.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact</h2>
          <p className="text-lg text-gray-600 text-center">
            This is the Contact section. Add your contact form here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;