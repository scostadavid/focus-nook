<header class="my-4">
  <h1>🌱 Focus
    <span class="text-success">
      Garden
    </span>
  </h1>
  <nav class="header-configs">
    <slot/>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    height: 4rem;
    width: 500px;
  }

  h1 {
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    header {
      padding: .5rem 1rem;
      width: 350px;
    }
  }
</style>