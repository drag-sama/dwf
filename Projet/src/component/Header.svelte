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

    userName.subscribe((value) => {
        userId = value;
        if(userId != "guest")
            getUser();
    })

    
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
        <input class="border border-gray-300 rounded-sm p-2 h-9 mr-15 my-3"
            bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
    </div>
</div>