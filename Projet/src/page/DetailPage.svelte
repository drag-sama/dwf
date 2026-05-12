<script>
// @ts-nocheck

    let {id} = $props()
    import { onMount } from 'svelte';
    import Image from '../component/Image.svelte';
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
                <p class="mb-30">Ville: {logement.ville}</p>
                <p>Description:</p>
                <p>{logement.description}</p>
            </div>
            
    </div>
  </div>
{/if}