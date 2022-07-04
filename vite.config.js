import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unimport from 'unimport/unplugin';

export default defineConfig({
    plugins: [vue(), Unimport.vite({
        presets: ['vue']
    })]
});