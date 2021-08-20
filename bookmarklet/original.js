// Water.css Bookmarklet
// ---------------------

const $$ = (selector) => document.querySelectorAll(selector)
const createElement = (tagName, properties) => Object.assign(document.createElement(tagName), properties)

// Remove all CSS stylesheets, external and internal
$$('link[rel="stylesheet"],style').forEach((el) => el.remove())

// Remove all inline styles
$$('*').forEach((el) => (el.style = ''))

// Add water.css and responsive viewport (if necessary)
document.head.append(
  createElement('link', {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
  }),
  !$$('meta[name="viewport"]').length && createElement('meta', {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1.0'
  })
)

// css required to support theme switching !
const themeCSS = `/* * light theme colors */
:root[theme="light"] {
--background-body: #fff;
--background: #efefef;
--background-alt: #f7f7f7;
--selection: #9e9e9e;
--text-main: #363636;
--text-bright: #000;
--text-muted: #70777f;
--links: #0076d1;
--focus: rgba(0, 150, 191, 0.67);
--border: #dbdbdb;
--code: #000;
--animation-duration: 0.1s;
--button-hover: #ddd;
--scrollbar-thumb: #d5d5d5;
--scrollbar-thumb-hover: #c4c4c4;
--form-placeholder: #949494;
--form-text: #000;
--variable: #39a33c;
--highlight: #ff0;
--select-arrow: url(
  data:image/svg + xml;charset=utf-8,
  %3Csvgxmlns="http://www.w3.org/2000/svg"height="63"width="117"fill="%23161f27"%3E%3Cpathd="M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z"/%3E%3C/svg%3E
);
}

/* * dark theme colors! */
:root[theme="dark"] {
--background-body: #202b38;
--background: #161f27;
--background-alt: #1a242f;
--selection: #1c76c5;
--text-main: #dbdbdb;
--text-bright: #fff;
--text-muted: #a9b1ba;
--links: #41adff;
--focus: rgba(0, 150, 191, 0.67);
--border: #526980;
--code: #ffbe85;
--animation-duration: 0.1s;
--button-hover: #324759;
--scrollbar-thumb: var(--button-hover);
--scrollbar-thumb-hover: #415c73;
--form-placeholder: #a9a9a9;
--form-text: #fff;
--variable: #d941e2;
--highlight: #efdb43;
--select-arrow: url(
  data:image/svg + xml;charset=utf-8,
  %3Csvgxmlns="http://www.w3.org/2000/svg"height="63"width="117"fill="%23efefef"%3E%3Cpathd="M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z"/%3E%3C/svg%3E
);
}`

document.body.append(
  createElement('style', {
    innerText: themeCSS
  })
)

const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'

const toggleBtn = createElement('div', {
  innerHTML: sunSVG,
  style: 'position: fixed !important; top: 50px !important; right: 100px; cursor: pointer;'
})

const toggleTheme = () => {
  const rootElm = document.querySelector(':root')
  const theme = rootElm.getAttribute('theme')

  if (theme === 'light' || theme === null) {
    rootElm.setAttribute('theme', 'dark')
    toggleBtn.innerHTML = moonSVG
  } else {
    rootElm.setAttribute('theme', 'light')
    toggleBtn.innerHTML = sunSVG
  }
}

toggleBtn.onclick = toggleTheme

document.body.append(toggleBtn)
