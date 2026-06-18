<script lang="ts">
	let { tag = '', children } = $props();
</script>

<div class="section-heading">
	<span class="tag">// {tag}</span>
	<span class="line"></span>
</div>
{#if children}
	<h2>{@render children()}</h2>
{/if}
