import { json, type RequestEvent } from '@sveltejs/kit';
import { OPENAI_API_SECRET_KEY } from '$env/static/private';

export const POST = async (event: RequestEvent) => {
	const requestBody = await event.request.json();
	const { message: _message } = requestBody;

	/**
	 * Request config
	 */
	const completionHeaders = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${OPENAI_API_SECRET_KEY}`
	};
	const messages = [{ role: 'user', content: 'Hello!' }];
	const completionBody = {
		model: 'gpt-3.5-turbo',
		messages
	};

	/**
	 * API call
	 */
	const completion = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: completionHeaders,
		body: JSON.stringify(completionBody)
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res;
		})
		.then((res) => res.json());

	return json(completion);
};
