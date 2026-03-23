<template>
  <div>
    <nav class="menu">
      <RouterLink to="/">Accueil</RouterLink> | 
      <RouterLink to="/temperature">Convertisseur</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.menu {
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.menu a {
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 15px;
  font-weight: bold;
}

.menu a.router-link-active {
  color: #42b883;
  text-decoration: underline;
}
</style>