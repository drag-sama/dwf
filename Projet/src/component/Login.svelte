<script>
    import {userName} from "../lib/store"
    let email = $state('')

    // @ts-ignore
    var users = $state([])
    const getUsers = async () => {
        const res = await fetch("/api/utilisateurs")
        users = await res.json()
    }
    let failedlogin = $state(false)
    getUsers()
    const login = () => {
        let actualUser = users.filter((user) => user.email == email)
        if(actualUser.length > 0){
            userName.set(actualUser[0].id)
            failedlogin = false;
        }
        else {
            failedlogin = true;
        }
    }
</script>

<div class=" flex flex-col mt-40">
<form class="shadow-md rounded-md border border-gray-200 flex flex-col items-center self-center" onsubmit= {e => {
        e.preventDefault() //pr ne pas recharger la page
        login()}}>

<span class="mt-3 text-3xl">Connexion</span>
    <img src="/Logo.png" alt="Logo" class="size-40 mb-5 mx-15"/>
    <p class={failedlogin ? "text-red-500 mb-3" : "text-white mb-3"}>Email incorrect</p>
    <input class="border rounded-sm p-1 border-gray-300 mb-5" bind:value={email} placeholder="Adresse email" />
    <button class="shadow-sm mb-1 p-2 rounded-xl bg-black text-white">Connecter</button>
    <button class="text-blue-300 mb-2 text-sm" onclick={() => userName.set("guest")}>Connecter en tant qu'invité</button>
</form>
    
</div>