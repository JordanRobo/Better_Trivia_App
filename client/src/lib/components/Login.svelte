<script lang="ts">
    import { Person } from "svelte-radix";
    import PinInput from '$lib/components/Pin_Input.svelte';
    import { goto } from "$app/navigation";
    import { pb } from '$lib/stores'

    let username: string = '';
    let password: string = '';

    async function login(){
        await pb.collection('users').authWithPassword(username, password);
        goto('/profile');
    }
</script>

<div class="flex-1 flex flex-col justify-between min-h-screen p-4">
    <div class="card bg-white/30 w-11/12 drop-shadow-2xl my-auto mx-auto backdrop-blur-md">
        <div class="card-body space-y-2">
            <h2 class="card-title text-white">Login</h2>
            <label class="input input-bordered input-ghost input-secondary flex items-center gap-2 text-white/50">
                <Person class="min-w-4"/>
                <input type="text" class="grow" placeholder="Username" bind:value={username} />
            </label>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text text-white">Password</span>
                </div>
                <PinInput bind:value={password} />
            </label>
            <div class="card-actions justify-end">
                <button class="btn btn-primary w-32" on:click={login}>Login</button>
            </div>
        </div>
    </div>
</div>