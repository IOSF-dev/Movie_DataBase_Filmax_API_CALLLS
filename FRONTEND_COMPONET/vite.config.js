import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['7bt3az-ip-79-112-109-64.tunnelmole.net'], //// url para compartir el localhost:5173 -> en un segundo  terminal con el npm run dev levantado escrir " npx tunnelmole 5173 " te devolvera la consola algo similar a : https://7bt3az-ip-79-112-109-64.tunnelmole.net => quitale el https// y cambiarlo uno por otro
  },
})
