<script>
    let name = $state('')
    
    import {searchContent} from "../lib/store"
</script>

<div>
    <input bind:value={name} on:input={() => searchContent.set({name}.name)} placeholder="Chercher un logement" />
</div>