<script>
	import { history } from '../util/history';
</script>

<section id="history">
	{#each $history as item (item)}
		<p>
			<a href={`https://api.whatsapp.com/send?phone=${item.replace(':', '')}`}
				>{`+${item.replace(':', ' ')}`}</a
			>
			<button on:click={() => history.remove(item)}>🗑️</button>
		</p>
	{/each}
</section>

<style>
	section {
		text-align: center;
	}
</style>
