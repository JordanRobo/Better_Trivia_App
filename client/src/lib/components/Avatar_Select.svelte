<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let avatars: string[] = [
        '/avatars/bmo.jpg',
        '/avatars/finn.jpg',
        '/avatars/ik.jpg',
        '/avatars/jake.jpg',
        '/avatars/marceline.jpg',
        '/avatars/pb.jpg',
    ];

    export let selectedAvatar: string | null = null;

    const dispatch = createEventDispatcher<{
        select: { avatar: string };
    }>();

    function handleSelect(avatar: string): void {
        selectedAvatar = avatar;
        dispatch('select', { avatar });
    }
</script>

<div class="grid grid-cols-3 grid-flow-row gap-4">
    {#each avatars as avatar}
        <button
            class="avatar focus:ring-primary focus:ring-offset-base-100 rounded-full ring ring-offset-2"
            class:selected={avatar === selectedAvatar}
            on:click={() => handleSelect(avatar)}
        >
            <img src={avatar} alt="Avatar option" class="w-24 rounded-full"/>
        </button>
    {/each}
</div>