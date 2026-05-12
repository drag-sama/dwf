<script>
// @ts-nocheck

    let {id} = $props()
    import { onMount } from 'svelte';
    let logement = $state(null);
    let loading = $state(true);

    onMount(async () => {
        const res = await fetch(`/api/logements/${id}`);
        logement = await res.json();
        loading = false;
    });
</script>

{#if loading}
  <p>Chargement...</p>
{:else if logement}
  <h1>{logement.nom}</h1>
  <p>{logement.ville}</p>
  <p>{logement.prix} €</p>
{/if}