import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const taglines = [
  'Branding',
  'Digital Strategy', 
  'Performance Marketing',
  'Content Leadership',
  'UI/UX Direction',
  'PR & Communications'
];

export const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="label-sm text-accent mb-4 block"
            >
              Head of Branding & Digital Marketing
            </motion.span>
            
            <h1 className="heading-xl mb-6">
              Branding Leader &{' '}
              <span className="text-gradient">Digital Marketing</span>{' '}
              Strategist
            </h1>
            
            <p className="body-lg text-muted-foreground mb-8 max-w-xl">
              Crafting brands that stand out, strategies that scale, and digital experiences that build lasting connection.
            </p>

            {/* Animated Tagline */}
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-[2px] bg-accent" />
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-accent font-medium"
              >
                {taglines[currentTagline]}
              </motion.span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 p-2">
                <div className="w-full h-full rounded-full bg-secondary overflow-hidden border-4 border-background shadow-elevated-lg">
                  <img
                    src="/profile.jpg"
                    alt="Dipasmit Ghosh - Head of Branding"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-elevated"
              >
                <span className="text-3xl font-bold text-accent">7+</span>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-elevated"
              >
                <span className="text-3xl font-bold text-accent">50+</span>
                <p className="text-xs text-muted-foreground">Tools Mastered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
