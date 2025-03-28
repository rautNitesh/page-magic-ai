
import React from "react";
import { 
  Brain, 
  LineChart, 
  MessageSquare, 
  Shield, 
  Zap, 
  Database 
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-12 w-12 text-ai-purple" />,
    title: "Natural Language Processing",
    description: "Understand and generate human language with remarkable accuracy and context awareness."
  },
  {
    icon: <LineChart className="h-12 w-12 text-ai-blue" />,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions using advanced machine learning algorithms."
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-ai-pink" />,
    title: "Conversational AI",
    description: "Create engaging, personalized customer interactions through intelligent chatbots."
  },
  {
    icon: <Shield className="h-12 w-12 text-ai-purple" />,
    title: "Enhanced Security",
    description: "Protect your systems with AI-powered threat detection and real-time monitoring."
  },
  {
    icon: <Zap className="h-12 w-12 text-ai-blue" />,
    title: "Workflow Automation",
    description: "Streamline processes and eliminate repetitive tasks through intelligent automation."
  },
  {
    icon: <Database className="h-12 w-12 text-ai-pink" />,
    title: "Data Processing",
    description: "Transform raw data into actionable insights with our powerful processing tools."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Features to <span className="gradient-text">Transform</span> Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our comprehensive suite of AI tools can help you innovate, 
            optimize, and grow in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 rounded-2xl inline-block p-2 bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
