<script lang="ts">
	let {
		href = undefined,
		variant = 'ghost',
		external = false,
		children
	} = $props();
</script>

{#if href}
	<a
		class="btn btn-{variant}"
		{href}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children?.()}
	</a>
{:else}
	<button class="btn btn-{variant}">
		{@render children?.()}
	</button>
{/if}
