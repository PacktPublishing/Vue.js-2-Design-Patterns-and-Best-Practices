<template>
  <div>
    <form class="form" @submit.prevent="onSubmit">
<div class="input">
  <label for="email">Email</label>
  <input 
  :class="{ error: $v.email.$error }"
  type="email" 
  id="email" 
  @input="$v.email.$touch()"
  v-model.trim="email">

  <div v-if="$v.email.$dirty">
    <p class="error-message"  v-if="!$v.email.email">Please enter a valid email address.</p>
    <p class="error-message" v-if="!$v.email.required">Email must not be empty.</p>
  </div>

</div>
<div class="input"> 
  <label for="firstName">First Name</label>
  <input 
  :class="{ error: $v.firstName.$error }"
  type="text"
  id="firstName" 
  v-model.trim="firstName"
  @input="$v.firstName.$touch()">
  
  <div v-if="$v.firstName.$dirty">
    <p class="error-message" v-if="!$v.firstName.required">First Name must not be empty.</p>
  </div>
</div>
<div class="input">
  <label for="lastName">Last Name</label>
  <input 
  :class="{ error: $v.lastName.$error}"
  type="text" 
  id="lastName" 
  v-model.trim="lastName"
  @input="$v.lastName.$touch()">

  <div v-if="$v.lastName.$dirty">
    <p class="error-message" v-if="!$v.lastName.required">Last Name must not be empty.</p>
  </div>
</div>
<div class="input">
  <label for="password">Password</label>
  <input 
  :class="{ error: $v.password.$error }"
  type="password" 
  id="password" 
  v-model.trim="password"
  @input="$v.password.$touch()">

  <div v-if="$v.password.$dirty">
    <p class="error-message" v-if="!$v.password.required">Password must not be empty.</p>
    <p class="error-message" v-if="!$v.password.minLength">Password needs to be at least 6 characters.</p>
  </div>
</div>
<div class="input">
  <label for="repeatPassword">Repeat Password</label>
  <input 
  :class="{ error: $v.repeatPassword.$error }"
  type="password" 
  id="repeatPassword" 
  v-model.trim="repeatPassword"
  @input="$v.repeatPassword.$touch()">

  <div v-if="$v.repeatPassword.$dirty">
    <p class="error-message" v-if="!$v.repeatPassword.minLength">Password needs to be at least 6 characters.</p>
    <p class="error-message"  v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
    

    <p class="error-message" v-if="!$v.repeatPassword.required">Password must not be empty.</p>
  </div>
</div>
      <button :disabled="$v.$invalid" type="submit">Submit</button>
    </form>
    <div class="validators">
      <pre>{{$v}}</pre>
    </div>
  </div>

</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style>
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}
.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}
.input {
  padding: 5px;
}
input:focus {
  outline: none;
}
.error {
  border: 1px solid red;
}
.error-message {
  color: red;
}
</style>
