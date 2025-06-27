"use client";
// import { Hotel } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Dumbbell,
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Heart,
} from "lucide-react";
// import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Bar */}
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to
            <br />
            NGBooks Hotel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Experience luxury redefined with world-class amenities, exceptional
            service, and unforgettable moments in the heart of elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#a50050] hover:bg-[#880e4f] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-amber-600 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Explore Rooms
            </Button>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-4 bg-[#a50050] text-white hover:bg-[#880e4f]">
              Premium Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Luxury Amenities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Indulge in our carefully curated selection of world-class
              amenities designed to make your stay extraordinary and memorable.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Wifi,
                title: "High-Speed WiFi",
                desc: "Complimentary ultra-fast internet throughout the property",
              },
              {
                icon: Car,
                title: "Valet Parking",
                desc: "24/7 secure valet parking service for your convenience",
              },
              {
                icon: Waves,
                title: "Infinity Pool",
                desc: "Stunning rooftop infinity pool with panoramic city views",
              },
              {
                icon: Utensils,
                title: "Fine Dining",
                desc: "Award-winning restaurants with world-class cuisine",
              },
              {
                icon: Dumbbell,
                title: "Fitness Center",
                desc: "State-of-the-art gym with personal training available",
              },
              {
                icon: Coffee,
                title: "24/7 Room Service",
                desc: "Gourmet room service available around the clock",
              },
              {
                icon: Shield,
                title: "Concierge Service",
                desc: "Dedicated concierge team for personalized assistance",
              },
              {
                icon: Heart,
                title: "Spa & Wellness",
                desc: "Luxurious spa treatments and wellness programs",
              },
            ].map((amenity, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#a50050] rounded-full flex items-center justify-center mx-auto mb-4">
                      <amenity.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {amenity.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {amenity.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-[#a50050] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Luxury Rooms", icon: Users },
              { number: "50+", label: "Countries Served", icon: MapPin },
              { number: "25+", label: "Years Experience", icon: Award },
              { number: "98%", label: "Guest Satisfaction", icon: Star },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 bg-slate-50"> */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f8f4f1" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            {/* <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200"> */}
            <Badge className="mb-4 bg-[#a50050] text-white hover:bg-[#880e4f]">
              Guest Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Guests Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our valued
              guests have to say about their extraordinary experiences at
              NGBooks Hotel.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Business Executive",
                content:
                  "Absolutely exceptional service! The attention to detail and luxury amenities made our stay unforgettable. The staff went above and beyond to ensure our comfort.",
                rating: 5,
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
              {
                name: "Michael Chen",
                role: "Travel Blogger",
                content:
                  "NGBooks Hotel sets the gold standard for luxury hospitality. From the stunning architecture to the world-class dining, every moment was pure perfection.",
                rating: 5,
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "Wedding Planner",
                content:
                  "We've hosted numerous events here, and NGBooks Hotel consistently delivers excellence. The venues are breathtaking and the service is impeccable.",
                rating: 5,
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#a50050" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Perfect Stay?
            </h2>
            <p className="text-xl mb-8 text-amber-100 leading-relaxed">
              Book now and experience the pinnacle of luxury hospitality. Your
              extraordinary journey awaits at NGBooks Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-amber-600 hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
