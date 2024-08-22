<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section id="tech-comp">
        <h1>For the nerds 🤓</h1>
        <div class="tech-container">

            <h3>Preferred Stack:</h3>
            <p>Frontend: <img src="../../assets/vue-logo.png" alt="vue logo"> + <img src="../../assets/vite-logo.png"
                    alt="vite logo"> </p>
            <p>Backend: <img src="../../assets/node-logo.webp" /> + <img src="../../assets/express-logo.png"
                    alt="express.js logo"></p>
            <p>Database: <img src="../../assets/sql-logo.png" alt="mysql logo"> + <img src="../../assets/prisma-logo.png"
                    alt="prisma logo"></p>

            <h3>Secondary Stack:</h3>
            <p>Frontend: <img src="../../assets/react-logo.png" alt="vue logo"> + <img src="../../assets/vite-logo.png"
                    alt="vite logo"> </p>
            <p>Backend: <img src="../../assets/node-logo.webp" /> + <img src="../../assets/express-logo.png"
                    alt="express.js logo"></p>
            <p>Database: <img src="../../assets/mongo-logo.webp" alt="mongodb logo" class="mongo-logo"> + <img
                    class="mongo-logo mongoose" src="../../assets/mongoose-logo.png" alt="mongoose logo"></p>
            <hr>
            <h3>Exposure to:</h3>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>PHP + Laravel (WebAPI)</li>
                <li>Python + FastAPI</li>
                <li>Bootstrap, Tailwind, ChakraUI, Material UI, SASS/SCSS</li>
                <li>Nuxt.js</li>
                <li>Next.js</li>
            </ul>

            <div class="this-site-container">
                <h3>This Website's Stack:</h3>
                <p>Frontend: Vue.js</p>
                <p>Backend: Node.js/Express</p>
                <p>Database: MongoDB - No ORM</p>
                <p>Contact Form: React + FormSpree</p>
                <p>CSS: Raw CSS</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
ul,
li {
    list-style-type: disc;
}

#tech-comp {
    padding: 2em;
}

#tech-comp h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    margin: 0.5em auto 1em;
}

#tech-comp h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.35rem;
    margin: 1.5em auto 1.75em;
}

.tech-container h3:nth-of-type(3) {
    margin-bottom: 0 !important;
}

.tech-container p {
    width: 100%;
    font-family: 'Roboto-Mono', sans-serif;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.15em;
    font-size: 1.25rem;
    margin: 1em auto;
    border: solid 1px rgb(20, 173, 255);
    padding: 1em;
    z-index: 100;
}

.tech-container img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.mongoose {
    width: 85px !important;
    margin-left: -25px;
}

.tech-container ul {
    padding: 1em;
}

.tech-container ul li {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.35rem;
    margin: 1em auto;
}

.this-site-container {
    text-align: left;
}

.this-site-container p {
    display: flex;
    justify-content: space-between;
    gap: 3em;
}

@media (min-width: 650px) {
    .tech-container img {
        width: 70px;
        height: 70px;
    }

    .mongoose {
        width: 125px !important;
        margin-left: -50px;
    }
}
</style>