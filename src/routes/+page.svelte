<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const what = await handleChatCompletion();
	});

	const handleChatCompletion = async () => {
		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message: 'Hello world!'
			})
		}).then((res) => res.json());

		return response;
	};
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
