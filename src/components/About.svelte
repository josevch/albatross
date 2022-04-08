<script>
    let description =
        "Grupo de golf de Panama dedicado a la perfeccion del golf";
    let count = 0;
    function clickHandle() {
        count += 1;
        console.log(count);
    }
</script>

<main>
    <div class="about">
        <p>
            {description}
        </p>
    </div>

    <button on:click={clickHandle}>Click {count === 0 ? "" : count}</button>
</main>

<style>
    .about p {
        color: var(--white);
    }
</style>
