"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[2781],{90538:function(t,n,d){d.r(n);var a=d(64686),i=d(84323),s=d(73552),m=d(87413),x=d(7265),l=d(20472),h=d(8902),p=d(18210),o=d(79891),r=d(73693),u=d(69854),_=d(31627),e=d(13225);function c(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u67E5\u8BE2\u5217\u8868",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u67E5\u8BE2\u5217\u8868",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u67E5\u8BE2\u5217\u8868"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsx)(l.Z,{lang:"tsx",children:_.texts[2].value}),(0,e.jsxs)("h2",{id:"\u601D\u8DEF",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u601D\u8DEF",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u601D\u8DEF"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[_.texts[3].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:_.texts[4].value}),(0,e.jsxs)("li",{children:[_.texts[5].value,(0,e.jsx)("code",{children:_.texts[6].value}),_.texts[7].value]}),(0,e.jsxs)("li",{children:[_.texts[8].value,(0,e.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]})]})]}),(0,e.jsxs)("li",{children:[_.texts[11].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:_.texts[12].value}),(0,e.jsx)("li",{children:_.texts[13].value}),(0,e.jsx)("li",{children:_.texts[14].value}),(0,e.jsx)("li",{children:_.texts[15].value})]})]}),(0,e.jsxs)("li",{children:[_.texts[16].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:_.texts[17].value}),(0,e.jsx)("li",{children:_.texts[18].value})]})]})]})]})})})})}n.default=c},31627:function(t,n,d){d.r(n),d.d(n,{texts:function(){return a}});const a=[{value:"\u56E0\u4E3A Formily Schema \u662F\u53EF\u4EE5\u5B8C\u5168\u63CF\u8FF0 UI \u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7684\u62BD\u8C61\u51FA QueryList/QueryForm/QueryTable \u51E0\u4E2A\u7EC4\u4EF6\u6765\u7EC4\u5408\u5B9E\u73B0\u67E5\u8BE2\u5217\u8868\u7EC4\u4EF6,\u4EE5\u4E0B\u53EA\u662F\u7ED9\u51FA\u4F2A\u4EE3\u7801\uFF0C\u56E0\u4E3A\u67E5\u8BE2\u5217\u8868\u573A\u666F\u901A\u5E38\u90FD\u4F1A\u6D89\u53CA\u5927\u91CF\u4E1A\u52A1\u5C01\u88C5\uFF0C\u76EE\u524D Formily \u8FD8\u6CA1\u60F3\u597D\u600E\u4E48\u65E2\u8003\u8651\u901A\u7528\u6027\u53C8\u80FD\u8003\u8651\u4E1A\u52A1\u5FEB\u901F\u4E0A\u624B\uFF0C\u6240\u4EE5\u6682\u65F6\u4E0D\u5F00\u653E\u51FA\u5177\u4F53\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u4E0D\u8FC7\u53EF\u4EE5\u5148\u770B\u770B\u4F2A\u4EE3\u7801\uFF0C\u5982\u679C\u5B98\u65B9\u5B9E\u73B0\u8FD9\u51E0\u4E2A\u7EC4\u4EF6\uFF0C\u90A3\u4F7F\u7528\u65B9\u5F0F\u80AF\u5B9A\u4F1A\u662F\u8FD9\u6837\uFF1A",paraId:1,tocIndex:0},{value:`import React from 'react'
import { Void, Object, Array, String } from './MySchemaField'
export default () => (
  <Void
    x-component="QueryList"
    x-component-props={{
      service: (params) => fetchRecords(params),
    }}
  >
    <Object name="query" x-component="QueryForm">
      <String name="name" x-component="Input" />
      <String name="id" x-component="Input" />
    </Object>
    <Void name="toolbar" x-component="QueryToolbar"></Void>
    <Array name="list" x-component="QueryTable">
      <Object>
        <Void x-component="QueryTable.Column">
          <String name="name" x-component="PreviewText" />
        </Void>
        <Void x-component="QueryTable.Column">
          <String name="id" x-component="PreviewText" />
        </Void>
      </Object>
    </Array>
  </Void>
)
`,paraId:2,tocIndex:0},{value:`QueryList
`,paraId:3,tocIndex:1},{value:"\u4E3B\u8981\u8D1F\u8D23\u5728\u9876\u5C42\u53D1\u8BF7\u6C42\uFF0C\u901A\u8FC7 React Context \u4E0B\u53D1 query \u65B9\u6CD5\u7ED9 QueryForm \u548C QueryTable \u6D88\u8D39",paraId:4,tocIndex:1},{value:"\u67E5\u8BE2\u53C2\u6570\u9700\u8981\u8C03\u7528",paraId:4,tocIndex:1},{value:"form.query('query')",paraId:4,tocIndex:1},{value:"\u627E\u5230 QueryForm \u7684\u5B57\u6BB5\uFF0C\u7136\u540E\u53D6\u51FA\u5B57\u6BB5\u7684 value\uFF0C\u7528\u4E8E\u53D1\u8BF7\u6C42",paraId:4,tocIndex:1},{value:"\u5F53\u67E5\u8BE2\u5B8C\u6570\u636E\u4E86\uFF0C\u9700\u8981\u8C03\u7528",paraId:4,tocIndex:1},{value:"form.query('list')",paraId:4,tocIndex:1},{value:"\u627E\u5230 QueryTable \u7684\u5B57\u6BB5\uFF0C\u7136\u540E\u7ED9\u5B57\u6BB5\u6A21\u578B\u7684 value \u586B table \u6570\u636E",paraId:4,tocIndex:1},{value:`QueryTable
`,paraId:3,tocIndex:1},{value:"\u601D\u8DEF\u8DDF ArrayTable \u975E\u5E38\u76F8\u4F3C\uFF0C\u4E3B\u8981\u5C31\u662F\u89E3\u6790 Schema \u5B50\u6811\uFF0C\u81EA\u5DF1\u62FC\u88C5\u51FA Table \u9700\u8981\u7684 Columns \u6570\u636E\uFF0C\u5982\u679C\u60F3\u652F\u6301\u5217\u5408\u5E76\uFF0C\u884C\u5408\u5E76\uFF0C\u5C31\u9700\u8981\u89E3\u6790\u66F4\u590D\u6742\u7684\u6570\u636E",paraId:5,tocIndex:1},{value:"\u57FA\u4E8E props.value \u7528\u4E8E\u6E32\u67D3 Table \u7ED3\u6784",paraId:5,tocIndex:1},{value:"\u4F9D\u8D56 RecursionField \u7528\u4E8E\u6E32\u67D3 Table Column \u5185\u90E8\u6570\u636E",paraId:5,tocIndex:1},{value:"\u4F9D\u8D56\u4E0A\u4E0B\u6587\u4F20\u4E0B\u6765\u7684 query \u65B9\u6CD5\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2",paraId:5,tocIndex:1},{value:`QueryForm
`,paraId:3,tocIndex:1},{value:"\u6CA1\u4EC0\u4E48\u7279\u6B8A\u903B\u8F91\uFF0C\u4E3B\u8981\u5C31\u662F\u7EC4\u5408 Form+FormGrid \u5B9E\u73B0\u4E00\u4E2A\u67E5\u8BE2\u8868\u5355\u5E03\u5C40",paraId:6,tocIndex:1},{value:"\u4F9D\u8D56\u4E0A\u4E0B\u6587\u4F20\u4E0B\u6765\u7684 query \u65B9\u6CD5\u5B9E\u73B0\u67E5\u8BE2\u8868\u5355\u67E5\u8BE2",paraId:6,tocIndex:1}]}}]);
