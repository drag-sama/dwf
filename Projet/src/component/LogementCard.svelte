<script>
    import { navigate } from 'svelte-routing';
    import Image from './Image.svelte';
    let {imageUrl,id,nom, ville, description, prix} = $props();

    if(description.length > 15){
        description = description.substring(0,12)
        description += "..."
    }
</script>

<div class ="flex flex-col cursor-pointer justify-center md:mx-3 pb-3 rounded-xl rounded-sm border border-white hover:border-gray-900 dark:hover:border-gray-400 dark:border-gray-900" onclick={() => navigate(`/detail/${id}`)}>
    <Image src={imageUrl}/>
    <div class = "flex flex-col text-center dark:text-gray-200">
        <p class = "font-bold">{nom}</p>
        <p class = "text-gray-500 dark:text-gray-400">{ville}</p>
        <p class = "text-gray-500 dark:text-gray-400">{description}</p>
        <p class = "font-bold">{prix} €</p>
    </div>
</div>