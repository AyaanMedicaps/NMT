'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Mic, Code, Check, ArrowRight, MessageSquare, Hospital, DollarSign, ShoppingBag, Factory, BookOpen, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    icon: Brain,
    title: 'AI/LLM Training',
    description: 'Custom model training and fine-tuning for your specific use cases.',
    features: [
      'Custom model architecture design',
      'Large language model fine-tuning',
      'Transfer learning optimization',
      'Model compression and deployment',
      'Performance monitoring and retraining',
    ],
  },
  {
    icon: Database,
    title: 'Data Annotation',
    description: 'High-quality data labeling services for machine learning projects.',
    features: [
      'Image and video annotation',
      'Text classification and NER',
      'Audio transcription and labeling',
      'Quality assurance and validation',
      '99.9% accuracy guarantee',
    ],
  },
  {
    icon: Mic,
    title: 'Transcription Services',
    description: 'Accurate audio and video transcription with AI-powered precision.',
    features: [
      'Multi-language support (50+ languages)',
      'Speaker identification and diarization',
      'Custom vocabulary and terminology',
      'Real-time transcription capabilities',
      'HIPAA and GDPR compliant',
    ],
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'End-to-end AI solutions and application development.',
    features: [
      'Full-stack AI application development',
      'API integration and deployment',
      'Cloud infrastructure setup',
      'Monitoring and maintenance',
      'Technical documentation and training',
    ],
  },
];

const useCases = [
  {
    industry: 'Healthcare',
    title: 'Medical Imaging Analysis',
    description: 'AI-powered diagnostic tools for radiology and pathology.',
    icon: Hospital,
  },
  {
    industry: 'Finance',
    title: 'Fraud Detection',
    description: 'Real-time transaction monitoring and risk assessment.',
    icon: DollarSign,
  },
  {
    industry: 'Retail',
    title: 'Personalized Recommendations',
    description: 'AI-driven product recommendations and customer insights.',
    icon: ShoppingBag,
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    description: 'IoT-enabled equipment monitoring and failure prediction.',
    icon: Factory,
  },
  {
    industry: 'Education',
    title: 'Adaptive Learning',
    description: 'Personalized learning paths and student performance analytics.',
    icon: BookOpen,
  },
  {
    industry: 'Logistics',
    title: 'Route Optimization',
    description: 'AI-powered supply chain and delivery optimization.',
    icon: Truck,
  },
];

const faqs = [
  {
    question: 'How long does it take to train a custom AI model?',
    answer: 'The timeline varies depending on the complexity and size of your dataset. Typically, simple models can be trained in 1-2 weeks, while complex deep learning models may take 4-8 weeks including data preparation, training, and validation.',
  },
  {
    question: 'What data formats do you support for annotation?',
    answer: 'We support a wide range of formats including images (JPEG, PNG, TIFF), videos (MP4, AVI, MOV), audio files (WAV, MP3, FLAC), and text documents (TXT, CSV, JSON, XML). We can also work with custom formats as needed.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive support packages including model monitoring, performance optimization, bug fixes, and feature updates. Our support plans range from basic email support to dedicated technical account management.',
  },
  {
    question: 'Can you work with sensitive or confidential data?',
    answer: 'Absolutely. We have strict data security protocols in place and can sign NDAs, work within secure environments, and comply with regulations like HIPAA, GDPR, and SOC 2. All data is encrypted in transit and at rest.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing varies by service type. We offer both project-based pricing and subscription models. For custom development, we provide detailed quotes after understanding your requirements. Contact us for a personalized proposal.',
  },
];

const benefits = [
  'Faster time-to-market for AI solutions',
  'Reduced development costs and risks',
  'Access to cutting-edge AI expertise',
  'Scalable and production-ready solutions',
  'Ongoing support and maintenance',
  'Compliance with industry standards',
];

export default function Products() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding-lg">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold spacing-lg text-text-dark">
              AI <span className="gradient-text">Solutions</span> That Deliver
            </h1>
            <p className="text-xl md:text-2xl text-text-gray max-w-4xl mx-auto">
              Comprehensive AI services designed to accelerate your digital transformation. 
              From custom model training to full-scale application development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center spacing-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold spacing-lg text-text-dark">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              End-to-end AI solutions tailored to your business needs and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-primary-cyan/10 h-full hover:border-primary-cyan/20 transition-colors">
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-6 spacing-xl">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20">
                        <service.icon className="h-8 w-8 text-primary-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold spacing-sm text-text-dark">{service.title}</h3>
                        <p className="text-text-gray text-lg">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <Check className="h-5 w-5 text-primary-cyan flex-shrink-0" />
                          <span className="text-text-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold spacing-xl text-text-dark">
                Why Choose <span className="gradient-text">Nemetrix</span>?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary-cyan to-dark-cyan flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-text-gray text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text spacing-xs">500+</div>
                  <div className="text-text-gray">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text spacing-xs">98%</div>
                  <div className="text-text-gray">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text spacing-xs">24/7</div>
                  <div className="text-text-gray">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text spacing-xs">50+</div>
                  <div className="text-text-gray">Industries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center spacing-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold spacing-lg text-text-dark">
              Industry <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Discover how our AI solutions are transforming businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-primary-cyan/10 h-full hover:border-primary-cyan/20 transition-colors">
                  <CardContent className="p-8">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20 inline-block spacing-lg">
                      <useCase.icon className="h-8 w-8 text-primary-cyan" />
                    </div>
                    <div className="text-sm text-primary-cyan spacing-xs">{useCase.industry}</div>
                    <h3 className="text-xl font-semibold spacing-md text-text-dark">{useCase.title}</h3>
                    <p className="text-text-gray leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center spacing-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold spacing-lg text-text-dark">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-text-gray">
              Get answers to common questions about our AI solutions and services.
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
                <AccordionItem key={index} value={`item-${index}`} className="glass-card border-primary-cyan/10 rounded-lg px-8 py-2">
                  <AccordionTrigger className="text-text-dark hover:text-primary-cyan text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-gray leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
