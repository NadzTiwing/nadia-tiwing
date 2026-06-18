<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import data from '../../data/samples.json' with { type: 'json' };
</script>

<section class="page">
	<div class="stack">
		<h1>Work Projects</h1>
		<p>Production systems and platforms I've helped build with teams across the industry.</p>
	</div>

	<div class="stack">
		<SectionHeading tag="professional work" />
		<div class="grid grid-2">
			{#each data.samples as project (project.id)}
				<ProjectCard
					title={project.title}
					content={project.content}
					mediaUrl={project.mediaUrl}
					siteUrl={project.siteUrl}
					tags={project.techStack}
				/>
			{/each}
		</div>
	</div>
</section>
