import { swc } from 'rollup-plugin-swc3'

export default {
  input: 'index.ts',
  output: {
    file: 'bundle.js'
  },
  plugins: [
    swc({})
  ],
}
