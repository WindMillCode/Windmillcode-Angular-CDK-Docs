import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
// import starlightViewModes from "starlight-view-modes";

// https://astro.build/config
export default defineConfig({
  site:"https://windmillcode.github.io",
  base:"Windmillcode-Angular-CDK-Docs",
  outDir: 'docs',
  integrations: [
  starlight({
    title: 'Windmillcode Angular CDK',
    favicon: '/favicon.ico',
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
      //   {
      //     label: 'Example Guide',
      //     slug: 'guides/example'
      //   }]
      // },
      {
        label:"Intro",
        autogenerate: {
          directory: 'intro'
        }
      },
      {
        label:"Schematics",
        autogenerate: {
          directory: 'schematics'
        }
      },
       {
        label: 'Components',
        autogenerate: {
          directory: 'components'
        }
      }
    ],
    plugins:[
      // starlightViewModes({
      // })
    ]
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })
  ]
});
