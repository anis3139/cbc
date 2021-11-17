<template>
  <div class="loginPage">
    <div>
      <form @submit.prevent="registrationForm" method="post">
        <div class="imgcontainer">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            class="avatar"
          />
        </div>
        <div class="container">
          <label for="uname"><b>Name</b></label>
          <input
            type="text"
            placeholder="Enter Your name"
            v-model="form.full_name"
            required
          />
          <label for="uname"><b>Eamil</b></label>
          <input
            type="email"
            placeholder="Enter Your Email"
            v-model="form.email"
            required
          />

          <label for="psw"><b>Phone</b></label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            v-model="form.phone"
            required
          />

          <button type="submit">Registration</button>
        </div>

        <div class="container" style="background-color: #f1f1f1">
          <span class="psw"
            >Have a account?
            <router-link :to="{ name: 'Login' }">Login</router-link></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script> 
import axios from "axios";
export default {
  name: "registration",
  data() {
    return {
      form: {
        email: "",
        full_name: "",
        phone: "",
      },
    };
  },
  methods: {
      registrationForm() { 
        axios.post("http://10.15.15.4/user/", this.form)
        .then((res) => {
          console.log(res);
          this.Toast.info(res);
          this.$router.push("/dashboard");
        })
        .catch((error) => { 
          console.log(error.message);
        });
    },
  },
};
</script>

 


<style>
.loginPage {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
}
form {
  border: 3px solid #f1f1f1;
  max-width: 500px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  margin: 15px 0 5px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>