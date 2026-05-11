<script>
	import Logement  from "./src/Componenent/Logement.svelte";
    import { Searchbar} from 'framework7-svelte';

    const getLogements = async () => {
        const res = await fetch("http://193.46.198.245:3000/logements")
        const logementJson = await res.json()
        
        console.log(logementJson)
    }
</script>

<button on:click={getLogements}>Get logements</button>
<Searchbar
  disableButtonText="Cancel"
  placeholder="Search in items"
  clearButton={true}
searchContainer=".search-list" searchIn=".item-title" />
<div class=".search-list">
    <Logement/>
</div>

