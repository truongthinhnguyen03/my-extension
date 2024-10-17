<script lang="ts">
  import { Button } from 'flowbite-svelte';

  function openNewTab() {
    chrome.tabs.create({ url: 'index.html' });
  }
</script>

<svelte:head>
    <link rel="stylesheet" href="popup.css" />
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold">Welcome to SvelteKit</h1>
    <Button on:click={openNewTab}>Open New Tab</Button>
</div>
