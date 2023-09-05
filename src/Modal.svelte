<script>
	export let showModal; // boolean
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	import Button from './Button.svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => showModal = false}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<div class="modal__header-slot">
			<slot name="header"/>
			<Button label={'X'} onClick={() => dialog.close()}/>
		</div>
		<slot/>
	</div>
</dialog>

<style>

	.modal__header-slot {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	dialog {
		min-width: 90%;
		border-radius: 10px;
		padding: 0;
		border: 1px solid #d9d9d9;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.6);
	}

	dialog > div {
		padding: 1rem;
	}

	dialog[open] {
		animation: fadeup 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fadeup {
		from {
			/* transform: scale(0.85); */
			top: 300px;
		}
		to {
			top: 0;
			/* transform: scale(1); */
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>