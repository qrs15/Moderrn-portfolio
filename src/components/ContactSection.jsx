import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";

const socialMedia = [
  { name: "linkedin", icon: <Linkedin />, href: "#" },
  { name: "facebook", icon: <Facebook />, href: "#" },
  { name: "instagram", icon: <Instagram />, href: "#" },
  { name: "twitter", icon: <Twitter />, href: "#" },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    success: true,
    message: "",
  });

  const showPopup = (success, message) => {
    setPopup({ show: true, success, message });

    setTimeout(() => {
      setPopup({ show: false, success: true, message: "" });
    }, 2500); // auto-close after 2.5s
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gaibwh5",
        "template_09apeyc",
        e.target,
        "UWbAjb7IBjcZhVT57"
      )
      .then(() => {
        setLoading(false);
        showPopup(true, "Your message has been sent!");
      })
      .catch(() => {
        setLoading(false);
        showPopup(false, "Failed to send message.");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className={`p-6 rounded-xl shadow-xl text-white text-center animate-fadeIn scale-100 transition-all
            ${popup.success ? "bg-green-600" : "bg-red-600"}`}
          >
            <h4 className="text-xl font-semibold mb-2">
              {popup.success ? "Success!" : "Error"}
            </h4>
            <p>{popup.message}</p>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you’d like to work together or have a
          project in mind. I’m always open to new ideas, collaborations, and
          opportunities!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:karas.kamal135@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    karas.kamal135@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+89158633178"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +7 915 860-30-78
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Egypt – Alexandria</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                {socialMedia.map((social, key) => (
                  <a
                    key={key}
                    href={social.href}
                    target="_blank"
                    className="text-primary hover:text-primary/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Karas Hani..."
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="hello@gmail.com..."
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-all",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
