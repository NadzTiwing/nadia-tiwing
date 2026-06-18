<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Card from '$lib/components/Card.svelte';
	import ExperienceItem from '$lib/components/ExperienceItem.svelte';
	import Button from '$lib/components/Button.svelte';
	import me from '../../data/me.json' with { type: 'json' };
</script>

<section class="page">
	<div class="stack">
		<h1>Resume</h1>
		<p>A timeline of where I've worked, studied, and what I've learned along the way.</p>
	</div>

	<div class="stack">
		<SectionHeading tag="experience" />
		<div class="timeline">
			{#each me.experiences as xp}
				<ExperienceItem
					dateRange={xp.dateRange}
					position={xp.position}
					company={xp.company}
					desc={xp.desc}
				/>
			{/each}
		</div>
	</div>

	<div class="stack">
		<SectionHeading tag="education" />
		<div class="grid grid-2">
			{#each me.schools as school}
				<Card hover={false}>
					<div class="stack">
						<span class="date mono muted">{school.year}</span>
						<h3 class="pos">{school.name}</h3>
						{#if 'degree' in school && school.degree}
							<span class="company">{school.degree}</span>
						{/if}
						{#if school.awards?.length}
							<ul class="muted">
								{#each school.awards as award}
									<li>{award}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</Card>
			{/each}
		</div>
	</div>

	<div class="stack">
		<SectionHeading tag="seminars" />
		<div class="grid grid-2">
			{#each me.seminars as s}
				<Card hover={false}>
					<div class="stack">
						<span class="date mono muted">{s.date}</span>
						<h3 class="pos">{s.title}</h3>
						<span class="company">{s.company}</span>
						{#if s.link}
							<div class="card-foot">
								<Button href={s.link} variant="ghost" external>Certificate ↗</Button>
							</div>
						{/if}
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>