<script>    

    import { v4 as uuidv4 } from "uuid";

    let id = uuidv4();
    console.log(id)
    let nom = $state('');
    let ville = $state('');
    let prix = $state(0);
    let capacite = $state(0)

    async function createLogement () {
		const res = await fetch('api/logements/', {
			method: 'POST',
			body: JSON.stringify({
                id,
				nom,
				ville,
                prix,
                capacite
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
    
</script>

{#if localStorage.userID != "" && localStorage.userID != "guest"}
<div class=" flex flex-col my-10">
<div class="shadow-md rounded-md border border-gray-200 dark:border-gray-700 dark:text-gray-300 flex flex-col items-center self-center">
        <span class="mx-10 my-3 text-xl"> Crée nouveau logement</span>
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1" bind:value={nom} placeholder="Nom" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1" bind:value={ville} placeholder="Ville" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1" bind:value={prix} placeholder="Prix" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1" bind:value={capacite} placeholder="Capacite" />
        <button class="bg-black text-white dark:bg-white dark:text-black m-3 p-2 px-4 rounded-xl"onclick={createLogement}> Créer</button>
    </div>
</div>
{/if}