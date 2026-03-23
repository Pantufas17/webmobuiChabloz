<script setup>
import { ref, computed} from 'vue'

const temperatureKelvin = ref(17)


const tempKelvin = computed({
  get: () => temperatureKelvin.value,
  set: (val) => { temperatureKelvin.value = Number(val) }
})

const tempCelsius = computed({
  get: () => temperatureKelvin.value - 273.15,
  set: (val) => { temperatureKelvin.value = Number(val) + 273.15 }
})

const tempFahrenheit = computed({
  get: () => (temperatureKelvin.value - 273.15) * 9 / 5 + 32,
  set: (val) => { temperatureKelvin.value = (Number(val) - 32) * 5 / 9 + 273.15 }
})

</script>

<template>
  <div>
    <h1>TP - Convertisseur de température</h1>
    
    <p>Kelvin : <input type="number" v-model="tempKelvin" /></p>
    <p>Celsius : <input type="number" v-model="tempCelsius" /></p>
    <p>Fahrenheit : <input type="number" v-model="tempFahrenheit" /></p>
  </div>
</template>