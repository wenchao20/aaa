/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2024-03-11 23:02:19
 * @LastEditors: Seven
 * @LastEditTime: 2024-03-12 11:07:25
 */
import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    plugins: [vue()],
    build: {
        base: "./",
        outDir: 'docs'
    },
};