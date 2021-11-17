<template>
  <div class="loginPage">
    <div>
      <form @submit.prevent="loginForm" method="post">
        <div class="imgcontainer">
          <img
            src="https://via.placeholder.com/60"
            alt="Avatar"
            class="avatar"
          />
        </div>

        <div class="container">
          <label for="psw"><b>Mobile</b></label>
          <input
            type="tel"
            placeholder="Enter Your Mobile Number"
            v-model="form.phone"
            name="phone"
            required
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="container" style="background-color: #f1f1f1">
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      form:{
        phone: "", 
      }
    };
  },
  methods: {
 
    loginForm() {
    
      axios
        .post(
          "http://10.15.15.4/request-otp/", this.form ,{ headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-type': 'application/json',
    }}
        )
        .then((res) => {
          console.log(res);
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
  min-height: 100vh;
}
form {
  border: 3px solid #f1f1f1;
  max-width: 500px;
}

input[type="tel"] {
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