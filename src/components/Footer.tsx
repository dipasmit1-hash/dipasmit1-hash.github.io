import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold mb-2 block">
              Dipasmit<span className="text-accent">.</span>
            </a>
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Dipasmit Ghosh. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/dipasmitghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ghosh.dipasmit@gmail.com"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919831430990"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
