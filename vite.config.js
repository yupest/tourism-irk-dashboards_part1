import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tourism-irk-dashboards_part1/',
  plugins: [react()],
  assetsInclude: ['**/*.csv'],
})
