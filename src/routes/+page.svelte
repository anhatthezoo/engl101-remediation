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

<header class="h-screen flex flex-col bg-blue-500 p-10 text-white">
	<div class="mt-auto max-w-4xl">
		<h1 class="text-6xl font-semibold mb-4">Why we should embrace AI in education</h1>
		<div class="flex items-center gap-4 text-2xl">
			<span class="">
				By
				<a
					href="https://github.com/anhatthezoo"
					target="_blank"
					class="underline underline-offset-4">Anh Pham</a
				>
			</span>

			<div class="w-1.5 h-1.5 rounded-full bg-white" />

			<span>{readingTime} min read</span>
		</div>
	</div>
</header>
<main class="w-full">
	<div bind:this={content} class="flex flex-col w-full mx-auto my-8">
		<h1 class="body-text">
			<span class="font-bold italic">Note:</span>
			This is an opinion piece.
		</h1>
		<p class="body-text">
			The rise of powerful AI language models like ChatGPT has revolutionized how we communicate,
			learn, and work. Ever since ChatGPT came out in November 2022, GPT and similar models have
			been everywhere and started an LLM arms race. With just a simple prompt, these AI tools can
			generate human-like text on virtually any topic. Major tech companies are rapidly
			incorporating and building their own generative AI into their mainstream software. They’ve
			already been integrated into Google, Grammarly, Notion, Microsoft Office, and even YouTube. As
			AI becomes more and more ubiquitous across the most commonly used tools, students should be
			able to know how to use them effectively and responsibly from an early age.
		</p>
		<p class="body-text">
			Without a doubt, generative AI provides an incredible opportunity for students to be more
			productive and improve their skills. Instead of staring at a blank page, a student can prompt
			a chatbot to instantly generate a rough draft of what they want to write. If they’re having
			problems understanding a concept, they can just ask for a simplified explanation. An assigned
			reading is too long? It could be summarized in just a few keystrokes. Beyond saving time, AI
			can enhance the learning process by acting as a personal tutor. They can spot grammatical
			errors, refine writing, and stimulate thinking (for example, offering multiple perspectives on
			a topic). As of Fall 2023, half of college students have reported using AI for schoolwork.
		</p>
		<div class="mx-auto min-w-[700px] max-w-[700px] mb-6">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls muted class="w-full border">
				<source src="claude_summarize.mp4" type="video/mp4"/>
			</video>
			<div class="mt-4">
				<span class="font-serif mr-1 text-gray-400"
					>Claude 3 summarizing the Wiki page for the Maryland Terrapins.</span
				>
			</div>
		</div>
		<p class="body-text">
			With how good AI has become at producing text and even reasoning, it’s understandable that
			there have been concerns over academic integrity. Powerful language models can write essays,
			reports, and analyses that are well-structured and indistinguishable from something written by
			a human expert. One of GPT-4’s selling points was that it scored in the top 10% for a bar
			exam. Claude 3 boasted that it possesses undergraduate-level expert knowledge and can read a
			dense research paper in less than 3 seconds. All of these services are free to use. The fear
			is that students may be tempted to submit an entirely AI-generated output as their original
			work, allowing them to cheat on a massive scale.
		</p>
		<p class="body-text">
			However, these concerns, while valid, are likely overstated. Of course, students will always
			find a way to cheat. A study has shown that around 60 to 70% of students have admitted to
			cheating at some point before, and that number has stayed the same over the past few years
			even with the new technology. Just as students could copy text from the Internet or hire
			someone to write essays in the past, these new generative AI services are simply a new tool.
			Strong academic integrity policies and honor codes are still effective deterrents.
		</p>
		<p class="body-text">
			Plus, viewing AI assistance as outright “cheating” fails to recognize the ways that these
			tools can be used legitimately and effectively. For decades, students have gotten help from
			tutors, friends, and family for assignments. LLMs are no different than that. When used
			responsibly with human editing, fact-checking, and original thought, AI can be a powerful
			writing partner rather than an unethical aid. And it looks like many students see this too. In
			a survey conducted by the Pew Research Center, 57% of teens believe it is unacceptable to use
			ChatGPT to write essays, while 69% of teens think it could be used for researching a new
			topic.
		</p>
		<p class="body-text">
			Traditional essays, reports, and other forms of homework have to adapt to LLMs’ advanced
			language abilities. Already, “AI detectors” marketed as anti-cheating tools have shown
			themselves to be ineffective and even harmful, flagging formal writing such as the U.S.
			Constitution and the Bible to be “AI generated.”
		</p>
		<div class="mx-auto min-w-[700px] max-w-[700px] mb-6">
			<img
				class="border mb-4"
				src="bible_ai_generated_ars_technica.jpg"
				alt="ZeroGPT believes that the Bible is AI generated"
			/>
			<div class="mt-4">
				<span class="font-serif mr-1 text-gray-400"
					>ZeroGPT believes that the Bible is AI generated.</span
				>
				<span class="font-serif text-gray-400 text-sm italic">Ars Technica</span>
			</div>
		</div>
		<p class="body-text">
			Educators should shift towards more dynamic and open-ended assignments that evaluate skills
			like reasoning, problem-solving, and creativity, abilities that current AI still lacks.
			Additionally, developing AI literacy skills is as important as learning how to use them
			effectively. Students should be taught about LLMs’ limitations, such as hallucinations, where
			language models generate plausible but incorrect information, and bias.
		</p>
		<p class="body-text">
			One teacher in New York has incorporated AI into their curriculum by allowing students to
			critique it. When shown a lesson plan on wearable technology created by ChatGPT, the students
			found that ChatGPT included false information and appeared to be biased toward wearables.
		</p>
		<p class="body-text">
			Generative AI is rapidly transforming education and how students approach assignments. Rather
			than banning them, educators should incorporate them into their lessons and move assignments
			toward more open-ended ones. By embracing generative AI, the next generation can be prepared
			to employ this new technology effectively in our changing world.
		</p>
	</div>
	<div class="mb-8">
		<h1 class="font-sans font-semibold text-3xl mx-auto min-w-[700px] max-w-[700px]">References</h1>
	</div>
</main>
<footer class="w-full flex border-t border-t-gray-300">
	<span class="mx-auto py-4 text-gray-400">
		Remediation Project for ENGL101 at the University of Maryland
	</span>
</footer>
