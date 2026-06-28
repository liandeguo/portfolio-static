<script>
	import github from '$lib/assets/icons/github.svg';
	import x from '$lib/assets/icons/x.svg';
	import LinkedIn from '$lib/assets/icons/linkedin.svg';

	import { m } from '$lib/paraglide/messages';
</script>

<section
	class="hero flex h-screen w-screen flex-col justify-between bg-(--color-secondary) px-(--inner-padding) pt-12 max-sm:justify-end"
>
	<!-- Image for SEO -->
	<div class="sr-only">
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img
			src="/assets/leanderguo.webp"
			alt="Picture of Leander Guo, 17-year-old frontend developer and medical writer from Hannover, Germany"
			width="800"
			height="800"
		/>
	</div>

	<h1 class="titleName z-10 uppercase">Leander Guo</h1>

	<div class="z-10 flex items-end justify-between py-6 max-sm:items-center">
		<h3 class=" uppercase">
			{m.job1()} <br />
			{m.job2()} <br />{m.location()}
		</h3>
		<span class="socials flex gap-6">
			<a href="https://github.com/liandeguo" target="_blank"
				><img title="GitHub Logo" src={github} alt="" />
			</a>
			<a href="https://x.com/leander_guo" target="_blank"><img title="X Logo" src={x} alt="" /> </a>
			<a href="https://linkedin.com/in/leanderguo/" target="_blank"
				><img title="LinkedIn Logo" src={LinkedIn} alt="" />
			</a>
		</span>
	</div>
</section>
