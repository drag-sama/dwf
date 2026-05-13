<script>
    let name = $state('')
    import {searchContent} from "../lib/store"
    import {navigate} from "svelte-routing"
    
    var user = $state()
    const getUser = async () => {
        const res = await fetch("/api/utilisateurs/" + localStorage.userID)
        user = await res.json()
    }

    const handleLogo = () => {

        let current_url = window.location.href.split('/').filter(Boolean).pop() || '/';
        console.log(current_url)
        if (current_url != "/"){
            navigate("/", {replace:true})
        }
        else{
            window.location.reload()
        }
    }

    if (localStorage.userID != "guest" && localStorage.userID != "") getUser();

</script>

{#if localStorage.userID != ""}
<div class="flex flex-row shadow-xl justify-between rounded-b-xl mb-10 bg-white dark:bg-gray-800 dark:shadow-gray-black sm:text-base">
    <img src="/Logo.png" alt="Logo" class="size-20 m-3 sm:size-25 cursor-pointer" onclick={handleLogo} />
    <div class="flex flex-row items-center">
       
        <input class="border  border-gray-300 dark:border-gray-500 dark:text-gray-400 rounded-sm p-2 h-9 w-25 md:w-60  my-3"
            bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
        
        <div class="flex flex-col items-center mx-10">
            <img src="/user.svg" alt="Logo" class="size-12 cursor-pointer bg-gray-200 dark:bg-white rounded-3xl m-1 p-1" onclick={() => navigate("/compte", {replace: true})}/>
            {#if localStorage.userID != "guest" && localStorage.userID != ""}
                {#if user != null}
                <span class="dark:text-gray-300"> {user.prenom} {user.nom}</span>
                {:else}
                <span class="dark:text-gray-300"> Chargement...</span>
                {/if} 
            {:else}
                <button class="shadow sm border border-gray-200 dark:border-gray-900 dark:text-gray-400 px-1" onclick={() => {localStorage.userID = ""; navigate("/login", {replace:true})}} > Se connecter</button> 
            {/if}
        </div>
        </div>
</div>
{/if}