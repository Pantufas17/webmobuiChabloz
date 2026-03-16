<script setup>
import { ref } from 'vue'


const temperatureKelvin = ref(17)


console.log("Ma température en Kelvin est de :", temperatureKelvin.value)
</script>

<template>
  <div>
    <h1>Exercice : Convertisseur de température</h1>
  </div>
</template>