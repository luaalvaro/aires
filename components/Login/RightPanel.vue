<template>
  <div class="c-rightpanel">
    <header class="c-rightpanel-header">
      <div class="c-rightpanel-header__logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <h1 class="c-rightpanel-header__title">Acesso via e-mail</h1>
      <p class="c-rightpanel-header__subtitle">
        Acesse sua conta Aires por algum método abaixo
      </p>
    </header>

    <form class="c-rightpanel-form">
      <label class="c-rightpanel-form__label">Email</label>
      <input
        type="text"
        placeholder="Email"
        class="c-rightpanel-form__input"
        v-model="email"
      />

      <label class="c-rightpanel-form__label">Senha</label>
      <input
        type="password"
        placeholder="Senha"
        class="c-rightpanel-form__input"
        v-model="pass"
      />

      <div class="c-rightpanel-form-actions">
        <div class="c-rightpanel-form-actions-keepconn">
          <input type="checkbox" />
          <label class="c-rightpanel-form-actions-keepconn__label"
            >Continuar conectado
          </label>
        </div>
        <a href="#">Esqueceu sua senha?</a>
      </div>

      <button class="c-rightpanel-form__button" @click="handleLogin">
        Acessar
      </button>
    </form>
    <p class="c-rightpanel__bottomaction">
      Não possui uma conta?
      <nuxt-link to="/register">Clique para criar a sua conta</nuxt-link>
    </p>
  </div>
</template>

<script>
import { checkInputs } from "../../utils/ValidationInputs";

export default {
  name: "RightPanel",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    handleLogin(event) {
      event.preventDefault();

      let error = checkInputs(this.email, this.pass);

      if (error) {
        return alert(error);
      }

      if (!localStorage.getItem("data")) {
        localStorage.setItem("data", JSON.stringify({ users: [] }));
      }

      const data = JSON.parse(localStorage.getItem("data"));

      const user = data.users.filter((user) => user.email === this.email);

      if (user.length === 0) return alert("Nenhum usuário encontrado!");

      if (user[0].pass !== this.pass) return alert("Senha incorreta");

      const id = user[0].id;

      sessionStorage.setItem("token", id);
      window.location.replace("/");
    },
  },
};
</script>