import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, Instagram, Linkedin } from 'lucide-react';

const websiteProjects = [
  { title: 'Gioia', url: 'https://gioia.in/', description: 'Lifestyle Brand Website' },
  { title: 'Prism Logistics', url: 'https://prismlogistics.ae/', description: 'Corporate Logistics Platform' },
  { title: 'IAER', url: 'https://www.iaer.ac.in/', description: 'Educational Institution' },
  { title: 'Ganesh Consumer', url: 'https://ganeshconsumer.com/', description: 'Consumer Products Brand' },
  { title: 'IEM Labs', url: 'https://www.iemlabs.in/', description: 'Tech Innovation Lab' },
  { title: 'Avishi Projects', url: 'https://avishiprojects.com/', description: 'Real Estate Ventures' },
];

const socialProjects = [
  { title: 'IAER Campaign', url: 'https://www.instagram.com/p/DMprTzBoSxK/', platform: 'Instagram', icon: Instagram },
  { title: 'IEM Labs', url: 'https://www.linkedin.com/company/iemaiemlabs/posts/', platform: 'LinkedIn', icon: Linkedin },
  { title: 'Prism Logistics', url: 'https://www.linkedin.com/company/prismlogistics/', platform: 'LinkedIn', icon: Linkedin },
  { title: 'Tabillo', url: 'https://www.linkedin.com/company/tabillo/', platform: 'LinkedIn', icon: Linkedin },
  { title: 'Ganesh Consumer', url: 'https://www.instagram.com/ganeshconsumerproducts/', platform: 'Instagram', icon: Instagram },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-sm text-accent mb-4 block">Featured Work</span>
          <h2 className="heading-lg mb-4">Portfolio</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            A collection of brands built, campaigns executed, and digital experiences created
          </p>
        </motion.div>

        {/* Website Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-5 h-5 text-accent" />
            <h3 className="heading-sm">Website Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group card-elevated overflow-hidden"
              >
                {/* Preview Image */}
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors" />
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="flex items-center gap-2 text-cream text-sm font-medium">
                      <ExternalLink size={16} />
                      Visit Site
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Social Media Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Instagram className="w-5 h-5 text-accent" />
            <h3 className="heading-sm">Social Media Contributions</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group card-subtle p-4 flex items-center gap-3 hover:border-accent/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <project.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate group-hover:text-accent transition-colors">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{project.platform}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
