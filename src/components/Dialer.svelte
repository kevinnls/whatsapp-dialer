<script>
	import CountryCode from './CountryCode.svelte';
	import PhoneNumber from './PhoneNumber.svelte';
	let countryCode;
	let phoneNumber;
	$: console.log(`${countryCode} ${phoneNumber}`);
</script>

<form name="dialer">
	<section>
		<CountryCode bind:countryCode />
		<PhoneNumber bind:phoneNumber />
	</section>
</form>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
		justify-content: space-between;
	}
</style>
