import { Database } from "bun:sqlite";

export const db = new Database("db.sqlite", { create: true });

export function initialise(){
    const check = (`
        SELECT EXISTS (
            SELECT 1 FROM sqlite_master 
            WHERE type='table' AND name='users'
        ) AS table_exists;    
    `);
    
    const result = db.query(check).get();
    const tableExists = result.table_exists === 1;

    if (!tableExists){
        const init = (`
            CREATE TABLE users (
                Name text NOT NULL UNIQUE,
                Password int NOT NULL,
                Avatar text,
                PRIMARY KEY (Name)
            );
        `);

        const addUser = (`
            INSERT INTO users (Name, Password, Avatar)
            VALUES ('Jordan', 1234, '/avatars/jake.jpg');
        `);
        
        db.query(init);
        db.query(addUser);
    }
};