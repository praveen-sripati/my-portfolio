<script lang="ts">
	import '../app.css';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<ThemeSwitch />
<NavBar />
<slot />
