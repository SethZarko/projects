<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <section id="card-container">
        <div class="card-sub-container">
            <div class="card">
                <h3>Frontend</h3>
                <p>I build frontend client facing web applications that look great, are functional, and are custom to your brand or business.</p>
            </div>
            <div class="card">
                <h3>Backend</h3>
                <p>I build server side APIs that client facing web applications consume and use to transfer data.</p>
            </div>
            <div class="card">
                <h3>SEO</h3>
                <p>I utilize keywords to drive traffic to your business site so that your website not only looks and works great, but also gets the proper exporsure to your target audience.</p>
            </div>
            <div class="card">
                <h3>UX/UI</h3>
                <p>I build intutive, functional, and engaging UIs that deliver an incredible user experience unique to your target demographic.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
#card-container {
    width: 100%;
    padding: 3em;
    background-color: rgb(54, 54, 54);
}

.card-sub-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 3em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    align-items: center;
}

.card {
    background-color: rgb(20, 173, 255);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgb(255, 255, 255, 1);
    padding: 1.5em;
    width: 100%;
    height: 100%;
    min-height: 250px;
    text-align: center;
}

.card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.35rem;
    color: #333;
    letter-spacing: 1px;
    margin-bottom: 0.65em;
}

.card p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    width: 95%;
    margin: 0 auto;
    color: white;
    line-height: 1.5;
}

@media (min-width: 942px) {
    .card-sub-container {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
}

@media (min-width: 1276px) {
    .card-sub-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .card h3 {
        font-size: 1.65rem;
    }

    .card p {
        font-size: 0.85rem;
    }
}
</style>