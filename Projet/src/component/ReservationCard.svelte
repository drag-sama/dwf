<script>
    import { navigate } from 'svelte-routing';
    import Image from './Image.svelte';
    let {imageUrl,logementId,nom,dateArrivee,dateDepart} = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class ="flex flex-col cursor-pointer justify-center md:mx-3 pb-3 rounded-xl rounded-sm border border-white hover:border-gray-900 dark:hover:border-gray-400 dark:border-gray-900" onclick={() => navigate(`/detail/${logementId}`)}>
    <Image src={imageUrl}/>
    <div class = "flex flex-col text-center dark:text-gray-200">
        <p class = "font-bold">{nom}</p>
        <p class = "text-gray-500 dark:text-gray-400">{dateArrivee}</p>
        <p class = "text-gray-500 dark:text-gray-400">{dateDepart}</p>
    </div>
</div>