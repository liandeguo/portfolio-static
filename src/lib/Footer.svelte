<script>
	import github from '$lib/assets/icons/github.svg';
	import x from '$lib/assets/icons/x.svg';
	import LinkedIn from '$lib/assets/icons/linkedin.svg';
</script>

<footer class="px-(--inner-padding) py-6">
	<hr />
	<div class="mt-6 flex w-full justify-between">
		<p class="flex-1">© 2026 Leander Guo</p>
		<span class="socials flex flex-1 items-center justify-center gap-6">
			<a href="https://github.com/liandeguo" target="_blank"
				><img title="GitHub Logo" src={github} alt="" />
			</a>
			<a href="https://x.com/leander_guo" target="_blank"><img title="X Logo" src={x} alt="" /> </a>
			<a href="https://linkedin.com/in/leanderguo/" target="_blank"
				><img title="LinkedIn Logo" src={LinkedIn} alt="" />
			</a>
		</span>
		<a href="mailto:hey@liande.me" class="mailLink flex flex-1 justify-end uppercase"
			>hey@liande.me</a
		>
	</div>
</footer>
