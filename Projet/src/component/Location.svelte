<script>
	let name = $state('world');
	import Image from './Image.svelte';
    import { onMount } from 'svelte';

    import {searchContent} from "../lib/store"
    console.log(searchContent)
   
</script>

<div title={name}>
    <h1>Nom: {name}</h1>
    <Image src="https://picsum.photos/600/400?5"/>
</div>

