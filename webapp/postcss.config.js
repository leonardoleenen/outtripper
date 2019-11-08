
import tailwindcss from 'tailwindcss'
import PostCssEasyImport from 'postcss-easy-import'
import AutoPrefixer from 'autoprefixer'

export default {
  plugins: [
    PostCssEasyImport,
    tailwindcss('./tailwind.config.js'),
    AutoPrefixer,
  ],
}

