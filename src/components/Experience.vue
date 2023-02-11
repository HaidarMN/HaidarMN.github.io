<template>
    <div class="bg-[#A3A9B0] text-[#EBEDEC] h-fit px-[50px] sm:px-[75px] lg:px-[150px] pt-[50px] sm:pt-[100px] lg:pt-[150px] pb-[50px] sm:pb-[75px] lg:pb-[100px] flex flex-col justify-center gap-2 sm:gap-4">
        <h1 class="text-xl sm:text-3xl lg:text-5xl text-center font-extrabold">Work Experience</h1>
        <div class="flex flex-col timeline mt-2 sm:mt-4 lg:mt-8">

            <div class="flex flex-row z-10 mb-10 gap-8">
                <div class="w-9 sm:w-10 lg:w-12 h-7 sm:h-10 lg:h-12 p-1.5 sm:p-2.5 flex justify-center bg-[#EBEDEC] rounded-full">
                    <img src="../assets/icons/code.svg">
                </div>
                <div class="flex flex-col gap-2 w-full bg-[#EBEDEC] text-[#A3A9B0] rounded-lg py-2 px-4">
                    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-[#4C5870]">Internship Frontend Developer</h2>
                    <h3 class="text-sm sm:text-base lg:text-lg">
                        <a href="https://artspedia.id/" target="_blank" class="hover:text-[#4C5870]">Artspedia</a>
                         | September - November 2022
                    </h3>
                    <p class="text-xs sm:text-sm lg:text-base">
                        Created an option for changing language to Indonesia and translating some of the contents,
                        created a table of contents for data protection section,
                        and made a report regarding a cloning issue.
                    </p>
                </div>
            </div>

            <div class="flex flex-row z-10 mb-10 gap-8">
                <div class="w-9 sm:w-10 lg:w-12 h-7 sm:h-10 lg:h-12 p-1.5 sm:p-2.5 flex justify-center bg-[#EBEDEC] rounded-full">
                    <img src="../assets/icons/vector.svg">
                </div>
                <div class="flex flex-col gap-2 w-full bg-[#EBEDEC] text-[#A3A9B0] rounded-lg py-2 px-4">
                    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-[#4C5870]">Internship Designer</h2>
                    <h3 class="text-sm sm:text-base lg:text-lg">
                        <a href="https://www.gamelab.id/" target="_blank" class="hover:text-[#4C5870]">Gamelab Indonesia</a>
                         | August - October 2021
                    </h3>
                    <p class="text-xs sm:text-sm lg:text-base">
                        I work at Gamelab Indonesia as internship designer for 3 months.
                        My work is make a company's logo with a card name etc.(dummy), re-design some banner, and make a UI Kit for game.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.timeline {
    position: relative;
}

.timeline::before {
    content: " ";
    position: absolute;
    top: 20px;
    bottom: 0;
    width: 4px;
    background: #EBEDEC;
}

@media (min-width: 320px) {
    .timeline::before {
        left: 12px;
    }
}

@media (min-width: 640px) {
    .timeline::before {
        left: 17px;
    }
}

@media (min-width: 1024px) {
    .timeline::before {
        left: 22px;
    }
}
</style>