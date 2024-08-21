/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

let darkAmber= {
  '50': '#f3d3bb',
  '100': '#e5a87a',
  '200': '#d88c4d',
  '300': '#cb7033',
  '400': '#b85b1d',
  '500': '#944713',
  '600': '#74390e',
  '700': '#562b0a',
  '800': '#3a1d06',
  '900': '#231102',
  '950': '#110800',
}

let windmillPrimary = {
  '50': '#eaffea',
  '100': '#c6f5c6',
  '200': '#a0eba0',
  '300': '#79e179',
  '400': '#55d755',
  '500': '#38cd38',
  '600': '#2cb32c',
  '700': '#239923',
  '800': '#1a7f1a',
  '900': '#106610',
  '950': '#083d08',
}
let windmillSecondary = {
  '50': '#f7f7f7',
  '100': '#ebebeb',
  '200': '#dcdcdc',
  '300': '#cdcdcd',
  '400': '#bfbfbf',
  '500': '#a1a1a1',
  '600': '#808080',
  '700': '#666666',
  '800': '#4d4d4d',
  '900': '#333333',
  '950': '#1a1a1a',
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent : windmillPrimary
      }
    }
  },
  plugins: [starlightPlugin()],
}
