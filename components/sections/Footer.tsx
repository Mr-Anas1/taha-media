import { Button } from "@/components/ui/button";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Heart,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/taha.media_",
      label: "Instagram",
      color: "hover:bg-pink-500",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "#",
      label: "Twitter",
      color: "hover:bg-blue-500",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Content Creation",
    "Videography & Editing",
    "Influencer Promotions & Testimonials",
    "Google Ranking (SEO) & Paid Ads",
    "Guerrilla Marketing Campaigns",
    "Web Development",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Taha Media
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Crafting digital experiences that elevate your brand and connect
              with your audience through innovation and creativity.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`border-gray-600 text-gray-300 hover:text-white transition-all duration-300 h-[42px] w-[42px] rounded-full ${social.color}`}
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-lg hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4 text-gray-300 text-lg">
              <p className="hover:text-purple-400 transition-colors cursor-pointer">
                tahagroupsltd@gmail.com
              </p>
              <p className="hover:text-purple-400 transition-colors cursor-pointer">
                +91 96 00 81 6505
              </p>
              <p className="hover:text-purple-400 transition-colors cursor-pointer">
                Chennai, IN
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg flex items-center justify-center">
            © {new Date().getFullYear()} Taha Media. Made with
            <Heart className="h-5 w-5 text-red-500 mx-2 animate-pulse" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
