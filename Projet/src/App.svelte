<script>

var logementJson = {}

    import Logement from './component/Logement.svelte';
    import Header from './component/Header.svelte';
    import Login from './component/Login.svelte';
    
    import {userName} from "./lib/store"
  import LogementForm from './component/LogementForm.svelte';

    let logged = $state('');
    userName.subscribe((value) => {
        logged = value;
    })
</script>


{#if logged == ''}
    <Login/>
{:else}
    <Header/>
    <div class="logements">
        <Logement/>
    </div>

    <LogementForm/>
{/if}

