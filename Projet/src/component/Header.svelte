<script>
    let name = $state('')
    
    import {searchContent} from "../lib/store"
</script>

<div>
    <img src="/Logo.png" alt="Logo" />
    <input bind:value={name} oninput={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
</div>