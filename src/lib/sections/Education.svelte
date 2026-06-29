<script>
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="education bg-[#fafafa] px-(--inner-padding) py-24">
	<div class="flex items-center justify-between max-sm:block">
		<h2>{m.educationTitles()}</h2>
		<ul>
			<li class="px-2 py-3">
				<a>
					<h3>Abitur</h3>
					<span class="flex justify-between">
						<p>Kaiser-Willhelm- und Ratsgymnasium</p>
						<p>August 2020 - {m.june()} 2026</p>
					</span>
				</a>
			</li>
			<hr class="" />
			<li class="px-2 py-3 hover:bg-(--color-contrast) hover:text-[#fafafa]">
				<a href="https://verify.skilljar.com/c/3maov5tpb6qh" target="_blank">
					<h3>Palantir Foundry Application Developer Associate</h3>
					<span class="flex justify-between">
						<p>Palantir Technologies</p>
						<p>April 2026</p>
					</span>
				</a>
			</li>
			<hr />
			<li class="px-2 py-3 hover:bg-(--color-contrast) hover:text-[#fafafa]">
				<a href="https://verify.skilljar.com/c/ep76u7xgn9kq" target="_blank">
					<h3>Foundry & AIP Builder Foundations</h3>
					<span class="flex w-full justify-between">
						<p>Palantir Technologies</p>
						<p>April 2026</p>
					</span>
				</a>
			</li>
			<hr />
			<li class="px-2 py-3 hover:bg-(--color-contrast) hover:text-[#fafafa]">
				<h3>Qualität und Nutzen künstlicher Intelligenz in der Patientenversorgung</h3>
				<span class="flex w-full justify-between">
					<p>Ärztekammer Nordrhein</p>
					<p>{m.october()} 2023</p>
				</span>
			</li>
			<hr />
		</ul>
	</div>
</section>
