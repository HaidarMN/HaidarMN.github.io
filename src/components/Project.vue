<template>
    <div class="bg-[#A3A9B0] text-[#EBEDEC] h-fit px-[50px] sm:px-[75px] lg:px-[150px] pt-[50px] sm:pt-[100px] lg:pt-[150px] pb-[50px] sm:pb-[75px] lg:pb-[100px] flex flex-col justify-center gap-2 sm:gap-4">
        <h1 class="text-xl sm:text-3xl lg:text-5xl text-center font-extrabold">My Projects</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 sm:mt-4 lg:mt-8 justify-items-center">
            <div 
                v-for="(project, index) in projects"
                :key="project"
                @click="showModal(index)"
                class="h-96 w-full px-6 py-4 bg-[#EBEDEC] text-[#4C5870] rounded flex flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-2 cursor-pointer"
            >
                <div class="flex flex-col gap-2">
                    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold line-clamp-2 h-[3.8rem]">{{ project.name }}</h2>
                    <p class="text-xs sm:text-sm lg:text-base text-[#A3A9B0] line-clamp-6">{{ project.desc }}</p>
                </div>
                <div class="flex flex-row gap-4 gap-y-1 flex-wrap h-fit">
                    <p 
                        v-for="lang in project.langs"
                        class="text-xs lg:text-base font-bold"
                    >
                        {{ lang }}
                    </p>
                </div>
            </div>
        </div>

        <div v-if="modal == true" @click="modal = false" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
            <div class="relatives mx-auto w-auto">
                <div class="bg-[#EBEDEC] text-[#4C5870] px-4 py-6 w-[85vw] rounded flex flex-col sm:flex-row">
                    <div class="pb-4 sm:py-2 px-2 sm:pr-4 border-b-2 sm:border-r-2 sm:border-b-0 border-[#4C5870] w-full sm:w-2/5 md:w-2/6 flex justify-center items-center">
                        <img :src="projects[this.id].img" class="rounded">
                    </div>
                    <div class="flex flex-col gap-2 pt-4 sm:py-2 px-2 sm:pl-4 w-full sm:w-3/5 md:w-4/6 justify-between">
                        <!-- <div class="flex flex-row justify-between"> -->
                            <div class="flex flex-row gap-4 items-center">
                                <a 
                                    v-for="(link, index) in projects[this.id].links"
                                    :href="link"
                                    target="_blank"
                                    class="w-[31px] lg:w-[35px] transition duration-150 ease-in-out hover:scale-110"
                                >
                                    <img v-if="index == 'github'" src="../assets/icons/github.svg">
                                    <img v-else src="../assets/icons/external.svg">
                                </a>
                            </div>
                            <!-- <img @click="modal = false" src="../assets/icons/close.svg" class="w-[31px] lg:w-[35px] cursor-pointer">
                        </div> -->
                        <div class="flex flex-col gap-2">
                            <h1 class="text-lg sm:text-xl lg:text-3xl font-bold">{{ projects[this.id].name }}</h1>
                            <p class="text-xs sm:text-sm lg:text-lg text-[#A3A9B0]">{{ projects[this.id].desc }}</p>
                        </div>
                        <div class="flex flex-row gap-4 gap-y-1 flex-wrap h-fit">
                            <p 
                                v-for="lang in projects[this.id].langs"
                                class="text-xs lg:text-base font-bold"
                            >
                                {{ lang }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modal == true" class="fixed inset-0 z-40 opacity-50 bg-black min-h-full"></div>
    </div>
</template>

<script>
import qrScanner from '../assets/images/qrScanner.png'
import keylogger from '../assets/images/keylogger.png'
import spp from '../assets/images/spp.png'
import ai from '../assets/images/ai.png'
import portfolio from '../assets/images/portfolio.png'
import covid from '../assets/images/covid.png'
import perpus from '../assets/images/perpus.png'

export default {
    data() {
        return {
            modal: false,
            id: '',
            projects: [
                {
                    name: "QR Scanner",
                    desc: "A program that scan a QR code and decode it using OpenCV and PyZBar developed in Python",
                    langs: ["Python", "OpenCV", "PyZBar"],
                    links: {
                        github: "https://github.com/HaidarMN/py_qrScanner"
                    },
                    img: qrScanner
                },
                {
                    name: "Keylogger",
                    desc: "Keylogger is software program that allows you to record each keystrokes that you type on your keyboard",
                    langs: ["Python", "Pynput"],
                    links: {
                        github: "https://github.com/HaidarMN/py_cs"
                    },
                    img: keylogger
                },
                {
                    name: "School Fees Payment",
                    desc: "School assignment as a graduation requirement when I was still at vocational high school",
                    langs: ["Laravel", "Vue.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
                    links: {
                        github: "https://github.com/HaidarMN/ukk_spp"
                    },
                    img: spp
                },
                {
                    name: "Simple A.I.",
                    desc: "An A.I. that work like Google Asisstant using speechRecognition to hear our voice and convert to text-to-speech with pyttsx3 to run the code",
                    langs: ["Python", "speechRecognition", "pyttsx3"],
                    links: {
                        github: "https://github.com/HaidarMN/Simple-A.I."
                    },
                    img: ai
                },
                {
                    name: "Portofolio Website",
                    desc: "My portofolio website hosted using Github Pages",
                    langs: ["Vite", "Vue.js", "TailwindCSS"],
                    links: {
                        github: "https://github.com/HaidarMN/HaidarMN.github.io",
                        other: "https://haidarmn.github.io"
                    },
                    img: portfolio
                },
                {
                    name: "Self Check-Up Covid-19",
                    desc: "Self Check-Up website that sorts your body temperature to check that you have Covid or not",
                    langs: ["PHP", "HTML", "CSS", "JavaScript"],
                    links: {
                        github: "https://github.com/HaidarMN/Covid-19"
                    },
                    img: covid
                },
                {
                    name: "Library Website",
                    desc: "Website that contains all library (fake) books from the database that uses the CRUD method",
                    langs: ["PHP", "HTML", "CSS", "JavaScript"],
                    links: {
                        github: "https://github.com/HaidarMN/Web-Perpus"
                    },
                    img: perpus
                },
            ]
        }
    },

    methods: {
        showModal(id) {
            this.id = id
            this.modal = true
        }
    }
}
</script>
