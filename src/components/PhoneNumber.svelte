<script>
	export let phoneNumber = '';
	export let valid = false;
	$: valid = /[0-9]{3,15}/.test(phoneNumber);
</script>

<label for="phone-number">
	<input name="phone-number" type="text" bind:value={phoneNumber} />
</label>
