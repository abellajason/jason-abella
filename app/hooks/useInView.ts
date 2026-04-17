"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollRevealState {
	opacity: number;
	translateX: number;
	translateY: number;
}

export function useInView(threshold = 0.15) {
	const ref = useRef<HTMLElement | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(el);
				}
			},
			{ threshold },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, inView };
}

export function useScrollReveal(direction: "left" | "right" | "up" = "left") {
	const ref = useRef<HTMLElement | null>(null);
	const [state, setState] = useState<ScrollRevealState>({
		opacity: 0,
		translateX: direction === "left" ? -40 : direction === "right" ? 40 : 0,
		translateY: direction === "up" ? 40 : 30,
	});

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const updateScroll = () => {
			const rect = el.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			// Calculate how far through the viewport the element is
			// -1 when above viewport, 0 at bottom of viewport, 1 at top of viewport
			const elementCenter = rect.top + rect.height / 2;
			const distanceFromCenter = elementCenter - viewportHeight / 2;
			const maxDistance = viewportHeight / 2 + rect.height / 2;
			const progress = 1 - distanceFromCenter / maxDistance;

			// Clamp between 0 and 1
			const clampedProgress = Math.max(0, Math.min(1, progress));

			// Calculate transforms based on direction
			const opacity = clampedProgress;
			let translateX = 0;
			let translateY = 0;

			if (direction === "left") {
				translateX = (1 - clampedProgress) * -40;
				translateY = (1 - clampedProgress) * 30;
			} else if (direction === "right") {
				translateX = (1 - clampedProgress) * 40;
				translateY = (1 - clampedProgress) * 30;
			} else if (direction === "up") {
				translateX = 0;
				translateY = (1 - clampedProgress) * 40;
			}

			setState({
				opacity,
				translateX,
				translateY,
			});
		};

		window.addEventListener("scroll", updateScroll, { passive: true });
		updateScroll(); // Initial call

		return () => window.removeEventListener("scroll", updateScroll);
	}, [direction]);

	return { ref, ...state };
}
