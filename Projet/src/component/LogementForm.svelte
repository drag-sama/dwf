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

<div>
    <h1> Crée nouveau logement</h1>
    <input bind:value={nom} placeholder="Nom" />
    <input bind:value={ville} placeholder="Ville" />
    <input bind:value={prix} placeholder="Prix" />
    <input bind:value={capacite} placeholder="Capacite" />
    <button onclick={createLogement}> Crée</button>
</div>