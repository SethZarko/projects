<script>
import ReactWrapper from '../components/Home/ReactWarapper.vue'

    export default {
        data(){
            return {
                currentYear: new Date().getFullYear(),
                years: 0 
            }
        },
        components: {
            ReactWrapper,
        },
        methods: {
            calculateYearsInWebDevelopment() {
                this.years = this.currentYear - 2021
            }
        },
        mounted() {
            this.calculateYearsInWebDevelopment()
        }
    }
</script>

<template>
    <div>
        <section id="about-page">
            <h1>My name is Seth</h1>
            <hr>
            <h3>I am a self-taught web developer, from Ontario, Canada.</h3>
            <hr>

            <br>
            <br>
            <h3>Web Development Origins</h3>
            <p>I began my journey in web development at the end of 2021. The way I discovered my love and passion for web development was through another love and passion of mine - music. I have enjoyed tinkering around as a hobbyist audio engineer, producer, and music composer since I was 13, and I've been a musician all my life - first learning to play guitar at the age of 6. 
            <br>
            <br>
            Toward the end of 2021 I had the chance to work in an audio engineering role that required knowledge of programming (particularly of triggering sounds in video games and of the C# language). While I have a solid understanding of audio engineering, manufacturing, editing, and producing sounds, I had no such knowledge of that specific type of programming and the C# language.
            
            <br>
            <br>

            I have tinkered with C and its language variants, and I find it and the domain of computer science incredibly interesting; however, I do not currently consider myself a programer at that level. Needless to say, I never secured that job position.</p>
            <br>
            <br>
            <h3>Beginning my journey</h3>
            <p>However, through this potential job, I discovered HTML, then CSS, then JavaScript - in that <em>exact</em> order. I became enthralled with understanding more about these languages, and web development in the boarder context of programming. I spent a solid year building static websites for whatever I could think of (band websites, business websites, blogs, lists, calculator apps, etc.), and watching video tutorials learning as much as I possibly could about those three languages and web development as a whole. 
            
            <br>
            <br>
                
            Then in November, 2022, chatGPT was released to the public. My knowledge grew deeper as I was able to ask in real time, very specific questions and explanations about how this particular concept worked, or what that line of code was doing. (I always erred on the side of caution, as chatGPT is known to be incorrect). Overall, I became increasingly more interested in the fullstack lifecycle of a web application.</p>
            <br>
            <br>

            <hr>
            <h3 class="network-para">I aim to network with individuals and businesses seeking custom web applications and with software agencies or employers interested in hiring a motivated, self-taught web developer.</h3>
            <hr>

            <br>
            <br>

            <p>For the next year after that, I discovered documentation. I immersed myself into both the frontend and backend sides of web development, learning as much as I could through asking chatGPT questions, researching documentation, wathcing YouTube tutorials, and consulting with a family member who works as a professional and formally educated software developer.
            
            <br>
            <br>

            
            I discovered the basics of the internet as a vast network, and how over a TCP/IP connection model, HTTP data requests that contain packets of data are made between servers, clients, databases, and a host of other domains, and, that as a web developer you can write code to construct, manipulate, model, and transfer that data. I found (and still find) that concept so cool! 
            
            <br>
            <br>
            
            From there, the myriad nuances and minutia of web development began to unfold. I began to realize that web developemt is a vast and complex topic, and I knew I couldn't learn everything and that this would be a journey of continuous self-education.
            
            </p>

            <br>
            <br>

            <h3>Why this Website?</h3>
            <p>I built this website so that I could have a place online to host my web development journey, showcasing through my projects what I have learned. I am always looking to learn more and become a better web developer. This website will evolve as my knowledge of web development evovles. I am incredibly excited to continue my journey, and after now {{ years }} years self-teaching web development, I look forward to many more!</p>
            <br>
            <br>
        </section>
        <ReactWrapper/>
    </div>
</template>

<style scoped>
    #about-page {
        padding: 2em;
        color: rgb(20, 20, 20);
    }

    h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.75rem;
        margin: 0 auto 2em;
    }

    hr {
        width: 40%;
        margin: 1em auto;
    }

    h2, h3 {
        width: 100% !important;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    .network-para {
        margin: 0 auto;
        font-size: 1rem;
        line-height: 1.6;
    }

    h2 {
        font-size: 1.35rem;
    }

    h3 {
        width: 80%;
        margin: 1em auto;
    }

    p {
        font-family: 'Roboto-Mono', sans-serif;
        letter-spacing: 0.75px;
        line-height: 1.6;
        width: 85%;
        margin: 0 auto;
    }

    @media (min-width: 500px) {
        .network-para {
            width: 80% !important;
        }
    }

    @media (min-width: 768px) {

        #about-page {
            text-align: center;
        }
        p {
            width: 70%;
        }

        h3 {
            width: 65%;
        }
    }

    @media (min-width: 1024px) {
        .network-para {
            width: 70% !important;
        }
    }

    @media (min-width: 1200px) {
        p {
            width: 55%;
        }

        .network-para {
            width: 55% !important;
        }
    }

    @media (min-width: 1920px) {
        p {
            width: 45%;
        }

        .network-para {
            width: 45% !important;
        }
    }
</style>