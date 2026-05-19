<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
     
    import Cursix from "cursix";
    import Nav from '$lib/Nav.svelte'
    import ScrollReveal from '$lib/ScrollReveal.svelte'
    import Volunteering from '$lib/Volunteering.svelte'

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
            const hr = item.querySelector('.progress-hr')
            const previousItem = listItems[i - 1];
            if (previousItem) {
                const prevHr = previousItem.querySelector('.progress-hr');
                // Right Now
                tl.set(item, { color: "#000000", backgroundColor: "#f2f1ef" }, 0.5 * i)
                .to(
                    slides[i],
                    {
                    autoAlpha: 1,
                    duration: 0.2
                    },
                    "<"
                ).fromTo(hr, { width: "0%" },           // start from 0
                { width: "100%", duration: 0.4, ease: "power2.out" },
                "<")
                // Previous
                .set(previousItem, { color: "#000000", backgroundColor: "#f2f1ef" }, "<")
                .set(
                    slides[i - 1],
                    {
                    autoAlpha: 0,
                    duration: 0.4
                    },
                    "<"
                ).fromTo(prevHr, { width: "100%" }, {width: "0%", border: "0",duration: 0.1 }, "<");;
            } else {
                // First
                gsap.set(item, { color: "#000000", backgroundColor: "#f2f1ef" });
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
            listItems.forEach((item, i) => {
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

<section class="projects section pin-section w-full h-screen flex flex-col px-(--inner-padding) py-12 items-start bg-(--color-secondary) z-0">
    <h2 style="font-size: 10cqi">Projects</h2>
    <div class="content w-full mt-12 flex px-0 py-3 relative ">
        <div class="right flex-1 text-left relative">
            <div class="slide center">
                <p><b>Symptom Explorer</b> is a concept showing how medical datasets can be structured and made usable.  </p>
            </div>
            <div class="slide center">
                <p>CDE</p>
            </div>
            <div class="slide center">
                <p>EFG</p>
            </div>
        </div>

        <ul class="list m-0 p-0 pr-3 list-none grow-0">
            <li class="">
                <a href="#" class="flex items-center" >
                    <h3 data-cursor-text="View">Symptom Explorer</h3> 
                    <p class="ml-2">[01]</p>
                </a>
                <hr class="progress-hr">
            </li>
            <li>
                <a href="#" class="flex items-center">
                    <h3 data-cursor-text="View">Orphan Diseases Research</h3> 
                    <p class="ml-2">[02]</p>
                </a>
                <hr class="progress-hr">
            </li>
            <li>
                <a href="#" class="flex items-center" >
                    <h3 data-cursor-text="View">Homelab</h3> 
                    <p class="ml-2">[03]</p>
                </a>
                <hr class="progress-hr">
            </li>
        </ul>
  </div>
</section>
<!-- <section class="section"></section> -->
<!-- <Volunteering></Volunteering> -->