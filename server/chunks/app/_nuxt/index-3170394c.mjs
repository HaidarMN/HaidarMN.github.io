import { computed, unref, useSSRContext, mergeProps, ref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useStore, f as firestoreDB } from './firebase-c62ea2a5.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import __nuxt_component_1$1 from './Icon-6a9c1393.mjs';
import { query, collection, orderBy, onSnapshot, where } from 'firebase/firestore';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './config-0b7ecc6c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$4 = {
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-[calc(100vh-4rem)] min-w-full flex-col items-center justify-center gap-10" }, _attrs))} data-v-0f79c117><h1 class="text-6xl font-bold text-primary" data-v-0f79c117>Haidar Muhammad Naufal</h1><h2 class="w-[475px] overflow-hidden whitespace-nowrap text-2xl font-medium text-white" data-v-0f79c117> Senior Frontend Developer at Telkomsigma </h2><button class="group relative inline-flex items-center justify-start overflow-hidden rounded-lg border-2 border-primary transition-all" data-v-0f79c117><span class="absolute left-0 top-0 -z-10 h-full w-0 bg-primary transition-all duration-300 group-hover:w-full" data-v-0f79c117></span><span class="z-10 p-4 text-xl font-medium text-white" data-v-0f79c117>Checkout My Projects</span></button></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/main.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0f79c117"]]);
const _sfc_main$3 = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const about = ref([]);
    const profile = ref([]);
    const skills = ref([]);
    const certificates = ref([]);
    const certificate_query = query(
      collection(firestoreDB, "Certificate"),
      orderBy("date", "desc")
    );
    onSnapshot(
      collection(firestoreDB, "About"),
      (querySnapshot) => {
        about.value = [];
        querySnapshot.forEach((doc) => {
          var response = {
            id: doc.id,
            title: doc.data().title,
            value: doc.data().value
          };
          about.value.push(response);
        });
      }
    );
    onSnapshot(
      collection(firestoreDB, "Profile"),
      (querySnapshot) => {
        profile.value = [];
        querySnapshot.forEach((doc) => {
          var response = {
            id: doc.id,
            img: doc.data().img
          };
          profile.value = response;
        });
      }
    );
    onSnapshot(
      collection(firestoreDB, "Skill"),
      (querySnapshot) => {
        skills.value = [];
        querySnapshot.forEach((doc) => {
          var response = {
            id: doc.id,
            name: doc.data().name,
            icon: doc.data().icon
          };
          skills.value.push(response);
        });
      }
    );
    onSnapshot(certificate_query, (querySnapshot) => {
      certificates.value = [];
      querySnapshot.forEach((doc) => {
        var response = {
          id: doc.id,
          name: doc.data().name,
          provider: doc.data().provider,
          credential: doc.data().credential,
          image: doc.data().image
        };
        certificates.value.push(response);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content mt-10 flex flex-col gap-8 bg-black" }, _attrs))}><div class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary">ABOUT</h2><div class="flex flex-row items-start gap-10"><img${ssrRenderAttr("src", profile.value.img)} class="h-60 w-60 rounded-lg bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"><div class="flex w-4/5 flex-col gap-6"><p class="text-lg text-white"> I&#39;m a frontend web developer proficient in Vue.js, Vite.js, or Nuxt.js and use Bootstrap 5 or TailwindCSS to accelerate web development. </p><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(about.value, (value_of_about) => {
        _push(`<div class="flex flex-row gap-2"><span class="text-xl font-semibold text-primary">${ssrInterpolate(value_of_about.title)}:</span><span class="text-xl text-white">${ssrInterpolate(value_of_about.value)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary">CERTIFICATES</h2><div class="grid grid-cols-4 justify-items-center gap-10"><!--[-->`);
      ssrRenderList(certificates.value, (value_of_certificate) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: value_of_certificate.id,
          to: value_of_certificate.credential,
          target: "_blank",
          class: "group h-36 w-full cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat",
          style: { backgroundImage: `url(${value_of_certificate.image})` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-full flex-col items-center justify-center gap-2 bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"${_scopeId}><span class="text-center font-bold text-white"${_scopeId}>${ssrInterpolate(value_of_certificate.name)}</span><span class="text-center text-sm font-medium text-secondary"${_scopeId}>${ssrInterpolate(value_of_certificate.provider)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex h-full flex-col items-center justify-center gap-2 bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100" }, [
                  createVNode("span", { class: "text-center font-bold text-white" }, toDisplayString(value_of_certificate.name), 1),
                  createVNode("span", { class: "text-center text-sm font-medium text-secondary" }, toDisplayString(value_of_certificate.provider), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary">SKILLS</h2><div class="grid grid-cols-5 justify-items-center gap-10"><!--[-->`);
      ssrRenderList(skills.value, (value_of_skill) => {
        _push(`<div class="flex h-32 w-32 items-center justify-center rounded-full bg-black p-8">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: value_of_skill.icon,
          class: "text-primary",
          size: "100%"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/about.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "experiences",
  __ssrInlineRender: true,
  setup(__props) {
    const experience = ref([]);
    const q = query(
      collection(firestoreDB, "Experience"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      experience.value = [];
      querySnapshot.forEach((doc) => {
        var response = {
          id: doc.id,
          date: doc.data().date,
          position: doc.data().position,
          location: doc.data().location,
          link: doc.data().link,
          desc: doc.data().desc,
          skills: doc.data().skills
        };
        experience.value.push(response);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content mt-10 flex flex-col gap-8 bg-black" }, _attrs))}><div class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary">EXPERIENCES</h2><div class="flex flex-col gap-8"><!--[-->`);
      ssrRenderList(experience.value, (value_of_experience) => {
        _push(`<div class="flex flex-col items-start gap-2"><span class="text-sm text-gray">${ssrInterpolate(value_of_experience.date)}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: value_of_experience.link,
          class: "group flex flex-row items-center gap-2.5 text-2xl font-bold text-primary",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(value_of_experience.position)} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "octicon:dot-fill-24",
                size: "10px"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(value_of_experience.location)} `);
              if (!!value_of_experience.link) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "bi:box-arrow-up-right",
                  class: "transition-all group-hover:-translate-y-1 group-hover:scale-110",
                  size: "15px"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(value_of_experience.position) + " ", 1),
                createVNode(_component_Icon, {
                  name: "octicon:dot-fill-24",
                  size: "10px"
                }),
                createTextVNode(" " + toDisplayString(value_of_experience.location) + " ", 1),
                !!value_of_experience.link ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: "bi:box-arrow-up-right",
                  class: "transition-all group-hover:-translate-y-1 group-hover:scale-110",
                  size: "15px"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="mb-2 text-white">${ssrInterpolate(value_of_experience.desc)}</p><div class="flex flex-row gap-4"><!--[-->`);
        ssrRenderList(value_of_experience.skills, (skill, index) => {
          _push(`<div class="rounded-full bg-primary/20 px-2.5 py-1.5 text-xs font-medium text-primary">${ssrInterpolate(skill)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/experiences.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const personal_projects = ref([]);
    const non_personal_projects = ref([]);
    const q_personal = query(
      collection(firestoreDB, "Projects"),
      where("personal", "==", true),
      orderBy("timestamp", "desc")
    );
    const q_non_personal = query(
      collection(firestoreDB, "Projects"),
      where("personal", "==", false),
      orderBy("timestamp", "desc")
    );
    onSnapshot(q_personal, (querySnapshot) => {
      personal_projects.value = [];
      querySnapshot.forEach((doc) => {
        var response = {
          id: doc.id,
          name: doc.data().name,
          background: doc.data().background,
          link: doc.data().link,
          type: doc.data().type,
          timestamp: doc.data().timestamp
        };
        personal_projects.value.push(response);
      });
    });
    onSnapshot(q_non_personal, (querySnapshot) => {
      non_personal_projects.value = [];
      querySnapshot.forEach((doc) => {
        var response = {
          id: doc.id,
          name: doc.data().name,
          background: doc.data().background,
          link: doc.data().link,
          type: doc.data().type,
          timestamp: doc.data().timestamp
        };
        non_personal_projects.value.push(response);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content mt-10 flex min-w-full flex-col gap-10 bg-black" }, _attrs))}><div class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary">PROJECTS</h2><div class="grid grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(non_personal_projects.value, (value_of_project) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: value_of_project.id,
          to: value_of_project.link,
          target: "_blank",
          class: "group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat",
          style: { backgroundImage: `url(${value_of_project.background})` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"${_scopeId}><span class="text-center text-xl font-bold text-white"${_scopeId}>${ssrInterpolate(value_of_project.name)}</span><span class="text-center font-medium text-secondary"${_scopeId}>${ssrInterpolate(value_of_project.type)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100" }, [
                  createVNode("span", { class: "text-center text-xl font-bold text-white" }, toDisplayString(value_of_project.name), 1),
                  createVNode("span", { class: "text-center font-medium text-secondary" }, toDisplayString(value_of_project.type), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="flex flex-col gap-4"><h2 class="text-lg tracking-[0.25rem] text-secondary"> PERSONAL PROJECTS </h2><div class="grid grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(personal_projects.value, (value_of_project) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: value_of_project.id,
          to: value_of_project.link,
          target: "_blank",
          class: "group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat",
          style: { backgroundImage: `url(${value_of_project.background})` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"${_scopeId}><span class="text-center text-xl font-bold text-white"${_scopeId}>${ssrInterpolate(value_of_project.name)}</span><span class="text-center font-medium text-secondary"${_scopeId}>${ssrInterpolate(value_of_project.type)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100" }, [
                  createVNode("span", { class: "text-center text-xl font-bold text-white" }, toDisplayString(value_of_project.name), 1),
                  createVNode("span", { class: "text-center font-medium text-secondary" }, toDisplayString(value_of_project.type), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const current_page = computed(() => {
      return store.current_page;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentMain = __nuxt_component_0;
      const _component_ContentAbout = __nuxt_component_1;
      const _component_ContentExperiences = __nuxt_component_2;
      const _component_ContentProjects = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(current_page) == "Home") {
        _push(ssrRenderComponent(_component_ContentMain, null, null, _parent));
      } else if (unref(current_page) == "About") {
        _push(ssrRenderComponent(_component_ContentAbout, { class: "animate__animated animate__slideInUp animate__faster" }, null, _parent));
      } else if (unref(current_page) == "Experiences") {
        _push(ssrRenderComponent(_component_ContentExperiences, { class: "animate__animated animate__slideInUp animate__faster" }, null, _parent));
      } else if (unref(current_page) == "Projects") {
        _push(ssrRenderComponent(_component_ContentProjects, { class: "animate__animated animate__slideInUp animate__faster" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3170394c.mjs.map
