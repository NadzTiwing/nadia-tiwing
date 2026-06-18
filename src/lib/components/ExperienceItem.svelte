<script lang="ts">
	let {
		dateRange = '',
		position = '',
		company = '',
		desc = [] as string[]
	} = $props();
</script>

<div class="xp">
	<span class="date">{dateRange}</span>
	<h3 class="pos">{position}</h3>
	<span class="company">{company}</span>
	{#if desc.length}
		<ul>
			{#each desc as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
</div>
