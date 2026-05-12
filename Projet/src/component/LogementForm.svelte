<script>    
    let nom = $state('');
    let ville = $state('');
    let imageUrl = $state('');
    let description = $state('');
    let prix = $state(0);
    let capacite = $state(0)
    const proprietaireId = localStorage.userID

    let result = $state('')
    const handleCreate=()=>{
        
        createLogement()
    }

    async function createLogement () {
		const res = await fetch('api/logements/', {
			method: 'POST',
            headers:{"Content-Type":"application/json"},
			body: JSON.stringify({
				nom,
				ville,
                prix: Number(prix),
                capacite: Number(capacite),
                imageUrl,
                description,
                proprietaireId
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
        console.log(result[0])
	}
    
</script>

{#if localStorage.userID != "" && localStorage.userID != "guest"}
<div class=" flex flex-col my-10">
    <div class="shadow-md rounded-md border border-gray-200 dark:border-gray-700 dark:text-gray-300 flex flex-col items-center self-center">
        <span class="mx-10 my-3 text-xl"> Crée nouveau logement</span>
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={nom} placeholder="Nom" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={ville} placeholder="Ville" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={prix} placeholder="Prix" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={capacite} placeholder="Capacite" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={description} placeholder="Description" />
        <input class="border dark:border-gray-500 rounded-sm my-1 p-1 w-11/12" bind:value={imageUrl} placeholder="Image" />
        <button class="bg-black text-white dark:bg-white dark:text-black m-3 p-2 px-4 rounded-xl"onclick={handleCreate}> Créer</button>
    </div>
</div>
{/if}