import React from 'react'
import { HOME_PAGE_IDS } from '../../../routesNames'

const Home = () => {
  return (
    <>
   
    <main>
      <h1 className="visually-hidden">Heroes examples</h1>
      <div 
      
      id={HOME_PAGE_IDS.CENTERED_HERO}
      style={{
        marginTop:"-100px"
      }}  className="px-4 py-5 min-vh-100 mt-n4 text-center d-flex flex-column align-items-center  justify-content-center ">
        <img
          className="d-block mx-auto mb-4"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width={72}
          height={57}
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system, extensive
            prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
     
      <div className="b-example-divider" />
      <div
      id={HOME_PAGE_IDS.RESPONSIVE_IMAGE}
      className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
      <div 
      id={HOME_PAGE_IDS.SIGN_UP_FORM}
      className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
      <div 
      id={HOME_PAGE_IDS.HERO_WITH_CROPPED_IMAGE}
      className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Border hero with cropped image and shadows
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png"
              alt=""
              width={720}
            />
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
      <div
      
      id={HOME_PAGE_IDS.COLORS}
      className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Dark color hero</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Custom button
              </button>
              <button type="button" className="btn btn-outline-light btn-lg px-4">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider mb-0" />
    </main>
    <style
      id="web-highlights-global-style-variables"
      dangerouslySetInnerHTML={{
        __html:
          ":root { --wh-slate-50: #f8fafc;--wh-slate-100: #f1f5f9;--wh-slate-200: #e2e8f0;--wh-slate-300: #cbd5e1;--wh-slate-400: #94a3b8;--wh-slate-500: #64748b;--wh-slate-600: #475569;--wh-slate-700: #334155;--wh-slate-800: #1e293b;--wh-slate-900: #0f172a;--wh-slate-950: #020617;--wh-primary-50: rgb(187, 219, 204);--wh-primary-100: rgb(153, 208, 184);--wh-primary-200: rgb(120, 197, 164);--wh-primary-300: rgb(86, 186, 144);--wh-primary-400: rgb(53, 176, 125);--wh-primary-500: hsl(161, 100%, 35%);--wh-primary-600: hsl(161, 100%, 33%);--wh-primary-700: hsl(161, 100%, 31%);--wh-primary-800: hsl(161, 100%, 29%);--wh-primary-900: hsl(161, 100%, 25%);--wh-primary-950: hsl(161, 100%, 20%);--wh-secondary-50: hsl(218, 22%, 30%);--wh-secondary-100: hsl(218, 22%, 27%);--wh-secondary-200: hsl(218, 22%, 25%);--wh-secondary-300: hsl(218, 22%, 22%);--wh-secondary-400: hsl(218, 22%, 20%);--wh-secondary-500: hsl(218, 22%, 18%);--wh-secondary-600: hsl(218, 22%, 16%);--wh-secondary-700: hsl(218, 22%, 14%);--wh-secondary-800: hsl(218, 22%, 12%);--wh-secondary-900: hsl(218, 22%, 8%);--wh-secondary-950: hsl(218, 22%, 6%);--wh-gray-50: #f9fafb;--wh-gray-100: #f3f4f6;--wh-gray-200: #e5e7eb;--wh-gray-300: #d1d5db;--wh-gray-400: #9ca3af;--wh-gray-500: #6b7280;--wh-gray-600: #4b5563;--wh-gray-700: #374151;--wh-gray-800: #1f2937;--wh-gray-900: #111827;--wh-gray-950: #030712;--wh-zinc-50: #fafafa;--wh-zinc-100: #f4f4f5;--wh-zinc-200: #e4e4e7;--wh-zinc-300: #d4d4d8;--wh-zinc-400: #a1a1aa;--wh-zinc-500: #71717a;--wh-zinc-600: #52525b;--wh-zinc-700: #3f3f46;--wh-zinc-800: #27272a;--wh-zinc-900: #18181b;--wh-zinc-950: #09090b;--wh-neutral-50: #fafafa;--wh-neutral-100: #f5f5f5;--wh-neutral-200: #e5e5e5;--wh-neutral-300: #d4d4d4;--wh-neutral-400: #a3a3a3;--wh-neutral-500: #737373;--wh-neutral-600: #525252;--wh-neutral-700: #404040;--wh-neutral-800: #262626;--wh-neutral-900: #171717;--wh-neutral-950: #0a0a0a;--wh-stone-50: #fafaf9;--wh-stone-100: #f5f5f4;--wh-stone-200: #e7e5e4;--wh-stone-300: #d6d3d1;--wh-stone-400: #a8a29e;--wh-stone-500: #78716c;--wh-stone-600: #57534e;--wh-stone-700: #44403c;--wh-stone-800: #292524;--wh-stone-900: #1c1917;--wh-stone-950: #0c0a09;--wh-red-50: #fef2f2;--wh-red-100: #fee2e2;--wh-red-200: #fecaca;--wh-red-300: #fca5a5;--wh-red-400: #f87171;--wh-red-500: #ef4444;--wh-red-600: #dc2626;--wh-red-700: #b91c1c;--wh-red-800: #991b1b;--wh-red-900: #7f1d1d;--wh-red-950: #450a0a;--wh-orange-50: #fff7ed;--wh-orange-100: #ffedd5;--wh-orange-200: #fed7aa;--wh-orange-300: #fdba74;--wh-orange-400: #fb923c;--wh-orange-500: #f97316;--wh-orange-600: #ea580c;--wh-orange-700: #c2410c;--wh-orange-800: #9a3412;--wh-orange-900: #7c2d12;--wh-orange-950: #431407;--wh-amber-50: #fffbeb;--wh-amber-100: #fef3c7;--wh-amber-200: #fde68a;--wh-amber-300: #fcd34d;--wh-amber-400: #fbbf24;--wh-amber-500: #f59e0b;--wh-amber-600: #d97706;--wh-amber-700: #b45309;--wh-amber-800: #92400e;--wh-amber-900: #78350f;--wh-amber-950: #451a03;--wh-yellow-50: #fefce8;--wh-yellow-100: #fef9c3;--wh-yellow-200: #fef08a;--wh-yellow-300: #fde047;--wh-yellow-400: #facc15;--wh-yellow-500: #eab308;--wh-yellow-600: #ca8a04;--wh-yellow-700: #a16207;--wh-yellow-800: #854d0e;--wh-yellow-900: #713f12;--wh-yellow-950: #422006;--wh-lime-50: #f7fee7;--wh-lime-100: #ecfccb;--wh-lime-200: #d9f99d;--wh-lime-300: #bef264;--wh-lime-400: #a3e635;--wh-lime-500: #84cc16;--wh-lime-600: #65a30d;--wh-lime-700: #4d7c0f;--wh-lime-800: #3f6212;--wh-lime-900: #365314;--wh-lime-950: #1a2e05;--wh-green-50: #f0fdf4;--wh-green-100: #dcfce7;--wh-green-200: #bbf7d0;--wh-green-300: #86efac;--wh-green-400: #4ade80;--wh-green-500: #22c55e;--wh-green-600: #16a34a;--wh-green-700: #15803d;--wh-green-800: #166534;--wh-green-900: #14532d;--wh-green-950: #052e16;--wh-emerald-50: #ecfdf5;--wh-emerald-100: #d1fae5;--wh-emerald-200: #a7f3d0;--wh-emerald-300: #6ee7b7;--wh-emerald-400: #34d399;--wh-emerald-500: #10b981;--wh-emerald-600: #059669;--wh-emerald-700: #047857;--wh-emerald-800: #065f46;--wh-emerald-900: #064e3b;--wh-emerald-950: #022c22;--wh-teal-50: #f0fdfa;--wh-teal-100: #ccfbf1;--wh-teal-200: #99f6e4;--wh-teal-300: #5eead4;--wh-teal-400: #2dd4bf;--wh-teal-500: #14b8a6;--wh-teal-600: #0d9488;--wh-teal-700: #0f766e;--wh-teal-800: #115e59;--wh-teal-900: #134e4a;--wh-teal-950: #042f2e;--wh-cyan-50: #ecfeff;--wh-cyan-100: #cffafe;--wh-cyan-200: #a5f3fc;--wh-cyan-300: #67e8f9;--wh-cyan-400: #22d3ee;--wh-cyan-500: #06b6d4;--wh-cyan-600: #0891b2;--wh-cyan-700: #0e7490;--wh-cyan-800: #155e75;--wh-cyan-900: #164e63;--wh-cyan-950: #083344;--wh-sky-50: #f0f9ff;--wh-sky-100: #e0f2fe;--wh-sky-200: #bae6fd;--wh-sky-300: #7dd3fc;--wh-sky-400: #38bdf8;--wh-sky-500: #0ea5e9;--wh-sky-600: #0284c7;--wh-sky-700: #0369a1;--wh-sky-800: #075985;--wh-sky-900: #0c4a6e;--wh-sky-950: #082f49;--wh-blue-50: #eff6ff;--wh-blue-100: #dbeafe;--wh-blue-200: #bfdbfe;--wh-blue-300: #93c5fd;--wh-blue-400: #60a5fa;--wh-blue-500: #3b82f6;--wh-blue-600: #2563eb;--wh-blue-700: #1d4ed8;--wh-blue-800: #1e40af;--wh-blue-900: #1e3a8a;--wh-blue-950: #172554;--wh-indigo-50: #eef2ff;--wh-indigo-100: #e0e7ff;--wh-indigo-200: #c7d2fe;--wh-indigo-300: #a5b4fc;--wh-indigo-400: #818cf8;--wh-indigo-500: #6366f1;--wh-indigo-600: #4f46e5;--wh-indigo-700: #4338ca;--wh-indigo-800: #3730a3;--wh-indigo-900: #312e81;--wh-indigo-950: #1e1b4b;--wh-violet-50: #f5f3ff;--wh-violet-100: #ede9fe;--wh-violet-200: #ddd6fe;--wh-violet-300: #c4b5fd;--wh-violet-400: #a78bfa;--wh-violet-500: #8b5cf6;--wh-violet-600: #7c3aed;--wh-violet-700: #6d28d9;--wh-violet-800: #5b21b6;--wh-violet-900: #4c1d95;--wh-violet-950: #2e1065;--wh-purple-50: #faf5ff;--wh-purple-100: #f3e8ff;--wh-purple-200: #e9d5ff;--wh-purple-300: #d8b4fe;--wh-purple-400: #c084fc;--wh-purple-500: #a855f7;--wh-purple-600: #9333ea;--wh-purple-700: #7e22ce;--wh-purple-800: #6b21a8;--wh-purple-900: #581c87;--wh-purple-950: #3b0764;--wh-fuchsia-50: #fdf4ff;--wh-fuchsia-100: #fae8ff;--wh-fuchsia-200: #f5d0fe;--wh-fuchsia-300: #f0abfc;--wh-fuchsia-400: #e879f9;--wh-fuchsia-500: #d946ef;--wh-fuchsia-600: #c026d3;--wh-fuchsia-700: #a21caf;--wh-fuchsia-800: #86198f;--wh-fuchsia-900: #701a75;--wh-fuchsia-950: #4a044e;--wh-pink-50: #fdf2f8;--wh-pink-100: #fce7f3;--wh-pink-200: #fbcfe8;--wh-pink-300: #f9a8d4;--wh-pink-400: #f472b6;--wh-pink-500: #ec4899;--wh-pink-600: #db2777;--wh-pink-700: #be185d;--wh-pink-800: #9d174d;--wh-pink-900: #831843;--wh-pink-950: #500724;--wh-rose-50: #fff1f2;--wh-rose-100: #ffe4e6;--wh-rose-200: #fecdd3;--wh-rose-300: #fda4af;--wh-rose-400: #fb7185;--wh-rose-500: #f43f5e;--wh-rose-600: #e11d48;--wh-rose-700: #be123c;--wh-rose-800: #9f1239;--wh-rose-900: #881337;--wh-rose-950: #4c0519;--wh-primary-color: var(--wh-primary-500);--wh-primary-color-hover: #00a16e;--wh-primary-color-transparent: #00aa7424;--wh-primary-color-transparent-light: #00a8730f;--wh-primary-light: #53e3a6;--wh-primary-dark: #007f4b;--wh-primary-dark-hover: #017444;--wh-primary-shadow: #00b07841;--wh-primary-shadow-2: #00b07870;--wh-primary-border-color: #c8c8c870;--secondary-color: #3d4455;--secondary-color-hover: #3a4052;--secondary-color-transparent: #3d44556b;--secondary-light: #4c556d;--secondary-dark: #252934;--secondary-dark-hover: #191b22;--secondary-dark-transparent: #2e2d2d46;--highlight-color: #92ffaa;--error-color: #d62d4c;--error-color-light: #fde8e8;--warning-color: #ff5a1f;--warning-color-light: #feecdc;--error-info: #14854e;--success-color: #0e9f6e;--success-color-light: #def7ec;--font-color: #2f3237;--font-color-light: #626364;--font-color-dark: #252525;--wh-font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont,\n  'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n  'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;--font-family: var(--wh-font-family);--font-size: 12px;--webhighlights-font-size: 12px;--link-color: #1d9bf0;--wh-form-active-color: #3b82f6;--wh-accent-blue: #1f6feb;--wh-mobile-breakpoint: 767px;--BREAKPOINT_XS: 575px;--BREAKPOINT_S: 767px;--BREAKPOINT_M: 991px;--BREAKPOINT_L: 1199px;--BREAKPOINT_XL: 1399px;--BREAKPOINT_XXL: 1699px;--wh-danger-color: var(--wh-red-600);--wh-danger-color-hover: var(--wh-red-700);--wh-font-size: 13px;--wh-blockquote-line-height: 1.3;--wh-bg-base: var(--wh-secondary-600);--wh-bg-base-hover: var(--wh-secondary-500);--wh-border-base: var(--wh-secondary-200);--wh-border-base-hover: var(--wh-secondary-100);--wh-border-base-strong: var(--wh-secondary-100);--wh-border-base-strong-hover: var(--wh-secondary-50);--wh-bg-base-hover-strong: var(--wh-secondary-300);--wh-bg-back: var(--wh-secondary-700);--wh-bg-back-strong: var(--wh-secondary-800);--wh-bg-back-strong-hover: var(--wh-secondary-900);--wh-bg-back-hover: var(--wh-secondary-600);--wh-bg-back-hover-strong: var(--wh-secondary-800);--wh-border-back: var(--wh-secondary-100);--wh-border-back-strong: var(--wh-secondary-50);--wh-bg-front: var(--wh-secondary-400);--wh-bg-front-strong: var(--wh-secondary-200);--wh-bg-front-strong-hover: var(--wh-secondary-100);--wh-bg-front-hover: var(--wh-secondary-300);--wh-bg-front-hover-strong: var(--wh-secondary-200);--wh-border-front: hsl(227, 20%, 25%);--wh-border-front-strong: hsl(227, 20%, 35%);--wh-text-stronger: hsla(0, 0%, 100%, 0.95);--wh-text-strongest: hsla(0, 0%, 100%, 1);--wh-text-strong: rgba(255, 255, 255, 0.9);--wh-text: rgba(255, 255, 255, 0.85);--wh-text-hover: var(--wh-text-strong);--wh-text-light: rgba(255, 255, 255, 0.73);--wh-text-lighter: rgba(255, 255, 255, 0.63);--wh-text-lightest: rgba(255, 255, 255, 0.5);--wh-border-color: hsla(0, 0%, 100%, 0.15);--wh-border-color-strong: hsla(0, 0%, 100%, 0.25);--wh-note-editor-bg-color: hsl(221, 27%, 20%);--wh-note-editor-bg-color-preview: hsl(221, 27%, 18%);--wh-bg-tags: var(--wh-secondary-300);--wh-bg-tags-hover: var(--wh-secondary-200);--wh-syntax-bg-color: rgba(255, 255, 255, 0.05);--wh-fallback-img-color: var(--wh-secondary-600);--wh-bg-disabled: hsl(220, 22%, 18%);--wh-bg-notification-unread: hsla(161, 100%, 20%, 0.15);--wh-bg-notification-unread-hover: hsla(161, 100%, 20%, 0.05);--wh-subtle-gray: rgb(255, 255, 255, 0.1);--wh-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),\n      /* 2. shadow ring 👇 */ 0 0 0 1px hsla(230, 13%, 9%, 0.075),\n      /* 3. multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),\n      0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),\n      0 3.5px 6px hsla(230, 13%, 9%, 0.09);--wh-shadow-primary: var(--wh-primary-500) 0px 0px 0px 1px inset,\n      var(--wh-primary-500) 0px 0px 1px; }"
      }}
    />
    <div id="webhighlights-notifications" />
    <style
      id="web-highlights-global-styles"
      dangerouslySetInnerHTML={{
        __html:
          "\n  webhighlights-sidebar {\n    --webhighlights-font-size: 13.5px;\n  }\n\n  body.web-highlights-animate {\n    transition: all 300ms linear;\n    transition-property: margin-left, margin-right;\n  }\n\n  body.web-highlights-open {\n    margin-left: 400px !important;\n  }\n\n  web-highlight.webhighlights-highlight {\n    border-radius: 2px;\n    background-color: #92ffaa;\n    cursor: pointer;\n    visibility: visible !important;\n  }\n\n  web-highlight.webhighlights-highlight.webhighlight-with-tags,\n  web-highlight.webhighlights-highlight.webhighlight-with-notes {\n    border-bottom: 2.8px solid gray;\n    border-radius: 0px;\n  }\n\n  web-highlight > *:not(webhighlights-popup-toolbox) {\n    background-color: #92ffaa;\n  }\n\n  webhighlights-popup-toolbox.contains-highlight {\n    transform: translate(-63px, -10px);\n    position: fixed;\n  }\n"
      }}
    />
    <webhighlights-popup-toolbox />
    <webhighlights-marker />
    <div id="veepn-breach-alert" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '@font-face{font-family:FigtreeVF;src:url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2 supports variations"),url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2-variations");font-weight:100 1000;font-display:swap}'
      }}
    />
  </>
  )
}

export default Home