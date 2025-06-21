'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap, Award, Globe, Lightbulb, Shield, Clock, User, Handshake, Building, TrendingUp, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with AI technology.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building reliable, secure, and ethical AI solutions for our clients.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Creating meaningful solutions that make a real difference.',
  },
  {
    icon: Globe,
    title: 'Collaboration',
    description: 'Working together to achieve extraordinary results.',
  },
];

const team = [
  {
    name: 'Appu Tejra',
    role: 'AI Manager',
    bio: 'AI Manager and IIT Ropar graduate leading ML system design.',
  },
  {
    name: 'Anant Bahore',
    role: 'Project Lead',
    bio: 'Development Manager overseeing all tech operations.',
  },
  {
    name: 'Samruddhi Chaodhari',
    role: 'Lead Data Annotation/Transcription',
    bio: 'Directs data annotation and transcription initiatives with a focus on quality and scalability.',
  },
  {
    name: 'Ishika Bhartiya',
    role: 'Team Lead',
    bio: 'Full-stack developer and oftware tester, contributing to product delivery and stability.',
  },
];

const milestones = [
  { 
    year: '2022',
    icon: Handshake,
    title: 'Strategic Client Onboarding', 
    description: 'Successfully collaborated with AI-driven platforms such as Outlier AI, Soul AI, and Appen, playing a pivotal role in data labeling and LLM training workflows, including contributions toward Google Gemini.' 
  },
  { 
    year: '2023',
    icon: Building,
    title: 'Scalable Infrastructure & Team', 
    description: 'Built a flexible and reliable workforce of 50+ AI professionals, enabling the delivery of high-accuracy transcription, audio labeling, and multi-domain annotation at scale.' 
  },
  { 
    year: '2024',
    icon: TrendingUp,
    title: 'Operational Growth', 
    description: 'Processed over 1 lakh data units, annotated 100,000+ images, and delivered 10,000+ hours of human feedback for fine-tuning language models.' 
  },
  { 
    year: '2025',
    icon: Globe,
    title: 'Recognition & Expansion', 
    description: 'Gained visibility in the AI annotation ecosystem and began extending operations into global projects, including Europe and Asia through remote delivery partnerships.' 
  },
];



export default function About() {
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
              About <span className="gradient-text">Nemetrix</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-gray max-w-4xl mx-auto">
              We're on a mission to make AI accessible, reliable, and transformative for businesses worldwide. 
              Founded by AI researchers and industry experts, we bridge the gap between cutting-edge research and practical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-text-gray spacing-lg text-lg leading-relaxed">
                Nemetrix Technologies was born from a simple observation: while AI research was advancing rapidly, 
                businesses struggled to implement these breakthroughs effectively. Our founders, coming from 
                prestigious institutions and companies, saw an opportunity to bridge this gap.
              </p>
              <p className="text-text-gray text-lg leading-relaxed">
                Today, we've helps companies transform their operations with AI, from startups to 
                enterprise organizations. Our approach combines rigorous research methodology with practical 
                engineering excellence, ensuring that every solution we deliver drives real business value.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10"
            >
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-primary-cyan to-secondary-cyan flex items-center justify-center">
                      <milestone.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-dark text-lg spacing-xs">{milestone.title}</h3>
                      <p className="text-text-gray">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              The principles that guide everything we do and shape the culture of our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-primary-cyan/10 h-full card-hover group">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20 inline-block spacing-lg group-hover:from-primary-cyan/30 group-hover:to-secondary-cyan/30 transition-colors">
                      <value.icon className="h-8 w-8 text-primary-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold spacing-md text-text-dark">{value.title}</h3>
                    <p className="text-text-gray leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              World-class AI experts, researchers, and engineers dedicated to pushing the boundaries of what's possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-primary-cyan/10 h-full card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="relative spacing-lg">
                      <div className="w-28 h-28 rounded-full mx-auto bg-gradient-to-r from-primary-cyan/20 to-secondary-cyan/20 flex items-center justify-center">
                        <User className="h-14 w-14 text-primary-cyan" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold spacing-xs text-text-dark">{member.name}</h3>
                    <div className="text-primary-cyan spacing-md font-medium">{member.role}</div>
                    <p className="text-text-gray text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
