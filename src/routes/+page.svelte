<script lang="ts">
	import { onMount } from 'svelte';

	import ChatMessage from './chat-message.svelte';

	onMount(async () => {
		const what = await handleChatCompletion();

		console.log('what: ', what);
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

<ul role="list" class="divide-y divide-gray-200">
	<ChatMessage name="Alfred" message="Hello world!" />

	<ChatMessage name="Batman" message="Hello Alfred!" />
</ul>
