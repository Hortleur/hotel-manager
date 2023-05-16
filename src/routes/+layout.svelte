<script>
    import "../app.css"
</script>

<main class=" flex flex-row h-[100vh] overflow-scroll">
    <aside class=" w-6 lg:w-16 border-r-2 border-orange-700">
        <nav class=" flex flex-col h-full justify-between items-center">
            <div>
                nav top
            </div>
            <div>
                navbottom
            </div>
        </nav>
    </aside>
    <slot />
</main>