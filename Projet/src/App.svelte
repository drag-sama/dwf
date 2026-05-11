<script>

var logementJson = {}

    import Logement from './component/Logement.svelte';
    import Header from './component/Header.svelte';
    import Login from './component/Login.svelte';
    
    import {isLogged} from "./lib/store"
  
  
    const getLogements = async () => {
        const res = await fetch("/api/logements")
        let logementJson = await res.json()
        console.log(logementJson)
    }
    
</script>

{#if isLogged}

<Header/>

<div class="logements">
    <Logement/>
</div>

{:else}
    <Login/>
{/if}

