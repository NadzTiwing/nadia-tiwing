<script lang="ts">
	let { label = '', variant = '', dot = false } = $props();
</script>

<span class="badge {variant ? `badge-${variant}` : ''} {dot ? 'badge-dot' : ''}">
	{label}
</span>
