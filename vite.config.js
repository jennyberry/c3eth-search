import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  basename: '/c3eth-search/',
  plugins: [react()],
})
