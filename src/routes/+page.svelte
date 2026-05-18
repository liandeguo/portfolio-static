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
    gsap.registerPlugin(ScrollTrigger);
    onMount(() => {
        
        
        const list = document.querySelector(".list");
        const fill = document.querySelector(".fill");
        const listItems = gsap.utils.toArray("li", list);
        const slides = gsap.utils.toArray(".slide");

        const pinSections = gsap.utils.toArray(".pin-section");
        const lists = gsap.utils.toArray(".list");
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".pin-section",
            start: "top top",
            end: "+=" + listItems.length * 50 + "%",
            pin: true,
            scrub: true
        }
        });

        fill &&
        gsap.set(fill, {
            scaleY: 1 / listItems.length,
            transformOrigin: "top left"
        });

        listItems.forEach((item, i) => {
        const previousItem = listItems[i - 1];
        if (previousItem) {
            // Right Now
            tl.set(item, { color: "#FFFFFF", backgroundColor: "#000000" }, 0.5 * i)
            .to(
                slides[i],
                {
                autoAlpha: 1,
                duration: 0.2
                },
                "<"
            )
            // Previous
            .set(previousItem, { color: "#000000", backgroundColor: "#f2f1ef" }, "<")
            .to(
                slides[i - 1],
                {
                autoAlpha: 0,
                duration: 0.2
                },
                "<"
            );
        } else {
            // First
            gsap.set(item, { color: "#FFFFFF", backgroundColor: "#000000" });
            gsap.set(slides[i], { autoAlpha: 1 });
        }
        });
        tl.to(
        fill,
        {
            scaleY: 1,
            transformOrigin: "top left",
            ease: "none",
            duration: tl.duration()
        },
        0
        ).to({}, {});
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

<!-- <section class="projects px-(--inner-padding) bg-(--color-secondary) h-screen w-screen">
    <h2 style="font-size: 10cqi;">Projects</h2>
    <div class="content ">
        <div class="info">
            <p class="slide">fienfgouerbgiuretbuigberougrp;stbgyubtrsilgbhdryitbgyi</p>
            <p class="slide">fienfgouerbgiuretbuigberougrp;stbgyubtrsilgbhdryitbgyi</p>
            <p class="slide">fienfgouerbgiuretbuigberougrp;stbgyubtrsilgbhdryitbgyi</p>
        </div>
        <div class="list w-max h-full">
                <span class="projectEl">
                    <h3 class="uppercase z-10">Symptom Explorer</h3>
                    <div class="projectImg w-full h-12 bg-[url('/assets/hannoverImg.webp')] bg-cover">
                    </div>
                </span>
                <hr>
                <span class="projectEl">
                    <h3 class="uppercase">Orphan Disease Clinical Trials Research</h3>
                </span>
                <hr>
                <span class="projectEl">
                    <h3 class="uppercase">Homelab</h3>
                </span>
                <hr>
        </div>
    </div>
</section> -->

<section class="projects section pin-section w-full h-screen flex flex-col px-(--inner-padding) py-12 items-start bg-(--color-secondary) z-0">
    <h2 style="font-size: 10cqi">Projects</h2>
    <div class="content w-full mt-12 flex px-0 py-3 relative ">
        <div class="right flex-1 text-left relative">
            <div class="slide center">
                <p>ABC</p>
            </div>
            <div class="slide center">
                <p>CDE</p>
            </div>
            <div class="slide center">
                <p>EFG</p>
            </div>
        </div>

        <ul class="list m-0 p-o pr-3 list-none grow-0">
            <li>
                <h3>Symptom Explorer</h3>
            </li>
            <li>
                <h3>Clinical Trial Research</h3>
            </li>
            <li>
                <h3>Homelab</h3>
            </li>
        </ul>
  </div>
</section>
<section class="section"></section>