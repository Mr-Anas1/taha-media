import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their vision becomes reality through collaborative partnerships."
    },
    {
      icon: <Target className="h-10 w-10 text-pink-600" />,
      title: "Results-Driven",
      description: "Every project is executed with precision and a clear focus on delivering measurable results that drive business growth."
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-500" />,
      title: "Innovation",
      description: "We stay ahead of trends and technology to provide cutting-edge solutions that keep you competitive in the digital landscape."
    },
    {
      icon: <Award className="h-10 w-10 text-indigo-600" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project, from concept to completion, ensuring exceptional outcomes."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full mb-6">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We are a creative digital agency passionate about helping businesses thrive in the digital landscape. 
            With expertise spanning video production, social media, marketing, and development, we deliver 
            comprehensive solutions that drive growth and create lasting impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}