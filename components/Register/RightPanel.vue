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
      />

      <label class="c-rightpanel-form__label">Senha</label>
      <input
        type="password"
        placeholder="Senha"
        class="c-rightpanel-form__input"
      />

      <label class="c-rightpanel-form__label">Confirme sua senha</label>
      <input
        type="password"
        placeholder="Senha"
        class="c-rightpanel-form__input"
      />

      <div class="c-rightpanel-form-actions">
        <div class="c-rightpanel-form-actions-keepconn">
          <input type="checkbox" checked />
          <label class="c-rightpanel-form-actions-keepconn__label"
            >Continuar conectado
          </label>
        </div>
        <a href="#">Esqueceu sua senha?</a>
      </div>

      <input
        value="Criar conta"
        type="submit"
        class="c-rightpanel-form__button"
      />
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
export default {
  props: {
    email: "",
    pass: "",
    pass2: "",
  },
};
</script>