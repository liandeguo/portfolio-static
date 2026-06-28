<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/icons/github.svg';

	let { children } = $props();

	import { lenis } from 'lenis-svelte';
	import { onMount } from 'svelte';

	// Get the root instance (you can subscribe to it anywhere)
	const root = lenis.root(); // or lenis.instance('root')
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main use:lenis></main>
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }))}>{locale}</a>
	{/each}
</div>
