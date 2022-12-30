<script lang="ts">
	import { browser } from '$app/environment';
	import { CONSTANTS } from '$lib/constants';

  const {
    THEME_LOCAL_STORAGE_KEY,
    THEME_LIGHT,
    THEME_DARK,
    THEME_SYSTEM_PREFERENCES
  } = CONSTANTS;


	let modes = [THEME_LIGHT, THEME_DARK, THEME_SYSTEM_PREFERENCES];
	let selectedMode: string;

	if (browser) {
		if (!(THEME_LOCAL_STORAGE_KEY in localStorage)) {
			selectedMode = THEME_SYSTEM_PREFERENCES;
		} else {
			const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
			selectedMode = `${theme}`;
		}
	}

	function handleSwitchDarkMode() {
		if (browser) {
			switch (selectedMode) {
				case THEME_LIGHT:
					localStorage.setItem(THEME_LOCAL_STORAGE_KEY, THEME_LIGHT);
					document.documentElement.classList.remove('dark');
					break;
				case THEME_DARK:
					localStorage.setItem(THEME_LOCAL_STORAGE_KEY, THEME_DARK);
					document.documentElement.classList.add('dark');
					break;
				default:
					localStorage.removeItem(THEME_LOCAL_STORAGE_KEY);
					if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
					break;
			}
		}
	}
</script>

<div>
	<select bind:value={selectedMode} on:change={handleSwitchDarkMode}>
		{#each modes as mode}
			<option value={mode}>
				{mode}
			</option>
		{/each}
	</select>
	<p>{selectedMode}</p>
</div>
