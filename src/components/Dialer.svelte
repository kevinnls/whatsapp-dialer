<script>
	import CountryCode from './CountryCode.svelte';
	import PhoneNumber from './PhoneNumber.svelte';
	let countryCode;
	let phoneNumber;
	let _ccValid;
	let _pnValid;
	$: linkState = _ccValid && _pnValid ? '' : 'disabled';
</script>

<form name="dialer">
	<section>
		<CountryCode bind:countryCode bind:valid={_ccValid} />
		<PhoneNumber bind:phoneNumber bind:valid={_pnValid} />
	</section>
	<section>
		<a
			data-link-state={linkState}
			href={`https://api.whatsapp.com/send?phone=${countryCode}${phoneNumber}`}>Go to chat!</a
		>
	</section>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		justify-content: space-between;
	}
	section {
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
		justify-content: space-between;
	}
	a[data-link-state='disabled'] {
		color: gray;
		pointer-events: none;
		cursor: default;
		opacity: 0.75;
	}
</style>
