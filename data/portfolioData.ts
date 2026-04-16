export type WorkExperience = {
	role: string;
	company: string;
	timeline: string;
	location: string;
	highlights: string[];
};

export type Education = {
	institution: string;
	credential: string;
	timeline: string;
	details: string;
};

export type Project = {
	title: string;
	description: string;
	stack: string[];
	liveLink: string;
	codeLink: string;
};

export const profileOverview = {
	name: "Jason Abella",
	title: "Web Developer",
	intro:
		"I build responsive, accessible web experiences that blend product thinking with clean engineering. I enjoy turning complex ideas into interfaces that feel intuitive, quick, and purposeful.",
	location: "Philippines",
	email: "abellajason20@gmail.com",
	github: "https://github.com/abellajason",
	linkedin: "https://www.linkedin.com/in/jason-abella-b4837215a/",
};

export const workExperience: WorkExperience[] = [
	{
		role: "Frontend Developer",
		company: "Freelance & Contract Projects",
		timeline: "2023 - Present",
		location: "Remote",
		highlights: [
			"Built and shipped responsive web pages for portfolio, small business, and landing-page use cases using modern React and Next.js patterns.",
			"Collaborated with stakeholders to translate goals into practical UI requirements, user flows, and content structure.",
			"Improved page speed and usability by optimizing image delivery, reducing unnecessary rerenders, and refining semantic markup.",
		],
	},
	{
		role: "Junior Web Developer",
		company: "Independent Team Projects",
		timeline: "2021 - 2023",
		location: "Hybrid",
		highlights: [
			"Contributed to reusable component libraries for internal projects, improving consistency and reducing duplicate code.",
			"Implemented REST API integrations and form flows with robust loading and error states.",
			"Worked closely with designers to preserve visual intent while maintaining maintainable, scalable code.",
		],
	},
];

export const educationHistory: Education[] = [
	{
		institution: "STI College",
		credential: "Bachelor of Science in Information Technology",
		timeline: "2018 - 2022",
		details:
			"Focused on web systems, software development fundamentals, and team-based software delivery.",
	},
	{
		institution: "Online Continuing Education",
		credential: "Frontend Engineering Coursework",
		timeline: "2022 - Present",
		details:
			"Ongoing learning in modern React patterns, performance, accessibility, and UI architecture.",
	},
];

export const skillGroups = [
	{
		label: "Frontend",
		skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
	},
	{
		label: "Backend & Data",
		skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Firebase"],
	},
	{
		label: "Tools & Practices",
		skills: ["Git", "GitHub", "Figma", "Responsive Design", "Accessibility", "Performance Tuning"],
	},
];

export const projects: Project[] = [
	{
		title: "Personal Portfolio Website",
		description:
			"A polished and responsive portfolio built with Next.js App Router, reusable UI sections, and content blocks designed for easy updates.",
		stack: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveLink: "https://github.com/abellajason/jason-abella",
		codeLink: "https://github.com/abellajason/jason-abella",
	},
	{
		title: "Frontend Project Collection",
		description:
			"A set of web interfaces focused on modern layout systems, form handling, and responsive behavior across device sizes.",
		stack: ["React", "JavaScript", "CSS"],
		liveLink: "https://github.com/abellajason?tab=repositories",
		codeLink: "https://github.com/abellajason?tab=repositories",
	},
	{
		title: "Developer Sandbox",
		description:
			"An experimental workspace for testing UI patterns, reusable components, and optimization techniques before production rollout.",
		stack: ["Node.js", "REST APIs", "GitHub"],
		liveLink: "https://github.com/abellajason",
		codeLink: "https://github.com/abellajason",
	},
];

export const socialLinks = [
	{ label: "GitHub", href: profileOverview.github },
	{ label: "LinkedIn", href: profileOverview.linkedin },
	{ label: "Email", href: `mailto:${profileOverview.email}` },
];

export const navLinks = [
	{ label: "Overview", href: "#overview" },
	{ label: "Experience", href: "#experience" },
	{ label: "Education", href: "#education" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];
