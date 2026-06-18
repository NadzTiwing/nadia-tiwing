<script lang="ts">
	import Card from './Card.svelte';
	import Button from './Button.svelte';
	import MediaThumb from './MediaThumb.svelte';

	let { title = '', content = '', imgUrl = '', siteUrl = '' } = $props();
</script>

<Card>
	<div class="project-card">
		<MediaThumb src={imgUrl} alt={title} />
		<h3>{title}</h3>
		<p class="content">{content}</p>
		{#if siteUrl && siteUrl !== '#'}
			<div class="card-foot">
				<Button href={siteUrl} variant="ghost" external>Read article ↗</Button>
			</div>
		{/if}
	</div>
</Card>
