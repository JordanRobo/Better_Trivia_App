<script lang="ts">
    import gameState from "$lib/gameState";

    type User = {
        id: string,
        username: string,
        avatar: string
    };

    export let user: User;

    let gameId = null;

    async function startGame(host: string){
        const result = await gameState.startNewGame(host);
        if (result.success) {
            gameId = result.gameId;
        };
    };

</script>

<div class="flex flex-col bg-white/20 w-screen h-96 rounded-t-full absolute inset-x-0 bottom-0 gap-4 backdrop-blur-md backdrop-brightness-50 drop-shadow-2xl">
    <div class="flex justify-center -mt-8">
        <img src={user.avatar} alt="Avatar" class="h-32 w-32 avatar rounded-full ring ring-secondary ring-offset-[#2a2924]/60 ring-offset-4" />
    </div>
    <div class="flex flex-col text-center">
        <h3 class="text-white text-3xl">Hello</h3>
        <h1 class="text-white font-bold text-6xl">{user.username}</h1>
    </div>
    <div class="flex flex-row p-4 gap-2 justify-center">
        <button class="btn btn-secondary w-2/5"><span class="text-white">Join Game</span></button>
        <button class="btn btn-secondary btn-outline w-2/5" on:click={() => startGame(user.id)}><span class="text-white">Start New Game</span></button>
    </div>
</div>