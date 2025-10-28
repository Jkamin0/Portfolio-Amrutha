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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      features: [
        'Application strategy planning',
        'Personal brand development',
        'Essay prompt analysis',
        'Competitive positioning',
      ],
    },
  ] as ServiceItem[],
};
