import { db, Guestbook } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// Seed Guestbook db
	await db.insert(Guestbook).values([
		{
			author: 'John Doe',
      content: 'You are so cool'
		},
    {
      author: 'John Doe, the 2nd',
      content: 'I agree with my Dad..'
    },
	]);
}
