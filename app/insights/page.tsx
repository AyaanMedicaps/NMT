'use client';

import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ChevronRight, Filter, Tag, TrendingUp, BarChart3, Users, Globe, ArrowRight, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const categories = [
  'All',
  'AI Development',
  'Data Science',
  'Machine Learning',
  'Healthcare AI',
  'Industry Insights',
  'Technology Trends',
];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnostics, treatment planning, and patient outcomes across healthcare systems worldwide.',
    content: 'Healthcare AI is transforming medical practice...',
    author: 'Dr. Sarah Martinez',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Healthcare AI',
    tags: ['AI', 'Healthcare', 'Medical Imaging', 'Diagnostics'],
    image: 'https://images.pexels.com/photos/3984358/pexels-photo-3984358.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Data Quality in Machine Learning: Best Practices',
    excerpt: 'Why high-quality training data is crucial for building reliable AI models and how to ensure your datasets meet the highest standards.',
    content: 'Data quality is fundamental to ML success...',
    author: 'Alex Thompson',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Data Science',
    tags: ['Data Quality', 'Machine Learning', 'Training Data'],
    image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 3,
    title: 'LLM Fine-tuning: A Comprehensive Guide',
    excerpt: 'Learn the best practices for fine-tuning large language models for specific domains and applications.',
    content: 'Fine-tuning LLMs requires careful consideration...',
    author: 'David Chen',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'AI Development',
    tags: ['LLM', 'Fine-tuning', 'Natural Language Processing'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 4,
    title: 'Responsible AI: Ethics and Governance in 2025',
    excerpt: 'Examining the critical importance of ethical AI development and implementation in modern business environments.',
    content: 'As AI becomes more prevalent...',
    author: 'Emily Rodriguez',
    date: '2025-01-08',
    readTime: '10 min read',
    category: 'Industry Insights',
    tags: ['Ethics', 'AI Governance', 'Responsible AI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 5,
    title: 'Computer Vision in Manufacturing: Use Cases',
    excerpt: 'How computer vision technology is revolutionizing quality control, safety monitoring, and operational efficiency.',
    content: 'Computer vision applications in manufacturing...',
    author: 'Michael Zhang',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Technology Trends',
    tags: ['Computer Vision', 'Manufacturing', 'Quality Control'],
    image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Natural Language Processing: Latest Advances',
    excerpt: 'Discover the latest breakthroughs in NLP technology and their practical applications in business.',
    content: 'Recent advances in NLP have opened...',
    author: 'Lisa Wang',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Machine Learning',
    tags: ['NLP', 'Language Models', 'Text Analytics'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const insights = [
  {
    id: 1,
    title: 'AI Market Trends 2025: Industry Report',
    type: 'Market Report',
    description: 'Comprehensive analysis of AI market trends, growth patterns, and future predictions for 2025.',
    downloadUrl: '#',
    publishDate: '2025-01-15',
    category: 'Market Research',
    icon: TrendingUp,
    featured: true,
  },
  {
    id: 2,
    title: 'ROI of AI Implementation: Case Studies',
    type: 'White Paper',
    description: 'Real-world case studies showing measurable ROI from AI implementations across industries.',
    downloadUrl: '#',
    publishDate: '2025-01-10',
    category: 'Business Value',
    icon: BarChart3,
    featured: true,
  },
  {
    id: 3,
    title: 'Enterprise AI Adoption Survey Results',
    type: 'Survey Report',
    description: 'Insights from 500+ enterprise leaders on AI adoption challenges and success factors.',
    downloadUrl: '#',
    publishDate: '2025-01-08',
    category: 'Enterprise',
    icon: Users,
    featured: false,
  },
  {
    id: 4,
    title: 'Global AI Talent Landscape 2025',
    type: 'Research Paper',
    description: 'Analysis of AI talent distribution, skill gaps, and hiring trends worldwide.',
    downloadUrl: '#',
    publishDate: '2025-01-05',
    category: 'Talent & Skills',
    icon: Globe,
    featured: false,
  },
];

const statistics = [
  {
    number: '85%',
    label: 'Companies Plan AI Investment',
    description: 'Organizations planning to increase AI investment in 2025',
  },
  {
    number: '3.2x',
    label: 'Average ROI',
    description: 'Return on investment for successful AI implementations',
  },
  {
    number: '67%',
    label: 'Productivity Increase',
    description: 'Average productivity improvement with AI adoption',
  },
  {
    number: '42%',
    label: 'Cost Reduction',
    description: 'Average operational cost reduction through AI',
  },
];

const industries = [
  {
    name: 'Healthcare',
    growthRate: '34%',
    description: 'AI-powered diagnostics and treatment optimization',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Finance',
    growthRate: '28%',
    description: 'Fraud detection and algorithmic trading',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Manufacturing',
    growthRate: '31%',
    description: 'Predictive maintenance and quality control',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Retail',
    growthRate: '26%',
    description: 'Personalization and inventory optimization',
    color: 'from-orange-500 to-red-600',
  },
];

const keyFindings = [
  {
    title: 'AI Investment Surge',
    description: 'Enterprise AI spending is expected to grow by 40% in 2025, with focus on practical applications.',
    icon: TrendingUp,
  },
  {
    title: 'Talent Shortage',
    description: 'Critical shortage of AI specialists continues, with 60% of companies struggling to hire.',
    icon: Users,
  },
  {
    title: 'Ethical AI Priority',
    description: 'Organizations prioritizing responsible AI development and transparent decision-making.',
    icon: Star,
  },
  {
    title: 'Cloud-First Approach',
    description: '78% of AI projects are deployed on cloud platforms for scalability and flexibility.',
    icon: Globe,
  },
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI <span className="gradient-text">Insights</span> & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-4xl mx-auto">
              Discover the latest trends, research findings, and industry insights that are shaping the future of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Research</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
              In-depth analysis and reports on the most important developments in AI technology and adoption.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {insights.filter(insight => insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 h-full hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                        <insight.icon className="h-8 w-8 text-blue-400" />
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="border-blue-400 text-blue-400 mb-3">
                        {insight.type}
                      </Badge>
                      <h3 className="text-2xl font-semibold mb-3 text-white dark:text-white light:text-gray-900">{insight.title}</h3>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-4">{insight.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {insight.publishDate}
                      </div>
                      <Button variant="outline" className="border-white/20 dark:border-white/20 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 h-full hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                        <insight.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="border-blue-400 text-blue-400 mb-2 text-xs">
                          {insight.type}
                        </Badge>
                        <h3 className="text-lg font-semibold mb-2 text-white dark:text-white light:text-gray-900">{insight.title}</h3>
                        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                      <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">{insight.publishDate}</div>
                      <Button size="sm" variant="outline" className="border-white/20 dark:border-white/20 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest insights, trends, and best practices in artificial intelligence and machine learning.
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 dark:bg-white/5 light:bg-gray-50 border-white/10 dark:border-white/10 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-gray-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600" 
                      : "border-white/20 dark:border-white/20 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 overflow-hidden hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white dark:text-white light:text-gray-900">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">
                        By {featuredPost.author}
                      </div>
                      <Button variant="outline" className="border-white/20 dark:border-white/20 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 h-full hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors group cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white dark:text-white light:text-gray-900 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <div key={tag} className="flex items-center">
                          <Tag className="h-3 w-3 text-gray-500 mr-1" />
                          <span className="text-xs text-gray-500">{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                      <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                        {post.author}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industry Growth Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="gradient-text">Growth</span> Rates
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
              AI adoption and growth across key industries in 2025.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 h-full hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} mx-auto mb-4 flex items-center justify-center`}>
                      <div className="text-2xl font-bold text-white">{industry.growthRate}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white dark:text-white light:text-gray-900">{industry.name}</h3>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="gradient-text">Findings</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
              Critical insights from our latest research on AI trends and adoption patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFindings.map((finding, index) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-white/10 dark:border-white/10 light:border-gray-200 h-full hover:border-white/20 dark:hover:border-white/20 light:hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex-shrink-0">
                        <finding.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white dark:text-white light:text-gray-900">{finding.title}</h3>
                        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">{finding.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our research updates and get the latest AI insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/5 dark:bg-white/5 light:bg-gray-50 border-white/10 dark:border-white/10 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

