import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Portfolio() {
  const projects = [
    {
      title: "PrimeLink Global",
      description:
        "Engaging social media content creation and management for a leading business solutions provider",
      category: "Content Creation",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Instagram", "Reels", "Social Media"],
      gradient: "from-purple-500 to-indigo-500",
      url: "https://www.instagram.com/primelink_global/",
    },
    {
      title: "Personal Branding",
      description:
        "Professional personal branding content that showcases expertise and builds authority",
      category: "Content Creation",
      image:
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Social Media", "Content Strategy"],
      gradient: "from-red-500 to-pink-500",
      url: "https://drive.google.com/file/d/1X4c2p8rmjzA-04LZcL6woFQUsZXF0csF/view?usp=drive_link",
    },
    {
      title: "Robin Cars",
      description:
        "Dynamic automotive content showcasing luxury vehicles and dealership services",
      category: "Content Creation",
      image:
        "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Automotive", "Reels", "Social Media"],
      gradient: "from-blue-500 to-cyan-500",
      url: "https://drive.google.com/file/d/1na2C3oBu_K_l10zZlPBZO9uIkzO1sr6I/view?usp=drive_link",
    },
    {
      title: "Japan Cars",
      description:
        "Captivating content highlighting Japanese automotive excellence and unique features",
      category: "Content Creation",
      image:
        "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Automotive", "Reels", "Social Media"],
      gradient: "from-orange-500 to-yellow-500",
      url: "https://drive.google.com/file/d/1lA2PIaFd1Ve6o3V7JTFeqWVHE0dDRNCw/view?usp=drive_link",
    },
    {
      title: "Koor Archery",
      description:
        "Engaging content showcasing archery equipment and sports excellence",
      category: "Content Creation",
      image:
        "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Sports", "Reels", "Social Media"],
      gradient: "from-green-500 to-emerald-500",
      url: "https://drive.google.com/file/d/1XxkqjmwCNUjqSHx4c9ijaarAglmt9FOi/view?usp=drive_link",
    },
    {
      title: "Sabeena Digital Media Services",
      description:
        "Professional website development and digital media services for a leading media company",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Website", "Digital Media", "Web Development"],
      gradient: "from-pink-500 to-rose-500",
      url: "https://sabeenadigitalms.in",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full mb-6">
            Our Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Success
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Explore our recent projects and see how we've helped businesses
            achieve extraordinary results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:-translate-y-2"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                  ></div>
                </div>
                <CardContent className="p-6">
                  <Badge
                    className={`mb-4 bg-gradient-to-r ${project.gradient} text-white border-0 hover:opacity-90`}
                  >
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
