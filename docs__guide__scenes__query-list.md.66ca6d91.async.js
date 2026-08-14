"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[9060],{15175:function(o,d,t){t.r(d);var a=t(64686),u=t(84323),c=t(73552),m=t(87413),h=t(7265),_=t(20472),x=t(8902),p=t(18210),l=t(79891),r=t(73693),i=t(69854),n=t(88944),e=t(13225);function s(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"query-list",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#query-list",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Query list"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)("p",{children:n.texts[1].value}),(0,e.jsx)(_.Z,{lang:"tsx",children:n.texts[2].value}),(0,e.jsxs)("h2",{id:"ideas",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ideas",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Ideas"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[3].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[4].value}),(0,e.jsxs)("li",{children:[n.texts[5].value,(0,e.jsx)("code",{children:n.texts[6].value}),n.texts[7].value]}),(0,e.jsxs)("li",{children:[n.texts[8].value,(0,e.jsx)("code",{children:n.texts[9].value}),n.texts[10].value]})]})]}),(0,e.jsxs)("li",{children:[n.texts[11].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[12].value}),(0,e.jsx)("li",{children:n.texts[13].value}),(0,e.jsx)("li",{children:n.texts[14].value}),(0,e.jsx)("li",{children:n.texts[15].value})]})]}),(0,e.jsxs)("li",{children:[n.texts[16].value,(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[17].value}),(0,e.jsx)("li",{children:n.texts[18].value})]})]})]})]})})})})}d.default=s},88944:function(o,d,t){t.r(d),t.d(d,{texts:function(){return a}});const a=[{value:"Because Formily Schema can completely describe the UI, we can simply abstract out the QueryList/QueryForm/QueryTable components to combine to implement the query list component. The following is only the pseudo code, because the query list scenario usually involves a lot of business packaging. At present, Formily hasn't figured out how to consider both versatility and quick start of business, so it will not open up specific components for the time being.",paraId:0,tocIndex:0},{value:"But you can take a look at the pseudo-code first. If these components are officially implemented, the usage will definitely be like this:",paraId:1,tocIndex:0},{value:`import React from 'react'
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
`,paraId:3,tocIndex:1},{value:"Mainly responsible for sending requests at the top level, and issuing query methods to QueryForm and QueryTable for consumption through React Context",paraId:4,tocIndex:1},{value:"Query parameters need to call ",paraId:4,tocIndex:1},{value:"form.query('query')",paraId:4,tocIndex:1},{value:" to find the field of QueryForm, and then take out the value of the field to send the request",paraId:4,tocIndex:1},{value:"When you have finished querying the data, you need to call ",paraId:4,tocIndex:1},{value:"form.query('list')",paraId:4,tocIndex:1},{value:" to find the QueryTable field, and then fill in the table data for the value of the field model",paraId:4,tocIndex:1},{value:`QueryTable
`,paraId:3,tocIndex:1},{value:"The idea is very similar to that of ArrayTable. The main thing is to parse the Schema subtree and assemble the Columns data needed by the Table by yourself. If you want to support column merging and row merging, you need to parse more complex data",paraId:5,tocIndex:1},{value:"Based on props.value for rendering Table structure",paraId:5,tocIndex:1},{value:"Rely on RecursionField to render the internal data of the Table Column",paraId:5,tocIndex:1},{value:"Rely on the query method passed down from the context to achieve paging query",paraId:5,tocIndex:1},{value:`QueryForm
`,paraId:3,tocIndex:1},{value:"There is no special logic, the main thing is to combine Form+FormGrid to realize a query form layout",paraId:6,tocIndex:1},{value:"Realize query form query by relying on the query method passed down from the context",paraId:6,tocIndex:1}]}}]);
