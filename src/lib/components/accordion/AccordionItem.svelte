<script lang="ts">
	import { getAccordionContext } from './Accordion.svelte';
	import { quadInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let key = {};

	const { current }: any = getAccordionContext();

	function handleClick() {
		$current = open ? null : key;
	}

	$: open = $current == key;
</script>

<div class="ps-accordion">
	<button class="ps-header" on:click={handleClick}>
		<slot name="head" />
	</button>

	{#if open}
		<div class="ps-details" transition:slide={{ duration: 150, easing: quadInOut }}>
			<slot name="details" />
		</div>
	{/if}
</div>

<style>
	.ps-accordion {
		margin: 0;
	}

	.ps-header {
		width: 100%;
	}

	.ps-details {
		background-color: transparent;
		padding: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
