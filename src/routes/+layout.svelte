<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import { lenis } from 'lenis-svelte';
	import { onMount } from 'svelte';

	// Get the root instance (you can subscribe to it anywhere)
	const root = lenis.root(); // or lenis.instance('root')
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main use:lenis>
</main>
{@render children()}
