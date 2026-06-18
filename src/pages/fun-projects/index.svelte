<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import data from '../../data/samples.json' with { type: 'json' };
</script>

<section class="page">
	<div class="stack">
		<h1>Fun Projects</h1>
		<p>Side projects and experiments I build for the joy of learning and tinkering.</p>
	</div>

	<div class="stack">
		<SectionHeading tag="personal builds" />
		<div class="grid grid-2">
			{#each data.projects as project (project.id)}
				<ProjectCard
					title={project.title}
					content={project.content}
					mediaUrl={project.imgUrl}
					siteUrl={project.siteUrl}
					tags={project.tools}
					ongoing={project.ongoing}
				/>
			{/each}
		</div>
	</div>
</section>
