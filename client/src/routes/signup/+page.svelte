<script lang="ts">
    import { Person } from "svelte-radix";
    import PinInput from '$lib/components/Pin_Input.svelte';
    import AvatarSelector from '$lib/components/Avatar_Select.svelte';

    let username: string = '';
    let pinValue: string = '';
    let selectedAvatar: string | null = null;

    let active = [true, false, false];
    let list = ['Name', 'PIN', 'Avatar'];

    $: currentStep = active.lastIndexOf(true);

    function handleUsername() {
        console.log('Username submitted:', username);
        nextStep();
    };

    function handlePinInput() {
        console.log('PIN submitted:', pinValue);
        nextStep();
    };

    function handleAvatarSelect() {
        console.log('Avatar selected:', selectedAvatar);
        console.log('Signup process completed!');
    };

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
    <div class="card bg-base-100 w-11/12 shadow-xl my-auto mx-auto">
        <div class="card-body space-y-2">
            <h2 class="card-title">Create Username</h2>
            <label class="input input-bordered flex items-center gap-2">
                <Person class="min-w-4"/>
                <input type="text" class="grow" placeholder="Username" bind:value={username} />
            </label>
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={handleUsername}>Next</button>
            </div>
        </div>
    </div>
    {/if}

    {#if currentStep === 1}
    <div class="card bg-base-100 w-11/12 shadow-xl my-auto mx-auto">
        <div class="card-body space-y-2">
            <h2 class="card-title">Create PIN</h2>
            <PinInput bind:value={pinValue} />
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={handlePinInput}>Next</button>
            </div>
        </div>
    </div>
    {/if}

    {#if currentStep === 2}
    <div class="card bg-base-100 w-11/12 shadow-xl my-auto mx-auto">
        <div class="card-body space-y-2">
            <h2 class="card-title">Select Avatar</h2>
            <AvatarSelector bind:selectedAvatar />
            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={handleAvatarSelect}>Finish</button>
            </div>
        </div>
    </div>
    {/if}
</div>