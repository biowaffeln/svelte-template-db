<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<div class="flex justify-between">
	<h1 class="text-3xl font-bold">SvelteKit + Drizzle</h1>
</div>

<form method="POST" action="?/create" class="mt-6 flex flex-col gap-3" use:enhance>
	<input
		class="w-full rounded bg-slate-100 px-3 py-2"
		required
		type="text"
		name="title"
		placeholder="Title"
	/>
	<textarea
		class="w-full rounded bg-slate-100 px-3 py-2"
		rows="4"
		required
		name="body"
		placeholder="Body"
	></textarea>
	<button class="button mt-4 self-end" type="submit"> Submit </button>
</form>

<div class="mt-16">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each data.posts as post}
			<article class="flex flex-col rounded-lg border border-slate-300 px-5 py-3">
				<h2 class="mt-2 break-words text-center text-2xl font-bold">
					{post.title}
				</h2>
				<p class="mt-4 line-clamp-5 text-slate-700">{post.body}</p>
				<form class="mb-2 mt-auto pt-6" method="POST" action="?/delete" use:enhance>
					<input type="hidden" name="id" value={post.id} />
					<button class="button w-full" type="submit"> delete </button>
				</form>
			</article>
		{/each}
	</div>
	{#if data.posts.length === 0}
		<p class="py-10 text-center text-xl text-slate-500">No posts found.</p>
	{/if}
</div>

<style>
	.button {
		@apply rounded bg-slate-800 px-4 py-1.5 font-medium tracking-wide text-slate-50;
	}
</style>
