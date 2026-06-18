<script lang="ts">
	import { page } from '$app/state';
	import { navLinks } from '$lib/utils/nav';
	import MenuIcon from '$lib/svgs/MenuIcon.svelte';
	import CloseIcon from '$lib/svgs/CloseIcon.svelte';
	import { fade, fly, scale } from 'svelte/transition';

	const path = $derived(page.url.pathname);
	let open = $state(false);

	const toggle = () => (open = !open);
	const close = () => (open = false);
</script>

<header class="mobile-nav">
	<a class="brand" href="/" onclick={close}>NT</a>
	<button
		class="burger"
		class:open
		aria-label="Toggle navigation menu"
		aria-expanded={open}
		onclick={toggle}
	>
		{#if open}
			<span class="icon" in:scale={{ duration: 200, start: 0.6 }}>
				<CloseIcon />
			</span>
		{:else}
			<span class="icon" in:scale={{ duration: 200, start: 0.6 }}>
				<MenuIcon />
			</span>
		{/if}
	</button>
</header>

{#if open}
	<button
		type="button"
		class="menu-backdrop"
		aria-label="Close menu"
		onclick={close}
		transition:fade={{ duration: 180 }}
	></button>

	<nav class="menu-panel" transition:fly={{ y: -12, duration: 220 }}>
		{#each navLinks as link, i}
			<a
				href={link.href}
				class:active={path === link.href}
				onclick={close}
				in:fly={{ y: -10, duration: 280, delay: 60 + i * 55 }}
			>
				<span class="dot"></span>
				<span class="label">{link.label}</span>
				<span class="arrow">→</span>
			</a>
		{/each}
	</nav>
{/if}

<style>
	.mobile-nav {
		position: sticky;
		top: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: calc(-1 * clamp(1rem, 4vw, 1.5rem)) calc(-1 * clamp(1rem, 4vw, 1.5rem)) 0;
		padding: 0.55rem clamp(1rem, 4vw, 1.5rem);
		background: var(--glass-strong);
		backdrop-filter: blur(var(--blur));
		-webkit-backdrop-filter: blur(var(--blur));
		border-bottom: 1px solid var(--glass-border-soft);
	}

	.brand {
		font-family: var(--font-mono);
		font-weight: 800;
		font-size: 1.1rem;
		letter-spacing: 0.12em;
		color: var(--orange);
	}

	.burger {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border-soft);
		background: var(--glass);
		color: var(--text);
		cursor: pointer;
		transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
	}
	.burger:hover {
		color: var(--orange);
		border-color: var(--glass-border);
	}
	.burger:active {
		transform: scale(0.94);
	}
	.burger.open {
		color: var(--orange);
		border-color: var(--glass-border);
	}
	.icon {
		display: grid;
		place-items: center;
		grid-area: 1 / 1;
	}

	.menu-backdrop {
		position: fixed;
		inset: 0;
		z-index: 40;
		border: 0;
		padding: 0;
		background: rgba(5, 3, 2, 0.55);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		cursor: pointer;
	}

	.menu-panel {
		position: fixed;
		top: 3.7rem;
		left: clamp(0.75rem, 4vw, 1.25rem);
		right: clamp(0.75rem, 4vw, 1.25rem);
		z-index: 45;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.6rem;
		border-radius: var(--radius);
		border: 1px solid var(--glass-border);
		background: var(--glass-strong);
		background-image: var(--grad-glass);
		backdrop-filter: blur(var(--blur));
		-webkit-backdrop-filter: blur(var(--blur));
		box-shadow: var(--shadow), var(--glow);
	}

	.menu-panel a {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.85rem 0.9rem;
		border-radius: var(--radius-sm);
		color: var(--text-dim);
		font-family: var(--font-mono);
		font-size: 0.9rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: background 0.2s ease, color 0.2s ease;
	}
	.menu-panel a:hover,
	.menu-panel a.active {
		color: var(--orange);
		background: rgba(255, 158, 79, 0.1);
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--text-faint);
		transition: all 0.2s ease;
	}
	.menu-panel a:hover .dot,
	.menu-panel a.active .dot {
		background: var(--orange);
		box-shadow: var(--glow);
	}

	.label {
		flex: 1;
	}
	.arrow {
		color: var(--orange);
		opacity: 0;
		transform: translateX(-4px);
		transition: all 0.2s ease;
	}
	.menu-panel a:hover .arrow,
	.menu-panel a.active .arrow {
		opacity: 1;
		transform: translateX(0);
	}

	@media (min-width: 1024px) {
		.mobile-nav,
		.menu-panel,
		.menu-backdrop {
			display: none;
		}
	}
</style>
