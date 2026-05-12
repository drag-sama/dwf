<script>
    let name = $state('')
    let triKeyValue = $state('');
    import {searchContent} from "../lib/store"
    import {userName} from "../lib/store"
    import {triKey} from '../lib/store'

    var user = $state()
    let userId = $state('')

    const getUser = async () => {
        const res = await fetch("/api/utilisateurs/" + userId)
        user = await res.json()
    }

    userName.subscribe((value) => {
        userId = value;
        if(userId != "guest")
            getUser();
    })
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

<div class="flex flex-row shadow-xl justify-between rounded-b-xl mb-10">
    <img src="/Logo.png" alt="Logo" class="size-25" />
    <div>
        <div class="flex flex-col items-center">
            <img src="/user.svg" alt="Logo" class="size-10" onclick={() => console.log("click")}/>
            {#if user != null}
                <span> Bienvenue {user.prenom} {user.nom} ! </span> 
            {:else}
                <button class="shadow sm border border-gray-200 px-1" onclick={() => userName.set("")} > Se connecter</button> 
            {/if}
        </div>
        <div class="dropdown">
            {#if triKeyValue != ''}
            <button onclick={() => triKey.set('')}>x</button>
            {/if}
            <button class="dropbtn" onclick= {e => {
        e.preventDefault() //pr ne pas recharger la page
        showDropdown = !showDropdown}}>Trier par</button>
            <div id="myDropdown" class={showDropdown ? "dropdown-content block" : "dropdown-content hidden" }>
                <button onclick={() => triKey.set("price_asc")}>Prix croissant</button>
                <button onclick={() => triKey.set("price_desc")}>Prix décroissant</button>
            </div>
        </div>
        <input class="border border-gray-300 rounded-sm p-2 h-9 mr-15 my-3"
            bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
    </div>
</div>