<script>
export default {
    props: ['id'],
    data() {
        return {
            project: {}
        }
    },
    methods: {
        async fetchProject(id) {

            const response = await fetch(`https://projects-gwox.onrender.com/projects/${id}`);

            if (response.ok) {
                this.project = await response.json();
            } else {
                console.error(`Error: ${response.statusText}`);
            }
        }
    },
    mounted() {
        this.fetchProject(this.id)
    }
}
</script>

<template>
    <section id="portfolio-item">
        <div class="project-container">
            <div class="project-title-container">
                <h1>{{ project.name }}</h1>
                <iframe :src="project.url" frameborder="0"></iframe>
            </div>
            <hr>
            <div class="project-details-container">

                <div class="this-site-container">
                    <h3>Project Stack:</h3>
                    <p v-if="project.front">Frontend: {{ project.front }}</p>
                    <p v-if="project.back">Backend: {{ project.back }}</p>
                    <p v-if="project.database">Database: {{ project.database }}</p>
                    <p v-if="project.css">CSS: {{ project.css }}</p>
                </div>
                <hr style="width: 50%">
                <br>
                <div class="text-container">
                    <h3>Project Details:</h3>
                    <p v-html="project.details"></p>
                    <a :href="project.url" target="_blank" style="font-size: 1rem; width: 250px">Link to Project</a>
                </div>
            </div>
            <hr style="width: 30%">
            <router-link to="/portfolio" @click="this.scrollToTop">Back to All Projects</router-link>
        </div>
    </section>
</template>

<style scoped>
#portfolio-item {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    background-color: rgb(54, 54, 54);
}

.project-title-container {
    width: 350px;
    margin: 0 auto;
    padding: 1em 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin: 1.15em;
}

iframe {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: solid 1px rgb(20, 173, 255);
}

hr {
    width: 90%;
    margin: 1em auto;
}

.project-container {
    display: flex;
    flex-direction: column;
}

.project-container a {
    width: 85%;
    max-width: 500px;
    text-align: center;
    margin: 1em auto 1em; 
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: white;
    border: solid 1px white;
    border-radius: 10px;
    padding: 0.35em 1em;
    background: black;
    transition: ease-in .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-container a:hover {
    background-color: rgba(255, 255, 255, 0.25);
}

.project-details-container h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.35rem;
    margin: 1.5em auto 1.75em;
    color: white;
    width: 80%;
}

.project-details-container p {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 4em;
    width: 80%;
    font-family: 'Roboto-Mono', sans-serif;
    font-weight: 100;
    line-height: 1.6;
    font-size: 1.25rem;
    margin: 1em auto;
    border: solid 1px rgb(20, 173, 255);
    padding: 1em;
    color: white;
} 

@media (min-width: 425px) {
    .project-title-container {
        width: 400px;
    }
}

@media (min-width: 500px) {
    .project-title-container {
        width: 475px;
    }
}

@media (min-width: 600px) {
    .project-title-container {
        width: 575px;
    }
}

@media (min-width: 650px) {
    .project-title-container {
        width: 625px;
    }
}

@media (min-width: 768px) {
    .project-title-container {
        width: 743px;
    }
}

@media (min-width: 1024px) {
    .project-title-container {
        width: 1000px;
    }
}

@media (min-width: 1150px) {
    .project-title-container {
        width: 1125px;
    }
}
</style>