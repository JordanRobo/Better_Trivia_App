import { Database } from "bun:sqlite";

export const db = new Database("db.sqlite", { create: true });

export function initialise(){
    const check = `
        SELECT EXISTS (
            SELECT 1 FROM sqlite_master 
            WHERE type='table' AND name='users'
        ) AS table_exists;    
    `;
    
    const result = db.query(check).get() as { table_exists: number };
    const tableExists = result.table_exists === 1;

    if (!tableExists){
        const init = `
            CREATE TABLE users (
                Id text NOT NULL UNIQUE,
                Name text NOT NULL UNIQUE,
                Password text NOT NULL,
                Avatar text,
                PRIMARY KEY (Name)
            );
        `;

        const addUser = `
            INSERT INTO users (Id, Name, Password, Avatar)
            VALUES ('cqkob67a2d5722hu60o0', 'Jordan', '1234', '/avatars/jake.jpg');
        `;
        
        db.query(init).run();
        db.query(addUser).run();
    }
};