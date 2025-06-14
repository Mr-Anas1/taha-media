"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full mb-6">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Let's Create
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Ready to transform your digital presence? Let's discuss how we can
            bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Start Your Journey
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                  <p className="text-gray-600">tahagroupsltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                  <p className="text-gray-600">+91 96 00 81 6505</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                  <p className="text-gray-600">Chennai, IN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-gray-900 flex items-center">
                <MessageCircle className="mr-3 h-8 w-8 text-purple-600" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
