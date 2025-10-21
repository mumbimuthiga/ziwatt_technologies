export default function Testimonials() {
  const testimonials = [
    {
      quote: "Their team transformed our entire infrastructure. The results exceeded all expectations, and their support throughout the process was exceptional.",
      name: "Sarah Chen",
      role: "CTO, TechCorp Industries",
      initials: "SC",
      color: "from-pink-500 to-orange-500"
    },
    {
      quote: "Working with this team has been a game-changer. Their expertise in cloud solutions helped us scale globally while reducing costs significantly.",
      name: "Michael Rodriguez",
      role: "CEO, Global Finance Solutions",
      initials: "MR",
      color: "from-pink-500 to-orange-500"
    },
    {
      quote: "The custom solution they built for us is exactly what we needed. Their attention to detail and commitment to quality is unmatched.",
      name: "Emily Watson",
      role: "Operations Director, InnovateCo",
      initials: "EW",
      color: "from-pink-500 to-orange-500"
    },
    {
      quote: "The custom solution they built for us is exactly what we needed. Their attention to detail and commitment to quality is unmatched.",
      name: "Emily Watson",
      role: "Operations Director, InnovateCo",
      initials: "EW",
      color: "from-pink-500 to-orange-500"
    },
    {
      quote: "The custom solution they built for us is exactly what we needed. Their attention to detail and commitment to quality is unmatched.",
      name: "Emily Watson",
      role: "Operations Director, InnovateCo",
      initials: "EW",
      color: "from-pink-500 to-orange-500"
    },
    {
      quote: "The custom solution they built for us is exactly what we needed. Their attention to detail and commitment to quality is unmatched.",
      name: "Emily Watson",
      role: "Operations Director, InnovateCo",
      initials: "EW",
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-purple-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}