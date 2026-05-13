<script>
    let {page} = $props();
    import {triKey} from '../lib/store'
    let triKeyValue = $state('');
    triKey.subscribe((value) => {
        triKeyValue = value;
    })

    let showDropdown = $state(false)

    // pour cacher le dropdown quand on clique autre part
    window.onclick = function(event) {
        // @ts-ignore
        if (!event.target.matches('.dropbtn')) {
            showDropdown = false;
        }
    }
</script>

 <div class="dropdown">
    <button class="dropbtn rounded-xl" onclick= {e => {
    e.preventDefault() //pr ne pas recharger la page
    showDropdown = !showDropdown}}>Trier par</button>
    <div id="myDropdown" class={showDropdown ? "dropdown-content block" : "dropdown-content hidden" }>
        {#if page == "main"}
        <button class = "w-full" onclick={() => triKey.set("price_asc")}>Prix croissant</button>
        <button class = "w-full" onclick={() => triKey.set("price_desc")}>Prix décroissant</button>
        {:else if page == "reservation"}
        <button class = "w-full" onclick={() => triKey.set("date_asc")}>Date croissante</button>
        <button class = "w-full" onclick={() => triKey.set("date_desc")}>Date décroissante</button>
        {/if}
    </div>
    {#if triKeyValue != ''}
    <button class="text-xl" onclick={() => triKey.set('')}>x</button>
    {:else}
    <span class="hidden">x</span>
    {/if}
</div>