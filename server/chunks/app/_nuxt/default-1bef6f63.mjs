import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useStore, f as firestoreDB } from './firebase-c62ea2a5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import __nuxt_component_1$1 from './Icon-6a9c1393.mjs';
import { onSnapshot, collection } from 'firebase/firestore';
import { _ as _export_sfc } from '../server.mjs';
import 'firebase/app';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';
import './config-0b7ecc6c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const navbar_menu = ref(["About", "Experiences", "Projects"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 flex w-full flex-row items-center justify-between bg-black px-20 py-4" }, _attrs))}><div class="cursor-pointer text-2xl font-bold text-primary"> HaidarMN </div><div class="absolute left-1/2 flex -translate-x-1/2 flex-row items-center gap-8"><!--[-->`);
      ssrRenderList(navbar_menu.value, (navbar, index) => {
        _push(`<div class="group relative"><span class="cursor-pointer font-medium uppercase text-white">${ssrInterpolate(navbar)}</span><span class="${ssrRenderClass([unref(store).current_page == navbar ? "w-3/5" : "", "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-3/5"])}"></span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "sosmed",
  __ssrInlineRender: true,
  setup(__props) {
    const contact = ref([]);
    onSnapshot(
      collection(firestoreDB, "Contact"),
      (querySnapshot) => {
        contact.value = [];
        querySnapshot.forEach((doc) => {
          var response = {
            id: doc.id,
            label: doc.data().label,
            path: doc.data().path,
            icon: doc.data().icon
          };
          contact.value.push(response);
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-10 left-14 flex flex-col items-center justify-between gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(contact.value, (value_of_contact) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: value_of_contact.id,
          to: value_of_contact.path,
          target: "_blank",
          class: "relative flex flex-row items-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: value_of_contact.icon,
                size: "25px",
                class: "peer text-primary"
              }, null, _parent2, _scopeId));
              _push2(`<span class="invisible absolute left-0 ml-10 min-w-max rounded-lg bg-primary py-1 pl-2.5 pr-2 text-sm font-medium text-white opacity-0 transition-all duration-200 after:absolute after:-left-1 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:bg-primary peer-hover:visible peer-hover:opacity-100"${_scopeId}>${ssrInterpolate(value_of_contact.label)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: value_of_contact.icon,
                  size: "25px",
                  class: "peer text-primary"
                }, null, 8, ["name"]),
                createVNode("span", { class: "invisible absolute left-0 ml-10 min-w-max rounded-lg bg-primary py-1 pl-2.5 pr-2 text-sm font-medium text-white opacity-0 transition-all duration-200 after:absolute after:-left-1 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:bg-primary peer-hover:visible peer-hover:opacity-100" }, toDisplayString(value_of_contact.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="h-10 w-0.5 bg-primary"></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/sosmed.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const year = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-center p-4 text-center text-white" }, _attrs))}> Copyright \xA9 ${ssrInterpolate(unref(year))} Haidar Muhammad Naufal </div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_GeneralNavbar = __nuxt_component_0;
  const _component_GeneralSosmed = __nuxt_component_1;
  const _component_GeneralFooter = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_GeneralNavbar, { class: "z-10" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_GeneralSosmed, { class: "z-10" }, null, _parent));
  _push(ssrRenderComponent(_component_GeneralFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-1bef6f63.mjs.map
