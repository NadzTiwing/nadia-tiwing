<script lang="ts">
	import '../../global-styles.css';
	import UserProfileSummary from '$lib/components/ProfileSummary.svelte';
	import VerticalTabMenuLinks from '$lib/components/VerticalTabMenu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';

	const { children } = $props();
</script>

<div class="app-container">
    <MobileNav />

    <aside class="sidebar">
        <UserProfileSummary />
        <div class="desktop-only">
            <VerticalTabMenuLinks />
        </div>
    </aside>

    <main class="main-content">
        {@render children()}
    </main>
</div>