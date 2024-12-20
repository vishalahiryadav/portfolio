import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    threejs,
    umla,
    altieReality,
    poodles,
    graphQL,
    firebase,
    jalvayu,
    poodlesLayout,
    testwin,
    umlaLayout
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      // title: "React Native Developer",
      title: "soon...",
      icon: mobile,
    },

  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "graphQL",
    //   icon: graphQL,
    // },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Testwin & Umla",
      icon: umla,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Collaborated with teams to build high-quality, scalable web applications.",
        "Developed the CMS for Umla and Testwin.",
         "Improved UI/UX by 20% and built an admin dashboard to streamline user and data management.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Poodles Petcare",
      icon: poodles,
      iconBg: "#383E56",
      date: "June 2023 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Integrated Firebase for real-time updates and user authentication, ensuring a seamless user experience.",
         "Utilized Tailwind CSS to design responsive UIs, speeding up the development process"
        ],
      },
      {
        title: "Web Developer Intern",
        company_name: "Altiereality",
        icon: altieReality,
        iconBg: "#383E56",
        date: "August 2022 - February 2023",
        points: [
          "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3..",
          "Attended development programs to gain competencies and enhance skill sets.",
          ],
        },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Introduction Site",
      description:
        "jalvayu is introduction site of jalvayu brand. this brand is related to incense sticks",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: jalvayu,
      source_code_link: "https://jalvayu.co/",
    },
    {
      name: "Veterinary Servie with AI",
      description:
        "Poodles web site is related to veterinary service with AI help.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "text-yellow-200",
        },
      ],
      image: poodlesLayout,
      source_code_link: "https://poodles.in/",
    },
    {
      name: "Testwin",
      description:
        "An interactive learning experience to help students prepare for competitive exams, entrance tests and other assessments by playing Games.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: testwin,
      source_code_link: "https://testwin.in/",
    },
    {
      name: "Umla DashBoard",
      description:
        "An interactive learning experience to help students prepare for competitive exams, entrance tests and other assessments by playing Games.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "Api",
          color: "blue-text-gradient",
        },
      ],
      image: umlaLayout,
      source_code_link: "https://www.umla.in/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };