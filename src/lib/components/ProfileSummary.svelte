<script lang="ts">
	// Profile info is hardcoded (me.json has no name/title/socials).
	// TODO: replace placeholder social URLs (#) with your real GitHub / LinkedIn / email.
	const socials = [
		{ label: 'GH', href: 'https://github.com/NadzTiwing', external: true }
	];
</script>

<div class="profile">
	<div class="avatar">NT</div>
	<div>
		<div class="name">Nadia Tiwing</div>
		<div class="role">Software Engineer</div>
	</div>
	<p class="bio">
		Crafting cutting-edge, user-centric software for 7+ years — full-stack engineering,
		thoughtful UX, and solving complex problems.
	</p>
	<div class="socials">
		{#each socials as s}
			<a
				class="social-link"
				href={s.href}
				target={s.external ? '_blank' : undefined}
				rel={s.external ? 'noopener noreferrer' : undefined}
				aria-label={s.label}
			>
				{s.label}
			</a>
		{/each}
	</div>
</div>
