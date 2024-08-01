import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site:"https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs",
  base:"/docs",
  outDir: 'docs',
  integrations: [
  starlight({
    title: 'Windmillcode Angular CDK',
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
    ],
    social: {
      github: 'https://github.com/WindMillCode/Windmillcode-Angular-CDK'
    },
    sidebar: [
      // {
      //   label: 'Guides',
      //   items: [
      //   // Each item here is one entry in the navigation menu.
      //   {
      //     label: 'Example Guide',
      //     slug: 'guides/example'
      //   }]
      // },
       {
        label: 'Reference',
        autogenerate: {
          directory: 'library'
        }
      }
    ]
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })
  ]
});
