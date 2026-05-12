<script>
  import { navigate } from "svelte-routing";
  import Logement from "../component/Logement.svelte";
  import LogementForm from "../component/LogementForm.svelte";

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
    <button class="pointer rounded-xl mt-4 shadow-xl shadow-black dark:shadow-white bg-black dark:bg-white text-white dark:text-black p-2 " onclick={handleModeChange}>Changer mode</button>
    <div class="w-full flex flex-col items-center">
        <span class="text-xl font-bold my-3 dark:text-gray-100">Mes logements</span>
        <div class="logements">
            <Logement isUserLogement={true}/>
        </div>
        <LogementForm/> 
    </div>
</div>
