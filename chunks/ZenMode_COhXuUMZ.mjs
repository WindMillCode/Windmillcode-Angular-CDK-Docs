import { u as unionType, d as booleanType, s as stringType, e as objectType, n as numberType, f as enumType, g as recordType, h as neverType, i as undefinedType, j as nullType, l as lazyType, k as dateType, m as custom, p as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, q as renderSlot, t as Fragment, v as unescapeHTML, w as maybeRenderHead, x as addAttribute } from './astro/server_4SKcXMmt.mjs';
import { s as stripLeadingAndTrailingSlashes, g as getCollectionPathFromRoot, p as project, b as starlightConfig, c as renderEntry } from './translations_DK79VMyH.mjs';
import { I as Icons, a as I18nBadgeConfigSchema, H as HeadConfigSchema, B as BadgeConfigSchema, u as urlToSlug, s as slugToLocaleData, g as getSidebarFromConfig, b as getSidebar, c as getSiteTitle, d as getToC, e as getSiteTitleHref, f as getPrevNextLinks, h as getHead, p as parseAsyncWithFriendlyErrors, i as parseWithFriendlyErrors, j as attachRouteDataAndRunMiddleware, $ as $$Page, k as unified, r as rehypeParse, l as rehypeStringify, v as visit, m as insertModePathname, n as generateStaticPaths, A as AdditionalModes, o as getClassNameZenMode } from './middleware_Cjt3lkT0.mjs';
import '../renderers.mjs';

const PrevNextLinkConfigSchema = () => unionType([
  booleanType(),
  stringType(),
  objectType({
    /** The navigation link URL. */
    link: stringType().optional(),
    /** The navigation link text. */
    label: stringType().optional()
  }).strict()
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsSchema = () => unionType([
  objectType({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: numberType().int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: numberType().int().min(1).max(6).optional().default(3)
  }),
  booleanType().transform((enabled) => enabled ? defaults : false)
]).default(defaults).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  message: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});

const iconNames = Object.keys(Icons);
const IconSchema = () => enumType(iconNames);

const HeroSchema = ({ image }) => objectType({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: stringType().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: stringType().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: unionType([
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    objectType({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: stringType()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: objectType({
    /** Text label displayed in the link. */
    text: stringType(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: stringType(),
    /** Button style to use. One of `primary` (the default), `secondary`, or `minimal`. */
    variant: enumType(["primary", "secondary", "minimal"]).default("primary"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: unionType([IconSchema(), stringType().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = IconSchema().safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: recordType(unionType([stringType(), numberType(), booleanType()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = objectType({
  /** The visible label for this item in the sidebar. */
  label: stringType(),
  /** Translations of the `label` for each supported language. */
  translations: recordType(stringType()).default({}),
  /** Adds a badge to the item */
  badge: I18nBadgeConfigSchema()
});
const SidebarGroupSchema = SidebarBaseSchema.extend({
  /**
   * Explicitly prevent custom attributes on groups as the final type for supported sidebar item
   * is a non-discriminated union where TypeScript will not perform excess property checks.
   * This means that a user could define a sidebar group with custom attributes, not getting a
   * TypeScript error, and only have it fail at runtime.
   * @see https://github.com/microsoft/TypeScript/issues/20863
   */
  attrs: neverType().optional(),
  /** Whether this item should be collapsed by default. */
  collapsed: booleanType().default(false)
});
const linkHTMLAttributesSchema = recordType(
  unionType([stringType(), numberType(), booleanType(), undefinedType(), nullType()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = SidebarBaseSchema.extend({
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).strict();
const AutoSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: objectType({
    /** The directory to generate sidebar items for. */
    directory: stringType().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: booleanType().optional(),
    /** HTML attributes to add to the autogenerated link items. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
}).strict();
const ManualSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Array of links and subcategories to display in this category. */
  items: lazyType(
    () => unionType([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
}).strict();
const InternalSidebarLinkItemSchema = SidebarBaseSchema.partial({ label: true }).extend({
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = stringType().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
const SidebarItemSchema = unionType([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => objectType({
  /** The title of the current page. Required. */
  title: stringType(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: stringType().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: unionType([stringType().url(), booleanType()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema(),
  /** Override global table of contents configuration for this page. */
  tableOfContents: TableOfContentsSchema().optional(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: enumType(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: unionType([dateType(), booleanType()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: objectType({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: numberType().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: stringType().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: booleanType().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).default({}),
  /** Display an announcement banner at the top of this page. */
  banner: objectType({
    /** The content of the banner. Supports HTML syntax. */
    content: stringType()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: booleanType().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: booleanType().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === void 0 || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const validateSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    SidebarItemSchema.array().optional(),
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  context
}) {
  const { frontmatter, ...routeProps } = props;
  const { url } = context;
  const slug = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const id = slug;
  const localeData = slugToLocaleData(slug);
  const sidebar = props.sidebar ? getSidebarFromConfig(validateSidebarProp(props.sidebar), url.pathname, localeData.locale) : getSidebar(url.pathname, localeData.locale);
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    slug,
    body: "",
    collection: "docs",
    filePath: `${getCollectionPathFromRoot("docs", project)}/${stripLeadingAndTrailingSlashes(slug)}.md`,
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : void 0;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : void 0;
  const pageProps = {
    ...routeProps,
    ...localeData,
    entry,
    headings,
    locale: localeData.locale};
  const siteTitle = getSiteTitle(localeData.lang);
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    head: getHead(pageProps, context, siteTitle),
    headings,
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    sidebar,
    siteTitle,
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
    toc: getToC(pageProps)
  };
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: () => (
      // Mock validator for ImageMetadata.
      // https://github.com/withastro/astro/blob/cf993bc263b58502096f00d383266cd179f331af/packages/astro/src/assets/types.ts#L32
      // It uses a custom validation approach because imported SVGs have a type of `function` as
      // well as containing the metadata properties and this ensures we handle those correctly.
      custom(
        (value) => value && (typeof value === "function" || typeof value === "object") && "src" in value && "width" in value && "height" in value && "format" in value,
        "Invalid image passed to `<StarlightPage>` component. Expected imported `ImageMetadata` object."
      )
    )
  });
  return parseAsyncWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_CrSkcHuK.mjs')).collections;
  return userCollections?.docs?.schema ?? docsSchema();
}

const $$Astro$3 = createAstro("https://windmillcode.github.io");
const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StarlightPage;
  await attachRouteDataAndRunMiddleware(
    Astro2,
    await generateStarlightPageRouteData({ props: Astro2.props, context: Astro2 })
  );
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/@astrojs+starlight@0.35.2_a_c278e160847519d67e0b673aa943c891/node_modules/@astrojs/starlight/components/StarlightPage.astro", void 0);

// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/;

function isAbsoluteUrl(url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	if (WINDOWS_PATH_REGEX.test(url)) {
		return false;
	}

	return ABSOLUTE_URL_REGEX.test(url);
}

function rehypePrefixInternalLinks() {
  return function(tree) {
    visit(tree, "element", function(node) {
      if (node.tagName === "a" && node.properties && typeof node.properties.href === "string") {
        if ("view-modes-ignore" in node.properties) {
          return;
        }
        const href = node.properties.href;
        if (!isAbsoluteUrl(href) && !href.startsWith("#")) {
          node.properties.href = insertModePathname(href, "zen-mode");
        }
      }
    });
  };
}
const processedHtml = async (contentHtml, ...rehypeFunctions) => {
  let processor = unified().use(rehypeParse, { fragment: true });
  for (const rehypeFunction of rehypeFunctions) {
    processor = processor.use(rehypeFunction);
  }
  const finalProcessor = processor.use(rehypeStringify);
  const processedHtml2 = await finalProcessor.process(contentHtml);
  return processedHtml2.toString();
};

const $$Astro$2 = createAstro("https://windmillcode.github.io");
const $$RenderHtmlWithRehype = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RenderHtmlWithRehype;
  const html = await Astro2.slots.render("default");
  const contentHtml = await processedHtml(html, rehypePrefixInternalLinks);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(contentHtml)}` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/starlight-view-modes@0.10.2_5679dc197a05dfdff3edc30a16c01bd3/node_modules/starlight-view-modes/components/RenderHtmlWithRehype.astro", void 0);

const $$Astro$1 = createAstro("https://windmillcode.github.io");
const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Renderer;
  const { Content } = await renderEntry(Astro2.props.entry);
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/starlight-view-modes@0.10.2_5679dc197a05dfdff3edc30a16c01bd3/node_modules/starlight-view-modes/components/Renderer.astro", void 0);

const $$Astro = createAstro("https://windmillcode.github.io");
const getStaticPaths = async () => {
  return await generateStaticPaths(
    AdditionalModes.find((mode) => mode.name === "zen-mode")
  );
};
const prerender = true;
const $$ZenMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ZenMode;
  const { entry, isFallback } = Astro2.props;
  const { headings, remarkPluginFrontmatter } = await renderEntry(entry);
  const { hasSidebar } = remarkPluginFrontmatter;
  if (remarkPluginFrontmatter.hero?.actions) {
    for (const action of remarkPluginFrontmatter.hero.actions) {
      if (!isAbsoluteUrl(action.link)) {
        action.link = insertModePathname(action.link, "zen-mode");
      }
    }
  }
  const zenModeFileName = getClassNameZenMode();
  let classes = [
    zenModeFileName,
    "starlight-view-modes-zen-mode-no-header",
    "starlight-view-modes-zen-mode-no-sidebar",
    false,
    false
  ].filter(Boolean);
  let darkImage;
  let lightImage;
  let rawImageHtml;
  const image = entry.data.hero?.image;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawImageHtml = image.html;
    }
  }
  return renderTemplate`${!darkImage && !lightImage && !rawImageHtml && renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    ...remarkPluginFrontmatter,
    pagefind: false
  }, "headings": headings, "hasSidebar": hasSidebar, ...isFallback ? { isFallback: true } : {} }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}>${renderComponent($$result2, "RenderHtmlWithRehype", $$RenderHtmlWithRehype, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Renderer", $$Renderer, { "entry": entry })}` })}</div>` })}`}${darkImage && lightImage && renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    ...remarkPluginFrontmatter,
    hero: {
      ...remarkPluginFrontmatter.hero,
      image: {
        dark: darkImage,
        light: lightImage
      }
    },
    pagefind: false
  }, "headings": headings, "hasSidebar": hasSidebar, ...isFallback ? { isFallback: true } : {} }, { "default": async ($$result2) => renderTemplate`<div${addAttribute(classes, "class:list")}>${renderComponent($$result2, "RenderHtmlWithRehype", $$RenderHtmlWithRehype, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Renderer", $$Renderer, { "entry": entry })}` })}</div>` })}`}${darkImage && !lightImage && renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    ...remarkPluginFrontmatter,
    hero: {
      ...remarkPluginFrontmatter.hero,
      image: {
        file: darkImage
      }
    },
    pagefind: false
  }, "headings": headings, "hasSidebar": hasSidebar, ...isFallback ? { isFallback: true } : {} }, { "default": async ($$result2) => renderTemplate`<div${addAttribute(classes, "class:list")}>${renderComponent($$result2, "RenderHtmlWithRehype", $$RenderHtmlWithRehype, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Renderer", $$Renderer, { "entry": entry })}` })}</div>` })}`}${rawImageHtml && renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    ...remarkPluginFrontmatter,
    hero: {
      ...remarkPluginFrontmatter.hero,
      image: {
        html: rawImageHtml
      }
    },
    pagefind: false
  }, "headings": headings, "hasSidebar": hasSidebar, ...isFallback ? { isFallback: true } : {} }, { "default": async ($$result2) => renderTemplate`<div${addAttribute(classes, "class:list")}>${renderComponent($$result2, "RenderHtmlWithRehype", $$RenderHtmlWithRehype, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Renderer", $$Renderer, { "entry": entry })}` })}</div>` })}`}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/starlight-view-modes@0.10.2_5679dc197a05dfdff3edc30a16c01bd3/node_modules/starlight-view-modes/routes/ZenMode.astro", void 0);

const $$file = "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/starlight-view-modes@0.10.2_5679dc197a05dfdff3edc30a16c01bd3/node_modules/starlight-view-modes/routes/ZenMode.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ZenMode,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { docsSchema as d, page as p };
