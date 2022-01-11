import dev from 'rollup-plugin-dev'
import defultConfig from './rollup.config'

export default {
  ...defultConfig,
  plugins: [
    ...defultConfig.plugins,
    dev({
      dirs: ['dist'],
      spa: true,
      host: '0.0.0.0',
      port: 3001,
      force: true,
    }),
  ],
   watch: {
    clearScreen: false
  }
}