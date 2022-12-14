/* eslint-disable linebreak-style */
import { createGlobalStyle } from 'styled-components';
import colors from '../utils/colors';

const GlobalStyle = createGlobalStyle`



@font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(fonts/AntDesign.ttf) format('truetype')}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(fonts/EvilIcons.ttf) format('truetype')}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(fonts/Feather.ttf) format('truetype')}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(fonts/FontAwesome.ttf) format('truetype')}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5.ttf) format('truetype')}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(fonts/Ionicons.ttf) format('truetype')}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialIcons.ttf) format('truetype')}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(fonts/SimpleLineIcons.ttf) format('truetype')}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(fonts/Zocial.ttf) format('truetype')}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
font-family: 'Nunito', sans-serif;

a{
  color: ${colors.link};
}

[aria-dropeffect=copy]:hover {
  cursor: copy;
}

[aria-dropeffect=move]:hover {
  cursor: move;
}

[aria-dropeffect=link]:hover {
  cursor: alias;
}

[aria-dropeffect=execute]:hover {
  cursor: pointer;
}

[aria-dropeffect=popup]:hover {
  cursor: context-menu;
}

[aria-busy=true]:hover {
  cursor: wait;
}

[aria-haspopup=true]:hover {
  cursor: context-menu;
}

[aria-hidden=true] {
  visibility: hidden;
}

input[aria-invalid=false]:focus,
select[aria-invalid=false]:focus,
textarea[aria-invalid=false]:focus,
input:valid:focus,
select:valid:focus,
textarea:valid:focus {
  border: 1px solid;
  box-shadow: 0px 0px 2px 0;
  -webkit-box-shadow: 0px 0px 2px 0;
  -moz-box-shadow: 0px 0px 2px 0;
}

input[aria-invalid=true],
select[aria-invalid=true],
textarea[aria-invalid=true],
input:invalid,
select:invalid,
textarea:invalid {
  border: 1px solid;
  box-shadow: 0px 0px 2px 0;
  -webkit-box-shadow: 0px 0px 2px 0;
  -moz-box-shadow: 0px 0px 2px 0;
}

img[alt][longdesc] {
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-size: cover;
}

img[alt][longdesc]:hover {
  mask: none;
  mask-image: none;
}

[download]:focus:before,
[download]:focus:after,
[target=_blank]:focus:before,
[target=_blank]:focus:after,
[href]:focus:before,
[href]:focus:after,
[draggable=true]:focus:before,
[draggable=true]:focus:after,
[dropzone]:focus:before,
[dropzone]:focus:after,
[aria-checked]:focus:before,
[aria-checked]:focus:after,
[aria-dropeffect]:focus:before,
[aria-dropeffect]:focus:after,
[aria-expanded]:focus:before,
[aria-expanded]:focus:after,
[aria-grabbed]:focus:before,
[aria-grabbed]:focus:after,
[aria-haspopup=true]:focus:before,
[aria-haspopup=true]:focus:after,
[aria-orientation]:focus:before,
[aria-orientation]:focus:after,
[aria-pressed]:focus:before,
[aria-pressed]:focus:after,
[aria-selected]:focus:before,
[aria-selected]:focus:after,
[title]:before,
[title]:after,
[accesskey]:before,
[accesskey]:after,
[draggable=true]:before,
[draggable=true]:after,
[aria-busy=true]:before,
[aria-busy=true]:after,
[aria-checked]:before,
[aria-checked]:after,
[aria-expanded]:before,
[aria-expanded]:after,
[aria-grabbed]:before,
[aria-grabbed]:after,
[aria-haspopup=true]:before,
[aria-haspopup=true]:after,
[aria-label]:before,
[aria-label]:after,
[aria-level]:before,
[aria-level]:after,
[aria-pressed]:before,
[aria-pressed]:after,
[aria-selected]:before,
[aria-selected]:after,
[aria-sort]:before,
[aria-sort]:after,
[role]:before,
[role]:after,
[lang]:before,
[lang]:after,
[xml\:lang]:before,
[xml\:lang]:after {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
  text-indent: -9999px;
}

html {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.button {
  box-sizing: border-box;
  margin: 0;
}

.button[class^=slide]::after {
  transition: all 0.35s;
}

.button[class^=slide]:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}

.button.slide_from_left::after {
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

a {
  background-color: transparent;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: 'Nunito', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  font-family: 'Nunito', sans-serif, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

.money-input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
textarea:focus, input:focus {
  box-shadow: 0 0 0 0 !important;
  outline: 0 !important;
  border: 0px !important;
}
`;

export default GlobalStyle;
