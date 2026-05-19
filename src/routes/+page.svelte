<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
     
    import Cursix from "cursix";
    import Nav from '$lib/Nav.svelte'
    import ScrollReveal from '$lib/ScrollReveal.svelte'

    import github from '$lib/assets/icons/github.svg'
    import x from '$lib/assets/icons/x.svg'
    import LinkedIn from '$lib/assets/icons/linkedin.svg'

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

    const projects = [
        {name: 'Symptom Explorer', img: '/assets/symptom-explorer-render.webp', url: '#', id: 'symptomExplorerProject'},
        {name: 'Orphan Disease Research', img: '/assets/orphan-disease-research.webp', url: '#', id:'researchProject'},
        {name: 'Homelab', img: '/assets/homelab.webp', url: '#', id:'homelabProject'},
    ]

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
            mediaBoxClassName: 'mf-cursor-media-box',
        });

        titleEl.addEventListener('mouseenter', () => {
            cursor.setImg('/assets/leanderguo.webp')
        });

        titleEl.addEventListener('mouseleave', () => {
            cursor.removeImg()
        });

        // Scroll Reveal Hannover Image
        hannoverEl.addEventListener('mouseenter', () => {
            if (hannoverEl.firstChild.style.opacity > 0.2) {
                cursor.setImg('/assets/hannoverImg.webp')
            }
        });

        hannoverEl.addEventListener('mouseleave', () => {
            cursor.removeImg()
        });
    });

    // Project Section
    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top top",
            end: "+=150%",           
            pin: true,
            scrub: 1,}
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",       
                end: "top 20%",         
                scrub: 1.5,             
            }
            })
            .to("#projectTitle", {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                ease: "power2.out"
        });

        tl.to(".project", {
            opacity: 1,
            y: 0,                      // Move up to original position
            stagger: 0.2,              // If you have multiple texts
            ease: "power2.out"
        });

    })
</script>

<svelte:head>
    <title>Leander Guo - Developer & Medical Writer | Hannover</title>
    <meta name="description" content="Leander Guo, 17-year-old developer and medical writer based in Hannover, Germany. Building software at the intersection of medicine and technology.">
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
    <!-- Open Graph / Social -->
    <meta property="og:title" content="Leander Guo - Developer & Medical Writer">
    <meta property="og:description" content="17-year-old builder combining medicine and software.">
    <meta property="og:type" content="profile">
    <meta property="og:image" content="/assets/leanderguo.webp">
    <meta property="og:url" content="https://yourdomain.com">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">

    <!-- Technical -->
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://yourdomain.com">
</svelte:head>

<Nav></Nav>
<section class="hero w-screen h-screen bg-(--color-secondary) flex flex-col max-sm:justify-end justify-between px-(--inner-padding) pt-12">
    <!-- <img src="/assets/leanderguo.webp" class="absolute z-0 left-1/2 right-1/2 sm:hidden" width="200px" alt=""> -->
    <h1 class="titleName uppercase z-10">LEANDER GUO</h1>
    <div class="flex justify-between items-end max-sm:items-center py-6 z-10">
        <h3 class=" uppercase">
            Frontend Developer <br>based in Hannover, Germany
        </h3>
        <span class="socials flex gap-6">
            <a href="https://github.com/liandeguo" target="_blank"><img title="GitHub Logo" src="{github}" alt=""> </a>
            <a href="https://x.com/leander_guo" target="_blank"><img title="X Logo" src="{x}" alt=""> </a>
            <a href="https://linkedin.com/in/leanderguo/" target="_blank"><img title="LinkedIn Logo" src="{LinkedIn}" alt=""> </a>
        </span>
    </div>

</section>

<ScrollReveal></ScrollReveal>

<section id="projects" class="projects section pin-section w-full h-screen max-sm:h-max flex flex-col px-(--inner-padding) py-12 items-start bg-(--color-secondary) z-0">
    <h2 id="projectTitle" class="" style="font-size: 10cqi; opacity: 0;  transform: translateY(80px);">Projects</h2>
    <div class="w-full flex justify-center">
        <ul class="list m-0 p-0 pr-3 list-none w-min z-10">
            {#each projects as project, i}
                <li class="project" id="{project.id}" data-cursor="-hidden" style="opacity: 0; transform: translateY(40px);">
                    <div class="bg-[url('{project.img}')] bg-cover bg-center w-full h-40 sm:hidden max-sm:block "></div>
                    <a href="{project.url}" class="flex items-center pr-12">
                        <h3>{project.name}</h3>
                        <p class="ml-2">[0{i+1}]</p>
                    </a>
                </li> 
                <hr class="project max-sm:mb-6" style="opacity: 0; transform: translateY(40px);">
            {/each}
        </ul>
  </div>
  <div id="symptomexplorerImg" class="bg-[url('/assets/symptom-explorer-render.webp')] absolute right-0 bottom-0 w-1/3 h-1/2 bg-cover bg-center z-0 mb-6 mr-(--inner-padding)" alt="">
  <div id="orphandiseaseImg" class="bg-[url('/assets/orphan-disease-research.webp')] absolute right-0 bottom-0 w-1/3 h-1/2 bg-cover bg-center z-0 mb-6 mr-(--inner-padding)" alt="">
  <div id="homelabImg" class="bg-[url('/assets/homelab.webp')] absolute right-0 bottom-0 w-1/3 h-1/2 bg-cover bg-center z-0 mb-6 mr-(--inner-padding)" alt="">
</section>

<section class="education px-(--inner-padding) py-12">
    <div class="flex justify-between items-center">
        <h2>Education</h2>
        <ul>
            <li>
                <h3>Kaiser-Willhelm- und Ratsgymnasium</h3>
                <p>Aug 2020 - July 2026</p>
            </li>
        </ul>
    </div>
    <hr class="my-12">
    <div class="flex justify-between items-center">
        <h2>Certifications</h2>
        <ul>
            <li>
                <a href="#">
                    <h3>Palantir Foundry Application Developer Associate</h3>
                    <span class="flex justify-between">
                        <p>Palantir Technologies</p>
                        <!-- <p>April 2026</p> -->
                    </span>
                </a>
            </li>
            <hr class="my-3">
            <li>
                <a href="#">
                    <h3>Foundry & AIP Builder Foundations</h3>
                    <span class="flex justify-between w-full">
                        <p>Palantir Technologies</p>
                        <p>April 2026</p>
                    </span>
                </a>
            </li>
            <hr class="my-3">
            <li>
                <a href="#">
                    <h3>Qualität und Nutzen künstlicher Intelligenz in der Patientenversorgung</h3>
                    <span class="flex justify-between w-full">
                        <p>Ärztekammer Nordrhein</p>
                        <p>October 2023</p>
                    </span>
                </a>
            </li>

        </ul>
    </div>
    
</section>