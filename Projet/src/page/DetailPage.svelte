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
            navigate("/",{replace: true});
            deleteFailed = false;
        }
        else deleteFailed = true;
    }
</script>
{#if loading}
  <p>Chargement...</p>
{:else if logement}
    <div class="flex flex-row dark:text-gray-200">
        <div class="w-7/12 mx-5">
            <Image src={logement.imageUrl}/>
                <div class="flex flex-col mt-5">
                    <p>Prix: {logement.prix}€</p>
                    <p>Propriétaire: {proprietaire.prenom} {proprietaire.nom}</p>
                </div>
        </div>
        <div class="flex flex-col w-5/12">
            <p class="font-bold self-center mt-10 text-xl mb-20">{logement.nom}</p>
            <div class ="flex flex-col h-full text-lg">
                <p class="">Ville: {logement.ville}</p>
                <p>Description:</p>
                <p>{logement.description}</p>
            </div>
            {#if proprietaire.id != localStorage.userID}
                <Book logement={logement}/>
            {:else}
                <button class="cursor-pointer" onclick={deleteLogement}>Supprimer l'annonce</button>
            {/if}
                <p class={deleteFailed ? "text-red-200" : "text-white dark:text-gray-900"}>Erreur suppression : {resDelete.status}</p>
            
        </div>
  </div>
  
{/if}
