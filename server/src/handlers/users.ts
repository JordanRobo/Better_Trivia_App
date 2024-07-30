import { db } from "../db";

export async function getUsers(){
    const query = "";
};

export async function getUser(id: string){
    const query = (`SELECT * FROM users WHERE Name='${id}';`);
    const result = await db.query(query).get();

    return result.toString();
};