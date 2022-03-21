"use strict";(self.webpackChunkpandawa_docs=self.webpackChunkpandawa_docs||[]).push([[868],{3905:function(e,A,t){t.d(A,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function i(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?i(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var A=n.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},u=function(e){var A=s(e.components);return n.createElement(l.Provider,{value:A},e.children)},p={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},c=n.forwardRef((function(e,A){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return t?n.createElement(f,r(r({ref:A},u),{},{components:t})):n.createElement(f,r({ref:A},u))}));function d(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var l in A)hasOwnProperty.call(A,l)&&(o[l]=A[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2424:function(e,A,t){t.r(A),t.d(A,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],o={sidebar_position:1},l="Installation",s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Here, you will learn how to install Pandawa and its glory!",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/pandawa-docs/docs/getting-started/installation",editUrl:"https://github.com/Edqe14/pandawa-docs/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/pandawa-docs/docs/intro"},next:{title:"Configuration",permalink:"/pandawa-docs/docs/getting-started/configuration"}},u={},p=[{value:"Using a skeleton project",id:"using-a-skeleton-project",level:2},{value:"Manual",id:"manual",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Prequisites",id:"prequisites",level:3},{value:"Enabling <code>sodium</code> extension",id:"enabling-sodium-extension",level:3},{value:"Error Fideloper&#39;s TrustProxies not found",id:"error-fidelopers-trustproxies-not-found",level:3}],c={toc:p};function d(e){var A=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:A,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Here, you will learn how to install Pandawa and its glory!"),(0,i.kt)("h2",{id:"using-a-skeleton-project"},"Using a skeleton project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Feel free to fork or clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pandawa/pandawa-skeleton"},"this repository"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install vendor dependencies using ",(0,i.kt)("inlineCode",{parentName:"p"},"composer install"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the installation and run ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan")," to list all commands, you should see some pandawa commands available. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"CLI View",src:t(3562).Z,width:"676",height:"340"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You're set!"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you need a demo app that is built with Pandawa, you could check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arifsetianto/blog-demo"},(0,i.kt)("inlineCode",{parentName:"a"},"blog-demo"))," repository for an overview of Pandawa's structure, concepts and usage."))),(0,i.kt)("h2",{id:"manual"},"Manual"),(0,i.kt)("p",null,"TBA"),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you're having a hard time installing Pandawa, this might help you."),(0,i.kt)("h3",{id:"prequisites"},"Prequisites"),(0,i.kt)("p",null,"Please make sure you've..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enabled ",(0,i.kt)("inlineCode",{parentName:"li"},"sodium")," extension. ",(0,i.kt)("a",{parentName:"li",href:"#enabling-sodium-extension"},"How to")),(0,i.kt)("li",{parentName:"ol"},"Running php 8 or above")),(0,i.kt)("h3",{id:"enabling-sodium-extension"},"Enabling ",(0,i.kt)("inlineCode",{parentName:"h3"},"sodium")," extension"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"php.ini")," file in your php installation directory with your favorite text editor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find a collection of extension like on the image below"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"php.ini",src:t(4267).Z,width:"223",height:"511"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add this line to your configuration file"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"extension=sodium\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Try to re-run the thing you're trying to do before."))),(0,i.kt)("h3",{id:"error-fidelopers-trustproxies-not-found"},"Error Fideloper's TrustProxies not found"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Fideloper TrustProxy",src:t(6217).Z,width:"540",height:"156"})),(0,i.kt)("p",null,"You need to change ",(0,i.kt)("inlineCode",{parentName:"p"},"TrustProxies")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/laravel/Http/Middleware/TrustProxies.php")," as part of Laravel 9 migration process."),(0,i.kt)("p",null,"Just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"Fideloper\\Proxy\\TrustProxies")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Http\\Middleware\\TrustProxies")))}d.isMDXComponent=!0},6217:function(e,A){A.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAACcCAYAAAA00XKNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB2aSURBVHhe7Z3dix/Xecf9t+S29DKQ5KLgy9zkruhGN20I+CJu7GJ8oaZgZLCjJlTBrUoaVSoVLVZQtUmLwLCKUFQLr9VKVi2vHVkLygqZlZC6sGhZsyskTs9z5jwzz5w5M7/Xs7uSPgMf/XbmvMx5f75zzpnRS9/4xjccAAAAQEkQHAAAAFAcBAcAAAAUB8EBAAAAxUFwAAAAQHEQHAAAAFAcBAcAAAAUB8EBAAAAxZm74Pj2t78d+N73vhfI+QEAAIAXi7kJjkOHDrn333/fffbZZy1++9vfBjcRIblwAAAALyrHjh1zv/rVr3oR91y4Z5GZBYcIiZzQSBHh8YMf/CAbBwAAwIvGd7/73WAbR5EL+ywyk+CQJZOcuLCIGBGhoTMgI5dZfnLWffzxxw0XTrhXc/5m4lV34kKMf+HdjPuc+eEJd8HmybIb9x/Buwv7Ix0AAC8Shw8fDoJCfkV8pIibzHKI329+85ud8K+euJC1K2d/0va3X5hJcIya2VCBIX+r6JAC7F1eCWLjgjvxw+ZaKNB5i45wn7Pu3ZxbCYLgaOdrb3nXnTWNEsEBALC7iIDQGQxZNskhbj/60Y8CBw8e7MSRtY/xoX0/io6pBYeIh1RgSOFYESL+fv7zn9duel2upfEJeXEhxnHOxloqpMjMSQ/7XHAAAMDuIiJC7KLMYIiYSFHBITMd8rf8pnH0PZAXeVCfA1MLDisgBLkmIkQQQSG/6k/OVXgIcs3GVZOZ4ei4twrRiJE4a3FCCtpMK4Wnd3Ou6q+iuZf1Z5/2q6f/s8FAt8NUyzLWaIdKzs0UjBIcccnlwolX47W45FPHVQkETV/nnupmy6anPFrLSfFaOsMxKs6zpqyaNAMAwLiooBDBIUsqKeomMyG6rJLSKyziWF3P4reW9VNb1GNfWmHadmdaphYcVmzojIXOblhBIddysyF9ezlahr+z7JHMdkihamFHIaEGUI2mFlKIt+W3ibtdaVXhazxVehJhEv2GcLWh7gqQmqTiGkxejChpp6eKtzbsxl+aj5ZwiOXRPtf7VXlslU3Ln8aZCJ8YZ52WVpwAADAOdjllCJkF0RmOXDy9gsPaiWS8r2xje4zv2pfEnoXrqT2enKkER7pZVApGrsveDPlbBYjs27D+LCM3j1rVZQpUjKMVA23jZwokOW9VTMao1vEkflvGOHFrVcJQhbQqv5+qIUiejd+BsK38CzYNHTFg89kvONL8tsoqLeMx8wUAAA26nDIKWVrRPRy5eFr2yGLH5nTctuN/7xgeHzZzcc/AzIJDRIXOYoibLqnI33YZJWW04FCqwmkJi1AIUiCmoNJCTc77BUfb+KZ+BwVHrJQQVuK0htoytmFO8iqk+aqJDcL7b9PXyKxA6RMcVpTEcDaeNE4EBwDAxMgSSU5gpIhf/c3RKzjMWN31Y8b/XvsiJDYmd58JmUpwyEyGCgcRHCIsRHSIm/zKNflbCsqKDEv3TRVjvDPXGyMoheWN3E+8sbMFkBZcct4vOLpGdnzBEc+9u/jrpj0ypmEO9/IiquV3IGwjILpuVR5tOJvPPsHRzW+rrNIyRnAAAEyEzFpYUdGHzGoM7d8QumKiorIlOXsnmPF/lofhKZh506j8qsiQXysmrMBISeMTQuGlme8YzliYorj6DGPmvFUxQ25JwaYGuFPBocIkPQOVNk6lmjS175ETXHl1WpVfPA9uJlw41zT0C452nNW9824eBAcAwESo4JB9GX3IplERG0PLKULHHglx7G8egNvjfctO9NqXdhj115xPx9SCY2h/hrgPLafo8kuWWFgNxsAlflqZT41hct6qmNSvpxYxghEYIwWHGuW00i21KMkg4Tr5SQx9bAQaxqrMqvGomzH+MY/2jRJbXppfiSubR43T5istNwQHAMBEiOCQWQvZDCqiYgh9SyUXj9Ae/5XMmNyyQal7j31J7ZaxEdMyteDQDaIiIORX30SR33RTqUX85uKbiFAQGSGyR4jBtiJgX5ARVQAAsPeo6BiF+MuFf1aZWnAIupdDN4mKmLBCJMf4m0X7CapuDmprPog63IdP+QgOAADYR8wkOAQRGLJ3Q8mJDEFEyOxiIy417BdDGpdC9t3shoDgAACAfcTMgkMQ0aFLKjmhMbhnAwAAAJ575iI4LCI+ZCZDyfkBAACAF4u5Cw4AAACAFAQHAAAAFAfBAQAAAMVBcAAAAEBxEBwAAABQHAQHAAAAFAfBAQAAAMV56a/++I8cAAAAQEleOvmdbzkAAACAkiA4AAAAoDgIDgAAACgOggMAAACKg+AAAACA4iA4AAAAoDgIDgAAACgOggMAAACKg+AAAACA4iA4AAAAoDhTCo5fuj/c/L37vxyfLLhL2TAAAC8el359LTsu2uufXMyMpcrFX4507x2Th8bj4xcS/9fc799q3O09/3DchPOEtEe3e79+q+Vm+einf+M++afj7t8P/GnWfa+5+Nc/dp+e+hf3n3/+Z1l3Sf/y6fdr/ucfjmX97RWSbkm/TaOyH8t9JsGRNkIAAGgzjuCw14OhDyKifV3Ju+fG5Lfc7z/pjyvcv+8+QYxccJ+kfwtvLbh7Kk7s3+puGFdwqOEUAZBzL8WQ4JC0p24iOPaT6NircpsWBAcAQEH2TnB4UrFgkHj6Zifa96iEi8adpnsonmdZcOTExeJfvu7+959PZv3vBQgORRr6JxfcH0RhiwI+K0rYn0tDNmFDw/bnAdOJQiO+eMGH8dcznRIA4FlgfwqOtojIuTUion2e3n8ovVZwqHGXc532F3dxs9fUeIpx/+zf/jVck1851+ti9DXMRz/7afj72i//sfafiggRDhq/jWtIcORmOFLU4GvcNu02jZI28af3Fayg6YtHy0bTnwogDaf+c4ibpEWQvP/33/9dK20aVvKr9xc3FYlpeJuHSZn7Ho66AYeGbs7D1FtbCbc7XBVnq1H3KHMAgGeFMM7F8bFDUcExtKTSHcNTgWHjknvasbkzjo8pOMSYyTVxk3M1YKnhTM/lV87luviXcBqPGmV1t0Zaw1oDag29jVfOLRpPzghbd02HpEvikt++NOq5zd9QPOqW3lvReDSNFlt29jxNm/rRctB72jKy4Weh7AxH37pfuJaq6LYAGdXpAACeBfpmMvquzyI4rIAIZOIPxAfA9IGwOi8nONSoiZs1rNYAi5v8WiOrRlCu23DWzRpQKyosOWNq09SHGmkxvBpWrslTvw0rbpKONI2CLQu5LrMe+ndfPLm8WdJyy5HmMZc2uZ/mKw0zbhmNwx4Kjm4cCA4AeN7YTcExOCaPoIk3fRhsn6f3H0qvNbJDhi81nBJOn9Qtcj01mDmjbA2o+FOxIL8SVt0mNaYal4QT0vQJEneaRkHuIcJCrklaNb1D8eyG4Mjdw4ZJw88CMxwAAAV5lgRHfhajPeMR0p0IDjuOW8SITSM45FfD2fjScHI+SnDYv9PzPmMq5yoO0uuaTnFLZyaUNI2K3Pfjo38bZjfUbSie3RAcQlpGNkxfGU3DHgqOtMNVcfapaACAZ5F9KTjS8Tmcm/HZug+N5Zlx3TKt4EjPxY/OLKQGcxzBoWnQeNRtyJiKn9RN7qHX0vtqmuU8TaMi99PZC702FE8ubxb1q+WUI81jLm3Wj95znDKalLlvGh2rkdbxxM6jYRPVjOAAgGedfSk4hDBGx7E3E9aOzalbSHt065vdEMRQqrEfZfjEwIkxVuMq13UpJL1uw+WMssSlBtPGI/5khqEvTSkSp95fw0s4dZdwEl7d7T1tGlP/ct/c9TSeXN4saTiLXBf3UeWu2LzafO4DwQEAAAAwPggOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDivPSbl//EAQAAAJQEwQEAAADFQXAAAABAcRAcAAAAUBwEBwAAABQHwQEAAADFQXAAAABAcRAcAAAAUBwEBwAAABQHwQEAAADFQXAAAABAcRAcAAAAUBwEBwAAABQHwQEAAADFQXAAAABAcRAcAAAAUBwEBwAAABRnLoJj8e1Tbu3Gmnu845pjZ9Nt315yK28f6Ib5YDV4eXz9WNdtn7F6JyTVPfrAn8d0u81rbjm6L1/frK6NOu6ci3Eecw9DkFW3GuMYZOaymvB++4RQrk9uuZWM229ePucehVLpOZ7suKcbq+7+mcNuMRt+n3Gwys/2R4c7btr+xjs23cNj7fC7xwF39cw1t/Fhu52O7B8yTtw87z59xca1N1RlvQtleOyaexxuJeOI9s84xuT87xavHHV3by+PPU4snb7mtkz1bl85mvW3H9m1uoYWMwqOA275ozX3NDQ3f/jBY+v2qnvk2a4b4qbbWHizHe55FBxi5L4e4OZCjBPBMRanlkO72jiTcTOCI1vWT6KjP6Tc9r/oeM2t3fOJXV9yVxO32zcH8reTuq25+++1w+8a5/LtdFT/qI8d3z4Pmfj2gBdbcBx1DzckFWOOEwcX3EZsh4/vVWP+2smMv30KgmNvmElwLF+NPWVnza299/3E3T/xLK5GMZJU7LMqOM7cqk6MYdABtVheXlTB8fLpMKA9/fxUxk0FR1+ebNtbc3ffyPnZX1z9aD2kdW2MtLbaZMZ9T+hppyP7xyvHo6HzdX3jeN7P80ZLcBx296Xq/ZEX17vFhOOE5uHeJXc5577PQXDsDdMLjiNLblvqTCrtF5llk8CB5gnnq/NNw3yGBMenQVRJHv35G5fcliR85XTtjuAoxYFqUDCzSQ2jBIcQZw38sa8Mcx9xAH/0QV9faniuBIcQZ7Pydf08EtuvHxNl9u3Lz2WmZ93dfyfnd7eYUnDUS8XPFgiOvWFqwVELiZWF4SnrN867rZ0d9/jBkvtCr/UMTotvn3b372y2psRlmebRldPu6sHGX5/f/Lr9992ni7fMEo8/Jlk3DrMa/ik53P+UW//aua3fvVa7Ty44+jr2m27lymqzD+bJTpVG/6QuRyf+g4fb/v2Rz3/f/Xy5nFt2W5t2Wjtf1lXn9OEPyhqvKXPxv3jUXTR+a2Q9+Oa6e2zq5/GDW+5uOhMW24LEs3YnpuXJpi/jo+7yhTV/khuIxxEcjWGu90YM3KsKM16ZLC1KusTtlltpldWb/p5VWKmvRRXlPYa0yp+sfR/x58dD27Jito9hwRHr299z5fSy247l/3Rj2a38xZBRybuN0880PfbQ9jpW/1DjVe/ZGcpDFSbsG7Nt0R/d9vWmu/tV5fbUl2urXxzybShUVfPA1GeELr533m08qPIRDt9m+saPrl8Z+9J0VbMaWiaXf+fbwdfL7svaPU/TDw+72zdM39L0JP1WGKuctPxbR1/f0naSHLaN+76/muzpy45NQ6Il56b914vyq//h24VJR8jT0YxYP3S63X6/Xncbvv/f7alrKMuUgqOZBnx0Luc+gozgWPxF0+ifPqjWBB/da1pUa8CoBwtpaKnfHZ8mFQRmhsUbjnp/iQzscmzM/kQ1H8HRGKpgAJO8y9GK/6CPI05D1/7vrNedavuq3bfQc7/bej8/IIY1WD9AaKeUcjGDVzXQrft7VGGCf3O/xzdPt6dVTf1IB+/UzwdmT09sC2E9P+Zla8MPBLIeHGeUrMCrGEdwRAPuj3qqeuheE5VJU1+y5KNlXQuR2q/2kx233lnf1hmYZhklPOmObXhGCA7ZI+F/nq5XdfX4jsww5tpCEs66jdnPvvjQX38QPW6sBX/r5yqRN07/UOHVLFUO5aEaK1SEuM3YvvT+afuq8+Dr4JQapEaISLq0/nKCY8m3mWppzqcjlsGW9r1k30k9htXtx6ZrduPW6od6D9MPxTjbfjh2Ob1zzq3Xbd0/6Ii/25eaB8QWh72Y8O5fxXag/fvGuarubN/XMdeMZba8pxUc23eqOnka21o9nj/x9WGXJG1aot+67sKB4NhtphQc1ZP+1BXWERyvxQEgGSyEQ3EZwwyE1TKHGKK230WZmvUd8entc+6/wrVomGQQT55Ew2C/s+4eHrfXJ6cWNENHq0N1B/bLsTxSQ29FWFNWB+IUrO9wKwtuKfoNeDW/HjqUrZeh+/knRjNgyqzJXTWkRuCpgQt7dexThB3Ma4May9Yf21faGzYXj/q6FP92YNC0iOG1aQlEg91ZJ471mjWcB9zln51y97+KI42t+4F7TVomrbyLIauXGNtxqzHt7E94J/q3S41hNk3iM/4yjCU4/GHFUNstV25dt/H7mSeWXyosBgXHK2+6L87dqo1ic59x8rATZqas28WT2l/W3f0jzfVaNMS2cD3sl/GHb1e2/3QEh449T3x8rWXjA+7T38XN8sbIr96WC1bYVCzJDIYvr+2rs+1RafqhryPbRg+dd1uhDO1s4KTlNNQ2MmTFwmt1Gh9/frpVtotvn6/7y8aZWD5TCg6Jo20nGgHZvOll0mJFjn0IRXDsOlMKDh3w5yU4FtyGPHVmp567HaEexPwgnp3Or4npfLLm7uZez50DdeOVAVieyHLUb6gIaX7iXoUwUDXxKl/cqIxdU1bVZkqZfr7dElEVi7Fsm82W6f2avQ0bC5kykSWw4Or9x/i141ZT/23/9dOpLgWoIfVPq9cTv4KWVz1roYNIz+azyn+TlgptfyMObyha+4t67zV5mQiXz0VDtnnLbcSZjI5g1rDJzMX1K5XRa90vvh6bNc4GrY9hwZFrT0NGZZZ+5un06Yq6f4w4RLw0BmogD7rfo6d9dfuL4I1PnL16vOIFjvyReSumKtdmTKs28ubbfZPGZoZK62Vrsczr2HU/7H192ozHE5fTUNvIkBMEusetZ2yqxwofJpTPtILD5yl9m6vT/mJfys8Y6uwngmO3mVJwaOOcl+BoWHz9x+7qe6fc6uIl9/Cmfb3WdARtjHKEqcVb7uHiKXf99dRYNAONHE9lWvHGkrt9/M3RA+iY1INyJi950o49oqPHN2Pq+DXvupSSolOddadM49fZqb6BRY1vU7edwcyiAmPjmvtUznVQ0KnWFJ3SVYEy0BYCJ6uBs72DvxEcOYEnU83rVxa6a+y995q8TCoOuJUV07680eyKpgPu9krl3uQh1knnOyNxpi83oBrU8AwLDt13lHPL5TPjNnY/8/SUbS04coJc+uPNa+7uqb59R908hP0O/uhtL2poUyN20Av1uqq8MKyXXRvSdq7lXC/xJuhUvtZrLUDl2Nl023eW3f2F425pTt8Y0fTk3mZJ0z55OQ21jQw5QdBX9ooKEn2wzMWh5Nx0bNGxw5K2P50d7knLSuiTPWMaFGNKwdE8Ec5tD8fR8+5Ra30tHpubcW2x3RFkc9ajZgRpjo3V9uYh2Vx53azF6+EHwK3r7Wm/aZhdcKjx7OnosePV8VsjMHTUs0UT3s+TH3j7/Mf49H46KIw6dCDoMVQNlRhovx47Og9Zeu81eZkoi14QaX1sLSazG4q+Tq0brKOIyr0GWhmK5qk5hxqeYcGRy8vkbmP3s56ynbx/CP3pHBlfrxE74J/qq7BhxjOZ3RDy7X700dRD9fEz+zEsPZ7eu9ZeqpuCvjaYc5u8nIbaRoYhQdBj5DtjRW9d9bgNjRWp24i0VOWTL0sox5SCo5luHPmWystH3H3/VCubztZ0v0TaON7wDTGMafJmxpJb/bej7uo7OgsxoiPIOvCCzIYYUdF5e0Co1vZXryybjVMyPZmbLh2f2QXHiPzFp4Y6fu2IY7//nsY/wwxH7qNS78X06FN5rNu2QBhgaBCJhKeR1nLbvAXHlDMcsnm3qn5vxIS8IauncONUczWd3TPYxRmjoddj1RDuhuCoGdXPesp23oJj2hmOZkOn/OOPr853HjZSo12dj95Tk2Px9SPuy3NLbt1u6vR9JLe8MS5p+obcnucZjmyeUrcRMxzVPriePgjFmFpwNOva7Q1aKYv+6S40QruulzaOeJ4VL7oWV3eEI37w3/GdOPcU6MVN0EGxIS34DuDbVc74LS7Ep86+zjEmswsO3cPhHxoz+wd0rb+Ovy4Pb9wyT8FhnVSmrz/v+7JpMzs16R6OrQvdaeh6U6SWsQ4UXy9nd7kHYyuzSx9GoTc0iESqfSl2cJi34Ji8TKTedPOuxHdV31BJNiIquma+sXC6Eh+9xifWl2+XfUJe62N6wZHpO2oM6nAT9DO51lO28xYctVHrKb/sHo6DKih9en9xuN5gmG6GTY22pj3/QbIoImUj9c/kfMGf+3vn9gzUX+WcsL0mpOkbdJu4nIbaTYacIJh2D0fm4UkFUyv+obEiddNxMpuWTPuFXWF6weEZ+aXRM8079K3OnTaOeO4eJIO1eUPAdoS6s6Sb2V457TbCwBKNsRqKzqZRn7YPo6HMDibjM7vgMKIseUOifqvDH038zb6Bp3fOt7+ZYd6cqHeCZ+43/VsqPg6bvnrnue242pklze36ad66MSJ1aBBR4kDWbJabt+CYvEzqOpOntVAH5u2c3KyZvsWyvh7KICfelCBkOvs7GqYXHI24bRvbN93KzdiXp+lnci1+2jwV93MXHLXbuG9fNP1F0hD812++tR+WOkbbftzwpB3fzJsOtUHXN+182SabRhffjvfrEeHj0knfoNuk5aSfNs8JzAzZ2YkJ31IxD0+tt8YO+fYVi3dqwWHrvZUW84ZRT1lCOWYSHGGguhGtixz6rre8013VdTi2E8PTaRz1koo/dLNhPRW56R7r04k2jh7/OtVbDyyeWhT5Q9+N39I16Tn8/w3zEBzSUesB3z/9y3vm9bvrO7HT2Pjf8E9sut8l8x2O/I5/e78R35zY9E8Fplx0EJHZok76/NH+7ofniBd6af30+R8aRGriDET9JDR/wTFRmdTtz7dJ+xZMbchyA1nz7ZqWoc4Rnk77p/K1PiYXHEYo+aPaDBn76pN1tx3SZ8JN0M/qpTWfd2mPk3yHo8uIPHjhOvR9ie2PmnQ1bxKpMKwIr6rKIa+ix2s5g37dP5W3y8t8yyF9C0qNsBzxuw/S7qt+mXmDaUJy6Rtym6ScQhzhtV6fT/nuSe93OCJZweEZ9R2O1qv8ZtO1GVdCeT3w7VGuTy04PG8Y4RLbr9ZdGMt6yhLKMaPgqJCNZevSULShySGD9p1rbrUz8+HJNA7ZNNr9mt8l9+XbzdNE66kw/YKcP+Rrdg/PpV++9Io2fGnUJM7E3fibjvkIDiH5ImoovyW3crrq2J34ZTNs8qVRGVTkK3rt/I+6n4kg81VNoR7MTlZfGtUj/2XTiH5p1ESf9T+W4NA9Qz4PIW0lBIcwTpnkP/qltAxZUo7NK8Sj9j35gdK36750ziI4pD9cPbPU2gj6+MGyu+37QhVvEm7sflY9fNT+4psEJQSH0PkCqvSX9Aua6bdSTHhJr85ISdqkPvoMun49tHUv6ZuZ8UPHMVtekq61zps4k9OXviG3scpJ/R695B7V3Xt9+FPrfYJDGLfvC+k4JmPzjQXf32Ifn0VwCOkXj2N/XgntEsGx28xFcMDzzdBAB+OjgiP3WiMAwPMOggNGguCYA7rvYcZ1fACAZxUEB4wEwTE9y1fWq49chSnd/AenAABeBBAcMBIEx/Rc1tdln+y4rWSTHgDAiwSCAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKA6CAwAAAIqD4AAAAIDiIDgAAACgOAgOAAAAKM5LJ7/zLQcAAABQEgQHAAAAFOZb7v8BqdMTmQZkp+4AAAAASUVORK5CYII="},3562:function(e,A,t){A.Z=t.p+"assets/images/pandawa_cli-cd5b25f2038b57d1d50fb88757bb3d00.png"},4267:function(e,A,t){A.Z=t.p+"assets/images/php_ini_extensions-ca5d82ccd59c792e7bb8b97558871100.png"}}]);