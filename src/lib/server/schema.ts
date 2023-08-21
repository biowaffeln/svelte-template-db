import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const post = sqliteTable('post', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	body: text('body').notNull(),
});
