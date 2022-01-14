<script>
	export let countryCode = null;
</script>

<label for="country-code">
	+<input name="country-code" type="text" bind:value={countryCode} />
</label>

<style>
	input {
		max-width: 4ch;
	}
</style>
