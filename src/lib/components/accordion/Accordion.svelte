<script context="module" lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';

	const key = {};

	export const getAccordionContext = () => getContext(key);
	export const createAccordionContext = (initial: any) => {
		const current = writable(initial);
		const context = { current };
		setContext(key, context);

		return context;
	};
</script>

<script lang="ts">
	export let current: any = null;

	const { current: currentStore } = createAccordionContext(current);

	// Synchronize property <-> context
	$: currentStore.set(current);
	$: current = $currentStore;
</script>

<slot />
