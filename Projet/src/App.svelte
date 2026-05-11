<script>
	import Location from './component/Location.svelte';
  import Header from './component/Header.svelte';
    const getLogements = async () => {
        const res = await fetch("http://193.46.198.245:3000/logements")
        const logementJson = await res.json()
        
        console.log(logementJson)
    }
</script>

<Header/>

<button on:click={getLogements}>Get logements</button>

<div class=".search-list">
    <Location/>
</div>

