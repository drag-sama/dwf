<script>
  import { navigate } from "svelte-routing";
</script>

<div class="flex flex-col items-center">
    <span>Ceci est la page de compte</span>
    <button class=" border-gray-300 shadow-sm p-1 rounded-sm bg-black text-white dark:bg-white dark:text-black" onclick={() => {localStorage.userID = ""; navigate("/login", {replace:true});}}>Déconnexion</button>
    <div>
        <span class="text-xl font-bold">Mes logements</span>
    </div>
</div>
