import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Head of Branding',
    company: 'Prism Logistics Pvt. Ltd.',
    location: 'Kolkata, India',
    period: 'May 2023 – Present',
    highlights: [
      'Developed 360° brand and digital marketing strategy',
      'Managed SEO, PPC, social media, display ads, content & PR',
      'Implemented chatbots, APIs, automation workflows',
      'Directed press releases, media features, corporate events',
      'Partnered with Inkbar & Avishi Projects for creative direction',
      'Led award nominations and brand storytelling',
    ],
    color: 'accent',
  },
  {
    title: 'Brand & Digital Marketing Manager',
    company: 'IAER',
    location: 'Kolkata, India',
    period: 'Apr 2022 – May 2023',
    highlights: [
      'Built lead-generation strategies',
      'Managed website UX, content planning, digital communication',
      'Ran SEO, social media, email automation',
      'Used CRM (Zoho, HubSpot) for tracking and nurturing',
      'Optimized campaign ROI',
    ],
    color: 'charcoal',
  },
  {
    title: 'Digital Marketing Manager',
    company: 'Crown Decor Pvt. Ltd.',
    location: 'Kolkata, India',
    period: 'Jul 2021 – Apr 2022',
    highlights: [
      'Designed social media + influencer marketing',
      'Conducted campaign audits, optimized ad spend',
      'Provided analytics dashboards to leadership',
      'Conducted market & competitor research',
    ],
    color: 'accent',
  },
  {
    title: 'Digital Marketing & Visual Media Manager',
    company: 'IEM',
    location: 'Kolkata, India',
    period: 'Oct 2017 – Jun 2021',
    highlights: [
      'Managed MOOCs, digital media channel, content creation',
      'Ran social campaigns, cloud storage, broadcast operations',
      'Developed the IEM Learning Portal',
    ],
    color: 'charcoal',
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-sm text-accent mb-4 block">Career Journey</span>
          <h2 className="heading-lg mb-4">Professional Experience</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            A track record of driving brand growth and digital excellence across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-gold -translate-x-[7px] md:-translate-x-1/2 top-8" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="card-elevated p-6 md:p-8 hover:shadow-gold/10 transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="heading-sm text-foreground group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 size={14} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
