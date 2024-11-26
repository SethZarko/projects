<script>
export default {
    data() {
        return {
            projects: [],
            responseError: null
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
                const response = await fetch('https://projects-gwox.onrender.com/projects/all?limit=6')

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

        }
    },
    mounted() {
        this.getAllProjects()
    }
}
</script>

<template>
    <section id="recent-projects">
        <h1>Most Recent Projects</h1>
        <hr class="title-underline">
        
        <div class="projects-container">
            <h1 v-if="projects.length === 0">Loading Projects...</h1>
            <h1 v-if="responseError">{{ responseError }}</h1>

            <div class="project-container" v-for="project in projects" :key="project._id">
                <h1>{{ project.name }}</h1>
                <hr class="project-title-underline">
                <div class="box">
                    <iframe :src="project.url" loading="lazy"></iframe>
                </div>
                <div class="id-container">
                    <div class="date-added-container">
                        <p class="date-added">Date Added: {{ this.formatDate(project.createdAt) }}</p>
                    </div>
                    <div :key="project._id" class="go-to-btn" @click="handleClick(project._id)">
                        more details
                    </div>
                </div>
                <hr>
            </div>
            <router-link to="/portfolio" @click="this.scrollToTop">All Projects</router-link>
        </div>
    </section>
</template>

<style scoped>
#recent-projects {
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: 0.5em;
}

#recent-projects h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.85rem;
    letter-spacing: 1px;
    margin: 0.5em auto 0.5em;
    padding-top: 20px;
    color: white;
    text-align: center;
}

.title-underline {
    width: 300px;
    margin: 0 auto 2em;
}

.projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: -2em auto;
}

.projects-container a {
    width: 70%;
    max-width: 400px;
    text-align: center;
    margin: 1em auto 3em; 
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    color: white;
    border: solid 1px white;
    border-radius: 10px;
    padding: 0.25em 1em;
    background: black;
    transition: ease-in .2s;
}

.projects-container a:hover {
    background-color: rgba(255, 255, 255, 0.25);
}

.project-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em 0 2em 0;
    padding: 0.5em;
}

.project-container h1 {
    font-size: 1.5rem !important;
}

.project-title-underline {
    width: 10% !important;
    margin: 0.5em auto 0 !important;
}

.go-to-btn {
    width: 200px;
    margin: 0 auto;
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

.id-container {
    width: 100%;
}

.date-added-container {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    margin: 5px auto 35px;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    color: white;
    text-align: center;
}

.project-container h1 {
    margin-bottom: 0 !important;
}

.project-container hr {
    width: 50%;
    margin: 2.5em auto -1.5em;
}

.box {
    background-color: white;
    width: 100%;
    height: 600px;
    margin: 2em auto;
}

iframe {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    height: 600px;
    border: solid 2px rgb(20, 173, 255);
}
</style>
