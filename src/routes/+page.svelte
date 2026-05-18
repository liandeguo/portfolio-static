<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
    import Cursix from "cursix";
    import Nav from '$lib/Nav.svelte'
    import ScrollReveal from '$lib/ScrollReveal.svelte'
    import github from '$lib/assets/icons/github.svg'
    import x from '$lib/assets/icons/x.svg'
    import LinkedIn from '$lib/assets/icons/linkedin.svg'



    onMount(async () => {
        Cursix.registerGSAP(gsap);
        const hannoverEl = document.getElementById('hannoverEl');

        const cursor = new Cursix({
            className: 'mf-cursor',
            innerClassName: 'mf-cursor-inner',
            textClassName: 'mf-cursor-text',
            mediaClassName: 'mf-cursor-media',
            mediaBoxClassName: 'mf-cursor-media-box',
        });

        hannoverEl.addEventListener('mouseenter', () => {
            if (hannoverEl.firstChild.style.opacity > 0.2) {
                cursor.setImg('/assets/hannoverImg.webp')
            }
            
        });

        hannoverEl.addEventListener('mouseleave', () => {
            cursor.removeImg()
        });
    });

</script>
<Nav></Nav>
<section class="hero w-screen h-screen bg-(--color-secondary) flex flex-col justify-between px-(--inner-padding) pt-12">
    <h1 class="uppercase" >LEANDER GUO</h1>
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

<section class="projects px-(--inner-padding)">
    <h2>Projects</h2>
    <div>
        <h3 class="uppercase">Symptom Explorer</h3>
    </div>
</section>