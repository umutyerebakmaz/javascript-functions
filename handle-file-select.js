function handleFileSelect($event) {
    const files = $event.target.files;
    const output = [];
    for (let i = 0, f; f = files[i]; i++) {
        const size = bytesToSize(f.size);
        output.push(`<li class="relative">
    <div
        class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
            alt="" class="object-cover pointer-events-none group-hover:opacity-75">
        <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for ${f.name}</span>
        </button>
    </div>
    <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">${f.name}</p>
    <p class="block text-sm font-medium text-gray-500 pointer-events-none">${size}</p>
</li>`);
    }
    
    document.getElementById('thumb-container').innerHTML =
        '<ul id="thumb-list" role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-16">' + output.join('') + '</ul>';
}
