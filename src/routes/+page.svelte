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

    

    const projects = [
        {name: 'Symptom Explorer', img: '/assets/symptom-explorer-render.webp', url: 'https://github.com/liandeguo/disease-symptom-tool/', id: 'symptomExplorerProject'},
        {name: 'Orphan Disease Research', img: '/assets/orphan-disease-research.webp', url: 'https://github.com/liandeguo/orphanData-clinicalTrials-analysis', id:'researchProject'},
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
            })


            // Images appear correctly
        gsap.timeline({
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 10%',
                end: '+=150%',
                scrub: 1.5
            }}).to("#symptomExplorerProjectImg", {
                opacity: 1, duration: 0.33
            }).set("#symptomExplorerProjectImg", {
                opacity: 0
            }).to("#researchProjectImg", {
                opacity: 1, duration: 0.33
            }).set("#researchProjectImg", {
                opacity: 0
            }).to("#homelabProjectImg", {
                opacity: 1, duration: 0.33
            }).to("#homelabProjectImg", {
                opacity: 0, duration: 0.1
            })


        tl.to(".project", {
            opacity: 1,
            y: 0,              
            stagger: 0.2,            
            ease: "power2.out"
        });

    })
</script>

<svelte:head>
    <title>Leander Guo - Developer & Medical Writer | Hannover</title>
    <meta name="description" content="Leander Guo, 17-year-old developer and medical writer based in Hannover, Germany. Building software at the intersection of medicine and technology.">
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
    <meta property="og:title" content="Leander Guo - Developer & Medical Writer">
    <meta property="og:description" content="17-year-old builder combining medicine and software.">
    <meta property="og:type" content="profile">
    <meta property="og:image" content="/assets/leanderguo.webp">
    <meta property="og:url" content="https://liande.me">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">

    <!-- Technical -->
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://liande.me">
</svelte:head>

<Nav></Nav>

<!-- Hero Section -->
<section class="hero w-screen h-screen bg-(--color-secondary) flex flex-col max-sm:justify-end justify-between px-(--inner-padding) pt-12">
    <!-- Image for SEO -->
    <div class="sr-only">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img 
            src="/assets/leanderguo.webp" 
            alt="Picture of Leander Guo, 17-year-old frontend developer and medical writer from Hannover, Germany"
            width="800"
            height="800"
        >
    </div>

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

<!-- Info Text Scroll Reveal -->
<ScrollReveal></ScrollReveal>

<!-- Projects Listed -->
<section id="projects" class="projects section pin-section w-full h-screen max-sm:h-max flex flex-col px-(--inner-padding) py-12 items-start bg-(--color-secondary) z-0">
    <h2 id="projectTitle" class="" style="font-size: 10cqi; opacity: 0;  transform: translateY(80px);">Projects</h2>
    <div class="w-full flex justify-center">
        <ul class="list m-0 p-0 pr-3 list-none w-min z-10">
            <!-- Import Array -->
            {#each projects as project, i}
                <li class="project" id="{project.id}" data-cursor="-hidden" style="opacity: 0; transform: translateY(40px);">
                    <div class="bg-[url('{project.img}')] bg-cover bg-center w-full h-40 sm:hidden max-sm:block "></div>
                    <a href="{project.url}" target="_blank" class="flex items-center pr-12">
                        <h3>{project.name}</h3>
                        <p class="ml-2">[0{i+1}]</p>
                    </a>
                </li> 
                <div id="{project.id}Img" class="projectImages absolute bottom-0 right-0 w-1/3 h-1/3 mb-6 mr-6">
                    <img 
                        src="{project.img}"
                        alt="{project.name} - {project.name.includes('Symptom') ? 'Medical symptom analysis web app' : project.name.includes('Orphan') ? 'Orphan disease research platform' : 'Personal homelab infrastructure'}"
                        width="800"
                        height="500"
                        loading="lazy"
                        class="aspect-video object-cover w-full h-full"
                    >
                </div>
                <hr class="project max-sm:mb-6" style="opacity: 0; transform: translateY(40px);">
            {/each}
        </ul>
  </div>
</section>

<section class="education px-(--inner-padding) py-24">
    <div class="flex max-sm:block justify-between items-center">
        <h2>Certifications</h2>
        <ul>
            <li>
                <a href="https://verify.skilljar.com/c/3maov5tpb6qh" target="_blank">
                    <h3>Palantir Foundry Application Developer Associate</h3>
                    <span class="flex justify-between">
                        <p>Palantir Technologies</p>
                        <p>April 2026</p>
                    </span>
                </a>
            </li>
            <hr class="my-3">
            <li>
                <a href="https://verify.skilljar.com/c/ep76u7xgn9kq" target="_blank">
                    <h3>Foundry & AIP Builder Foundations</h3>
                    <span class="flex justify-between w-full">
                        <p>Palantir Technologies</p>
                        <p>April 2026</p>
                    </span>
                </a>
            </li>
            <hr class="my-3">
            <li>
                    <h3>Qualität und Nutzen künstlicher Intelligenz in der Patientenversorgung</h3>
                    <span class="flex justify-between w-full">
                        <p>Ärztekammer Nordrhein</p>
                        <p>October 2023</p>
                    </span>
            </li>

        </ul>
    </div>
</section>

<footer class="px-(--inner-padding) py-6">
    <hr>
    <div class="mt-6 flex justify-between w-full">
        <p class="flex-1">© 2026 Leander Guo</p>
        <span class="socials gap-6 flex-1 flex items-center justify-center">
            <a href="https://github.com/liandeguo" target="_blank"><img title="GitHub Logo" src="{github}" alt=""> </a>
            <a href="https://x.com/leander_guo" target="_blank"><img title="X Logo" src="{x}" alt=""> </a>
            <a href="https://linkedin.com/in/leanderguo/" target="_blank"><img title="LinkedIn Logo" src="{LinkedIn}" alt=""> </a>
        </span>
        <a href="mailto:hey@liande.me" class="mailLink uppercase flex-1 flex justify-end">hey@liande.me</a>
    </div>
</footer>