
import React from "react";
import { Check, Brain, BarChart, Users } from "lucide-react";

const steps = [
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "AI Analysis",
    description: "Our AI analyzes your business needs and identifies optimization opportunities.",
    color: "bg-ai-purple"
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: "Custom Solutions",
    description: "We develop tailored AI solutions matching your specific requirements.",
    color: "bg-ai-blue"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Implementation & Training",
    description: "Seamless integration with your existing systems and comprehensive team training.",
    color: "bg-ai-pink"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How <span className="gradient-text">NexusAI</span> Works for You
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've simplified the process of implementing AI in your business, 
              making advanced technology accessible and impactful.
            </p>
            
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${step.color} h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 border border-green-100 rounded-xl bg-green-50">
              <h4 className="font-semibold text-lg flex items-center mb-3">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Ongoing Support & Optimization
              </h4>
              <p className="text-gray-700">
                Our team continuously monitors your AI solutions, providing updates, optimizations, 
                and support to ensure maximum performance and ROI.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-ai-purple/90 to-ai-pink/90 p-10 flex items-center justify-center">
                <div className="space-y-6 text-white text-center">
                  <h3 className="text-2xl font-bold">Results You Can Expect</h3>
                  
                  <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold">40%</p>
                      <p className="text-sm">Increase in Operational Efficiency</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold">65%</p>
                      <p className="text-sm">Reduction in Manual Data Processing</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold">3.5x</p>
                      <p className="text-sm">Customer Engagement Improvement</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold">28%</p>
                      <p className="text-sm">Average Revenue Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
