
import React from 'react';
import type { NavLink, Stat, EsgItem, TimelineEvent, Service, Project, FaqItem, Testimonial, JobPosition, Benefit, EmployeeTestimonial } from './types';
import { UWAwardsIcon, UWCalendarIcon, UWEmployeesIcon, UWExperienceIcon, UWProjectsIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Career', path: '/career' },
];

export const COMPANY_STATS: Stat[] = [
  { icon: UWCalendarIcon, value: '2007', label: 'Year Established' },
  { icon: UWExperienceIcon, value: '15+ years', label: 'Experience' },
  { icon: UWEmployeesIcon, value: '100+', label: 'Employees' },
  { icon: UWAwardsIcon, value: '10+', label: 'Awards' },
  { icon: UWProjectsIcon, value: '100+', label: 'Projects' },
];

export const ESG_DATA: EsgItem[] = [
    { 
        id: '01', 
        title: 'ESG', 
        fullTitle: 'Our Culture\nEnvironmental, Social & Governance',
        description: 'We understand the environmental, social, and economic impact of our activities and that it is our responsibility to conduct our business in a transparent and ethical manner.',
        imageUrl: './assets/images/EGSIMG.png'
    },
    { 
        id: '02', 
        title: 'Community', 
        fullTitle: 'Our Commitment to Community',
        description: 'We actively engage with local communities, supporting initiatives that foster growth, education, and well-being. Our goal is to build lasting, positive relationships.',
        imageUrl: './assets/images/Safety Briefing 2.jpeg'
    },
    { 
        id: '03', 
        title: 'DE & I', 
        fullTitle: 'Diversity, Equity & Inclusion',
        description: 'We believe a diverse workforce drives innovation. We are committed to creating an inclusive environment where every employee feels valued, respected, and empowered.',
        imageUrl: './assets/images/Safety Briefing 1.jpeg'
    },
    { 
        id: '04', 
        title: 'Environmental', 
        fullTitle: 'Protecting Our Environment',
        description: 'Sustainability is at the core of our operations. We implement green practices and technologies to minimize our environmental footprint and protect natural resources.',
        imageUrl: './assets/images/IMG-20250906-WA0096.jpg'
    },
    { 
        id: '05', 
        title: 'Innovation', 
        fullTitle: 'Driving Innovation Forward',
        description: 'We invest in cutting-edge technology and continuous improvement to deliver smarter, more efficient, and more sustainable infrastructure solutions for the future.',
        imageUrl: './assets/images/Fibre work 7.jpeg'
    },
    { 
        id: '06', 
        title: 'Lean',
        fullTitle: 'Lean Construction Principles',
        description: 'By adopting lean principles, we optimize workflows, reduce waste, and enhance value for our clients. Efficiency and quality are paramount in every project we undertake.',
        imageUrl: './assets/images/IMG-20250906-WA0099.jpg'
    },
    { 
        id: '07', 
        title: 'Safety', 
        fullTitle: 'Uncompromising Safety Standards',
        description: 'The safety of our team and the public is our highest priority. We enforce rigorous safety protocols and training to ensure every worksite is a safe environment.',
        imageUrl: './assets/images/IMG_1109.jpg'
    },
];

export const SUCCESS_TIMELINE: TimelineEvent[] = [
    { year: '2007', title: 'Founding & Registration', description: '' },
    { year: '2012', title: 'Early Growth in underground', description: '' },
    { year: '2016', title: 'Expansion & Licensing', description: '' },
    { year: '2018', title: 'Safety & Quality Certification', description: '' },
];

export const SERVICES_DATA: Service[] = [
    {
        title: 'Civil & Structural Engineering',
        description: "We specialize in road trenching and excavation, including reinstatement works such as milling and patching. Our services also cover kerb installation, drainage improvements, turfing, replanting of landscaped areas, and minor civil construction works - all delivered with a focus on quality, safety, and compliance.",
        imageUrl: "https://picsum.photos/seed/civil1/600/400",
        layout: "right"
    },
    {
        title: 'In-Building Works',
        description: "Our N-Building works include professional trunking and cable tray installations to support structured cabling systems, along with reliable fire-stop installations to ensure compliance with fire safety standards and maintain building integrity.",
        imageUrl: "https://picsum.photos/seed/inbuilding1/600/400",
        layout: "left"
    },
    {
        title: 'Laying And Repair Of Power Cables',
        description: "We specialize in the laying and repair of power cables across all voltage levels, including Extra High Tension (400kV, 230kV, 66kV), High Tension (22kV, 6.6kV), and Low Tension systems. Our services ensure safe, efficient, and reliable power distribution with strict adherence to industry and safety standards.",
        imageUrl: "https://picsum.photos/seed/powercables/600/400",
        layout: "right"
    },
    {
        title: 'Laying, Splicing, Termination, Repairing, And Re-routing of Telecommunication cables.',
        description: "We provide expert pipe installation services for power cables, telecommunication cables, and water pipes, ensuring safe routing, proper segregation, and compliance with industry standards for performance and durability.",
        imageUrl: "https://picsum.photos/seed/telecom/600/400",
        layout: "left"
    }
];

export const PROJECTS_DATA: Project[] = Array.from({ length: 24 }, (_, i) => ({
    category: 'Server',
    location: 'Singapore',
    title: 'Server Room Setup',
    imageUrl: `https://picsum.photos/seed/project${i+1}/400/300`
}));

export const MILESTONES_TIMELINE: string[] = ['2007', '2008', '2009', '2010', '2011', '2012'];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
      name: 'Daniel Evans',
      location: 'Bukit Timah, Singapore',
      quote: 'Impressive work from the United Works team. They handled a complex structural engineering task with expertise and precision. Their commitment to quality is evident.',
      avatarUrl: 'https://i.pravatar.cc/100?u=benjamin',
      rating: 5,
      position: { top: '25%', left: '40%' }
    },
    {
      name: 'Sarah Chen',
      location: 'Pasir Ris, Singapore',
      quote: 'The team was professional and efficient. Our project was completed ahead of schedule and under budget. Highly recommended!',
      avatarUrl: 'https://i.pravatar.cc/100?u=sarah',
      rating: 5,
      position: { top: '22%', left: '88%' }
    },
    {
      name: 'Mr. Benjamin Lee',
      location: 'Tampines, Singapore',
      quote: "United Works delivered exceptional service for our cable installation project. Their attention to detail, safety standards, and proactive communication set them apart. The team finished the work efficiently and exceeded our expectations. I highly recommend them for any large-scale infrastructure needs in Singapore!",
      avatarUrl: 'https://i.pravatar.cc/100?u=david',
      rating: 5,
      position: { top: '53%', left: '82%' }
    },
    {
      name: 'Emily Tan',
      location: 'Tuas, Singapore',
      quote: "Their in-building works were top-notch. The cabling is neat, and the fire-stop installations give us peace of mind. A very reliable partner.",
      avatarUrl: 'https://i.pravatar.cc/100?u=emily',
      rating: 5,
      position: { top: '60%', left: '18%' }
    },
     {
      name: 'Michael Rodriguez',
      location: 'Sentosa, Singapore',
      quote: 'From start to finish, the project management was flawless. They kept us updated and addressed all our concerns promptly. True professionals.',
      avatarUrl: 'https://i.pravatar.cc/100?u=michael',
      rating: 5,
      position: { top: '85%', left: '48%' }
    }
  ];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'What services does United Works provide?',
        answer: 'We specialize in underground cable and pipe installation, infrastructure development, reinstatement works, and advanced civil engineering solutions.'
    },
    {
        question: 'How can I request a project quote?',
        answer: 'You can request a project quote by filling out the contact form on our website, or by calling us directly. We will get back to you with a detailed quote as soon as possible.'
    },
    {
        question: 'What safety standards does United Works follow?',
        answer: 'United Works adheres to the strictest safety standards, including all local regulations and international best practices. Safety is our top priority on every project.'
    },
    {
        question: 'How do you manage project timelines and progress updates?',
        answer: 'We use advanced project management tools to track progress and ensure deadlines are met. We provide regular updates to our clients to keep them informed every step of the way.'
    },
    {
        question: 'Who should I contact in an emergency?',
        answer: 'For any project-related emergencies, please contact your designated project manager immediately. For general inquiries, you can reach our main office during business hours.'
    }
];

// Career Page Data
export const JOB_POSITIONS: JobPosition[] = [
    {
        id: 'civil-engineer-001',
        title: 'Senior Civil Engineer',
        department: 'Engineering',
        location: 'Singapore',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Lead civil engineering projects including underground infrastructure, road works, and structural design. Manage project teams and ensure compliance with safety standards.',
        requirements: [
            'Bachelor\'s degree in Civil Engineering or related field',
            'Professional Engineer (PE) license preferred',
            '5+ years of civil engineering experience',
            'Experience with underground infrastructure projects',
            'Strong project management skills',
            'Knowledge of Singapore construction regulations'
        ],
        benefits: [
            'Competitive salary package',
            'Medical and dental insurance',
            'Professional development opportunities',
            'Flexible working arrangements',
            'Annual performance bonuses'
        ],
        postedDate: '2024-01-15',
        isActive: true
    },
    {
        id: 'project-manager-002',
        title: 'Project Manager',
        department: 'Operations',
        location: 'Singapore',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Oversee infrastructure projects from planning to completion. Coordinate with clients, contractors, and internal teams to ensure project success.',
        requirements: [
            'Bachelor\'s degree in Engineering, Construction Management, or related field',
            '3+ years of project management experience',
            'PMP certification preferred',
            'Experience in infrastructure or construction projects',
            'Strong communication and leadership skills',
            'Proficiency in project management software'
        ],
        benefits: [
            'Competitive salary with performance incentives',
            'Comprehensive health coverage',
            'Professional certification support',
            'Team building activities',
            'Career advancement opportunities'
        ],
        postedDate: '2024-01-10',
        isActive: true
    },
    {
        id: 'safety-officer-003',
        title: 'Safety Officer',
        department: 'Safety & Compliance',
        location: 'Singapore',
        type: 'Full-time',
        experience: '2+ years',
        description: 'Ensure workplace safety compliance and implement safety protocols across all project sites. Conduct safety training and inspections.',
        requirements: [
            'Diploma in Occupational Safety or related field',
            '2+ years of safety experience in construction',
            'WSH certification preferred',
            'Knowledge of Singapore safety regulations',
            'Strong attention to detail',
            'Excellent communication skills'
        ],
        benefits: [
            'Competitive salary package',
            'Safety training and certifications',
            'Health and life insurance',
            'Transportation allowance',
            'Overtime compensation'
        ],
        postedDate: '2024-01-08',
        isActive: true
    },
    {
        id: 'electrical-technician-004',
        title: 'Electrical Technician',
        department: 'Technical Services',
        location: 'Singapore',
        type: 'Full-time',
        experience: '1+ years',
        description: 'Install, maintain, and repair electrical systems for infrastructure projects. Work with power cables, telecommunications, and building electrical systems.',
        requirements: [
            'ITE or Diploma in Electrical Engineering',
            '1+ years of electrical installation experience',
            'Valid electrical license',
            'Experience with power cable installation',
            'Ability to work in outdoor conditions',
            'Strong technical problem-solving skills'
        ],
        benefits: [
            'Competitive hourly rates',
            'Overtime pay opportunities',
            'Tool and equipment allowance',
            'Safety equipment provided',
            'Skills development programs'
        ],
        postedDate: '2024-01-05',
        isActive: true
    },
    {
        id: 'intern-civil-005',
        title: 'Civil Engineering Intern',
        department: 'Engineering',
        location: 'Singapore',
        type: 'Internship',
        experience: 'Fresh Graduate',
        description: 'Gain hands-on experience in civil engineering projects. Assist senior engineers with design, planning, and project coordination.',
        requirements: [
            'Currently pursuing or recently completed Civil Engineering degree',
            'Strong academic performance',
            'Basic knowledge of CAD software',
            'Willingness to learn and adapt',
            'Good communication skills',
            'Available for 3-6 months internship'
        ],
        benefits: [
            'Stipend provided',
            'Mentorship from senior engineers',
            'Real project experience',
            'Networking opportunities',
            'Potential full-time employment'
        ],
        postedDate: '2024-01-03',
        isActive: true
    }
];

export const BENEFITS_DATA: Benefit[] = [
    {
        icon: UWEmployeesIcon,
        title: 'Professional Growth',
        description: 'Continuous learning opportunities, mentorship programs, and career advancement paths to help you reach your full potential.'
    },
    {
        icon: UWAwardsIcon,
        title: 'Competitive Compensation',
        description: 'Attractive salary packages, performance bonuses, and comprehensive benefits including medical, dental, and life insurance.'
    },
    {
        icon: UWExperienceIcon,
        title: 'Work-Life Balance',
        description: 'Flexible working arrangements, paid time off, and employee wellness programs to support your personal and professional life.'
    },
    {
        icon: UWProjectsIcon,
        title: 'Innovation & Technology',
        description: 'Access to cutting-edge technology and tools, plus opportunities to work on challenging infrastructure projects.'
    },
    {
        icon: UWCalendarIcon,
        title: 'Safety First',
        description: 'Comprehensive safety training, modern equipment, and a strong safety culture that prioritizes your wellbeing.'
    }
];

export const EMPLOYEE_TESTIMONIALS: EmployeeTestimonial[] = [
    {
        name: 'Sarah Lim',
        position: 'Senior Civil Engineer',
        department: 'Engineering',
        quote: 'Working at United Works has been incredibly rewarding. The company\'s commitment to safety and quality is unmatched, and I\'ve had the opportunity to work on some of Singapore\'s most challenging infrastructure projects.',
        avatarUrl: 'https://i.pravatar.cc/100?u=sarahlim',
        yearsAtCompany: '5 years'
    },
    {
        name: 'David Chen',
        position: 'Project Manager',
        department: 'Operations',
        quote: 'The collaborative culture here is amazing. Everyone is committed to excellence, and the management truly values employee input and professional development.',
        avatarUrl: 'https://i.pravatar.cc/100?u=davidchen',
        yearsAtCompany: '3 years'
    },
    {
        name: 'Priya Sharma',
        position: 'Safety Officer',
        department: 'Safety & Compliance',
        quote: 'United Works prioritizes safety above all else. I\'m proud to be part of a team that ensures every worker goes home safely to their families every day.',
        avatarUrl: 'https://i.pravatar.cc/100?u=priyasharma',
        yearsAtCompany: '4 years'
    },
    {
        name: 'Ahmad Rahman',
        position: 'Electrical Technician',
        department: 'Technical Services',
        quote: 'The company invests in the latest technology and provides excellent training. I\'ve grown both personally and professionally since joining the team.',
        avatarUrl: 'https://i.pravatar.cc/100?u=ahmadrahman',
        yearsAtCompany: '2 years'
    }
];