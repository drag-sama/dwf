<script>

var logementJson = {}

    import Logement from './component/Logement.svelte';
    import Header from './component/Header.svelte';
    const getLogements = async () => {
        const res = await fetch("/api/logements")
        let logementJson = await res.json()
        console.log(logementJson)
    }
    
</script>

<Header/>

<button on:click={getLogements}>Get logements</button>

<div class=".search-list">
    <Logement/>
</div>

