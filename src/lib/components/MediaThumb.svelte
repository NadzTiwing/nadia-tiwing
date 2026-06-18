<script lang="ts">
	// Renders project media. The JSON references local images (e.g. ./img/mint09.gif)
	// that are not yet present in /static. Until those assets are added, a gradient
	// placeholder with the title is shown.
	// TODO: add the real screenshots to /static/img/. For any stand-in artwork, use
	// only royalty-free / copyright-safe sources (e.g. Unsplash, Pexels, Pixabay) —
	// no paid or copyrighted images.
	let { src = '', alt = '' } = $props();

	let failed = $state(!src);
</script>

<div class="media-thumb">
	{#if !failed}
		<img {src} {alt} loading="lazy" onerror={() => (failed = true)} />
	{:else}
		<span class="fallback">{alt || 'preview'}</span>
	{/if}
</div>
