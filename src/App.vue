<script lang="tsx">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <img alt='Vue logo' src={require('./assets/logo.png')} />
        <HelloWorld msg='Welcome to Your Vue.js + TypeScript App' />
      </div>
    )
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
