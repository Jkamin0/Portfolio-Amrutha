export interface NavItem {
  label: string;
  sectionId?: string;
}

export const headerContent = {
  brandName: 'Essay Consulting',
  navItems: [
    { label: 'Home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Contact', sectionId: 'contact' }
  ] as NavItem[]
};
