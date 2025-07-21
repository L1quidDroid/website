//insert data into consts
export const personalInfo = {
  name: "Tony To",
  location: "Melbourne, Australia",
  email: "Tony.t.to2003@gmail.com",
  github: "https://github.com/L1quidDroid",
  linkedin: "https://www.linkedin.com/in/tony-to1/",
};

export const workExperience = [
  {
    company: "ANZ",
    location: "Melbourne, Australia",
    position: "👨‍💻 Software Engineer",
    period: "Mar 2025 - Present",
    achievements: [
      "- Implemented and deployed an automated Front Door system that streamlines JIRA ticket routing by intelligently directing incoming requests to appropriate teams based on predefined criteria, reducing manual triage overhead and improving response times",
      "- Developed and automated security processes using React.js, integrating APIs from Confluence, Jira, Panther, and GitHub to enhance user experience. These tools streamline engagement for security assessments across ANZ Bank for contracts, proofs of concept, apps, and websites.",
      "- Redesigned and enhanced existing dashboards by creating a new reporting interface with QlikSense, Teradata, and GCP, providing leadership with improved insights and empowering data-driven decision-making.",
      "- Led and collaborated with cross-functional teams to successfully migrate Atlassian Confluence to SaaS, ensuring seamless transition, performance optimisation, and alignment with organisational objectives",]
  },
  {
    company: "ANZ",
    location: "Melbourne, Australia",
    position: "👨‍💻 Microsegmentation Engineer Intern",
    period: "Nov 2024 - Mar 2025",
    achievements: [
      "- Enhanced internal security by implementing microsegmentation strategies using Illumio, ServiceNow, and Splunk, securing over 10,000 workloads, and reducing internal threat exposure and improving network visibility",
      "- Streamlined team operations by creating comprehensive technical guides that documented configurations and processes, providing clear references for 20 operational team members, and improving on-boarding efficiency.",
      "- Automated the bulk SaaS migration of 1,000+ production servers by developing and deploying Python and Bash scripts, reducing manual effort and accelerating deployment timelines by over 50\%",
      "- Collaborated across ANZ by effectively communicating security policy changes to cross-functional stakeholders, including the Product Owner, ensuring agent implementation on servers.",
    ],
  },
  {
    company: "Samsung Electronics",
    location: "Melbourne, Australia",
    position: "📲 Experience Consultant",
    period: "Jun 2022 - May 2025",
    achievements: [
      "- Oversee daily business operations, ensuring streamlined workflows and efficiency.",
      "- Collaborated with technical stakeholders and inventory teams, ensuring product availability and accurate information for efficient operations.",
      "- Troubleshoot complex hardware and software issues, optimising device performance and customer satisfaction.",
      "- Use data-driven insights to optimise sales, service, or logistics strategies.",
    ],
  },
];

export const education = [
  {
    institution: "Latrobe University",
    location: "Melbourne Australia",
    degree: "Bachelor of Cybersecurity",
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "Solidity",
  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "React Native",
    "Tailwind CSS",
    "HTML",
  ],
  backendDevelopment: ["Nodejs", "Java"],
  databaseAndStorage: ["PostgreSQL", "JQL"],
  cloudAndDevOps: ["AWS", "GCP", "Azure"],
  toolsAndServices: [
    "Clerk (Auth)",
    "AWS Lambda",
    "Panther",
    "Illumio",
    "ServiceNow",
    "Jira",
    "Confluence",



  ],
};

export const projects = [
  {
    title: "SolSecurity Ethereum Smart Contract Auditing",
    github: "https://github.com/L1quidDroid/SolSecurity",
    description: [
      "SolSecurity is a web application which can analyse security vulnerabilities within smart contracts written in the Solidity language for the Ethereum blockchain.",
      "Used FastAPI for robust server-side logic and secure data processing.",
      "Implemented AWS services (WAF, ELB) for optimal scaling and enhanced security.",
      "Integrated Slither for in-depth smart contract vulnerability analysis.",
      "Automated vulnerability reports with actionable recommendations.",
    ],
  },
  {
    title: "Mental Aarog",
    github: "",
    description: [
      "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
      "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
      "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
      "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
      "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
    ],
  },
];

export const awards = [
  {
    name: "Security +",
    issuer: "CompTia ",
    date: "Oct 2024",
    type: "International",
  
  },
  {
    name: "Network +",
    issuer: "CompTia",
    date: "Sep 2024",
    type: "International",
   
  },
  {
    name: "Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Jun 2024",
    type: "International",
  
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "GCP",
    date: "Sep 2025",
  },

  
];
