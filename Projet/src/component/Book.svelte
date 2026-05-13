<script lang="ts">
  let {logement} = $props()
  let resBook = $state()
  let date_arrivee = $state()
  let date_depart = $state()
  async function bookLogement() {
        resBook = await fetch("/api/reservations/", {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
                "logementId": logement.id,
                "locataireId": localStorage.userID,
                "dateDepart": date_depart,
                "dateArrivee": date_arrivee
			})
        })
        console.log(logement.id)
        console.log(localStorage.userID )
        console.log(date_depart)
        console.log(date_arrivee)
        /*resLogement = await fetch(`/api/logement/${logement.id}`, {
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        })*/
        
    }

</script>

<div class="m-3 flex justify-evenly">
    <div class="flex flex-col">
        <span>Début:</span>
        <input
            type="date"
            id="start"
            class="mr-10 border border-gray-300 shadow-sm p-1 rounded-sm"
            bind:value={date_depart}
        />
    </div>

     <div class="flex flex-col">
        <span>Fin:</span>
        <input
            type="date"
            id="end"
            class="mr-10 border border-gray-300 shadow-sm p-1 rounded-sm"
            bind:value={date_arrivee}
        />
    </div>
</div>

<button class="cursor-pointer" onclick={bookLogement}>Réserver</button>