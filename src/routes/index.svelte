<script>
	import Dialer from '../components/Dialer.svelte';
	import History from '../components/History.svelte';
</script>

<svelte:head>
	<title>WhatsApp Dialer</title>
	<meta
		name="description"
		content="Quickly start a WhatsApp conversation without needing to save a contact" />
</svelte:head>

<header>
	<h1>WhatsApp Dialer</h1>
</header>

<main>
	<Dialer />
	<History />
</main>

<footer>
	<small>
		&copy; 2022 Kevin Samuel <a href="mailto:developer+whatsappdialer@kevinnlsamuel.com"> &lt;developer@kevinnlsamuel.com&gt; </a>
	</small>
</footer>
