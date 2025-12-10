import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const social = [
  { icon: <Linkedin />, href: "#" },
  { icon: <Facebook />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <Twitter />, href: "#" },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll To Top */}
      {visible && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg
                     hover:bg-primary/80 transition animate-bounce"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h3 className="text-xl font-semibold">
              © {new Date().getFullYear()} Karas Hani Kamal
            </h3>

            <div className="flex gap-4">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="text-primary hover:text-primary/40 transition transform hover:scale-125"
                  target="_blank"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            Inspiration from Pedro Tech using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
