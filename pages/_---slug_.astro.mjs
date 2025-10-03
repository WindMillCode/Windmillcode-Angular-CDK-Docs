import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DEq4NUVT.mjs';
import { q as paths } from '../chunks/middleware_DidD9u6r.mjs';
import { $ as $$Common } from '../chunks/common_Du4u4d9w.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.36.0_a_12f8794ac7451b1054efebcb51e2ca14/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.36.0_a_12f8794ac7451b1054efebcb51e2ca14/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
