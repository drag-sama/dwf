<script>
    let name = $state('')
    
    import {searchContent} from "../lib/store"
    import {userName} from "../lib/store"

    var user = $state()
    let userId = $state('')

    const getUser = async () => {
        const res = await fetch("/api/utilisateurs/" + userId)
        user = await res.json()
    }

    const handleModeChange = () => {
    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
    }
    }

    userName.subscribe((value) => {
        userId = value;
        if(userId != "guest")
            getUser();
    })

    let showDropdown = $state(false)

    window.onclick = function(event) {
        // @ts-ignore
        if (!event.target.matches('.dropbtn')) {
            showDropdown = false;
        }
    }
    
</script>

<div class="flex flex-row shadow-xl justify-between rounded-b-xl mb-10 bg-white dark:bg-gray-800">
    <img src="/Logo.png" alt="Logo" class="size-25" onclick={handleModeChange} />
    <div>
        <div class="flex flex-col items-center">
            <img src="/user.svg" alt="Logo" class="size-10" onclick={() => console.log("click")}/>
            {#if user != null}
                <span> Bienvenue {user.prenom} {user.nom} ! </span> 
            {:else}
                <button class="shadow sm border border-gray-200 dark:border-gray-900 dark:text-gray-400 px-1" onclick={() => userName.set("")} > Se connecter</button> 
            {/if}
        </div>
        <div class="dropdown">
            <button class="dropbtn" onclick= {e => {
        e.preventDefault() //pr ne pas recharger la page
        if (showDropdown) showDropdown = false;
        else showDropdown = true;}}>Dropdown</button>
            <div id="myDropdown" class={showDropdown ? "dropdown-content block" : "dropdown-content hidden" }>
                <a id="ascending_price" href="#">Prix croissant</a>
                <a id="descending_price" href="#">Prix décroissant</a>
                <a class="" href="#">Link 3</a>
            </div>
        </div>
        <input class="border border-gray-300 dark:border-gray-500 dark:text-gray-400 rounded-sm p-2 h-9 mr-15 my-3"
            bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
    </div>
</div>