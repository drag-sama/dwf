<script>
    import { onMount } from "svelte";
    import ReservationCard from "./ReservationCard.svelte";
    // @ts-ignore
    let reservations = $state([])
    // @ts-ignore
    let logements = $state([])
    let loading = $state(true)
    // @ts-ignore
    let reservationsAvecLogement = $state([])
    onMount(async () => {
        const res = await fetch(`/api/reservations`); // récup toutes les reservations
        reservations = await res.json();
        const res2 = await fetch(`/api/logements`); // tout les logements
        logements = await res2.json();
        reservationsAvecLogement = reservations.map(reservation => ({
    ...reservation, logement: logements.find(l => l.id === reservation.logementId)})) // pour faire une "jointure" externe à l'api
        loading=false
    }); 
</script>

{#if loading}
    <img  class="size-15 self-center" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />
{:else}
    <div class="grid grid-cols-3 px-3 sm:grid-cols-4 gap-3 sm:gap-10 md:px-15 ">
        {#each reservationsAvecLogement as reservation}
            {#if reservation.locataireId == localStorage.userID}
                <ReservationCard imageUrl={reservation.logement.imageUrl} logementId={reservation.logementId} nom={reservation.logement.nom} dateArrivee={reservation.dateArrivee.substring(0,10)} dateDepart={reservation.dateDepart.substring(0,10)}/>
            {/if}
        {/each}
    </div>
{/if}
