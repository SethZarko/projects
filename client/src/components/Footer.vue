<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<template>
    <footer>
        <small>Seth Zarkovich. Web Dev. {{  year }} &copy;</small>
    </footer>
</template>

<style scoped>
    footer {
        width: 100%;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
    }

    small {
        font-family: 'Poppins', sans-serif;
        color: white;
    }
</style>