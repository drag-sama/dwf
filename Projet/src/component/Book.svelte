<script lang="ts">
<<<<<<< HEAD
    import { navigate } from "svelte-routing";
=======
  import { navigate } from "svelte-routing";
>>>>>>> a2bba49f077ac1eea7549821bc653df99c79c9ac

  let {logement} = $props()
  let date_arrivee = $state("")
  let date_depart = $state("")

  let error = $state("")
  
  const handleBook = () => {
    if(date_arrivee == ""){
        error = "La date d'arrivée ne peut pas être vide"
        return
    }
    if(date_depart == ""){
        error = "La date de départ ne peut pas être vide"
        return
    }
    bookLogement()
  } 

  async function bookLogement() {
        const resBook = await fetch("/api/reservations", {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
                "logementId": logement.id,
                "locataireId": localStorage.userID,
                "dateDepart": date_depart,
                "dateArrivee": date_arrivee
			})
        })
        let json = await resBook.json() 
        console.log(json)    
        if(json.error == undefined){
            navigate("/compte", {replace: true});
        } 
        else{
            error = json.error
        }
        navigate("/compte")
    }

</script>

<div class="m-3 flex justify-evenly">
    <div class="flex flex-col">
        <span>Début:</span>
        <input
            type="date"
            id="start"
            class="sm:mr-10 border border-gray-300 shadow-sm p-1 sm:p-2 rounded-sm"
            bind:value={date_arrivee}
        />
    </div>

     <div class="flex flex-col">
        <span>Fin:</span>
        <input
            type="date"
            id="end"
            class="sm:mr-10 border border-gray-300 shadow-sm p-1 sm:p-2 rounded-sm"
            bind:value={date_depart}
        />
    </div>
</div>

<span class="my-1 text-red-400"> {error}</span>

<button class="cursor-pointer border border-gray-300 shadow-sm rounded-xl hover:bg-blue-400 py-2 mx-2" onclick={handleBook}>Réserver</button>