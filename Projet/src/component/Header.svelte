<script>
    let name = $state('')
    
    import {searchContent} from "../lib/store"
    import {userName} from "../lib/store"

    var user = $state()
    let userId = $state('')

    const getUser = async () => {
        console.log(userId)
        const res = await fetch("/api/utilisateurs/" + userId)
        user = await res.json()
    }

    userName.subscribe((value) => {
        userId = value;
        getUser();
    })

    
</script>

<div>
    <img src="/Logo.png" alt="Logo" />
    <input bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
    {#if user != null}
        <div>
            Bienvenue {user.prenom} {user.nom} ! 
        </div>
    {/if}
</div>