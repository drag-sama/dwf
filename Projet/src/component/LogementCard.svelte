<script>
    import Image from './Image.svelte';
    let {imageUrl,nom, ville, description, prix} = $props();
</script>

<div class ="flex flex-col cursor-pointer justify-center w-full md:mx-3 pb-3 rounded-xl mb-8 rounded-sm border border-white hover:border-gray-900 dark:hover:border-gray-400 dark:border-gray-900">
    <Image src={imageUrl}/>
    <div class = "flex flex-col text-center dark:text-gray-200">
        <p class = "font-bold">{nom}</p>
        <p class = "text-gray-500 dark:text-gray-400">{ville}</p>
        <p class = "text-gray-500 dark:text-gray-400">{description}</p>
        <p class = "font-bold">{prix} €</p>
    </div>
</div>