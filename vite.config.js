// vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  base: '',
  plugins: [
    basicSsl(),
  ],
}
