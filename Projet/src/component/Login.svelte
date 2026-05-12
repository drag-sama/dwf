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
        console.log(email + ' oui')
        let actualUser = users.filter((user) => user.email == email)
        if(actualUser.length > 0){
            userName.set(actualUser[0].id)
        }
    }
</script>

<div class=" flex flex-col mt-40">
<form class="shadow-md rounded-md border border-gray-200 flex flex-col items-center self-center" onsubmit= {e => {
        e.preventDefault() //pr ne pas recharger la page
        login()}}>

<span class="mt-3 text-3xl">Connexion</span>
    <img src="/Logo.png" alt="Logo" class="size-40 mb-10 mx-15"/>
    <input class="border rounded-sm p-1 border-gray-300 mb-5" bind:value={email} placeholder="Adresse email" />
    <button class="shadow-sm mb-5 p-2 rounded-xl bg-black text-white">Connecter</button>
</form>
    
</div>