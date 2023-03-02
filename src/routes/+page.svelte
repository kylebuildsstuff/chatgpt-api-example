<script lang="ts">
	import { onMount } from 'svelte';

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
	<li class="flex py-4">
		<img class="h-10 w-10 rounded-full" src="/alfred-headshot.png" alt="" />
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
			<p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
		</div>
	</li>

	<li class="flex py-4">
		<img class="h-10 w-10 rounded-full" src="/batman-headshot.png" alt="" />
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
			<p class="text-sm text-gray-500">kristen.ramos@example.com</p>
		</div>
	</li>
</ul>
