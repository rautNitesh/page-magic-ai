
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">
              NexusAI
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering businesses with intelligent AI solutions that drive 
              innovation and create meaningful impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">NexusAssist</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">NexusInsights</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">NexusAutomate</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">NexusSecure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ai-purple transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 NexusAI, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-ai-purple text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-ai-purple text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-ai-purple text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
