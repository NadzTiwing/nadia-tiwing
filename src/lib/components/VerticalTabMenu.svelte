<script lang="ts">
	import { page } from '$app/state';
	import { navLinks } from '$lib/utils/nav';

	const path = $derived(page.url.pathname);
</script>

<nav class="nav">
	{#each navLinks as link}
		<a href={link.href} class={path === link.href ? 'active' : ''}>
			<span class="bar"></span>
			{link.label}
		</a>
	{/each}
</nav>
