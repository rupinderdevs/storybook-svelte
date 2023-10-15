

<script lang="ts">
  import star from "../lib/images/star.png";

	export let imageUrl: string;
	export let title: string;
	export let type: 'square' | 'rectangular' = 'square';
</script>

<div class="relative">

	<div
		class="flex  flex-column items-center rounded-md h-56 overflow-hidden"
		class:w-60={type === 'square'}
		class:w-96={type === 'rectangular'}
	>
		<img src={imageUrl} alt={title} class="w-full h-full h-auto object-cover rounded" />
	</div>
  <img src={star} alt="star" class="w-6 absolute top-6 left-4" class:sepia={type === 'rectangular'}
/>
	<h3
		class="absolute bottom-2 left-4 text-white font-semibold capitalize"
	>
		{title}
	</h3>
</div>

