export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesContent = {
  title: 'Services',
  subtitle: 'Comprehensive essay coaching tailored to your needs',
  services: [
    {
      icon: 'edit_note',
      title: 'Essay Brainstorming & Development',
      description:
        'Transform blank pages into compelling narratives. Together we will explore your experiences, identify powerful themes, and craft authentic stories that showcase your unique perspective and potential.',
      features: [
        'One-on-one brainstorming sessions',
        'Topic selection guidance',
        'Outline development',
        'Voice and tone coaching',
      ],
    },
    {
      icon: 'rate_review',
      title: 'Comprehensive Review & Editing',
      description:
        'Elevate your essays from good to exceptional. Receive detailed, constructive feedback on organization, clarity, and impact, with multiple revision cycles to ensure every word serves your narrative.',
      features: [
        'Detailed feedback on structure and content',
        'Grammar and style refinement',
        'Multiple revision rounds',
        'Final polish and proofreading',
      ],
    },
    {
      icon: 'psychology',
      title: 'Strategy & Positioning',
      description:
        'Stand out in a competitive applicant pool. Develop a cohesive application strategy that positions you effectively, aligns your essays with your goals, and presents a memorable personal brand.',
      features: [
        'Application strategy planning',
        'Personal brand development',
        'Essay prompt analysis',
        'Competitive positioning',
      ],
    },
  ] as ServiceItem[],
};
