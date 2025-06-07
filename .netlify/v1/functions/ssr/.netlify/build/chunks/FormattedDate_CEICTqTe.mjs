import { f as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_DI_y9TaY.mjs';
import 'clsx';

const $$Astro = createAstro("https://romgrk.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const date = new Date(Astro2.props.date);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-uk", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "/home/romgrk/src/blog-romgrk/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
