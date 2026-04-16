"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
	return (
		<Parallax speed={-4} className="parallax-layer">
			<header className="space-y-2">
				<p className="section-eyebrow">{eyebrow}</p>
				<h2 className="section-title">{title}</h2>
			</header>
		</Parallax>
	);
}

function ExperienceCard({ item, speed }: { item: WorkExperience; speed: number }) {
	return (
		<Parallax speed={speed} className="parallax-layer stagger-item">
			<article className="portfolio-card">
				<div className="flex flex-wrap items-start justify-between gap-3">
					<div>
						<h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
						<p className="text-sm font-medium text-slate-700">{item.company}</p>
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
		</Parallax>
	);
}

function EducationCard({ item, speed }: { item: Education; speed: number }) {
	return (
		<Parallax speed={speed} className="parallax-layer stagger-item">
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
		</Parallax>
	);
}

function ProjectCard({ item, speed }: { item: Project; speed: number }) {
	return (
		<Parallax speed={speed} className="parallax-layer stagger-item">
			<article className="portfolio-card">
				<div className="space-y-3">
					<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
					<p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{item.stack.map((tech) => (
						<span key={tech} className="skill-pill">
							{tech}
						</span>
					))}
				</div>
				<div className="mt-5 flex flex-wrap gap-2 text-sm">
					<a className="inline-link" href={item.liveLink} target="_blank" rel="noreferrer">
						Live Link
					</a>
					<a className="inline-link" href={item.codeLink} target="_blank" rel="noreferrer">
						Source Code
					</a>
				</div>
			</article>
		</Parallax>
	);
}

export default function Page() {
	const [showBackToTop, setShowBackToTop] = useState(false);

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
		<main className="portfolio-shell px-6 md:px-0">
			<Parallax speed={-10} className="parallax-layer reveal-up">
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
			</Parallax>

			<section id="overview" className="hero-grid">
				<Parallax speed={-8} className="parallax-layer reveal-up">
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
				</Parallax>

				<Parallax speed={9} className="parallax-layer reveal-up" style={{ animationDelay: "120ms" }}>
					<aside className="portrait-wrap">
						<Image
							src="/profile.jfif"
							alt="Portrait of Jason Abella"
							width={500}
							height={500}
							priority
							className="portrait-image"
						/>
					</aside>
				</Parallax>
			</section>

			<section id="experience" className="space-y-6">
				<SectionHeader eyebrow="Experience" title="Work Experience" />
				<div className="space-y-4 stagger-list">
					{workExperience.map((item, index) => (
						<ExperienceCard
							key={`${item.company}-${item.role}`}
							item={item}
							speed={index % 2 === 0 ? 5 : -5}
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
						<Parallax
							key={group.label}
							speed={index % 2 === 0 ? 6 : -6}
							className="parallax-layer stagger-item"
						>
							<article className="portfolio-card">
								<h3 className="text-lg font-semibold text-slate-900">{group.label}</h3>
								<div className="mt-4 flex flex-wrap gap-2">
									{group.skills.map((skill) => (
										<span key={skill} className="skill-pill">
											{skill}
										</span>
									))}
								</div>
							</article>
						</Parallax>
					))}
				</div>
			</section>

			<section id="projects" className="space-y-6">
				<SectionHeader eyebrow="Projects" title="Selected Work" />
				<div className="grid gap-4 md:grid-cols-3 stagger-list">
					{projects.map((item, index) => (
						<ProjectCard key={item.title} item={item} speed={index % 2 === 0 ? 7 : -7} />
					))}
				</div>
			</section>

			<section id="contact" className="space-y-6">
				<SectionHeader eyebrow="Contact" title="Let's Build Something" />
				<Parallax speed={-6} className="parallax-layer reveal-up">
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
				</Parallax>
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
	);
}
