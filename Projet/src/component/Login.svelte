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

<div class="shadow-md flex flex-col items-center m-45 rounded-md border border-gray-200">
    <span class="mt-3 text-3xl">Connexion</span>
    <img src="/Logo.png" alt="Logo" class="size-40 mb-10"/>
    <input class="border rounded-sm p-1 border-gray-300 mb-5" bind:value={email} on:input={login} placeholder="Adresse email" />
</div>