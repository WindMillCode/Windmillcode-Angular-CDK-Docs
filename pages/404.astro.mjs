import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_4SKcXMmt.mjs';
import { $ as $$Common } from '../chunks/common_DGfw2KD8.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.35.2_a_c278e160847519d67e0b673aa943c891/node_modules/@astrojs/starlight/routes/static/404.astro", void 0);

const $$file = "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.35.2_a_c278e160847519d67e0b673aa943c891/node_modules/@astrojs/starlight/routes/static/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
