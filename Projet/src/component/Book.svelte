<script lang="ts">
  let logement = $props()
  let resBook = $state()
  async function bookLogement() {
        resBook = await fetch("/api/reservations/", {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
                "logementId": logement.id,
                "locataireId": localStorage.userID
			})

        })
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
            value="2026-05-12"
            class="mr-10 border border-gray-300 shadow-sm p-2 rounded-sm"
        />
    </div>

     <div class="flex flex-col">
        <span>Fin:</span>
        <input
            type="date"
            id="end"
            value="2026-05-12"
            class="mr-10 border border-gray-300 shadow-sm p-2 rounded-sm"
        />
    </div>
</div>

<button class="cursor-pointer border border-gray-300 shadow-sm rounded-sm py-2 mx-2" onclick={bookLogement}>Réserver</button>