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

<div>
    <img src="/Logo.png" alt="Logo" />
    <input bind:value={email} on:input={login} placeholder="Adresse email" />
</div>