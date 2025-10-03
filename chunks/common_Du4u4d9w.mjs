import { p as createAstro, c as createComponent, r as renderComponent, b as renderTemplate } from './astro/server_DEq4NUVT.mjs';
import { c as renderEntry } from './translations_iGNhBq7M.mjs';
import { t as getRoute, j as attachRouteDataAndRunMiddleware, w as useRouteData, $ as $$Page } from './middleware_DidD9u6r.mjs';

const $$Astro = createAstro();
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const route = await getRoute(Astro2);
  const renderResult = await renderEntry(route.entry);
  await attachRouteDataAndRunMiddleware(Astro2, useRouteData(Astro2, route, renderResult));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.36.0_a_12f8794ac7451b1054efebcb51e2ca14/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $ };
