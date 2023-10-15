<script lang="ts">
	import Image from '../components/Image.svelte';

	type Data = {
		imageUrl: string;
		type: 'square' | 'rectangular';
		title: string;
	};

	const data: Data[] = [
		{
			imageUrl: 'https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_1280.jpg',
			title: 'Sunrise',
			type: 'square'
		},
		{
			imageUrl: 'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg',
			title: 'Mountains',
			type: 'rectangular'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-screen w-screen grid place-items-center">
	<div class="flex gap-4 bg-gray-200 p-2">
		{#each data as { imageUrl, title, type }}
			<Image {imageUrl} {title} {type} />
		{/each}
	</div>
</section>
