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
      <input type="text" placeholder="Email" class="c-rightpanel-form__input" />

      <label class="c-rightpanel-form__label">Senha</label>
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

      <input type="submit" value="Acessar" class="c-rightpanel-form__button" />
    </form>
    <p class="c-rightpanel__bottomaction">
      Não possui uma conta?
      <nuxt-link to="/register">Clique para criar a sua conta</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "RightPanel",
};
</script>