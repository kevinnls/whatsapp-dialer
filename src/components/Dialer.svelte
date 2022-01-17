<script>
	import CountryCode from './CountryCode.svelte';
	import PhoneNumber from './PhoneNumber.svelte';
	import { history } from '../util/history';
	let countryCode;
	let phoneNumber;
	let _ccValid;
	let _pnValid;

	const dial = () => {
		history.add(`${countryCode}:${phoneNumber}`);
		open(`https://api.whatsapp.com/send?phone=${countryCode}${phoneNumber}`);
	};
</script>

<form name="dialer">
	<section>
		<CountryCode bind:countryCode bind:valid={_ccValid} />
		<PhoneNumber bind:phoneNumber bind:valid={_pnValid} />
	</section>
	<section>
		<button disabled={!(_ccValid && _pnValid)} on:click={dial}>Go to chat!</button>
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
	button[disabled='true'] {
		color: gray;
		pointer-events: none;
		cursor: default;
		opacity: 0.75;
	}
</style>
