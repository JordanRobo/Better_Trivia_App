<script lang="ts">
    import { Person } from "svelte-radix";
    import PinInput from '$lib/components/Pin_Input.svelte';
    import AvatarSelector from '$lib/components/Avatar_Select.svelte';
    import { pb } from "$lib/stores";
    import { goto } from "$app/navigation";

    let username: string = '';
    let password: string = '';
    let selectedAvatar: string | null = null;

    let active = [true, false, false];
    let list = ['Name', 'PIN', 'Avatar'];

    $: currentStep = active.lastIndexOf(true);

    async function login(){
        await pb.collection('users').authWithPassword(username, password);
        goto('/profile');
    }

    async function signUp(){
        try {
            const data = {
                username,
                password,
                passwordConfirm: password,
                avatar: selectedAvatar,
            };
            await pb.collection('users').create(data);
            await login();
        } catch (err) {
            // Handle error
        }
    }

    function nextStep() {
        const currentStep = active.findIndex(step => !step);
        if (currentStep !== -1 && currentStep < active.length) {
            active[currentStep] = true;
        }
    };
</script>

<div class="flex-1 flex flex-col justify-between min-h-screen p-4">
    <ul class="steps text-white">
        {#each list as item, index}
            <li class="step after:!w-5 after:!h-5 after:text-xs before:!h-1" class:step-primary={active[index]}>{item}</li>
        {/each}
    </ul>
    
    {#if currentStep === 0}
    <div class="card bg-white/30 w-11/12 drop-shadow-2xl my-auto mx-auto backdrop-blur-md">
        <div class="card-body space-y-2">
            <h2 class="card-title text-white">Create Username</h2>
            <label class="input input-bordered input-ghost input-secondary flex items-center gap-2 text-white/50">
                <Person class="min-w-4"/>
                <input type="text" class="grow" placeholder="Username" bind:value={username} />
            </label>
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={() => nextStep()}>Next</button>
            </div>
        </div>
    </div>
    {/if}

    {#if currentStep === 1}
    <div class="card bg-white/30 w-11/12 drop-shadow-2xl my-auto mx-auto backdrop-blur-md">
        <div class="card-body space-y-2">
            <h2 class="card-title text-white">Create PIN</h2>
            <PinInput bind:value={password} />
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={() => nextStep()}>Next</button>
            </div>
        </div>
    </div>
    {/if}

    {#if currentStep === 2}
    <div class="card bg-white/30 w-11/12 drop-shadow-2xl my-auto mx-auto backdrop-blur-md">
        <div class="card-body space-y-2">
            <h2 class="card-title text-white">Select Avatar</h2>
            <AvatarSelector bind:selectedAvatar />
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={signUp}>Finish</button>
            </div>
        </div>
    </div>
    {/if}
</div>