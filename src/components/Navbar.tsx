
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              NexusAI
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-ai-purple transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-ai-purple transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-ai-purple transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-ai-purple transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-ai-purple/30 text-ai-purple hover:bg-ai-purple/5">
              Log in
            </Button>
            <Button className="bg-ai-purple hover:bg-ai-purple/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-ai-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-ai-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-ai-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-ai-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="border-ai-purple/30 text-ai-purple w-full">
                  Log in
                </Button>
                <Button className="bg-ai-purple hover:bg-ai-purple/90 text-white w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
