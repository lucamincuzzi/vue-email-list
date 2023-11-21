const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsList: [this.generateEmails()],
        }
    },
    methods: {
     generateEmails() {
        for(i = 0; i < 9; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                let rndEmail = resp.data.response;
                if(!this.getEmailsArray.includes(rndEmail)) {
                    this.getEmailsArray.push(rndEmail);
                };
            })
        }
     }   
    },
    created() {
        console.log("App renderizzata");
    },
    computed: {
        getEmailsArray() {
            return this.emailsList;
        }
    },
}).mount("#app");