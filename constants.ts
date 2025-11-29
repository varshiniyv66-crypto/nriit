
import { Department, NavItem, PlacementStat, NewsItem, Testimonial, HeroSlide, GalleryItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { 
    label: 'Departments', 
    path: '/departments',
    children: [
      { label: 'Computer Science (CSE)', path: '/dept/cse' },
      { label: 'Electronics & Comm (ECE)', path: '/dept/ece' },
      { label: 'Information Technology (IT)', path: '/dept/it' },
      { label: 'Civil Engineering', path: '/dept/civil' },
      { label: 'Mechanical Engineering', path: '/dept/mech' },
      { label: 'EEE', path: '/dept/eee' },
      { label: 'AIML', path: '/dept/aiml' },
      { label: 'Data Science', path: '/dept/ds' },
    ]
  },
  { label: 'Accreditation', path: '/accreditation' },
  { label: 'Research', path: '/research' },
  { label: 'Placements', path: '/placements' },
  { label: 'Contact', path: '/contact' },
];

export const PLACEMENT_STATS: PlacementStat[] = [
  { year: '2023-24', placed: 450, companies: 52, highestPackage: '12 LPA', averagePackage: '4.5 LPA' },
  { year: '2022-23', placed: 380, companies: 45, highestPackage: '10 LPA', averagePackage: '4.0 LPA' },
  { year: '2021-22', placed: 320, companies: 40, highestPackage: '8.5 LPA', averagePackage: '3.8 LPA' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Accreditation",
    subtitle: "Committed to quality education with NBA and NAAC accreditation processes in progress for key departments."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Expert Faculty",
    subtitle: "Highly qualified faculty members dedicated to mentoring and research-driven teaching methodologies."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855091?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Modern Curriculum",
    subtitle: "Industry-aligned curriculum with focus on emerging technologies like AI, Data Science, and IoT."
  }
];

export const LATEST_NEWS: NewsItem[] = [
  { id: '1', title: 'Admissions Open for B.Tech 2025-26 Academic Year', date: '2025-03-15', category: 'academic' },
  { id: '2', title: 'NRIIT Secures NBA Accreditation for CSE & ECE Departments', date: '2025-02-28', category: 'notice' },
  { id: '3', title: 'Annual Tech Fest "Techno-Rise 2K25" Scheduled for April', date: '2025-03-10', category: 'event' },
  { id: '4', title: 'Guest Lecture on AI & Machine Learning by Dr. P. Kumar', date: '2025-03-20', category: 'event' },
  { id: '5', title: 'Exam Schedule for II B.Tech Released', date: '2025-03-05', category: 'academic' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'P. Sravani', role: 'Alumni, CSE (2023 Batch)', content: 'The faculty at NRIIT are incredibly supportive. The placement training helped me secure a job at TCS with a great package.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: '2', name: 'K. Rahul', role: 'Final Year, ECE', content: 'The labs are well-equipped, especially the IoT and VLSI labs. Practical exposure here is unmatched.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: '3', name: 'Mr. Venkat Rao', role: 'Parent', content: 'I am proud to see my son excel in his studies. The discipline and academic rigor at NRIIT are commendable.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Main Campus Block', category: 'Campus' },
  { id: '2', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Computer Lab', category: 'Labs' },
  { id: '3', src: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Library', category: 'Facilities' },
  { id: '4', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Graduation Day', category: 'Events' },
  { id: '5', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Seminar Hall', category: 'Facilities' },
  { id: '6', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Tech Fest', category: 'Events' }
];

export const DEPARTMENTS: Record<string, Department> = {
  ece: {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    hodName: 'Dr. Srihari Rao Komatineni',
    intake: 180,
    vision: 'To become a center of excellence by bringing out the professional competence in the core areas of electronics and communication engineering.',
    mission: [
      'To provide conductive environment that impart electronics and communication knowledge through quality teaching & self-learning.',
      'To serve the needs of electronics, telecommunication and allied industries through industry interaction.',
      'To encourage innovative thinking, continuous learning among the stake holders and create new techniques in IOT, VLSI.',
      'To groom students in communication and interpersonal skills.',
      'To inculcate human values and ethics to make learners sensitive towards social issues.'
    ],
    peos: [
      { id: 'PEO1', statement: 'Graduates with competencies in the area of electronics and communications engineering.' },
      { id: 'PEO2', statement: 'Graduates with continuous learning ability in hardware and software systems.' },
      { id: 'PEO3', statement: 'Graduates with successful career in industry, research with technical and interpersonal skills.' },
      { id: 'PEO4', statement: 'Graduates with professional and ethical values.' },
      { id: 'PEO5', statement: 'Graduates shall contribute to organization goals with individual and team work.' }
    ],
    faculty: [
      { id: '1', name: 'Dr. Srihari Rao Komatineni', designation: 'Professor', qualification: 'Ph.D', specialization: 'ECE', joiningDate: '06/01/2012', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: '2', name: 'Chekuri Venugopala Chowdary', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE', joiningDate: '01/06/2023', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { id: '3', name: 'Seshagiri Rao Sugguna', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE', joiningDate: '02/06/2020', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: '4', name: 'Lakshmi Darsi', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE', joiningDate: '14/02/2017', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { id: '5', name: 'Sujata Kandukuri', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE', joiningDate: '26/06/2015', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/5.jpg' },
      { id: '6', name: 'Manasa Manukonda', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'ECE', joiningDate: '28/04/2017', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { id: '7', name: 'Dr. Chetty Kalai Selvan', designation: 'Professor', qualification: 'Ph.D', specialization: 'ECE', joiningDate: '29/08/2018', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/7.jpg' },
      { id: '8', name: 'Dr. V. Naga Malleswari', designation: 'Professor', qualification: 'Ph.D', specialization: 'ECE', joiningDate: '09/11/2020', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/8.jpg' },
      { id: '9', name: 'Dr. Sanjay Dola', designation: 'Professor', qualification: 'Ph.D', specialization: 'ECE', joiningDate: '01/11/2021', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/9.jpg' }
    ],
    labs: [
      { id: 'l1', name: 'EDC Lab', description: 'Electronic Devices and Circuits Laboratory for fundamental experiments.', equipment: ['CROs', 'Function Generators', 'RPS'] },
      { id: 'l2', name: 'IC & PDC Lab', description: 'Integrated Circuits and Pulse Digital Circuits Lab.', equipment: ['IC Testers', 'Digital Oscilloscopes'] },
      { id: 'l3', name: 'Communication Lab', description: 'Analog and Digital Communication experiments.', equipment: ['Spectrum Analyzers', 'Modulation Kits'] },
      { id: 'l4', name: 'Microprocessor Lab', description: '8086/8051 based programming and interfacing.', equipment: ['8086 Kits', 'Interfacing Modules'] },
      { id: 'l5', name: 'VLSI/IoT Lab', description: 'Advanced design and simulation lab.', equipment: ['Xilinx', 'Matlab', 'IoT Sensors', 'Arduino/Raspberry Pi'] }
    ],
    stats: [
      { year: '2024-25', sanctioned: 180, admitted: 159 },
      { year: '2023-24', sanctioned: 120, admitted: 120 },
      { year: '2022-23', sanctioned: 120, admitted: 102 }
    ],
    mous: [
      { id: 'm1', partner: 'L4G Solutions Private Limited', date: '07-04-2020', description: 'Skill development and training.' },
      { id: 'm2', partner: 'Innovative Technologies', date: '15-11-2022', description: 'Internships and projects.' },
      { id: 'm3', partner: 'Elite Technologies', date: '09-03-2020', description: 'Industrial visits and training.' },
      { id: 'm4', partner: 'Coretek Test Solutions', date: '03-01-2022', description: 'Testing tools training.' },
      { id: 'm5', partner: 'Certybox Skills for Tomorrow', date: '17-03-2020', description: 'Technical skill enhancement.' },
      { id: 'm6', partner: 'Eleation', date: '09-09-2021', description: 'Engineering analysis training.' },
      { id: 'm7', partner: 'Gagan Apps', date: '19-08-2019', description: 'Mobile app development workshops.' },
      { id: 'm8', partner: 'Team Lease Edtech Ltd', date: '09-09-2021', description: 'Employability skills.' },
      { id: 'm9', partner: 'Pantech Solutions Pvt Ltd', date: '23-09-2021', description: 'Embedded systems training.' },
      { id: 'm10', partner: 'IVIS', date: '21-07-2022', description: 'Surveillance systems training.' }
    ],
    achievements: [
      { id: 'a1', title: 'SIH 2023 Winner', studentName: 'Team ECE', description: 'Won 1st prize in Smart India Hackathon for IoT based solution.', date: '2023', type: 'technical' },
      { id: 'a2', title: 'Paper Publication', studentName: 'K. Sai Koti', description: 'Published paper in IEEE conference on 5G antenna technology.', date: '2024', type: 'academic' }
    ],
    activities: [
      { id: 'act1', title: 'Workshop on Robotics', date: '24-07-2023', type: 'workshop', description: '3-day hands-on workshop on Robotics with HackBoats.' },
      { id: 'act2', title: 'Guest Lecture on VLSI', date: '16-02-2023', type: 'guest_lecture', description: 'Seminar on Low Power VLSI Design by industry experts.' },
      { id: 'act3', title: 'Industrial Visit to SHAR', date: '2023', type: 'industrial_visit', description: 'IV B.Tech students visited SDSC SHAR.' }
    ]
  },
  cse: {
    id: 'cse',
    name: 'Computer Science & Engineering',
    code: 'CSE',
    hodName: 'Dr. K. Nageswara Rao',
    intake: 180,
    vision: 'To develop globally competent and ethically guided Computer Science professionals, excelling in technological leadership, research-driven innovation, and transformative contributions to society.',
    mission: [
      'Facilitate transformative foundations in computing, software engineering, and real-world experience.',
      'Drive innovation and leadership through industry–academia collaborations.',
      'Provide advanced infrastructure and mentorship for research and entrepreneurship.',
      'Foster ethics, teamwork, sustainability, and lifelong learning.'
    ],
    peos: [
      { id: 'PEO1', statement: 'Graduates will establish strong foundations in computer science and software engineering for professional success and adaptability.' },
      { id: 'PEO2', statement: 'Graduates will demonstrate ethics, leadership, teamwork, and communication in multidisciplinary environments.' },
      { id: 'PEO3', statement: 'Graduates will pursue higher studies, research, entrepreneurship, and lifelong learning.' }
    ],
    faculty: [
      { id: '1', name: 'Dr. K. Nageswara Rao', designation: 'Professor', qualification: 'Ph.D', specialization: 'CSE', joiningDate: '28/05/2019', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/10.jpg' },
      { id: '2', name: 'Dr. J. Chandra Sekhar', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'CSE', joiningDate: '11/12/2018', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/11.jpg' },
      { id: '3', name: 'Mr. V.K. Pratap', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'CSE', joiningDate: '17/12/2018', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/12.jpg' },
      { id: '4', name: 'Mrs. Ch. Bindu Madhavi', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'CSE', joiningDate: '04/10/2021', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/13.jpg' },
      { id: '5', name: 'Mrs. Y. Jessy Kumari', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'CSE', joiningDate: '10/01/2019', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/14.jpg' },
      { id: '6', name: 'Dr. G. Ramakoteswara Rao', designation: 'Assistant Professor', qualification: 'MA', specialization: 'English', joiningDate: '03/06/2013', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/15.jpg' }
    ],
    labs: [
      { id: 'l1', name: 'Basic Programming Lab', description: 'C Programming and Data Structures.', equipment: ['Desktop PCs', 'Turbo C', 'GCC'] },
      { id: 'l2', name: 'Advanced Computing Lab', description: 'Java, Python, and Web Technologies.', equipment: ['High-end Workstations', 'IntelliJ', 'PyCharm'] },
      { id: 'l3', name: 'Project Lab', description: 'Dedicated space for mini and major projects.', equipment: ['Collaborative workspace', 'Projectors', 'IoT Kits'] },
      { id: 'l4', name: 'IoT Lab', description: 'Internet of Things and Embedded Systems.', equipment: ['Sensors', 'Actuators', 'Microcontrollers'] }
    ],
    stats: [
      { year: '2024-25', sanctioned: 360, admitted: 311 },
      { year: '2023-24', sanctioned: 150, admitted: 164 },
      { year: '2022-23', sanctioned: 150, admitted: 144 }
    ],
    mous: [
      { id: 'm1', partner: 'Innovative Technologies', date: '15-11-2022', description: 'Technology exchange and internships.' },
      { id: 'm2', partner: 'Elite Technologies', date: '09-03-2020', description: 'Software development training.' },
      { id: 'm3', partner: 'Gagan Apps', date: '19-08-2019', description: 'App development workshops.' },
      { id: 'm4', partner: 'Supraja Technologies', date: '05-05-2022', description: 'Cybersecurity training.' },
      { id: 'm5', partner: 'Edify Educational Services', date: '10-12-2021', description: 'Educational content development.' },
      { id: 'm6', partner: 'Oracle Academy', date: '17-10-2024', description: 'Database and Java certification.' }
    ],
    achievements: [
      { id: 'a1', title: 'Hackathon 2022', studentName: 'M. Sukanya', description: '2nd Prize at KLU Hackathon.', date: '27-10-2022', type: 'technical' },
      { id: 'a2', title: 'Hackarena Winner', studentName: 'M. Durga Venkata', description: '1st Prize at Hackarena.', date: '08-01-2023', type: 'technical' },
      { id: 'a3', title: 'Paper Presentation', studentName: 'M. Sulaman', description: '2nd Prize for Poster Presentation at VIIT.', date: '15-10-2024', type: 'academic' }
    ],
    activities: [
      { id: 'act1', title: 'AI Integration Workshop', date: '30-12-2024', type: 'workshop', description: 'Workshop on AI Integration in Hardware.' },
      { id: 'act2', title: 'Social Networks Analysis', date: '27-12-2024', type: 'guest_lecture', description: 'Guest lecture on Identifying Key Influencers.' },
      { id: 'act3', title: 'NSS Camp', date: '2023', type: 'cultural', description: 'Blood donation camp and awareness programs.' }
    ]
  },
  it: {
    id: 'it',
    name: 'Information Technology',
    code: 'IT',
    hodName: 'Dr. Dola Sanjay S',
    intake: 120,
    vision: 'To produce innovative IT professionals who can develop globally competent and socially useful Information Technology enabled solutions.',
    mission: [
      'Produce software engineers with basic knowledge in problem-solving skills.',
      'Produce engineers with strong practical and theoretical exposure.',
      'Strengthen industry-academia partnerships with global relevance.'
    ],
    peos: [
      { id: 'PEO1', statement: 'Apply knowledge of mathematics, science and Engineering fundamentals to solve IT problems.' },
      { id: 'PEO2', statement: 'Use various software tools and technologies to solve problems related to academia and industry.' }
    ],
    faculty: [
      { id: '1', name: 'Dr. Dola Sanjay S', designation: 'Professor & Principal', qualification: 'Ph.D', specialization: 'IT', joiningDate: '15/12/2019', isRegular: true, photo: 'https://randomuser.me/api/portraits/men/16.jpg' },
      { id: '2', name: 'Dr. G. Sreedevi Kumari', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'Applied Math', joiningDate: '15/11/2021', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/17.jpg' },
      { id: '3', name: 'Dr. G. Krishnakumari', designation: 'Associate Professor', qualification: 'Ph.D', specialization: 'Physics', joiningDate: '06/08/2008', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/18.jpg' },
      { id: '4', name: 'Ch. Dhanalakshmi', designation: 'Assistant Professor', qualification: 'M.Sc', specialization: 'Mathematics', joiningDate: '01/06/2022', isRegular: true, photo: 'https://randomuser.me/api/portraits/women/19.jpg' }
    ],
    labs: [
      { id: 'l1', name: 'IT Workshop', description: 'Hardware and OS installation.', equipment: ['PC Components', 'OS Media'] },
      { id: 'l2', name: 'Web Technologies Lab', description: 'HTML, CSS, JS, and PHP development.', equipment: ['Web Servers', 'Browsers'] },
      { id: 'l3', name: 'Data Mining Lab', description: 'Weka and Python for data analysis.', equipment: ['Data Analysis Tools'] }
    ],
    stats: [
      { year: '2024-25', sanctioned: 120, admitted: 100 },
      { year: '2023-24', sanctioned: 60, admitted: 64 },
      { year: '2022-23', sanctioned: 60, admitted: 61 }
    ],
    mous: [
      { id: 'm1', partner: 'L4G Solutions Pvt Ltd', date: '07-04-2020', description: 'Skill development.' },
      { id: 'm2', partner: 'Innovative Technologies', date: '15-11-2022', description: 'Internships.' },
      { id: 'm3', partner: 'Elite Technologies', date: '09-03-2020', description: 'Training.' },
      { id: 'm4', partner: 'Cortek Test Solutions', date: '03-01-2022', description: 'Testing tools.' },
      { id: 'm5', partner: 'Certybox Skills for Tomorrow', date: '17-03-2020', description: 'Certification courses.' },
      { id: 'm6', partner: 'Eleation', date: '09-09-2021', description: 'CAE training.' }
    ],
    achievements: [
       { id: 'a1', title: 'NPTEL Gold Medal', studentName: 'T. Sirisha', description: 'Topper in Cloud Computing course.', date: '2023', type: 'academic' },
       { id: 'a2', title: 'Smart India Hackathon', studentName: 'N. Dheeraj', description: 'Participant in SIH 2024.', date: '2024', type: 'technical' }
    ],
    activities: [
      { id: 'act1', title: 'Workshop on Blockchain', date: '12-09-2024', type: 'workshop', description: 'Fundamentals of Blockchain by HCL Technologies.' },
      { id: 'act2', title: 'Guest Lecture on ML', date: '2023', type: 'guest_lecture', description: 'Machine Learning techniques for data analysis.' }
    ]
  },
  civil: {
    id: 'civil',
    name: 'Civil Engineering',
    code: 'CIVIL',
    hodName: 'TBD',
    intake: 30,
    vision: 'To impart quality education in Civil Engineering and produce globally competent professionals.',
    mission: ['To provide high quality education.', 'To encourage research and development.', 'To promote ethical values.'],
    peos: [{ id: 'PEO1', statement: 'Graduates will have strong technical knowledge.' }],
    faculty: [],
    labs: [{ id: 'l1', name: 'Surveying Lab', description: 'Land surveying.', equipment: ['Total Station'] }],
    stats: [{ year: '2024-25', sanctioned: 30, admitted: 0 }],
    mous: [],
    achievements: [],
    activities: []
  },
  mech: {
    id: 'mech',
    name: 'Mechanical Engineering',
    code: 'MECH',
    hodName: 'TBD',
    intake: 60,
    vision: 'To be a center of excellence in Mechanical Engineering education.',
    mission: ['To provide state-of-the-art facilities.', 'To foster innovation.'],
    peos: [{ id: 'PEO1', statement: 'Graduates will be successful mechanical engineers.' }],
    faculty: [],
    labs: [{ id: 'l1', name: 'Workshop', description: 'Manufacturing processes.', equipment: ['Lathes', 'Milling Machines'] }],
    stats: [{ year: '2024-25', sanctioned: 60, admitted: 0 }],
    mous: [],
    achievements: [],
    activities: []
  },
  eee: {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    code: 'EEE',
    hodName: 'TBD',
    intake: 60,
    vision: 'To produce competent Electrical Engineers.',
    mission: ['To impart technical knowledge.', 'To promote research.'],
    peos: [{ id: 'PEO1', statement: 'Graduates will excel in electrical engineering fields.' }],
    faculty: [],
    labs: [{ id: 'l1', name: 'Machines Lab', description: 'DC/AC Machines.', equipment: ['Motors', 'Generators'] }],
    stats: [{ year: '2024-25', sanctioned: 60, admitted: 0 }],
    mous: [],
    achievements: [],
    activities: []
  },
  aiml: {
    id: 'aiml',
    name: 'AI & Machine Learning',
    code: 'CSM',
    hodName: 'TBD',
    intake: 120,
    vision: 'To lead in AI education and research.',
    mission: ['To provide cutting-edge AI curriculum.', 'To foster innovation in ML.'],
    peos: [{ id: 'PEO1', statement: 'Graduates will be proficient in AI technologies.' }],
    faculty: [],
    labs: [{ id: 'l1', name: 'AI Lab', description: 'Deep Learning and Neural Networks.', equipment: ['GPU Workstations'] }],
    stats: [{ year: '2024-25', sanctioned: 120, admitted: 120 }],
    mous: [
      { id: 'm1', partner: 'NextHub Technologies', date: '20-05-2025', description: 'AI projects.' },
      { id: 'm2', partner: 'SkillDizer', date: '05-05-2025', description: 'Skill enhancement.' }
    ],
    achievements: [],
    activities: []
  },
  ds: {
    id: 'ds',
    name: 'Data Science',
    code: 'CSD',
    hodName: 'TBD',
    intake: 120,
    vision: 'To be a premier center for Data Science education.',
    mission: ['To teach advanced data analysis techniques.', 'To promote data-driven decision making.'],
    peos: [{ id: 'PEO1', statement: 'Graduates will be experts in data analysis.' }],
    faculty: [],
    labs: [{ id: 'l1', name: 'Big Data Lab', description: 'Hadoop and Spark.', equipment: ['Cluster setup'] }],
    stats: [{ year: '2024-25', sanctioned: 180, admitted: 180 }],
    mous: [],
    achievements: [],
    activities: []
  }
};
