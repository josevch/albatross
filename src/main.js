import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Albatross',
		LastName: 'Golf Club'
	}
});

export default app;