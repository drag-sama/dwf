<script>
import {userName} from "../lib/store"
    let email = $state('')

    var users = $state([])
    const getUsers = async () => {
        const res = await fetch("/api/utilisateurs")
        users = await res.json()
    }
    getUsers()
    const login = () => {
        let actualUser = users.filter((user) => user.email == email)
        if(actualUser.length > 0){
            userName.set(actualUser[0].id)
        }
    }
</script>

<div class=" flex flex-col mt-40">
<div class="shadow-md rounded-md border border-gray-200 flex flex-col items-center self-center">
<span class="mt-3 text-3xl">Connexion</span>
    <img src="/Logo.png" alt="Logo" class="size-40 mb-10 mx-10"/>
    <input class="border rounded-sm p-1 border-gray-300 mb-5" bind:value={email} on:input={login} placeholder="Adresse email" />
</div>
    
</div>