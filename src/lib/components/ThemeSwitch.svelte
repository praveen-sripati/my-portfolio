<script lang="ts">
	import { browser } from '$app/environment';
	import { CONSTANTS } from '$lib/constants';

	const { THEME_LOCAL_STORAGE_KEY, THEME_LIGHT, THEME_DARK, THEME_SYSTEM_PREFERENCES } = CONSTANTS;

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

<div class="ps-theme-switch__container">
	<i
		class="uil {selectedMode === THEME_LIGHT
			? 'uil-moon'
			: selectedMode === THEME_DARK
			? 'uil-sun'
			: 'uil-desktop'} ps-theme-swtich__icon"
		id="theme-button"
	/>
	<select class="ps-theme__select-input" bind:value={selectedMode} on:change={handleSwitchDarkMode}>
		{#each modes as mode}
			<option value={mode}>
				{mode}
			</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.ps-theme-switch__container {
		@apply relative;
		.ps-theme-swtich__icon {
			@apply text-xl text-[1.4rem] cursor-pointer;
		}
		.ps-theme__select-input {
			@apply absolute left-0 w-full cursor-pointer z-10 bg-transparent text-transparent appearance-none;
		}

		&:hover {
			@apply text-ps-first-color;
		}
	}
</style>
