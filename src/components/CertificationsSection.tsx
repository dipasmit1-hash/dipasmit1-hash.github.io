import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';

const onlineCertifications = [
  { title: 'Google Fundamentals of Digital Marketing', issuer: 'Google' },
  { title: 'Business Analytics', issuer: 'ISB' },
  { title: 'Inbound & Email Marketing', issuer: 'HubSpot' },
  { title: 'Meta Blueprint Certification', issuer: 'Meta' },
  { title: 'Google Ads Search', issuer: 'Google' },
  { title: "Manager's Toolkit", issuer: 'University of London' },
  { title: 'New Models of Business in Society', issuer: 'University of Virginia' },
  { title: 'Google Cloud Product Fundamentals', issuer: 'Google Cloud' },
];

const offlineCertifications = [
  { title: 'CATIA', issuer: 'Amity' },
  { title: 'Machining Technician', issuer: 'ASDC' },
  { title: 'PRO-E (CREO)', issuer: 'Amity' },
  { title: 'Oracle Database 10g (SQL)', issuer: 'Oracle' },
];

const education = [
  {
    degree: 'MBA in Marketing',
    institution: 'Symbiosis Skills & Professional University',
    period: '2023 – 2025',
  },
  {
    degree: 'B.Tech Mechanical Engineering',
    institution: 'UEM Jaipur',
    period: '2013 – 2017',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Techno Model School',
    period: '',
  },
  {
    degree: 'Madhyamik',
    institution: 'Hindu School',
    period: '',
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-sm text-accent mb-4 block">Credentials</span>
          <h2 className="heading-lg mb-4">Certifications & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Online Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Online Certifications</h3>
            </div>
            
            <div className="space-y-3">
              {onlineCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                >
                  <p className="text-sm font-medium text-foreground mb-1">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Offline Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Technical Certifications</h3>
            </div>
            
            <div className="space-y-3">
              {offlineCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                >
                  <p className="text-sm font-medium text-foreground mb-1">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="p-3 rounded-lg bg-background/50 hover:bg-background transition-colors border-l-2 border-accent/30 hover:border-accent"
                >
                  <p className="text-sm font-medium text-foreground mb-1">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.institution}</p>
                  {edu.period && (
                    <p className="text-xs text-accent mt-1">{edu.period}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
