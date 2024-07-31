import { Hono } from 'hono';
import { db } from '../db';
import type { User } from '../types/users';

const app = new Hono();

app.post('/login', async (c) => {
    const { username, password } = await c.req.json()

    const user = db.query('SELECT * FROM users WHERE Name = ?').get(username) as User | undefined

    if (!user) {
        return c.json({ success: false, message: 'User not found' }, 404)
    }

    // remember, this is not secure!
    if (user.Password === password) {
      // create a session here
        return c.json({ success: true, user: { Id: user.Id, Name: user.Name, Avatar: user.Avatar } })
    } else {
        return c.json({ success: false, message: 'Invalid password' }, 401)
    }
});

export default app