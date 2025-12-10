import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  BarChart3, 
  PenTool, 
  Layout,
  Megaphone,
  TrendingUp,
  Users,
  Globe,
  LineChart,
  Settings,
  Database,
  TestTube,
  FileText,
  Video,
  Palette,
  Eye,
  Code,
  Figma,
  Monitor,
  FileSearch
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Branding & Marketing',
    icon: Target,
    skills: [
      { name: 'Brand Strategy & Positioning', icon: Target },
      { name: 'Performance Marketing', icon: TrendingUp },
      { name: 'Campaign Planning', icon: Megaphone },
      { name: 'Social Media Strategy', icon: Users },
      { name: 'PR & Corporate Communication', icon: Globe },
    ],
  },
  {
    title: 'Analytics & Martech',
    icon: BarChart3,
    skills: [
      { name: 'GA4, Semrush, Search Console, Hotjar', icon: LineChart },
      { name: 'Marketing Automation', icon: Settings },
      { name: 'CRM (HubSpot, Salesforce, Zoho)', icon: Database },
      { name: 'A/B Testing & CRO', icon: TestTube },
    ],
  },
  {
    title: 'Content & Creative',
    icon: PenTool,
    skills: [
      { name: 'Copywriting', icon: FileText },
      { name: 'Video Editing (Premiere Pro, Filmora, Vegas Pro)', icon: Video },
      { name: 'Graphic Coordination (Photoshop, Canva, Illustrator)', icon: Palette },
      { name: 'Visual Storytelling', icon: Eye },
    ],
  },
  {
    title: 'UI/UX & Web',
    icon: Layout,
    skills: [
      { name: 'WordPress, Wix, Shopify, Webflow', icon: Code },
      { name: 'Figma, Adobe XD', icon: Figma },
      { name: 'Website Content Optimization', icon: FileSearch },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-sm text-accent mb-4 block">Expertise</span>
          <h2 className="heading-lg mb-4">Skills & Tools</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning branding, analytics, creative, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="card-elevated p-6 md:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-sm">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
