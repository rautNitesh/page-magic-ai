
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small businesses getting started with AI.",
    features: [
      "Basic NLP capabilities",
      "1 AI assistant",
      "Data processing up to 100MB",
      "Email support",
      "Weekly insights reports"
    ],
    highlighted: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$299",
    description: "Ideal for growing companies with expanding AI needs.",
    features: [
      "Advanced NLP & predictive analytics",
      "3 AI assistants",
      "Data processing up to 1GB",
      "Priority support",
      "Daily insights & recommendations",
      "Custom AI training"
    ],
    highlighted: true,
    buttonText: "Popular Choice"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solution for large-scale operations.",
    features: [
      "Full suite of AI capabilities",
      "Unlimited AI assistants",
      "Unlimited data processing",
      "24/7 dedicated support",
      "Advanced security features",
      "Custom AI model development",
      "On-premise deployment options"
    ],
    highlighted: false,
    buttonText: "Contact Sales"
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that's right for your business, with no hidden fees 
            and monthly or annual billing options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`${
                plan.highlighted 
                  ? 'border-2 border-ai-purple shadow-lg relative -mt-4 md:-mt-8' 
                  : 'border border-gray-200 shadow-md'
              } rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-xl flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ai-purple text-white text-sm font-semibold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={plan.highlighted ? "btn-primary" : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"} 
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6">
            Contact our team for a tailored AI package designed specifically for your industry and requirements.
          </p>
          <Button variant="outline" className="border-ai-purple/30 text-ai-purple hover:bg-ai-purple/5">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
