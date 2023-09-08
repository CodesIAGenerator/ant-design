"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{438746:function(qn,hn,t){t.d(hn,{Z:function(){return xn}});var dn=t(97857),y=t.n(dn),gn=t(952677),v=t.n(gn),In=t(805574),rn=t.n(In),kn=t(830084),d=t(667294),g=t(302559);function H(c){return c.replace("-cn","").replace(/\/$/,"")}function xn(){var c=(0,kn.TH)(),G=c.search,Pn=(0,g.Z)(),p=rn()(Pn,2),w=p[1],f=d.useCallback(function(n,I){var O=H(n);if(w==="cn"&&(O="".concat(O,"-cn")),G&&(O="".concat(O).concat(G)),I){var $;v()(I)==="object"?$=I[w]:$=I,O="".concat(O,"#").concat($)}return O},[w,G]);return y()(y()({},c),{},{pathname:H(c.pathname),getLink:f})}},148050:function(qn,hn,t){t.d(hn,{Z:function(){return xn}});var dn=t(168400),y=t.n(dn),gn=t(667294),v=t(186548),In=t(65630),rn=t(879587),kn=t(785893),d,g="https://github.com/ant-design/ant-design/edit/master/",H=(0,In.kc)(function(c){var G=c.token,Pn=c.css,p=G.colorIcon,w=G.colorText,f=G.iconCls;return{editButton:Pn(d||(d=y()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),f,p,w)}});function xn(c){var G=c.title,Pn=c.filename,p=H(),w=p.styles;return(0,kn.jsx)(rn.Z,{title:G,children:(0,kn.jsx)("a",{className:w.editButton,href:"".concat(g).concat(Pn),target:"_blank",rel:"noopener noreferrer",children:(0,kn.jsx)(v.Z,{})})})}},472638:function(qn,hn,t){var dn=t(97857),y=t.n(dn),gn=t(952677),v=t.n(gn),In=t(805574),rn=t.n(In),kn=t(513769),d=t.n(kn),g=t(667294),H=t(830084),xn=t(574865),c=t.n(xn),G=t(785893),Pn=["to","children"],p=(0,g.forwardRef)(function(w,f){var n=w.to,I=w.children,O=d()(w,Pn),$=(0,g.useTransition)(),wn=rn()($,2),Tn=wn[0],P=wn[1],en=(0,H.s0)(),vn=(0,H.TH)(),zn=vn.pathname,un=(0,g.useMemo)(function(){return v()(n)==="object"?"".concat(n.pathname||zn).concat(n.search||"").concat(n.hash||""):n},[n]),_n=function(Un){un.startsWith("http")||!Un.metaKey&&!Un.ctrlKey&&!Un.shiftKey&&(Un.preventDefault(),P(function(){en(un)}))};return(0,g.useLayoutEffect)(function(){Tn?c().start():c().done()},[Tn]),(0,G.jsx)("a",y()(y()({ref:f,href:un,onClick:_n},O),{},{children:I}))});hn.Z=p},334230:function(qn,hn,t){t.r(hn),t.d(hn,{default:function(){return br}});var dn=t(805574),y=t.n(dn),gn=t(294184),v=t.n(gn),In=t(727484),rn=t.n(In),kn=t(533852),d=t(830084),g=t(667294),H=t(715778),xn=t(879348),c=t(302559),G=t(438746),Pn=t(168400),p=t.n(Pn),w=t(370917),f=t(65630),n=t(785893),I,O={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},$=function(){var e=(0,f.Fg)(),r=function l(u){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return j<=10?`
.palette-`.concat(u,"-").concat(j,` {
  background: `).concat(e["".concat(u,"-").concat(j)],`;
}
`).concat(l(u,j+1),`
    `):""},i=function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return u<=13?`
.palette-gray-`.concat(u,` {
  background: `).concat(O[u],`;
}
`).concat(l(u+1),`
    `):""};return(0,n.jsx)(w.xB,{styles:(0,w.iv)(I||(I=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},wn=$,Tn,P=function(){return(0,n.jsx)(w.xB,{styles:(0,w.iv)(Tn||(Tn=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},en,vn=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(en||(en=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},zn,un=function(){var a=(0,f.Fg)(),e=a.headerHeight,r=a.margin;return(0,n.jsx)(w.xB,{styles:(0,w.iv)(zn||(zn=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
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
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      html {
        scroll-padding-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }
    `])),e+r)})},_n=t(510274),oe,Un=function(){var e=(0,f.Fg)(),r=e.antCls,i=e.colorPrimary;return(0,n.jsx)(w.xB,{styles:(0,w.iv)(oe||(oe=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,r,r,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,r,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),r,r,r,i,new _n.C(i).setAlpha(.75).toHex8String(),r,r,e.colorWhite,r,new _n.C(i).setAlpha(.75).toHexString(),r,r,new _n.C(i).setAlpha(.75).toHexString(),r,r,r,r,new _n.C(i).setAlpha(.6).toHexString(),r,r,r)})},ie=Un,le,se=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(le||(le=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},En,m=function(){var e=(0,f.Fg)(),r=e.antCls,i=e.iconCls;return(0,n.jsx)(w.xB,{styles:(0,w.iv)(En||(En=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,r,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,i,e.colorTextSecondary,e.colorText,r,r,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,r,r,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,i,e.colorBgContainer,i,e.green6,e.colorBgContainer,e.purple3,e.purple6,r)})},S=m,o,s=function(){var a=(0,f.Fg)(),e=a.antCls,r=a.iconCls;return(0,n.jsx)(w.xB,{styles:(0,w.iv)(o||(o=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,e,a.colorPrimary,r,e)})},h,E=function(){var a=(0,f.Fg)(),e=a.iconCls;return(0,n.jsx)(w.xB,{styles:(0,w.iv)(h||(h=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},z,R=function(){return(0,n.jsx)(w.xB,{styles:(0,w.iv)(z||(z=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},F,b=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(F||(F=p()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},J,_=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(J||(J=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},Q,pn=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(Q||(Q=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},ln,sn="dumi-default-",bn=function(){var a=(0,f.Fg)();return(0,n.jsx)(w.xB,{styles:(0,w.iv)(ln||(ln=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),sn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,sn,a.colorBgElevated,a.colorBgElevated,sn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},U,Mn=function(){return(0,n.jsx)(w.xB,{styles:(0,w.iv)(U||(U=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},mn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{}),(0,n.jsx)(un,{}),(0,n.jsx)(ie,{}),(0,n.jsx)(se,{}),(0,n.jsx)(S,{}),(0,n.jsx)(s,{}),(0,n.jsx)(E,{}),(0,n.jsx)(R,{}),(0,n.jsx)(b,{}),(0,n.jsx)(_,{}),(0,n.jsx)(pn,{}),(0,n.jsx)(Mn,{}),(0,n.jsx)(wn,{}),(0,n.jsx)(P,{}),(0,n.jsx)(bn,{})]})},an=mn,Dn=t(857278),Rn=t(430932),yn=t(985093),Nn=t(115668),Fn=t(642207),Xn=t(301210),on=t(13923),Bn=t(825035),Yn=t(937993),ce=t(448118),Jn=t(938545),ve=t(569980),re=t(391298),be=t(630770),Gn=t(438199),de=t(693399),ne="ant-where-checker",Me={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function ke(){var a=(0,c.Z)(Me),e=y()(a,1),r=e[0],i=g.useState(!0),l=y()(i,2),u=l[0],j=l[1];return g.useEffect(function(){var C=document.createElement("p");C.className=ne,C.style.position="fixed",C.style.pointerEvents="none",C.style.visibility="hidden",C.style.width="0",document.body.appendChild(C),(0,de.updateCSS)(`
:where(.`.concat(ne,`) {
  content: "__CHECK__";
}
    `),ne);var k=getComputedStyle(C),x=k.content;j(String(x).includes("CHECK")),document.body.removeChild(C),(0,de.removeCSS)(ne)},[]),u?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[r.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:r.whereDocUrl,children:r.whereDocTitle})]})})}var ae,ue,Ee={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Oe=function(){var e=(0,g.useContext)(Gn.Z),r=e.isMobile;return(0,f.kc)(function(i){var l=i.token,u=i.css,j=new _n.C((0,be.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(ae||(ae=p()([`
      background: `,`;
    `])),j),footer:u(ue||(ue=p()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),j,l.colorTextSecondary,l.colorText,r?60:0,r?20:0,l.marginXXL,l.fontSize)}})()},He=function(){var e=(0,G.Z)(),r=(0,c.Z)(Ee),i=y()(r,2),l=i[0],u=i[1],j=Oe(),C=j.styles,k=e.getLink,x=g.useMemo(function(){var T=u==="cn",D={title:(0,n.jsx)(d._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:T?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:T?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:T?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(d._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(d._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(d._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(d._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(d._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(d._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(d._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(d._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},L={title:(0,n.jsx)(d._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Rn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(yn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Nn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Nn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(d._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};T&&L.items.push({icon:(0,n.jsx)(Fn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.work_with_us"}),url:k("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:d.rU});var X={title:(0,n.jsx)(d._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Xn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(on.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.change-log"}),url:k("/changelog"),LinkComponent:d.rU},{icon:(0,n.jsx)(Bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.faq"}),url:k("/docs/react/faq"),LinkComponent:d.rU},{icon:(0,n.jsx)(Yn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(ce.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Jn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},nn={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(d._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(d._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(d._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(d._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(d._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(d._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(ve.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.theme"}),url:k("/theme-editor"),LinkComponent:d.rU}]};return[D,L,X,nn]},[u,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(re.Z,{columns:x,className:C.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(ke,{})]})},Le=He,Re=t(97857),K=t.n(Re),Pe=t(9783),ye=t.n(Pe),De=t(660532),Ze=t(24569),Fe=t(469181),We=t(344682),$e=t(664095),ge=t(883458),_e=t(316165),q="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Cn=function(e){return(0,n.jsx)(_e.Z,K()(K()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?q:jn})})}))},Vn=Cn,cn=t(373638),we,fe,ee=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.headerHeight,l=e.colorTextHeading,u=e.fontFamily,j=e.mobileMaxWidth;return{logo:r(we||(we=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,l,u,i,l,j),title:r(fe||(fe=p()([`
      line-height: 32px;
    `])))}}),xe=function(e){var r=e.isZhCN,i=(0,d.TH)(),l=i.search,u=ee(),j=u.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(d.rU,{to:cn.J1("/",r,l),className:j.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:j.title,children:"Ant Design"})]})})},Ne=xe,Be=t(280882),lo=t(963918),pe=t(905303),Qe,qe,nt,et,tt=(0,f.kc)(function(a){var e=a.css,r=a.token;return{smallStyle:e(Qe||(Qe=p()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(qe||(qe=p()([`
    color: `,`;
  `])),r.colorTextQuaternary),downOutlined:e(nt||(nt=p()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(et||(et=p()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),ot=function(){var e=tt(),r=e.styles;return(0,n.jsxs)("span",{className:r.smallStyle,children:["(",(0,n.jsx)(d._H,{id:"app.implementation.community"}),")"]})},rt=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(ot,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(ot,{})]}),key:"vue"}]},so=function(e){var r=e.isRTL,i=tt(),l=i.styles;return(0,n.jsx)(lo.Z,{menu:{items:rt()},placement:"bottomRight",children:(0,n.jsxs)(pe.ZP,{size:"small",children:[(0,n.jsx)(d._H,{id:"app.header.menu.more"}),(0,n.jsx)(Be.Z,{className:v()(r?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},co=so,uo=t(719632),me=t.n(uo),at=t(923232),te=t(472638),it,lt,po={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},mo=(0,f.kc)(function(a){var e=a.token,r=e.antCls,i=e.iconCls,l=e.fontFamily,u=e.headerHeight,j=e.menuItemBorder,C=e.colorPrimary,k=e.colorText;return{nav:(0,f.iv)(it||(it=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,r,r,r,40+12*2,u,u,j,k,r,i,r,C,r,r),popoverMenuNav:(0,f.iv)(lt||(lt=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),ho=function(a){var e,r,i,l=a.isZhCN,u=a.isMobile,j=a.responsive,C=a.directionText,k=a.onLangChange,x=a.onDirectionChange,T=(0,d.TH)(),D=T.pathname,L=T.search,X=(0,c.Z)(po),nn=y()(X,1),W=nn[0],A=(0,d.yh)(),Z=((e=A["/docs/blog"])===null||e===void 0||(r=e[0])===null||r===void 0?void 0:r.children)||[],N=mo(),M=N.styles,V=u?"inline":"horizontal",On=D.split("/").filter(function(B){return B}).slice(0,-1).join("/"),Ln=On||"home";D.startsWith("/changelog")?Ln="docs/react":D.startsWith("/docs/resources")&&(Ln="docs/resources");var Hn,Wn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(d._H,{id:"app.header.lang"}),onClick:k,key:"switch-lang"},{label:C,onClick:x,key:"switch-direction"}].concat(me()(rt()));u?Hn=Wn:j==="crowded"&&(Hn=[{label:(0,n.jsx)(De.Z,{}),key:"additional",children:me()(Wn)}]);var Kn=[{label:(0,n.jsx)(te.Z,{to:cn.J1("/docs/spec/introduce",l,L),children:W.design}),key:"docs/spec"},{label:(0,n.jsx)(te.Z,{to:cn.J1("/docs/react/introduce",l,L),children:W.development}),key:"docs/react"},{label:(0,n.jsx)(te.Z,{to:cn.J1("/components/overview/",l,L),children:W.components}),key:"components"},Z.length?{label:(0,n.jsx)(te.Z,{to:cn.J1(Z.sort(function(B,fn){return B.frontmatter.date>fn.frontmatter.date?-1:1})[0].link,l,L),children:W.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(te.Z,{to:cn.J1("/docs/resources",l,L),children:W.resources}),key:"docs/resources"},l?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(me()((i=Hn)!==null&&i!==void 0?i:[]));return(0,n.jsx)(at.Z,{mode:V,selectedKeys:[Ln],className:M.nav,disabledOverflow:!0,items:Kn,style:{borderRight:0}})},st=t(879587),ct,dt,ut,pt,mt,je="1.2em",go=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.colorText,l=e.colorBorder,u=e.colorBgContainer,j=e.colorBgTextHover,C=e.borderRadius,k=e.controlHeight,x=e.motionDurationMid;return{btn:r(ct||(ct=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,l,k,k,C,x,x,j,je,je,je),innerDiv:r(dt||(dt=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),je,je),labelStyle:r(ut||(ut=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),je,i,i),label1Style:r(pt||(pt=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,u),label2Style:r(mt||(mt=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),fo=function(e){var r=e.label1,i=e.label2,l=e.tooltip1,u=e.tooltip2,j=e.value,C=e.pure,k=e.onClick,x=go(),T=x.styles,D=T.btn,L=T.innerDiv,X=T.labelStyle,nn=T.label1Style,W=T.label2Style,A=(0,n.jsx)("button",{onClick:k,className:D,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[C&&(j===1?r:i),!C&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)("span",{className:v()(X,j===1?nn:W),children:r}),(0,n.jsx)("span",{className:v()(X,j===1?W:nn),children:i})]})]})},"lang-button");return l||u?(0,n.jsx)(st.Z,{title:j===1?l:u,children:A}):A},Ue=fo,ht,gt,ft,xt=1120,vt=1200,xo=(0,f.kc)(function(a){var e=a.token,r=a.css,i="#ced4d9";return{header:r(ht||(ht=p()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,i,i,i),menuRow:r(gt||(gt=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(ft||(ft=p()([`
      width: 16px;
    `]))),popoverMenu:ye()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),vo=function(){var e=(0,c.Z)(),r=y()(e,2),i=r[1],l=(0,d.WF)(),u=l.pkg,j=(0,cn.Is)(),C=(0,g.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),k=y()(C,2),x=k[0],T=k[1],D=(0,g.useContext)(Gn.Z),L=D.direction,X=D.isMobile,nn=D.updateSiteConfig,W=(0,g.useRef)(null),A=(0,d.TH)(),Z=A.pathname,N=A.search,M=xo(),V=M.styles,On=(0,g.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{menuVisible:!1})})},[]),Ln=(0,g.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{windowWidth:window.innerWidth})})},[]),Hn=(0,g.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{menuVisible:!0})})},[]),Wn=(0,g.useCallback)(function(Sn){T(function(he){return K()(K()({},he),{},{menuVisible:Sn})})},[]),Kn=function(){nn({direction:L!=="rtl"?"rtl":"ltr"})};(0,g.useEffect)(function(){On()},[A]),(0,g.useEffect)(function(){return Ln(),window.addEventListener("resize",Ln),function(){window.removeEventListener("resize",Ln),W.current&&clearTimeout(W.current)}},[]);var B=(0,g.useCallback)(function(Sn){var he=window.location.href,Cr=window.location.pathname;if(/overview/.test(Cr)&&/0?[1-39][0-3]?x/.test(Sn)){window.location.href=he.replace(window.location.origin,Sn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(Sn)?"":"/react","/introduce")).replace(/\/$/,"");return}var Je=new URL(he.replace(window.location.origin,Sn));Je.host.includes("antgroup")&&(window.location.href="".concat(Je.href.replace(/\/$/,""),"/")),window.location.href=Je.href.replace(/\/$/,"")},[]),fn=(0,g.useCallback)(function(){var Sn="".concat(window.location.protocol,"//"),he=window.location.href.slice(Sn.length);cn.Fy()&&localStorage.setItem("locale",cn.KE(Z)?"en-US":"zh-CN"),window.location.href=Sn+he.replace(window.location.pathname,cn.J1(Z,!cn.KE(Z),N).pathname)},[A]),Zn=(0,g.useMemo)(function(){return L!=="rtl"?"RTL":"LTR"},[L]),Qn=(0,g.useMemo)(function(){return L==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[L]),$n=x.menuVisible,Ce=x.windowWidth,Y=x.searching,tn=K()(ye()({},u.version,u.version),j==null?void 0:j.docVersions),An=Object.keys(tn).map(function(Sn){return{value:tn[Sn],label:Sn}}),Se=["","index","index-cn"].includes(Z),yr=i==="cn",wr=L==="rtl",Ve=null;Ce<xt?Ve="crowded":Ce<vt&&(Ve="narrow");var jr=v()(V.header,"clearfix",{"home-header":Se}),Ye={isZhCN:yr,isRTL:wr},ao=(0,n.jsx)(ho,K()(K()({},Ye),{},{responsive:Ve,isMobile:X,directionText:Zn,onLangChange:fn,onDirectionChange:Kn}),"nav"),ze=[ao,(0,n.jsx)(Fe.Z,{className:"version",size:"small",defaultValue:u.version,onChange:B,dropdownStyle:Qn,popupMatchSelectWidth:!1,getPopupContainer:function(he){return he.parentNode},options:An},"version"),(0,n.jsx)(co,K()({},Ye),"more"),(0,n.jsx)(Ue,{onClick:fn,value:cn.KE(Z)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ue,{onClick:Kn,value:L==="rtl"?2:1,label1:(0,n.jsx)(Vn,{className:V.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Vn,{className:V.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ue,{value:1,label1:(0,n.jsx)(Xn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];Ce<xt?ze=Y?[]:[ao]:Ce<vt&&(ze=Y?[]:ze);var io=Se?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:jr,children:[X&&(0,n.jsx)(We.Z,{overlayClassName:V.popoverMenu,placement:"bottomRight",content:ze,trigger:"click",open:$n,arrow:{arrowPointAtCenter:!0},onOpenChange:Wn,children:(0,n.jsx)(De.Z,{className:"nav-phone-icon",onClick:Hn})}),(0,n.jsxs)($e.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(ge.Z,K()(K()({},io[0]),{},{children:(0,n.jsx)(Ne,K()(K()({},Ye),{},{location:A}))})),(0,n.jsxs)(ge.Z,K()(K()({},io[1]),{},{className:V.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Ze.ZP,{})}),!X&&ze]}))]})]})},bo=vo,Sr=t(945462),yo=t(377376),Ae=t(185209),wo=function(){var e=(0,d.eL)(),r=(0,g.useMemo)(function(){var j;if(!e.frontmatter.subtitle&&!e.frontmatter.title)j="404 Not Found - Ant Design";else{var C;j="".concat(e.frontmatter.subtitle||""," ").concat(((C=e.frontmatter)===null||C===void 0?void 0:C.title)||""," - Ant Design")}var k=e.frontmatter.description||"";return[j,k]},[e]),i=y()(r,2),l=i[0],u=i[1];return(0,n.jsxs)(d.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),u&&(0,n.jsx)("meta",{name:"description",content:u})]})},bt=wo,yt=t(148050),jo=t(823493),Co=t.n(jo),So=t(468990),ko=t(658192),wt,jt,Ct,St=["scroll","resize"],Eo=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.boxShadowSecondary,l=e.antCls;return{affixTabs:r(wt||(wt=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,l,l,l),affixTabsFixed:r(jt||(jt=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ct||(Ct=p()([`
      text-transform: capitalize;
    `])))}}),kt=32,Lo=function(){var e=g.useRef(null),r=g.useRef([]),i=g.useState(!1),l=y()(i,2),u=l[0],j=l[1],C=g.useState(null),k=y()(C,2),x=k[0],T=k[1],D=Eo(),L=D.styles,X=L.affixTabs,nn=L.affixTabsFixed,W=L.span;function A(N){var M=document.getElementById(N);if(M){var V=M.offsetTop-e.current.offsetHeight-kt;(0,ko.Z)(V)}}g.useEffect(function(){r.current=Array.from(document.querySelectorAll("h2[id]")).map(function(N){var M=N.id;return M}),j(!0)},[]),g.useEffect(function(){var N=decodeURIComponent((location.hash||"").slice(1));N&&A(N)},[u]);var Z=g.useMemo(function(){function N(){for(var M=window,V=M.scrollY,On=e.current.offsetHeight,Ln=r.current.length-1;Ln>=0;Ln-=1){var Hn=r.current[Ln],Wn=document.getElementById(Hn),Kn=Wn.offsetTop-On-kt;if(Kn<=V){T(Hn);return}}T(null)}return Co()(N)},[]);return g.useEffect(function(){return St.forEach(function(N){return window.addEventListener(N,Z)}),Z(),function(){St.forEach(function(N){return window.removeEventListener(N,Z)})}},[]),(0,n.jsx)("div",{className:v()(X,x&&nn),ref:e,children:(0,n.jsx)(So.Z,{activeKey:x,onChange:A,items:r.current.map(function(N){return{key:N,label:(0,n.jsx)("span",{className:W,children:N.replace(/-/g," ")})}})})})},Po=Lo,Et,Lt,Pt,Tt=40,Ie=1208,Ke=24,To=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.antCls;return{resourcePage:r(Et||(Et=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Ie),resourceContent:r(Lt||(Lt=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Tt,Ie,Ke,i),banner:r(Pt||(Pt=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Tt,Ie,Ie,Ke,Ke)}}),zo=function(e){var r,i=e.children,l=To(),u=l.styles,j=(0,d.eL)();return(0,n.jsx)(xn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(yo.Z,{children:[(0,n.jsx)(bt,{}),(0,n.jsxs)("div",{id:"resources-page",className:u.resourcePage,children:[(0,n.jsx)(Po,{}),(0,n.jsxs)("div",{className:u.banner,children:[(0,n.jsxs)(Ae.Z.Title,{style:{fontSize:30},children:[(r=j.frontmatter)===null||r===void 0?void 0:r.title,(0,n.jsx)(yt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:j.frontmatter.filename})]}),(0,n.jsx)("section",{children:j.frontmatter.description})]}),(0,n.jsx)("div",{className:u.resourceContent,children:i}),(0,n.jsx)(Le,{})]})]})})},Mo=zo,Do=t(720841),No=t(538294),zt=t(575054),Mt=t(796586),Bo=t(605071),Xe=t(566247),Ao=t(217187),Te=t(618073),Dt=t(206171),Io=t(844183),Oo=t(566254),Ho=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,d.yh)(),i=(0,G.Z)(),l=i.pathname,u=i.search,j=(0,d.tx)(),C=e.before,k=e.after,x=(0,g.useMemo)(function(){var T,D=me()(j!=null?j:[]);if(l.startsWith("/docs/spec")){var L=D.splice(0,1);D.push.apply(D,me()(L))}if(l.startsWith("/docs/react")){var X,nn=(X=Object.entries(r).find(function(N){var M=y()(N,1),V=M[0];return V.startsWith("/changelog")}))===null||X===void 0?void 0:X[1];nn&&D.splice(1,0,nn[0])}if(l.startsWith("/changelog")){var W,A=(W=Object.entries(r).find(function(N){var M=y()(N,1),V=M[0];return V.startsWith("/docs/react")}))===null||W===void 0?void 0:W[1];A&&(D.unshift(A[0]),D.push.apply(D,me()(A.slice(1))))}var Z=function(M){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return M&&V&&(0,n.jsx)(Io.Z,{color:M==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:M.replace("VERSION",Oo.Z)})};return(T=D==null?void 0:D.reduce(function(N,M){if(M!=null&&M.title)if(l.startsWith("/docs/spec")){var V,On,Ln=M.children.reduce(function(B,fn){var Zn,Qn,$n=(Zn=(Qn=fn.frontmatter)===null||Qn===void 0?void 0:Qn.type)!==null&&Zn!==void 0?Zn:"default";return B[$n]||(B[$n]=[]),B[$n].push(fn),B},{}),Hn=[];Hn.push.apply(Hn,me()((V=(On=Ln.default)===null||On===void 0?void 0:On.map(function(B){return{label:(0,n.jsxs)(te.Z,{to:"".concat(B.link).concat(u),children:[C,B==null?void 0:B.title,k]}),key:B.link.replace(/(-cn$)/g,"")}}))!==null&&V!==void 0?V:[])),Object.entries(Ln).forEach(function(B){var fn=y()(B,2),Zn=fn[0],Qn=fn[1];Zn!=="default"&&Hn.push({type:"group",label:Zn,key:Zn,children:Qn==null?void 0:Qn.map(function($n){return{label:(0,n.jsxs)(te.Z,{to:"".concat($n.link).concat(u),children:[C,$n==null?void 0:$n.title,k]}),key:$n.link.replace(/(-cn$)/g,"")}})})}),N.push({label:M==null?void 0:M.title,key:M==null?void 0:M.title,children:Hn})}else{var Wn;N.push({type:"group",label:M==null?void 0:M.title,key:M==null?void 0:M.title,children:(Wn=M.children)===null||Wn===void 0?void 0:Wn.map(function(B){var fn,Zn;return{label:(0,n.jsxs)(te.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[C,(0,n.jsx)("span",{children:B==null?void 0:B.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(fn=B.frontmatter)===null||fn===void 0?void 0:fn.subtitle},"chinese"),Z((Zn=B.frontmatter)===null||Zn===void 0?void 0:Zn.tag,!C&&!k),k]}),key:B.link.replace(/(-cn$)/g,"")}})})}else{var Kn=M.children||[];Kn.every(function(B){var fn;return B==null||(fn=B.frontmatter)===null||fn===void 0?void 0:fn.date})&&Kn.sort(function(B,fn){return B.frontmatter.date>fn.frontmatter.date?-1:1}),N.push.apply(N,me()(Kn.map(function(B){return{label:(0,n.jsxs)(te.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[C,B==null?void 0:B.title,Z(B.frontmatter.tag,!C&&!k),k]}),key:B.link.replace(/(-cn$)/g,"")}})))}return N},[]))!==null&&T!==void 0?T:[]},[j,r,l,u,e]);return[x,l]},Nt=Ho,Bt,At,It,Ot,Ro=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.colorSplit,l=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:r(Bt||(Bt=p()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),i),pageNav:r(At||(At=p()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,u),prevNav:r(It||(It=p()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:r(Ot||(Ot=p()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Zo=function a(e){return Array.isArray(e)?e.reduce(function(r,i){if(!i)return r;if("children"in i&&i.children){var l;return r.concat((l=a(i.children))!==null&&l!==void 0?l:[])}return r.concat(i)},[]):null},Fo=function(e){var r=e.rtl,i=Ro(),l=i.styles,u={className:"footer-nav-icon-before"},j={className:"footer-nav-icon-after"},C=r?(0,n.jsx)(Te.Z,K()({},u)):(0,n.jsx)(Dt.Z,K()({},u)),k=r?(0,n.jsx)(Dt.Z,K()({},j)):(0,n.jsx)(Te.Z,K()({},j)),x=Nt({before:C,after:k}),T=y()(x,2),D=T[0],L=T[1],X=(0,g.useContext)(Gn.Z),nn=X.isMobile,W=(0,g.useMemo)(function(){var M=Zo(D);if(!M)return[null,null];var V=-1;return M.forEach(function(On,Ln){On&&On.key===L&&(V=Ln)}),[M[V-1],M[V+1]]},[D,L]),A=y()(W,2),Z=A[0],N=A[1];return nn?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[Z&&g.cloneElement(Z.label,{className:v()(l.pageNav,l.prevNav,Z.className)}),N&&g.cloneElement(N.label,{className:v()(l.pageNav,l.nextNav,N.className)})]})},Wo=Fo,$o=t(302281),_o=t(15060),Uo=t(889812),Ht,Rt,Zt,Ko=(0,f.kc)(function(a){var e=a.token,r=a.css;return{history:r(Ht||(Ht=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:r(Rt||(Rt=p()([`
    // white-space: pre;
  `]))),ref:r(Zt||(Zt=p()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),Xo={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function Go(a){var e=a.changelog,r=e===void 0?"":e,i=a.refs,l=i===void 0?[]:i,u=a.styles,j=g.useMemo(function(){for(var C=[],k=!1,x="",T=0;T<r.length;T+=1){var D=r[T];if(D!=="`")x+=D;else{var L=x;k&&(L=(0,n.jsx)("code",{children:L})),C.push(L),x="",k=!k}}return C.push(x),C},[r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:j}),l==null?void 0:l.map(function(C){var k;return(0,n.jsxs)("a",{className:u.ref,href:C,target:"_blank",rel:"noreferrer",children:["#",(k=C.match(/^.*\/(\d+)$/))===null||k===void 0?void 0:k[1]]},C)})]})}function Vo(a,e){var r=(0,Uo.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return t.e(2104).then(t.t.bind(t,332104,19))}}:{key:"component-changelog-en",request:function(){return t.e(5212).then(t.t.bind(t,365212,19))}});return(0,g.useMemo)(function(){var i=a.replace(/-/g,""),l=Object.keys(r).find(function(u){return u.toLowerCase()===i.toLowerCase()});return r[l]},[r,a])}function Yo(a){var e,r=a.pathname,i=r===void 0?"":r,l=(0,c.Z)(Xo),u=y()(l,2),j=u[0],C=u[1],k=g.useState(!1),x=y()(k,2),T=x[0],D=x[1],L=Ko(),X=L.styles,nn=((e=i.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",W=Vo(nn,C),A=g.useMemo(function(){var Z={};return W==null||W.forEach(function(N){Z[N.version]=Z[N.version]||[],Z[N.version].push(N)}),Object.keys(Z).map(function(N){var M=Z[N];return{children:(0,n.jsxs)(Ae.Z,{children:[(0,n.jsx)("h4",{children:N}),(0,n.jsx)("ul",{children:M.map(function(V,On){return(0,n.jsx)("li",{className:X.li,children:(0,n.jsx)(Go,K()(K()({},V),{},{styles:X}))},On)})})]})}})},[W]);return!W||!W.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(pe.ZP,{className:X.history,icon:(0,n.jsx)(on.Z,{}),onClick:function(){D(!0)},children:j.changelog}),(0,n.jsx)($o.Z,{title:j.changelog,extra:(0,n.jsx)(te.Z,{style:{fontSize:14},to:"/changelog".concat(C==="cn"?"-cn":""),children:j.full}),open:T,width:"40vw",onClose:function(){D(!1)},destroyOnClose:!0,children:(0,n.jsx)(_o.Z,{items:A})})]})}var Jo=function(a){return(0,n.jsx)(g.Suspense,{fallback:null,children:(0,n.jsx)(Yo,K()({},a))})},Qo=t(524229),Ft=t(211646),qo=t(294047),Wt=t(315816),nr=function(e){var r=e.className,i=e.style;return(0,n.jsx)("svg",{className:r,style:i,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},$t=nr,_t,Ut,Kt,Xt,Gt,Vt,Yt,Ge="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",er=(0,f.kc)(function(a){var e=a.token,r=a.css;return{card:r(_t||(_t=p()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:r(Ut||(Ut=p()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:r(Kt||(Kt=p()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:r(Xt||(Xt=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:r(Gt||(Gt=p()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:r(Vt||(Vt=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:r(Yt||(Yt=p()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),tr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},or=function(e){var r=e.zhihuLink,i=e.yuqueLink,l=e.juejinLink,u=(0,c.Z)(tr),j=y()(u,1),C=j[0],k=er(),x=k.styles,T=x.card,D=x.bigTitle,L=x.cardBody,X=x.left,nn=x.title,W=x.subTitle,A=x.btn;return!r&&!i&&!l?null:(0,n.jsxs)(qo.Z,{className:T,bordered:!1,children:[(0,n.jsx)("h3",{className:D,children:C.bigTitle}),r&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:X,children:[(0,n.jsx)("img",{src:Ge,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)(Nn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:C.zhiHu})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Nn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:r,children:C.buttonText})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Wt.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:X,children:[(0,n.jsx)("img",{src:Ge,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)(Ft.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:C.yuQue})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Ft.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:i,children:C.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Wt.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:X,children:[(0,n.jsx)("img",{src:Ge,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)($t,{className:"logo juejin-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:C.junjin})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:A,icon:(0,n.jsx)($t,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:C.buttonText})]})]})]})},rr=or,Jt,Qt,qt,no,eo,ar=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.antCls;return{contributorsList:r(Jt||(Jt=p()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),i,i,e.motionDurationSlow,i),listMobile:r(Qt||(Qt=p()([`
      margin: 1em 0 !important;
    `]))),toc:r(qt||(qt=p()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),i,i),tocWrapper:r(no||(no=p()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:r(eo||(eo=p()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),ir=function(e){var r=e.num,i=r===void 0?3:r;return(0,n.jsx)("li",{children:Array.from({length:i}).map(function(l,u){return(0,n.jsx)(zt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:u===0?0:-8}},u)})})},lr=function(e){var r=e.name,i=e.avatar,l=(0,g.useState)(!0),u=y()(l,2),j=u[0],C=u[1],k=(0,g.useState)(!1),x=y()(k,2),T=x[0],D=x[1];return(0,g.useLayoutEffect)(function(){var L=new Image;L.src=i,L.onload=function(){return C(!1)},L.onerror=function(){return D(!0)}},[]),T?null:j?(0,n.jsx)(zt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Mt.C,{size:"small",src:i,alt:r,children:r})},sr=function(e){var r,i,l,u,j,C,k=e.children,x=(0,d.eL)(),T=(0,d.zh)(),D=(0,G.Z)(),L=D.pathname,X=D.hash,nn=(0,d.YB)(),W=nn.formatMessage,A=ar(),Z=A.styles,N=(0,f.Fg)(),M=(0,g.useContext)(Gn.Z),V=M.direction,On=M.isMobile,Ln=(0,Ao.Z)(!1),Hn=y()(Ln,2),Wn=Hn[0],Kn=Hn[1],B=(0,g.useMemo)(function(){var Y;return((Y=x.toc)===null||Y===void 0?void 0:Y.filter(function(tn){return tn._debug_demo}).map(function(tn){return tn.id}))||[]},[x]),fn=B.includes(X.slice(1));(0,g.useLayoutEffect)(function(){Kn(fn)},[]);var Zn=(0,g.useMemo)(function(){return{showDebug:Wn,setShowDebug:Kn}},[Wn,B]),Qn=(0,g.useMemo)(function(){return((T==null?void 0:T.toc)||x.toc).reduce(function(Y,tn){if(tn.depth===2)Y.push(K()({},tn));else if(tn.depth===3){var An=Y[Y.length-1];An&&(An.children=An.children||[],An.children.push(K()({},tn)))}return Y},[])},[T==null?void 0:T.toc,x.toc]),$n=V==="rtl",Ce=(0,g.useMemo)(function(){var Y=x.frontmatter.author;return Y?typeof Y=="string"?Y.split(",").map(function(tn){return{name:tn,avatar:"https://github.com/".concat(tn,".png")}}):Array.isArray(Y)?Y:[]:[]},[x.frontmatter.author]);return(0,n.jsx)(Qo.Z.Provider,{value:Zn,children:(0,n.jsxs)(ge.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!x.frontmatter.toc&&(0,n.jsx)("section",{className:Z.tocWrapper,children:(0,n.jsx)(Bo.Z,{className:Z.toc,affix:!1,targetOffset:N.marginXXL,showInkInFixed:!0,items:Qn.map(function(Y){var tn;return{href:"#".concat(Y.id),title:Y.title,key:Y.id,children:(tn=Y.children)===null||tn===void 0?void 0:tn.filter(function(An){return Wn||!B.includes(An.id)}).map(function(An){return{key:An.id,href:"#".concat(An.id),title:(0,n.jsx)("span",{className:v()(B.includes(An.id)&&"toc-debug"),children:An==null?void 0:An.title})}})}})})}),(0,n.jsxs)("article",{className:v()(Z.articleWrapper,{rtl:$n}),children:[(r=x.frontmatter)!==null&&r!==void 0&&r.title?(0,n.jsxs)(Ae.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Xe.Z,{size:"small",children:[(i=x.frontmatter)===null||i===void 0?void 0:i.title,(l=x.frontmatter)===null||l===void 0?void 0:l.subtitle,!L.startsWith("/components/overview")&&(0,n.jsx)(yt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:x.frontmatter.filename})]}),L.startsWith("/components/")&&(0,n.jsx)(Jo,{pathname:L})]}):null,x.frontmatter.date||x.frontmatter.author?(0,n.jsx)(Ae.Z.Paragraph,{children:(0,n.jsxs)(Xe.Z,{children:[x.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Do.Z,{})," ",rn()(x.frontmatter.date).format("YYYY-MM-DD")]}),Ce.map(function(Y){return(0,n.jsx)("a",{href:"https://github.com/".concat(Y.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Xe.Z,{size:3,children:[(0,n.jsx)(lr,{name:Y.name,avatar:Y.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",Y.name]})]})},Y.name)})]})}):null,!x.frontmatter.__autoDescription&&x.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:k}),(((u=x.frontmatter)===null||u===void 0?void 0:u.zhihu_url)||((j=x.frontmatter)===null||j===void 0?void 0:j.yuque_url)||((C=x.frontmatter)===null||C===void 0?void 0:C.juejin_url))&&(0,n.jsx)(rr,{zhihuLink:x.frontmatter.zhihu_url,yuqueLink:x.frontmatter.yuque_url,juejinLink:x.frontmatter.juejin_url}),x.frontmatter.filename&&(0,n.jsx)(No.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:v()(Z.contributorsList,ye()({},Z.listMobile,On)),fileName:x.frontmatter.filename,renderItem:function(tn,An){var Se;return!tn||An?(0,n.jsx)(ir,{}):(Se=tn.username)!==null&&Se!==void 0&&Se.includes("github-actions")?null:(0,n.jsx)(st.Z,{mouseEnterDelay:.3,title:"".concat(W({id:"app.content.contributors"}),": ").concat(tn.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(tn.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Mt.C,{size:"small",src:tn.url,alt:tn.username,children:tn.username})})})},tn.username)}})]}),(0,n.jsx)(Wo,{rtl:$n}),(0,n.jsx)(Le,{})]})})},cr=sr,dr=t(650010),to,oo,ur=(0,f.kc)(function(a){var e=a.token,r=a.css,i=e.antCls,l=e.fontFamily,u=e.colorSplit;return{asideContainer:r(to||(to=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,i,i,i,i,i,i,u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(oo||(oo=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),pr=function(){var e=(0,d.tx)(),r=(0,g.useContext)(Gn.Z),i=r.isMobile,l=r.theme,u=ur(),j=u.styles,C=Nt(),k=y()(C,2),x=k[0],T=k[1],D=l.includes("dark"),L=(0,f.Fg)(),X=L.colorBgContainer,nn=(0,n.jsx)(xn.ZP,{theme:{components:{Menu:{itemBg:X,darkItemBg:X}}},children:(0,n.jsx)(at.Z,{items:x,inlineIndent:30,className:j.asideContainer,mode:"inline",theme:D?"dark":"light",selectedKeys:[T],defaultOpenKeys:e==null?void 0:e.map(function(W){var A=W.title;return A}).filter(function(W){return W})})});return i?(0,n.jsx)(dr.Z,{children:nn},"Mobile-menu"):(0,n.jsx)(ge.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:j.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:nn})})},mr=pr,ro,hr=(0,f.kc)(function(a){var e=a.css,r=a.token;return{main:e(ro||(ro=p()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),gr=function(e){var r=e.children,i=hr(),l=i.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(bt,{}),(0,n.jsx)(mr,{}),(0,n.jsx)(cr,{children:r})]})},fr=gr,xr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vr=function(){var e=(0,d.pC)(),r=(0,G.Z)(),i=r.pathname,l=r.search,u=r.hash,j=(0,c.Z)(xr),C=y()(j,2),k=C[0],x=C[1],T=(0,g.useRef)(null),D=(0,g.useContext)(Gn.Z),L=D.direction,X=(0,d.WF)(),nn=X.loading;(0,g.useLayoutEffect)(function(){x==="cn"?rn().locale("zh-cn"):rn().locale("en")},[]),(0,g.useEffect)(function(){var A=document.getElementById("nprogress-style");A&&(T.current=setTimeout(function(){var Z;(Z=A.parentNode)===null||Z===void 0||Z.removeChild(A)},0))},[]),(0,g.useEffect)(function(){var A,Z=u.replace("#","");Z&&((A=document.getElementById(decodeURIComponent(Z)))===null||A===void 0||A.scrollIntoView())},[nn,u]),g.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+l),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",i+l])},[r]);var W=(0,g.useMemo)(function(){return["","/"].some(function(A){return A===i})||["/index"].some(function(A){return i.startsWith(A)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(Le,{})]}):i.startsWith("/docs/resource")?(0,n.jsx)(Mo,{children:e}):i.startsWith("/theme-editor")?e:(0,n.jsx)(fr,{children:e})},[i,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:x==="cn"?"zh-CN":x,"data-direction":L,className:v()({rtl:L==="rtl"})}),(0,n.jsx)("title",{children:k==null?void 0:k.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:k.description}),(0,n.jsx)("meta",{property:"og:title",content:k==null?void 0:k.title}),(0,n.jsx)("meta",{property:"og:description",content:k.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(xn.ZP,{direction:L,locale:x==="cn"?H.Z:void 0,children:[(0,n.jsx)(an,{}),(0,n.jsx)(bo,{}),W]})]})},br=vr},373638:function(qn,hn,t){t.d(hn,{J1:function(){return H},Is:function(){return p},Fy:function(){return c},KE:function(){return g},qE:function(){return xn}});var dn=t(661227),y=t(805574),gn=t(97857),v=t(385564),In=t(842348),rn=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),kn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":rn?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function d(w,f,n,I){var O=w.map(function(P){return P.meta}).filter(function(P){return!P.skip}),$=[],wn=function(en,vn){return(en.order||0)-(vn.order||0)};O.sort(wn).forEach(function(P){if(P.category&&(P.category=P.category[f]||P.category),P.type&&(P.type=P.type[f]||P.type),P!=null&&P.title&&(P.title=P.title[f]||P.title),!P.category){$.push(P);return}if(P.category==="Components"&&P.type){var en=$.find(function(un){return(un==null?void 0:un.title)===P.type});en||(en={type:"type",title:P.type,children:[],order:I[P.type]},$.push(en)),en.children=en.children||[],en.children.push(P);return}var vn=$.find(function(un){return(un==null?void 0:un.title)===P.category});if(vn||(vn={type:"category",title:P.category,children:[],order:n[P.category]},$.push(vn)),vn.children=vn.children||[],P.type){var zn=vn.children.filter(function(un){return(un==null?void 0:un.title)===P.type})[0];zn||(zn={type:"type",title:P.type,children:[],order:I[P.type]},vn.children.push(zn)),zn.children=zn.children||[],zn.children.push(P)}else vn.children.push(P)});function Tn(P){return P.sort(wn).map(function(en){return en.children?_objectSpread(_objectSpread({},en),{},{children:Tn(en.children)}):en})}return Tn($)}function g(w){return/-cn\/?$/.test(w)}function H(w,f,n,I){var O=w.startsWith("/")?w:"/".concat(w),$;if(f?O==="/"?$="/index-cn":O.endsWith("/")?$=O.replace(/\/$/,"-cn/"):($="".concat(O,"-cn"),$=$.replace(/(-cn)+/,"-cn")):$=/\/?index-cn/.test(O)?"/":O.replace("-cn",""),I){var wn=I[f?"zhCN":"enUS"];$+="#".concat(wn)}return{pathname:$,search:n}}function xn(w){var f="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",n=new Image,I,O=function(wn){I||(I=!0,n.src="",w(wn))};return n.onload=function(){return O("responded")},n.onerror=function(){return O("error")},n.src=f,setTimeout(function(){return O("timeout")},1500)}function c(){var w="test",f=window.localStorage;try{return f.setItem(w,"1"),f.removeItem(w),!0}catch(n){return!1}}function G(w){return new Promise(function(f,n){var I=document.createElement("script");I.type="text/javascript",I.src=w,I.onload=f,I.onerror=n,document.head.appendChild(I)})}function Pn(w){var f=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(w))return"";var n=flattenDeep(w.filter(function(I){if(Array.isArray(I)){var O=_slicedToArray(I,1),$=O[0];return $==="p"}return!1}).map(function(I){var O=flatten(I),$=_toArray(O),wn=$[0],Tn=$.slice(1),P=Tn.filter(function(en){return typeof en=="string"&&!f.includes(en)}).join("");return[wn,P]})).find(function(I){return I&&typeof I=="string"&&!f.includes(I)});return n}var p=function(){return kn}},647727:function(qn,hn,t){t.d(hn,{Z:function(){return dn.Z}});var dn=t(332231)},605071:function(qn,hn,t){t.d(hn,{Z:function(){return m}});var dn=t(97857),y=t.n(dn),gn=t(9783),v=t.n(gn),In=t(719632),rn=t.n(In),kn=t(805574),d=t.n(kn),g=t(294184),H=t.n(g),xn=t(656790),c=t(667294),G=t(517423),Pn=t(982673),p=t(658192),w=t(252901),f=t(73287),n=c.createContext(void 0),I=n,O=t(785893),$=function(o){var s=o.href,h=o.title,E=o.prefixCls,z=o.children,R=o.className,F=o.target,b=o.replace,J=c.useContext(I),_=J||{},Q=_.registerLink,pn=_.unregisterLink,ln=_.scrollTo,sn=_.onClick,bn=_.activeLink,U=_.direction;c.useEffect(function(){return Q==null||Q(s),function(){pn==null||pn(s)}},[s]);var Mn=function(Xn){b&&(Xn.preventDefault(),window.location.replace(s)),sn==null||sn(Xn,{title:h,href:s}),ln==null||ln(s)},mn=c.useContext(f.E_),an=mn.getPrefixCls,Dn=an("anchor",E),Rn=bn===s,yn=H()("".concat(Dn,"-link"),R,v()({},"".concat(Dn,"-link-active"),Rn)),Nn=H()("".concat(Dn,"-link-title"),v()({},"".concat(Dn,"-link-title-active"),Rn));return(0,O.jsxs)("div",{className:yn,children:[(0,O.jsx)("a",{className:Nn,href:s,title:typeof h=="string"?h:"",target:F,onClick:Mn,children:h}),U!=="horizontal"?z:null]})},wn=$,Tn=t(548073),P=t(141035),en=t(986943),vn=function(o){var s,h,E=o.componentCls,z=o.holderOffsetBlock,R=o.motionDurationSlow,F=o.lineWidthBold,b=o.colorPrimary,J=o.lineType,_=o.colorSplit;return v()({},"".concat(E,"-wrapper"),(h={marginBlockStart:-z,paddingBlockStart:z},v()(h,E,y()(y()({},(0,Tn.Wf)(o)),{},v()({position:"relative",paddingInlineStart:F},"".concat(E,"-link"),(s={paddingBlock:o.linkPaddingBlock,paddingInline:"".concat(o.linkPaddingInlineStart,"px 0"),"&-title":y()(y()({},Tn.vS),{},{position:"relative",display:"block",marginBlockEnd:o.anchorTitleBlock,color:o.colorText,transition:"all ".concat(o.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},v()(s,"&-active > ".concat(E,"-link-title"),{color:o.colorPrimary}),v()(s,"".concat(E,"-link"),{paddingBlock:o.anchorPaddingBlockSecondary}),s)))),v()(h,"&:not(".concat(E,"-wrapper-horizontal)"),v()({},E,v()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(F,"px ").concat(J," ").concat(_),content:'" "'}},"".concat(E,"-ink"),v()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(R," ease-in-out"),width:F,backgroundColor:b},"&".concat(E,"-ink-visible"),{display:"inline-block"})))),v()(h,"".concat(E,"-fixed ").concat(E,"-ink ").concat(E,"-ink"),{display:"none"}),h))},zn=function(o){var s,h=o.componentCls,E=o.motionDurationSlow,z=o.lineWidthBold,R=o.colorPrimary;return v()({},"".concat(h,"-wrapper-horizontal"),v()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(o.lineType," ").concat(o.colorSplit),content:'" "'}},h,(s={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},v()(s,"".concat(h,"-link:first-of-type"),{paddingInline:0}),v()(s,"".concat(h,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(E," ease-in-out, width ").concat(E," ease-in-out"),height:z,backgroundColor:R}),s)))},un=(0,P.Z)("Anchor",function(S){var o=S.fontSize,s=S.fontSizeLG,h=S.paddingXXS,E=(0,en.TS)(S,{holderOffsetBlock:h,anchorPaddingBlockSecondary:h/2,anchorTitleBlock:o/14*3,anchorBallSize:s/2});return[vn(E),zn(E)]},function(S){return{linkPaddingBlock:S.paddingXXS,linkPaddingInlineStart:S.padding}});function _n(){return window}function oe(S,o){if(!S.getClientRects().length)return 0;var s=S.getBoundingClientRect();return s.width||s.height?o===window?(o=S.ownerDocument.documentElement,s.top-o.clientTop):s.top-o.getBoundingClientRect().top:s.top}var Un=/#([\S ]+)$/,ie=function(o){var s,h,E=o.rootClassName,z=o.anchorPrefixCls,R=o.className,F=o.style,b=o.offsetTop,J=o.affix,_=J===void 0?!0:J,Q=o.showInkInFixed,pn=Q===void 0?!1:Q,ln=o.children,sn=o.items,bn=o.direction,U=bn===void 0?"vertical":bn,Mn=o.bounds,mn=o.targetOffset,an=o.onClick,Dn=o.onChange,Rn=o.getContainer,yn=o.getCurrentAnchor,Nn=o.replace,Fn=c.useState([]),Xn=d()(Fn,2),on=Xn[0],Bn=Xn[1],Yn=c.useState(null),ce=d()(Yn,2),Jn=ce[0],ve=ce[1],re=c.useRef(Jn),be=c.useRef(null),Gn=c.useRef(null),de=c.useRef(!1),ne=c.useContext(f.E_),Me=ne.direction,ke=ne.getTargetContainer,ae=ne.anchor,ue=(s=Rn!=null?Rn:ke)!==null&&s!==void 0?s:_n,Ee=JSON.stringify(on),Oe=(0,xn.zX)(function(q){on.includes(q)||Bn(function(jn){return[].concat(rn()(jn),[q])})}),He=(0,xn.zX)(function(q){on.includes(q)&&Bn(function(jn){return jn.filter(function(Cn){return Cn!==q})})}),Le=function(){var jn,Cn=(jn=be.current)===null||jn===void 0?void 0:jn.querySelector(".".concat(z,"-link-title-active"));if(Cn&&Gn.current){var Vn=Gn.current.style,cn=U==="horizontal";Vn.top=cn?"":"".concat(Cn.offsetTop+Cn.clientHeight/2,"px"),Vn.height=cn?"":"".concat(Cn.clientHeight,"px"),Vn.left=cn?"".concat(Cn.offsetLeft,"px"):"",Vn.width=cn?"".concat(Cn.clientWidth,"px"):"",cn&&(0,G.Z)(Cn,{scrollMode:"if-needed",block:"nearest"})}},Re=function(jn){var Cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Vn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,cn=[],we=ue();if(jn.forEach(function(ee){var xe=Un.exec(ee==null?void 0:ee.toString());if(xe){var Ne=document.getElementById(xe[1]);if(Ne){var Be=oe(Ne,we);Be<Cn+Vn&&cn.push({link:ee,top:Be})}}}),cn.length){var fe=cn.reduce(function(ee,xe){return xe.top>ee.top?xe:ee});return fe.link}return""},K=(0,xn.zX)(function(q){if(re.current!==q){var jn=typeof yn=="function"?yn(q):q;ve(jn),re.current=jn,Dn==null||Dn(q)}}),Pe=c.useCallback(function(){if(!de.current){var q=Re(on,mn!==void 0?mn:b||0,Mn);K(q)}},[Ee,mn,b]),ye=c.useCallback(function(q){K(q);var jn=Un.exec(q);if(jn){var Cn=document.getElementById(jn[1]);if(Cn){var Vn=ue(),cn=(0,Pn.Z)(Vn,!0),we=oe(Cn,Vn),fe=cn+we;fe-=mn!==void 0?mn:b||0,de.current=!0,(0,p.Z)(fe,{getContainer:ue,callback:function(){de.current=!1}})}}},[mn,b]),De=H()(E,"".concat(z,"-wrapper"),(h={},v()(h,"".concat(z,"-wrapper-horizontal"),U==="horizontal"),v()(h,"".concat(z,"-rtl"),Me==="rtl"),h),R,ae==null?void 0:ae.className),Ze=H()(z,v()({},"".concat(z,"-fixed"),!_&&!pn)),Fe=H()("".concat(z,"-ink"),v()({},"".concat(z,"-ink-visible"),Jn)),We=y()(y()({maxHeight:b?"calc(100vh - ".concat(b,"px)"):"100vh"},ae==null?void 0:ae.style),F),$e=function q(jn){return Array.isArray(jn)?jn.map(function(Cn){return(0,c.createElement)(wn,y()(y()({replace:Nn},Cn),{},{key:Cn.key}),U==="vertical"&&q(Cn.children))}):null},ge=(0,O.jsx)("div",{ref:be,className:De,style:We,children:(0,O.jsxs)("div",{className:Ze,children:[(0,O.jsx)("span",{className:Fe,ref:Gn}),"items"in o?$e(sn):ln]})});c.useEffect(function(){var q=ue();return Pe(),q==null||q.addEventListener("scroll",Pe),function(){q==null||q.removeEventListener("scroll",Pe)}},[Ee]),c.useEffect(function(){typeof yn=="function"&&K(yn(re.current||""))},[yn]),c.useEffect(function(){Le()},[U,yn,Ee,Jn]);var _e=c.useMemo(function(){return{registerLink:Oe,unregisterLink:He,scrollTo:ye,activeLink:Jn,onClick:an,direction:U}},[Jn,an,ye,U]);return(0,O.jsx)(I.Provider,{value:_e,children:_?(0,O.jsx)(w.Z,{offsetTop:b,target:ue,children:ge}):ge})},le=function(o){var s=o.prefixCls,h=o.rootClassName,E=c.useContext(f.E_),z=E.getPrefixCls,R=z("anchor",s),F=un(R),b=d()(F,2),J=b[0],_=b[1];return J((0,O.jsx)(ie,y()(y()({},o),{},{rootClassName:H()(_,h),anchorPrefixCls:R})))},se=le,En=se;En.Link=wn;var m=En},302281:function(qn,hn,t){t.d(hn,{Z:function(){return se}});var dn=t(97857),y=t.n(dn),gn=t(9783),v=t.n(gn),In=t(805574),rn=t.n(In),kn=t(513769),d=t.n(kn),g=t(294184),H=t.n(g),xn=t(650010),c=t(667294),G=t(851863),Pn=t(73287),p=t(976883),w=t(46287),f=t(785893),n=function(m){var S=m.prefixCls,o=m.title,s=m.footer,h=m.extra,E=m.closeIcon,z=m.closable,R=m.onClose,F=m.headerStyle,b=m.drawerStyle,J=m.bodyStyle,_=m.footerStyle,Q=m.children,pn=c.useCallback(function(an){return(0,f.jsx)("button",{type:"button",onClick:R,"aria-label":"Close",className:"".concat(S,"-close"),children:an})},[R]),ln=(0,w.Z)(z,E,pn,void 0,!0),sn=rn()(ln,2),bn=sn[0],U=sn[1],Mn=c.useMemo(function(){return!o&&!bn?null:(0,f.jsxs)("div",{style:F,className:H()("".concat(S,"-header"),v()({},"".concat(S,"-header-close-only"),bn&&!o&&!h)),children:[(0,f.jsxs)("div",{className:"".concat(S,"-header-title"),children:[U,o&&(0,f.jsx)("div",{className:"".concat(S,"-title"),children:o})]}),h&&(0,f.jsx)("div",{className:"".concat(S,"-extra"),children:h})]})},[bn,U,h,F,S,o]),mn=c.useMemo(function(){if(!s)return null;var an="".concat(S,"-footer");return(0,f.jsx)("div",{className:an,style:_,children:s})},[s,_,S]);return(0,f.jsxs)("div",{className:"".concat(S,"-wrapper-body"),style:b,children:[Mn,(0,f.jsx)("div",{className:"".concat(S,"-body"),style:J,children:Q}),mn]})},I=n,O=t(578294),$=t(141035),wn=t(986943),Tn=function(m){var S,o=m.componentCls,s=m.motionDurationSlow,h={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(s)}}};return v()({},o,(S={},v()(S,"".concat(o,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(s)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),v()(S,"".concat(o,"-panel-motion"),{"&-left":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),S))},P=Tn,en=function(m){var S,o,s=m.componentCls,h=m.zIndexPopup,E=m.colorBgMask,z=m.colorBgElevated,R=m.motionDurationSlow,F=m.motionDurationMid,b=m.padding,J=m.paddingLG,_=m.fontSizeLG,Q=m.lineHeightLG,pn=m.lineWidth,ln=m.lineType,sn=m.colorSplit,bn=m.marginSM,U=m.colorIcon,Mn=m.colorIconHover,mn=m.colorText,an=m.fontWeightStrong,Dn=m.footerPaddingBlock,Rn=m.footerPaddingInline,yn="".concat(s,"-content-wrapper");return v()({},s,(o={position:"fixed",inset:0,zIndex:h,pointerEvents:"none","&-pure":(S={position:"relative",background:z},v()(S,"&".concat(s,"-left"),{boxShadow:m.boxShadowDrawerLeft}),v()(S,"&".concat(s,"-right"),{boxShadow:m.boxShadowDrawerRight}),v()(S,"&".concat(s,"-top"),{boxShadow:m.boxShadowDrawerUp}),v()(S,"&".concat(s,"-bottom"),{boxShadow:m.boxShadowDrawerDown}),S),"&-inline":{position:"absolute"}},v()(o,"".concat(s,"-mask"),{position:"absolute",inset:0,zIndex:h,background:E,pointerEvents:"auto"}),v()(o,yn,{position:"absolute",zIndex:h,maxWidth:"100vw",transition:"all ".concat(R),"&-hidden":{display:"none"}}),v()(o,"&-left > ".concat(yn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:m.boxShadowDrawerLeft}),v()(o,"&-right > ".concat(yn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:m.boxShadowDrawerRight}),v()(o,"&-top > ".concat(yn),{top:0,insetInline:0,boxShadow:m.boxShadowDrawerUp}),v()(o,"&-bottom > ".concat(yn),{bottom:0,insetInline:0,boxShadow:m.boxShadowDrawerDown}),v()(o,"".concat(s,"-content"),{width:"100%",height:"100%",overflow:"auto",background:z,pointerEvents:"auto"}),v()(o,"".concat(s,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),v()(o,"".concat(s,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(b,"px ").concat(J,"px"),fontSize:_,lineHeight:Q,borderBottom:"".concat(pn,"px ").concat(ln," ").concat(sn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),v()(o,"".concat(s,"-extra"),{flex:"none"}),v()(o,"".concat(s,"-close"),{display:"inline-block",marginInlineEnd:bn,color:U,fontWeight:an,fontSize:_,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(F),textRendering:"auto","&:focus, &:hover":{color:Mn,textDecoration:"none"}}),v()(o,"".concat(s,"-title"),{flex:1,margin:0,color:mn,fontWeight:m.fontWeightStrong,fontSize:_,lineHeight:Q}),v()(o,"".concat(s,"-body"),{flex:1,minWidth:0,minHeight:0,padding:J,overflow:"auto"}),v()(o,"".concat(s,"-footer"),{flexShrink:0,padding:"".concat(Dn,"px ").concat(Rn,"px"),borderTop:"".concat(pn,"px ").concat(ln," ").concat(sn)}),v()(o,"&-rtl",{direction:"rtl"}),o))},vn=(0,$.Z)("Drawer",function(En){var m=(0,wn.TS)(En,{});return[en(m),P(m)]},function(En){return{zIndexPopup:En.zIndexPopupBase,footerPaddingBlock:En.paddingXS,footerPaddingInline:En.padding}}),zn=t(358245),un=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],_n=["prefixCls","style","className","placement"],oe=null,Un={distance:180},ie=function(m){var S=m.rootClassName,o=m.width,s=m.height,h=m.size,E=h===void 0?"default":h,z=m.mask,R=z===void 0?!0:z,F=m.push,b=F===void 0?Un:F,J=m.open,_=m.afterOpenChange,Q=m.onClose,pn=m.prefixCls,ln=m.getContainer,sn=m.style,bn=m.className,U=m.visible,Mn=m.afterVisibleChange,mn=d()(m,un),an=c.useContext(Pn.E_),Dn=an.getPopupContainer,Rn=an.getPrefixCls,yn=an.direction,Nn=an.drawer,Fn=Rn("drawer",pn),Xn=vn(Fn),on=rn()(Xn,2),Bn=on[0],Yn=on[1],ce=ln===void 0&&Dn?function(){return Dn(document.body)}:ln,Jn=H()(v()({"no-mask":!R},"".concat(Fn,"-rtl"),yn==="rtl"),S,Yn);if(!1)var ve;var re=c.useMemo(function(){return o!=null?o:E==="large"?736:378},[o,E]),be=c.useMemo(function(){return s!=null?s:E==="large"?736:378},[s,E]),Gn={motionName:(0,G.m)(Fn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},de=function(ke){return{motionName:(0,G.m)(Fn,"panel-motion-".concat(ke)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},ne=(0,zn.H)();return Bn((0,f.jsx)(O.BR,{children:(0,f.jsx)(p.Ux,{status:!0,override:!0,children:(0,f.jsx)(xn.Z,y()(y()({prefixCls:Fn,onClose:Q,maskMotion:Gn,motion:de},mn),{},{open:J!=null?J:U,mask:R,push:b,width:re,height:be,style:y()(y()({},Nn==null?void 0:Nn.style),sn),className:H()(Nn==null?void 0:Nn.className,bn),rootClassName:Jn,getContainer:ce,afterOpenChange:_!=null?_:Mn,panelRef:ne,children:(0,f.jsx)(I,y()(y()({prefixCls:Fn},mn),{},{onClose:Q}))}))})}))},le=function(m){var S=m.prefixCls,o=m.style,s=m.className,h=m.placement,E=h===void 0?"right":h,z=d()(m,_n),R=c.useContext(Pn.E_),F=R.getPrefixCls,b=F("drawer",S),J=vn(b),_=rn()(J,2),Q=_[0],pn=_[1],ln=H()(b,"".concat(b,"-pure"),"".concat(b,"-").concat(E),pn,s);return Q((0,f.jsx)("div",{className:ln,style:o,children:(0,f.jsx)(I,y()({prefixCls:b},z))}))};ie._InternalPanelDoNotUseOrYouWillBeFired=le;var se=ie},377376:function(qn,hn,t){var dn=t(83996),y=t(296708),gn=dn.ZP;gn.Header=dn.h4,gn.Footer=dn.$_,gn.Content=dn.VY,gn.Sider=y.Z,hn.Z=gn},715778:function(qn,hn,t){t.d(hn,{Z:function(){return c}});var dn=t(174219),y=t(97857),gn=t.n(y),v=t(585369),In={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},rn=In,kn={lang:gn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:gn()({},rn)};kn.lang.ok="\u786E\u5B9A";var d=kn,g=d,H="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",xn={locale:"zh-cn",Pagination:dn.Z,DatePicker:d,TimePicker:rn,Calendar:g,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:H,method:H,array:H,object:H,number:H,date:H,boolean:H,integer:H,float:H,regexp:H,email:H,url:H,hex:H},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},c=xn},15060:function(qn,hn,t){t.d(hn,{Z:function(){return m}});var dn=t(97857),y=t.n(dn),gn=t(805574),v=t.n(gn),In=t(513769),rn=t.n(In),kn=t(294184),d=t.n(kn),g=t(667294),H=t(73287),xn=t(9783),c=t.n(xn),G=t(785893),Pn=["prefixCls","className","color","dot","pending","position","label","children"],p=function(o){var s,h=o.prefixCls,E=o.className,z=o.color,R=z===void 0?"blue":z,F=o.dot,b=o.pending,J=b===void 0?!1:b,_=o.position,Q=o.label,pn=o.children,ln=rn()(o,Pn),sn=g.useContext(H.E_),bn=sn.getPrefixCls,U=bn("timeline",h),Mn=d()("".concat(U,"-item"),c()({},"".concat(U,"-item-pending"),J),E),mn=/blue|red|green|gray/.test(R||"")?void 0:R,an=d()("".concat(U,"-item-head"),(s={},c()(s,"".concat(U,"-item-head-custom"),!!F),c()(s,"".concat(U,"-item-head-").concat(R),!mn),s));return(0,G.jsxs)("li",y()(y()({},ln),{},{className:Mn,children:[Q&&(0,G.jsx)("div",{className:"".concat(U,"-item-label"),children:Q}),(0,G.jsx)("div",{className:"".concat(U,"-item-tail")}),(0,G.jsx)("div",{className:an,style:{borderColor:mn,color:mn},children:F}),(0,G.jsx)("div",{className:"".concat(U,"-item-content"),children:pn})]}))},w=p,f=t(719632),n=t.n(f),I=t(100628),O=t.n(I),$=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],wn=["className"],Tn=function(o){var s,h=o.prefixCls,E=o.className,z=o.pending,R=z===void 0?!1:z,F=o.children,b=o.items,J=o.rootClassName,_=o.reverse,Q=_===void 0?!1:_,pn=o.direction,ln=o.hashId,sn=o.pendingDot,bn=o.mode,U=bn===void 0?"":bn,Mn=rn()(o,$),mn=function(Bn,Yn){return U==="alternate"?Bn==="right"?"".concat(h,"-item-right"):Bn==="left"||Yn%2===0?"".concat(h,"-item-left"):"".concat(h,"-item-right"):U==="left"?"".concat(h,"-item-left"):U==="right"||Bn==="right"?"".concat(h,"-item-right"):""},an=n()(b||[]),Dn=typeof R=="boolean"?null:R;R&&an.push({pending:!!R,dot:sn||(0,G.jsx)(O(),{}),children:Dn}),Q&&an.reverse();var Rn=an.length,yn="".concat(h,"-item-last"),Nn=an.filter(function(on){return!!on}).map(function(on,Bn){var Yn,ce=Bn===Rn-2?yn:"",Jn=Bn===Rn-1?yn:"",ve=on.className,re=rn()(on,wn);return(0,g.createElement)(w,y()(y()({},re),{},{className:d()([ve,!Q&&R?ce:Jn,mn((Yn=on==null?void 0:on.position)!==null&&Yn!==void 0?Yn:"",Bn)]),key:(on==null?void 0:on.key)||Bn}))}),Fn=an.some(function(on){return!!(on!=null&&on.label)}),Xn=d()(h,(s={},c()(s,"".concat(h,"-pending"),!!R),c()(s,"".concat(h,"-reverse"),!!Q),c()(s,"".concat(h,"-").concat(U),!!U&&!Fn),c()(s,"".concat(h,"-label"),Fn),c()(s,"".concat(h,"-rtl"),pn==="rtl"),s),E,J,ln);return(0,G.jsx)("ul",y()(y()({},Mn),{},{className:Xn,children:Nn}))},P=Tn,en=t(45598);function vn(S,o){return S&&Array.isArray(S)?S:(0,en.default)(o).map(function(s){var h,E;return y()({children:(h=s==null||(E=s.props)===null||E===void 0?void 0:E.children)!==null&&h!==void 0?h:""},s.props)})}var zn=vn,un=t(548073),_n=t(141035),oe=t(986943),Un=function(o){var s,h,E,z,R,F,b=o.componentCls;return c()({},b,y()(y()({},(0,un.Wf)(o)),{},(F={margin:0,padding:0,listStyle:"none"},c()(F,"".concat(b,"-item"),{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:(o.itemHeadSize-o.tailWidth)/2,height:"calc(100% - ".concat(o.itemHeadSize,"px)"),borderInlineStart:"".concat(o.tailWidth,"px ").concat(o.lineType," ").concat(o.tailColor)},"&-pending":(s={},c()(s,"".concat(b,"-item-head"),{fontSize:o.fontSizeSM,backgroundColor:"transparent"}),c()(s,"".concat(b,"-item-tail"),{display:"none"}),s),"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:"".concat(o.dotBorderWidth,"px ").concat(o.lineType," transparent"),borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:o.itemHeadSize/2,insetInlineStart:o.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.lineWidth,marginInlineStart:o.margin+o.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(h={},c()(h,"> ".concat(b,"-item-tail"),{display:"none"}),c()(h,"> ".concat(b,"-item-content"),{minHeight:o.controlHeightLG*1.2}),h)}),c()(F,"&".concat(b,`-alternate,
        &`).concat(b,`-right,
        &`).concat(b,"-label"),c()({},"".concat(b,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(o.marginXXS,"px"),"&-custom":{marginInlineStart:o.tailWidth/2}},"&-left":c()({},"".concat(b,"-item-content"),{insetInlineStart:"calc(50% - ".concat(o.marginXXS,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"}),"&-right":c()({},"".concat(b,"-item-content"),{width:"calc(50% - ".concat(o.marginSM,"px)"),margin:0,textAlign:"end"})})),c()(F,"&".concat(b,"-right"),c()({},"".concat(b,"-item-right"),(E={},c()(E,"".concat(b,`-item-tail,
            `).concat(b,`-item-head,
            `).concat(b,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((o.itemHeadSize+o.tailWidth)/2,"px)")}),c()(E,"".concat(b,"-item-content"),{width:"calc(100% - ".concat(o.itemHeadSize+o.marginXS,"px)")}),E))),c()(F,"&".concat(b,`-pending
        `).concat(b,`-item-last
        `).concat(b,"-item-tail"),{display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),c()(F,"&".concat(b,`-reverse
        `).concat(b,`-item-last
        `).concat(b,"-item-tail"),{display:"none"}),c()(F,"&".concat(b,"-reverse ").concat(b,"-item-pending"),(z={},c()(z,"".concat(b,"-item-tail"),{insetBlockStart:o.margin,display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),c()(z,"".concat(b,"-item-content"),{minHeight:o.controlHeightLG*1.2}),z)),c()(F,"&".concat(b,"-label"),(R={},c()(R,"".concat(b,"-item-label"),{position:"absolute",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.tailWidth,width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"end"}),c()(R,"".concat(b,"-item-right"),c()({},"".concat(b,"-item-label"),{insetInlineStart:"calc(50% + ".concat(o.marginSM,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"})),R)),c()(F,"&-rtl",c()({direction:"rtl"},"".concat(b,"-item-head-custom"),{transform:"translate(50%, -50%)"})),F)))},ie=(0,_n.Z)("Timeline",function(S){var o=(0,oe.TS)(S,{itemHeadSize:10,customHeadPaddingVertical:S.paddingXXS,paddingInlineEnd:2});return[Un(o)]},function(S){return{tailColor:S.colorSplit,tailWidth:S.lineWidthBold,dotBorderWidth:S.wireframe?S.lineWidthBold:S.lineWidth*3,dotBg:S.colorBgContainer,itemPaddingBottom:S.padding*1.25}}),le=["prefixCls","children","items","className","style"],se=function(o){var s=g.useContext(H.E_),h=s.getPrefixCls,E=s.direction,z=s.timeline,R=o.prefixCls,F=o.children,b=o.items,J=o.className,_=o.style,Q=rn()(o,le),pn=h("timeline",R),ln=ie(pn),sn=v()(ln,2),bn=sn[0],U=sn[1],Mn=zn(b,F);return bn((0,G.jsx)(P,y()(y()({},Q),{},{className:d()(z==null?void 0:z.className,J),style:y()(y()({},z==null?void 0:z.style),_),prefixCls:pn,direction:E,items:Mn,hashId:U})))};se.Item=w;var En=se,m=En}}]);
