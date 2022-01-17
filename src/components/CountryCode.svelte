<script>
	export let countryCode = '';
	export let valid = false;
	$: valid = /[0-9]{1,4}/.test(countryCode);
</script>

<label for="country-code">
	+<input name="country-code" type="text" bind:value={countryCode} />
</label>

<style>
	input {
		max-width: 4ch;
	}
</style>
