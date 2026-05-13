<script>
// @ts-nocheck
    import Book from '../component/Book.svelte';
    let {id} = $props()
    import { onMount } from 'svelte';
    import Image from '../component/Image.svelte';
    import { navigate } from 'svelte-routing';
    let logement = $state(null);
    let proprietaire = $state(null);
    let loading = $state(true);

    onMount(async () => {
        const res = await fetch(`/api/logements/${id}`);
        logement = await res.json();
        const res2 = await fetch(`/api/utilisateurs/${logement.proprietaireId}`)
        proprietaire = await res2.json();
        loading = false;
    });

    let deleteFailed = $state(false);
    let resDelete = $state('');
    async function deleteLogement() {
            resDelete = await fetch(`/api/logements/${logement.id}`, {
			method: 'DELETE',
            headers:{"Content-Type":"application/json"},
		})
        if (resDelete.status == 200) {
            navigate("/compte",{replace: true});
            deleteFailed = false;
        }
        else deleteFailed = true;
    }

</script>
{#if loading}
  <p>Chargement...</p>
{:else if logement}
    <div class="flex flex-col sm:flex-row dark:text-gray-200">
        <div class="sm:w-7/12 max-h-150 mx-5 ">
            <Image src={logement.imageUrl}/>
                <div class="flex flex-col mt-5 sm:text-2xl ">
                    <p>Prix: {logement.prix}€</p>
                    <p>Propriétaire: {proprietaire.prenom} {proprietaire.nom}</p>
                </div>
        </div>
        <div class="flex flex-col sm:w-5/12 bg-gray-200 dark:bg-gray-800 shadow-xl border-border-gray-200 rounded-xl p-2 mx-5 my-7 sm:mt-0">
            <p class="font-bold self-center mt-10 text-xl mb-20">{logement.nom}</p>
            <div class ="flex flex-col h-full text-lg">
                <p class="">Ville: {logement.ville}</p>
                <p>Description:</p>
                <p>{logement.description}</p>
            </div>
            {#if localStorage.userID != "guest"}
                {#if proprietaire.id != localStorage.userID}
                    <Book logement={logement}/>
                {:else}
                    <button class="cursor-pointer shadow-sm border border-gray-400 hover:bg-red-400 mx-10 rounded-xl p-1" onclick={deleteLogement}>Supprimer l'annonce</button>
                {/if}
                    <p class={deleteFailed ? "text-red-200" : "text-white dark:text-gray-800"}>Erreur suppression : {resDelete.status}</p>
            {:else}
                <button class="cursor-pointer shadow-sm border border-gray-400 mx-10 rounded-xl p-1" onclick={() => {localStorage.userID = ""; navigate("/login", {replace:true})}} > Se connecter</button> 
            {/if}
        </div>
  </div>
  
{/if}
