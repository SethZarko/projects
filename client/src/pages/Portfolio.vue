<script>
export default {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        goToProject(projectId) {
            this.$router.push(`/portfolio/${projectId}`)
        },
        handleClick(projectId) {
            this.goToProject(projectId)
            this.scrollToTop()
        },
        async getAllProjects() {
            try {
                const response = await fetch('http://localhost:8000/projects/all')

                if (response.ok) {
                    this.projects = await response.json()
                } else {
                    this.responseError = 'Error Loading Projects...'
                    this.log(`Failed to Fetch Recent Projects - Home Page - ${response.status}`, 'error')
                }
            } catch (error) {
                this.responseError = 'Error Loading Projects...'
                this.log(error, 'error');
            }

        },
    },
    mounted() {
        this.getAllProjects()
    }
}
</script>

<template>
    <section id="portfolio-page">
        <h1>All Projects</h1>
        <div class="projects-container">

            <div v-for="project in projects" :key="project._id" class="project-item">
                <iframe :src="project.url" frameborder="0"></iframe>
                <div :key="project._id" class="go-to-btn" @click="handleClick(project._id)">
                    more details
                </div>
            </div>

        </div>
    </section>
</template>



<style scoped>
#portfolio-page {
    width: 100%;
    margin: 0 auto;
    background-color: rgb(54, 54, 54);
    padding: 2em;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: white;
    text-align: center
}

.projects-container {
    width: 90%;
    margin: 2em auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-content: center;
    align-content: center;
    gap: 3em;
}

.project-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

iframe {
    width: 100%;
    height: 350px;
    background-color: white;
    border: solid 1px red;
    margin: 1em auto;
    border: solid 1px rgb(20, 173, 255);
}


.go-to-btn {
    width: 200px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: white;
    border: solid 1px white;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: ease-in .2s;
}

.go-to-btn:hover {
    background-color: rgba(255, 255, 255, 0.25);
}
</style>