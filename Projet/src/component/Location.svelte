<script>
	let name = $state('world');
    let search = $state('');
	import Image from './Image.svelte';

    import {searchContent} from "../lib/store"
    searchContent.subscribe((value) => {
        search = value;
    })
   

</script>

{#if name.includes(search)}
<div title={name}>
    <h1>Nom: {name}</h1>
    <Image src="https://picsum.photos/600/400?5"/>
</div>
{/if}

