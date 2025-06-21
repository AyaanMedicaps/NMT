import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-card-dark border-t border-primary-cyan/20">
      <div className="max-w-7xl mx-auto container-spacing py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold gradient-text">Nemetrix Technologies</span>
            </div>
            <p className="text-text-gray mb-6 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge AI solutions. From machine learning to data annotation, 
              we're your trusted partner in the AI revolution.
            </p>
            <div className="flex space-x-5">
              <a href="https://x.com/Nemetrix11?t=YQNIpB12gEU3tM9STLtJqQ&s=09" className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan hover:bg-primary-cyan hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/nemetrix-technologies/" className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan hover:bg-primary-cyan hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nemetrix_technologies?igsh=bXhqMDhhaGtnMXMz" className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan hover:bg-primary-cyan hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-text-dark font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-text-gray hover:text-primary-cyan transition-colors">AI/LLM Training</Link></li>
              <li><Link href="/products" className="text-text-gray hover:text-primary-cyan transition-colors">Data Annotation</Link></li>
              <li><Link href="/products" className="text-text-gray hover:text-primary-cyan transition-colors">Transcription</Link></li>
              <li><Link href="/products" className="text-text-gray hover:text-primary-cyan transition-colors">Custom Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-dark font-semibold mb-6">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-text-gray text-sm">
                <MapPin className="h-4 w-4 text-primary-cyan" />
                <span>Indore, M.P</span>
              </div>
              <div className="flex items-center space-x-3 text-text-gray text-sm">
                <Phone className="h-4 w-4 text-primary-cyan" />
                <span>+91 8269173728</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-cyan/20 mt-12 pt-8 text-center">
          <p className="text-text-gray text-sm">&copy; 2025 Nemetrix Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}