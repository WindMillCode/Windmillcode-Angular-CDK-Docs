import { I as createVNode, t as Fragment, af as __astro_tag_component__ } from './astro/server_DEq4NUVT.mjs';
/* empty css                            */
import { $ as $$FeelbackTaggedMessage } from './FeelbackTaggedMessage_B1_t6TqU.mjs';

const frontmatter = {
  "title": "Feedback",
  "slug": "19.2.12000/feedback"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode($$FeelbackTaggedMessage, {
    contentSetId: "59c73b1b-40c2-4f12-9606-c0eb1278a306",
    preset: "feedback"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/19.2.12000/feedback.mdx";
const file = "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/src/content/docs/19.2.12000/feedback.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/src/content/docs/19.2.12000/feedback.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
