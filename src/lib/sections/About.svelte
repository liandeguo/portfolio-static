<script>
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';

	let lines = $state();
	// Define your lines with words and optional classes
	const linesDesktop = [
		{ text: m.line1_desk() },
		{ text: m.line2_desk() },
		{ text: m.line3_desk() },
		{ text: m.line4_desk() }
	];

	const linesMobile = [
		{ text: m.line1_mobile() },
		{ text: m.line2_mobile() },
		{ text: m.line3_mobile() },
		{ text: m.line4_mobile() },
		{ text: m.line5_mobile() }
	];

	// Define which words get special classes
	const specialWords = {
		Hannover: 'hannoverEl'
	};

	onMount(() => {
		const check = () => {
			if (innerWidth > 640) {
				lines = linesDesktop;
			} else {
				lines = linesMobile;
				// Small screen (≤ 640px)
				console.log('Small screen - execute something');
				// your code here
			}
		};

		check();
		addEventListener('resize', check);
		return () => removeEventListener('resize', check);
	});

	let wrapper;
	let textRevealWrapper;

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		if (!wrapper) return;

		const chars = gsap.utils.toArray('.char');

		gsap
			.timeline({
				scrollTrigger: {
					trigger: wrapper,
					start: 'center center',
					end: '+=150%',
					scrub: true,
					pin: textRevealWrapper
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

						<span id={wordClass} class="word" data-word={word.replace(/[.,!?]/g, '')}>
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
