<script>
    import { get } from "svelte/store";
    let name = $state('')
    let triKeyValue = $state('');
    import {searchContent} from "../lib/store"
    import {triKey} from '../lib/store'
    import {navigate} from "svelte-routing";

    var user = $state()

    const getUser = async () => {
        const res = await fetch("/api/utilisateurs/" + localStorage.userID)
        user = await res.json()
    }

    

    if (localStorage.userID != "guest") getUser();

    triKey.subscribe((value) => {
        triKeyValue = value;
    })

    let showDropdown = $state(false)

    // pour cacher le dropdown quand on clique autre part
    window.onclick = function(event) {
        // @ts-ignore
        if (!event.target.matches('.dropbtn')) {
            showDropdown = false;
        }
    }
    
</script>

<div class="flex flex-row shadow-xl justify-between rounded-b-xl mb-10 bg-white dark:bg-gray-800 dark:shadow-gray-black">
    <img src="/Logo.png" alt="Logo" class="size-25" onclick={() => navigate("/", {replace:true})} />
    <div>
        <div class="flex flex-col items-center">
            <img src="/user.svg" alt="Logo" class="size-10 cursor-pointer" onclick={() => navigate("/compte", {replace: true})}/>
            {#if user != null}
                <span class="dark:text-gray-300"> {user.prenom} {user.nom}</span> 
            {:else}
                <button class="shadow sm border border-gray-200 dark:border-gray-900 dark:text-gray-400 px-1" onclick={() => localStorage.userID = ""} > Se connecter</button> 
            {/if}
        </div>
        <div class="dropdown">
            {#if triKeyValue != ''}
            <button onclick={() => triKey.set('')}>x</button>
            {/if}
            <button class="dropbtn rounded-xl" onclick= {e => {
        e.preventDefault() //pr ne pas recharger la page
        showDropdown = !showDropdown}}>Trier par</button>
            <div id="myDropdown" class={showDropdown ? "dropdown-content block" : "dropdown-content hidden" }>
                <button class = "w-full" onclick={() => triKey.set("price_asc")}>Prix croissant</button>
                <button class = "w-full" onclick={() => triKey.set("price_desc")}>Prix décroissant</button>
            </div>
        </div>
        <input class="border border-gray-300 dark:border-gray-500 dark:text-gray-400 rounded-sm p-2 h-9 mr-15 my-3"
            bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
    </div>
</div>