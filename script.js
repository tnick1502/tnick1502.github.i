let currentLang = localStorage.getItem('lang') || 'ru';

function getNested(obj, path) {
	return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyTranslations(lang) {
	document.documentElement.lang = lang;
	document.title = i18n[lang].title || document.title;
	currentLang = lang;
	localStorage.setItem('lang', lang);

	document.querySelectorAll('.lang-btn').forEach(btn => {
		btn.classList.toggle('active', btn.dataset.lang === lang);
	});

	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n');
		let text = getNested(i18n[lang], key);
		if (text) {
			text = String(text).replace('{year}', new Date().getFullYear());
			if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
				el.placeholder = text;
			} else {
				el.textContent = text;
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	applyTranslations(currentLang);

	document.querySelectorAll('.lang-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			applyTranslations(btn.dataset.lang);
		});
	});

	// Mobile menu toggle
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');

	if (navToggle && nav) {
		navToggle.addEventListener('click', () => {
			nav.classList.toggle('open');
		});

		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', () => {
				nav.classList.remove('open');
			});
		});
	}

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href === '#') return;
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// Header background on scroll
	const header = document.querySelector('.header');
	if (header) {
		const updateHeader = () => {
			header.style.background = window.scrollY > 50
				? 'rgba(10, 10, 15, 0.95)'
				: 'rgba(10, 10, 15, 0.85)';
		};
		window.addEventListener('scroll', updateHeader, { passive: true });
	}

	// Intersection Observer for fade-in animations
	if (typeof anime !== 'undefined') {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					anime({
						targets: entry.target,
						opacity: [0, 1],
						translateY: [20, 0],
						duration: 600,
						easing: 'easeOutQuad'
					});
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

		document.querySelectorAll('.section, .timeline-item, .edu-card, .skill-category, .course-card').forEach(el => {
			el.style.opacity = '0';
			observer.observe(el);
		});
	}
});
