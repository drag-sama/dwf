<script>
    let search = $state('');
	import Image from './Image.svelte';

    import {searchContent} from "../lib/store"
    searchContent.subscribe((value) => {
        search = value;
    })

    const getLogements = async () => {
        const res = await fetch("/api/logements")
        return await res.json()
    }
    let promise = getLogements()
</script>

{#await promise}
    <img  class="size-15 self-center" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />

{:then logements}
    {#each logements as logement}
        {#if logement.nom.toLowerCase().includes(search.toLowerCase())}
            <div class ="flex flex-col cursor-pointer justify-center w-full max-w-2/12 mx-3 pb-3 rounded-xl mb-8 rounded-sm border border-white hover:border-gray-900">
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
{:catch error}
    <div>Erreur : {error.message}</div>
{/await}


