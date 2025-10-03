import { c as createComponent, D as renderScript, b as renderTemplate, p as createAstro, r as renderComponent, w as maybeRenderHead, x as addAttribute, q as renderSlot, v as unescapeHTML, t as Fragment, C as spreadAttributes } from './astro/server_DEq4NUVT.mjs';

function getTarget(target) {
  return "contentSetId" in target ? {
    contentSetId: target.contentSetId,
    key: target.key
  } : {
    contentId: target.contentId
  };
}

const $$FeelbackLoader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/FeelbackLoader.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/FeelbackLoader.astro", void 0);

const $$Astro$b = createAstro();
const $$Component = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Component;
  const { class: className, ...props } = Astro2.props;
  const config = {
    ...props,
    ...getTarget(props)
  };
  return renderTemplate`${renderComponent($$result, "FeelbackLoader", $$FeelbackLoader, {})} ${maybeRenderHead()}<div${addAttribute(`feelback-container${className ? " " + className : ""}`, "class")}${addAttribute(JSON.stringify(config), "data-feelback")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/Component.astro", void 0);

const $$Astro$a = createAstro();
const $$SwitchResult = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SwitchResult;
  const { textAnswer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-behavior-switch-side="a"> ${renderSlot($$result, $$slots["default"])} </div> <div class="feelback-a hidden" data-behavior-switch-side="b"> ${renderSlot($$result, $$slots["side-b"], renderTemplate` ${textAnswer && renderTemplate`<span class="feelback-text">${textAnswer}</span>`} `)} </div>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/SwitchResult.astro", void 0);

const $$Astro$9 = createAstro();
const $$TriggerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TriggerButton;
  const { class: className, label, title, action, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`feelback-btn btn-action trigger-btn${className ? " " + className : ""}`, "class")}${addAttribute(action, "data-behavior-action")}${addAttribute(target, "data-behavior-target")}${addAttribute(title, "title")}>${label}</button>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/TriggerButton.astro", void 0);

const $$Astro$8 = createAstro();
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Form;
  const {
    singleValue,
    class: className,
    title,
    alignButton = "right",
    revealButtons
    /** */
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(`feelback-form ${className || ""}`, "class")}${addAttribute(singleValue ? "form-single" : void 0, "data-feelback-type")}> <div class="content"> ${title && renderTemplate`<span class="feelback-text form-title">${title}</span>`} ${renderSlot($$result, $$slots["default"])} ${Astro2.slots.has("before-form-buttons") && renderTemplate`<div${addAttribute(revealButtons ? "hidden form-reveal" : void 0, "class")}> ${renderSlot($$result, $$slots["before-form-buttons"])} </div>`} <div${addAttribute(`form-buttons feelback-buttons${alignButton === "right" ? " align-end" : ""}${revealButtons ? " hidden form-reveal" : ""}`, "class")}> <button class="feelback-btn btn-action" title="Send message" type="submit">Send</button> ${renderSlot($$result, $$slots["btn-cancel"])} </div> </div> </form>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/Form.astro", void 0);

const $$Astro$7 = createAstro();
const $$FieldLongText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FieldLongText;
  const {
    class: className,
    name,
    placeholder = "Type your message",
    required,
    minLength,
    maxLength
    /* */
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<textarea data-feelback-field${addAttribute(name, "name")}${addAttribute(className, "class")}${addAttribute(required, "required")}${addAttribute(placeholder || void 0, "placeholder")}${addAttribute(minLength, "minlength")}${addAttribute(maxLength, "maxlength")}></textarea>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/FieldLongText.astro", void 0);

const iconHappy = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M18,10c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8S18,14.4,18,10 M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10\r\n\t M8,7.5C8,8.3,7.3,9,6.5,9S5,8.3,5,7.5S5.7,6,6.5,6S8,6.7,8,7.5 M15,7.5C15,8.3,14.3,9,13.5,9S12,8.3,12,7.5S12.7,6,13.5,6\r\n\tC14.3,6,15,6.7,15,7.5 M10,15.2c-1.8,0-3.3-0.7-4.2-1.8L7.2,12c0.4,0.7,1.5,1.2,2.8,1.2s2.3-0.5,2.8-1.2l1.4,1.4\r\n\tC13.3,14.5,11.8,15.2,10,15.2z\"/>\r\n</svg>\r\n";

const iconLove = "<svg version=\"1.1\"\r\n    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n    <path d=\"M10,15.5c2.3,0,4.3-1.5,5.1-3.5H4.9C5.7,14,7.7,15.5,10,15.5z\"/>\r\n    <path d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8\r\n\t\tS14.4,18,10,18z\"/>\r\n    <path d=\"M9,6L9,6C8.6,5.6,8,5.6,7.6,6l0,0c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l1.4,1.4\r\n\t\tc0.4,0.4,1,0.4,1.4,0L9,7.4C9.4,7,9.4,6.4,9,6z\"/>\r\n    <path d=\"M15.3,6L15.3,6c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l1.4,1.4\r\n\t\tc0.4,0.4,1,0.4,1.4,0l1.4-1.4C15.7,7,15.7,6.4,15.3,6z\"/>\r\n</svg>\r\n";

const iconCry = "<svg version=\"1.1\"\r\n    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 10\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n    <path d=\"M2.8,9C2.1,9,1.6,8.5,1.6,7.8c0-0.5,0.6-1.5,1.2-2.4C3.4,6.2,4,7.2,4,7.8C4,8.5,3.5,9,2.8,9 M5,0C2.2,0,0,2.2,0,5\r\n\tc0,0.9,0.2,1.7,0.6,2.4C0.7,7,0.9,6.5,1.2,6.1C1.1,5.7,1,5.4,1,5c0-2.2,1.8-4,4-4s4,1.8,4,4S7.2,9,5,9C4.9,9,4.8,9,4.6,9\r\n\tc-0.2,0.4-0.6,0.7-1,0.8C4.1,9.9,4.5,10,5,10c2.8,0,5-2.2,5-5S7.8,0,5,0 M5,6C4.8,6,4.6,6,4.4,6.1C4.6,6.4,4.7,6.7,4.8,7H5\r\n\tc0.6,0,1.2,0.2,1.4,0.6l0.7-0.7C6.6,6.4,5.9,6,5,6 M6.8,3C6.3,3,6,3.3,6,3.8s0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8S7.1,3,6.8,3\r\n\t M4,3.8C4,3.3,3.7,3,3.2,3S2.5,3.3,2.5,3.8s0.3,0.8,0.8,0.8S4,4.2,4,3.8\"/>\r\n</svg>\r\n";

const iconNeutral = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S14.4,18,10,18\r\n\t M6.5,9C5.7,9,5,8.3,5,7.5S5.7,6,6.5,6S8,6.7,8,7.5S7.3,9,6.5,9 M15,7.5C15,8.3,14.3,9,13.5,9C12.7,9,12,8.3,12,7.5S12.7,6,13.5,6\r\n\tC14.3,6,15,6.7,15,7.5 M14,12v2H6v-2H14z\"/>\r\n</svg>\r\n";

const iconSad = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M18,10c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8S18,14.4,18,10 M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10\r\n\t M13.5,6C14.3,6,15,6.7,15,7.5S14.3,9,13.5,9S12,8.3,12,7.5S12.7,6,13.5,6 M8,7.5C8,8.3,7.3,9,6.5,9S5,8.3,5,7.5S5.7,6,6.5,6\r\n\tS8,6.7,8,7.5 M10,12c1.8,0,3.3,0.7,4.2,1.8l-1.4,1.4C12.3,14.5,11.2,14,10,14s-2.3,0.5-2.8,1.2l-1.4-1.4C6.7,12.7,8.2,12,10,12z\"/>\r\n</svg>\r\n";

const iconHeart = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M364.5,91.5c6,0,12.3,0.9,18.6,2.7c9.6,2.8,19.8,9.3,27.8,17.9c9.6,10.3,15.7,22.8,18,37.1c4.5,28-5.8,62.5-29.9,99.7\r\n\tc-16.2,25-38.5,51.2-66.4,77.8c-23.6,22.5-51.3,45.5-82.7,68.5c-31.4-23.1-59.2-46-82.7-68.5c-27.8-26.6-50.2-52.7-66.4-77.8\r\n\tc-24.1-37.2-34.4-71.7-29.8-99.7c2.3-14.3,8.4-26.8,18-37.1c8-8.6,18.2-15.1,27.9-17.9l0,0l0,0c6.4-1.8,12.5-2.7,18.6-2.7\r\n\tc36.2,0,63,33.7,65.5,36.9l47.7,71l50.2-71.2C299.3,127.8,327.2,91.5,364.5,91.5 M364.5,31.5C293.8,31.5,250,93.6,250,93.6\r\n\ts-43.7-62.1-114.4-62.1c-11.1,0-22.8,1.5-35.1,5C9.5,62.4-98.7,231.3,250,468.6C598.7,231.3,490.4,62.4,399.6,36.5\r\n\tC387.3,33,375.6,31.5,364.5,31.5L364.5,31.5z\"/>\r\n</svg>\r\n";

const iconHeartActive = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M399.6,36.5c-91-26-149.6,57.1-149.6,57.1s-58.5-83.1-149.5-57.1C9.5,62.4-98.7,231.3,250,468.6\r\n\tC598.7,231.3,490.4,62.4,399.6,36.5z\"/>\r\n</svg>\r\n";

const iconStar = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M250,122.6l28.2,73.1L288,221l27.1,1.5l78.2,4.2l-60.8,49.4l-21.1,17.1l7,26.3l20.1,75.7l-65.8-42.5L250,337.9l-22.8,14.7\r\n\tl-65.8,42.5l20.1-75.7l7-26.3l-21.1-17.1l-60.8-49.4l78.2-4.2L212,221l9.8-25.4L250,122.6 M250,21.3c-3.6,0-6.8,2.2-8.1,5.5\r\n\tl-59.3,153.6l-164.4,8.9c-3.6,0.2-6.7,2.6-7.8,6c-1.1,3.4,0,7.1,2.8,9.4L141,308.7L98.7,467.8c-0.9,3.5,0.4,7.1,3.3,9.2\r\n\tc1.5,1.1,3.3,1.7,5.1,1.7c1.6,0,3.3-0.5,4.7-1.4L250,387.9l138.3,89.4c1.4,0.9,3.1,1.4,4.7,1.4c1.8,0,3.6-0.6,5.1-1.7\r\n\tc2.9-2.1,4.2-5.8,3.3-9.2L359,308.7l127.8-103.8h0c2.8-2.3,3.9-6,2.8-9.4c-1.1-3.4-4.2-5.8-7.8-6l-164.4-8.9L258.1,26.9\r\n\tC256.8,23.5,253.6,21.3,250,21.3L250,21.3z\"/>\r\n</svg>\r\n";

const iconStarActive = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M486.8,204.8L359,308.7l42.3,159.1c0.9,3.5-0.4,7.1-3.3,9.2c-2.9,2.1-6.8,2.2-9.8,0.3L250,387.9l-138.3,89.4\r\n\tc-3,1.9-6.9,1.8-9.8-0.3c-2.9-2.1-4.2-5.8-3.3-9.2L141,308.7L13.2,204.8c-2.8-2.3-3.9-6-2.8-9.4c1.1-3.4,4.2-5.8,7.8-6l164.4-8.9\r\n\tl59.3-153.6c1.3-3.3,4.5-5.5,8.1-5.5c3.6,0,6.8,2.2,8.1,5.5l59.3,153.6l164.4,8.9c3.6,0.2,6.7,2.6,7.8,6\r\n\tC490.7,198.8,489.6,202.5,486.8,204.8L486.8,204.8z\"/>\r\n</svg>\r\n";

const iconLike = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<g>\r\n\t\t<path d=\"M172.7,309.1c0-7.4-3-14.6-8.3-19.9s-12.4-8.3-19.9-8.3H74.4c-10.1,0-19.3,5.4-24.4,14.1c-5.1,8.7-5,19.5,0,28.1\r\n\t\ts14.3,14.1,24.4,14.1h70.2c7.4,0,14.6-3,19.9-8.3S172.7,316.5,172.7,309.1L172.7,309.1z\"/>\r\n\t\t<path d=\"M102.5,449.5h70.2c10.1,0,19.3-5.4,24.4-14.1c5-8.6,5-19.5,0-28.1s-14.3-14.1-24.4-14.1h-70.2c-10.1,0-19.3,5.4-24.4,14.1\r\n\t\tc-5,8.6-5,19.5,0,28.1C83.2,444.1,92.5,449.5,102.5,449.5z\"/>\r\n\t\t<path d=\"M53.2,224.9h83.3c18.8,0,36.4-9.4,46.8-24.9l95.7-143.6h5c11.6,0,22.5,5.7,29.2,15.1s8.6,21.6,5,32.5l-25.4,76.5\r\n\t\tc-1.3,3.7-0.6,7.9,1.8,11.2c2.3,3.2,6.2,5.2,10.1,5.2h65.6c14.7-0.3,28.8,6.3,37.9,17.7c5.3,6.6,8.6,14.3,9.8,22.6\r\n\t\tc1.3,8.3,0.3,16.7-2.7,24.5l-47.6,118.7c-1.5,3.9-4.3,7.2-7.6,9.5c-3.5,2.3-7.5,3.6-11.6,3.6h-61.8l0,0c-7.1-0.3-14.2,2.2-19.7,7\r\n\t\tc-5.4,4.6-8.9,11.2-9.9,18.4c-0.8,7.9,1.9,15.8,7.1,21.7c5.4,5.9,12.9,9.2,20.9,9.2h63.3c15.5,0,30.5-4.6,43.2-13.3\r\n\t\tc12.8-8.6,22.7-20.9,28.5-35.2l47.6-118.8c12.8-32.1,8.8-68.5-11-97c-19.7-28.5-52.1-45.3-86.8-44.6h-4.6l5.7-17\r\n\t\tc5.2-14.8,6.7-30.6,4.3-46.2c-3.6-21.6-14.8-41.3-31.5-55.5s-37.9-22.1-60-22h-20c-9.4,0-18.2,4.6-23.3,12.5l-104,156H54.5\r\n\t\tc-7.1-0.1-14.1,2.3-19.6,7c-5.5,4.7-8.9,11.2-9.8,18.3c-0.8,7.9,1.9,15.8,7.1,21.7C37.8,221.4,45.2,224.9,53.2,224.9L53.2,224.9z\" />\r\n\t</g>\r\n</svg>\r\n";

const iconLikeActive = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M456.7,185.2c-19.7-28.5-52.1-45.3-86.8-44.6h-4.6l5.7-17c5.2-14.8,6.7-30.6,4.3-46.2c-3.6-21.6-14.8-41.3-31.5-55.5\r\n\tc-16.7-14.2-37.9-22.1-60-22h-20c-9.4,0-18.2,4.6-23.3,12.5l-104,156H54.5c-7.1-0.1-14.1,2.3-19.6,7c-5.5,4.7-8.9,11.2-9.8,18.3\r\n\tc-0.8,7.9,1.9,15.8,7.1,21.7c5.5,5.9,12.9,9.3,20.9,9.3h9.1l14.2,56h-2.1c-10.1,0-19.3,5.4-24.4,14.1c-5.1,8.7-5,19.5,0,28.1\r\n\tc5,8.6,14.3,14.1,24.4,14.1h16.3l14.2,56.1h-2.5c-10.1,0-19.3,5.4-24.4,14.1c-5,8.6-5,19.5,0,28.1c5.1,8.7,14.4,14.1,24.4,14.1h16.7\r\n\tl165.6,0.1c0,0,0.1,0,0.1,0h63.3c15.5,0,30.5-4.6,43.2-13.3c12.8-8.6,22.7-20.9,28.5-35.2l47.6-118.8\r\n\tC480.4,250.2,476.4,213.8,456.7,185.2z\"/>\r\n</svg>\r\n";

const iconDislike = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<g>\r\n\t\t<path d=\"M327.3,190.8c0,7.3,2.9,14.6,8.3,19.8c5.3,5.3,12.4,8.3,19.8,8.3h70.2c10.1,0,19.4-5.4,24.4-14c5-8.6,5-19.5,0-28.1\r\n\t\tc-5-8.6-14.3-14-24.4-14h-70.2c-7.3,0-14.6,2.9-19.8,8.3C330.3,176.3,327.3,183.4,327.3,190.8L327.3,190.8z\"/>\r\n\t\t<path d=\"M397.5,50.4h-70.2c-10.1,0-19.4,5.4-24.4,14c-5,8.6-5,19.5,0,28.1c5,8.6,14.3,14,24.4,14h70.2c10.1,0,19.4-5.4,24.4-14\r\n\t\ts5-19.5,0-28.1S407.6,50.4,397.5,50.4z\"/>\r\n\t\t<path d=\"M446.8,275.1h-83.3c-18.8,0-36.3,9.5-46.8,25l-95.7,143.6h-5c-11.6,0-22.5-5.7-29.3-15.1c-6.8-9.4-8.6-21.6-5-32.5\r\n\t\tl25.4-76.5c1.3-3.8,0.6-7.9-1.8-11.2c-2.3-3.2-6.2-5.1-10.1-5.1h-65.5c-14.7,0.3-28.7-6.3-38.1-17.7c-5.3-6.6-8.6-14.3-9.8-22.6\r\n\t\tc-1.3-8.3-0.3-16.6,2.7-24.5l47.6-118.8c1.6-3.9,4.2-7.2,7.6-9.5c3.5-2.3,7.5-3.6,11.6-3.6h61.8l0,0c7.1,0.3,14.2-2.3,19.7-7\r\n\t\tc5.4-4.7,8.9-11.3,9.9-18.4c0.7-7.9-1.9-15.8-7.1-21.7c-5.4-6-12.9-9.2-20.9-9.2h-63.3c-15.5,0-30.5,4.7-43.2,13.3\r\n\t\tC95.7,72.4,85.8,84.7,80,99L32.4,217.8c-12.8,32.1-8.8,68.5,10.9,97.1c19.7,28.6,52.1,45.2,86.8,44.7h4.7l-5.7,17.1\r\n\t\tc-5.1,14.9-6.7,30.6-4.2,46.2c3.6,21.6,14.9,41.3,31.5,55.4s37.9,21.8,59.8,21.7h20c9.5,0,18.2-4.7,23.3-12.5l104.1-156h82.1\r\n\t\tc7.1,0.1,14-2.3,19.6-7c5.5-4.7,8.9-11.2,9.8-18.4c0.7-7.9-1.9-15.8-7.1-21.7C462.4,278.5,454.8,275.1,446.8,275.1L446.8,275.1z\"/>\r\n\t</g>\r\n</svg>\r\n";

const iconCheck = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\r\n\t<path d=\"M175.6,426.3L17.8,268.6c-9.5-9.5-9.5-24.8,0-34.3L52.1,200c9.5-9.5,24.8-9.5,34.3,0l106.3,106.3L420.3,78.6\r\n\tc9.5-9.5,24.8-9.5,34.3,0l34.3,34.3c9.5,9.5,9.5,24.8,0,34.3L209.9,426.3C200.4,435.8,185,435.8,175.6,426.3L175.6,426.3z\"/>\r\n</svg>\r\n";

const iconTimes = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M316.7,250l100.1-100.1c12.3-12.3,12.3-32.2,0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5,0L250,183.3L149.9,83.2\r\n\tc-12.3-12.3-32.2-12.3-44.5,0l-22.2,22.2c-12.3,12.3-12.3,32.2,0,44.5L183.3,250L83.2,350.1c-12.3,12.3-12.3,32.2,0,44.5l22.2,22.2\r\n\tc12.3,12.3,32.2,12.3,44.5,0L250,316.7l100.1,100.1c12.3,12.3,32.2,12.3,44.5,0l22.2-22.2c12.3-12.3,12.3-32.2,0-44.5L316.7,250z\"/>\r\n</svg>\r\n";

const iconArrowUp = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M60.9,283.5l-22.2-22.2c-9.4-9.4-9.4-24.6,0-33.9L233.1,33c9.4-9.4,24.6-9.4,33.9,0l194.3,194.3c9.4,9.4,9.4,24.6,0,33.9\r\n\tL439,283.4c-9.5,9.5-25,9.3-34.3-0.4L290,162.6V450c0,13.3-10.7,24-24,24h-32c-13.3,0-24-10.7-24-24V162.6L95.2,283.1\r\n\tC85.9,292.9,70.4,293.1,60.9,283.5z\"/>\r\n</svg>\r\n";

const iconArrowDown = "<svg version=\"1.1\"\r\n\txmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\" fill=\"currentColor\" width=\"1em\" height=\"1em\">\r\n\t<path d=\"M439,216.5l22.2,22.2c9.4,9.4,9.4,24.6,0,33.9L267,467c-9.4,9.4-24.6,9.4-33.9,0L38.7,272.7c-9.4-9.4-9.4-24.6,0-33.9\r\n\tL61,216.6c9.5-9.5,25-9.3,34.3,0.4l114.7,120.4V50c0-13.3,10.7-24,24-24h32c13.3,0,24,10.7,24,24v287.4l114.8-120.5\r\n\tC414.1,207.1,429.6,206.9,439,216.5z\"/>\r\n</svg>\r\n";

const PRESETS = {
  "pulse-heart": [{ value: "+", icon: [iconHeart, iconHeartActive], title: "Love" }],
  "pulse-star": [{ value: "+", icon: [iconStar, iconStarActive], title: "Star" }],
  "pulse-like": [{ value: "+", icon: [iconLike, iconLikeActive], title: "Like" }],
  "like-dislike": [
    { value: "+1", icon: iconLike, title: "Like" },
    { value: "-1", icon: iconDislike, title: "Dislike" }
  ],
  "yes-no": [
    { value: "+1", icon: iconLike, title: "Yes" },
    { value: "-1", icon: iconDislike, title: "No" }
  ],
  check: [
    { value: "y", icon: iconCheck, title: "Yes" },
    { value: "n", icon: iconTimes, title: "No" }
  ],
  arrows: [
    { value: "y", icon: iconArrowUp, title: "Upvote" },
    { value: "n", icon: iconArrowDown, title: "Downvote" }
  ],
  feeling: [
    { value: "happy", icon: iconHappy, title: "Happy" },
    { value: "neutral", icon: iconNeutral, title: "Neutral" },
    { value: "sad", icon: iconSad, title: "Sad" }
  ],
  evaluation: [
    { value: "love", icon: iconLove, title: "Love it" },
    { value: "happy", icon: iconHappy, title: "It's ok" },
    { value: "sad", icon: iconSad, title: "Not so great" },
    { value: "hate", icon: iconCry, title: "Hate it" }
  ],
  github: [
    { value: "+1", icon: "👍", title: "Like" },
    { value: "-1", icon: "👎", title: "Dislike" },
    { value: "laugh", icon: "😄", title: "Laugh" },
    { value: "confused", icon: "😕", title: "Confused" },
    { value: "heart", icon: "❤️", title: "Love" },
    { value: "hooray", icon: "🎉", title: "Hooray!" },
    { value: "rocket", icon: "🚀", title: "Let's go!" },
    { value: "eyes", icon: "👀", title: "What?" }
  ],
  facebook: [
    { value: "like", icon: "👍", title: "Like" },
    { value: "love", icon: "❤️", title: "Love" },
    { value: "laugh", icon: "😄", title: "AhAh" },
    { value: "wow", icon: "😮", title: "Wow" },
    { value: "sad", icon: "😥", title: "Cry" },
    { value: "angry", icon: "😡", title: "Angry" }
  ],
  feedback: [
    { value: "idea", icon: "💡", title: "Idea" },
    { value: "error", icon: "💥", title: "Error" },
    { value: "other", icon: "💬", title: "Message" }
  ]
};
function getPreset(name) {
  const preset = PRESETS[name];
  if (!preset) {
    throw new Error(`Preset '${name}' unknown`);
  }
  return preset;
}

const $$Astro$6 = createAstro();
const $$ButtonValueList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ButtonValueList;
  const {
    action = "send",
    reveal,
    field,
    showTitle = true,
    showCount = false,
    showLabel = false,
    hideZero = false,
    hideZeroCount = true,
    active: _active,
    class: className,
    items: _items
  } = Astro2.props;
  const items = typeof _items === "string" ? getPreset(_items) : _items;
  if (items.length < 1) {
    throw new Error("No feelback button values specified");
  }
  const active = typeof _active === "number" ? items[_active].value : _active;
  return renderTemplate`${maybeRenderHead()}<div data-feelback-type="button-group"${addAttribute(reveal, "data-reveal")}${addAttribute(`feelback-buttons${className ? " " + className : ""}${showCount ? " with-count" : ""}${hideZero ? " hide-zero" : ""}`, "class")}> ${items.map(({ value, icon, title }, buttonIdx) => renderTemplate`<button${addAttribute(showTitle ? title : void 0, "title")}${addAttribute(`feelback-btn${active === value ? " active" : ""}`, "class")}${addAttribute(action, "data-feelback-action")}${addAttribute(value, "data-feelback-value")}> ${!Array.isArray(icon) ? renderTemplate`<span class="feelback-icon">${unescapeHTML(icon)}</span>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="feelback-icon inactive">${unescapeHTML(icon[0])}</span> <span class="feelback-icon active">${unescapeHTML(icon[1])}</span> ` })}`} ${showLabel && title && renderTemplate`<span class="label">${title}</span>`} ${showCount && renderTemplate`<span${addAttribute(`feelback-count${hideZeroCount ? " hide-zero" : ""}`, "class")}${addAttribute(value, "data-feelback-count")}${addAttribute(buttonIdx, "data-feelback-count-index")}></span>`} </button>`)} ${field && renderTemplate`<input${addAttribute(field, "name")} data-feelback-field type="hidden"${addAttribute(active, "value")}>`} </div>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/ButtonValueList.astro", void 0);

const $$Astro$5 = createAstro();
const $$FieldButtonValueList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FieldButtonValueList;
  const {
    name,
    preset: items,
    class: className,
    showLabels,
    reveal,
    value
    /** */
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ButtonValueList", $$ButtonValueList, { "field": name, "action": "set-field", "class": className, "active": value, "showLabel": showLabels, ...{ items, reveal } })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/FieldButtonValueList.astro", void 0);

const $$Astro$4 = createAstro();
const $$FieldText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FieldText;
  const {
    class: className,
    name,
    asMetadata,
    placeholder = "Type your message",
    required,
    minLength,
    maxLength,
    type = "text"
    /* */
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")} data-feelback-field${addAttribute(asMetadata, "data-feelback-metadata")}${addAttribute(name, "name")}${addAttribute(className, "class")}${addAttribute(required, "required")}${addAttribute(placeholder, "placeholder")}${addAttribute(minLength, "minlength")}${addAttribute(maxLength, "maxlength")}>`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/parts/FieldText.astro", void 0);

const $$Astro$3 = createAstro();
const $$TaggedMessageForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TaggedMessageForm;
  const {
    layout = "inline",
    class: className,
    preset,
    title = "Send feedback",
    placeholder = "Type your message",
    minLength,
    maxLength,
    showLabels,
    preselect,
    withEmail,
    placeholderEmail
  } = Astro2.props;
  const buttonListProps = {
    name: "tag",
    value: preselect === false ? void 0 : preselect,
    preset,
    showLabels
  };
  return renderTemplate`${renderComponent($$result, "Form", $$Form, { "class": className, "title": layout === "reveal" ? void 0 : title, "revealButtons": layout === "reveal" }, { "before-form-buttons": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["before-form-buttons"])}`, "btn-cancel": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["btn-cancel"])}`, "default": ($$result2) => renderTemplate`${layout === "reveal" ? renderTemplate`${maybeRenderHead()}<div class="feelback-q"> ${title && renderTemplate`<span class="feelback-text">${title}</span>`} ${renderComponent($$result2, "FieldButtonValueList", $$FieldButtonValueList, { ...buttonListProps, "reveal": ".form-reveal" })} </div>` : renderTemplate`${renderComponent($$result2, "FieldButtonValueList", $$FieldButtonValueList, { ...buttonListProps })}`}${Astro2.slots.has("before-message") && renderTemplate`<div${addAttribute(layout === "reveal" ? "hidden form-reveal" : void 0, "class")}> ${renderSlot($$result2, $$slots["before-message"])} </div>`}${renderComponent($$result2, "FieldLongText", $$FieldLongText, { "class": layout === "reveal" ? "hidden form-reveal" : void 0, "name": "message", ...{ placeholder, minLength, maxLength } })} ${withEmail && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${Astro2.slots.has("before-email") && renderTemplate`<div${addAttribute(layout === "reveal" ? "hidden form-reveal" : void 0, "class")}> ${renderSlot($$result3, $$slots["before-email"])} </div>`}${renderComponent($$result3, "FieldText", $$FieldText, { "name": "email", "type": "email", "asMetadata": "$user", "class": layout === "reveal" ? "hidden form-reveal" : void 0, "required": withEmail === "required", "placeholder": placeholderEmail || void 0 })} ` })}`}  ` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/forms/TaggedMessageForm.astro", void 0);

const $$Astro$2 = createAstro();
const $$FeelbackForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeelbackForm;
  const {
    class: className,
    title = "Send feedback",
    textAnswer = "Thanks for your feedback",
    ...target
    /* */
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Component", $$Component, { "component": "form", "class": className, ...target }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SwitchResult", $$SwitchResult, { "textAnswer": textAnswer }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/FeelbackForm.astro", void 0);

const $$Astro$1 = createAstro();
const $$RadioGroupForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RadioGroupForm;
  const {
    items,
    class: className,
    title = "Send feedback",
    placeholder = "Type your message",
    minLength,
    maxLength,
    withMessage,
    withEmail,
    placeholderEmail
  } = Astro2.props;
  const group = `group-${Math.random().toString().substring(2, 7)}`;
  return renderTemplate`${renderComponent($$result, "Form", $$Form, { "class": className, "title": title, "alignButton": "left" }, { "before-form-buttons": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["before-form-buttons"])}`, "btn-cancel": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["btn-cancel"])}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<fieldset class="feelback-radio-group" data-feelback-field="tag" data-required> ${items.map(({ value, title: title2, description }) => renderTemplate`<div class="feelback-radio-item-wrap"> <div class="feelback-radio-item"> <input${addAttribute(`${group}-${value}`, "id")} name="tag" type="radio"${addAttribute(value, "value")} required> <div class="feelback-radio-side"> ${title2 && renderTemplate`<label${addAttribute(`${group}-${value}`, "for")}>${title2}</label>`} ${description && renderTemplate`<span class="feelback-text">${description}</span>`} </div> </div> </div>`)} </fieldset> ${withMessage && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["before-message"])} ${renderComponent($$result3, "FieldLongText", $$FieldLongText, { "name": "message", ...{ placeholder, minLength, maxLength } })} ` })}`}${withEmail && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["before-email"])} ${renderComponent($$result3, "FieldText", $$FieldText, { "name": "email", "type": "email", "asMetadata": "$user", "required": withEmail === "required", "placeholder": placeholderEmail || void 0 })} ` })}`}  ` })}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/forms/RadioGroupForm.astro", void 0);

const $$Astro = createAstro();
const $$FeelbackTaggedMessage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeelbackTaggedMessage;
  const {
    style: _style,
    layout = "inline",
    label = "Send feedback",
    title = "Send feedback",
    textAnswer = "Thanks for your feedback",
    placeholder = "Type your message",
    preset: _preset = "feedback",
    items: _items,
    minLength,
    maxLength,
    showLabels,
    preselect,
    withEmail,
    placeholderEmail = `your@email.com${withEmail && withEmail !== "required" ? " (optional)" : ""}`,
    ...target
  } = Astro2.props;
  const style = Array.isArray(_style) ? _style.join(" ") : _style;
  const behavior = layout === "button-dialog" ? "dialog" : layout === "button-switch" ? "switch" : void 0;
  const formAttrs = {
    preset: _items || _preset,
    title,
    placeholder,
    placeholderEmail,
    minLength,
    maxLength,
    showLabels,
    withEmail,
    preselect: preselect === true ? void 0 : preselect
  };
  const items = Array.isArray(formAttrs.preset) ? formAttrs.preset : getPreset(formAttrs.preset);
  const btnCancelAttrs = layout === "button-switch" || layout === "button-switch-radio-group" ? {
    "data-behavior-action": "switch",
    "data-behavior-target": ".trigger-btn",
    "data-behavior-source": ".feelback-form"
  } : {
    "data-behavior-action": "cancel"
  };
  return renderTemplate`${(layout === "button-dialog" || layout === "button-switch" || layout === "button-switch-radio-group" || layout === "button-dialog-radio-group") && renderTemplate`${renderComponent($$result, "Component", $$Component, { "component": "form", "class": `feelback-tagged-message layout-${layout} ${style || ""}`, "behavior": behavior, ...target }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SwitchResult", $$SwitchResult, { "textAnswer": textAnswer }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "TriggerButton", $$TriggerButton, { "action": layout === "button-dialog" || layout === "button-dialog-radio-group" ? "dialog" : "switch", "target": ".feelback-form", "label": label })}${(layout === "button-switch-radio-group" || layout === "button-dialog-radio-group") && renderTemplate`${renderComponent($$result3, "RadioGroupForm", $$RadioGroupForm, { "items": items, "class": `hidden${layout === "button-dialog-radio-group" ? " dialog" : ""}`, "withMessage": true, ...formAttrs }, { "before-email": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-email"])}`, "before-form-buttons": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-form-buttons"])}`, "before-message": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-message"])}`, "btn-cancel": ($$result4) => renderTemplate`${maybeRenderHead()}<button class="feelback-btn btn-cancel" title="Cancel"${spreadAttributes(btnCancelAttrs)}>
Cancel
</button>` })}`}${(layout === "button-dialog" || layout === "button-switch") && renderTemplate`${renderComponent($$result3, "TaggedMessageForm", $$TaggedMessageForm, { ...formAttrs, "class": `hidden${layout === "button-dialog" ? " dialog" : ""}` }, { "before-email": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-email"])}`, "before-form-buttons": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-form-buttons"])}`, "before-message": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-message"])}`, "btn-cancel": ($$result4) => renderTemplate`<button class="feelback-btn btn-cancel" title="Cancel"${spreadAttributes(btnCancelAttrs)}>
Cancel
</button>` })}`}` })}` })}`}${layout === "reveal-message" && renderTemplate`${renderComponent($$result, "Component", $$Component, { "component": "form", "class": `feelback-tagged-message layout-${layout} ${style || ""}`, "behavior": behavior, ...target }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SwitchResult", $$SwitchResult, { "textAnswer": textAnswer }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "TaggedMessageForm", $$TaggedMessageForm, { "layout": "reveal", ...formAttrs }, { "before-email": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-email"])}`, "before-form-buttons": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-form-buttons"])}`, "before-message": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["before-message"])}` })}` })}` })}`}${layout === "inline" && renderTemplate`${renderComponent($$result, "FeelbackForm", $$FeelbackForm, { "class": `feelback-tagged-message layout-${layout} ${style || ""}`, "textAnswer": textAnswer, ...target }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TaggedMessageForm", $$TaggedMessageForm, { ...formAttrs }, { "before-email": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-email"])}`, "before-form-buttons": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-form-buttons"])}`, "before-message": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-message"])}` })}` })}`}${layout === "radio-group" && renderTemplate`${renderComponent($$result, "FeelbackForm", $$FeelbackForm, { "class": `feelback-tagged-message layout-${layout} ${style || ""}`, "textAnswer": textAnswer, ...target }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "RadioGroupForm", $$RadioGroupForm, { "items": items, "withMessage": true, ...formAttrs }, { "before-email": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-email"])}`, "before-form-buttons": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-form-buttons"])}`, "before-message": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["before-message"])}` })}` })}`}`;
}, "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/node_modules/.pnpm/astro-feelback@0.3.4/node_modules/astro-feelback/components/FeelbackTaggedMessage.astro", void 0);

export { $$FeelbackTaggedMessage as $ };
