<script>
  import { coins } from "./context";
</script>

<header class="my-4 flex flex-row justify-between items-center self-center w-[500px]">
  <h1>🌱 Focus
    <span class="text-success">
      Garden
    </span>
  </h1>
  <nav class="header-configs">
    <!-- <slot/> -->
     <div class="border border-btn-primary rounded-xl p-2">
       <p class="text-lg font-bold" title="{$coins} coins">🪙 {$coins}</p>
     </div>
  </nav>
</header>

<style>
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