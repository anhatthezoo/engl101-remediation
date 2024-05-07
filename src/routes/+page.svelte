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

			<div class="w-2 h-2 rounded-full bg-white" />

			<span>{readingTime} min read</span>
		</div>
	</div>
</header>
<main class="w-full">
	<div bind:this={content} class="flex flex-col w-full mx-auto my-8">
		<p class="body-text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate elementum purus eu
			sollicitudin. Aliquam erat volutpat. Vivamus semper semper dignissim. Vestibulum tempus
			commodo diam. Cras vel nulla convallis, efficitur velit vitae, pharetra ante. Nullam
			tincidunt, felis ac interdum accumsan, magna felis bibendum nisi, nec auctor neque quam eget
			justo. Pellentesque sit amet luctus erat. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit. Pellentesque at faucibus urna. Phasellus egestas velit tortor, at consectetur nulla
			vulputate vel. Aliquam venenatis erat a nisl tristique, in ultrices sem varius. Sed in
			placerat orci. Vestibulum sit amet tortor varius, pretium velit eget, condimentum ex.
			Phasellus porttitor velit aliquet, condimentum nisl sit amet, tempor velit. Phasellus ut purus
			leo. Praesent hendrerit orci magna, non imperdiet mauris ullamcorper ac.
		</p>
		<p class="body-text">
			Sed cursus a turpis in suscipit. Maecenas vehicula gravida suscipit. Morbi tempus convallis
			augue eget dapibus. Donec feugiat auctor metus ut aliquam. Suspendisse vitae semper justo.
			Donec ut nulla nec ligula pretium sodales. In blandit, tortor non venenatis commodo, enim
			felis elementum lectus, eget imperdiet dui justo et turpis. Vestibulum ante ipsum primis in
			faucibus orci luctus et ultrices posuere cubilia curae; Nunc consequat non urna tristique
			finibus. Vestibulum mattis est velit, quis congue sem vehicula vel. Ut et libero tempus,
			lacinia tortor in, ultricies metus. Fusce eu ex faucibus, sagittis lorem vulputate, tincidunt
			neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
			himenaeos. Ut suscipit massa vel gravida cursus.
		</p>
		<p class="body-text">
			Cras imperdiet dui vestibulum, molestie sapien non, sollicitudin purus. Suspendisse venenatis
			arcu ac metus iaculis varius. Vivamus quis tincidunt ipsum. Nulla eu eros enim. Pellentesque
			sollicitudin eros ultricies risus mollis, vitae congue lacus volutpat. Maecenas viverra non ex
			at ultrices. Vivamus eleifend magna a nulla sodales, non efficitur est pulvinar. Morbi id
			magna et mi fermentum eleifend. Mauris vel hendrerit ipsum. In eleifend libero eu mi auctor
			facilisis. Donec sit amet sodales libero, eu elementum leo. Nunc ut lobortis nunc. Morbi sit
			amet elementum lorem, sit amet rhoncus ipsum. Sed ornare augue tempus enim eleifend, ac
			lobortis neque facilisis. Donec diam erat, dapibus laoreet lectus eu, sollicitudin consectetur
			urna.
		</p>
		<p class="body-text">
			Vestibulum at accumsan nisi. Mauris eget vulputate metus. Curabitur viverra accumsan tellus,
			sit amet fringilla urna placerat efficitur. Donec in turpis fermentum quam laoreet tincidunt
			non interdum turpis. Ut et volutpat diam, at ornare ligula. Phasellus ultricies facilisis
			vestibulum. Praesent sit amet cursus orci, molestie elementum libero. Maecenas egestas
			efficitur malesuada. Donec at enim scelerisque ligula cursus efficitur. Aliquam erat volutpat.
			Cras dictum, velit vel dapibus aliquam, sapien quam maximus velit, eget elementum magna justo
			vel dolor. Integer pulvinar, arcu quis dapibus congue, libero tortor tempus tortor, sed
			aliquam purus ipsum id nulla. Etiam vestibulum ultricies ultricies. Curabitur venenatis nisi
			justo, sed faucibus dui laoreet venenatis. Integer varius, enim vestibulum blandit rutrum,
			tortor leo congue arcu, vitae commodo erat nulla vitae eros.
		</p>
	</div>
</main>
<footer class="w-full flex border-t border-t-gray-300">
	<span class="mx-auto py-4 text-gray-400">
		Remediation Project for ENGL101 at the University of Maryland
	</span>
</footer>
