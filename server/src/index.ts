import { Elysia } from 'elysia';
import { db, initialise } from './db';
import { getUser } from './handlers/users';

db.exec("PRAGMA journal_mode = WAL;");
initialise();

const app = new Elysia({ prefix: '/users' })
    .get('/', () => "Hello")
	.get('/:id', ({ params: {id} }) => getUser(id))
	.listen(8080)

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`)