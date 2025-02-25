/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Muhammad's Portfolio",
  description:
    "Passionnate about delivering innovative, cloud-based solutions that align technical and business goals for impactful results",
  og: {
    title: "Muhammad Ahmed Portfolio",
    type: "website",
    url: "https://waqar-ahmed48.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Ahmed",
  logo_name: "Muhammad Ahmed",
  nickname: "Muhammad",
  subTitle:
    "Passionate about delivering innovative, cloud-based solutions that align technical and business goals for impactful results",
  resumeLink:
    "https://drive.google.com/file/d/1Io5_I8rd0f6bnFUF5mnsPSCGYMnyX9ke/view?usp=drive_link",
  portfolio_repository: "https://github.com/waqar-ahmed48/portfolio",
  githubProfile: "https://github.com/waqar-ahmed48",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/waqar-ahmed48",
  // linkedin: "https://www.linkedin.com/in/waqar-ahmed-3086a912/",
  // gmail: "waqar.ahmed@gmail.com",

  {
    name: "Github",
    link: "https://github.com/waqar-ahmed48",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-ahmed-89b611340/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:waqar.ahmed@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Cloud Native Full Stack Application Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable and available cloud native applications to solve real world problems",
        "⚡ Experience of developing and maintaining IaC SaaS",
      ],
      softwareSkills: [
        {
          skillName: "Micorservice Architecture",
          fontAwesomeClassname: "carbon:microservices-1",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "go",
          fontAwesomeClassname: "logos:go",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "logos:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "devicon:githubactions",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "devicon:nginx",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Open Telemetry",
          fontAwesomeClassname: "devicon:opentelemetry",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "devicon:kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Istio",
          fontAwesomeClassname: "simple-icons:istio",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "devicon:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Jaeger",
          fontAwesomeClassname: "devicon:jaegertracing",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "mdi:bash",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Powershell",
          fontAwesomeClassname: "catppuccin:powershell",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "devicon:postgresql",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Embedded Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Embedded Operating Systems Design and Development",
        "⚡ Embedded System Design & Development",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Realtime applications",
          fontAwesomeClassname: "file-icons:smartos",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Digital Signal Processing",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Device Driver Stack",
          fontAwesomeClassname: "majesticons:usb-line",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/waqarahmed48/",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://tryhackme.com/r/p/waqar.ahmed",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Computing And Emerging Sciences",
      subtitle: "Bachelor of Science: Computer Science",
      logo_path: "fast_logo.png",
      alt_name: "NUCES/FAST",
      duration: "1999 - 2002",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc. Additionally, I have done courses on Embedded Systems and Natural Language Processing.",
        "⚡ Won SOFTEC 2000. First ever Sophmore to win the competition. Project: Multi-cast news platform.",
        ],
      website_link: "https://lhr.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Scrum Product Owner",
      subtitle: "CSPO",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://certification.scrumalliance.org/accounts/1093840-muhammad-waqar-ahmed/certifications/1247465-cspo",
      alt_name: "CSPO",
      color_code: "#8C151599",
    },
    {
      title: "Product Management: Building a Product Roadmap",
      subtitle: "",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/10a5cf03bea7a78e72f2a55d90647c49acb93dad36b7aa5619a6eab7a57bfc79?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNF3Ad%2BjRT3qU4VkrkRty9w%3D%3D",
      alt_name: "",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced Developer and Product Manager with a strong background in cloud-native platforms, backend systems, and microservices architecture. Expertise spans programming in Go, Python, and C++, DevOps practices (AWS, Docker, Kubernetes, Terraform), and observability tools (Open Telemetry, Jaeger). A proven track record of building and deploying Infrastructure-as-Code (IaC) solutions, implementing service meshes with Istio, and optimizing system performance for global clients in finance, healthcare, and telecom industries.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Sr. Product Manager",
          company: "NextLabs Inc.",
          company_url: "https://www.nextlabs.com/",
          logo_path: "nextlabs_logo.jpeg",
          duration: "August 2024 - To Date",
          location: "Remote - Atlanta, GA, USA",
          description:
            "Managing Data Access Enforcers (DAE) product-line for Data Centric Security Solutions implementing Attribute based access control (ABAC)",
          color: "#000000",
        },
        {
          title: "Product Manager",
          company: "Thales Inc.",
          company_url: "https://cpl.thalesgroup.com/",
          logo_path: "thales_logo.svg",
          duration: "January 2022 - August 2024",
          location: "Remote - Atlanta, GA, USA",
          description:
            "Managed cloud native data security platform - focusing on data at rest protection",
          color: "#000000",
        },
        {
          title: "Product Owner Manager",
          company: "Thales Inc.",
          company_url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/banking-payment/consulting",
          logo_path: "thales_logo.svg",
          duration: "March 2020 - December 2021",
          location: "Atlanta, GA, USA",
          description:
            "Managed portfolio of software solutions focused on Banking Smart Card Personalization. Directly managed two Product Owners and three scrum teams across three geographical locations US and Abroad.",
          color: "#000000",
        },
        {
          title: "Technical Consulting Manager - USA - Banking",
          company: "Thales Inc.",
          company_url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/banking-payment/consulting",
          logo_path: "thales_logo.svg",
          duration: "May 2015 - March 2020",
          location: "Atlanta, GA, USA",
          description:
            "Led Perso Project Delivery Center for US Banking Business looking after key customers: AmericanExpress, CapitalOne, Target, Aetna, BlackHawk,...",
          color: "#000000",
        },
        {
          title: "Technical Consulting Manager - Africa - Banking & Telecom",
          company: "Thales Inc.",
          company_url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/banking-payment/consulting",
          logo_path: "thales_logo.svg",
          duration: "May 2011 - December 2014",
          location: "Johannesburg, South Africa",
          description:
            "Oversaw and delivered projects materializing in $29.6M Perso Revenue. Managed technical relationship with key banking (Ned Bank, Standard Bank) and Telecom (MTN Group, Airtel Group) in sub-saharan africa.",
          color: "#000000",
        },
        {
          title: "Technical Account Manager",
          company: "Thales Inc.",
          company_url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/banking-payment/consulting",
          logo_path: "thales_logo.svg",
          duration: "December 2007 - May 2011",
          location: "Dubai, UAE",
          description:
            "In-charge of technical projects delivery for key Telecom Customers of Gemalto/Thales Middle East.Delivered several 3G Migration projects.Expert in service integration for eSIM Provisioning SaaS",
          color: "#000000",
        },
        {
          title: "Senior Software Development Engineer",
          company: "Mentor Graphics Inc (now Siemens EDA)",
          company_url: "https://eda.sw.siemens.com/en-US/",
          logo_path: "MentorGraphics_logo.png",
          duration: "February 2004 - Nov 2007",
          location: "Lahore, Pakistan",
          description:
            "Turned Real-time OS (Nucleus) into Open OS for Smartphones. Developed and supported USB Protocol Stack drivers for Nucleus Real-time OS. Developed and supported Windows Kernel mode protocol drivers.",
          color: "#000000",
        },
        {
          title: "Design Engineer",
          company: "And Or Logic Pvt Ltd",
          company_url: "http://www.andorlogic.com/",
          logo_path: "andorlogic_logo.png",
          duration: "January 2003 - Feb 2004",
          location: "Islamabad, Pakistan",
          description:
            "Digital Signal Processor Texas Instruments TMS320C6711 implementation and optimization of speech compression algorithms (G.723.1). PC Based application development for in-field programmability of embedded products. Multi-speech E1 channel compression module. It compressed n number of input speech channels to n/8 compressed channels. Designed to work on RF links and Ericsson’s Exchanges.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        ],
    },
    {
      title: "Volunteerships",
      experiences: [
        ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Interested in solving real world problems with innovative cloud-native applications. My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "passive-packet-sniffing",
      name: "Passive Packet Sniffing",
      createdAt: "2005-10-01T00:00:00Z",
      description: "Paper published in October 2005 Edition of Mentor’s internal Embedded Technical Journal",
      url: "",
    },
    {
      id: "exokernel",
      name: "Multiple Guest Operating System Under Exokernel",
      createdAt: "2002-01-01T00:00:00Z",
      description: "Paper published and presented at IEEE INMIC 2002",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "You can message me, I will reply within 24 hours. I can help you with Cloud Native Applications and Embedded Systems Design & Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.tbd.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Peachtree City, Atlanta, GA, USA, 30269",
    locality: "Atlanta",
    country: "USA",
    region: "Georgia",
    postalCode: "30269",
    streetAddress: "Peachtree City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rWxuusdm2Q56C5sUA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
