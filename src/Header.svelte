<header>
  <h1>🎯 Focus Nook</h1>
  <nav class="header-configs">
    <slot/>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    /* justify-self: center; */
    align-self: center;
    align-items: center;
    height: 4rem;
    padding: 1rem 4rem;
    width: 500px;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    header {
      padding: .5rem 1rem;
      width: 350px;
    }
  }
</style>