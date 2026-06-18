<script lang="ts">
	let { hover = true, classes = '', children } = $props();
</script>

<article class="glass-card {hover ? 'hover' : ''} {classes}">
	{@render children?.()}
</article>
