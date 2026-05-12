<script>
  import { navigate } from "svelte-routing";
  import {userName} from "../lib/store"

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
    <span>Ceci est la page de compte</span>
    <button class=" border-gray-300 shadow-sm p-1 rounded-sm bg-black text-white dark:bg-white dark:text-black" onclick={() => {userName.set(""); navigate("/login", {replace:true});}}>Déconnexion</button>
    <button onclick={handleModeChange}>Changer mode</button>
    <div>
        <span class="text-xl font-bold">Mes logements</span>
    </div>
</div>
