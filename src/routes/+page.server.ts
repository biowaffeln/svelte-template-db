import { db } from '$lib/server/db.js';
import { post } from '$lib/server/schema.js';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const posts = db.select().from(post).all();
	return { posts };
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = String(data.get('title'));
		const body = String(data.get('body'));

		db.insert(post).values({ title, body }).run();
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));

		db.delete(post).where(eq(post.id, id)).run();
	},
};
