<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import me from '../../data/me.json' with { type: 'json' };

	const levels = ['expert', 'proficient', 'novice'] as const;
	const levelLabel: Record<string, string> = {
		expert: 'Advanced',
		proficient: 'Proficient',
		novice: 'Novice'
	};

	const grouped = levels.map((level) => ({
		level,
		items: me.languages.filter((l) => l.level === level)
	}));
</script>

<section class="page">
	<div class="stack">
		<p class="role mono">// software engineer</p>
		<h1>Nadia Tiwing</h1>
		<p>
			Have 7 years experience in developing and architecting software applications that make
			people's lives easier — building, designing, testing, and implementing cutting-edge
			engineering solutions. I consult well with clients and enhance configurations for optimal
			customer satisfaction. I'm skilled at team collaboration while working independently in
			remote environments, and I find satisfaction in solving complex problems and continuously
			learning new technologies.
		</p>
	</div>

	<div class="stack">
		<SectionHeading tag="tech skills" />
		<Card hover={false}>
			<div class="stack">
				{#each grouped as group}
					<div class="skill-group">
						<span class="label">{levelLabel[group.level]}</span>
						<div class="badge-row">
							{#each group.items as skill}
								<Badge label={skill.name} variant={group.level} dot />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</Card>
	</div>
</section>