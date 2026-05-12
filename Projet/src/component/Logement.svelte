<script>
    let search = $state('');
    let triKeyValue = $state('');
    let logements = $state([])
    let loading = $state(true)

    import {searchContent, triKey} from "../lib/store"
  import LogementCard from "./LogementCard.svelte";
    searchContent.subscribe((value) => {
        search = value;
    })
    triKey.subscribe((value) => {
        triKeyValue = value;
    })

    let logementsTries = $derived(
        [...logements]
            .filter(l => l.nom.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
                if (triKeyValue === 'price_asc')  return a.prix - b.prix;
                if (triKeyValue === 'price_desc') return b.prix - a.prix;
                return 0;
            })
    );
        
    const getLogements = async () => {
        const res = await fetch("/api/logements")
        logements = await res.json()
        loading = false 
    }
    getLogements()
    
</script>

{#if loading}
    <img  class="size-15 self-center" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />
{:else}
    {#each logementsTries as logement}
            <LogementCard imageUrl={logement.imageUrl} nom={logement.nom} ville={logement.ville} description={logement.description} prix={logement.prix}/>
    {/each}
{/if}



