<script>

var logementJson = {}

    import Logement from './component/Logement.svelte';
    import Header from './component/Header.svelte';
    import Login from './component/Login.svelte';
    
    import {userName} from "./lib/store"

    let logged = $state('');
    userName.subscribe((value) => {
        logged = value;
        console.log(logged)
    })
  

    
</script>

{#if logged != ''}

<Header/>
<div class=".search-list">
    <Logement/>
</div>

{:else}
    <Login/>
{/if}

