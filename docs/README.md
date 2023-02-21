📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PDF Reader Component

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

## Description

The PDF Reader Component renders a PDF file in a store page.

![Inkedscreencapture-heric-itgloberspartnercl-myvtex-centro-de-ayuda-2023-02-14-09_02_29](https://user-images.githubusercontent.com/17723079/218762691-7a289823-a22f-46d1-b988-a3cb4b31df66.jpg)

## Configuration 

1. Add the Pdf Reader app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.pdf-reader": "0.x"
  }
 ```
 
2. install node modules, go to `react` folder and run `yarn`
 
3. Add the `pdf-reader` block to your store-theme, for example:
```json
 {
    "flex-layout.col#help__center__content": {
    "title": "help center desktop layout",
    "children": [
      "pdf-reader"
    ],
    "props": {
      "blockClass": "help__center__desktop--layout--container--col",
      "width": "100%"
    }
  },
   "pdf-reader": {
    "title": "pdf reader",
    "props": {
      "pdfUrl": "assets/documents/superdry_centro_de_ayuda.pdf",
      "width": "100%",
      "height": 900,
      "blockClass": "help__center__desktop--layout--container--col--pdf"
    }
  }
 }
   ```
| Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `pdf-reader` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  This is the top-level block that must be declared in a `store-theme` block to render a pdf viewer   |

### Pdf-reader props

| Prop name    | Type            | Description    | Default value                                                                                       |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `pdfURL`        | `string`       |  Define the url to render in the pdf-reader file       | `undefined`              |
| `width`        | `number`       | Define the width  to render pdf-reader apps      | `undefined`              |
| `height`        | `number`       | Define the height to render pdf-reader apps         | `undefined`              |

## Customization

No CSS Handles are available yet for the app customization.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Heric Olier

---

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
