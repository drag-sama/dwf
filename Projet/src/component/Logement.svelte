<script>
	let name = $state('world');
    let search = $state('');
	import Image from './Image.svelte';

    import {searchContent} from "../lib/store"
    searchContent.subscribe((value) => {
        search = value;
    })
    var logements = $state([])
    const getLogements = async () => {
        const res = await fetch("/api/logements")
        logements = await res.json()
    }
    getLogements()
</script>

{#each logements as logement}
    {#if name.includes(search)}

        <div title={"Nom du logement"}>
            <h1>Nom: {logement.nom}</h1>
            <Image src={logement.imageUrl}/>
        </div>

    {/if}
{/each}



