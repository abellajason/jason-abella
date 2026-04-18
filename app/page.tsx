"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
	SiAstro,
	SiCss,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { Parallax } from "react-scroll-parallax";
import {
	type Education,
	type Project,
	type WorkExperience,
	educationHistory,
	navLinks,
	profileOverview,
	projects,
	skillGroups,
	socialLinks,
	workExperience,
} from "../data/portfolioData";
import { useScrollReveal } from "./hooks/useInView";

function useIsMobile() {
	const query = "(max-width: 767px)";

	const subscribe = (onStoreChange: () => void) => {
		if (typeof window === "undefined") return () => {};
		const mq = window.matchMedia(query);

		if (typeof mq.addEventListener === "function") {
			mq.addEventListener("change", onStoreChange);
			return () => mq.removeEventListener("change", onStoreChange);
		}

		mq.addListener(onStoreChange);
		return () => mq.removeListener(onStoreChange);
	};

	const getSnapshot = () => {
		if (typeof window === "undefined") return false;
		return window.matchMedia(query).matches;
	};

	return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function MaybeParallax({ speed, className, children, style }: { speed: number; className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <div className={className} style={style}>{children}</div>;
	}
	return <Parallax speed={speed} className={className} style={style}>{children}</Parallax>;
}

const ICON_MAP: Record<string, React.ElementType> = {
	SiHtml5,
	SiCss,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiAstro,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
	SiFirebase,
	SiGit,
	SiGithub,
	SiFigma,
};

function AnimatedCard({ children, direction = "left" }: { children: React.ReactNode; direction?: "left" | "right" | "up" }) {
	const { ref, opacity, translateX, translateY } = useScrollReveal(direction);
	const isMobile = useIsMobile();
	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			style={isMobile ? { position: "relative", height: "100%" } : {
				opacity,
				transform: `translateX(${translateX}px) translateY(${translateY}px)`,
				transition: "opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
				position: "relative",
				height: "100%",
			}}
		>
			{children}
		</div>
	);
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
	return (
		<MaybeParallax speed={-4} className="parallax-layer">
			<header className="space-y-2">
				<p className="section-eyebrow">{eyebrow}</p>
				<h2 className="section-title">{title}</h2>
			</header>
		</MaybeParallax>
	);
}

function ExperienceCard({ item, speed, direction = "left" }: { item: WorkExperience; speed: number; direction?: "left" | "right" }) {
	return (
		<AnimatedCard direction={direction}>
			<MaybeParallax speed={speed} className="parallax-layer stagger-item">
				<article className="portfolio-card h-full">
					<div className="flex flex-wrap items-start justify-between gap-3">
						<div>
							<h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
							<p className="text-sm font-medium text-[#00f5d4]">{item.company}</p>
						</div>
						<div className="text-right text-xs uppercase tracking-[0.18em] text-slate-600">
							<p>{item.timeline}</p>
							<p>{item.location}</p>
						</div>
					</div>
					<ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
						{item.highlights.map((highlight) => (
							<li key={highlight} className="list-disc ml-5">
								{highlight}
							</li>
						))}
					</ul>
				</article>
			</MaybeParallax>
		</AnimatedCard>
	);
}

function EducationCard({ item, speed }: { item: Education; speed: number }) {
	return (
		<AnimatedCard direction="up">
			<MaybeParallax speed={speed} className="parallax-layer stagger-item">
				<article className="portfolio-card">
					<div className="flex flex-wrap items-start justify-between gap-3">
						<div>
							<h3 className="text-lg font-semibold text-slate-900">{item.credential}</h3>
							<p className="text-sm font-medium text-slate-700">{item.institution}</p>
						</div>
						<p className="text-xs uppercase tracking-[0.18em] text-slate-600">{item.timeline}</p>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-slate-700">{item.details}</p>
				</article>
			</MaybeParallax>
		</AnimatedCard>
	);
}

function ProjectModal({ item, onClose }: { item: Project; onClose: () => void }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const prev = () => setActiveIndex((i) => (i - 1 + item.screenshots.length) % item.screenshots.length);
	const next = () => setActiveIndex((i) => (i + 1) % item.screenshots.length);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	},);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-6xl bg-[#080e1ab8] rounded-2xl overflow-hidden shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between px-5 py-4 border-b border-[#00f5d4]">
					<div>
						<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
						<p className="text-xs text-slate-500 mt-0.5">{activeIndex + 1} / {item.screenshots.length}</p>
					</div>
					<button
						type="button"
						aria-label="Close"
						onClick={onClose}
						className="text-slate-400 hover:text-slate-700 transition-colors text-2xl leading-none"
					>
						&times;
					</button>
				</div>
				<div className="relative w-full aspect-video bg-[#080e1ab8]">
					<Image
						key={item.screenshots[activeIndex]}
						src={item.screenshots[activeIndex]}
						alt={`${item.title} screenshot ${activeIndex + 1}`}
						fill
						sizes="(max-width: 768px) 100vw, 90vw"
						className="object-contain"
					/>
					{item.screenshots.length > 1 && (
						<>
							<button
								type="button"
								aria-label="Previous screenshot"
								onClick={prev}
								className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
							>
								&#8249;
							</button>
							<button
								type="button"
								aria-label="Next screenshot"
								onClick={next}
								className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
							>
								&#8250;
							</button>
						</>
					)}
				</div>
				<div className="flex gap-2 overflow-x-auto p-3 bg-[#080e1ab8]">
					{item.screenshots.map((src, i) => (
						<button
							type="button"
							key={src}
							onClick={() => setActiveIndex(i)}
							className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-colors cursor-pointer ${
								i === activeIndex ? "border-[#00f5d4]" : "border-transparent"
							}`}
						>
							<Image src={src} alt={`Thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

function ProjectCard({ item, speed, direction = "left", onOpen }: { item: Project; speed: number; direction?: "left" | "right" | "up"; onOpen: () => void }) {
	return (
		<MaybeParallax speed={speed} className="parallax-layer stagger-item">
			<AnimatedCard direction={direction}>
				<article
					className="portfolio-card project-card cursor-pointer group"
					onClick={onOpen}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => e.key === "Enter" && onOpen()}
				>
					<div className="relative w-full aspect-video overflow-hidden bg-slate-100">
						<Image
							src={item.screenshots[0]}
							alt={`${item.title} preview`}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
							<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-full">
								View screenshots
							</span>
						</div>
					</div>
					<div className="p-4 space-y-3">
						<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
						<p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
					</div>
					<div className="px-4 pb-4 flex flex-wrap gap-2">
						{item.stack.map((tech) => (
							<span key={tech} className="skill-pill">
								{tech}
							</span>
						))}
					</div>
				</article>
			</AnimatedCard>
		</MaybeParallax>
	);
}

export default function Page() {
	const [showBackToTop, setShowBackToTop] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 260);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
		{selectedProject && <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} />}
		<main className="portfolio-shell px-4!">
			<MaybeParallax speed={-10} className="parallax-layer reveal-up">
				<nav className="top-nav" aria-label="Portfolio sections">
					<ul className="top-nav-list">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a className="top-nav-link" href={link.href}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</MaybeParallax>

			<section id="overview" className="hero-grid">
				<MaybeParallax speed={-8} className="parallax-layer reveal-up">
					<div className="space-y-6">
						<p className="section-eyebrow">Profile Overview</p>
						<h1 className="hero-title">{profileOverview.name}</h1>
						<p className="hero-subtitle">{profileOverview.title}</p>
						<p className="max-w-xl text-base leading-relaxed text-slate-700">{profileOverview.intro}</p>
						<div className="flex flex-wrap gap-3 text-sm text-slate-700">
							<span className="meta-pill">{profileOverview.location}</span>
							<span className="meta-pill">{profileOverview.email}</span>
						</div>
						<div className="flex flex-wrap gap-2">
							<a className="cta-btn" href="/JASON_ABELLA.pdf" target="_blank" rel="noreferrer" download>
								Download Resume
							</a>
							<a className="cta-btn cta-btn-secondary" href="#contact">
								Contact Me
							</a>
						</div>
						<div className="flex flex-wrap gap-2 text-sm">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									className="social-link"
									href={social.href}
									target="_blank"
									rel="noreferrer"
								>
									{social.label}
								</a>
							))}
						</div>
					</div>
				</MaybeParallax>

				<MaybeParallax speed={9} className="parallax-layer reveal-up" style={{ animationDelay: "120ms" }}>
					<aside className="portrait-wrap">
						<Image
							src="/profile2.png"
							alt="Portrait of Jason Abella"
							width={500}
							height={500}
							priority
							className="portrait-image"
						/>
					</aside>
				</MaybeParallax>
			</section>

			<section id="experience" className="space-y-6">
				<SectionHeader eyebrow="Experience" title="Work Experience" />
				<div className="space-y-4 stagger-list">
					{workExperience.map((item, index) => (
						<ExperienceCard
							key={`${item.company}-${item.role}`}
							item={item}
							speed={index % 2 === 0 ? 5 : -5}
							direction={index % 2 === 0 ? "left" : "right"}
						/>
					))}
				</div>
			</section>

			<section id="education" className="space-y-6">
				<SectionHeader eyebrow="Education" title="Academic Background" />
				<div className="grid gap-4 md:grid-cols-2 stagger-list">
					{educationHistory.map((item, index) => (
						<EducationCard
							key={`${item.institution}-${item.credential}`}
							item={item}
							speed={index % 2 === 0 ? 4 : -4}
						/>
					))}
				</div>
			</section>

			<section id="skills" className="space-y-6">
				<SectionHeader eyebrow="Skills" title="Technology Stack" />
				<div className="grid gap-4 md:grid-cols-3 stagger-list">
					{skillGroups.map((group, index) => (
						<MaybeParallax
							key={group.label}
							speed={index % 2 === 0 ? 6 : -6}
							className="parallax-layer stagger-item"
						>
							<AnimatedCard direction="up">
								<article className="portfolio-card skill-card">
									<h3 className="text-lg font-semibold text-slate-900 skill-card-title">{group.label}</h3>
									<div className="mt-4 flex flex-wrap gap-2">
										{group.skills.map((skill) => {
											const IconComponent = skill.icon ? ICON_MAP[skill.icon] : null;
											return (
												<span key={skill.name} className="skill-pill skill-pill--icon">
													{IconComponent && <IconComponent className="skill-icon" aria-hidden="true" />}
													{skill.name}
												</span>
											);
										})}
									</div>
								</article>
							</AnimatedCard>
						</MaybeParallax>
					))}
				</div>
			</section>

			<section id="projects" className="space-y-6">
				<SectionHeader eyebrow="Projects" title="Selected Work" />
				<div className="grid gap-4 md:grid-cols-3 stagger-list">
					{projects.map((item, index) => (
						<ProjectCard key={item.title} item={item} speed={index % 2 === 0 ? 7 : -7} direction="up" onOpen={() => setSelectedProject(item)} />
					))}
				</div>
			</section>

			<section id="contact" className="space-y-6">
				<SectionHeader eyebrow="Contact" title="Let's Build Something" />
				<MaybeParallax speed={-6} className="parallax-layer reveal-up">
					<article className="portfolio-card">
						<p className="max-w-2xl text-sm leading-relaxed text-slate-700">
							I am open to freelance projects, collaborations, and full-time opportunities in web
							development. Reach out by email or connect through my social profiles.
						</p>
						<div className="mt-5 flex flex-wrap gap-2">
							<a className="cta-btn" href={`mailto:${profileOverview.email}`}>
								Email Me
							</a>
							<a
								className="cta-btn cta-btn-secondary"
								href={profileOverview.github}
								target="_blank"
								rel="noreferrer"
							>
								View GitHub
							</a>
						</div>
					</article>
				</MaybeParallax>
			</section>

			<button
				type="button"
				aria-label="Back to top"
				onClick={handleBackToTop}
				className={`back-to-top-btn ${showBackToTop ? "is-visible" : ""}`}
			>
				<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
					<path d="M6.7 14.7a1 1 0 0 1 0-1.4l4.6-4.6a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 1 1-1.4 1.4L12 10.8l-3.9 3.9a1 1 0 0 1-1.4 0Z" />
				</svg>
			</button>
		</main>
		</>
	);
}
