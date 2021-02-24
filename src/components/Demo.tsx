import { ref, defineComponent } from 'vue'

const Demo = defineComponent({
  name: 'Demo',
  setup() {
    const a = ref(0)

    return () => (
      <div>
        <button onClick={() => a.value += 1}>{a.value}</button>
      </div>
    )
  }
})

export default Demo
