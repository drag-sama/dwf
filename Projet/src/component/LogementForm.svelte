<script>    
    import {userName} from "../lib/store"
    import Logement from "./Logement.svelte";
    import { v4 as uuidv4 } from "uuid";

    let logged = $state('');
    userName.subscribe((value) => {
        logged = value;
    })

    let result = $state('')

    let id = uuidv4();
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

{#if logged != "" && logged != "guest"}
<div class=" flex flex-col my-10">
<div class="shadow-md rounded-md border border-gray-200 flex flex-col items-center self-center">
        <span class="mx-10 my-3 text-xl"> Crée nouveau logement</span>
        <input class="border border-gray rounded-sm my-1 p-1" bind:value={nom} placeholder="Nom" />
        <input class="border border-gray rounded-sm my-1 p-1" bind:value={ville} placeholder="Ville" />
        <input class="border border-gray rounded-sm my-1 p-1" bind:value={prix} placeholder="Prix" />
        <input class="border border-gray rounded-sm my-1 p-1" bind:value={capacite} placeholder="Capacite" />
        <button class="bg-black text-white m-3 p-2 px-4 rounded-xl"onclick={createLogement}> Créer</button>
    </div>
</div>
{/if}