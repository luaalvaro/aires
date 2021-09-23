<template>
  <div class="c-rightpanel">
    <header class="c-rightpanel-header">
      <div class="c-rightpanel-header__logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <h1 class="c-rightpanel-header__title">Crie sua conta</h1>
      <p class="c-rightpanel-header__subtitle">Crie a sua conta Aires.</p>
    </header>

    <form class="c-rightpanel-form">
      <label class="c-rightpanel-form__label">Email</label>
      <input
        type="text"
        placeholder="Email"
        class="c-rightpanel-form__input"
        id="email"
        v-model="email"
      />

      <label class="c-rightpanel-form__label">Senha</label>
      <input
        type="password"
        placeholder="Senha"
        class="c-rightpanel-form__input"
        v-model="pass"
      />

      <label class="c-rightpanel-form__label">Confirme sua senha</label>
      <input
        type="password"
        placeholder="Repita sua senha"
        class="c-rightpanel-form__input"
        v-model="pass2"
      />

      <button class="c-rightpanel-form__button" @click="handleSubmit">
        Criar conta
      </button>
    </form>

    <p class="c-rightpanel__bottomaction">
      Já possui uma conta?
      <nuxt-link to="/">Clique para acessar</nuxt-link>
    </p>

    <p class="c-rightpanel__bottomaction c-rightpanel__bottomaction--pt">
      <nuxt-link to="/">Esqueceu sua senha?</nuxt-link>
    </p>
  </div>
</template>

<script>
import { checkInputs } from "../../utils/ValidationInputs";
export default {
  data() {
    return {
      email: "",
      pass: "",
      pass2: "",
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      let error = checkInputs(this.email, this.pass, this.pass2);

      if (error) {
        return alert(error);
      }

      //Verificando users do local storage

      if (!localStorage.getItem("data")) {
        localStorage.setItem("data", JSON.stringify({ users: [] }));
      }

      const data = JSON.parse(localStorage.getItem("data"));

      const id = Date.now();

      data.users.push({
        id: id,
        email: this.email,
        pass: this.pass,
      });

      localStorage.setItem("data", JSON.stringify(data));

      sessionStorage.setItem("token", id);

      window.location.replace("/");
    },
  },
};
</script>