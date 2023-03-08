{
  "name": "vuero",
  "version": "1.2.1",
  "private": "true",
  "license": "MIT",
  "scripts": {
    "dev": "vite",
    "staging": "vite build --mode staging",
    "dev:force": "vite --force",
    "preview": "vite preview",
    "build": "vite build",
    "lint": "run-s lint:doc:fix lint:eslint:fix lint:stylelint:fix lint:prettier:fix",
    "lint:prettier": "prettier --check \"./src/**/*.(ts|vue|css|scss)\"",
    "lint:prettier:fix": "prettier --write \"./src/**/*.(ts|vue|css|scss)\"",
    "lint:eslint": "eslint --ext .ts,.vue ./src",
    "lint:eslint:fix": "eslint --fix --ext .ts,.vue ./src",
    "lint:stylelint": "stylelint ./src/**/*.{vue,css,scss}",
    "lint:stylelint:fix": "stylelint ./src/**/*.{vue,css,scss} --fix",
    "lint:doc:fix": "run-s lint:doc:fix:*",
    "lint:doc:fix:eslint": "eslint --fix --ext .md ./documentation",
    "lint:doc:fix:prettier": "prettier --write \"./documentation/**/*.(md)\"",
    "test": "run-p test:lint",
    "test:tsc": "vue-tsc --noEmit",
    "test:lint": "run-p lint:eslint lint:stylelint lint:prettier",
    "e2e": "cypress run"
  },
  "dependencies": {
    "@ckeditor/ckeditor5-build-classic": "28.0.0",
    "@ckeditor/ckeditor5-vue": "2.0.1",
    "@fullcalendar/core": "^5.10.1",
    "@fullcalendar/daygrid": "^5.10.1",
    "@fullcalendar/interaction": "^5.10.1",
    "@fullcalendar/timegrid": "^5.10.1",
    "@fullcalendar/vue3": "^5.10.1",
    "@googlemaps/js-api-loader": "^1.13.1",
    "@iconify/iconify": "2.0.2",
    "@mapbox/mapbox-gl-geocoder": "^4.7.4",
    "@popperjs/core": "2.9.2",
    "@vueform/multiselect": "1.5.0",
    "@vueform/slider": "1.0.5",
    "@vueuse/core": "5.0.3",
    "@vueuse/head": "0.6.0",
    "apexcharts": "3.27.1",
    "axios": "^0.21.4",
    "billboard.js": "3.0.3",
    "bulma": "0.9.3",
    "dayjs": "1.10.5",
    "dragula": "3.7.3",
    "dropzone": "5.9.2",
    "filepond": "4.28.2",
    "filepond-plugin-file-validate-size": "2.2.4",
    "filepond-plugin-file-validate-type": "1.2.6",
    "filepond-plugin-image-crop": "2.0.6",
    "filepond-plugin-image-edit": "1.6.3",
    "filepond-plugin-image-exif-orientation": "1.0.11",
    "filepond-plugin-image-preview": "4.6.6",
    "filepond-plugin-image-resize": "2.0.10",
    "filepond-plugin-image-transform": "3.7.6",
    "imask": "6.0.7",
    "mapbox-gl": "2.3.0",
    "markdown-it-emoji": "2.0.0",
    "moment": "^2.29.1",
    "notyf": "3.10.0",
    "nprogress": "0.2.0",
    "photoswipe": "4.1.3",
    "simple-datatables": "3.0.2",
    "simplebar": "6.0.0-beta.10",
    "simplebar-vue": "2.0.0-beta.10",
    "sweetalert": "^2.1.2",
    "sweetalert2": "^11.4.8",
    "tiny-slider": "2.9.3",
    "tippy.js": "6.3.1",
    "tslib": "2.3.0",
    "v-mask": "^2.3.0",
    "vue": "3.0.11",
    "vue-drawing-canvas": "^1.0.9",
    "vue-i18n": "9.1.4",
    "vue-router": "4.0.6",
    "vue-scrollto": "2.20.0",
    "vue-tippy": "6.0.0-alpha.29",
    "vue3-apexcharts": "1.4.0",
    "vue3-cookies": "^1.0.6"
  },
  "devDependencies": {
    "@iconify/json": "1.1.358",
    "@intlify/vite-plugin-vue-i18n": "2.2.1",
    "@types/dragula": "3.7.0",
    "@types/mapbox__mapbox-gl-geocoder": "^4.7.0",
    "@types/mapbox-gl": "^2.3.0",
    "@types/markdown-it": "12.0.2",
    "@types/node": "15.12.4",
    "@types/nprogress": "0.2.0",
    "@types/prismjs": "1.16.5",
    "@types/simplebar": "5.3.3",
    "@typescript-eslint/eslint-plugin": "4.27.0",
    "@typescript-eslint/parser": "4.27.0",
    "@vitejs/plugin-vue": "1.2.3",
    "@vue/compiler-sfc": "3.1.1",
    "cross-env": "7.0.3",
    "cypress": "7.5.0",
    "eslint": "7.29.0",
    "eslint-config-prettier": "8.3.0",
    "eslint-plugin-md": "1.0.19",
    "eslint-plugin-prettier-vue": "3.1.0",
    "eslint-plugin-vue": "7.11.1",
    "gray-matter": "4.0.3",
    "lint-staged": "11.0.0",
    "markdown-it": "^12.3.2",
    "markdown-it-anchor": "8.0.3",
    "npm-run-all": "4.1.5",
    "plyr": "3.6.8",
    "prettier": "2.3.1",
    "prismjs": "^1.29.0",
    "rimraf": "3.0.2",
    "rollup": "2.52.1",
    "sass": "1.32.13",
    "stylelint": "13.13.1",
    "stylelint-config-prettier": "8.0.2",
    "stylelint-config-standard": "22.0.0",
    "stylelint-scss": "3.19.0",
    "typescript": "4.3.4",
    "vite": "^2.9.15",
    "vite-imagetools": "^4.0.9",
    "vite-plugin-components": "0.11.2",
    "vite-plugin-fonts": "0.2.2",
    "vite-plugin-imagemin": "^0.6.1",
    "vite-plugin-pages": "0.13.2",
    "vite-plugin-purge-icons": "0.7.0",
    "vite-plugin-pwa": "0.8.1",
    "vite-plugin-radar": "0.2.0",
    "vue-tsc": "^0.2.3",
    "yorkie": "2.0.0"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.scss": [
      "stylelint",
      "prettier --write"
    ],
    "*.md": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}