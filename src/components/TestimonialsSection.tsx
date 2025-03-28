
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexusAI has transformed our customer service operations. We've seen a 40% reduction in response times and significantly improved customer satisfaction scores.",
    name: "Sarah Johnson",
    title: "Director of Customer Experience, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    stars: 5
  },
  {
    quote: "Implementing NexusAI's predictive analytics tools has given us insights we never thought possible. Our strategic decision-making is now backed by solid data.",
    name: "Michael Chen",
    title: "Chief Data Officer, Nova Innovations",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5
  },
  {
    quote: "The team at NexusAI made the transition to AI-powered workflows seamless. Their support throughout the implementation was exceptional.",
    name: "Emily Rodriguez",
    title: "Operations Manager, Horizon Solutions",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    stars: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our clients about how NexusAI has transformed their businesses 
            and delivered exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-ai-purple/20" />
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">IBM</div>
            <div className="text-2xl font-bold text-gray-400">Oracle</div>
            <div className="text-2xl font-bold text-gray-400">Adobe</div>
            <div className="text-2xl font-bold text-gray-400">Salesforce</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
