<script>
    let {isUserLogement = false} = $props();
    let search = $state('');
    let triKeyValue = $state('');
    // @ts-ignore
    let logements = $state([])
    let loading = $state(true)

    import {searchContent, triKey} from "../lib/store"
  import Dropwdown from "./Dropwdown.svelte";
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
    <div class="w-full mb-5 ml-2 sm:ml-10"> <Dropwdown/> </div>
    <div class="grid grid-cols-3 px-3 sm:grid-cols-4 gap-3 sm:gap-10 md:px-15 ">
    {#each logementsTries.filter((value) => (value.proprietaireId == localStorage.userID) == isUserLogement) as logement}
            <LogementCard imageUrl={logement.imageUrl} id={logement.id} nom={logement.nom} ville={logement.ville} description={logement.description} prix={logement.prix}/>
    {/each}
    </div>
{/if}



