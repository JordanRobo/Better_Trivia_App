<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import type { LayoutData } from "./$types";
    import IntroAnimation from "$lib/components/Intro_Animation.svelte";
    import { fade, scale } from "svelte/transition";
    import { quintOut, quintInOut } from "svelte/easing";

    export let data: LayoutData;

    let on: Boolean = false;

    onMount(() => {
        return on = true;
    });

</script>

{#if on}
    <IntroAnimation />

    {#key data.pathname}
        <main in:fade={{ duration: 1000, delay: 3000, easing: quintOut }} out:scale={{ duration: 2500, start: 2.5, easing: quintInOut }} class="fixed top-0 left-0 h-screen w-screen">
            <slot />
        </main>
    {/key}
    
    <div class="absolute top-0 left-0 h-screen w-screen -z-20 bg-[#2a2924]"></div>
{/if}