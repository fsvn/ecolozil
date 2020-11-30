<template>
  <div>
    <TheNavbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

main {
  margin: 1em auto;
  max-width: 770px;
}
</style>
