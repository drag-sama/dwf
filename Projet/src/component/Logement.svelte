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
    {#if logement.nom.toLowerCase().includes(search.toLowerCase())}

        <div class ="flex flex-col justify-center w-full max-w-2/12 mx-3 pb-3 rounded-xl mb-8 rounded-sm border border-white hover:border-gray-900">
            <Image src={logement.imageUrl}/>
            <div class = "flex flex-col text-center">
                <p class = "font-bold">{logement.nom}</p>
                <p class = "text-gray-500">{logement.ville}</p>
                <p class = "text-gray-500">{logement.description}</p>
                <p class = "font-bold">{logement.prix} €</p>
            </div>
        </div>

    {/if}
{/each}



