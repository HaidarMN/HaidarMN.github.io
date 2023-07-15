<template>
  <div
    class="bg-[#EBEDEC] text-[#4C5870] h-fit px-[50px] sm:px-[75px] lg:px-[150px] pt-[50px] sm:pt-[100px] lg:pt-[150px] pb-[50px] sm:pb-[75px] lg:pb-[100px] flex flex-col justify-center gap-2 sm:gap-4"
  >
    <h1 class="text-xl sm:text-3xl lg:text-5xl text-center font-extrabold hid">
      My Skills
    </h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 mt-2 sm:mt-4 lg:mt-8 justify-items-center"
    >
      <div
        v-for="img in skills"
        :key="img"
        class="bg-[#4C5870] w-[100px] sm:w-[120px] lg:w-[160px] h-[100px] sm:h-[120px] lg:h-[160px] p-4 rounded-full flex justify-center items-center hid"
      >
        <img
          :src="img"
          class="w-[60px] sm:w-[75px] lg:w-[100px] h-[60px] sm:h-[75px] lg:h-[100px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import vuejs from "../assets/icons/vuejs.svg";
import corelDraw from "../assets/icons/corelDraw.svg";

export default {
  data() {
    return {
      skills: [html, css, javascript, vuejs, corelDraw],
    };
  },
};
</script>
