<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import articles from '../../data/articles.json' with { type: 'json' };
</script>

<section class="page">
	<div class="stack">
		<h1>Blogs</h1>
		<p>Write-ups, tutorials, and notes from things I've explored and shared.</p>
	</div>

	<div class="stack">
		<SectionHeading tag="articles" />
		<div class="grid grid-2">
			{#each articles as article (article.id)}
				<ArticleCard
					title={article.title}
					content={article.content}
					imgUrl={article.imgUrl}
					siteUrl={article.siteUrl}
				/>
			{/each}
		</div>
	</div>
</section>
