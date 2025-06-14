"use client";

import { Card } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full mb-6">
            Our Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Watch Our
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Showreel
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Experience our creative journey through this captivating showcase of
            our best work
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://drive.google.com/file/d/1u82ieKPcghPVgvPG0ThUMRtHD9mtssHQ/preview"
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
