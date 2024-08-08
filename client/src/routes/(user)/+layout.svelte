<script lang="ts">
    import { Exit, Home, Person } from "svelte-radix";
    import { pb } from "$lib/stores";
    import { goto } from "$app/navigation";

    function signOut() {
        pb.authStore.clear();
        goto('/');
    }
</script>

<slot />
<div class="btm-nav bg-[#2a2924]/80 text-white border-t-2 border-primary/50">
    <button on:click={() => goto('/')}>
        <Home />
    </button>
    <button on:click={() => goto('/profile')}>
        <Person />
    </button>
    <button on:click={signOut}>
        <Exit />
    </button>
</div>