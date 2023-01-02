<script lang="ts">
	import '../app.css';
	import { ThemeSwitch, NavBar } from '$lib/components/index';
</script>

<main>
  <ThemeSwitch />
  <NavBar />
  <slot />
</main>
