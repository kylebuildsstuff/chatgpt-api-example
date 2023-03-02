<script lang="ts">
	import { onMount } from 'svelte';

	import ChatMessage from './chat-message.svelte';

	let message = '';

	$: {
		console.log('message: ', message);
	}

	// onMount(async () => {
	// 	const what = await handleChatCompletion();

	// 	console.log('what: ', what);
	// });

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

		message = '';
	};
</script>

<ul role="list" class="divide-y divide-gray-200">
	<ChatMessage name="Alfred" message="Hello world!" />

	<ChatMessage name="Batman" message="Hello Alfred!" />
</ul>

<form class="mt-4">
	<div class="relative mt-1 flex items-center">
		<input
			bind:value={message}
			type="text"
			name="search"
			id="search"
			class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		/>
		<button
			on:click={() => {
				console.log('clicky');
			}}
			type="submit"
			class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"
		>
			<kbd
				class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400"
				>Enter</kbd
			>
		</button>
	</div>
</form>
