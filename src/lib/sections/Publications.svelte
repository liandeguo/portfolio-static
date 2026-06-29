<script>
	import { m } from '$lib/paraglide/messages.js';

	const publications = [
		{
			title: 'Dr. med. Halluzinationen: Warum LLMs keine Differenzialdiagnosen können',
			type: m.article(),
			year: 2026,
			url: 'https://www.doccheck.com/de/detail/articles/53702-dr-med-halluzinationen-warum-llms-keine-differenzialdiagnosen-koennen'
		},
		{
			title:
				'Therapeutische Peptide: Diskrepanz zwischen m­edialer Aufmerksamkeit und klinischer Evidenz ',
			type: m.article(),
			year: 2026,
			url: 'https://www.doccheck.com/de/detail/articles/52742-therapeutische-peptide-diskrepanz-zwischen-medialer-aufmerksamkeit-und-klinischer-evidenz'
		}
	];
</script>

<section class="publications z-0 flex flex-col items-end px-(--inner-padding) py-24 max-sm:h-max">
	<h2 id="publicationsTitle" style=" ">{m.publicationsTitle()}</h2>
	<ul class="list z-10 m-0 flex w-full list-none flex-col p-0 pr-3 max-sm:gap-3">
		{#each publications as publication}
			<div class="hover:bg-[#fafafa]">
				<hr class="project mb-3" style="" />
				<li class="publication sm:mb-3">
					<a href={publication.url} target="_blank" class="flex w-full pr-12 max-sm:flex-col">
						<h3 class="italic sm:flex-1">{publication.year} | {publication.type}</h3>
						<h3 class="sm:flex-8">{publication.title}</h3>
						<h3 class="max-sm:hidden sm:flex-0">></h3>
					</a>
				</li>
				<!-- <hr class="project sm:mt-3" style="" /> -->
			</div>
		{/each}
	</ul>
</section>
