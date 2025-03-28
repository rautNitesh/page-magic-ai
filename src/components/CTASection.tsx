
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-ai-purple to-ai-pink text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mix-blend-overlay opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">
            Join thousands of businesses already leveraging the power of NexusAI to innovate, 
            optimize, and grow in today's competitive landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-white text-ai-purple hover:bg-white/90 h-14 px-8 text-lg">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="pt-6 border-t border-white/20 max-w-lg mx-auto">
            <p className="text-sm mb-4 opacity-80">
              Stay updated with the latest in AI technology and NexusAI features
            </p>
            <div className="flex max-w-md mx-auto">
              <div className="flex-grow relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-10 pr-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
                />
              </div>
              <Button className="rounded-l-none bg-ai-dark hover:bg-ai-dark/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
