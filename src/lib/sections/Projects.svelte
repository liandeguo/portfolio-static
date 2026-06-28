<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { m } from '$lib/paraglide/messages';

	const projects = [
		{
			name: 'Symptom Explorer',
			img: '/assets/symptom-explorer-render.webp',
			url: 'https://github.com/liandeguo/disease-symptom-tool/',
			id: 'symptomExplorerProject'
		},
		{
			name: 'Orphan Disease Research',
			img: '/assets/orphan-disease-research.webp',
			url: 'https://github.com/liandeguo/orphanData-clinicalTrials-analysis',
			id: 'researchProject'
		},
		{ name: 'Homelab', img: '/assets/homelab.webp', url: '#', id: 'homelabProject' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#projects',
				start: 'top top',
				end: '+=150%',
				pin: true,
				scrub: 1
			}
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#projects',
					start: 'top 80%',
					end: 'top 20%',
					scrub: 1.5
				}
			})
			.to('#projectTitle', {
				opacity: 1,
				y: 0,
				stagger: 0.15,
				ease: 'power2.out'
			});

		// Images appear correctly
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#projects',
					start: 'top 10%',
					end: '+=150%',
					scrub: 1.5
				}
			})
			.to('#symptomExplorerProjectImg', {
				opacity: 1,
				duration: 0.33
			})
			.set('#symptomExplorerProjectImg', {
				opacity: 0
			})
			.to('#researchProjectImg', {
				opacity: 1,
				duration: 0.33
			})
			.set('#researchProjectImg', {
				opacity: 0
			})
			.to('#homelabProjectImg', {
				opacity: 1,
				duration: 0.33
			})
			.to('#homelabProjectImg', {
				opacity: 0,
				duration: 0.1
			});

		tl.to('.project', {
			opacity: 1,
			y: 0,
			stagger: 0.2,
			ease: 'power2.out'
		});
	});
</script>

<section
	id="projects"
	class="projects section pin-section z-0 flex h-screen w-full flex-col items-start bg-(--color-secondary) px-(--inner-padding) py-12 max-sm:h-max"
>
	<h2
		id="projectTitle"
		class=""
		style="font-size: 10cqi; opacity: 0;  transform: translateY(80px);"
	>
		{m.projectsTitle()}
	</h2>
	<div class="flex w-full justify-center">
		<ul class="list z-10 m-0 w-min list-none p-0 pr-3">
			<!-- Import Array -->
			{#each projects as project, i}
				<li
					class="project"
					id={project.id}
					data-cursor="-hidden"
					style="opacity: 0; transform: translateY(40px);"
				>
					<img src={project.img} class="h-40 w-full max-sm:block sm:hidden" alt="" />
					<a href={project.url} target="_blank" class="flex items-center pr-12">
						<h3>{project.name}</h3>
						<p class="ml-2">[0{i + 1}]</p>
					</a>
				</li>
				<div
					id="{project.id}Img"
					class="projectImages absolute right-0 bottom-0 mr-6 mb-6 h-1/3 w-1/3"
				>
					<img
						src={project.img}
						alt="{project.name} - {project.name.includes('Symptom')
							? 'Medical symptom analysis web app'
							: project.name.includes('Orphan')
								? 'Orphan disease research platform'
								: 'Personal homelab infrastructure'}"
						width="800"
						height="500"
						loading="lazy"
						class="aspect-video h-full w-full object-cover"
					/>
				</div>
				<hr class="project max-sm:mb-6" style="opacity: 0; transform: translateY(40px);" />
			{/each}
		</ul>
	</div>
</section>
