<template>
    <footer class="bg-[#EBEDEC] text-[#4C5870] h-fit px-[50px] sm:px-[75px] lg:px-[150px] pb-[25px] flex flex-col text-center gap-2 sm:gap-4">
        <p class="text-sm sm:text-base">
            Copyright &copy; {{this.year}} Haidar Muhammad Naufal
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: ''
        }
    },

    mounted() {
        const y = new Date()
        this.year = y.getFullYear()
    }
}
</script>