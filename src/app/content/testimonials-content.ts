export interface Testimonial {
  quote: string;
  clientName: string;
  achievement: string;
  rating: number;
  verified: boolean;
}

export const testimonialsContent = {
  title: 'What Students & Parents Say',
  subtitle: 'Real experiences from students who successfully navigated the college admissions process',
  testimonials: [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      clientName: 'Sarah Johnson',
      achievement: 'Stanford University, Class of 2028',
      rating: 5,
      verified: true,
    },
    {
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
      clientName: 'Michael Chen',
      achievement: 'MIT, Class of 2027',
      rating: 5,
      verified: true,
    },
    {
      quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
      clientName: 'Emily Rodriguez',
      achievement: 'Harvard University, Class of 2028',
      rating: 5,
      verified: true,
    },
    {
      quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      clientName: 'David Park',
      achievement: 'Yale University, Class of 2027',
      rating: 5,
      verified: false,
    },
    {
      quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
      clientName: 'Jessica Williams',
      achievement: 'Princeton University, Class of 2028',
      rating: 5,
      verified: true,
    },
    {
      quote: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
      clientName: 'Alex Thompson',
      achievement: 'Columbia University, Class of 2027',
      rating: 5,
      verified: true,
    },
    {
      quote: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
      clientName: 'Rachel Martinez',
      achievement: 'Duke University, Class of 2028',
      rating: 5,
      verified: false,
    },
    {
      quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      clientName: 'James Anderson',
      achievement: 'Brown University, Class of 2027',
      rating: 5,
      verified: true,
    },
    {
      quote: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      clientName: 'Sophia Lee',
      achievement: 'Dartmouth College, Class of 2028',
      rating: 5,
      verified: true,
    },
  ] as Testimonial[],
};
