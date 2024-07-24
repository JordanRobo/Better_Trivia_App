<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import IntroAnimation from "$lib/components/Intro_Animation.svelte";
    import { fade } from "svelte/transition";

    let on: Boolean = false;

    onMount(() => {
        return on = true;
    });
</script>

{#if on}
    <IntroAnimation />
    <main in:fade={{ duration: 1000, delay: 3000 }} class="min-h-screen flex flex-col z-10">
        <slot />
    </main>
{/if}
