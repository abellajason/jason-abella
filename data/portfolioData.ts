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
	screenshots: string[];
};

export const profileOverview = {
	name: "Jason Abella",
	title: "Frontend Web Developer",
	intro:
		"Frontend Developer with 5+ years of experience building scalable, high-performance web applications using React, Next.js, and Astro. Specialized in responsive UI development, performance optimization, and SEO-focused architecture. Proven ability to translate design concepts into production-ready interfaces while improving Core Web Vitals, usability, and user engagement. Experienced working in Agile teams delivering modern web solutions for e-commerce and local SEO platforms. ",
	location: "Cebu, Philippines",
	email: "abellajason20@gmail.com",
	github: "https://github.com/abellajason",
	linkedin: "https://www.linkedin.com/in/jason-abella-b4837215a/",
};

export const workExperience: WorkExperience[] = [
	{
		role: "Frontend Web Developer",
		company: "Locafy",
		timeline: "April 2023 - Present",
		location: "Remote",
		highlights: [
			"Developed and maintained responsive websites optimized for desktop and mobile devices",
			"Built SEO-focused websites and dynamic location pages for local search platforms",
			"Improved page performance and loading speed through optimization techniques such as code splitting, asset compression, and lazy loading ",
		],
	},
	{
		role: "Frontend Web Developer",
		company: "Full Potential Solutions Inc",
		timeline: "October 2021 - December 2022",
		location: "Remote",
		highlights: [
			"Delivered responsive web interfaces aligned with modern UX standards",
			"Worked closely with cross-functional teams to ship features on time in an Agile environment",
			"Performed code reviews to maintain consistency, readability, and quality across the codebase",
		],
	},
	{
		role: "Frontend Web Developer",
		company: "Appshouse, Inc",
		timeline: "May 2018 - March 2021",
		location: "Hybrid",
		highlights: [
			"Designed and developed user interfaces based on brand guidelines and design specifications",
			"Implemented responsive layouts ensuring compatibility across devices and browsers",
			"Contributed to a company-wide design system, improving UI consistency and development efficiency",
		],
	},
];

export const educationHistory: Education[] = [
	{
		institution: "Asian College of Technology International Educational Foundation",
		credential: "Bachelor of Science in Information Technology",
		timeline: "June 2012 - March 2016",
		details:
			"Focused on web systems, software development fundamentals, and team-based software delivery.",
	}
];

export const skillGroups = [
	{
		label: "Frontend",
		skills: [
			{ name: "HTML5", icon: "SiHtml5" },
			{ name: "CSS3", icon: "SiCss" },
			{ name: "JavaScript", icon: "SiJavascript" },
			{ name: "TypeScript", icon: "SiTypescript" },
			{ name: "React", icon: "SiReact" },
			{ name: "Next.js", icon: "SiNextdotjs" },
			{ name: "Tailwind CSS", icon: "SiTailwindcss" },
			{ name: "Astro", icon: "SiAstro" },
		],
	},
	{
		label: "Backend & Data",
		skills: [
			{ name: "Node.js", icon: "SiNodedotjs" },
			{ name: "Express", icon: "SiExpress" },
			{ name: "REST APIs", icon: null },
			{ name: "PostgreSQL", icon: "SiPostgresql" },
			{ name: "Firebase", icon: "SiFirebase" },
		],
	},
	{
		label: "Tools & Practices",
		skills: [
			{ name: "Git", icon: "SiGit" },
			{ name: "GitHub", icon: "SiGithub" },
			{ name: "Figma", icon: "SiFigma" },
			{ name: "Responsive Design", icon: null },
			{ name: "Accessibility", icon: null },
			{ name: "Performance Tuning", icon: null },
		],
	},
];

export const projects: Project[] = [
	{
		title: "Astro Components",
		description:
			"A modular UI component library built with Astro, featuring reusable islands, content collections, and static-first rendering patterns optimized for performance and developer experience.",
		stack: ["Astro", "TypeScript", "Tailwind CSS"],
		screenshots: [
			"/projects/astro-components/sc1.png",
			"/projects/astro-components/sc2.png",
			"/projects/astro-components/sc3.png",
			"/projects/astro-components/sc4.png",
			"/projects/astro-components/sc5.png",
			"/projects/astro-components/sc6.png",
			"/projects/astro-components/sc7.png",
			"/projects/astro-components/sc8.png",
		],
	},
	{
		title: "Locafy",
		description:
			"A local SEO platform that generates high-performance, location-specific landing pages at scale. Built with dynamic content injection, structured schema markup, and Core Web Vitals optimization to drive local search visibility.",
		stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		screenshots: [
			"/projects/locafy/sc1.png",
			"/projects/locafy/sc2.png",
			"/projects/locafy/sc3.png",
			"/projects/locafy/sc4.png",
			"/projects/locafy/sc5.png",
			"/projects/locafy/sc6.png",
		],
	},
	{
		title: "Werkingmate Admin",
		description:
			"An internal admin dashboard for managing workspaces, team members, and operational workflows. Features role-based access control, data tables, and a clean accessible interface built for day-to-day operational efficiency.",
		stack: ["Next.js","React", "TypeScript", "REST APIs", "Tailwind CSS"],
		screenshots: [
			"/projects/werkingmate-admin/sc1.png",
			"/projects/werkingmate-admin/sc2.png",
			"/projects/werkingmate-admin/sc3.png",
			"/projects/werkingmate-admin/sc4.png",
		],
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
