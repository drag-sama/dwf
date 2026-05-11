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
<<<<<<< HEAD

<div class="logements">
=======
<div class=".search-list">
>>>>>>> eb542f290dabb745f728f68b10443b5e80029fab
    <Logement/>
</div>

{:else}
    <Login/>
{/if}

