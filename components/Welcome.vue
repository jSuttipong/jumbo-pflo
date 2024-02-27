<template>
  <div class="welcome-container font-victor">
    <!-- <h5 class="">Hi</h5>
    <h1 class="">I'm Jumbo Suttipong</h1>
    <h3 class="">Developer</h3> -->
    <div>
      <h5 class="font-victor">{{ animated[0] }}</h5>
      <h1 class="font-victor fw-bold animated-text">{{ animated[1] }}</h1>
      <h3 class="font-victor">{{ animated[2] }}</h3>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      textWelcome: "Hi",
      textNameInfo: "I'm Jumbo Suttipong",
      textJobInfo: "Developer",
      animated: ["", "", ""],
      charIndex: 0,
      charIndex2: 0,
      charIndex3: 0,
      countLine: 1,
    };
  },
  async mounted() {
    await this.typeTextWelcome();
    await this.typeTextName();
    await this.typeTextJob();
  },
  methods: {
    async typeTextWelcome() {
      await this.typeText(this.textWelcome, this.charIndex, 0);
    },

    async typeTextName() {
      await this.typeText(this.textNameInfo, this.charIndex2, 1);
    },

    async typeTextJob() {
      await this.typeText(this.textJobInfo, this.charIndex3, 2);
    },

    async typeText(text, charIndex, indexLine) {
      return new Promise((resolve) => {
        const typeNextChar = () => {
          if (charIndex < text.length) {
            this.animated[indexLine] += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeNextChar, 20);
          } else {
            resolve();
          }
        };

        typeNextChar();
      });
    },
  },
};
</script>

<style>
.welcome-container {
  width: fit-content;
  height: fit-content;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
