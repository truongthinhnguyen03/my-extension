import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: 'src/app.html',
  //       newtab: 'src/newtab.html'
  //     }
  //   }
  // }
});