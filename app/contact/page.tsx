'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, HelpCircle, Clock, Users, Star, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    contact: 'contact@nemetrix.com',
    action: 'mailto:contact@nemetrix.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us during business hours',
    contact: '+91 8269173728',
    action: 'tel:+918269173728',
  },
];

const offices = [
  {
    city: 'Indore M.P',
    address: 'Shree Krishna Avenue, Limbodi, Indore, Madhya Pradesh, 452020',
    phone: '+91 8269173728',
    email: 'contact@nemetrix.com',
  },
];

const faqs = [
  {
    question: 'How quickly can you start working on my project?',
    answer: 'We typically begin new projects within 1-2 weeks of contract signing, depending on the complexity and our current capacity. For urgent projects, we can often accommodate faster start times.',
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'We need details about your project scope, timeline, data requirements, expected outcomes, and any technical constraints. The more specific information you provide, the more accurate our quote will be.',
  },
  {
    question: 'Do you work with startups or only enterprise clients?',
    answer: 'We work with organizations of all sizes, from early-stage startups to Fortune 500 companies. Our solutions are scalable and can be tailored to fit different budgets and requirements.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. Simple projects may take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, updates, and optimization. Support levels range from basic email support to dedicated account management.',
  },
];

const trustIndicators = [
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
  },
  {
    icon: Star,
    value: '99.9%',
    label: 'Accuracy Rate',
  },
  {
    icon: CheckCircle,
    value: '24/7',
    label: 'Support Available',
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);



  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      if (!formData.email.includes('@')) {
        newErrors.email = 'Email must include an @ symbol';
      } else if (!formData.email.includes('.')) {
        newErrors.email = 'Email must include a domain (e.g., .com, .org)';
      } else {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }

    // Real-time email validation
    if (field === 'email' && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        let emailError = '';
        if (!value.includes('@')) {
          emailError = 'Email must include an @ symbol';
        } else if (!value.includes('.')) {
          emailError = 'Email must include a domain (e.g., .com, .org)';
        } else {
          emailError = 'Please enter a valid email address';
        }
        
        setErrors(prev => ({
          ...prev,
          email: emailError
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started...');
    console.log('Form data:', formData);
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Attempting to save to Firebase...');
      console.log('Database instance:', db);
      
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, 'contact-submissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'new',
        createdAt: new Date().toISOString()
      });
      
      console.log('Form submitted successfully to Firebase!');
      console.log('Document ID:', docRef.id);
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Show custom success message
      setShowSuccess(true);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('Detailed error submitting form to Firebase:');
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Full error:', error);
      
      // Show custom error message
      setShowError(true);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative section-padding-xl overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-10"
          >
            <source src="https://cdn.pixabay.com/vimeo/477018/lights-47701.mp4?width=1920&hash=4b9b9c0b9e4e1e4e4e4e4e4e4e4e4e4e4e4e4e4e" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-secondary-cyan/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-cyan/10 to-secondary-cyan/10 backdrop-blur-sm border border-primary-cyan/20">
                <Mail className="h-12 w-12 text-primary-cyan mx-auto" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-text-dark leading-tight">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-gray mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20 mb-4">
                    <indicator.icon className="h-8 w-8 text-primary-cyan" />
                  </div>
                  <div className="text-3xl font-bold text-text-dark mb-2">{indicator.value}</div>
                  <div className="text-text-gray font-medium">{indicator.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="glass-card border-primary-cyan/30 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-dark mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    Thank you for reaching out. We'll get back to you.
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-text-gray hover:text-text-dark" />
                </button>
              </div>
              
              {/* Progress bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="mt-4 h-1 bg-gradient-to-r from-primary-cyan to-secondary-cyan rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Error Notification */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="glass-card border-red-300 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-dark mb-1">
                    Failed to Send Message
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
                <button
                  onClick={() => setShowError(false)}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-text-gray hover:text-text-dark" />
                </button>
              </div>
              
              {/* Progress bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="mt-4 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-to-b from-transparent to-primary-cyan/5">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-dark">
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Choose the communication method that works best for you. We're here to help and respond quickly to all inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="glass-card border-primary-cyan/10 h-full card-hover relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="p-4 rounded-2xl bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20 inline-block mb-6 group-hover:from-primary-cyan/30 group-hover:to-secondary-cyan/30 transition-all duration-300"
                    >
                      <method.icon className="h-10 w-10 text-primary-cyan" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-text-dark">{method.title}</h3>
                    <p className="text-text-gray mb-6 text-lg">{method.description}</p>
                    <a 
                      href={method.action}
                      className="text-primary-cyan font-semibold text-lg hover:text-secondary-cyan transition-colors duration-300"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-primary-cyan/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-cyan to-secondary-cyan"></div>
                <CardContent className="p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-text-dark">Send us a Message</h2>
                    <p className="text-text-gray text-lg leading-relaxed">
                      Fill out the form below and we'll get back to you. For urgent matters, please call us directly.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} noValidate className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-text-dark font-medium text-lg">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`bg-white border-primary-cyan/20 text-text-dark placeholder:text-text-light h-12 text-lg focus:border-primary-cyan transition-colors ${
                            errors.firstName ? 'form-input-error' : ''
                          }`}
                        />
                        {errors.firstName && (
                          <div className="form-warning">
                            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                            <span>{errors.firstName}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-text-dark font-medium text-lg">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`bg-white border-primary-cyan/20 text-text-dark placeholder:text-text-light h-12 text-lg focus:border-primary-cyan transition-colors ${
                            errors.lastName ? 'form-input-error' : ''
                          }`}
                        />
                        {errors.lastName && (
                          <div className="form-warning">
                            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                            <span>{errors.lastName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-text-dark font-medium text-lg">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        autoComplete="email"
                        className={`bg-white border-primary-cyan/20 text-text-dark placeholder:text-text-light h-12 text-lg focus:border-primary-cyan transition-colors ${
                          errors.email ? 'form-input-error' : ''
                        }`}
                      />
                      {errors.email && (
                        <div className="form-warning">
                          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-text-dark font-medium text-lg">
                        Company <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={`bg-white border-primary-cyan/20 text-text-dark placeholder:text-text-light h-12 text-lg focus:border-primary-cyan transition-colors ${
                          errors.company ? 'form-input-error' : ''
                        }`}
                      />
                      {errors.company && (
                        <div className="form-warning">
                          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                          <span>{errors.company}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-text-dark font-medium text-lg">
                        Service Interest <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className={`bg-white border-primary-cyan/20 text-text-dark h-12 text-lg focus:border-primary-cyan transition-colors ${
                          errors.service ? 'form-input-error' : ''
                        }`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-training">AI/LLM Training</SelectItem>
                          <SelectItem value="data-annotation">Data Annotation</SelectItem>
                          <SelectItem value="transcription">Transcription Services</SelectItem>
                          <SelectItem value="custom-development">Custom Development</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <div className="form-warning">
                          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                          <span>{errors.service}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-text-dark font-medium text-lg">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`bg-white border-primary-cyan/20 text-text-dark placeholder:text-text-light text-lg focus:border-primary-cyan transition-colors resize-none ${
                          errors.message ? 'form-input-error' : ''
                        }`}
                      />
                      {errors.message && (
                        <div className="form-warning">
                          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary w-full h-14 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className={`ml-3 h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Locations & Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-text-dark">Visit Our Office</h2>
                <p className="text-text-gray text-lg leading-relaxed">
                  Visit us at our location or schedule a virtual meeting to discuss your project in detail.
                </p>
              </div>
              
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card border-primary-cyan/10 card-hover relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-cyan/10 to-transparent"></div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6 text-text-dark">{office.city}</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-primary-cyan/10 flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary-cyan" />
                          </div>
                          <p className="text-text-gray leading-relaxed">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-primary-cyan/10 flex-shrink-0">
                            <Phone className="h-5 w-5 text-primary-cyan" />
                          </div>
                          <a href={`tel:${office.phone}`} className="text-text-gray hover:text-primary-cyan transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-primary-cyan/10 flex-shrink-0">
                            <Mail className="h-5 w-5 text-primary-cyan" />
                          </div>
                          <a href={`mailto:${office.email}`} className="text-text-gray hover:text-primary-cyan transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Business Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-primary-cyan/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-cyan to-primary-cyan"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary-cyan/10">
                        <Clock className="h-6 w-6 text-primary-cyan" />
                      </div>
                      <h3 className="text-2xl font-semibold text-text-dark">Business Hours</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-primary-cyan/10">
                        <span className="text-text-gray font-medium">Monday - Friday</span>
                        <span className="text-text-dark font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-primary-cyan/10">
                        <span className="text-text-gray font-medium">Saturday</span>
                        <span className="text-text-dark font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-primary-cyan/10">
                        <span className="text-text-gray font-medium">Sunday</span>
                        <span className="text-text-dark font-semibold">Closed</span>
                      </div>
                      <div className="pt-4 border-t border-primary-cyan/10">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary-cyan" />
                          <p className="text-primary-cyan font-medium">
                            Emergency support available 24/7 for enterprise clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-primary-cyan/5 to-transparent">
        <div className="max-w-4xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-dark">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-text-gray leading-relaxed">
              Get answers to common questions about our services and process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="glass-card border-primary-cyan/10 rounded-xl px-8 py-2 hover:border-primary-cyan/20 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-text-dark hover:text-primary-cyan py-6 text-lg font-medium">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary-cyan/10 flex-shrink-0">
                          <HelpCircle className="h-5 w-5 text-primary-cyan" />
                        </div>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-text-gray pt-4 pb-6 pl-14 text-lg leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 

