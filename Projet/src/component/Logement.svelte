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

        <div class ="logement shadow-sm rounded-sm">
            <Image src={logement.imageUrl}/>
            <div class = "infos_logement">
                <p class = "name_logement">{logement.nom}</p>
                <p class = "city_logement">{logement.ville}</p>
                <p class = "desc_logement">{logement.description}</p>
                <p class = "price_logement">{logement.prix} €</p>
            </div>
        </div>

    {/if}
{/each}



