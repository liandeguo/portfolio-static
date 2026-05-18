<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    // Define your lines with words and optional classes
   	const lines = [
        { text: "I'm 17, based in Hannover, and I've been building" },
        { text: 'things for 9 years. Currently co-founding a' },
        { text: 'startup, researching on orphan disease ' },
        { text: 'clinical trials and finishing my Abitur.' } ];

    // Define which words get special classes
    const specialWords = {
        "Hannover": "hannoverEl",
    };

    let wrapper;
    let textRevealWrapper;

    onMount(() => {
        if (!wrapper) return;

        const chars = gsap.utils.toArray('.char');

        gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: 'center center',
                end: '+=150%',
                scrub: true,
                pin: textRevealWrapper,
                markers: false,
            }
        })
        .to(chars, { opacity: 1, stagger: 0.08 }, 0);
    });

    // Helper function to get class for a word
    function getWordClass(word) {
        const cleanWord = word.replace(/[.,!?]/g, '').trim();
        return specialWords[cleanWord] || '';
    }
</script>

<div class="page">
    <div class="textRevealWrapper" bind:this={textRevealWrapper}>
        <div bind:this={wrapper} class="text">
            {#each lines as line}
                <div class="line">
                    {#each line.text.split(' ') as word}
                        {@const wordClass = getWordClass(word)}

                        <span 
                            id="{wordClass}"
							class="word"
                            data-word={word.replace(/[.,!?]/g, '')}
                        >
                            {#each word.split('') as char}
                                <span class="char">{char}</span>
                            {/each}
                        </span>
                        <span class="space"> </span>
                    {/each}
                </div>
            {/each}
        </div>
    </div>

</div>