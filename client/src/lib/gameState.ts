import { error } from "@sveltejs/kit";
import { goto } from "$app/navigation";
import { pb } from "./stores";
import { writable } from 'svelte/store';

export const currentGame = writable(null);

async function startNewGame(host: string) {
    const data = {
        "host": host,
        "state": "lobby"
    };

    try {
        const record = await pb.collection('games').create(data);
        
        pb.collection('games').subscribe(record.game_id, (e) => {
            currentGame.set(e.record);
        });

        goto(`/host/${record.game_id}`);

        return { success: true, gameId: record.game_id };
    } catch (e) {
        console.error("Error creating game:", e);
        throw error(500, "Error Creating Game");
    }
};

export default {
    startNewGame
};