<script>
    let search = $state('');
    let triKeyValue = $state('');
    let logements = $state([])
    let loading = $state(true)
	import Image from './Image.svelte';

    import {searchContent, triKey} from "../lib/store"
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

    console.log(logements)
    console.log(logementsTries)
        
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
            <div class ="flex flex-col cursor-pointer justify-center w-full max-w-2/12 mx-3 pb-3 rounded-xl mb-8 rounded-sm border border-white hover:border-gray-900 dark:hover:border-gray-400 dark:border-gray-900">
                <Image src={logement.imageUrl}/>
                <div class = "flex flex-col text-center dark:text-gray-200">
                    <p class = "font-bold">{logement.nom}</p>
                    <p class = "text-gray-500 dark:text-gray-400">{logement.ville}</p>
                    <p class = "text-gray-500 dark:text-gray-400">{logement.description}</p>
                    <p class = "font-bold">{logement.prix} €</p>
                </div>
            </div>
    {/each}
{/if}



