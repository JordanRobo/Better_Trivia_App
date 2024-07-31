import { db } from "../db";
import { Hono } from 'hono';
import type { User } from "../types/users";
import { Xid } from "xid-ts";

const app = new Hono();

app
    .get('/', async (c) => {
        const users = await getUsers();
        return c.json(users);
    })
    .get('/:id', async (c) =>{
        const id = c.req.param('id');
        const user = await getUser(id);
        return c.json(user);
    })
    .post('/', async (c) => {
        const input = await c.req.json();
        const result = await newUser(input);

        if (result.success) {
            return c.json({ success: true }, 200);
        } else {
            return c.json({ success: false, error: result.error }, 400);
        }
    });

async function getUsers(): Promise<User[]> {
    const query = db.query(`SELECT * FROM users;`);
    const result = query.all() as User[];

    return result;
};

async function getUser(id: string): Promise<User> {
    const query = db.query(`SELECT * FROM users WHERE Id = $id;`);
    const result = await query.get({ $id: id }) as User;

    return result;
};

async function newUser(input: User): Promise<{ success: boolean; error?: string }> {
    const id = new Xid().toString();

    const query = db.query(`INSERT INTO users (Id, Name, Password, Avatar) VALUES ($id, $name, $password, $avatar);`);
    
    try {
        query.run({ $id: id, $name: input.Name, $password: input.Password, $avatar: input.Avatar });
        return { success: true };
    } catch (error) {
        console.error('Error adding new user:', error);
        return { success: false, error: 'Failed to add user' };
    }
};

export default app;