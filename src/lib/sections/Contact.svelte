<script>
	import { m } from '$lib/paraglide/messages.js';
	import github from '$lib/assets/icons/github.svg';
	import x from '$lib/assets/icons/x.svg';
	import LinkedIn from '$lib/assets/icons/linkedin.svg';
</script>

<section
	class="contact z-0 bg-(--color-contrast) px-(--inner-padding) py-24 text-(--color-primary)"
>
	<h2 id="publicationsTitle" style=" ">{m.contactTitle()}</h2>
	<p style="font-family: 'Comorant Garamond'; font-size: var(--font-size-title3);">
		{m.contactDesc()}
	</p>
	<span class="my-4 mb-16 flex gap-2">
		<a class="uppercase" href="mailto:hey@liande.me">hey@liande.me</a>
		-
		<a class="" href="https://linkedin.com/in/leanderguo/" target="_blank">LinkedIn</a>
		-
		<a class="" href="https://github.com/liandeguo" target="_blank">GitHub</a>
	</span>

	<hr />
	<div class="mt-6 flex w-full justify-between">
		<p class="flex-1">© 2026 Leander Guo</p>
		<span class="socials flex flex-1 items-center justify-center gap-6">
			<a href="https://github.com/liandeguo" target="_blank"
				><img class="social" title="GitHub Logo" src={github} alt="" />
			</a>
			<a class="social" href="https://x.com/leander_guo" target="_blank"
				><img title="X Logo" src={x} alt="" />
			</a>
			<a class="social" href="https://linkedin.com/in/leanderguo/" target="_blank"
				><img title="LinkedIn Logo" src={LinkedIn} alt="" />
			</a>
		</span>
		<a href="mailto:hey@liande.me" class="mailLink flex flex-1 justify-end uppercase"
			>hey@liande.me</a
		>
	</div>
</section>
