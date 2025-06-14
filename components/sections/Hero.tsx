'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full mb-6">
              ✨ Creative Digital Agency
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Taha
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Media
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We transform brands through stunning visuals, strategic marketing, and cutting-edge technology. 
            Your vision, our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:border-purple-400 hover:text-purple-600"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}