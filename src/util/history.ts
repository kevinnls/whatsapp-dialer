import { writable } from 'svelte/store';
import { browser } from '$app/env';
const dedupeArray = (arr) => new Array(...new Set(arr));

function createHistory() {
	const _history =
		browser && localStorage.getItem('history') ? localStorage.getItem('history').split(',') : [];
	const { subscribe, set, update } = writable(_history ?? []);
	return {
		subscribe,
		reset: () => set([]),
		add: (addition: string) => {
			update((current) => {
				const next = dedupeArray([addition, ...current]).slice(0, 4) as string[];
				browser && localStorage.setItem('history', next.toString());
				return next;
			});
		},
		remove: (deletion: string) => {
			update((current) => {
				const next = current.filter((_) => _ !== deletion);
				browser && localStorage.setItem('history', next.toString());
				return next;
			});
		}
	};
}

export const history = createHistory();
