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
        <div class="w-8/12">
            <Image src={logement.imageUrl}/>
                <div>
                    <p>{logement.prix}</p>
                    <p>Propriétaire: {proprietaire.prenom} {proprietaire.nom}</p>
                </div>
        </div>
        <div class="battlepass w-4/12">
            <p>{logement.nom}</p>
            <p>{logement.ville}</p>
            <p>{logement.description}</p>
    </div>
  </div>
{/if}