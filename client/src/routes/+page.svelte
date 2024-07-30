<script lang="ts">
    import { goto } from "$app/navigation";

</script>

<div class="flex-1 flex flex-col justify-between min-h-screen p-4">
    <h1 class="text-2xl font-bold text-center my-auto text-[#fefefe]">Christmas Trivia!</h1>
    <div class="flex justify-between w-full">
        <button class="btn btn-primary btn-outline w-[48%]">Log-in</button>
        <button class="btn btn-primary w-[48%]" on:click={() => goto("/signup")}>Sign-up</button>
    </div>
</div>