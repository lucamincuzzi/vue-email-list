const { createApp } = Vue;

createApp({
  data() {
    return {
      emailsList: [],
    };
  },
  methods: {
    generateEmails() {
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            let rndEmail = resp.data.response;
            if (!this.emailsList.includes(rndEmail)) {
              this.emailsList.push(rndEmail);
            }
          });
      }
    },
  },
  created() {
    console.log("App renderizzata");
    this.generateEmails();
  },
}).mount("#app");
