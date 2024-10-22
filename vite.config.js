import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Replace with your repo name
  server: {
    host: true, // Allow access from the local network
    port: 5173, // You can change this to any port you prefer
  },
})
