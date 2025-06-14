import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Users, Search, Megaphone, Globe } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Video className="h-10 w-10 text-red-500" />,
      title: "Content Creation",
      description:
        "Engaging and viral content creation for social media platforms that captures attention and drives engagement.",
      features: [
        "Social Media Content",
        "Reels & Shorts",
        "Trending Content",
        "Viral Strategy",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Camera className="h-10 w-10 text-blue-500" />,
      title: "Videography & Editing",
      description:
        "Professional video production and post-production services that bring your vision to life with cinematic quality.",
      features: [
        "Video Production",
        "Professional Editing",
        "Motion Graphics",
        "Color Grading",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-10 w-10 text-green-500" />,
      title: "Influencer Promotions & Testimonials",
      description:
        "Strategic influencer partnerships and authentic testimonials that build trust and expand your reach.",
      features: [
        "Influencer Marketing",
        "Testimonial Videos",
        "Brand Collaborations",
        "Social Proof",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Search className="h-10 w-10 text-purple-500" />,
      title: "Google Ranking (SEO) & Paid Ads",
      description:
        "Comprehensive digital marketing solutions to improve your online visibility and drive targeted traffic.",
      features: [
        "SEO Optimization",
        "Google Ads",
        "PPC Campaigns",
        "Analytics & Reporting",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-orange-500" />,
      title: "Guerrilla Marketing Campaigns",
      description:
        "Creative and unconventional marketing strategies that make a big impact with innovative approaches.",
      features: [
        "Viral Campaigns",
        "Street Marketing",
        "Event Activation",
        "Brand Awareness",
      ],
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      title: "Web Development",
      description:
        "Custom website development that combines stunning design with powerful functionality.",
      features: [
        "Responsive Design",
        "E-commerce",
        "CMS Integration",
        "Performance Optimization",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            What We
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Comprehensive digital solutions tailored to elevate your business
            and achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden bg-white"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
