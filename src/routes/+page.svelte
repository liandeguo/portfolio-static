<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Cursix from 'cursix';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Publications from '$lib/sections/Publications.svelte';
	import Education from '$lib/sections/Education.svelte';

	// Cursor
	onMount(async () => {
		Cursix.registerGSAP(gsap);
		const hannoverEl = document.getElementById('hannoverEl');
		const titleEl = document.querySelector('.titleName');

		const cursor = new Cursix({
			className: 'mf-cursor',
			innerClassName: 'mf-cursor-inner',
			textClassName: 'mf-cursor-text',
			mediaClassName: 'mf-cursor-media',
			mediaBoxClassName: 'mf-cursor-media-box'
		});

		titleEl.addEventListener('mouseenter', () => {
			cursor.setImg('/assets/leanderguo.webp');
		});

		titleEl.addEventListener('mouseleave', () => {
			cursor.removeImg();
		});

		// Scroll Reveal Hannover Image
		hannoverEl.addEventListener('mouseenter', () => {
			if (hannoverEl.firstChild.style.opacity > 0.2) {
				cursor.setImg('/assets/hannoverImg.webp');
			}
		});

		hannoverEl.addEventListener('mouseleave', () => {
			cursor.removeImg();
		});
	});
</script>

<svelte:head>
	<title>Leander Guo - Developer & Medical Writer | Hannover</title>
	<meta
		name="description"
		content="Leander Guo, 17-year-old developer and medical writer based in Hannover, Germany. Building software at the intersection of medicine and technology."
	/>
	<script type="application/ld+json">
        const schema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Leander Guo",
            "url": "https://liande.me",
            "jobTitle": "Developer & Medical Writer",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hannover",
                "addressCountry": "DE"
            },
            "knowsAbout": ["Medical Software", "Web Development", "Healthcare Technology", "Artificial Intelligence"],
            "sameAs": [
                "https://github.com/liandeguo",
                "https://x.com/leander_guo",
                "https://linkedin.com/in/leanderguo/"
            ]
        };
	</script>
	<!-- Open Graph / Social -->
	<meta property="og:title" content="Leander Guo - Developer & Medical Writer" />
	<meta property="og:description" content="17-year-old builder combining medicine and software." />
	<meta property="og:type" content="profile" />
	<meta property="og:image" content="/assets/leanderguo.webp" />
	<meta property="og:url" content="https://liande.me" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Technical -->
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://liande.me" />
</svelte:head>

<Nav></Nav>

<!-- Hero Section -->
<Hero></Hero>

<!-- Info Text Scroll Reveal -->
<About></About>

<!-- Projects Listed -->
<Projects />
<!-- Publications Listed -->
<Publications></Publications>

<Education></Education>

<Footer></Footer>
