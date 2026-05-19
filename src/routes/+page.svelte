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
        {name: 'Symptom Explorer', img: 'https://assets.codepen.io/16327/portrait-image-8.jpg', url: '#'},
        {name: 'Orphan Disease Research', img: 'https://assets.codepen.io/16327/portrait-image-3.jpg', url: '#'},
        {name: 'Homelab', img: 'https://assets.codepen.io/16327/portrait-image-4.jpg', url: '#'},
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

    // Projects Image Cursor Preview GSAP
    onMount(() => {
        gsap.set(".project img.swipeimage", { yPercent: -50, xPercent: -50 });

        let firstEnter;

        gsap.utils.toArray(".project").forEach((el) => {
        const image = el.querySelector("img.swipeimage"),
            setX = gsap.quickTo(image, "x", { duration: 0.4, ease: "power3" }),
            setY = gsap.quickTo(image, "y", { duration: 0.4, ease: "power3" }),
            align = (e) => {
            if (firstEnter) {
                setX(e.clientX, e.clientX); //https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#optionally-define-a-start-value
                setY(e.clientY, e.clientY);
                firstEnter = false;
            } else {
                setX(e.clientX);
                setY(e.clientY);
            }
            },
            startFollow = () => document.addEventListener("mousemove", align),
            stopFollow = () => document.removeEventListener("mousemove", align),
            fade = gsap.to(image, {
            autoAlpha: 1,
            ease: "none",
            paused: true,
            duration: 0.1,
            onReverseComplete: stopFollow
            });

        el.addEventListener("mouseenter", (e) => {
            firstEnter = true;
            fade.play();
            startFollow();
            align(e);
        });

        el.addEventListener("mouseleave", () => fade.reverse());
        });
    })

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
<Nav></Nav>
<section class="hero w-screen h-screen bg-(--color-secondary) flex flex-col justify-between px-(--inner-padding) pt-12">
    <h1 class="titleName uppercase">LEANDER GUO</h1>
    <div class="flex justify-between items-end py-6">
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

<section id="projects" class="projects section pin-section w-full h-screen flex flex-col px-(--inner-padding) py-12 items-start bg-(--color-secondary) z-0">
    <h2 id="projectTitle" style="font-size: 10cqi; opacity: 0;  transform: translateY(80px);">Projects</h2>
    <div class="w-full flex justify-center">
        <ul class="list m-0 p-0 pr-3 list-none w-min">
            {#each projects as project, i}
                <li class="project" data-cursor="-hidden" style="opacity: 0; transform: translateY(40px);">
                    <img class="swipeimage" src="{project.img}">
                    <a href="{project.url}" class="flex items-center pr-12">
                        <h3 style="">{project.name}</h3>
                        <p class="ml-2">[0{i+1}]</p>
                    </a>
                </li> 
                <hr class="project" style="opacity: 0; transform: translateY(40px);">
            {/each}
        </ul>
  </div>
</section>
<!-- <section class="section"></section> -->
<!-- <Volunteering></Volunteering> -->