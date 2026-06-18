<script lang="ts">
	import Card from './Card.svelte';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';
	import MediaThumb from './MediaThumb.svelte';

	let {
		title = '',
		content = '',
		mediaUrl = '',
		siteUrl = '',
		tags = [] as string[],
		ongoing = false
	} = $props();
</script>

<Card>
	<div class="project-card">
		<MediaThumb src={mediaUrl} alt={title} />
		<div class="card-foot">
			<h3>{title}</h3>
			{#if ongoing}
				<Badge label="ongoing" variant="live" dot />
			{/if}
		</div>
		<p class="content">{content}</p>
		{#if tags.length}
			<div class="badge-row">
				{#each tags as tag}
					<Badge label={tag} variant="tech" />
				{/each}
			</div>
		{/if}
		{#if siteUrl && siteUrl !== '#'}
			<div class="card-foot">
				<Button href={siteUrl} variant="ghost" external>Visit ↗</Button>
			</div>
		{/if}
	</div>
</Card>
