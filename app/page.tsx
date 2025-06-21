'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Brain, Database, Mic, Code, Star, ChevronRight, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: 'AI/LLM Training',
    description: 'Custom model training and fine-tuning for your specific use cases with state-of-the-art techniques.',
  },
  {
    icon: Database,
    title: 'Data Annotation',
    description: 'High-quality data labeling services for machine learning projects with 99.9% accuracy guarantee.',
  },
  {
    icon: Mic,
    title: 'Transcription',
    description: 'Accurate audio and video transcription with AI-powered precision in 50+ languages.',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'End-to-end AI solutions and application development tailored to your business needs.',
  },
];

const companies = [
  {
    name: 'OneForma',
    logo: '/oneforma-logo.svg',
  },
  {
    name: 'Pheenix',
    logo: '/Pheenix.png',
  },
  {
    name: 'Shaip',
    logo: '/Shaip-Logo-New.svg',
  },
  {
    name: 'Outlier',
    logo: '/outlier.svg',
  },
];

const stats = [
  { number: '10k+', label: 'Hours of Training Delieverd', description: 'Successfully delivered AI solutions' },
  { number: '98%', label: 'Client Satisfaction', description: 'Consistently exceeding expectations' },
  { number: '100+', label: 'AI Experts', description: 'World-class team of specialists' },
  { number: '24/7', label: 'Support', description: 'Always available when you need us' },
];

const benefits = [
  'Faster time-to-market for AI solutions',
  'Reduced development costs and risks',
  'Access to cutting-edge AI expertise',
  'Scalable and production-ready solutions',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding-xl overflow-hidden">
        {/* Video Background with Space/Planet Theme */}
        <div className="absolute inset-0 z-0">
          {/* Primary video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Video failed to load, using fallback background');
              e.currentTarget.style.display = 'none';
              // Show fallback background
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            {/* <source src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
            <source src="https://videos.pexels.com/video-files/3141208/3141208-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          
          {/* Fallback animated background (hidden by default) */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-dark via-dark-blue to-deep-dark" style={{display: 'none'}}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan/25 via-secondary-cyan/35 to-accent-teal/25 animate-color-shift"></div>
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-2xl animate-light-move"
              style={{
                background: 'radial-gradient(circle, rgba(0, 212, 170, 0.4) 0%, transparent 70%)'
              }}
            ></div>
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-cyan/20 backdrop-blur-md border border-primary-cyan/40 spacing-lg"
            >
              <TrendingUp className="h-4 w-4 text-primary-cyan mr-2" />
              <span className="text-primary-cyan font-medium text-sm">Shaping the future of AI, together</span>
            </motion.div>
            
            <h1 className="heading-xl text-white spacing-lg drop-shadow-lg">
              Empowering Innovation with
              <br />
              <span className="gradient-text-enhanced">Advanced AI Solutions</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto spacing-xl drop-shadow-md leading-relaxed">
              Transform your business with cutting-edge artificial intelligence. From machine learning to custom development, 
              we're your trusted partner in the AI revolution, delivering solutions that drive real results.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center spacing-2xl"
            >
              <Link href="/about">
                <Button size="lg" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="btn-secondary">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-10 floating-animation shadow-2xl border border-primary-cyan/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold gradient-text spacing-xs">{stat.number}</div>
                    <div className="text-primary-cyan font-semibold text-sm spacing-xs">{stat.label}</div>
                    <div className="text-gray-300 text-xs">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center spacing-2xl"
          >
            <h2 className="heading-lg text-text-dark spacing-lg">
              Our <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Comprehensive AI services designed to accelerate your digital transformation journey 
              and unlock new possibilities for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-primary-cyan/10 h-full card-hover group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-cyan to-secondary-cyan flex items-center justify-center mx-auto spacing-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold spacing-md text-text-dark">{feature.title}</h3>
                    <p className="text-text-gray leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-light-blue/20 to-neutral-gray/50">
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-text-dark spacing-xl">
                Why Choose <span className="gradient-text">Nemetrix</span>?
              </h2>
              <div className="space-y-8 spacing-xl">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-cyan to-secondary-cyan flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-text-gray text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/products">
                  <Button className="btn-primary">
                    Learn More About Our Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-10">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI Technology"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-8">
                  <div className="text-2xl font-bold gradient-text spacing-xs">99.9%</div>
                  <div className="text-text-gray text-sm">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Logo Ticker Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center spacing-2xl"
          >
            <h2 className="heading-lg text-text-dark spacing-lg">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Join the ranks of industry leaders who trust us to deliver exceptional AI solutions that drive innovation and growth.
            </p>
          </motion.div>

          {/* Scrolling Logo Ticker */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-20 items-center">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center space-y-6 min-w-[200px] flex-shrink-0"
                >
                  <div className="glass-card rounded-2xl p-10 w-36 h-36 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-text-dark font-semibold text-lg">{company.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center space-y-6 min-w-[200px] flex-shrink-0"
                >
                  <div className="glass-card rounded-2xl p-10 w-36 h-36 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-text-dark font-semibold text-lg">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-spacing">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-secondary-cyan/5"></div>
            <div className="relative">
              <h2 className="heading-lg text-text-dark spacing-lg">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-body spacing-xl max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our AI solutions. 
                Let's discuss how we can help you achieve your goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/about">
                  <Button size="lg" className="btn-primary">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="btn-secondary">
                    Explore Our Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

