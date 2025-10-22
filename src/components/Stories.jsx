import React from 'react';

const Stories = () => {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["TechCorp Industries", "Manufacturing"],
      title: "Digital Transformation Drives 300% Efficiency Increase",
      description: "We helped TechCorp modernize their legacy systems, implementing cloud infrastructure and AI-powered automation that transformed their operations.",
      metrics: [
        { value: "300%", label: "Efficiency Increase" },
        { value: "45%", label: "Cost Reduction" },
        { value: "-60%", label: "Time to Market" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Global Finance Solutions", "Financial Services"],
      title: "Secure Platform Processes $2B+ in Transactions",
      description: "Built a robust, scalable fintech platform with enterprise-grade security, enabling seamless global transactions while maintaining compliance.",
      metrics: [
        { value: "$2B+", label: "Transactions" },
        { value: "99.99%", label: "Uptime" },
        { value: "500K+", label: "Users" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            Real results from businesses we've helped transform
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {story.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {story.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;