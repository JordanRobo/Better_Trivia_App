<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let value: string = '';
    export let length: number = 5;

    const dispatch = createEventDispatcher<{
        input: { value: string };
    }>();
    
    let inputs: HTMLInputElement[] = [];

    $: if (value.length > length) {
        value = value.slice(0, length);
    }

    function handleInput(event: Event, index: number): void {
        const input = event.target as HTMLInputElement;
        const newValue = input.value.replace(/\D/g, '');

        if (newValue.length > 1) {
            value = value.slice(0, index) + newValue + value.slice(index + 1);
            input.value = newValue[0];
            focusNext(index);
        } else if (newValue.length === 1) {
            value = value.slice(0, index) + newValue + value.slice(index + 1);
            focusNext(index);
        } else {
            value = value.slice(0, index) + value.slice(index + 1);
        }

        dispatch('input', { value });
    }

    function handleKeydown(event: KeyboardEvent, index: number): void {
        if (event.key === 'Backspace' && !(event.target as HTMLInputElement).value) {
            focusPrevious(index);
        }
    }

    function focusNext(index: number): void {
        if (index < length - 1) {
            inputs[index + 1].focus();
        }
    }

    function focusPrevious(index: number): void {
        if (index > 0) {
            inputs[index - 1].focus();
        }
    }
</script>

<div class="flex mx-auto gap-1">
    {#each Array(length) as _, i}
        <input type="password" class="input input-ghost input-secondary input-bordered w-12 h-12 focus:border-primary text-center" maxlength="1" on:input={(e) => handleInput(e, i)} on:keydown={(e) => handleKeydown(e, i)} bind:this={inputs[i]} value={value[i] || ''} />
    {/each}
</div>