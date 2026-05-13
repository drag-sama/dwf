<script>
    import { onMount } from "svelte";
    import ReservationCard from "./ReservationCard.svelte";
    import Dropdown from "./Dropdown.svelte";
    import {triKey} from "../lib/store"
    // @ts-ignore
    let reservations = $state([])
    // @ts-ignore
    let logements = $state([])
    let triKeyValue = $state('')
    let loading = $state(true)
    // @ts-ignore
    let reservationsAvecLogement = $state([])
    // @ts-ignore
    let reservationsAvecLogementTriees = $state([])
    const update = () => {
        reservationsAvecLogementTriees = [...reservationsAvecLogement]
            .filter(r => r.locataireId == localStorage.userID)
            .sort((a, b) => {
                if (triKeyValue === 'date_asc')  return new Date(a.dateArrivee).getTime() - new Date(b.dateArrivee).getTime();
                if (triKeyValue === 'date_desc') return new Date(b.dateArrivee).getTime() - new Date(a.dateArrivee).getTime();
                return 0;
                
            });
        console.log(reservationsAvecLogementTriees)
    }
    onMount(async () => {
        const res = await fetch(`/api/reservations`); // récup toutes les reservations
        reservations = await res.json();
        const res2 = await fetch(`/api/logements`); // tout les logements
        logements = await res2.json();
        reservationsAvecLogement = reservations.map(reservation => ({
    ...reservation, logement: logements.find(l => l.id === reservation.logementId)})) // pour faire une "jointure" externe à l'api
        loading=false
        update()
    });
    
    triKey.subscribe((value) => {
        triKeyValue = value;
        update()
    })
</script>

{#if loading}
    <img  class="size-15 self-center" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />
{:else if (reservationsAvecLogementTriees.length > 0)}
    
    <div class="w-full mb-5 ml-2 sm:ml-10"><Dropdown page="reservation"/></div>
    <div class="grid grid-cols-3 px-3 sm:grid-cols-4 gap-3 sm:gap-10 md:px-15 ">
        {#each reservationsAvecLogementTriees as reservation}
                <ReservationCard imageUrl={reservation.logement.imageUrl} logementId={reservation.logementId} nom={reservation.logement.nom} dateArrivee={reservation.dateArrivee.substring(0,10)} dateDepart={reservation.dateDepart.substring(0,10)}/>
        {/each}
    </div>
    {:else}
    <span class="flex justify-center text-xl text-black dark:text-white">Aucune réservation</span>
{/if}
