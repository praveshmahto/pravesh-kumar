import {
  c,
  python,
  java,
  cpp,
  dataEngineering,
  sql,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  uq,
  eyecon,
  IP,
  infosys
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

export const services = [
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "Data Engineering", icon: dataEngineering },
  { title: "SQL", icon: sql },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
 
  {
    title: "Data Engineer + Developer",
    company_name: "EYECON (PLAYTECH)",
    icon: eyecon,
    iconBg: "#161329",
    date: "Sep 2023 - Till Date",
    points: [
      "Applied advanced analytical and machine learning techniques using Python and SQL, to analyse large data sets of customer and digital data, uncovering actionable strategic insights.",
      "Apply lakehouse architecture to business use-case. Set up end-end ETL pipeline ,extract data from external source, transform and load the data into Databricks Lakehouse.",
      "Utilized Databricks and AWS Glue to create and manage ETL pipelines, ensuring efficient data processing and integration.",
      "Utilised JavaScript and TypeScript for front-end development and ensured seamless integration with Java-based back-end services.",
      "Extensive use of SQL queries to retrieve and manipulate data from databases, ensuring efficient performance.",
      "Also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building."
    ],
  },
  {
    title: "Software Developer.",
    company_name: "UQ( University of Queensland)",
    icon: uq,
    iconBg: "#161329",
    date: "Feb 2021- 2023",
    points: [
      "Workflow automation for Business Process Digitisation and Automation leveraging AI.",
      "Utilised Python and Java for data analysis, feature engineering, and model development.",
      "Implemented AI agent for data analysis using Spring AI and Python",
      "Deployment of Docker using Jenkins in AWS Infrastructure(EC2, Elastic Beanstalk, S3, RDS)",
      "Participate in all Agile meetings(daily scrum, backlog grooming,Sprint review, retrospective)."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "INTELLIGENT PATHWAYS (Working for UQ Client)",
    icon: IP,
    iconBg: "#161329",
    date: "June 2018 - Feb 2021",
    points: [
      "Development on BPM(Business Process Management) to enable workflow automation using wide stack of technologies(Java 8, Javascript, AngularJS,REST API ,Maven,GIT, SQL)",
      "Implement programming tasks as per the functional requirement.",
      "Work within a common set of programming conventions, practises and methodologies within the development team.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "INFOSYS",
    icon: infosys,
    iconBg: "#161329",
    date: "(Sep 2014 - April,2018):",
    points: [
      "Implement programming tasks as per the functional requirement.",
      "Participate in all Agile meetings(daily scrum, backlog grooming,Sprint review, retrospective).",
      "Participated in various design discussions both at project and proposal stages.",
      "Front-ended client meeting / release meeting and coordinated with different groups in clients/developers/production support/QA for solving the issues.",
      "Work within a common set of programming conventions, practises and methodologies within the development team"
    ],
  },
  {
    title: "Mathwork Ai ",
    company_name: "PERSONAL HOBBY",
    icon: mathwork,
    iconBg: "#161329",
    date: "Ongoing",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
       "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  }
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
