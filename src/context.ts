import {writable} from "svelte/store";

function getInitialCoins() {
  const savedCoins = localStorage.getItem('coins');
  return savedCoins ? parseInt(savedCoins, 10) : 0;
}

export const coins = writable(getInitialCoins());

coins.subscribe((value) => {
  localStorage.setItem('coins', value);
});