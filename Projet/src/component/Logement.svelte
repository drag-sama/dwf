<script>
    let {isUserLogement = false} = $props();
    let search = $state('');
    let triKeyValue = $state('');
    // @ts-ignore
    let logements = $state([])
    let loading = $state(true)

    import {searchContent, triKey} from "../lib/store"
  import Dropwdown from "./Dropdown.svelte";
  import LogementCard from "./LogementCard.svelte";
    searchContent.subscribe((value) => {
        search = value;
    })
    triKey.subscribe((value) => {
        triKeyValue = value;
    })

    const getLogements = async () => {
        const res = await fetch("/api/logements")
        logements = await res.json()
        console.log(logements)
        loading = false 

        logementsTries = [...logements]
            .filter(l => l.nom.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
                if (triKeyValue === 'price_asc')  return a.prix - b.prix;
                if (triKeyValue === 'price_desc') return b.prix - a.prix;
                return 0;
            });
     logementsTriesUser = logementsTries.filter((value) => (value.proprietaireId == localStorage.userID) == isUserLogement)
    }
    getLogements()
    let logementsTries = $derived(logements);
    let logementsTriesUser = logementsTries
</script>


{#if loading}
<div class="flex justify-center">
    <img  class="size-15" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />
</div>
{:else if logementsTriesUser.length > 0}
        <div class="w-full mb-5 ml-2 sm:ml-10"> <Dropwdown/> </div>
        <div class="grid grid-cols-3 px-3 sm:grid-cols-4 gap-3 sm:gap-10 md:px-15 ">
        {#each logementsTriesUser as logement}
                <LogementCard imageUrl={logement.imageUrl} id={logement.id} nom={logement.nom} ville={logement.ville} description={logement.description} prix={logement.prix}/>
        {/each}
    </div>
{:else}
    <span class="flex justify-center text-xl text-black dark:text-white">Aucun logement</span>
{/if}



