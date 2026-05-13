<script>
  import { navigate } from "svelte-routing";
  import Logement from "../component/Logement.svelte";
  import LogementForm from "../component/LogementForm.svelte";
  import Reservation from "../component/Reservation.svelte";
  let windowActive = $state(0)
  const handleModeChange = () => {
    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
    }
    }
</script>

<div class="flex flex-col items-center">
    <button class="border-gray-300 shadow-sm p-2 rounded-sm bg-black text-white dark:bg-white dark:text-black" onclick={() => {localStorage.userId = ""; navigate("/login", {replace:true});}}>Déconnexion</button>
    <button class="pointer rounded-sm mt-4 shadow-xl shadow-black dark:shadow-white bg-black dark:bg-white text-white dark:text-black p-2 " onclick={handleModeChange}>Changer mode</button>

    {#if localStorage.userID != "guest"}
        <div class="w-11/12 flex flex-row items-center text-center dark:text-gray-200 my-10">
            <button class={windowActive == 0 ? "windowButton border border-blue-400" : "windowButton"} onclick={() => windowActive = 0}>Mes logements</button>
            <button class="windowButton" onclick={() => windowActive = 1}>Mes locations</button>
            <button class="windowButton" onclick={() => windowActive = 2}>Nouveau logement</button>
        </div>


        <div class={windowActive == 0 ? "logements": "hidden"}>
            <Logement isUserLogement={true}/>
        </div>
        <div class={windowActive == 11 ? "logements": "hidden"}>
            <Reservation/>
        </div>
        <div class={windowActive == 2 ? "": "hidden"}>
            <LogementForm/> 
        </div>
    {/if}
    
</div>
