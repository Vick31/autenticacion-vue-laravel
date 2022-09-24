
<template>

    <div class="aside">
        <div class="icons">
            <span class="material-symbols-outlined ">
                local_pizza
            </span>
            <span class="material-symbols-outlined ">
                local_convenience_store
            </span>
        </div>
        <div class="texto" >
            <router-link to="/" class="icons-aside">
                <span class="material-symbols-outlined ">
                    local_pizza
                </span>
                <span>Comidas</span>
            </router-link>
            <router-link to="/companies" class="icons-aside">
                <span class="material-symbols-outlined ">
                    local_convenience_store
                </span>
                <span>locales</span>
            </router-link>
        </div>
    </div>

</template>


<style>
* {
    text-decoration: none;
    transition: 300ms all ease;
    padding: 0;
    margin: 0;
}

.aside {
    height: calc(90vh - 9.4rem);
    display: flex;
    flex-flow: row;
    background-color: rgb(221, 221, 221);
}


.icons  span{
    padding: 0.7rem 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.texto {
    position: absolute;
    text-align: right;
    opacity: 0;
    z-index: 10;
    height: calc(90vh - 9.4rem);
    display: flex;
    flex-flow: column;
    background-color: rgb(221, 221, 221);
    color: #fff;
}

.texto:hover {
    opacity: 1;
    padding-left: 0.5rem;
}

.icons-aside{
    display: flex;
    flex-flow: row;
    color: #000;
    text-decoration: none;
}
span {
    height: 3rem;
    padding: 0.5rem;
    display: flex !important;
    flex-flow: row;
    align-items: center;
}
</style>


<script>

</script>