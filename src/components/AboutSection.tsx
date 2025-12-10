import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, GraduationCap, Wrench } from 'lucide-react';

const stats = [
  { icon: Award, value: '7+', label: 'Years Experience' },
  { icon: Users, value: '4', label: 'Organizations Led' },
  { icon: Target, value: 'SEO/SEM', label: 'CRM & Analytics' },
  { icon: GraduationCap, value: 'MBA', label: 'Marketing - Symbiosis' },
  { icon: Wrench, value: '50+', label: 'Tools Mastered' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-sm text-accent mb-4 block">About Me</span>
          <h2 className="heading-lg mb-4">Strategic & Creative Leader</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop"
                alt="Professional workspace"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-2xl text-cream mb-2">
                  "Blending analytics with creativity"
                </p>
                <p className="text-cream/80 text-sm">
                  — Crafting brand narratives that resonate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="body-lg text-muted-foreground mb-8 leading-relaxed">
              Dipasmit Ghosh is a strategic and creative Digital Marketing Leader with over 7 years of experience in driving brand growth, full-funnel marketing, content excellence, PR communication, and performance strategies.
            </p>
            <p className="body-md text-muted-foreground mb-10 leading-relaxed">
              He specializes in building brand identities, leading cross-functional teams, designing 360-degree digital ecosystems, and optimizing Martech automation for scalable results. His work spans branding, social media, SEO/SEM, CRM, UI/UX direction, video storytelling, and multi-channel campaign execution. Dipasmit's approach blends analytics with creativity—crafting brand narratives that not only speak but resonate.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card-subtle p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
