
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-hero-pattern">
      {/* Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ai-light border border-ai-purple/20 text-ai-purple text-sm font-medium mb-4">
              <Sparkles size={16} className="mr-2" />
              <span>Introducing NexusAI</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">AI-Powered Solutions</span> for the
              <br /> Modern World
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Leverage the power of artificial intelligence to transform your business, 
              streamline workflows, and unlock new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary h-12 px-8 text-lg">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary h-12 px-8 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">TK</div>
                <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white text-xs">MP</div>
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs">+</div>
              </div>
              <p className="text-sm text-gray-600">Trusted by 1000+ companies worldwide</p>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
              
              <div className="relative glass-card p-6 md:p-10 overflow-hidden animate-float">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ai-purple to-ai-pink flex items-center justify-center">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">NexusAI Assistant</h3>
                      <p className="text-xs text-gray-500">Always learning, always improving</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Online</span>
                </div>
                
                <div className="py-6 space-y-4">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-sm">What can NexusAI do for my business?</p>
                  </div>
                  
                  <div className="bg-ai-purple/10 rounded-2xl rounded-tr-none p-4 ml-auto max-w-xs">
                    <p className="text-sm">I can help automate tasks, analyze data, provide insights, and enhance customer experiences. What specific challenges are you facing?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-sm">How long does implementation take?</p>
                  </div>
                  
                  <div className="bg-ai-purple/10 rounded-2xl rounded-tr-none p-4 ml-auto max-w-xs">
                    <p className="text-sm">Most clients are up and running within 2-3 days. Our team will guide you through every step of the process!</p>
                  </div>
                </div>
                
                <div className="relative mt-4">
                  <input 
                    type="text" 
                    placeholder="Ask NexusAI a question..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ai-purple/30"
                  />
                  <Button className="absolute right-1 top-1 h-8 w-8 p-0 flex items-center justify-center rounded-md bg-ai-purple text-white">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
