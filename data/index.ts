export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a LMS in Spring Boot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "A Traveling Agency Website",
    des: "I developed a professional website for a travel agency as part of a paid project, delivering a user-friendly platform.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/sass.svg", "/godaddy.svg", "/cloudflare.svg"],
    link: "https://shrihariomyatra.in",
  },
  {
    id: 2,
    title: "School Management and Live Teaching System",
    des: "Created a fully functional website for a live teaching and school management system, In React and Spring Boot.",
    img: "/p3.png",
    iconLists: [
      "/spring-boot.svg",
      "/re.svg",
      "/tail.svg",
      "/docker.svg",
      "aws.svg",
    ],
    link: "https://github.com/saksham000/Online-School-Backend",
  },
  {
    id: 3,
    title: "Online Movie Ticket Booking System",
    des: "Built a ticket booking and management system using React and Spring Boot, deployed on AWS.",
    img: "/p2.png",
    iconLists: [
      "/spring-boot.svg",
      "/re.svg",
      "/bootstrap.svg",
      "/docker.svg",
      "/aws.svg",
    ],
    link: "https://github.com/saksham000/Ticket-Booking-System-Backend",
  },
  {
    id: 4,
    title: "Developing a LMS Website.",
    des: "Currently developing an LMS website with industry standards as part of a 7-member team. As a Backend Dev.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/spring-boot.svg",
      "/tail.svg",
      "/figma.svg",
    ],
    link: "https://github.com/swapnilxi/LMS-Learn",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Saksham Sharma to create a website for my travel agency, and I couldn’t be happier with the outcome. Saksham crafted a site that not only looks stunning but is also incredibly functional and easy for my clients to navigate. It beautifully showcases our travel packages and services while ensuring a smooth booking process. Their professionalism, creativity, and deep understanding of what our business needed made the entire experience seamless. I highly recommend Saksham for anyone looking to build a high-quality website!",
    name: "Akshat Goel",
    title: "Client",
    img: "/c3.png",
  },
  {
    quote:
      "Working with Saksham Sharma on my video editing website was a fantastic experience. They perfectly understood the creative vision I wanted to present and translated it into a sleek, professional, and user-friendly website. The site showcases my video projects in a way that highlights my skills and attracts potential clients. Saksham's expertise, attention to detail, and ability to deliver on time were truly impressive. I’m extremely happy with the final result and would highly recommend them to anyone looking for top-notch web development services.",
    name: "Naman Joshi",
    title: "Video Editor",
    img: "c2.png",
  },
  {
    quote:
      "I had the pleasure of working with Saksham Sharma on my website, and I couldn’t be more satisfied with the results. The site not only reflects my professional journey perfectly but is also easy to navigate and visually appealing. Saksham demonstrated excellent web development skills, always maintaining clear communication throughout the process. Their attention to detail and ability to deliver exactly what I envisioned was outstanding. I would highly recommend them to anyone looking for a skilled and reliable web developer.",
    name: "Shagun Singhal",
    title: "Freelancer",
    img: "c1.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Spring Boot",
    img: "/spring-boot.svg",
    nameImg: "/spring-boot-text.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/re.svg",
    nameImg: "/react-text.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/jenkins.svg",
    nameImg: "/jenkins-text.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/aws.svg",
    nameImg: "/aws-text.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer",
    desc: "I am developing the backend for an LMS system using Spring Boot, collaborating with top industry professionals.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Project",
    desc: "I developed a website for a travel agency based in Haridwar using React as part of a paid project.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "KAVACH 2023 Finalist",
    desc: "I competed in an India-level cybersecurity hackathon, where I was selected for the finals and successfully decrypted the WeChat app to extract chats.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open Source Contribution",
    desc: "I contributed to the open-source Spring Boot project called Feedback-Hub, developing several APIs and optimizing the REST APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/saksham000",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/saksham00/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "/",
  },
];
