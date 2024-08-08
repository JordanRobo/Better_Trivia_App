<script lang="ts">
    import Login from "$lib/components/Login.svelte";
    import Profile from "$lib/components/Profile.svelte";
    import { currentUser } from "$lib/stores";

</script>

{#if $currentUser}
    <Profile user={$currentUser} />
{:else}
    <Login />
{/if}