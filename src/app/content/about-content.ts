export interface StatItem {
  icon: string;
  value: string;
  label: string;
  description: string;
  details: string[];
}

export const aboutContent = {
  title: 'About me',
  paragraphs: [
    'As an educator and writing specialist, I am passionate about helping students find their authentic voice and tell their unique stories. With experience teaching composition and rhetoric at both the high school and university levels, I understand what makes writing compelling, persuasive, and memorable. My approach combines academic rigor with personalized coaching to help students craft essays that truly reflect who they are.',
    'Throughout my career, I have guided students through every stage of the writing process—from brainstorming and drafting to revision and polish. Whether working with high schoolers on college applications or university students on persuasive writing, I focus on developing critical thinking skills and helping writers discover what makes their perspective distinctive. My background in speech and debate also informs my teaching, emphasizing clarity, argumentation, and the power of effective communication.',
  ],
  images: {
    small: {
      src: 'images.jpg',
      alt: 'About Image 1',
    },
    large: {
      src: 'images.jpg',
      alt: 'About Image 2',
    },
  },
  stats: [
    {
      icon: 'school',
      value: '2',
      label: 'Advanced Degrees',
      description: 'M.A., B.A.',
      details: [
        'Master of Arts in English Language and Literature, Composition',
        'Bachelor of Arts in English/Language Arts Teacher Education',
        'Utah State Board of Education High School Teacher Certification',
      ],
    },
    {
      icon: 'menu_book',
      value: '7+',
      label: 'Publications',
      description: 'Academic & Professional',
      details: [
        'Peer-reviewed journal articles on writing pedagogy',
        'Conference presentations on college admissions essays',
        'Published essays in educational journals',
        'Creator of essay writing curriculum and teaching materials',
      ],
    },
    {
      icon: 'history_edu',
      value: '4+',
      label: 'Years Teaching',
      description: 'High School & University',
      details: [
        'English Teacher at Logan High School',
        'Graduate Instructor at Utah State University',
        'Speech and Debate Coach at Utah State University',
        'Student Teacher at Ridgeline High School',
      ],
    },
  ] as StatItem[],
};
