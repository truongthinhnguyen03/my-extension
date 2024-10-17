<script lang="ts">
  import { Button } from 'flowbite-svelte';

  function openNewTab() {
    chrome.tabs.create({ url: 'index.html' });
  }
</script>

<svelte:head>
    <link rel="stylesheet" href="popup.css" />
</svelte:head>

<div class="flex flex-col gap-4 items-center justify-center h-screen">
    <h1 class="text-2xl font-bold">Hi, I'm Theo</h1>
    <Button on:click={openNewTab}>Open New Tab</Button>
</div>
