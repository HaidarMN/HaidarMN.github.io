<template>
    <div class="fixed z-30 bg-[#EBEDEC] text-[#4C5870] px-[10px] sm:px-[25px] lg:px-[50px] py-4 w-screen shadow-md flex flex-col sm:flex-row justify-between items-center">
        <div class="flex flex-row justify-between w-full">
            <a href="https://haidarmn.github.io">
                <img src="../../assets/icons/h.svg" class="h-[35px]">
            </a>
            <button @click="menu = !menu" class="sm:hidden">
                <img v-if="!menu" src="../../assets/icons/menu.svg">
                <img v-else src="../../assets/icons/close.svg">
            </button>
        </div>

        <div
            :class="menu ? 'flex' : 'hidden'"
            class="sm:flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-0 items-center font-bold text-xs md:text-sm lg:text-base"
        >
            <a
                v-for="link in links"
                :key="link"
                @click="menu = !menu"
                :href="'#' + link"
                class="capitalize py-1 hover:mt-0.5 hover:border-b-2 hover:border-[#4C5870] transition duration-150 ease-out"
            >
                {{ link }}
            </a>
            <a 
                :href="pdf"
                class="rounded-md px-4 py-2 border border-[#4C5870] hover:bg-[#4C5870] hover:text-[#EBEDEC] transition duration-150 ease-in-out w-fit"
                target="_blank"
            >
                Resume
            </a>
        </div>
    </div>
</template>

<script>
import PDF from '../../../public/HaidarMN_Resume.pdf'

export default {
    data() {
        return {
            menu: false,
            pdf: PDF,
            links: ["about", "skills", "experience", "projects", "contact"]
        }
    }
}
</script>
