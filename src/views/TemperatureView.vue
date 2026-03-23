<script setup>
import { ref, computed } from 'vue'
import ChampTemperature from '../components/ChampTemperature.vue'

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
  <main class="simple-container">
    <h1>TP - Convertisseur de température</h1>
    
    <div class="fields-container">
      <ChampTemperature label="Kelvin" v-model="tempKelvin" />
      <ChampTemperature label="Celsius" v-model="tempCelsius" />
      <ChampTemperature label="Fahrenheit" v-model="tempFahrenheit" />
    </div>
  </main>
</template>

<style>
.simple-container {
  max-width: 500px;
  margin: 50px auto; 
  font-family: Arial, sans-serif;
  color: #2c3e50;
}

h1 {
  color: #42b883;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.fields-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>