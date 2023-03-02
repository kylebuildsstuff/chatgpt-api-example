import type { RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const POST = async (event: RequestEvent) => {
	const requestBody = await event.request.json();
	// const {} = requestBody;
	// const {} = event.locals;

	// if (false) throw error(404, 'Invalid request');
	console.log('hellofrom api');

	return new Response(JSON.stringify({}));
};
