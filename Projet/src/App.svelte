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

    import { onMount } from "svelte";

  onMount(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

</script>


{#if logged == ''}
    <Login/>
{:else}
    <Header/>
    <div class="logements dark:bg-gray-900">
        <Logement/>
    </div>

    <LogementForm/>
{/if}

