<script lang="ts">
    import type { PageData } from "../../game/[id]/$types";

    export let data: PageData;
</script>

<h1 class="text-white text-3xl font-bold text-center">{data.title}</h1>