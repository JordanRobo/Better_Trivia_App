import { Hono } from 'hono';
import { db, initialise } from './db';
import users from './handlers/users';
import auth from './handlers/auth';

db.exec("PRAGMA journal_mode = WAL;");
initialise();

const app = new Hono();

app.notFound((c) => {
	return c.text('Sorry there is nothing here', 404)
});
app.route('/users', users);
app.route('/auth', auth);

export default { 
	port: 8000, 
	fetch: app.fetch, 
};