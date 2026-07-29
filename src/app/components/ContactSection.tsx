"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Google Sheets integration via Google Apps Script Web App
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwJgyqQx6ofK7b7XuiaFg443N5cOLW6FJBjSqVhwgivTGs5F8H0Hiq8Rccq1j3DzvGC/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: "website_contact_form",
          }),
        },
      );

      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Have questions about our products? Reach out to our team for
            assistance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Phone</h4>
                    <p className="text-slate-700 text-base font-medium">+91 9879277425</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Email</h4>
                    <p className="text-slate-700 text-base font-medium">vew.machines@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Address</h4>
                    <p className="text-slate-700 text-base">2, Lati Plot, Morbi</p>
                    <p className="text-slate-700 text-base">Gujarat - 363641, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Factory Location
              </h3>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1985847292257!2d70.8200621!3d22.8124812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598cd9ca2f3acf%3A0x62b3024fe3e3639b!2sShree%20Vagheshwari%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1727678400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Vagheshwari Engineering Works - Exact Factory Location"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-800">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-800">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-800">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-800">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-base text-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3 rounded-md shadow"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
