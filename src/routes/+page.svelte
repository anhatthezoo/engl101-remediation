<script lang="ts">
	import { getReadingTime } from '$lib';
	import { onMount } from 'svelte';

	let content: HTMLDivElement;
	let paragraphs: HTMLParagraphElement[] = [];
	let readingTime: number = 0;

	onMount(() => {
		for (const child of content.children) {
			if (child.tagName == 'P') {
				paragraphs.push(child as HTMLParagraphElement);
			}
		}

		readingTime = getReadingTime(paragraphs);
	});
</script>

<header class="h-screen relative">
	<div class="w-full h-full bg-blue-500"></div>
	<div class="absolute bottom-0 p-10 text-white">
		<h1 class="text-6xl font-semibold mb-4">Education in an AI World</h1>
		<div class="flex items-center gap-4 text-2xl">
			<span class="">
				By
				<a
					href="https://github.com/anhatthezoo"
					target="_blank"
					class="underline underline-offset-4">Anh Pham</a
				>
			</span>

			<div class="w-2 h-2 rounded-full bg-white" />

			<span>{readingTime} min read</span>
		</div>
	</div>
</header>
<main class="w-full">
	<div bind:this={content} class="flex w-full mx-auto my-8">
		<p>In November 2022, OpenAI released its ChatGPT, a chatbot powered by GPT-3.</p>
	</div>
</main>
<footer class="w-full flex border-t border-t-gray-300">
    <span class="mx-auto py-4 text-gray-400">
        Remediation Project for ENGL101 at the University of Maryland
    </span>
</footer>
