<template>
  <header>

    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img src="./../assets/logo.svg" alt="Hcode Treinamentos" class="img d-inline-block align-top" id="logo">Futebol Clube
        </a>

        <div class="links mr-2">

          <router-link to="/" class="btn mr-5">Início</router-link>
          <router-link to="/news" class="btn mr-5">Notícias</router-link>

          <!-- <a href="#" @click.prevent="$emit('change-component', 'home')" class="btn mr-5">Início</a>
          <a href="#" @click.prevent="$emit('change-component', 'news')" class="btn mr-5">Notícias</a> -->
          <a href="#" class="btn mr-5">Classificações</a>

          <select name="championship" id="select-championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
            <option value="">Selecione um campeonato</option>
            <option value="Campeonato Brasileiro" selected>Campeonato Brasileiro</option>
            <option value="Campeonato Espanhol">Campeonato Espanhol</option>
            <option value="Campeonato Inglês">Campeonato Inglês</option>
            <option value="Campeonato Italiano">Campeonato Italiano</option>
          </select>

        </div>

      </nav>
    </div>

  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  header {
    background-color: #000;
  }
  #logo {
    width: 150px;
    height: 100%;
  }
  .links {
    display: inline-flex;
  }
  .link {
    color: #d48e23;
    font-size: 30px;
    font-family: 'Rajdhani';
  }
  .links a {
    color: #fff;
  }
  .links a:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  .link-active {
    background-color: #fff;
    color: #000 !important;
  }
</style>