"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[2579],{33082:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},43119:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},50278:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},99247:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return A}});var Y=e(90228),j=e.n(Y),Fe=e(87999),x=e.n(Fe),oe=e(69854),P=e(97204),E=e(40751),$=e(68168),A={"docs-guide-advanced-calculator-demo-zh-cn-0":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F,m,d;return j()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=o.sent,M=B.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return I=o.sent,s=I.Form,t=I.FormItem,l=I.NumberPicker,v=I.ArrayTable,y=I.Editable,n=I.Input,a=I.FormButtonGroup,c=I.Submit,o.next=17,Promise.resolve().then(e.bind(e,40751));case 17:return r=o.sent,p=r.createForm,o.next=21,Promise.resolve().then(e.bind(e,68168));case 21:return u=o.sent,F=u.createSchemaField,m=F({components:{FormItem:t,Editable:y,Input:n,NumberPicker:l,ArrayTable:v}}),d=p(),o.abrupt("return",{default:function(){return M.createElement(s,{form:d,layout:"vertical"},M.createElement(m,null,M.createElement(m.Array,{name:"projects",title:"Projects","x-decorator":"FormItem","x-component":"ArrayTable"},M.createElement(m.Object,null,M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Sort",align:"center"}},M.createElement(m.Void,{"x-decorator":"FormItem","x-component":"ArrayTable.SortHandle"})),M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{width:80,title:"Index",align:"center"}},M.createElement(m.String,{"x-decorator":"FormItem","x-component":"ArrayTable.Index"})),M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Price"}},M.createElement(m.Number,{name:"price","x-decorator":"Editable",required:!0,"x-component":"NumberPicker","x-component-props":{addonAfter:"$"},default:0})),M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Count"}},M.createElement(m.Number,{name:"count","x-decorator":"Editable",required:!0,"x-component":"NumberPicker",default:0})),M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Total"}},M.createElement(m.Number,{"x-decorator":"FormItem",name:"total","x-component":"NumberPicker","x-pattern":"readPretty","x-component-props":{addonAfter:"$"},"x-reactions":{dependencies:[".price",".count"],when:"{{$deps[0] && $deps[1]}}",fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}})),M.createElement(m.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Operations",dataIndex:"operations",width:200,fixed:"right"}},M.createElement(m.Void,{"x-component":"FormItem"},M.createElement(m.Void,{"x-component":"ArrayTable.Remove"}),M.createElement(m.Void,{"x-component":"ArrayTable.MoveDown"}),M.createElement(m.Void,{"x-component":"ArrayTable.MoveUp"})))),M.createElement(m.Void,{"x-component":"ArrayTable.Addition",title:"Add"})),M.createElement(m.Number,{name:"total",title:"Total","x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-pattern":"readPretty","x-reactions":{dependencies:[".projects"],when:"{{$deps[0].length > 0}}",fulfill:{state:{value:"{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}"}}}})),M.createElement(a,null,M.createElement(c,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 26:case"end":return o.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-calculator-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  Form,
  FormItem,
  NumberPicker,
  ArrayTable,
  Editable,
  Input,
  FormButtonGroup,
  Submit,
} from '@next-formily/antd'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    NumberPicker,
    ArrayTable,
  },
})

const form = createForm()

export default () => {
  return (
    <Form form={form} layout="vertical">
      <SchemaField>
        <SchemaField.Array
          name="projects"
          title="Projects"
          x-decorator="FormItem"
          x-component="ArrayTable"
        >
          <SchemaField.Object>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ width: 50, title: 'Sort', align: 'center' }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayTable.SortHandle"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ width: 80, title: 'Index', align: 'center' }}
            >
              <SchemaField.String
                x-decorator="FormItem"
                x-component="ArrayTable.Index"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'Price' }}
            >
              <SchemaField.Number
                name="price"
                x-decorator="Editable"
                required
                x-component="NumberPicker"
                x-component-props={{
                  addonAfter: '$',
                }}
                default={0}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'Count' }}
            >
              <SchemaField.Number
                name="count"
                x-decorator="Editable"
                required
                x-component="NumberPicker"
                default={0}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'Total' }}
            >
              <SchemaField.Number
                x-decorator="FormItem"
                name="total"
                x-component="NumberPicker"
                x-pattern="readPretty"
                x-component-props={{
                  addonAfter: '$',
                }}
                x-reactions={{
                  dependencies: ['.price', '.count'],
                  when: '{{$deps[0] && $deps[1]}}',
                  fulfill: {
                    state: {
                      value: '{{$deps[0] * $deps[1]}}',
                    },
                  },
                }}
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                title: 'Operations',
                dataIndex: 'operations',
                width: 200,
                fixed: 'right',
              }}
            >
              <SchemaField.Void x-component="FormItem">
                <SchemaField.Void x-component="ArrayTable.Remove" />
                <SchemaField.Void x-component="ArrayTable.MoveDown" />
                <SchemaField.Void x-component="ArrayTable.MoveUp" />
              </SchemaField.Void>
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void x-component="ArrayTable.Addition" title="Add" />
        </SchemaField.Array>
        <SchemaField.Number
          name="total"
          title="Total"
          x-decorator="FormItem"
          x-component="NumberPicker"
          x-component-props={{
            addonAfter: '$',
          }}
          x-pattern="readPretty"
          x-reactions={{
            dependencies: ['.projects'],
            when: '{{$deps[0].length > 0}}',
            fulfill: {
              state: {
                value:
                  '{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}',
              },
            },
          }}
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/calculator.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/antd":P,"@next-formily/core":E,"@next-formily/react":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}},"docs-guide-advanced-calculator-demo-zh-cn-1":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return j()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=i.sent,M=B.default,i.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return I=i.sent,s=I.Form,t=I.FormItem,l=I.NumberPicker,v=I.ArrayTable,y=I.Editable,n=I.Input,a=I.FormButtonGroup,c=I.Submit,i.next=17,Promise.resolve().then(e.bind(e,40751));case 17:return r=i.sent,p=r.createForm,i.next=21,Promise.resolve().then(e.bind(e,68168));case 21:return u=i.sent,F=u.createSchemaField,m=F({components:{FormItem:t,Editable:y,Input:n,NumberPicker:l,ArrayTable:v}}),d=p(),f={type:"object",properties:{projects:{type:"array",title:"Projects","x-decorator":"FormItem","x-component":"ArrayTable",items:{type:"object",properties:{column_1:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Sort",align:"center"},properties:{sortable:{type:"void","x-component":"ArrayTable.SortHandle"}}},column_2:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Index",align:"center"},properties:{index:{type:"void","x-component":"ArrayTable.Index"}}},column_3:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Price"},properties:{price:{type:"number",default:0,"x-decorator":"Editable","x-component":"NumberPicker","x-component-props":{addonAfter:"$"}}}},column_4:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Count"},properties:{count:{type:"number",default:0,"x-decorator":"Editable","x-component":"NumberPicker","x-component-props":{addonAfter:"$"}}}},column_5:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Total"},properties:{total:{type:"number","x-read-pretty":!0,"x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-reactions":{dependencies:[".price",".count"],when:"{{$deps[0] && $deps[1]}}",fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}}}},column_6:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Operations"},properties:{item:{type:"void","x-component":"FormItem",properties:{remove:{type:"void","x-component":"ArrayTable.Remove"},moveDown:{type:"void","x-component":"ArrayTable.MoveDown"},moveUp:{type:"void","x-component":"ArrayTable.MoveUp"}}}}}}},properties:{add:{type:"void",title:"Add","x-component":"ArrayTable.Addition"}}},total:{type:"number",title:"Total","x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-pattern":"readPretty","x-reactions":{dependencies:[".projects"],when:"{{$deps[0].length > 0}}",fulfill:{state:{value:"{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}"}}}}}},i.abrupt("return",{default:function(){return M.createElement(s,{form:d,layout:"vertical"},M.createElement(m,{schema:f}),M.createElement(a,null,M.createElement(c,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 27:case"end":return i.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-calculator-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  Form,
  FormItem,
  NumberPicker,
  ArrayTable,
  Editable,
  Input,
  FormButtonGroup,
  Submit,
} from '@next-formily/antd'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    NumberPicker,
    ArrayTable,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    projects: {
      type: 'array',
      title: 'Projects',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      items: {
        type: 'object',
        properties: {
          column_1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              width: 50,
              title: 'Sort',
              align: 'center',
            },
            properties: {
              sortable: {
                type: 'void',
                'x-component': 'ArrayTable.SortHandle',
              },
            },
          },
          column_2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              width: 50,
              title: 'Index',
              align: 'center',
            },
            properties: {
              index: {
                type: 'void',
                'x-component': 'ArrayTable.Index',
              },
            },
          },
          column_3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Price',
            },
            properties: {
              price: {
                type: 'number',
                default: 0,
                'x-decorator': 'Editable',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonAfter: '$',
                },
              },
            },
          },
          column_4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Count',
            },
            properties: {
              count: {
                type: 'number',
                default: 0,
                'x-decorator': 'Editable',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonAfter: '$',
                },
              },
            },
          },
          column_5: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Total',
            },
            properties: {
              total: {
                type: 'number',
                'x-read-pretty': true,
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonAfter: '$',
                },
                'x-reactions': {
                  dependencies: ['.price', '.count'],
                  when: '{{$deps[0] && $deps[1]}}',
                  fulfill: {
                    state: {
                      value: '{{$deps[0] * $deps[1]}}',
                    },
                  },
                },
              },
            },
          },
          column_6: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: 'Add',
          'x-component': 'ArrayTable.Addition',
        },
      },
    },
    total: {
      type: 'number',
      title: 'Total',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        addonAfter: '$',
      },
      'x-pattern': 'readPretty',
      'x-reactions': {
        dependencies: ['.projects'],
        when: '{{$deps[0].length > 0}}',
        fulfill: {
          state: {
            value:
              '{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}',
          },
        },
      },
    },
  },
}

export default () => {
  return (
    <Form form={form} layout="vertical">
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/calculator.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/antd":P,"@next-formily/core":E,"@next-formily/react":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}}}},35686:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return l}});var Y=e(90228),j=e.n(Y),Fe=e(26068),x=e.n(Fe),oe=e(48305),P=e.n(oe),E=e(87999),$=e.n(E),A=e(69854),C=e(40751),B=e(68168),M=e(97204),I=e(70869),s=e(10006),t=e(22285),l={"docs-guide-advanced-controlled-demo-zh-cn-0":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L;return j()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=O.sent,n=y.default,a=y.useMemo,c=y.useState,r=y.useEffect,p=y.useRef,O.next=10,Promise.resolve().then(e.bind(e,40751));case 10:return u=O.sent,F=u.createForm,m=u.onFormValuesChange,O.next=15,Promise.resolve().then(e.bind(e,68168));case 15:return d=O.sent,f=d.createSchemaField,O.next=19,Promise.resolve().then(e.bind(e,97204));case 19:return o=O.sent,i=o.Form,S=o.FormItem,h=o.Input,N=f({components:{Input:h,FormItem:S}}),L=function(R){var z=a(function(){return F({values:R.values,effects:function(){m(function(w){R.onChange(w.values)})}})},[]),Q=p(1);return r(function(){z.setValues(R.values,"overwrite")},[JSON.stringify(R.values)]),n.createElement(i,{form:z},n.createElement(N,null,n.createElement(N.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u53D7\u63A7\u8005"}})),"Form\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A",Q.current++)},O.abrupt("return",{default:function(){var R=c({input:""}),z=P()(R,2),Q=z[0],W=z[1],w=p(1);return n.createElement(n.Fragment,null,n.createElement(S,null,n.createElement(h,{value:Q.input,placeholder:"\u63A7\u5236\u8005",onChange:function(ne){W(x()(x()({},Q),{},{input:ne.target.value}))}})),n.createElement(L,{values:Q,onChange:function(ne){W(x()({},ne))}}),"\u6839\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A",w.current++)}});case 26:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState, useEffect, useRef } from 'react'
import { createForm, onFormValuesChange } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const MyForm = (props) => {
  const form = useMemo(
    () =>
      createForm({
        values: props.values,
        effects: () => {
          onFormValuesChange((form) => {
            props.onChange(form.values)
          })
        },
      }),
    [],
  )
  const count = useRef(1)

  useEffect(() => {
    form.setValues(props.values, 'overwrite')
  }, [JSON.stringify(props.values)])

  return (
    <Form form={form}>
      <SchemaField>
        <SchemaField.String
          name="input"
          x-decorator="FormItem"
          x-component="Input"
          x-component-props={{ placeholder: '\u53D7\u63A7\u8005' }}
        />
      </SchemaField>
      Form\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A{count.current++}
    </Form>
  )
}

export default () => {
  const [values, setValues] = useState({ input: '' })
  const count = useRef(1)
  return (
    <>
      <FormItem>
        <Input
          value={values.input}
          placeholder="\u63A7\u5236\u8005"
          onChange={(event) => {
            setValues({ ...values, input: event.target.value })
          }}
        />
      </FormItem>
      <MyForm
        values={values}
        onChange={(values) => {
          setValues({ ...values })
        }}
      />
      \u6839\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A{count.current++}
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-1":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O;return j()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=R.sent,n=y.default,a=y.useMemo,c=y.useRef,R.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=R.sent,p=r.createForm,R.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=R.sent,F=u.createSchemaField,R.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return m=R.sent,d=m.Form,f=m.FormItem,o=m.Input,R.next=22,Promise.resolve().then(e.bind(e,70869));case 22:return i=R.sent,S=i.observable,R.next=26,Promise.resolve().then(e.bind(e,10006));case 26:return h=R.sent,N=h.observer,L=F({components:{Input:o,FormItem:f}}),T=function(Q){var W=c(1),w=a(function(){return p({values:Q.values})},[]);return n.createElement(d,{form:w},n.createElement(L,null,n.createElement(L.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u53D7\u63A7\u8005"}})),"Form\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A",W.current++)},O=N(function(z){var Q=c(1);return n.createElement(f,null,n.createElement(o,{value:z.values.input,placeholder:"\u63A7\u5236\u8005",onChange:function(w){z.values.input=w.target.value}}),"Controller\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A",Q.current++)}),R.abrupt("return",{default:function(){var Q=c(1),W=a(function(){return S({input:""})});return n.createElement(n.Fragment,null,n.createElement(O,{values:W}),n.createElement(T,{values:W}),"\u6839\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A",Q.current++)}});case 32:case"end":return R.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useRef } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import { observable } from '@next-formily/reactive'
import { observer } from '@next-formily/reactive-react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const MyForm = (props) => {
  const count = useRef(1)
  const form = useMemo(
    () =>
      createForm({
        values: props.values,
      }),
    [],
  )

  return (
    <Form form={form}>
      <SchemaField>
        <SchemaField.String
          name="input"
          x-decorator="FormItem"
          x-component="Input"
          x-component-props={{ placeholder: '\u53D7\u63A7\u8005' }}
        />
      </SchemaField>
      Form\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A{count.current++}
    </Form>
  )
}

const Controller = observer((props) => {
  const count = useRef(1)
  return (
    <FormItem>
      <Input
        value={props.values.input}
        placeholder="\u63A7\u5236\u8005"
        onChange={(event) => {
          props.values.input = event.target.value
        }}
      />
      Controller\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A{count.current++}
    </FormItem>
  )
})

export default () => {
  const count = useRef(1)
  const values = useMemo(() =>
    observable({
      input: '',
    }),
  )
  return (
    <>
      <Controller values={values} />
      <MyForm values={values} />
      \u6839\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\uFF1A{count.current++}
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},"@next-formily/reactive-react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,"@next-formily/reactive":I,"@next-formily/reactive-react":s},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-2":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L;return j()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=O.sent,n=y.default,a=y.useMemo,c=y.useState,O.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=O.sent,p=r.createForm,O.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=O.sent,F=u.createSchemaField,O.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return m=O.sent,d=m.Form,f=m.FormItem,o=m.Input,i=m.Select,O.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return S=O.sent,h=S.Button,N=S.Space,L=F({components:{Input:o,FormItem:f,Select:i}}),O.abrupt("return",{default:function(){var R=c({}),z=P()(R,2),Q=z[0],W=z[1],w=a(function(){return p()},[Q]);return n.createElement(d,{form:w,layout:"vertical"},n.createElement(N,{style:{marginBottom:20}},n.createElement(h,{onClick:function(){W({type:"object",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}})}},"Schema1"),n.createElement(h,{onClick:function(){W({type:"object",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}})}},"Schema2")),n.createElement(L,{schema:Q}))}});case 28:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'
import { Button, Space } from 'antd'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
  },
})

export default () => {
  const [current, setCurrent] = useState({})
  const form = useMemo(() => createForm(), [current])
  return (
    <Form form={form} layout="vertical">
      <Space style={{ marginBottom: 20 }}>
        <Button
          onClick={() => {
            setCurrent({
              type: 'object',
              properties: {
                aa: {
                  type: 'string',
                  title: 'AA',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    placeholder: 'Input',
                  },
                },
              },
            })
          }}
        >
          Schema1
        </Button>
        <Button
          onClick={() => {
            setCurrent({
              type: 'object',
              properties: {
                aa: {
                  type: 'string',
                  title: 'AA',
                  'x-decorator': 'FormItem',
                  enum: [
                    {
                      label: '111',
                      value: '111',
                    },
                    { label: '222', value: '222' },
                  ],
                  'x-component': 'Select',
                  'x-component-props': {
                    placeholder: 'Select',
                  },
                },
                bb: {
                  type: 'string',
                  title: 'BB',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                },
              },
            })
          }}
        >
          Schema2
        </Button>
      </Space>
      <SchemaField schema={current} />
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:t},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-3":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L;return j()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=O.sent,n=y.default,a=y.useMemo,c=y.useRef,O.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=O.sent,p=r.createForm,O.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=O.sent,F=u.createSchemaField,m=u.observer,O.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return d=O.sent,f=d.Form,o=d.FormItem,i=d.Input,S=d.Select,h=F({components:{Input:i,FormItem:o,Select:S}}),N={type_1:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}},type_2:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}}},L=m(function(){var U=c(),R=a(function(){return p()},[]),z=R.values.type,Q={type:"object",properties:{type:{type:"string",title:"\u7C7B\u578B",enum:[{label:"\u7C7B\u578B1",value:"type_1"},{label:"\u7C7B\u578B2",value:"type_2"}],"x-decorator":"FormItem","x-component":"Select"},container:N[z]}};return U.current!==z&&R.clearFormGraph("container.*"),U.current=z,n.createElement(f,{form:R,layout:"vertical"},n.createElement(h,{schema:Q}))}),O.abrupt("return",{default:L});case 26:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useRef } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, observer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
  },
})

const DYNAMIC_INJECT_SCHEMA = {
  type_1: {
    type: 'void',
    properties: {
      aa: {
        type: 'string',
        title: 'AA',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          placeholder: 'Input',
        },
      },
    },
  },
  type_2: {
    type: 'void',
    properties: {
      aa: {
        type: 'string',
        title: 'AA',
        'x-decorator': 'FormItem',
        enum: [
          {
            label: '111',
            value: '111',
          },
          { label: '222', value: '222' },
        ],
        'x-component': 'Select',
        'x-component-props': {
          placeholder: 'Select',
        },
      },
      bb: {
        type: 'string',
        title: 'BB',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  },
}

const App = observer(() => {
  const oldTypeRef = useRef()
  const form = useMemo(() => createForm(), [])
  const currentType = form.values.type
  const schema = {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        title: '\u7C7B\u578B',
        enum: [
          { label: '\u7C7B\u578B1', value: 'type_1' },
          { label: '\u7C7B\u578B2', value: 'type_2' },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      container: DYNAMIC_INJECT_SCHEMA[currentType],
    },
  }

  if (oldTypeRef.current !== currentType) {
    form.clearFormGraph('container.*') //\u56DE\u6536\u5B57\u6BB5\u6A21\u578B
  }

  oldTypeRef.current = currentType

  return (
    <Form form={form} layout="vertical">
      <SchemaField schema={schema} />
    </Form>
  )
})

export default App`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-4":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z;return j()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=W.sent,n=y.default,a=y.useMemo,c=y.useState,r=y.useEffect,W.next=9,Promise.resolve().then(e.bind(e,40751));case 9:return p=W.sent,u=p.createForm,W.next=13,Promise.resolve().then(e.bind(e,68168));case 13:return F=W.sent,m=F.createSchemaField,d=F.RecursionField,f=F.useForm,o=F.useField,i=F.observer,W.next=21,Promise.resolve().then(e.bind(e,97204));case 21:return S=W.sent,h=S.Form,N=S.FormItem,L=S.Input,T=S.Select,O=i(function(){var w=o(),G=f(),ne=c({}),te=P()(ne,2),ce=te[0],me=te[1];return r(function(){G.clearFormGraph("".concat(w.address,".*")),me(R[G.values.type])},[G.values.type]),n.createElement(d,{basePath:w.address,schema:ce,onlyRenderProperties:!0})}),U=m({components:{Input:L,FormItem:N,Select:T,Custom:O}}),R={type_1:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}},type_2:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}}},z=i(function(){var w=a(function(){return u()},[]),G={type:"object",properties:{type:{type:"string",title:"\u7C7B\u578B",enum:[{label:"\u7C7B\u578B1",value:"type_1"},{label:"\u7C7B\u578B2",value:"type_2"}],"x-decorator":"FormItem","x-component":"Select"},container:{type:"object","x-component":"Custom"}}};return n.createElement(h,{form:w,layout:"vertical"},n.createElement(U,{schema:G}))}),W.abrupt("return",{default:z});case 31:case"end":return W.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import {
  createSchemaField,
  RecursionField,
  useForm,
  useField,
  observer,
} from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const Custom = observer(() => {
  const field = useField()
  const form = useForm()
  const [schema, setSchema] = useState({})

  useEffect(() => {
    form.clearFormGraph(\`\${field.address}.*\`) //\u56DE\u6536\u5B57\u6BB5\u6A21\u578B
    //\u53EF\u4EE5\u5F02\u6B65\u83B7\u53D6
    setSchema(DYNAMIC_INJECT_SCHEMA[form.values.type])
  }, [form.values.type])

  return (
    <RecursionField
      basePath={field.address}
      schema={schema}
      onlyRenderProperties
    />
  )
})

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
    Custom,
  },
})

const DYNAMIC_INJECT_SCHEMA = {
  type_1: {
    type: 'void',
    properties: {
      aa: {
        type: 'string',
        title: 'AA',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          placeholder: 'Input',
        },
      },
    },
  },
  type_2: {
    type: 'void',
    properties: {
      aa: {
        type: 'string',
        title: 'AA',
        'x-decorator': 'FormItem',
        enum: [
          {
            label: '111',
            value: '111',
          },
          { label: '222', value: '222' },
        ],
        'x-component': 'Select',
        'x-component-props': {
          placeholder: 'Select',
        },
      },
      bb: {
        type: 'string',
        title: 'BB',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  },
}

const App = observer(() => {
  const form = useMemo(() => createForm(), [])
  const schema = {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        title: '\u7C7B\u578B',
        enum: [
          { label: '\u7C7B\u578B1', value: 'type_1' },
          { label: '\u7C7B\u578B2', value: 'type_2' },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      container: {
        type: 'object',
        'x-component': 'Custom',
      },
    },
  }

  return (
    <Form form={form} layout="vertical">
      <SchemaField schema={schema} />
    </Form>
  )
})

export default App`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-5":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T;return j()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=U.sent,n=y.default,U.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return a=U.sent,c=a.createForm,U.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return r=U.sent,p=r.createSchemaField,U.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return u=U.sent,F=u.Form,m=u.FormItem,d=u.Input,U.next=20,Promise.resolve().then(e.bind(e,70869));case 20:return f=U.sent,o=f.observable,U.next=24,Promise.resolve().then(e.bind(e,10006));case 24:return i=U.sent,S=i.observer,h=p({components:{Input:d,FormItem:m}}),N=c(),L=o({input:""}),T=S(function(){return n.createElement(m,null,n.createElement(d,{value:L.input,placeholder:"\u63A7\u5236\u8005",onChange:function(z){L.input=z.target.value}}))}),U.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(T,null),n.createElement(F,{form:N},n.createElement(h,null,n.createElement(h.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u53D7\u63A7\u8005"},"x-reactions":function(Q){Q.component[1].placeholder=L.input||"\u53D7\u63A7\u8005"}}))))}});case 31:case"end":return U.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import { observable } from '@next-formily/reactive'
import { observer } from '@next-formily/reactive-react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

const obs = observable({
  input: '',
})

const Controller = observer(() => {
  return (
    <FormItem>
      <Input
        value={obs.input}
        placeholder="\u63A7\u5236\u8005"
        onChange={(event) => {
          obs.input = event.target.value
        }}
      />
    </FormItem>
  )
})

export default () => {
  return (
    <>
      <Controller />
      <Form form={form}>
        <SchemaField>
          <SchemaField.String
            name="input"
            x-decorator="FormItem"
            x-component="Input"
            x-component-props={{ placeholder: '\u53D7\u63A7\u8005' }}
            x-reactions={(field) => {
              field.component[1].placeholder = obs.input || '\u53D7\u63A7\u8005'
            }}
          />
        </SchemaField>
      </Form>
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},"@next-formily/reactive-react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,"@next-formily/reactive":I,"@next-formily/reactive-react":s},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}},"docs-guide-advanced-controlled-demo-zh-cn-6":{component:A.memo(A.lazy($()(j()().mark(function v(){var y,n,a,c,r,p,u,F,m,d,f,o,i;return j()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return y=h.sent,n=y.default,a=y.useState,h.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return c=h.sent,r=c.createForm,h.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return p=h.sent,u=p.createSchemaField,h.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return F=h.sent,m=F.Form,d=F.FormItem,f=F.Input,o=u({components:{Input:f,FormItem:d}}),i=r(),h.abrupt("return",{default:function(){var L=a(""),T=P()(L,2),O=T[0],U=T[1];return n.createElement(n.Fragment,null,n.createElement(d,null,n.createElement(f,{value:O,placeholder:"\u63A7\u5236\u8005",onChange:function(z){U(z.target.value)}})),n.createElement(m,{form:i},n.createElement(o,null,n.createElement(o.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:O||"\u53D7\u63A7\u8005"}}))))}});case 22:case"end":return h.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <FormItem>
        <Input
          value={value}
          placeholder="\u63A7\u5236\u8005"
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
      </FormItem>
      <Form form={form}>
        <SchemaField>
          <SchemaField.String
            name="input"
            x-decorator="FormItem"
            x-component="Input"
            x-component-props={{ placeholder: value || '\u53D7\u63A7\u8005' }}
          />
        </SchemaField>
      </Form>
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M},renderOpts:{compile:function(){var v=$()(j()().mark(function n(){var a,c=arguments;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,c));case 3:case"end":return p.stop()}},n)}));function y(){return v.apply(this,arguments)}return y}()}}}},91918:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},92979:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return A}});var Y=e(90228),j=e.n(Y),Fe=e(87999),x=e.n(Fe),oe=e(69854),P=e(97204),E=e(40751),$=e(68168),A={"docs-guide-advanced-destructor-demo-zh-cn-0":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F,m,d;return j()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=o.sent,M=B.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return I=o.sent,s=I.Form,t=I.FormItem,l=I.DatePicker,v=I.FormButtonGroup,y=I.Radio,n=I.Submit,o.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=o.sent,c=a.createForm,r=a.onFieldValueChange,o.next=20,Promise.resolve().then(e.bind(e,68168));case 20:return p=o.sent,u=p.createSchemaField,F=p.FormConsumer,m=u({components:{FormItem:t,DatePicker:l,Radio:y}}),d=c({effects:function(){r("visible_destructor",function(S){d.setFieldState("[startDate,endDate]",function(h){h.visible=!!S.value})})}}),o.abrupt("return",{default:function(){return M.createElement(s,{form:d,layout:"vertical"},M.createElement(m,null,M.createElement(m.Boolean,{name:"visible_destructor",title:"\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5",default:!0,enum:[{label:"\u662F",value:!0},{label:"\u5426",value:!1}],"x-decorator":"FormItem","x-component":"Radio.Group"}),M.createElement(m.String,{name:"undestructor",title:"\u89E3\u6784\u524D","x-decorator":"FormItem","x-component":"DatePicker.RangePicker"}),M.createElement(m.String,{name:"[startDate,endDate]",title:"\u89E3\u6784\u540E",default:["2020-11-20","2021-12-30"],"x-decorator":"FormItem","x-component":"DatePicker.RangePicker"})),M.createElement("code",null,M.createElement("pre",null,M.createElement(F,null,function(S){return JSON.stringify(S.values,null,2)}))),M.createElement(v,null,M.createElement(n,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 26:case"end":return o.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  Form,
  FormItem,
  DatePicker,
  FormButtonGroup,
  Radio,
  Submit,
} from '@next-formily/antd'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Radio,
  },
})

const form = createForm({
  effects() {
    onFieldValueChange('visible_destructor', (field) => {
      form.setFieldState('[startDate,endDate]', (state) => {
        state.visible = !!field.value
      })
    })
  },
})

export default () => {
  return (
    <Form form={form} layout="vertical">
      <SchemaField>
        <SchemaField.Boolean
          name="visible_destructor"
          title="\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5"
          default={true}
          enum={[
            { label: '\u662F', value: true },
            { label: '\u5426', value: false },
          ]}
          x-decorator="FormItem"
          x-component="Radio.Group"
        />
        <SchemaField.String
          name="undestructor"
          title="\u89E3\u6784\u524D"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
        />
        <SchemaField.String
          name="[startDate,endDate]"
          title="\u89E3\u6784\u540E"
          default={['2020-11-20', '2021-12-30']}
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
        />
      </SchemaField>
      <code>
        <pre>
          <FormConsumer>
            {(form) => JSON.stringify(form.values, null, 2)}
          </FormConsumer>
        </pre>
      </code>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/antd":P,"@next-formily/core":E,"@next-formily/react":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}},"docs-guide-advanced-destructor-demo-zh-cn-1":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F,m,d;return j()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=o.sent,M=B.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return I=o.sent,s=I.Form,t=I.FormItem,l=I.DatePicker,v=I.FormButtonGroup,y=I.Radio,n=I.Submit,o.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=o.sent,c=a.createForm,o.next=19,Promise.resolve().then(e.bind(e,68168));case 19:return r=o.sent,p=r.createSchemaField,u=r.FormConsumer,F=p({components:{FormItem:t,DatePicker:l,Radio:y}}),m=c(),d={type:"object",properties:{visible_destructor:{type:"boolean",title:"\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5",default:!0,enum:[{label:"\u662F",value:!0},{label:"\u5426",value:!1}],"x-decorator":"FormItem","x-component":"Radio.Group"},undestructor:{type:"string",title:"\u89E3\u6784\u524D","x-decorator":"FormItem","x-component":"DatePicker.RangePicker"},"[startDate,endDate]":{type:"string",title:"\u89E3\u6784\u540E",default:["2020-11-20","2021-12-30"],"x-decorator":"FormItem","x-component":"DatePicker.RangePicker","x-reactions":{dependencies:["visible_destructor"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}}}},o.abrupt("return",{default:function(){return M.createElement(s,{form:m,layout:"vertical"},M.createElement(F,{schema:d}),M.createElement("code",null,M.createElement("pre",null,M.createElement(u,null,function(S){return JSON.stringify(S.values,null,2)}))),M.createElement(v,null,M.createElement(n,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 26:case"end":return o.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  Form,
  FormItem,
  DatePicker,
  FormButtonGroup,
  Radio,
  Submit,
} from '@next-formily/antd'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Radio,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    visible_destructor: {
      type: 'boolean',
      title: '\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5',
      default: true,
      enum: [
        { label: '\u662F', value: true },
        { label: '\u5426', value: false },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
    },
    undestructor: {
      type: 'string',
      title: '\u89E3\u6784\u524D',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
    },
    '[startDate,endDate]': {
      type: 'string',
      title: '\u89E3\u6784\u540E',
      default: ['2020-11-20', '2021-12-30'],
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-reactions': {
        dependencies: ['visible_destructor'],
        fulfill: {
          state: {
            visible: '{{!!$deps[0]}}',
          },
        },
      },
    },
  },
}

export default () => {
  return (
    <Form form={form} layout="vertical">
      <SchemaField schema={schema} />
      <code>
        <pre>
          <FormConsumer>
            {(form) => JSON.stringify(form.values, null, 2)}
          </FormConsumer>
        </pre>
      </code>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/antd":P,"@next-formily/core":E,"@next-formily/react":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}},"docs-guide-advanced-destructor-demo-zh-cn-2":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F;return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=d.sent,M=B.default,d.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return I=d.sent,s=I.Form,t=I.FormItem,l=I.DatePicker,v=I.FormButtonGroup,y=I.Radio,n=I.Submit,d.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=d.sent,c=a.createForm,d.next=19,Promise.resolve().then(e.bind(e,68168));case 19:return r=d.sent,p=r.Field,u=r.FormConsumer,F=c(),d.abrupt("return",{default:function(){return M.createElement(s,{form:F,layout:"vertical"},M.createElement(p,{name:"visible_destructor",title:"\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5",initialValue:!0,dataSource:[{label:"\u662F",value:!0},{label:"\u5426",value:!1}],decorator:[t],component:[y.Group]}),M.createElement(p,{name:"undestructor",title:"\u89E3\u6784\u524D",decorator:[t],component:[l.RangePicker]}),M.createElement(p,{name:"[startDate,endDate]",title:"\u89E3\u6784\u540E",initialValue:["2020-11-20","2021-12-30"],decorator:[t],component:[l.RangePicker],reactions:function(i){i.visible=!!i.query("visible_destructor").value()}}),M.createElement("code",null,M.createElement("pre",null,M.createElement(u,null,function(o){return JSON.stringify(o.values,null,2)}))),M.createElement(v,null,M.createElement(n,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 24:case"end":return d.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  Form,
  FormItem,
  DatePicker,
  FormButtonGroup,
  Radio,
  Submit,
} from '@next-formily/antd'
import { createForm } from '@next-formily/core'
import { Field, FormConsumer } from '@next-formily/react'

const form = createForm()

export default () => {
  return (
    <Form form={form} layout="vertical">
      <Field
        name="visible_destructor"
        title="\u662F\u5426\u663E\u793A\u89E3\u6784\u5B57\u6BB5"
        initialValue={true}
        dataSource={[
          { label: '\u662F', value: true },
          { label: '\u5426', value: false },
        ]}
        decorator={[FormItem]}
        component={[Radio.Group]}
      />
      <Field
        name="undestructor"
        title="\u89E3\u6784\u524D"
        decorator={[FormItem]}
        component={[DatePicker.RangePicker]}
      />
      <Field
        name="[startDate,endDate]"
        title="\u89E3\u6784\u540E"
        initialValue={['2020-11-20', '2021-12-30']}
        decorator={[FormItem]}
        component={[DatePicker.RangePicker]}
        reactions={(field) => {
          field.visible = !!field.query('visible_destructor').value()
        }}
      />
      <code>
        <pre>
          <FormConsumer>
            {(form) => JSON.stringify(form.values, null, 2)}
          </FormConsumer>
        </pre>
      </code>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/antd":P,"@next-formily/core":E,"@next-formily/react":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}}}},26500:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},80032:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return M}});var Y=e(36075),j=e.n(Y),Fe=e(90228),x=e.n(Fe),oe=e(87999),P=e.n(oe),E=e(69854),$=e(40751),A=e(68168),C=e(97204),B=e(38417),M={"docs-guide-advanced-linkages-demo-zh-cn-0":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldValueChange,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("select",function(h){d.setFieldState("input",function(N){N.display=h.value})})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('input', (state) => {
        //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
        state.display = field.value
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-1":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input",fulfill:{state:{display:"{{$self.value}}"}}}}),t.createElement(d.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          target: 'input',
          fulfill: {
            state: {
              display: '{{$self.value}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-2":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldValueChange,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("select",function(h){d.setFieldState("*(input1,input2)",function(N){N.display=h.value})})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('*(input1,input2)', (state) => {
        //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
        state.display = field.value
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-3":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"*(input1,input2)",fulfill:{state:{display:"{{$self.value}}"}}}}),t.createElement(d.String,{name:"input1",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          target: '*(input1,input2)',
          fulfill: {
            state: {
              display: '{{$self.value}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-4":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldValueChange,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.NumberPicker,d=v({effects:function(){y("dim_1",function(h){var N=h.value,L=h.query("dim_2").value();d.setFieldState("result",function(T){T.value=N*L})}),y("dim_2",function(h){var N=h.query("dim_1").value(),L=h.value||0;d.setFieldState("result",function(T){T.value=N*L})})}}),f=a({components:{FormItem:u,Input:F,NumberPicker:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.Number,{name:"dim_1",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"dim_2",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"result",title:"\u53D7\u63A7\u8005","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('dim_1', (field) => {
      const dim1 = field.value
      const dim2 = field.query('dim_2').value()
      form.setFieldState('result', (state) => {
        state.value = dim1 * dim2
      })
    })
    onFieldValueChange('dim_2', (field) => {
      const dim1 = field.query('dim_1').value()
      const dim2 = field.value || 0
      form.setFieldState('result', (state) => {
        state.value = dim1 * dim2
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="dim_1"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="\u53D7\u63A7\u8005"
        x-pattern="readPretty"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-5":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,m=v(),d=n({components:{FormItem:p,Input:u,NumberPicker:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"dim_1",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_2"],target:"result",fulfill:{state:{value:"{{$self.value * $deps[0]}}"}}}}),t.createElement(d.Number,{name:"dim_2",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_1"],target:"result",fulfill:{state:{value:"{{$self.value * $deps[0]}}"}}}}),t.createElement(d.Number,{name:"result",title:"\u53D7\u63A7\u8005","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="dim_1"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['dim_2'],
          target: 'result',
          fulfill: {
            state: {
              value: '{{$self.value * $deps[0]}}',
            },
          },
        }}
      />
      <SchemaField.Number
        name="dim_2"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['dim_1'],
          target: 'result',
          fulfill: {
            state: {
              value: '{{$self.value * $deps[0]}}',
            },
          },
        }}
      />
      <SchemaField.Number
        name="result"
        title="\u53D7\u63A7\u8005"
        x-pattern="readPretty"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-6":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldValueChange,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("select",function(h){d.setFieldState("input1",function(N){N.visible=!!h.value})}),y("input1",function(h){d.setFieldState("input2",function(N){N.visible=!!h.value})})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:!1,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"\u53D7\u63A7\u8005",default:!0,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('input1', (state) => {
        //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
        state.visible = !!field.value
      })
    })
    onFieldValueChange('input1', (field) => {
      form.setFieldState('input2', (state) => {
        //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
        state.visible = !!field.value
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default={false}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        default={true}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-7":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:!1,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input1",fulfill:{state:{visible:"{{!!$self.value}}"}}}}),t.createElement(d.String,{name:"input1",title:"\u53D7\u63A7\u8005",default:!0,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input2",fulfill:{state:{visible:"{{!!$self.value}}"}}}}),t.createElement(d.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default={false}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          target: 'input1',
          fulfill: {
            state: {
              visible: '{{!!$self.value}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        default={true}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          target: 'input2',
          fulfill: {
            state: {
              visible: '{{!!$self.value}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-8":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.onFieldInputValueChange,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,c=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,F=r.NumberPicker,m=v({effects:function(){y("total",function(S){S.value!==void 0&&(m.setFieldState("count",function(h){var N=m.values.price;N&&(h.value=S.value/N)}),m.setFieldState("price",function(h){var N=m.values.count;N&&(h.value=S.value/N)}))}),y("price",function(S){m.setFieldState("total",function(h){var N=m.values.count;N!==void 0&&(h.value=S.value*N)})}),y("count",function(S){m.setFieldState("total",function(h){var N=m.values.price;N!==void 0&&(h.value=S.value*N)})})}}),d=a({components:{FormItem:u,NumberPicker:F}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldInputValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldInputValueChange('total', (field) => {
      if (field.value === undefined) return
      form.setFieldState('count', (state) => {
        const price = form.values.price
        if (!price) return
        state.value = field.value / price
      })
      form.setFieldState('price', (state) => {
        const count = form.values.count
        if (!count) return
        state.value = field.value / count
      })
    })
    onFieldInputValueChange('price', (field) => {
      form.setFieldState('total', (state) => {
        const count = form.values.count
        if (count === undefined) return
        state.value = field.value * count
      })
    })
    onFieldInputValueChange('count', (field) => {
      form.setFieldState('total', (state) => {
        const price = form.values.price
        if (price === undefined) return
        state.value = field.value * price
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="total"
        title="\u603B\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="count"
        title="\u6570\u91CF"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="price"
        title="\u5355\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-9":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,a=y.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.NumberPicker,F=v(),m=n({components:{FormItem:p,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:F},t.createElement(m,null,t.createElement(m.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":[{target:"count",effects:["onFieldInputValueChange"],dependencies:["price"],fulfill:{state:{value:"{{$deps[0] ? $self.value / $deps[0] : $target.value}}"}}},{target:"price",effects:["onFieldInputValueChange"],dependencies:["count"],fulfill:{state:{value:"{{$deps[0] ? $self.value / $deps[0] : $target.value}}"}}}]}),t.createElement(m.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{target:"total",effects:["onFieldInputValueChange"],dependencies:["price"],fulfill:{state:{value:"{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}"}}}}),t.createElement(m.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{target:"total",effects:["onFieldInputValueChange"],dependencies:["count"],fulfill:{state:{value:"{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(F.values,null,2)))}))}});case 22:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'
const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="total"
        title="\u603B\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={[
          {
            target: 'count',
            effects: ['onFieldInputValueChange'],
            dependencies: ['price'],
            fulfill: {
              state: {
                value: '{{$deps[0] ? $self.value / $deps[0] : $target.value}}',
              },
            },
          },
          {
            target: 'price',
            effects: ['onFieldInputValueChange'],
            dependencies: ['count'],
            fulfill: {
              state: {
                value: '{{$deps[0] ? $self.value / $deps[0] : $target.value}}',
              },
            },
          },
        ]}
      />
      <SchemaField.Number
        name="count"
        title="\u6570\u91CF"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          target: 'total',
          effects: ['onFieldInputValueChange'],
          dependencies: ['price'],
          fulfill: {
            state: {
              value:
                '{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}',
            },
          },
        }}
      />
      <SchemaField.Number
        name="price"
        title="\u5355\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          target: 'total',
          effects: ['onFieldInputValueChange'],
          dependencies: ['count'],
          fulfill: {
            state: {
              value:
                '{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-10":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.onFieldValueChange,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,c=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,F=r.Input,o.t0=j(),o.next=23,Promise.resolve().then(e.bind(e,38417));case 23:return o.t1=o.sent,(0,o.t0)(o.t1),m=v({effects:function(){y("color",function(S){S.setComponentProps({style:{backgroundColor:S.value}})})}}),d=a({components:{FormItem:u,Input:F}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"color",default:"#FFFFFF",title:"\u989C\u8272","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 28:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import './input.less'

const form = createForm({
  effects() {
    onFieldValueChange('color', (field) => {
      field.setComponentProps({
        style: {
          backgroundColor: field.value,
        },
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="color"
        default="#FFFFFF"
        title="\u989C\u8272"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{"./input.less":B,react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-11":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,a=y.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.Input,f.t0=j(),f.next=22,Promise.resolve().then(e.bind(e,38417));case 22:return f.t1=f.sent,(0,f.t0)(f.t1),F=v(),m=n({components:{FormItem:p,Input:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:F},t.createElement(m,null,t.createElement(m.Number,{name:"color",default:"#FFFFFF",title:"\u989C\u8272","x-component":"Input","x-decorator":"FormItem","x-reactions":{target:"color",fulfill:{state:{"component[1].style.backgroundColor":"{{$self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(F.values,null,2)))}))}});case 27:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import './input.less'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="color"
        default="#FFFFFF"
        title="\u989C\u8272"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          target: 'color',
          fulfill: {
            state: {
              'component[1].style.backgroundColor': '{{$self.value}}',
            },
            //\u4EE5\u4E0B\u7528\u6CD5\u4E5F\u53EF\u4EE5
            // schema: {
            //   'x-component-props.style.backgroundColor': '{{$self.value}}',
            // },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{"./input.less":B,react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-12":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldValueChange,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("select",function(h){h.loading=!0,setTimeout(function(){h.loading=!1,d.setFieldState("input",function(N){N.display=h.value})},1e3)})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      field.loading = true
      setTimeout(() => {
        field.loading = false
        form.setFieldState('input', (state) => {
          //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
          state.display = field.value
        })
      }, 1000)
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-visible={false}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-13":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F},scope:{asyncVisible:function(S,h){S.loading=!0,setTimeout(function(){S.loading=!1,m.setFieldState(h,function(N){N.display=S.value})},1e3)}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input",effects:["onFieldInit","onFieldValueChange"],fulfill:{run:"asyncVisible($self,$target)"}}}),t.createElement(d.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-13",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
  scope: {
    asyncVisible(field, target) {
      field.loading = true
      setTimeout(() => {
        field.loading = false
        form.setFieldState(target, (state) => {
          //\u5BF9\u4E8E\u521D\u59CB\u8054\u52A8\uFF0C\u5982\u679C\u5B57\u6BB5\u627E\u4E0D\u5230\uFF0CsetFieldState\u4F1A\u5C06\u66F4\u65B0\u63A8\u5165\u66F4\u65B0\u961F\u5217\uFF0C\u76F4\u5230\u5B57\u6BB5\u51FA\u73B0\u518D\u6267\u884C\u64CD\u4F5C
          state.display = field.value
        })
      }, 1000)
    },
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          target: 'input',
          effects: ['onFieldInit', 'onFieldValueChange'],
          fulfill: {
            run: 'asyncVisible($self,$target)',
          },
        }}
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-visible={false}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-14":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldReact,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("input",function(h){h.display=h.query("select").value()})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-14",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('input', (field) => {
      field.display = field.query('select').value()
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-15":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-15",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['select'],
          fulfill: {
            state: {
              display: '{{$deps[0]}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-16":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldReact,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("*(input1,input2)",function(h){h.display=h.query("select").value()})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-16",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('*(input1,input2)', (field) => {
      field.display = field.query('select').value()
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-17":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input1",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}}),t.createElement(d.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-17",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['select'],
          fulfill: {
            state: {
              display: '{{$deps[0]}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['select'],
          fulfill: {
            state: {
              display: '{{$deps[0]}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-18":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldReact,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.NumberPicker,d=v({effects:function(){y("result",function(h){h.value=h.query("dim_1").value()*h.query("dim_2").value()})}}),f=a({components:{FormItem:u,Input:F,NumberPicker:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.Number,{name:"dim_1",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"dim_2",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"result",title:"\u53D7\u63A7\u8005","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-18",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('result', (field) => {
      field.value = field.query('dim_1').value() * field.query('dim_2').value()
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="dim_1"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="\u53D7\u63A7\u8005"
        x-pattern="readPretty"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-19":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,m=v(),d=n({components:{FormItem:p,Input:u,NumberPicker:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"dim_1",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"dim_2",title:"\u63A7\u5236\u8005",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"result",title:"\u53D7\u63A7\u8005","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_1","dim_2"],fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-19",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="dim_1"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="\u63A7\u5236\u8005"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="\u53D7\u63A7\u8005"
        x-pattern="readPretty"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['dim_1', 'dim_2'],
          fulfill: {
            state: {
              value: '{{$deps[0] * $deps[1]}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-20":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldReact,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("input1",function(h){h.visible=!!h.query("select").value()}),y("input2",function(h){h.visible=!!h.query("input1").value()})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:!1,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"\u53D7\u63A7\u8005",default:!0,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-20",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('input1', (field) => {
      field.visible = !!field.query('select').value()
    })
    onFieldReact('input2', (field) => {
      field.visible = !!field.query('input1').value()
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default={false}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        default={true}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-21":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:!1,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input1",title:"\u53D7\u63A7\u8005",default:!0,enum:[{label:"\u663E\u793A",value:!0},{label:"\u9690\u85CF",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}}),t.createElement(d.String,{name:"input2",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["input1"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-21",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default={false}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="\u53D7\u63A7\u8005"
        default={true}
        enum={[
          { label: '\u663E\u793A', value: true },
          { label: '\u9690\u85CF', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['select'],
          fulfill: {
            state: {
              visible: '{{!!$deps[0]}}',
            },
          },
        }}
      />
      <SchemaField.String
        name="input2"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['input1'],
          fulfill: {
            state: {
              visible: '{{!!$deps[0]}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-22":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.onFieldReact,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,c=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,F=r.NumberPicker,m=v({effects:function(){y("total",function(S){var h=S.query("count").value(),N=S.query("price").value();h!==void 0&&N!==void 0&&(S.value=h*N)}),y("price",function(S){var h=S.query("total").value(),N=S.query("count").value();h!==void 0&&N>0&&(S.value=h/N)}),y("count",function(S){var h=S.query("total").value(),N=S.query("price").value();h!==void 0&&N>0&&(S.value=h/N)})}}),d=a({components:{FormItem:u,NumberPicker:F}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-22",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('total', (field) => {
      const count = field.query('count').value()
      const price = field.query('price').value()
      if (count !== undefined && price !== undefined) {
        field.value = count * price
      }
    })
    onFieldReact('price', (field) => {
      const total = field.query('total').value()
      const count = field.query('count').value()
      if (total !== undefined && count > 0) {
        field.value = total / count
      }
    })
    onFieldReact('count', (field) => {
      const total = field.query('total').value()
      const price = field.query('price').value()
      if (total !== undefined && price > 0) {
        field.value = total / price
      }
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="total"
        title="\u603B\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="count"
        title="\u6570\u91CF"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="price"
        title="\u5355\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-23":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,a=y.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.NumberPicker,F=v(),m=n({components:{FormItem:p,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:F},t.createElement(m,null,t.createElement(m.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".count",".price"],fulfill:{state:{value:"{{$deps[0] !== undefined && $deps[1] !== undefined ? $deps[0] * $deps[1] : $self.value}}"}}}}),t.createElement(m.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".total",".price"],fulfill:{state:{value:"{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}"}}}}),t.createElement(m.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".total",".count"],fulfill:{state:{value:"{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(F.values,null,2)))}))}});case 22:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-23",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    NumberPicker,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="total"
        title="\u603B\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['.count', '.price'],
          fulfill: {
            state: {
              value:
                '{{$deps[0] !== undefined && $deps[1] !== undefined ? $deps[0] * $deps[1] : $self.value}}',
            },
          },
        }}
      />
      <SchemaField.Number
        name="count"
        title="\u6570\u91CF"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['.total', '.price'],
          fulfill: {
            state: {
              value: '{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}',
            },
          },
        }}
      />
      <SchemaField.Number
        name="price"
        title="\u5355\u4EF7"
        x-component="NumberPicker"
        x-decorator="FormItem"
        x-reactions={{
          dependencies: ['.total', '.count'],
          fulfill: {
            state: {
              value: '{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}',
            },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-24":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.onFieldReact,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,c=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,F=r.Input,o.t0=j(),o.next=23,Promise.resolve().then(e.bind(e,38417));case 23:return o.t1=o.sent,(0,o.t0)(o.t1),m=v({effects:function(){y("color",function(S){S.setComponentProps({style:{backgroundColor:S.value}})})}}),d=a({components:{FormItem:u,Input:F}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:m},t.createElement(d,null,t.createElement(d.Number,{name:"color",default:"#FFFFFF",title:"\u989C\u8272","x-component":"Input","x-decorator":"FormItem"})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 28:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-24",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import './input.less'

const form = createForm({
  effects() {
    onFieldReact('color', (field) => {
      field.setComponentProps({
        style: {
          backgroundColor: field.value,
        },
      })
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="color"
        default="#FFFFFF"
        title="\u989C\u8272"
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{"./input.less":B,react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-25":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,a=y.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.Input,f.t0=j(),f.next=22,Promise.resolve().then(e.bind(e,38417));case 22:return f.t1=f.sent,(0,f.t0)(f.t1),F=v(),m=n({components:{FormItem:p,Input:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:F},t.createElement(m,null,t.createElement(m.Number,{name:"color",default:"#FFFFFF",title:"\u989C\u8272","x-component":"Input","x-decorator":"FormItem","x-reactions":{fulfill:{state:{"component[1].style.backgroundColor":"{{$self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(F.values,null,2)))}))}});case 27:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-25",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'
import './input.less'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.Number
        name="color"
        default="#FFFFFF"
        title="\u989C\u8272"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          fulfill: {
            state: {
              'component[1].style.backgroundColor': '{{$self.value}}',
            },
            //\u4EE5\u4E0B\u7528\u6CD5\u4E5F\u53EF\u4EE5
            // schema: {
            //   'x-component-props.style.backgroundColor': '{{$self.value}}',
            // },
          },
        }}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{"./input.less":B,react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-26":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.onFieldReact,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,c=n.FormConsumer,i.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=i.sent,p=r.Form,u=r.FormItem,F=r.Input,m=r.Select,d=v({effects:function(){y("input",function(h){var N=h.query("select").take();if(N){var L=N.value;N.loading=!0,L&&setTimeout(function(){N.loading=!1,h.display=L},1e3)}})}}),f=a({components:{FormItem:u,Input:F,Select:m}}),i.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(c,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-26",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldReact } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldReact('input', (field) => {
      const select = field.query('select').take()
      if (!select) return
      const selectValue = select.value
      select.loading = true
      if (selectValue) {
        setTimeout(() => {
          select.loading = false
          field.display = selectValue
        }, 1000)
      }
    })
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-visible={false}
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-linkages-demo-zh-cn-27":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,a=y.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.Select,m=v(),d=n({components:{FormItem:p,Input:u,Select:F},scope:{asyncVisible:function(S){var h=S.query("select").take();if(h){var N=h.value;h.loading=!0,N&&setTimeout(function(){h.loading=!1,S.display=N},1e3)}}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"\u63A7\u5236\u8005",default:"visible",enum:[{label:"\u663E\u793A",value:"visible"},{label:"\u9690\u85CF",value:"none"},{label:"\u9690\u85CF-\u4FDD\u7559\u503C",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input",title:"\u53D7\u63A7\u8005","x-component":"Input","x-decorator":"FormItem","x-visible":!1,"x-reactions":"{{asyncVisible}}"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(m.values,null,2)))}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-zh-cn-27",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
  scope: {
    asyncVisible(field) {
      const select = field.query('select').take()
      if (!select) return
      const selectValue = select.value
      select.loading = true
      if (selectValue) {
        setTimeout(() => {
          select.loading = false
          field.display = selectValue
        }, 1000)
      }
    },
  },
})

export default () => (
  <Form form={form}>
    <SchemaField>
      <SchemaField.String
        name="select"
        title="\u63A7\u5236\u8005"
        default="visible"
        enum={[
          { label: '\u663E\u793A', value: 'visible' },
          { label: '\u9690\u85CF', value: 'none' },
          { label: '\u9690\u85CF-\u4FDD\u7559\u503C', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="\u53D7\u63A7\u8005"
        x-component="Input"
        x-decorator="FormItem"
        x-visible={false}
        x-reactions="{{asyncVisible}}"
      />
    </SchemaField>
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}}}},63882:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return M}});var Y=e(82092),j=e.n(Y),Fe=e(90228),x=e.n(Fe),oe=e(87999),P=e.n(oe),E=e(69854),$=e(40751),A=e(68168),C=e(97204),B=e(70119),M={"docs-guide-advanced-validate-demo-zh-cn-0":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,c=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,F=v(),m=n({components:{Input:p,FormItem:r,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(c,{form:F,labelCol:6,wrapperCol:10},t.createElement(m,null,t.createElement(m.String,{name:"required_1",title:"\u5FC5\u586B",required:!0,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"required_2",title:"\u5FC5\u586B","x-validator":{required:!0},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"required_3",title:"\u5FC5\u586B","x-validator":[{required:!0}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_1",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",maximum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_2",title:"\u6700\u5927\u503C(>5\u62A5\u9519)","x-validator":{maximum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_3",title:"\u6700\u5927\u503C(>5\u62A5\u9519)","x-validator":[{maximum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_4",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",exclusiveMaximum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_5",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)","x-validator":{exclusiveMaximum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"max_6",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)","x-validator":[{exclusiveMaximum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_1",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",minimum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_2",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)","x-validator":{minimum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_3",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)","x-validator":[{minimum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_4",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",exclusiveMinimum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_5",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)","x-validator":{exclusiveMinimum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"min_6",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)","x-validator":[{exclusiveMinimum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(m.String,{name:"length_1",title:"\u957F\u5EA6\u4E3A5","x-validator":{len:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"length_2",title:"\u957F\u5EA6\u4E3A5","x-validator":[{len:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_1",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",maxLength:5,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_2",title:"\u6700\u5927\u957F\u5EA6\u4E3A5","x-validator":{max:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_3",title:"\u6700\u5927\u957F\u5EA6\u4E3A5","x-validator":[{max:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_4",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",minLength:5,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_5",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5","x-validator":{min:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"maxlength_6",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5","x-validator":[{min:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"whitespace",title:"\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26","x-validator":[{whitespace:!0}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"enum",title:"\u679A\u4E3E\u5339\u914D","x-validator":[{enum:["1","2","3"]}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"const",title:"\u5E38\u91CF\u5339\u914D",const:"123","x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"multipleOf",title:"\u6574\u9664\u5339\u914D",multipleOf:2,"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 22:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="required_1"
        title="\u5FC5\u586B"
        required
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_2"
        title="\u5FC5\u586B"
        x-validator={{ required: true }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_3"
        title="\u5FC5\u586B"
        x-validator={[{ required: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_1"
        title="\u6700\u5927\u503C(>5\u62A5\u9519)"
        maximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_2"
        title="\u6700\u5927\u503C(>5\u62A5\u9519)"
        x-validator={{ maximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_3"
        title="\u6700\u5927\u503C(>5\u62A5\u9519)"
        x-validator={[{ maximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_4"
        title="\u6700\u5927\u503C(>=5\u62A5\u9519)"
        exclusiveMaximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_5"
        title="\u6700\u5927\u503C(>=5\u62A5\u9519)"
        x-validator={{ exclusiveMaximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_6"
        title="\u6700\u5927\u503C(>=5\u62A5\u9519)"
        x-validator={[{ exclusiveMaximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.Number
        name="min_1"
        title="\u6700\u5C0F\u503C(<5\u62A5\u9519)"
        minimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_2"
        title="\u6700\u5C0F\u503C(<5\u62A5\u9519)"
        x-validator={{ minimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_3"
        title="\u6700\u5C0F\u503C(<5\u62A5\u9519)"
        x-validator={[{ minimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_4"
        title="\u6700\u5C0F\u503C(<=5\u62A5\u9519)"
        exclusiveMinimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_5"
        title="\u6700\u5C0F\u503C(<=5\u62A5\u9519)"
        x-validator={{ exclusiveMinimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_6"
        title="\u6700\u5C0F\u503C(<=5\u62A5\u9519)"
        x-validator={[{ exclusiveMinimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="length_1"
        title="\u957F\u5EA6\u4E3A5"
        x-validator={{ len: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="length_2"
        title="\u957F\u5EA6\u4E3A5"
        x-validator={[{ len: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_1"
        title="\u6700\u5927\u957F\u5EA6\u4E3A5"
        maxLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_2"
        title="\u6700\u5927\u957F\u5EA6\u4E3A5"
        x-validator={{ max: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_3"
        title="\u6700\u5927\u957F\u5EA6\u4E3A5"
        x-validator={[{ max: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_4"
        title="\u6700\u5C0F\u957F\u5EA6\u4E3A5"
        minLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_5"
        title="\u6700\u5C0F\u957F\u5EA6\u4E3A5"
        x-validator={{ min: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_6"
        title="\u6700\u5C0F\u957F\u5EA6\u4E3A5"
        x-validator={[{ min: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="whitespace"
        title="\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26"
        x-validator={[{ whitespace: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="enum"
        title="\u679A\u4E3E\u5339\u914D"
        x-validator={[{ enum: ['1', '2', '3'] }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="const"
        title="\u5E38\u91CF\u5339\u914D"
        const="123"
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="multipleOf"
        title="\u6574\u9664\u5339\u914D"
        multipleOf={2}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-1":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,o.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=o.sent,c=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,F=v(),m=n({components:{Input:p,FormItem:r,NumberPicker:u}}),d={type:"object",properties:{required_1:{name:"required_1",title:"\u5FC5\u586B",type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input"},required_2:{name:"required_2",title:"\u5FC5\u586B",type:"string","x-validator":{required:!0},"x-decorator":"FormItem","x-component":"Input"},required_3:{name:"required_3",title:"\u5FC5\u586B",type:"string","x-validator":[{required:!0}],"x-decorator":"FormItem","x-component":"Input"},max_1:{name:"max_1",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",type:"number",maximum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},max_2:{name:"max_2",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",type:"number","x-validator":{maximum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},max_3:{name:"max_3",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",type:"number","x-validator":[{maximum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},max_4:{name:"max_4",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",type:"number",exclusiveMaximum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},max_5:{name:"max_5",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",type:"number","x-validator":{exclusiveMaximum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},max_6:{name:"max_6",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",type:"number","x-validator":[{exclusiveMaximum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},min_1:{name:"min_1",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",type:"number",minimum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},min_2:{name:"min_2",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",type:"number","x-validator":{minimum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},min_3:{name:"min_3",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",type:"string","x-validator":[{minimum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},min_4:{name:"min_4",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",type:"number",exclusiveMinimum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},min_5:{name:"min_5",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",type:"number","x-validator":{exclusiveMinimum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},min_6:{name:"min_6",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",type:"number","x-validator":[{exclusiveMinimum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},length_1:{name:"length_1",title:"\u957F\u5EA6\u4E3A5",type:"string","x-validator":{len:5},"x-decorator":"FormItem","x-component":"Input"},length_2:{name:"length_2",title:"\u957F\u5EA6\u4E3A5",type:"string","x-validator":[{len:5}],"x-decorator":"FormItem","x-component":"Input"},maxlength_1:{name:"maxlength_1",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",type:"string",maxLength:5,"x-decorator":"FormItem","x-component":"Input"},maxlength_2:{name:"maxlength_2",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",type:"string","x-validator":{max:5},"x-decorator":"FormItem","x-component":"Input"},maxlength_3:{name:"maxlength_3",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",type:"string","x-validator":[{max:5}],"x-decorator":"FormItem","x-component":"Input"},minlength_1:{name:"minlength_1",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",type:"string",minLength:5,"x-decorator":"FormItem","x-component":"Input"},minlength_2:{name:"minlength_2",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",type:"string","x-validator":{min:5},"x-decorator":"FormItem","x-component":"Input"},minlength_3:{name:"minlength_3",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",type:"string","x-validator":[{min:5}],"x-decorator":"FormItem","x-component":"Input"},whitespace:{name:"whitespace",title:"\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26",type:"string","x-validator":[{whitespace:!0}],"x-decorator":"FormItem","x-component":"Input"},enum:{name:"enum",title:"\u679A\u4E3E\u5339\u914D",type:"string","x-validator":[{enum:["1","2","3"]}],"x-decorator":"FormItem","x-component":"Input"},const:{name:"const",title:"\u5E38\u91CF\u5339\u914D",type:"string",const:"123","x-decorator":"FormItem","x-component":"Input"},multipleOf:{name:"multipleOf",title:"\u6574\u9664\u5339\u914D",type:"string",multipleOf:2,"x-decorator":"FormItem","x-component":"NumberPicker"}}},o.abrupt("return",{default:function(){return t.createElement(c,{form:F,labelCol:6,wrapperCol:10},t.createElement(m,{schema:d}))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
})

const schema = {
  type: 'object',
  properties: {
    required_1: {
      name: 'required_1',
      title: '\u5FC5\u586B',
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_2: {
      name: 'required_2',
      title: '\u5FC5\u586B',
      type: 'string',
      'x-validator': {
        required: true,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_3: {
      name: 'required_3',
      title: '\u5FC5\u586B',
      type: 'string',
      'x-validator': [
        {
          required: true,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    max_1: {
      name: 'max_1',
      title: '\u6700\u5927\u503C(>5\u62A5\u9519)',
      type: 'number',
      maximum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_2: {
      name: 'max_2',
      title: '\u6700\u5927\u503C(>5\u62A5\u9519)',
      type: 'number',
      'x-validator': {
        maximum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_3: {
      name: 'max_3',
      title: '\u6700\u5927\u503C(>5\u62A5\u9519)',
      type: 'number',
      'x-validator': [
        {
          maximum: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_4: {
      name: 'max_4',
      title: '\u6700\u5927\u503C(>=5\u62A5\u9519)',
      type: 'number',
      exclusiveMaximum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_5: {
      name: 'max_5',
      title: '\u6700\u5927\u503C(>=5\u62A5\u9519)',
      type: 'number',
      'x-validator': {
        exclusiveMaximum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_6: {
      name: 'max_6',
      title: '\u6700\u5927\u503C(>=5\u62A5\u9519)',
      type: 'number',
      'x-validator': [
        {
          exclusiveMaximum: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_1: {
      name: 'min_1',
      title: '\u6700\u5C0F\u503C(<5\u62A5\u9519)',
      type: 'number',
      minimum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_2: {
      name: 'min_2',
      title: '\u6700\u5C0F\u503C(<5\u62A5\u9519)',
      type: 'number',
      'x-validator': {
        minimum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_3: {
      name: 'min_3',
      title: '\u6700\u5C0F\u503C(<5\u62A5\u9519)',
      type: 'string',
      'x-validator': [
        {
          minimum: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_4: {
      name: 'min_4',
      title: '\u6700\u5C0F\u503C(<=5\u62A5\u9519)',
      type: 'number',
      exclusiveMinimum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_5: {
      name: 'min_5',
      title: '\u6700\u5C0F\u503C(<=5\u62A5\u9519)',
      type: 'number',
      'x-validator': {
        exclusiveMinimum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_6: {
      name: 'min_6',
      title: '\u6700\u5C0F\u503C(<=5\u62A5\u9519)',
      type: 'number',
      'x-validator': [
        {
          exclusiveMinimum: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    length_1: {
      name: 'length_1',
      title: '\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': {
        len: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    length_2: {
      name: 'length_2',
      title: '\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': [
        {
          len: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    maxlength_1: {
      name: 'maxlength_1',
      title: '\u6700\u5927\u957F\u5EA6\u4E3A5',
      type: 'string',
      maxLength: 5,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    maxlength_2: {
      name: 'maxlength_2',
      title: '\u6700\u5927\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': {
        max: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    maxlength_3: {
      name: 'maxlength_3',
      title: '\u6700\u5927\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': [
        {
          max: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    minlength_1: {
      name: 'minlength_1',
      title: '\u6700\u5C0F\u957F\u5EA6\u4E3A5',
      type: 'string',
      minLength: 5,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    minlength_2: {
      name: 'minlength_2',
      title: '\u6700\u5C0F\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': {
        min: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    minlength_3: {
      name: 'minlength_3',
      title: '\u6700\u5C0F\u957F\u5EA6\u4E3A5',
      type: 'string',
      'x-validator': [
        {
          min: 5,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    whitespace: {
      name: 'whitespace',
      title: '\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26',
      type: 'string',
      'x-validator': [
        {
          whitespace: true,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    enum: {
      name: 'enum',
      title: '\u679A\u4E3E\u5339\u914D',
      type: 'string',
      'x-validator': [
        {
          enum: ['1', '2', '3'],
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    const: {
      name: 'const',
      title: '\u5E38\u91CF\u5339\u914D',
      type: 'string',
      const: '123',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    multipleOf: {
      name: 'multipleOf',
      title: '\u6574\u9664\u5339\u914D',
      type: 'string',
      multipleOf: 2,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-2":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F;return x()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=d.sent,t=s.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,v=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=d.sent,n=y.Field,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,c=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,F=v(),d.abrupt("return",{default:function(){return t.createElement(c,{form:F,labelCol:6,wrapperCol:10},t.createElement(n,{name:"required_1",title:"\u5FC5\u586B",required:!0,component:[p],decorator:[r]}),t.createElement(n,{name:"required_2",title:"\u5FC5\u586B",validator:{required:!0},component:[p],decorator:[r]}),t.createElement(n,{name:"required_3",title:"\u5FC5\u586B",validator:[{required:!0}],component:[p],decorator:[r]}),t.createElement(n,{name:"max_1",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",validator:{maximum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"max_2",title:"\u6700\u5927\u503C(>5\u62A5\u9519)",validator:[{maximum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"max_3",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",validator:{exclusiveMaximum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"max_4",title:"\u6700\u5927\u503C(>=5\u62A5\u9519)",validator:[{exclusiveMaximum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"min_1",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",validator:{minimum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"min_2",title:"\u6700\u5C0F\u503C(<5\u62A5\u9519)",validator:[{minimum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"min_3",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",validator:{exclusiveMinimum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"min_4",title:"\u6700\u5C0F\u503C(<=5\u62A5\u9519)",validator:[{exclusiveMinimum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"length_1",title:"\u957F\u5EA6\u4E3A5",validator:{len:5},component:[p],decorator:[r]}),t.createElement(n,{name:"length_2",title:"\u957F\u5EA6\u4E3A5",validator:[{len:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"maxlength_1",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",validator:{max:5},component:[p],decorator:[r]}),t.createElement(n,{name:"maxlength_2",title:"\u6700\u5927\u957F\u5EA6\u4E3A5",validator:[{max:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"minlength_1",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",validator:{min:5},component:[p],decorator:[r]}),t.createElement(n,{name:"minlength_2",title:"\u6700\u5C0F\u957F\u5EA6\u4E3A5",validator:[{min:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"whitespace",title:"\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26",validator:[{whitespace:!0}],component:[p],decorator:[r]}))}});case 21:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="required_1"
      title="\u5FC5\u586B"
      required
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="required_2"
      title="\u5FC5\u586B"
      validator={{ required: true }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="required_3"
      title="\u5FC5\u586B"
      validator={[{ required: true }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="max_1"
      title="\u6700\u5927\u503C(>5\u62A5\u9519)"
      validator={{ maximum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_2"
      title="\u6700\u5927\u503C(>5\u62A5\u9519)"
      validator={[{ maximum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_3"
      title="\u6700\u5927\u503C(>=5\u62A5\u9519)"
      validator={{ exclusiveMaximum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_4"
      title="\u6700\u5927\u503C(>=5\u62A5\u9519)"
      validator={[{ exclusiveMaximum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_1"
      title="\u6700\u5C0F\u503C(<5\u62A5\u9519)"
      validator={{ minimum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_2"
      title="\u6700\u5C0F\u503C(<5\u62A5\u9519)"
      validator={[{ minimum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_3"
      title="\u6700\u5C0F\u503C(<=5\u62A5\u9519)"
      validator={{ exclusiveMinimum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_4"
      title="\u6700\u5C0F\u503C(<=5\u62A5\u9519)"
      validator={[{ exclusiveMinimum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />

    <Field
      name="length_1"
      title="\u957F\u5EA6\u4E3A5"
      validator={{ len: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="length_2"
      title="\u957F\u5EA6\u4E3A5"
      validator={[{ len: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="maxlength_1"
      title="\u6700\u5927\u957F\u5EA6\u4E3A5"
      validator={{ max: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="maxlength_2"
      title="\u6700\u5927\u957F\u5EA6\u4E3A5"
      validator={[{ max: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="minlength_1"
      title="\u6700\u5C0F\u957F\u5EA6\u4E3A5"
      validator={{ min: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="minlength_2"
      title="\u6700\u5C0F\u957F\u5EA6\u4E3A5"
      validator={[{ min: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />

    <Field
      name="whitespace"
      title="\u6392\u9664\u7EAF\u7A7A\u767D\u5B57\u7B26"
      validator={[{ whitespace: true }]}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-3":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,l=s.Fragment,i.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return v=i.sent,y=v.createForm,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,i.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=i.sent,r=c.Form,p=c.FormItem,u=c.Input,F=y(),m=a({components:{Input:u,FormItem:p}}),d=function(h,N){return t.createElement(l,{key:N},t.createElement(m.String,{name:"".concat(h,"_1"),title:"".concat(h,"\u683C\u5F0F"),format:h,required:!0,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"".concat(h,"_2"),title:"".concat(h,"\u683C\u5F0F"),required:!0,"x-validator":h,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"".concat(h,"_3"),title:"".concat(h,"\u683C\u5F0F"),required:!0,"x-validator":{format:h},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"".concat(h,"_4"),title:"".concat(h,"\u683C\u5F0F"),required:!0,"x-validator":[h],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"".concat(h,"_5"),title:"".concat(h,"\u683C\u5F0F"),required:!0,"x-validator":[{format:h}],"x-component":"Input","x-decorator":"FormItem"}))},f=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],i.abrupt("return",{default:function(){return t.createElement(r,{form:F,labelCol:6,wrapperCol:10},t.createElement(m,null,f.map(d)))}});case 24:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { Fragment } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const renderFormat = (format: string, key: number) => {
  return (
    <Fragment key={key}>
      <SchemaField.String
        name={\`\${format}_1\`}
        title={\`\${format}\u683C\u5F0F\`}
        format={format}
        required
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_2\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        x-validator={format}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_3\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        x-validator={{ format }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_4\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        x-validator={[format]}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_5\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        x-validator={[{ format }]}
        x-component="Input"
        x-decorator="FormItem"
      />
    </Fragment>
  )
}

const FORMATS = [
  'url',
  'email',
  'phone',
  'ipv6',
  'ipv4',
  'number',
  'integer',
  'qq',
  'idcard',
  'money',
  'zh',
  'date',
  'zip',
]

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>{FORMATS.map(renderFormat)}</SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-4":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=o.sent,n=y.createSchemaField,o.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=o.sent,c=a.Form,r=a.FormItem,p=a.Input,u=v(),F={type:"object",properties:{}},m=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],m.forEach(function(i){Object.assign(F.properties,j()(j()(j()(j()(j()({},"".concat(i,"_1"),{title:"".concat(i,"\u683C\u5F0F"),type:"string",required:!0,format:i,"x-decorator":"FormItem","x-component":"Input"}),"".concat(i,"_2"),{title:"".concat(i,"\u683C\u5F0F"),type:"string",required:!0,"x-validator":i,"x-decorator":"FormItem","x-component":"Input"}),"".concat(i,"_3"),{title:"".concat(i,"\u683C\u5F0F"),type:"string",required:!0,"x-validator":{format:i},"x-decorator":"FormItem","x-component":"Input"}),"".concat(i,"_4"),{title:"".concat(i,"\u683C\u5F0F"),type:"string",required:!0,"x-validator":[i],"x-decorator":"FormItem","x-component":"Input"}),"".concat(i,"_5"),{title:"".concat(i,"\u683C\u5F0F"),type:"string",required:!0,"x-validator":[{format:i}],"x-decorator":"FormItem","x-component":"Input"}))}),d=n({components:{Input:p,FormItem:r}}),o.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(d,{schema:F}))}});case 24:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const schema = {
  type: 'object',
  properties: {},
}

const FORMATS = [
  'url',
  'email',
  'phone',
  'ipv6',
  'ipv4',
  'number',
  'integer',
  'qq',
  'idcard',
  'money',
  'zh',
  'date',
  'zip',
]

FORMATS.forEach((key) => {
  Object.assign(schema.properties, {
    [\`\${key}_1\`]: {
      title: \`\${key}\u683C\u5F0F\`,
      type: 'string',
      required: true,
      format: key,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_2\`]: {
      title: \`\${key}\u683C\u5F0F\`,
      type: 'string',
      required: true,
      'x-validator': key,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_3\`]: {
      title: \`\${key}\u683C\u5F0F\`,
      type: 'string',
      required: true,
      'x-validator': {
        format: key,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_4\`]: {
      title: \`\${key}\u683C\u5F0F\`,
      type: 'string',
      required: true,
      'x-validator': [key],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },

    [\`\${key}_5\`]: {
      title: \`\${key}\u683C\u5F0F\`,
      type: 'string',
      required: true,
      'x-validator': [
        {
          format: key,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  })
})

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-5":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,l=s.Fragment,o.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return v=o.sent,y=v.createForm,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.Field,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=y(),m=function(S,h){return t.createElement(l,{key:h},t.createElement(a,{name:"".concat(S,"_1"),title:"".concat(S,"\u683C\u5F0F"),required:!0,validator:S,component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(S,"_2"),title:"".concat(S,"\u683C\u5F0F"),required:!0,validator:{format:S},component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(S,"_3"),title:"".concat(S,"\u683C\u5F0F"),required:!0,validator:[S],component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(S,"_4"),title:"".concat(S,"\u683C\u5F0F"),required:!0,validator:[{format:S}],component:[u],decorator:[p]}))},d=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],o.abrupt("return",{default:function(){return t.createElement(r,{form:F,labelCol:6,wrapperCol:10},d.map(m))}});case 23:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { Fragment } from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const renderFormat = (format: string, key: number) => {
  return (
    <Fragment key={key}>
      <Field
        name={\`\${format}_1\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        validator={format}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_2\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        validator={{ format }}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_3\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        validator={[format]}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_4\`}
        title={\`\${format}\u683C\u5F0F\`}
        required
        validator={[{ format }]}
        component={[Input]}
        decorator={[FormItem]}
      />
    </Fragment>
  )
}

const FORMATS = [
  'url',
  'email',
  'phone',
  'ipv6',
  'ipv4',
  'number',
  'integer',
  'qq',
  'idcard',
  'money',
  'zh',
  'date',
  'zip',
]

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    {FORMATS.map(renderFormat)}
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-6":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.registerValidateRules,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,m=v(),d=a({components:{Input:u,FormItem:p,NumberPicker:F}}),y({global_1:function(S){return S&&S!=="123"?"\u9519\u8BEF\u4E86\u274E":""},global_2:function(S,h){return S&&S!=="123"?h.message:""},global_3:function(S){return S?S==="123":""},global_4:function(S){if(!S)return"";if(S<10)return{type:"error",message:"\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10"};if(S<100)return{type:"warning",message:"\u6570\u503C\u5728100\u4EE5\u5185"};if(S<1e3)return{type:"success",message:"\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000"}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:m,labelCol:6,wrapperCol:10},t.createElement(d,null,t.createElement(d.String,{name:"global_style_1",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_1:!0},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"global_style_2",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_2:!0,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"global_style_3",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_3:!0,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"global_style_4",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_4:!0},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_1",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":function(h){return h&&h!=="123"?"\u9519\u8BEF\u4E86\u274E":""},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_2",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{validator:function(h,N){return h&&h!=="123"?N.message:""},message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_3",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{validator:function(h){return h?h==="123":""},message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"validator_style_4",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":function(h){if(!h)return"";if(h<10)return{type:"error",message:"\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10"};if(h<100)return{type:"warning",message:"\u6570\u503C\u5728100\u4EE5\u5185"};if(h<1e3)return{type:"success",message:"\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000"}},"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 24:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
})

registerValidateRules({
  global_1(value) {
    if (!value) return ''
    return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
  },
  global_2(value, rule) {
    if (!value) return ''
    return value !== '123' ? rule.message : ''
  },
  global_3(value) {
    if (!value) return ''
    return value === '123'
  },
  global_4(value) {
    if (!value) return ''
    if (value < 10) {
      return {
        type: 'error',
        message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: '\u6570\u503C\u5728100\u4EE5\u5185',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
      }
    }
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="global_style_1"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          global_1: true,
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_2"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          global_2: true,
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_3"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          global_3: true,
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="global_style_4"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          global_4: true,
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="validator_style_1"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={(value) => {
          if (!value) return ''
          return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_2"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={{
          validator(value, rule) {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          },
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_3"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={{
          validator(value) {
            if (!value) return ''
            return value === '123'
          },
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="validator_style_4"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={(value) => {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: '\u6570\u503C\u5728100\u4EE5\u5185',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
            }
          }
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-7":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=i.sent,t=s.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,v=l.createForm,y=l.registerValidateRules,i.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=i.sent,a=n.createSchemaField,i.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=i.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,m=v(),d=a({components:{Input:u,FormItem:p,NumberPicker:F}}),y({global_1:function(h){return h&&h!=="123"?"\u9519\u8BEF\u4E86\u274E":""},global_2:function(h,N){return h&&h!=="123"?N.message:""},global_3:function(h){return h?h==="123":""},global_4:function(h){if(!h)return"";if(h<10)return{type:"error",message:"\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10"};if(h<100)return{type:"warning",message:"\u6570\u503C\u5728100\u4EE5\u5185"};if(h<1e3)return{type:"success",message:"\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000"}}}),f={type:"object",properties:{global_style_1:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_1:!0},"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_2:!0,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_3:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_3:!0,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_4:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{global_4:!0},"x-component":"Input","x-decorator":"FormItem"},validator_style_1:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":`{{(value)=> {
            if (!value) return ''
            return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
          }}}`,"x-component":"Input","x-decorator":"FormItem"},validator_style_2:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{validator:`{{(value, rule)=> {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          }}}`,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_3:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{validator:`{{(value, rule)=> {
          if (!value) return ''
          return value === '123'
        }}}`,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_4:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":`{{(value, rule)=> {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: '\u6570\u503C\u5728100\u4EE5\u5185',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
            }
          }
        }}}`,"x-component":"Input","x-decorator":"FormItem"}}},i.abrupt("return",{default:function(){return t.createElement(r,{form:m,labelCol:6,wrapperCol:10},t.createElement(d,{schema:f}))}});case 25:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
})

registerValidateRules({
  global_1(value) {
    if (!value) return ''
    return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
  },
  global_2(value, rule) {
    if (!value) return ''
    return value !== '123' ? rule.message : ''
  },
  global_3(value) {
    if (!value) return ''
    return value === '123'
  },
  global_4(value) {
    if (!value) return ''
    if (value < 10) {
      return {
        type: 'error',
        message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: '\u6570\u503C\u5728100\u4EE5\u5185',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
      }
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    global_style_1: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        global_1: true,
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_2: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        global_2: true,
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_3: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        global_3: true,
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_4: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        global_4: true,
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },

    validator_style_1: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': \`{{(value)=> {
            if (!value) return ''
            return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
          }}}\`,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_2: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': {
        validator: \`{{(value, rule)=> {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          }}}\`,
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_3: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': {
        validator: \`{{(value, rule)=> {
          if (!value) return ''
          return value === '123'
        }}}\`,
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_4: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': \`{{(value, rule)=> {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: '\u6570\u503C\u5728100\u4EE5\u5185',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
            }
          }
        }}}\`,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-8":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,y=l.registerValidateRules,f.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=f.sent,a=n.Field,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,m=v(),y({global_1:function(i){return i&&i!=="123"?"\u9519\u8BEF\u4E86\u274E":""},global_2:function(i,S){return i&&i!=="123"?S.message:""},global_3:function(i){return i?i==="123":""},global_4:function(i){if(!i)return"";if(i<10)return{type:"error",message:"\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10"};if(i<100)return{type:"warning",message:"\u6570\u503C\u5728100\u4EE5\u5185"};if(i<1e3)return{type:"success",message:"\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000"}}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:m,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{global_1:!0},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{global_2:!0,message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{global_3:!0,message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_4",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{global_4:!0},component:[F],decorator:[p]}),t.createElement(a,{name:"validator_style_1",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:function(S){return S&&S!=="123"?"\u9519\u8BEF\u4E86\u274E":""},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_2",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:{validator:function(S,h){return S&&S!=="123"?h.message:""},message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_3",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:{validator:function(S){return S?S==="123":""},message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_4",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:function(S){if(!S)return"";if(S<10)return{type:"error",message:"\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10"};if(S<100)return{type:"warning",message:"\u6570\u503C\u5728100\u4EE5\u5185"};if(S<1e3)return{type:"success",message:"\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000"}},component:[F],decorator:[p]}))}});case 23:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

registerValidateRules({
  global_1(value) {
    if (!value) return ''
    return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
  },
  global_2(value, rule) {
    if (!value) return ''
    return value !== '123' ? rule.message : ''
  },
  global_3(value) {
    if (!value) return ''
    return value === '123'
  },
  global_4(value) {
    if (!value) return ''
    if (value < 10) {
      return {
        type: 'error',
        message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: '\u6570\u503C\u5728100\u4EE5\u5185',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
      }
    }
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="global_style_1"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        global_1: true,
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_2"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        global_2: true,
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_3"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        global_3: true,
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_4"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        global_4: true,
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />

    <Field
      name="validator_style_1"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={(value) => {
        if (!value) return ''
        return value !== '123' ? '\u9519\u8BEF\u4E86\u274E' : ''
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_2"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={{
        validator(value, rule) {
          if (!value) return ''
          return value !== '123' ? rule.message : ''
        },
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_3"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={{
        validator(value) {
          if (!value) return ''
          return value === '123'
        },
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_4"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={(value) => {
        if (!value) return ''
        if (value < 10) {
          return {
            type: 'error',
            message: '\u6570\u503C\u4E0D\u80FD\u5C0F\u4E8E10',
          }
        } else if (value < 100) {
          return {
            type: 'warning',
            message: '\u6570\u503C\u5728100\u4EE5\u5185',
          }
        } else if (value < 1000) {
          return {
            type: 'success',
            message: '\u6570\u503C\u5927\u4E8E100\u5C0F\u4E8E1000',
          }
        }
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-9":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f,o,i;return x()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=h.sent,t=s.default,h.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=h.sent,v=l.createForm,y=l.registerValidateRules,h.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=h.sent,a=n.createSchemaField,h.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=h.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,h.next=22,Promise.resolve().then(e.bind(e,70119));case 22:return m=h.sent,d=m.string,f=v(),o=a({components:{Input:u,FormItem:p,NumberPicker:F}}),y({yup:function(){var N=P()(x()().mark(function T(O,U){return x()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,z.next=3,U.yup().validate(O);case 3:return z.abrupt("return","");case 6:return z.prev=6,z.t0=z.catch(0),z.abrupt("return",z.t0.errors.join(","));case 9:case"end":return z.stop()}},T,null,[[0,6]])}));function L(T,O){return N.apply(this,arguments)}return L}()}),i={type:"object",properties:{global_style_1:{title:"\u6700\u5927\u957F\u5EA6\u4E3A 2","x-validator":[{triggerType:"onBlur",yup:function(){return d().required("\u5FC5\u586B")}},{triggerType:"onBlur",yup:function(){return d().max(2,"\u6700\u5927\u957F\u5EA6\u4E3A 2")}}],"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"email",required:!0,"x-validator":{triggerType:"onBlur",yup:function(){return d().email()}},"x-component":"Input","x-decorator":"FormItem"}}},h.abrupt("return",{default:function(){return t.createElement(r,{form:f,labelCol:6,wrapperCol:10},t.createElement(o,{schema:i}))}});case 29:case"end":return h.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'
import { string } from 'yup'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
})

registerValidateRules({
  yup: async (value, rule) => {
    try {
      await rule.yup().validate(value)
      return '' // \u9A8C\u8BC1\u6210\u529F\u65F6\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32
    } catch (err) {
      return err.errors.join(',') // \u9A8C\u8BC1\u5931\u8D25\u65F6\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    global_style_1: {
      title: '\u6700\u5927\u957F\u5EA6\u4E3A 2',
      'x-validator': [
        {
          triggerType: 'onBlur',
          yup: () => string().required('\u5FC5\u586B'),
        },
        {
          triggerType: 'onBlur',
          yup: () => string().max(2, '\u6700\u5927\u957F\u5EA6\u4E3A 2'),
        },
      ],
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_2: {
      title: 'email',
      required: true,
      'x-validator': {
        triggerType: 'onBlur',
        yup: () => string().email(),
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},yup:{type:"NPM",value:"1.7.1"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,yup:B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-10":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d,f,o;return x()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=S.sent,t=s.default,S.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=S.sent,v=l.createForm,y=l.registerValidateRules,S.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=S.sent,a=n.Field,S.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=S.sent,r=c.Form,p=c.FormItem,u=c.Input,F=c.NumberPicker,S.next=22,Promise.resolve().then(e.bind(e,70119));case 22:return m=S.sent,d=m.string,f=m.number,o=v(),y({yup:function(){var h=P()(x()().mark(function L(T,O){return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.prev=0,R.next=3,O.yup().validate(T);case 3:return R.abrupt("return","");case 6:return R.prev=6,R.t0=R.catch(0),R.abrupt("return",R.t0.errors.join(","));case 9:case"end":return R.stop()}},L,null,[[0,6]])}));function N(L,T){return h.apply(this,arguments)}return N}()}),S.abrupt("return",{default:function(){return t.createElement(r,{form:o,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"email",required:!0,validator:{yup:function(){return d().email()}},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"\u6700\u5927\u503C 30",required:!0,validator:{yup:function(){return f().max(30)}},component:[F],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"email",required:!0,validator:{yup:function(){return d().email()}},component:[u],decorator:[p]}))}});case 28:case"end":return S.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'
import { string, number } from 'yup'

const form = createForm()

registerValidateRules({
  yup: async (value, rule) => {
    try {
      await rule.yup().validate(value)
      return '' // \u9A8C\u8BC1\u6210\u529F\u65F6\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32
    } catch (err) {
      return err.errors.join(',') // \u9A8C\u8BC1\u5931\u8D25\u65F6\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
    }
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="global_style_1"
      title="email"
      required
      validator={{
        yup: () => string().email(),
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_2"
      title="\u6700\u5927\u503C 30"
      required
      validator={{
        yup: () => number().max(30),
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_3"
      title="email"
      required
      validator={{
        yup: () => string().email(),
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},yup:{type:"NPM",value:"1.7.1"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C,yup:B},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-11":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,y=l.registerValidateFormats,f.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=f.sent,a=n.createSchemaField,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=f.sent,r=c.Form,p=c.FormItem,u=c.Input,F=v(),m=a({components:{Input:u,FormItem:p}}),y({custom_format:/123/}),f.abrupt("return",{default:function(){return t.createElement(r,{form:F,labelCol:6,wrapperCol:10},t.createElement(m,null,t.createElement(m.String,{name:"global_style_1",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{format:"custom_format",message:"\u9519\u8BEF\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"global_style_2",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":"custom_format","x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"global_style_3",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":["custom_format"],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.Number,{name:"global_style_4",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{format:"custom_format",message:"\u9519\u8BEF\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"validator_style_1",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,pattern:/123/,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"validator_style_2",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,pattern:"123","x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"validator_style_3",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{pattern:/123/,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(m.String,{name:"validator_style_4",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{pattern:"123",message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"})))}});case 23:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateFormats } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

registerValidateFormats({
  custom_format: /123/,
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="global_style_1"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          format: 'custom_format',
          message: '\u9519\u8BEF\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_2"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={'custom_format'}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_3"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={['custom_format']}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="global_style_4"
        title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
        required
        x-validator={{
          format: 'custom_format',
          message: '\u9519\u8BEF\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="validator_style_1"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        pattern={/123/}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_2"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        pattern="123"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_3"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={{
          pattern: /123/,
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_4"
        title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
        required
        x-validator={{
          pattern: '123',
          message: '\u9519\u8BEF\u4E86\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-12":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.registerValidateFormats,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=o.sent,r=c.Form,p=c.FormItem,u=c.Input,F=v(),m=a({components:{Input:u,FormItem:p}}),y({custom_format:/123/}),d={type:"object",properties:{global_style_1:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{format:"custom_format",message:"\u9519\u8BEF\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":"custom_format","x-component":"Input","x-decorator":"FormItem"},global_style_3:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":["custom_format"],"x-component":"Input","x-decorator":"FormItem"},global_style_4:{title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,"x-validator":{format:"custom_format",message:"\u9519\u8BEF\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_1:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,pattern:/123/,"x-component":"Input","x-decorator":"FormItem"},validator_style_2:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,pattern:"123","x-component":"Input","x-decorator":"FormItem"},validator_style_3:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{pattern:/123/,message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_4:{title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,"x-validator":{pattern:"123",message:"\u9519\u8BEF\u4E86\u274E"},"x-component":"Input","x-decorator":"FormItem"}}},o.abrupt("return",{default:function(){return t.createElement(r,{form:F,labelCol:6,wrapperCol:10},t.createElement(m,{schema:d}))}});case 24:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateFormats } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

registerValidateFormats({
  custom_format: /123/,
})

const schema = {
  type: 'object',
  properties: {
    global_style_1: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        format: 'custom_format',
        message: '\u9519\u8BEF\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_2: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': 'custom_format',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_3: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': ['custom_format'],
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_4: {
      title: '\u5168\u5C40\u6CE8\u518C\u98CE\u683C',
      required: true,
      'x-validator': {
        format: 'custom_format',
        message: '\u9519\u8BEF\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_1: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      pattern: /123/,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_2: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      pattern: '123',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_3: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': {
        pattern: /123/,
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_4: {
      title: '\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C',
      required: true,
      'x-validator': {
        pattern: '123',
        message: '\u9519\u8BEF\u4E86\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-13":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F;return x()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=d.sent,t=s.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,v=l.createForm,y=l.registerValidateFormats,d.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=d.sent,a=n.Field,d.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return c=d.sent,r=c.Form,p=c.FormItem,u=c.Input,F=v(),y({custom_format:/123/}),d.abrupt("return",{default:function(){return t.createElement(r,{form:F,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{format:"custom_format",message:"\u9519\u8BEF\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:"custom_format",component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:["custom_format"],component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_4",title:"\u5168\u5C40\u6CE8\u518C\u98CE\u683C",required:!0,validator:{format:"custom_format",message:"\u9519\u8BEF\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_1",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:{pattern:/123/,message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_2",title:"\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C",required:!0,validator:{pattern:"123",message:"\u9519\u8BEF\u4E86\u274E"},component:[u],decorator:[p]}))}});case 22:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-13",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateFormats } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

registerValidateFormats({
  custom_format: /123/,
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="global_style_1"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        format: 'custom_format',
        message: '\u9519\u8BEF\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_2"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={'custom_format'}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_3"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={['custom_format']}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_4"
      title="\u5168\u5C40\u6CE8\u518C\u98CE\u683C"
      required
      validator={{
        format: 'custom_format',
        message: '\u9519\u8BEF\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_1"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={{
        pattern: /123/,
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_2"
      title="\u5C40\u90E8\u5B9A\u4E49\u98CE\u683C"
      required
      validator={{
        pattern: '123',
        message: '\u9519\u8BEF\u4E86\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-14":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F;return x()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=d.sent,t=s.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,v=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=d.sent,n=y.createSchemaField,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,c=a.Form,r=a.FormItem,p=a.Input,u=v(),F=n({components:{Input:p,FormItem:r}}),d.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(F,null,t.createElement(F.String,{name:"async_validate",title:"\u5F02\u6B65\u6821\u9A8C",required:!0,"x-validator":function(i){return new Promise(function(S){setTimeout(function(){i||S(""),S(i==="123"?"":"\u9519\u8BEF\u274E")},1e3)})},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(F.String,{name:"async_validate_2",title:"\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)",required:!0,"x-validator":{triggerType:"onBlur",validator:function(i){return new Promise(function(S){setTimeout(function(){i||S(""),S(i==="123"?"":"\u9519\u8BEF\u274E")},1e3)})}},"x-component":"Input","x-decorator":"FormItem"})))}});case 21:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-14",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="async_validate"
        title="\u5F02\u6B65\u6821\u9A8C"
        required
        x-validator={(value) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (!value) {
                resolve('')
              }
              if (value === '123') {
                resolve('')
              } else {
                resolve('\u9519\u8BEF\u274E')
              }
            }, 1000)
          })
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="async_validate_2"
        title="\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)"
        required
        x-validator={{
          triggerType: 'onBlur',
          validator: (value) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                if (!value) {
                  resolve('')
                }
                if (value === '123') {
                  resolve('')
                } else {
                  resolve('\u9519\u8BEF\u274E')
                }
              }, 1000)
            })
          },
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-15":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,c=a.Form,r=a.FormItem,p=a.Input,u=v(),F=n({components:{Input:p,FormItem:r}}),m={type:"object",properties:{async_validate:{title:"\u5F02\u6B65\u6821\u9A8C",required:!0,"x-validator":`{{(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('\u9519\u8BEF\u274E')
            }
          }, 1000)
        })
      }}}`,"x-component":"Input","x-decorator":"FormItem"},async_validate_2:{title:"\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)",required:!0,"x-validator":{triggerType:"onBlur",validator:`{{(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('\u9519\u8BEF\u274E')
            }
          }, 1000)
        })
      }}}`},"x-component":"Input","x-decorator":"FormItem"}}},f.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(F,{schema:m}))}});case 22:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-15",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const schema = {
  type: 'object',
  properties: {
    async_validate: {
      title: '\u5F02\u6B65\u6821\u9A8C',
      required: true,
      'x-validator': \`{{(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('\u9519\u8BEF\u274E')
            }
          }, 1000)
        })
      }}}\`,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    async_validate_2: {
      title: '\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)',
      required: true,
      'x-validator': {
        triggerType: 'onBlur',
        validator: \`{{(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('\u9519\u8BEF\u274E')
            }
          }, 1000)
        })
      }}}\`,
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-16":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=m.sent,t=s.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,v=l.createForm,m.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=m.sent,n=y.Field,m.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=m.sent,c=a.Form,r=a.FormItem,p=a.Input,u=v(),m.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(n,{name:"async_validate",title:"\u5F02\u6B65\u6821\u9A8C",required:!0,validator:function(o){return new Promise(function(i){setTimeout(function(){o||i(""),i(o==="123"?"":"\u9519\u8BEF\u274E")},1e3)})},component:[p],decorator:[r]}),t.createElement(n,{name:"async_validate_2",title:"\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)",required:!0,validator:{triggerType:"onBlur",validator:function(o){return new Promise(function(i){setTimeout(function(){o||i(""),i(o==="123"?"":"\u9519\u8BEF\u274E")},1e3)})}},component:[p],decorator:[r]}))}});case 20:case"end":return m.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-16",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="async_validate"
      title="\u5F02\u6B65\u6821\u9A8C"
      required
      validator={(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('\u9519\u8BEF\u274E')
            }
          }, 1000)
        })
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="async_validate_2"
      title="\u5F02\u6B65\u6821\u9A8C(onBlur\u89E6\u53D1)"
      required
      validator={{
        triggerType: 'onBlur',
        validator: (value) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (!value) {
                resolve('')
              }
              if (value === '123') {
                resolve('')
              } else {
                resolve('\u9519\u8BEF\u274E')
              }
            }, 1000)
          })
        },
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-17":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F;return x()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=d.sent,t=s.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,v=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=d.sent,n=y.createSchemaField,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,c=a.Form,r=a.FormItem,p=a.NumberPicker,u=v(),F=n({components:{NumberPicker:p,FormItem:r}}),d.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(F,null,t.createElement(F.String,{name:"aa",title:"AA",required:!0,"x-reactions":function(i){i.selfErrors=i.query("bb").value()>=i.value?"AA\u5FC5\u987B\u5927\u4E8EBB":""},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(F.String,{name:"bb",title:"BB",required:!0,"x-reactions":function(i){i.selfErrors=i.query("aa").value()<=i.value?"AA\u5FC5\u987B\u5927\u4E8EBB":""},"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 21:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-17",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    NumberPicker,
    FormItem,
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="aa"
        title="AA"
        required
        x-reactions={(field) => {
          field.selfErrors =
            field.query('bb').value() >= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="bb"
        title="BB"
        required
        x-reactions={(field) => {
          field.selfErrors =
            field.query('aa').value() <= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-18":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m;return x()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,v=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=f.sent,n=y.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,c=a.Form,r=a.FormItem,p=a.NumberPicker,u=v(),F=n({components:{NumberPicker:p,FormItem:r}}),m={type:"object",properties:{aa:{title:"AA",required:!0,"x-reactions":`{{(field) => {
          field.selfErrors =
            field.query('bb').value() >= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
      }}}`,"x-component":"NumberPicker","x-decorator":"FormItem"},bb:{title:"BB",required:!0,"x-reactions":{dependencies:["aa"],fulfill:{state:{selfErrors:"{{$deps[0] <= $self.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''}}"}}},"x-component":"NumberPicker","x-decorator":"FormItem"}}},f.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(F,{schema:m}))}});case 22:case"end":return f.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-18",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    NumberPicker,
    FormItem,
  },
})

const schema = {
  type: 'object',
  properties: {
    aa: {
      title: 'AA',
      required: true,
      'x-reactions': \`{{(field) => {
          field.selfErrors =
            field.query('bb').value() >= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
      }}}\`,
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
    },
    bb: {
      title: 'BB',
      required: true,
      'x-reactions': {
        dependencies: ['aa'],
        fulfill: {
          state: {
            selfErrors: "{{$deps[0] <= $self.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''}}",
          },
        },
      },
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
    },
  },
}

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField schema={schema} />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-19":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=m.sent,t=s.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,v=l.createForm,m.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return y=m.sent,n=y.Field,m.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=m.sent,c=a.Form,r=a.FormItem,p=a.NumberPicker,u=v(),m.abrupt("return",{default:function(){return t.createElement(c,{form:u,labelCol:6,wrapperCol:10},t.createElement(n,{name:"aa",title:"AA",required:!0,reactions:function(o){o.selfErrors=o.query("bb").value()>=o.value?"AA\u5FC5\u987B\u5927\u4E8EBB":""},component:[p],decorator:[r]}),t.createElement(n,{name:"bb",title:"BB",required:!0,reactions:function(o){o.selfErrors=o.query("aa").value()<=o.value?"AA\u5FC5\u987B\u5927\u4E8EBB":""},component:[p],decorator:[r]}))}});case 20:case"end":return m.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-19",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, NumberPicker } from '@next-formily/antd'

const form = createForm()

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="aa"
      title="AA"
      required
      reactions={(field) => {
        field.selfErrors =
          field.query('bb').value() >= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="bb"
      title="BB"
      required
      reactions={(field) => {
        field.selfErrors =
          field.query('aa').value() <= field.value ? 'AA\u5FC5\u987B\u5927\u4E8EBB' : ''
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}},"docs-guide-advanced-validate-demo-zh-cn-20":{component:E.memo(E.lazy(P()(x()().mark(function I(){var s,t,l,v,y,n,a,c,r,p,u,F,m,d;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=o.sent,t=s.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,v=l.createForm,y=l.registerValidateLocale,n=l.setValidateLanguage,o.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return a=o.sent,c=a.createSchemaField,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,F=r.Input,m=v(),d=c({components:{FormItem:u,Input:F}}),n("zh-CN"),y({"zh-CN":{required:"\u5B9A\u5236\u7684\u5FC5\u586B\u6821\u9A8C\u6587\u6848"}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:m,labelCol:6,wrapperCol:10},t.createElement(d,null,t.createElement(d.String,{name:"aa",title:"AA",required:!0,"x-component":"Input","x-decorator":"FormItem"})))}});case 25:case"end":return o.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-zh-cn-20",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import {
  createForm,
  registerValidateLocale,
  setValidateLanguage,
} from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

setValidateLanguage('zh-CN')

registerValidateLocale({
  'zh-CN': {
    required: '\u5B9A\u5236\u7684\u5FC5\u586B\u6821\u9A8C\u6587\u6848',
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="aa"
        title="AA"
        required
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate.zh-CN",context:{react:g||(g=e.t(E,2)),"@next-formily/core":$,"@next-formily/react":A,"@next-formily/antd":C},renderOpts:{compile:function(){var I=P()(x()().mark(function t(){var l,v=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},t)}));function s(){return I.apply(this,arguments)}return s}()}}}},78881:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},70329:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},66267:function(_,b,e){e.r(b),e.d(b,{demos:function(){return oe}});var g=e(90228),Y=e.n(g),j=e(87999),Fe=e.n(j),x=e(69854),oe={"docs-guide-demo-zh-cn-0":{component:x.memo(x.lazy(Fe()(Y()().mark(function P(){var E,$,A,C,B,M,I,s,t;return Y()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return E=v.sent,$=E.default,v.next=6,Promise.resolve().then(e.bind(e,22285));case 6:return A=v.sent,C=A.Table,B=A.Tooltip,v.next=11,Promise.resolve().then(e.bind(e,49320));case 11:return M=v.sent,I=M.QuestionCircleOutlined,s=function(n,a){return a?$.createElement("div",null,n,$.createElement(B,{title:a},$.createElement(I,{style:{marginLeft:3}}))):n},t=[{feature:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u63A5\u5165\u6210\u672C",antd:"4.x\u63A5\u5165\u6210\u672C\u4F4E",fusion:"\u9AD8",formik:"\u4F4E",finalForm:"\u4F4E",schemaForm:s("\u9AD8","\u56E0\u4E3A\u8026\u5408bootstrap"),hookForm:s("\u9AD8","\u56E0\u4E3A\u8026\u5408React Ref"),"formily1.x":"\u4F4E","formily2.x":"\u4F4E"},{feature:"\u6027\u80FD",antd:s("4.x\u6027\u80FD\u8F83\u597D","\u53EA\u89E3\u51B3\u4E86\u503C\u540C\u6B65\u7CBE\u786E\u6E32\u67D3"),fusion:"\u5DEE",formik:"\u5DEE",finalForm:s("\u8F83\u597D","\u4F46\u53EA\u89E3\u51B3\u4E86\u503C\u540C\u6B65\u7CBE\u786E\u6E32\u67D3"),schemaForm:"\u5DEE",hookForm:s("\u597D","\u4F46\u53EA\u89E3\u51B3\u4E86\u503C\u540C\u6B65\u7CBE\u786E\u6E32\u67D3"),"formily1.x":s("\u975E\u5E38\u597D","\u80FD\u89E3\u51B3\u8054\u52A8\u8FC7\u7A0B\u4E2D\u7684\u7CBE\u786E\u6E32\u67D3"),"formily2.x":s("\u975E\u5E38\u597D","\u80FD\u89E3\u51B3\u8054\u52A8\u8FC7\u7A0B\u4E2D\u7684\u7CBE\u786E\u6E32\u67D3")},{feature:"\u662F\u5426\u652F\u6301\u52A8\u6001\u6E32\u67D3",antd:"\u5426",fusion:"\u5426",formik:"\u5426",finalForm:"\u5426",schemaForm:"\u662F",hookForm:"\u5426","formily1.x":"\u662F","formily2.x":"\u662F"},{feature:"\u662F\u5426\u5F00\u7BB1\u5373\u7528",antd:"\u662F",fusion:"\u662F",formik:"\u5426",finalForm:"\u5426",schemaForm:"\u662F",hookForm:"\u5426","formily1.x":"\u662F","formily2.x":"\u662F"},{feature:"\u662F\u5426\u652F\u6301\u8DE8\u7AEF",antd:"\u5426",fusion:"\u5426",formik:"\u5426",finalForm:"\u5426",schemaForm:"\u5426",hookForm:"\u5426","formily1.x":"\u662F","formily2.x":"\u662F"},{feature:"\u5F00\u53D1\u6548\u7387",antd:"\u4E00\u822C",fusion:"\u4E00\u822C",formik:"\u4E00\u822C",finalForm:"\u4E00\u822C",schemaForm:s("\u4F4E","\u6E90\u7801\u5F00\u53D1\u9700\u8981\u624B\u5DE5\u7EF4\u62A4JSON"),hookForm:"\u4E00\u822C","formily1.x":"\u9AD8","formily2.x":"\u9AD8"},{feature:"\u5B66\u4E60\u6210\u672C",antd:"\u4F4E",fusion:"\u4F4E",formik:"\u4F4E",finalForm:"\u9AD8",schemaForm:"\u9AD8",hookForm:"\u4F4E","formily1.x":"\u5F88\u9AD8","formily2.x":s("\u9AD8","\u6982\u5FF5\u5927\u91CF\u51CF\u5C11")},{feature:"\u89C6\u56FE\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027",antd:s("\u4F4E","\u5927\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F"),fusion:s("\u4F4E","\u5927\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F"),formik:s("\u4F4E","\u5927\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F"),finalForm:s("\u4F4E","\u5927\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F"),schemaForm:"\u9AD8",hookForm:s("\u4F4E","\u5927\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F"),"formily1.x":"\u9AD8","formily2.x":"\u9AD8"},{feature:"\u573A\u666F\u5316\u5C01\u88C5\u80FD\u529B",antd:"\u65E0",fusion:"\u65E0",formik:"\u65E0",finalForm:"\u65E0",schemaForm:"\u6709",hookForm:"\u65E0","formily1.x":"\u6709","formily2.x":"\u6709"},{feature:"\u662F\u5426\u652F\u6301\u8868\u5355\u9884\u89C8\u6001",antd:"\u5426",fusion:"\u662F",formik:"\u5426",finalForm:"\u5426",schemaForm:"\u5426",hookForm:"\u5426","formily1.x":"\u662F","formily2.x":"\u662F"}],v.abrupt("return",{default:function(){return $.createElement(C,{dataSource:t,pagination:!1,bordered:!0,scroll:{x:1600},size:"small"},$.createElement(C.Column,{title:"\u80FD\u529B",dataIndex:"feature",width:160}),$.createElement(C.Column,{title:"Ant Design Form",dataIndex:"antd",width:160}),$.createElement(C.Column,{title:"Fusion Form",dataIndex:"fusion",width:160}),$.createElement(C.Column,{title:"Formik",dataIndex:"formik",width:160}),$.createElement(C.Column,{title:"React Final Form",dataIndex:"finalForm",width:160}),$.createElement(C.Column,{title:"React Schema Form",dataIndex:"schemaForm",width:160}),$.createElement(C.Column,{title:"React Hook Form",dataIndex:"hookForm",width:160}),$.createElement(C.Column,{title:"Formily1.x",dataIndex:"formily1.x",width:160}),$.createElement(C.Column,{title:"Formily2.x",dataIndex:"formily2.x",width:160}))}});case 16:case"end":return v.stop()}},P)})))),asset:null,routeId:"docs/guide/index.zh-CN",context:void 0,renderOpts:void 0}}},80189:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return n}});var Y=e(90228),j=e.n(Y),Fe=e(48305),x=e.n(Fe),oe=e(36075),P=e.n(oe),E=e(87999),$=e.n(E),A=e(69854),C=e(40751),B=e(68168),M=e(97204),I=e(27306),s=e.n(I),t=e(47012),l=e(92832),v=e.n(l),y=e(77724),n={"docs-guide-issue-helper-demo-zh-cn-0":{component:A.memo(A.lazy($()(j()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce;return j()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=q.sent,r=c.default,q.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return p=q.sent,u=p.createForm,F=p.onFieldMount,m=p.onFieldReact,q.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=q.sent,f=d.Field,o=d.VoidField,q.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return i=q.sent,S=i.Form,h=i.Input,N=i.Select,L=i.Radio,T=i.FormItem,O=i.FormButtonGroup,U=i.Submit,q.next=27,Promise.resolve().then(e.t.bind(e,27306,23));case 27:return R=q.sent,z=R.default,q.next=31,Promise.resolve().then(e.bind(e,47012));case 31:return Q=q.sent,W=Q.default,q.next=35,Promise.resolve().then(e.t.bind(e,92832,23));case 35:return w=q.sent,q.t0=P(),q.next=39,Promise.resolve().then(e.bind(e,77724));case 39:return q.t1=q.sent,(0,q.t0)(q.t1),G=new w.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0}),ne=function(J){var ae=J.value,H=J.onChange,V=r.useState("write"),le=x()(V,2),K=le[0],Z=le[1];return r.createElement("div",{style:{fontSize:12,lineHeight:1}},r.createElement(W,{value:ae,onChange:H,selectedTab:K,onTabChange:Z,generateMarkdownPreview:function(k){return Promise.resolve('<div class="markdown" style="margin:0 20px;">'.concat(G.makeHtml(k)||"","</div>"))}}))},te=u({validateFirst:!0,effects:function(){F("version",function(){var J=$()(j()().mark(function ae(H){var V,le,K;return j()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,fetch("https://registry.npmmirror.com/@next-formily/core").then(function(k){return k.json()});case 2:V=D.sent,le=V.versions,K=Object.keys(le).sort(function(k,X){return z.gte(k,X)?-1:1}),H.dataSource=K.map(function(k){return{label:k,value:k}});case 6:case"end":return D.stop()}},ae)}));return function(ae){return J.apply(this,arguments)}}()),F("package",function(){var J=$()(j()().mark(function ae(H){var V;return j()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,fetch("https://formilyjs.org/.netlify/functions/npm-search?q=@formily").then(function(Z){return Z.json()});case 2:V=K.sent,H.dataSource=V.map(function(Z){var D=Z.name;return{label:D,value:D}});case 4:case"end":return K.stop()}},ae)}));return function(ae){return J.apply(this,arguments)}}()),m("bug-desc",function(J){J.visible=J.query("type").value()==="Bug Report"}),m("feature-desc",function(J){J.visible=J.query("type").value()==="Feature Request"})}}),ce=function(J){var ae=J.type,H=J.title,V=J.version,le=J.package,K=J.reproduceLink,Z=J.reproduceStep,D=J.expected,k=J.actually,X=J.comment,ee=J.feature,re=J.api,se=new URL("https://github.com/alibaba/formily/issues/new"),ie=`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### Reproduction link
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](`.concat(K||"",`)

### Steps to reproduce
`).concat(Z||"",`

### What is expected?
`).concat(D||"",`

### What is actually happening?
`).concat(k||"",`

### Package
`).concat(le,"@").concat(V,`

---

`).concat(X||"",`

<!-- generated by formily-issue-helper. DO NOT REMOVE -->
`),ve=`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### What problem does this feature solve?
`.concat(ee||"",`

### What does the proposed API look like?
`).concat(re||"",`


<!-- generated by formily-issue-helper. DO NOT REMOVE -->
`);return se.searchParams.set("title","[".concat(ae,"] ").concat(H)),se.searchParams.set("body",ae==="Bug Report"?ie:ve),se.href},q.abrupt("return",{default:function(){return r.createElement(S,{form:te,layout:"vertical",size:"large"},r.createElement(f,{title:"\u8FD9\u662F\u4E00\u4E2A",name:"type",required:!0,initialValue:"Bug Report",decorator:[T],component:[L.Group,{optionType:"button"}],dataSource:[{label:"\u9519\u8BEF\u62A5\u544A",value:"Bug Report"},{label:"\u529F\u80FD\u8981\u6C42",value:"Feature Request"}]}),r.createElement(f,{title:"\u6807\u9898",name:"title",required:!0,decorator:[T],component:[h]}),r.createElement(o,{name:"bug-desc"},r.createElement(f,{title:"\u6240\u5728\u5305",name:"package",required:!0,decorator:[T],component:[N,{showSearch:!0}]}),r.createElement(f,{title:"\u5305\u7248\u672C",description:"\u8BF7\u68C0\u67E5\u95EE\u9898\u662F\u5426\u5B58\u5728\u4E8E\u6700\u65B0\u7248\u672C\u4E2D\u3002",name:"version",required:!0,decorator:[T],component:[N,{showSearch:!0}]}),r.createElement(f,{title:"\u91CD\u73B0\u94FE\u63A5",name:"reproduceLink",decorator:[T],component:[h],required:!0,validator:["url",function(J){return/\/\/(codesandbox\.io|github)/.test(J)?"":"\u5FC5\u987B\u662F Codesandbox \u94FE\u63A5\u6216\u8005 Github \u4ED3\u5E93\u5730\u5740"}],description:r.createElement("div",null,"This is Codesandbox templates.If you are:",r.createElement("ul",null,r.createElement("li",null,"React + Antd User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-pure-jsx-omncis",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-markup-schema-fvpevx",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-json-schema-28p0fh",target:"_blank",rel:"noreferrer"},"JSON Schema")))),r.createElement("li",null,"React + Fusion User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-next-pure-jsx-ji9iiu",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-next-markup-schema-i7dm17",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"hhttps://codesandbox.io/s/formily-react-next-json-schema-1lm35h",target:"_blank",rel:"noreferrer"},"JSON Schema")))),r.createElement("li",null,"Vue3 + ant-design-vue User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-antd-vue-pure-jsx-pp3gvv",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-vue-ant-design-vue-markup-schema-donivp",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-vue-ant-design-vue-json-schema-25g4z1",target:"_blank",rel:"noreferrer"},"JSON Schema"))))))}),r.createElement(f,{title:"\u91CD\u73B0\u6B65\u9AA4",description:"\u7B80\u6D01\u6E05\u6670\u7684\u91CD\u73B0\u6B65\u9AA4\u80FD\u591F\u5E2E\u52A9\u6211\u4EEC\u66F4\u8FC5\u901F\u5730\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002",name:"reproduceStep",decorator:[T],component:[ne],required:!0}),r.createElement(f,{title:"\u671F\u671B\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F",name:"expected",decorator:[T],component:[ne],required:!0}),r.createElement(f,{title:"\u5B9E\u9645\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F",name:"actually",decorator:[T],component:[ne],required:!0}),r.createElement(f,{title:"\u8865\u5145\u8BF4\u660E\uFF08\u53EF\u9009\uFF09",name:"comment",decorator:[T],component:[ne]})),r.createElement(o,{name:"feature-desc"},r.createElement(f,{title:"\u8FD9\u4E2A\u529F\u80FD\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F",description:r.createElement("div",null,r.createElement("p",null,"\u8BF7\u5C3D\u53EF\u80FD\u8BE6\u5C3D\u5730\u8BF4\u660E\u8FD9\u4E2A\u9700\u6C42\u7684\u7528\u4F8B\u548C\u573A\u666F\u3002\u6700\u91CD\u8981\u7684\u662F\uFF1A\u89E3\u91CA\u6E05\u695A\u662F\u600E\u6837\u7684\u7528\u6237\u4F53\u9A8C\u9700\u6C42\u50AC\u751F\u4E86\u8FD9\u4E2A\u529F\u80FD\u4E0A\u7684\u9700\u6C42\u3002"),r.createElement("p",null,"Formily \u7684\u4E00\u4E2A\u91CD\u8981\u8BBE\u8BA1\u539F\u5219\u662F\u4FDD\u6301 API \u7684\u7B80\u6D01\u548C\u76F4\u63A5\u3002\u901A\u5E38\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u8003\u8651\u6DFB\u52A0\u5728\u73B0\u6709\u7684 API \u4E0B\u65E0\u6CD5\u8F7B\u677E\u5B9E\u73B0\u7684\u529F\u80FD\u3002\u65B0\u529F\u80FD\u7684\u7528\u4F8B\u4E5F\u5E94\u5F53\u8DB3\u591F\u5E38\u89C1\u3002")),name:"feature",required:!0,decorator:[T],component:[ne]}),r.createElement(f,{title:"\u4F60\u671F\u671B\u7684 API \u662F\u600E\u6837\u7684\uFF1F",description:"\u63CF\u8FF0\u4E00\u4E0B\u4F60\u671F\u671B\u8FD9\u4E2A\u65B0\u529F\u80FD\u7684 API \u662F\u5982\u4F55\u4F7F\u7528\u7684\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u4EE3\u7801\u793A\u4F8B",name:"api",required:!0,decorator:[T],component:[ne]})),r.createElement(O.Sticky,{align:"center"},r.createElement(U,{size:"large",onSubmit:function(ae){window.open(ce(ae))}},"\u63D0\u4EA4")))}});case 46:case"end":return q.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-issue-helper-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldMount, onFieldReact } from '@next-formily/core'
import { Field, VoidField } from '@next-formily/react'
import {
  Form,
  Input,
  Select,
  Radio,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@next-formily/antd'
import semver from 'semver'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

const MdInput = ({ value, onChange }) => {
  const [selectedTab, setSelectedTab] = React.useState('write')
  return (
    <div style={{ fontSize: 12, lineHeight: 1 }}>
      <ReactMde
        value={value}
        onChange={onChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(
            \`<div class="markdown" style="margin:0 20px;">\${
              converter.makeHtml(markdown) || ''
            }</div>\`,
          )
        }
      />
    </div>
  )
}

const form = createForm({
  validateFirst: true,
  effects() {
    onFieldMount('version', async (field) => {
      const { versions: unsort } = await fetch(
        'https://registry.npmmirror.com/@next-formily/core',
      ).then((res) => res.json())

      const versions = Object.keys(unsort).sort((v1, v2) =>
        semver.gte(v1, v2) ? -1 : 1,
      )
      field.dataSource = versions.map((version) => ({
        label: version,
        value: version,
      }))
    })
    onFieldMount('package', async (field) => {
      const packages = await fetch(
        'https://formilyjs.org/.netlify/functions/npm-search?q=@formily',
      ).then((res) => res.json())
      field.dataSource = packages.map(({ name }) => {
        return {
          label: name,
          value: name,
        }
      })
    })
    onFieldReact('bug-desc', (field) => {
      field.visible = field.query('type').value() === 'Bug Report'
    })
    onFieldReact('feature-desc', (field) => {
      field.visible = field.query('type').value() === 'Feature Request'
    })
  },
})

const createIssueURL = ({
  type,
  title,
  version,
  package: pkg,
  reproduceLink,
  reproduceStep,
  expected,
  actually,
  comment,
  feature,
  api,
}) => {
  const url = new URL('https://github.com/alibaba/formily/issues/new')

  const bugInfo = \`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### Reproduction link
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](\${
    reproduceLink || ''
  })

### Steps to reproduce
\${reproduceStep || ''}

### What is expected?
\${expected || ''}

### What is actually happening?
\${actually || ''}

### Package
\${pkg}@\${version}

---

\${comment || ''}

<!-- generated by formily-issue-helper. DO NOT REMOVE -->
\`

  const prInfo = \`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### What problem does this feature solve?
\${feature || ''}

### What does the proposed API look like?
\${api || ''}


<!-- generated by formily-issue-helper. DO NOT REMOVE -->
\`

  url.searchParams.set('title', \`[\${type}] \${title}\`)
  url.searchParams.set('body', type === 'Bug Report' ? bugInfo : prInfo)

  return url.href
}

export default () => {
  return (
    <Form form={form} layout="vertical" size="large">
      <Field
        title="\u8FD9\u662F\u4E00\u4E2A"
        name="type"
        required
        initialValue="Bug Report"
        decorator={[FormItem]}
        component={[Radio.Group, { optionType: 'button' }]}
        dataSource={[
          { label: '\u9519\u8BEF\u62A5\u544A', value: 'Bug Report' },
          { label: '\u529F\u80FD\u8981\u6C42', value: 'Feature Request' },
        ]}
      />
      <Field
        title="\u6807\u9898"
        name="title"
        required
        decorator={[FormItem]}
        component={[Input]}
      />
      <VoidField name="bug-desc">
        <Field
          title="\u6240\u5728\u5305"
          name="package"
          required
          decorator={[FormItem]}
          component={[Select, { showSearch: true }]}
        />
        <Field
          title="\u5305\u7248\u672C"
          description="\u8BF7\u68C0\u67E5\u95EE\u9898\u662F\u5426\u5B58\u5728\u4E8E\u6700\u65B0\u7248\u672C\u4E2D\u3002"
          name="version"
          required
          decorator={[FormItem]}
          component={[Select, { showSearch: true }]}
        />
        <Field
          title="\u91CD\u73B0\u94FE\u63A5"
          name="reproduceLink"
          decorator={[FormItem]}
          component={[Input]}
          required
          validator={[
            'url',
            (value) => {
              return /\\/\\/(codesandbox\\.io|github)/.test(value)
                ? ''
                : '\u5FC5\u987B\u662F Codesandbox \u94FE\u63A5\u6216\u8005 Github \u4ED3\u5E93\u5730\u5740'
            },
          ]}
          description={
            <div>
              This is Codesandbox templates.If you are:
              <ul>
                <li>
                  React + Antd User:
                  <ul>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-react-antd-pure-jsx-omncis"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pure JSX
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-react-antd-markup-schema-fvpevx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Markup Schema
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-react-antd-json-schema-28p0fh"
                        target="_blank"
                        rel="noreferrer"
                      >
                        JSON Schema
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  React + Fusion User:
                  <ul>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-react-next-pure-jsx-ji9iiu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pure JSX
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-react-next-markup-schema-i7dm17"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Markup Schema
                      </a>
                    </li>
                    <li>
                      <a
                        href="hhttps://codesandbox.io/s/formily-react-next-json-schema-1lm35h"
                        target="_blank"
                        rel="noreferrer"
                      >
                        JSON Schema
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Vue3 + ant-design-vue User:
                  <ul>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-antd-vue-pure-jsx-pp3gvv"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pure JSX
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-vue-ant-design-vue-markup-schema-donivp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Markup Schema
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codesandbox.io/s/formily-vue-ant-design-vue-json-schema-25g4z1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        JSON Schema
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          }
        />
        <Field
          title="\u91CD\u73B0\u6B65\u9AA4"
          description="\u7B80\u6D01\u6E05\u6670\u7684\u91CD\u73B0\u6B65\u9AA4\u80FD\u591F\u5E2E\u52A9\u6211\u4EEC\u66F4\u8FC5\u901F\u5730\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002"
          name="reproduceStep"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="\u671F\u671B\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F"
          name="expected"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="\u5B9E\u9645\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F"
          name="actually"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="\u8865\u5145\u8BF4\u660E\uFF08\u53EF\u9009\uFF09"
          name="comment"
          decorator={[FormItem]}
          component={[MdInput]}
        />
      </VoidField>
      <VoidField name="feature-desc">
        <Field
          title="\u8FD9\u4E2A\u529F\u80FD\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F"
          description={
            <div>
              <p>
                \u8BF7\u5C3D\u53EF\u80FD\u8BE6\u5C3D\u5730\u8BF4\u660E\u8FD9\u4E2A\u9700\u6C42\u7684\u7528\u4F8B\u548C\u573A\u666F\u3002\u6700\u91CD\u8981\u7684\u662F\uFF1A\u89E3\u91CA\u6E05\u695A\u662F\u600E\u6837\u7684\u7528\u6237\u4F53\u9A8C\u9700\u6C42\u50AC\u751F\u4E86\u8FD9\u4E2A\u529F\u80FD\u4E0A\u7684\u9700\u6C42\u3002
              </p>
              <p>
                Formily \u7684\u4E00\u4E2A\u91CD\u8981\u8BBE\u8BA1\u539F\u5219\u662F\u4FDD\u6301 API
                \u7684\u7B80\u6D01\u548C\u76F4\u63A5\u3002\u901A\u5E38\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u8003\u8651\u6DFB\u52A0\u5728\u73B0\u6709\u7684 API
                \u4E0B\u65E0\u6CD5\u8F7B\u677E\u5B9E\u73B0\u7684\u529F\u80FD\u3002\u65B0\u529F\u80FD\u7684\u7528\u4F8B\u4E5F\u5E94\u5F53\u8DB3\u591F\u5E38\u89C1\u3002
              </p>
            </div>
          }
          name="feature"
          required
          decorator={[FormItem]}
          component={[MdInput]}
        />

        <Field
          title="\u4F60\u671F\u671B\u7684 API \u662F\u600E\u6837\u7684\uFF1F"
          description="\u63CF\u8FF0\u4E00\u4E0B\u4F60\u671F\u671B\u8FD9\u4E2A\u65B0\u529F\u80FD\u7684 API \u662F\u5982\u4F55\u4F7F\u7528\u7684\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u4EE3\u7801\u793A\u4F8B"
          name="api"
          required
          decorator={[FormItem]}
          component={[MdInput]}
        />
      </VoidField>
      <FormButtonGroup.Sticky align="center">
        <Submit
          size="large"
          onSubmit={(values) => {
            window.open(createIssueURL(values))
          }}
        >
          \u63D0\u4EA4
        </Submit>
      </FormButtonGroup.Sticky>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},semver:{type:"NPM",value:"7.8.5"},"react-mde":{type:"NPM",value:"11.5.0"},showdown:{type:"NPM",value:"2.1.0"}},entry:"index.tsx"},routeId:"docs/guide/issue-helper.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,semver:I,"react-mde":t,showdown:l,"react-mde/lib/styles/css/react-mde-all.css":y},renderOpts:{compile:function(){var a=$()(j()().mark(function r(){var p,u=arguments;return j()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}}}},28570:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},22301:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return A}});var Y=e(90228),j=e.n(Y),Fe=e(87999),x=e.n(Fe),oe=e(69854),P=e(40751),E=e(68168),$=e(97204),A={"docs-guide-quick-start-demo-zh-cn-0":{component:oe.memo(oe.lazy(x()(j()().mark(function C(){var B,M,I,s,t,l,v,y,n,a,c,r,p,u,F;return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return B=d.sent,M=B.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return I=d.sent,s=I.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return t=d.sent,l=t.FormProvider,v=t.FormConsumer,y=t.Field,d.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return n=d.sent,a=n.FormItem,c=n.FormLayout,r=n.Input,p=n.FormButtonGroup,u=n.Submit,F=s(),d.abrupt("return",{default:function(){return M.createElement(l,{form:F},M.createElement(c,{layout:"vertical"},M.createElement(y,{name:"input",title:"\u8F93\u5165\u6846",required:!0,initialValue:"Hello world",decorator:[a],component:[r]})),M.createElement(v,null,function(){return M.createElement("div",{style:{marginBottom:20,padding:5,border:"1px dashed #666"}},"\u5B9E\u65F6\u54CD\u5E94\uFF1A",F.values.input)}),M.createElement(p,null,M.createElement(u,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 24:case"end":return d.stop()}},C)})))),asset:{type:"BLOCK",id:"docs-guide-quick-start-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { FormProvider, FormConsumer, Field } from '@next-formily/react'
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@next-formily/antd'

const form = createForm()

export default () => {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="\u8F93\u5165\u6846"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: '1px dashed #666',
            }}
          >
            \u5B9E\u65F6\u54CD\u5E94\uFF1A{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>\u63D0\u4EA4</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/quick-start.zh-CN",context:{react:g||(g=e.t(oe,2)),"@next-formily/core":P,"@next-formily/react":E,"@next-formily/antd":$},renderOpts:{compile:function(){var C=x()(j()().mark(function M(){var I,s=arguments;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,s));case 3:case"end":return l.stop()}},M)}));function B(){return C.apply(this,arguments)}return B}()}}}},95667:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},93358:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return n}});var Y=e(36075),j=e.n(Y),Fe=e(90228),x=e.n(Fe),oe=e(48305),P=e.n(oe),E=e(26068),$=e.n(E),A=e(87999),C=e.n(A),B=e(69854),M=e(40751),I=e(68168),s=e(97204),t=e(70869),l=e(22285),v=e(49320),y=e(67319),n={"docs-guide-scenes-edit-detail-demo-zh-cn-0":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V;return x()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=K.sent,r=c.default,p=c.useState,u=c.useEffect,K.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=K.sent,m=F.createForm,K.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=K.sent,f=d.createSchemaField,K.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return o=K.sent,i=o.Form,S=o.FormItem,h=o.FormLayout,N=o.Input,L=o.Select,T=o.Cascader,O=o.DatePicker,U=o.Submit,R=o.FormGrid,z=o.Upload,Q=o.ArrayItems,W=o.Editable,w=o.FormButtonGroup,K.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return G=K.sent,ne=G.action,K.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=K.sent,ce=te.Card,me=te.Button,q=te.Spin,K.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=K.sent,J=pe.UploadOutlined,ae=m({validateFirst:!0}),H=function(D){return r.createElement(z,$()($()({},D),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(me,{icon:r.createElement(J,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},V=f({components:{FormItem:S,FormGrid:R,FormLayout:h,Input:N,DatePicker:O,Cascader:T,Select:L,IDUpload:H,ArrayItems:Q,Editable:W},scope:{fetchAddress:function(D){var k=function X(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ee).reduce(function(re,se){var ie=P()(se,2),ve=ie[0],ue=ie[1];if(typeof ue=="string")return re.concat({label:ue,value:ve});var de=ue.name,fe=ue.code,ye=ue.cities,Ie=ue.districts,he=X(ye),xe=X(Ie);return re.concat({label:de,value:fe,children:he.length?he:xe.length?xe:void 0})},[])};D.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(X){return X.json()}).then(ne.bound(function(X){D.dataSource=k(X),D.loading=!1}))}}}),K.abrupt("return",{default:function(){var D=p(!0),k=P()(D,2),X=k[0],ee=k[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),ee(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(ce,{title:"\u7F16\u8F91\u7528\u6237",style:{width:620}},r.createElement(q,{spinning:X},r.createElement(i,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(V,null,r.createElement(V.String,{name:"username",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"}),r.createElement(V.Void,{title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid"},r.createElement(V.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"},required:!0}),r.createElement(V.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"},required:!0})),r.createElement(V.String,{name:"email",title:"\u90AE\u7BB1",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),r.createElement(V.String,{name:"gender",title:"\u6027\u522B","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),r.createElement(V.String,{name:"birthday",title:"\u751F\u65E5",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),r.createElement(V.String,{name:"address",title:"\u5730\u5740",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),r.createElement(V.String,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),r.createElement(V.Array,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},r.createElement(V.Object,{"x-component":"ArrayItems.Item"},r.createElement(V.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),r.createElement(V.Void,{name:"popover",title:"\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}]},r.createElement(V.String,{name:"name",required:!0,title:"\u59D3\u540D","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(V.String,{name:"email",title:"\u90AE\u7BB1","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(V.String,{name:"phone",required:!0,title:"\u624B\u673A\u53F7","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),r.createElement(V.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),r.createElement(V.Void,{"x-component":"ArrayItems.Addition",title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))),r.createElement(w.FormItem,null,r.createElement(U,{block:!0,size:"large"},"\u63D0\u4EA4"))))))}});case 48:case"end":return K.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    IDUpload,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u7F16\u8F91\u7528\u6237" style={{ width: 620 }}>
        <Spin spinning={loading}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <SchemaField>
              <SchemaField.String
                name="username"
                title="\u7528\u6237\u540D"
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.Void
                title="\u59D3\u540D"
                x-decorator="FormItem"
                x-decorator-props={{
                  asterisk: true,
                  feedbackLayout: 'none',
                }}
                x-component="FormGrid"
              >
                <SchemaField.String
                  name="firstName"
                  x-decorator="FormItem"
                  x-component="Input"
                  x-component-props={{
                    placeholder: '\u59D3',
                  }}
                  required
                />
                <SchemaField.String
                  name="lastName"
                  x-decorator="FormItem"
                  x-component="Input"
                  x-component-props={{
                    placeholder: '\u540D',
                  }}
                  required
                />
              </SchemaField.Void>
              <SchemaField.String
                name="email"
                title="\u90AE\u7BB1"
                required
                x-validator="email"
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="gender"
                title="\u6027\u522B"
                x-decorator="FormItem"
                x-component="Select"
                enum={[
                  {
                    label: '\u7537',
                    value: 1,
                  },
                  {
                    label: '\u5973',
                    value: 2,
                  },
                  {
                    label: '\u7B2C\u4E09\u6027\u522B',
                    value: 3,
                  },
                ]}
                required
              />
              <SchemaField.String
                name="birthday"
                title="\u751F\u65E5"
                required
                x-decorator="FormItem"
                x-component="DatePicker"
              />
              <SchemaField.String
                name="address"
                title="\u5730\u5740"
                required
                x-decorator="FormItem"
                x-component="Cascader"
                x-reactions="{{fetchAddress}}"
              />
              <SchemaField.String
                name="idCard"
                title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
                required
                x-decorator="FormItem"
                x-component="IDUpload"
              />
              <SchemaField.Array
                name="contacts"
                title="\u8054\u7CFB\u4EBA\u4FE1\u606F"
                required
                x-decorator="FormItem"
                x-component="ArrayItems"
              >
                <SchemaField.Object x-component="ArrayItems.Item">
                  <SchemaField.Void
                    x-decorator="FormItem"
                    x-component="ArrayItems.SortHandle"
                  />
                  <SchemaField.Void
                    name="popover"
                    title="\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F"
                    x-decorator="Editable.Popover"
                    x-component="FormLayout"
                    x-component-props={{
                      layout: 'vertical',
                    }}
                    x-reactions={[
                      {
                        fulfill: {
                          schema: {
                            title: '{{$self.query(".name").value() }}',
                          },
                        },
                      },
                    ]}
                  >
                    <SchemaField.String
                      name="name"
                      required
                      title="\u59D3\u540D"
                      x-decorator="FormItem"
                      x-component="Input"
                      x-component-props={{
                        style: {
                          width: 300,
                        },
                      }}
                    />
                    <SchemaField.String
                      name="email"
                      title="\u90AE\u7BB1"
                      x-validator={[{ required: true }, 'email']}
                      x-decorator="FormItem"
                      x-component="Input"
                      x-component-props={{
                        style: {
                          width: 300,
                        },
                      }}
                    />
                    <SchemaField.String
                      name="phone"
                      required
                      title="\u624B\u673A\u53F7"
                      x-validator="phone"
                      x-decorator="FormItem"
                      x-component="Input"
                      x-component-props={{
                        style: {
                          width: 300,
                        },
                      }}
                    />
                  </SchemaField.Void>
                  <SchemaField.Void
                    x-decorator="FormItem"
                    x-component="ArrayItems.Remove"
                  />
                </SchemaField.Object>
                <SchemaField.Void
                  x-component="ArrayItems.Addition"
                  title="\u65B0\u589E\u8054\u7CFB\u4EBA"
                />
              </SchemaField.Array>
            </SchemaField>
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                \u63D0\u4EA4
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}},"docs-guide-scenes-edit-detail-demo-zh-cn-1":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V,le;return x()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=Z.sent,r=c.default,p=c.useState,u=c.useEffect,Z.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=Z.sent,m=F.createForm,Z.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=Z.sent,f=d.createSchemaField,Z.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return o=Z.sent,i=o.Form,S=o.FormItem,h=o.FormLayout,N=o.Input,L=o.Select,T=o.Cascader,O=o.DatePicker,U=o.Submit,R=o.FormGrid,z=o.Upload,Q=o.ArrayItems,W=o.Editable,w=o.FormButtonGroup,Z.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return G=Z.sent,ne=G.action,Z.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=Z.sent,ce=te.Card,me=te.Button,q=te.Spin,Z.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=Z.sent,J=pe.UploadOutlined,ae=m({validateFirst:!0}),H=function(k){return r.createElement(z,$()($()({},k),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(me,{icon:r.createElement(J,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},V=f({components:{FormItem:S,FormGrid:R,FormLayout:h,Input:N,DatePicker:O,Cascader:T,Select:L,IDUpload:H,ArrayItems:Q,Editable:W},scope:{fetchAddress:function(k){var X=function ee(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(re).reduce(function(se,ie){var ve=P()(ie,2),ue=ve[0],de=ve[1];if(typeof de=="string")return se.concat({label:de,value:ue});var fe=de.name,ye=de.code,Ie=de.cities,he=de.districts,xe=ee(Ie),ge=ee(he);return se.concat({label:fe,value:ye,children:xe.length?xe:ge.length?ge:void 0})},[])};k.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(ee){return ee.json()}).then(ne.bound(function(ee){k.dataSource=X(ee),k.loading=!1}))}}}),le={type:"object",properties:{username:{type:"string",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"},name:{type:"void",title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"}}}},email:{type:"string",title:"\u90AE\u7BB1",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"\u6027\u522B",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"\u751F\u65E5","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"\u5730\u5740","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}],properties:{name:{type:"string",title:"\u59D3\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"\u90AE\u7BB1","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"\u624B\u673A\u53F7","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"\u65B0\u589E\u8054\u7CFB\u4EBA","x-component":"ArrayItems.Addition"}}}}},Z.abrupt("return",{default:function(){var k=p(!0),X=P()(k,2),ee=X[0],re=X[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),re(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(ce,{title:"\u7F16\u8F91\u7528\u6237",style:{width:620}},r.createElement(q,{spinning:ee},r.createElement(i,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(V,{schema:le}),r.createElement(w.FormItem,null,r.createElement(U,{block:!0,size:"large"},"\u63D0\u4EA4"))))))}});case 49:case"end":return Z.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    IDUpload,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '\u7528\u6237\u540D',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'void',
      title: '\u59D3\u540D',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
      },
      'x-component': 'FormGrid',
      properties: {
        firstName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u59D3',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u540D',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: '\u90AE\u7BB1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: '\u6027\u522B',
      enum: [
        {
          label: '\u7537',
          value: 1,
        },
        {
          label: '\u5973',
          value: 2,
        },
        {
          label: '\u7B2C\u4E09\u6027\u522B',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: '\u751F\u65E5',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: '\u5730\u5740',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: '\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: '\u8054\u7CFB\u4EBA\u4FE1\u606F',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayItems',
      items: {
        type: 'object',
        'x-component': 'ArrayItems.Item',
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },
          popover: {
            type: 'void',
            title: '\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F',
            'x-decorator': 'Editable.Popover',
            'x-component': 'FormLayout',
            'x-component-props': {
              layout: 'vertical',
            },
            'x-reactions': [
              {
                fulfill: {
                  schema: {
                    title: '{{$self.query(".name").value() }}',
                  },
                },
              },
            ],
            properties: {
              name: {
                type: 'string',
                title: '\u59D3\u540D',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              email: {
                type: 'string',
                title: '\u90AE\u7BB1',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'email'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              phone: {
                type: 'string',
                title: '\u624B\u673A\u53F7',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'phone'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: '\u65B0\u589E\u8054\u7CFB\u4EBA',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u7F16\u8F91\u7528\u6237" style={{ width: 620 }}>
        <Spin spinning={loading}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <SchemaField schema={schema} />
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                \u63D0\u4EA4
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}},"docs-guide-scenes-edit-detail-demo-zh-cn-2":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V,le,K;return x()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=D.sent,r=c.default,p=c.useState,u=c.useEffect,D.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=D.sent,m=F.createForm,D.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=D.sent,f=d.Field,o=d.VoidField,i=d.ArrayField,D.next=18,Promise.resolve().then(e.bind(e,97204));case 18:return S=D.sent,h=S.Form,N=S.FormItem,L=S.FormLayout,T=S.Input,O=S.Select,U=S.Cascader,R=S.DatePicker,z=S.Submit,Q=S.FormGrid,W=S.Upload,w=S.ArrayBase,G=S.Editable,ne=S.FormButtonGroup,D.next=34,Promise.resolve().then(e.bind(e,70869));case 34:return te=D.sent,ce=te.action,D.next=38,Promise.resolve().then(e.bind(e,22285));case 38:return me=D.sent,q=me.Card,pe=me.Button,J=me.Spin,D.next=44,Promise.resolve().then(e.bind(e,49320));case 44:return ae=D.sent,H=ae.UploadOutlined,D.t0=j(),D.next=49,Promise.resolve().then(e.bind(e,67319));case 49:return D.t1=D.sent,(0,D.t0)(D.t1),V=m({validateFirst:!0}),le=function(X){return r.createElement(W,$()($()({},X),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(pe,{icon:r.createElement(H,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},K=function(X){var ee=function re(){var se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(se).reduce(function(ie,ve){var ue=P()(ve,2),de=ue[0],fe=ue[1];if(typeof fe=="string")return ie.concat({label:fe,value:de});var ye=fe.name,Ie=fe.code,he=fe.cities,xe=fe.districts,ge=re(he),Se=re(xe);return ie.concat({label:ye,value:Ie,children:ge.length?ge:Se.length?Se:void 0})},[])};X.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(re){return re.json()}).then(ce.bound(function(re){X.dataSource=ee(re),X.loading=!1}))},D.abrupt("return",{default:function(){var X=p(!0),ee=P()(X,2),re=ee[0],se=ee[1];return u(function(){setTimeout(function(){V.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),se(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(q,{title:"\u7F16\u8F91\u7528\u6237",style:{width:620}},r.createElement(J,{spinning:re},r.createElement(h,{form:V,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(f,{name:"username",title:"\u7528\u6237\u540D",required:!0,decorator:[N],component:[T]}),r.createElement(o,{name:"name",title:"\u59D3\u540D",decorator:[N,{asterisk:!0,feedbackLayout:"none"}],component:[Q]},r.createElement(f,{name:"firstName",decorator:[N],component:[T,{placeholder:"\u59D3"}],required:!0}),r.createElement(f,{name:"lastName",decorator:[N],component:[T,{placeholder:"\u540D"}],required:!0})),r.createElement(f,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[N],component:[T]}),r.createElement(f,{name:"gender",title:"\u6027\u522B",decorator:[N],component:[O],dataSource:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),r.createElement(f,{name:"birthday",title:"\u751F\u65E5",required:!0,decorator:[N],component:[R]}),r.createElement(f,{name:"address",title:"\u5730\u5740",required:!0,decorator:[N],component:[U],reactions:K}),r.createElement(f,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,decorator:[N],component:[le]}),r.createElement(i,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",decorator:[N]},function(ie){var ve;return r.createElement(w,null,(ve=ie.value)===null||ve===void 0?void 0:ve.map(function(ue,de){return r.createElement("div",{key:de,className:"array-items-item"},r.createElement(f,{name:"".concat(de),title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F",component:[G.Popover],reactions:function(ye){ye.title=ye.query(".[].name").value()||ye.title}},r.createElement(o,{name:"layout",component:[L,{layout:"vertical"}]},r.createElement(f,{name:"name",title:"\u59D3\u540D",required:!0,decorator:[N],component:[T,{style:{width:300}}]}),r.createElement(f,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[N],component:[T,{style:{width:300}}]}),r.createElement(f,{name:"phone",title:"\u624B\u673A\u53F7",required:!0,validator:"phone",decorator:[N],component:[T,{style:{width:300}}]}))),r.createElement(N.BaseItem,null,r.createElement(w.Remove,{index:de}),r.createElement(w.MoveDown,{index:de}),r.createElement(w.MoveUp,{index:de})))}),r.createElement(w.Addition,{title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))}),r.createElement(ne.FormItem,null,r.createElement(z,{block:!0,size:"large"},"\u63D0\u4EA4"))))))}});case 55:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { Field, VoidField, ArrayField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  ArrayBase,
  Editable,
  FormButtonGroup,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import './index.less'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

const fetchAddress = (field) => {
  const transform = (data = {}) => {
    return Object.entries(data).reduce((buf, [key, value]) => {
      if (typeof value === 'string')
        return buf.concat({
          label: value,
          value: key,
        })
      const { name, code, cities, districts } = value
      const _cities = transform(cities)
      const _districts = transform(districts)
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
            ? _districts
            : undefined,
      })
    }, [])
  }

  field.loading = true
  fetch('//unpkg.com/china-location/dist/location.json')
    .then((res) => res.json())
    .then(
      action.bound((data) => {
        field.dataSource = transform(data)
        field.loading = false
      }),
    )
}

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u7F16\u8F91\u7528\u6237" style={{ width: 620 }}>
        <Spin spinning={loading}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <Field
              name="username"
              title="\u7528\u6237\u540D"
              required
              decorator={[FormItem]}
              component={[Input]}
            />
            <VoidField
              name="name"
              title="\u59D3\u540D"
              decorator={[
                FormItem,
                {
                  asterisk: true,
                  feedbackLayout: 'none',
                },
              ]}
              component={[FormGrid]}
            >
              <Field
                name="firstName"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    placeholder: '\u59D3',
                  },
                ]}
                required
              />
              <Field
                name="lastName"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    placeholder: '\u540D',
                  },
                ]}
                required
              />
            </VoidField>
            <Field
              name="email"
              title="\u90AE\u7BB1"
              required
              validator="email"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="gender"
              title="\u6027\u522B"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={[
                {
                  label: '\u7537',
                  value: 1,
                },
                {
                  label: '\u5973',
                  value: 2,
                },
                {
                  label: '\u7B2C\u4E09\u6027\u522B',
                  value: 3,
                },
              ]}
              required
            />
            <Field
              name="birthday"
              title="\u751F\u65E5"
              required
              decorator={[FormItem]}
              component={[DatePicker]}
            />
            <Field
              name="address"
              title="\u5730\u5740"
              required
              decorator={[FormItem]}
              component={[Cascader]}
              reactions={fetchAddress}
            />
            <Field
              name="idCard"
              title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
              required
              decorator={[FormItem]}
              component={[IDUpload]}
            />
            <ArrayField
              name="contacts"
              title="\u8054\u7CFB\u4EBA\u4FE1\u606F"
              decorator={[FormItem]}
            >
              {(field) => (
                <ArrayBase>
                  {field.value?.map((item, index) => (
                    <div key={index} className="array-items-item">
                      <Field
                        name={\`\${index}\`}
                        title="\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F"
                        component={[Editable.Popover]}
                        reactions={(field) => {
                          field.title =
                            field.query('.[].name').value() || field.title
                        }}
                      >
                        <VoidField
                          name="layout"
                          component={[FormLayout, { layout: 'vertical' }]}
                        >
                          <Field
                            name="name"
                            title="\u59D3\u540D"
                            required
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                          <Field
                            name="email"
                            title="\u90AE\u7BB1"
                            required
                            validator="email"
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                          <Field
                            name="phone"
                            title="\u624B\u673A\u53F7"
                            required
                            validator="phone"
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                        </VoidField>
                      </Field>
                      <FormItem.BaseItem>
                        <ArrayBase.Remove index={index} />
                        <ArrayBase.MoveDown index={index} />
                        <ArrayBase.MoveUp index={index} />
                      </FormItem.BaseItem>
                    </div>
                  ))}
                  <ArrayBase.Addition title="\u65B0\u589E\u8054\u7CFB\u4EBA" />
                </ArrayBase>
              )}
            </ArrayField>
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                \u63D0\u4EA4
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./index.less":{type:"FILE",value:e(19755).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{"./index.less":y,react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/index.less":y},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}},"docs-guide-scenes-edit-detail-demo-zh-cn-3":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V;return x()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=K.sent,r=c.default,p=c.useState,u=c.useEffect,K.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=K.sent,m=F.createForm,K.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=K.sent,f=d.createSchemaField,o=d.useField,K.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return i=K.sent,S=i.Form,h=i.FormItem,N=i.FormLayout,L=i.Input,T=i.Select,O=i.Cascader,U=i.DatePicker,R=i.FormGrid,z=i.Upload,Q=i.ArrayItems,W=i.Editable,w=i.PreviewText,K.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return G=K.sent,ne=G.action,K.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=K.sent,ce=te.Card,me=te.Button,q=te.Spin,K.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=K.sent,J=pe.UploadOutlined,ae=m({readPretty:!0,validateFirst:!0}),H=function(D){var k=o();return r.createElement(z,$()($()({},D),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),k.editable&&r.createElement(me,{icon:r.createElement(J,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},V=f({components:{FormItem:h,FormGrid:R,FormLayout:N,Input:L,DatePicker:U,Cascader:O,Select:T,IDUpload:H,ArrayItems:Q,Editable:W},scope:{fetchAddress:function(D){var k=function X(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ee).reduce(function(re,se){var ie=P()(se,2),ve=ie[0],ue=ie[1];if(typeof ue=="string")return re.concat({label:ue,value:ve});var de=ue.name,fe=ue.code,ye=ue.cities,Ie=ue.districts,he=X(ye),xe=X(Ie);return re.concat({label:de,value:fe,children:he.length?he:xe.length?xe:void 0})},[])};D.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(X){return X.json()}).then(ne.bound(function(X){D.dataSource=k(X),D.loading=!1}))}}}),K.abrupt("return",{default:function(){var D=p(!0),k=P()(D,2),X=k[0],ee=k[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),ee(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(w.Placeholder,{value:"-"},r.createElement(ce,{title:"\u7528\u6237\u8BE6\u60C5",style:{width:620}},r.createElement(q,{spinning:X},r.createElement(S,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(V,null,r.createElement(V.String,{name:"username",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"}),r.createElement(V.Void,{title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{feedbackLayout:"none"},"x-component":"FormGrid"},r.createElement(V.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"},required:!0}),r.createElement(V.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"},required:!0})),r.createElement(V.String,{name:"email",title:"\u90AE\u7BB1",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),r.createElement(V.String,{name:"gender",title:"\u6027\u522B","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),r.createElement(V.String,{name:"birthday",title:"\u751F\u65E5",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),r.createElement(V.String,{name:"address",title:"\u5730\u5740",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),r.createElement(V.String,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),r.createElement(V.Array,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},r.createElement(V.Object,{"x-component":"ArrayItems.Item"},r.createElement(V.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),r.createElement(V.Void,{name:"popover",title:"\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}]},r.createElement(V.String,{name:"name",required:!0,title:"\u59D3\u540D","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(V.String,{name:"email",title:"\u90AE\u7BB1","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(V.String,{name:"phone",required:!0,title:"\u624B\u673A\u53F7","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),r.createElement(V.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),r.createElement(V.Void,{"x-component":"ArrayItems.Addition",title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))))))))}});case 48:case"end":return K.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, useField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  PreviewText,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  readPretty: true,
  validateFirst: true,
})

const IDUpload = (props) => {
  const field = useField()
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      {field.editable && <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>}
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    IDUpload,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <PreviewText.Placeholder value="-">
        <Card title="\u7528\u6237\u8BE6\u60C5" style={{ width: 620 }}>
          <Spin spinning={loading}>
            <Form
              form={form}
              labelCol={5}
              wrapperCol={16}
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="username"
                  title="\u7528\u6237\u540D"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.Void
                  title="\u59D3\u540D"
                  x-decorator="FormItem"
                  x-decorator-props={{
                    feedbackLayout: 'none',
                  }}
                  x-component="FormGrid"
                >
                  <SchemaField.String
                    name="firstName"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      placeholder: '\u59D3',
                    }}
                    required
                  />
                  <SchemaField.String
                    name="lastName"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      placeholder: '\u540D',
                    }}
                    required
                  />
                </SchemaField.Void>
                <SchemaField.String
                  name="email"
                  title="\u90AE\u7BB1"
                  required
                  x-validator="email"
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.String
                  name="gender"
                  title="\u6027\u522B"
                  x-decorator="FormItem"
                  x-component="Select"
                  enum={[
                    {
                      label: '\u7537',
                      value: 1,
                    },
                    {
                      label: '\u5973',
                      value: 2,
                    },
                    {
                      label: '\u7B2C\u4E09\u6027\u522B',
                      value: 3,
                    },
                  ]}
                  required
                />
                <SchemaField.String
                  name="birthday"
                  title="\u751F\u65E5"
                  required
                  x-decorator="FormItem"
                  x-component="DatePicker"
                />
                <SchemaField.String
                  name="address"
                  title="\u5730\u5740"
                  required
                  x-decorator="FormItem"
                  x-component="Cascader"
                  x-reactions="{{fetchAddress}}"
                />
                <SchemaField.String
                  name="idCard"
                  title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
                  required
                  x-decorator="FormItem"
                  x-component="IDUpload"
                />
                <SchemaField.Array
                  name="contacts"
                  title="\u8054\u7CFB\u4EBA\u4FE1\u606F"
                  required
                  x-decorator="FormItem"
                  x-component="ArrayItems"
                >
                  <SchemaField.Object x-component="ArrayItems.Item">
                    <SchemaField.Void
                      x-decorator="FormItem"
                      x-component="ArrayItems.SortHandle"
                    />
                    <SchemaField.Void
                      name="popover"
                      title="\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F"
                      x-decorator="Editable.Popover"
                      x-component="FormLayout"
                      x-component-props={{
                        layout: 'vertical',
                      }}
                      x-reactions={[
                        {
                          fulfill: {
                            schema: {
                              title: '{{$self.query(".name").value() }}',
                            },
                          },
                        },
                      ]}
                    >
                      <SchemaField.String
                        name="name"
                        required
                        title="\u59D3\u540D"
                        x-decorator="FormItem"
                        x-component="Input"
                        x-component-props={{
                          style: {
                            width: 300,
                          },
                        }}
                      />
                      <SchemaField.String
                        name="email"
                        title="\u90AE\u7BB1"
                        x-validator={[{ required: true }, 'email']}
                        x-decorator="FormItem"
                        x-component="Input"
                        x-component-props={{
                          style: {
                            width: 300,
                          },
                        }}
                      />
                      <SchemaField.String
                        name="phone"
                        required
                        title="\u624B\u673A\u53F7"
                        x-validator="phone"
                        x-decorator="FormItem"
                        x-component="Input"
                        x-component-props={{
                          style: {
                            width: 300,
                          },
                        }}
                      />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-decorator="FormItem"
                      x-component="ArrayItems.Remove"
                    />
                  </SchemaField.Object>
                  <SchemaField.Void
                    x-component="ArrayItems.Addition"
                    title="\u65B0\u589E\u8054\u7CFB\u4EBA"
                  />
                </SchemaField.Array>
              </SchemaField>
            </Form>
          </Spin>
        </Card>
      </PreviewText.Placeholder>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}},"docs-guide-scenes-edit-detail-demo-zh-cn-4":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V,le;return x()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=Z.sent,r=c.default,p=c.useState,u=c.useEffect,Z.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=Z.sent,m=F.createForm,Z.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=Z.sent,f=d.createSchemaField,o=d.useField,Z.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return i=Z.sent,S=i.Form,h=i.FormItem,N=i.FormLayout,L=i.Input,T=i.Select,O=i.Cascader,U=i.DatePicker,R=i.FormGrid,z=i.Upload,Q=i.ArrayItems,W=i.Editable,w=i.PreviewText,Z.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return G=Z.sent,ne=G.action,Z.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=Z.sent,ce=te.Card,me=te.Button,q=te.Spin,Z.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=Z.sent,J=pe.UploadOutlined,ae=m({readPretty:!0,validateFirst:!0}),H=function(k){var X=o();return r.createElement(z,$()($()({},k),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),X.editable&&r.createElement(me,{icon:r.createElement(J,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},V=f({components:{FormItem:h,FormGrid:R,FormLayout:N,Input:L,DatePicker:U,Cascader:O,Select:T,IDUpload:H,ArrayItems:Q,Editable:W},scope:{fetchAddress:function(k){var X=function ee(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(re).reduce(function(se,ie){var ve=P()(ie,2),ue=ve[0],de=ve[1];if(typeof de=="string")return se.concat({label:de,value:ue});var fe=de.name,ye=de.code,Ie=de.cities,he=de.districts,xe=ee(Ie),ge=ee(he);return se.concat({label:fe,value:ye,children:xe.length?xe:ge.length?ge:void 0})},[])};k.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(ee){return ee.json()}).then(ne.bound(function(ee){k.dataSource=X(ee),k.loading=!1}))}}}),le={type:"object",properties:{username:{type:"string",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"},name:{type:"void",title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"}}}},email:{type:"string",title:"\u90AE\u7BB1",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"\u6027\u522B",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"\u751F\u65E5","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"\u5730\u5740","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}],properties:{name:{type:"string",title:"\u59D3\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"\u90AE\u7BB1","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"\u624B\u673A\u53F7","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"\u65B0\u589E\u8054\u7CFB\u4EBA","x-component":"ArrayItems.Addition"}}}}},Z.abrupt("return",{default:function(){var k=p(!0),X=P()(k,2),ee=X[0],re=X[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),re(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(w.Placeholder,{value:"-"},r.createElement(ce,{title:"\u7528\u6237\u8BE6\u60C5",style:{width:620}},r.createElement(q,{spinning:ee},r.createElement(S,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(V,{schema:le}))))))}});case 49:case"end":return Z.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField, useField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  PreviewText,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  readPretty: true,
  validateFirst: true,
})

const IDUpload = (props) => {
  const field = useField()
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      {field.editable && <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>}
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    IDUpload,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '\u7528\u6237\u540D',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'void',
      title: '\u59D3\u540D',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
      },
      'x-component': 'FormGrid',
      properties: {
        firstName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u59D3',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u540D',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: '\u90AE\u7BB1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: '\u6027\u522B',
      enum: [
        {
          label: '\u7537',
          value: 1,
        },
        {
          label: '\u5973',
          value: 2,
        },
        {
          label: '\u7B2C\u4E09\u6027\u522B',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: '\u751F\u65E5',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: '\u5730\u5740',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: '\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: '\u8054\u7CFB\u4EBA\u4FE1\u606F',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayItems',
      items: {
        type: 'object',
        'x-component': 'ArrayItems.Item',
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },
          popover: {
            type: 'void',
            title: '\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F',
            'x-decorator': 'Editable.Popover',
            'x-component': 'FormLayout',
            'x-component-props': {
              layout: 'vertical',
            },
            'x-reactions': [
              {
                fulfill: {
                  schema: {
                    title: '{{$self.query(".name").value() }}',
                  },
                },
              },
            ],
            properties: {
              name: {
                type: 'string',
                title: '\u59D3\u540D',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              email: {
                type: 'string',
                title: '\u90AE\u7BB1',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'email'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              phone: {
                type: 'string',
                title: '\u624B\u673A\u53F7',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'phone'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: '\u65B0\u589E\u8054\u7CFB\u4EBA',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <PreviewText.Placeholder value="-">
        <Card title="\u7528\u6237\u8BE6\u60C5" style={{ width: 620 }}>
          <Spin spinning={loading}>
            <Form
              form={form}
              labelCol={5}
              wrapperCol={16}
              onAutoSubmit={console.log}
            >
              <SchemaField schema={schema} />
            </Form>
          </Spin>
        </Card>
      </PreviewText.Placeholder>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}},"docs-guide-scenes-edit-detail-demo-zh-cn-5":{component:B.memo(B.lazy(C()(x()().mark(function a(){var c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae,H,V,le,K;return x()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=D.sent,r=c.default,p=c.useState,u=c.useEffect,D.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return F=D.sent,m=F.createForm,D.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=D.sent,f=d.Field,o=d.VoidField,i=d.ArrayField,S=d.useField,D.next=19,Promise.resolve().then(e.bind(e,97204));case 19:return h=D.sent,N=h.Form,L=h.FormItem,T=h.FormLayout,O=h.Input,U=h.Select,R=h.Cascader,z=h.DatePicker,Q=h.FormGrid,W=h.ArrayBase,w=h.Upload,G=h.PreviewText,ne=h.Editable,D.next=34,Promise.resolve().then(e.bind(e,70869));case 34:return te=D.sent,ce=te.action,D.next=38,Promise.resolve().then(e.bind(e,22285));case 38:return me=D.sent,q=me.Card,pe=me.Button,J=me.Spin,D.next=44,Promise.resolve().then(e.bind(e,49320));case 44:return ae=D.sent,H=ae.UploadOutlined,D.t0=j(),D.next=49,Promise.resolve().then(e.bind(e,67319));case 49:return D.t1=D.sent,(0,D.t0)(D.t1),V=m({validateFirst:!0,readPretty:!0}),le=function(X){var ee=S();return r.createElement(w,$()($()({},X),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),ee.editable&&r.createElement(pe,{icon:r.createElement(H,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},K=function(X){var ee=function re(){var se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(se).reduce(function(ie,ve){var ue=P()(ve,2),de=ue[0],fe=ue[1];if(typeof fe=="string")return ie.concat({label:fe,value:de});var ye=fe.name,Ie=fe.code,he=fe.cities,xe=fe.districts,ge=re(he),Se=re(xe);return ie.concat({label:ye,value:Ie,children:ge.length?ge:Se.length?Se:void 0})},[])};X.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(re){return re.json()}).then(ce.bound(function(re){X.dataSource=ee(re),X.loading=!1}))},D.abrupt("return",{default:function(){var X=p(!0),ee=P()(X,2),re=ee[0],se=ee[1];return u(function(){setTimeout(function(){V.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"\u5F20\u4E09",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"\u674E\u56DB",phone:"16873452678",email:"lisi@gmail.com"}]}),se(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(G.Placeholder,{value:"-"},r.createElement(q,{title:"\u7F16\u8F91\u7528\u6237",style:{width:620}},r.createElement(J,{spinning:re},r.createElement(N,{form:V,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(f,{name:"username",title:"\u7528\u6237\u540D",required:!0,decorator:[L],component:[O]}),r.createElement(o,{name:"name",title:"\u59D3\u540D",decorator:[L,{feedbackLayout:"none"}],component:[Q]},r.createElement(f,{name:"firstName",decorator:[L],component:[O,{placeholder:"\u59D3"}],required:!0}),r.createElement(f,{name:"lastName",decorator:[L],component:[O,{placeholder:"\u540D"}],required:!0})),r.createElement(f,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[L],component:[O]}),r.createElement(f,{name:"gender",title:"\u6027\u522B",decorator:[L],component:[U],dataSource:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),r.createElement(f,{name:"birthday",title:"\u751F\u65E5",required:!0,decorator:[L],component:[z]}),r.createElement(f,{name:"address",title:"\u5730\u5740",required:!0,decorator:[L],component:[R],reactions:K}),r.createElement(f,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,decorator:[L],component:[le]}),r.createElement(i,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",decorator:[L]},function(ie){var ve;return r.createElement(W,null,(ve=ie.value)===null||ve===void 0?void 0:ve.map(function(ue,de){return r.createElement("div",{key:de,className:"array-items-item"},r.createElement(f,{name:"".concat(de),title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F",component:[ne.Popover],reactions:function(ye){ye.title=ye.query(".[].name").value()||ye.title}},r.createElement(o,{name:"layout",component:[T,{layout:"vertical"}]},r.createElement(f,{name:"name",title:"\u59D3\u540D",required:!0,decorator:[L],component:[O,{style:{width:300}}]}),r.createElement(f,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[L],component:[O,{style:{width:300}}]}),r.createElement(f,{name:"phone",title:"\u624B\u673A\u53F7",required:!0,validator:"phone",decorator:[L],component:[O,{style:{width:300}}]}))))}),r.createElement(W.Addition,{title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))}))))))}});case 55:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
import { createForm } from '@next-formily/core'
import { Field, VoidField, ArrayField, useField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  FormGrid,
  ArrayBase,
  Upload,
  PreviewText,
  Editable,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import './index.less'

const form = createForm({
  validateFirst: true,
  readPretty: true,
})

const IDUpload = (props) => {
  const field = useField()
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      {field.editable && <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>}
    </Upload>
  )
}

const fetchAddress = (field) => {
  const transform = (data = {}) => {
    return Object.entries(data).reduce((buf, [key, value]) => {
      if (typeof value === 'string')
        return buf.concat({
          label: value,
          value: key,
        })
      const { name, code, cities, districts } = value
      const _cities = transform(cities)
      const _districts = transform(districts)
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
            ? _districts
            : undefined,
      })
    }, [])
  }

  field.loading = true
  fetch('//unpkg.com/china-location/dist/location.json')
    .then((res) => res.json())
    .then(
      action.bound((data) => {
        field.dataSource = transform(data)
        field.loading = false
      }),
    )
}

export default () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: 'Aston Martin',
        firstName: 'Aston',
        lastName: 'Martin',
        email: 'aston_martin@aston.com',
        gender: 1,
        birthday: '1836-01-03',
        address: ['110000', '110000', '110101'],
        idCard: [
          {
            name: 'this is image',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            uid: 'rc-upload-1615825692847-2',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        contacts: [
          { name: '\u5F20\u4E09', phone: '13245633378', email: 'zhangsan@gmail.com' },
          { name: '\u674E\u56DB', phone: '16873452678', email: 'lisi@gmail.com' },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <PreviewText.Placeholder value="-">
        <Card title="\u7F16\u8F91\u7528\u6237" style={{ width: 620 }}>
          <Spin spinning={loading}>
            <Form
              form={form}
              labelCol={5}
              wrapperCol={16}
              onAutoSubmit={console.log}
            >
              <Field
                name="username"
                title="\u7528\u6237\u540D"
                required
                decorator={[FormItem]}
                component={[Input]}
              />
              <VoidField
                name="name"
                title="\u59D3\u540D"
                decorator={[
                  FormItem,
                  {
                    feedbackLayout: 'none',
                  },
                ]}
                component={[FormGrid]}
              >
                <Field
                  name="firstName"
                  decorator={[FormItem]}
                  component={[
                    Input,
                    {
                      placeholder: '\u59D3',
                    },
                  ]}
                  required
                />
                <Field
                  name="lastName"
                  decorator={[FormItem]}
                  component={[
                    Input,
                    {
                      placeholder: '\u540D',
                    },
                  ]}
                  required
                />
              </VoidField>
              <Field
                name="email"
                title="\u90AE\u7BB1"
                required
                validator="email"
                decorator={[FormItem]}
                component={[Input]}
              />
              <Field
                name="gender"
                title="\u6027\u522B"
                decorator={[FormItem]}
                component={[Select]}
                dataSource={[
                  {
                    label: '\u7537',
                    value: 1,
                  },
                  {
                    label: '\u5973',
                    value: 2,
                  },
                  {
                    label: '\u7B2C\u4E09\u6027\u522B',
                    value: 3,
                  },
                ]}
                required
              />
              <Field
                name="birthday"
                title="\u751F\u65E5"
                required
                decorator={[FormItem]}
                component={[DatePicker]}
              />
              <Field
                name="address"
                title="\u5730\u5740"
                required
                decorator={[FormItem]}
                component={[Cascader]}
                reactions={fetchAddress}
              />
              <Field
                name="idCard"
                title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
                required
                decorator={[FormItem]}
                component={[IDUpload]}
              />
              <ArrayField
                name="contacts"
                title="\u8054\u7CFB\u4EBA\u4FE1\u606F"
                decorator={[FormItem]}
              >
                {(field) => (
                  <ArrayBase>
                    {field.value?.map((item, index) => (
                      <div key={index} className="array-items-item">
                        <Field
                          name={\`\${index}\`}
                          title="\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F"
                          component={[Editable.Popover]}
                          reactions={(field) => {
                            field.title =
                              field.query('.[].name').value() || field.title
                          }}
                        >
                          <VoidField
                            name="layout"
                            component={[FormLayout, { layout: 'vertical' }]}
                          >
                            <Field
                              name="name"
                              title="\u59D3\u540D"
                              required
                              decorator={[FormItem]}
                              component={[
                                Input,
                                {
                                  style: {
                                    width: 300,
                                  },
                                },
                              ]}
                            />
                            <Field
                              name="email"
                              title="\u90AE\u7BB1"
                              required
                              validator="email"
                              decorator={[FormItem]}
                              component={[
                                Input,
                                {
                                  style: {
                                    width: 300,
                                  },
                                },
                              ]}
                            />
                            <Field
                              name="phone"
                              title="\u624B\u673A\u53F7"
                              required
                              validator="phone"
                              decorator={[FormItem]}
                              component={[
                                Input,
                                {
                                  style: {
                                    width: 300,
                                  },
                                },
                              ]}
                            />
                          </VoidField>
                        </Field>
                      </div>
                    ))}
                    <ArrayBase.Addition title="\u65B0\u589E\u8054\u7CFB\u4EBA" />
                  </ArrayBase>
                )}
              </ArrayField>
            </Form>
          </Spin>
        </Card>
      </PreviewText.Placeholder>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./index.less":{type:"FILE",value:e(19755).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail.zh-CN",context:{"./index.less":y,react:g||(g=e.t(B,2)),"@next-formily/core":M,"@next-formily/react":I,"@next-formily/antd":s,"@next-formily/reactive":t,antd:l,"@ant-design/icons":v,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/index.less":y},renderOpts:{compile:function(){var a=C()(x()().mark(function r(){var p,u=arguments;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(6404).then(e.bind(e,46404));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,u));case 3:case"end":return m.stop()}},r)}));function c(){return a.apply(this,arguments)}return c}()}}}},22575:function(_,b,e){var g;e.r(b),e.d(b,{demos:function(){return v}});var Y=e(48305),j=e.n(Y),Fe=e(26068),x=e.n(Fe),oe=e(90228),P=e.n(oe),E=e(87999),$=e.n(E),A=e(69854),C=e(40751),B=e(68168),M=e(97204),I=e(22285),s=e(49320),t=e(43132),l=e(70869),v={"docs-guide-scenes-login-register-demo-zh-cn-0":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z;return P()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=W.sent,a=n.default,W.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=W.sent,r=c.createForm,W.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=W.sent,u=p.createSchemaField,W.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=W.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,W.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return S=W.sent,h=S.Tabs,N=S.Card,W.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return L=W.sent,W.next=30,Promise.resolve().then(e.bind(e,43132));case 30:return T=W.sent,O=T.VerifyCode,U=r({validateFirst:!0}),R=r({validateFirst:!0}),z=u({components:{FormItem:d,Input:f,Password:o,VerifyCode:O},scope:{icon:function(G){return a.createElement(L[G])}}}),W.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{style:{width:400}},a.createElement(h,{style:{overflow:"visible",marginTop:-10}},a.createElement(h.TabPane,{key:"1",tab:"\u8D26\u5BC6\u767B\u5F55"},a.createElement(m,{form:U,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(z,null,a.createElement(z.String,{name:"username",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":{required:!0},"x-component-props":{prefix:"{{icon('UserOutlined')}}"}}),a.createElement(z.String,{name:"password",title:"\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{prefix:"{{icon('LockOutlined')}}"}})),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55"))),a.createElement(h.TabPane,{key:"2",tab:"\u624B\u673A\u767B\u5F55"},a.createElement(m,{form:R,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(z,null,a.createElement(z.String,{name:"phone",title:"\u624B\u673A\u53F7",required:!0,"x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('PhoneOutlined')}}"}}),a.createElement(z.String,{name:"verifyCode",title:"\u9A8C\u8BC1\u7801",required:!0,"x-decorator":"FormItem","x-component":"VerifyCode","x-component-props":{prefix:"{{icon('LockOutlined')}}"},"x-reactions":[{dependencies:[".phone#value",".phone#valid"],fulfill:{state:{"component[1].readyPost":"{{$deps[0] && $deps[1]}}","component[1].phoneNumber":"{{$deps[0]}}"}}}]})),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#\u65B0\u7528\u6237\u6CE8\u518C"},"\u65B0\u7528\u6237\u6CE8\u518C"),a.createElement("a",{href:"#\u5FD8\u8BB0\u5BC6\u7801"},"\u5FD8\u8BB0\u5BC6\u7801?"))))}});case 36:case"end":return W.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, Password, Submit } from '@next-formily/antd'
import { Tabs, Card } from 'antd'
import * as ICONS from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name])
    },
  },
})

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card style={{ width: 400 }}>
        <Tabs style={{ overflow: 'visible', marginTop: -10 }}>
          <Tabs.TabPane key="1" tab="\u8D26\u5BC6\u767B\u5F55">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="username"
                  title="\u7528\u6237\u540D"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                  x-validator={{
                    required: true,
                  }}
                  x-component-props={{
                    prefix: "{{icon('UserOutlined')}}",
                  }}
                />
                <SchemaField.String
                  name="password"
                  title="\u5BC6\u7801"
                  required
                  x-decorator="FormItem"
                  x-component="Password"
                  x-component-props={{
                    prefix: "{{icon('LockOutlined')}}",
                  }}
                />
              </SchemaField>
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="\u624B\u673A\u767B\u5F55">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="phone"
                  title="\u624B\u673A\u53F7"
                  required
                  x-validator="phone"
                  x-decorator="FormItem"
                  x-component="Input"
                  x-component-props={{
                    prefix: "{{icon('PhoneOutlined')}}",
                  }}
                />
                <SchemaField.String
                  name="verifyCode"
                  title="\u9A8C\u8BC1\u7801"
                  required
                  x-decorator="FormItem"
                  x-component="VerifyCode"
                  x-component-props={{
                    prefix: "{{icon('LockOutlined')}}",
                  }}
                  x-reactions={[
                    {
                      dependencies: ['.phone#value', '.phone#valid'],
                      fulfill: {
                        state: {
                          'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
                          'component[1].phoneNumber': '{{$deps[0]}}',
                        },
                      },
                    },
                  ]}
                />
              </SchemaField>
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
        </Tabs>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#\u65B0\u7528\u6237\u6CE8\u518C">\u65B0\u7528\u6237\u6CE8\u518C</a>
          <a href="#\u5FD8\u8BB0\u5BC6\u7801">\u5FD8\u8BB0\u5BC6\u7801?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{"./VerifyCode.tsx":t,react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I,"@ant-design/icons":s,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-1":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W;return P()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=G.sent,a=n.default,G.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=G.sent,r=c.createForm,G.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=G.sent,u=p.createSchemaField,G.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=G.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,G.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return S=G.sent,h=S.Tabs,N=S.Card,G.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return L=G.sent,G.next=30,Promise.resolve().then(e.bind(e,43132));case 30:return T=G.sent,O=T.VerifyCode,U=r({validateFirst:!0}),R=r({validateFirst:!0}),z=u({components:{FormItem:d,Input:f,Password:o,VerifyCode:O},scope:{icon:function(te){return a.createElement(L[te])}}}),Q={type:"object",properties:{username:{type:"string",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('UserOutlined')}}"}},password:{type:"string",title:"\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{prefix:"{{icon('LockOutlined')}}"}}}},W={type:"object",properties:{phone:{type:"string",title:"\u624B\u673A\u53F7",required:!0,"x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('PhoneOutlined')}}"}},verifyCode:{type:"string",title:"\u9A8C\u8BC1\u7801",required:!0,"x-decorator":"FormItem","x-component":"VerifyCode","x-component-props":{prefix:"{{icon('LockOutlined')}}"},"x-reactions":[{dependencies:[".phone#value",".phone#valid"],fulfill:{state:{"component[1].readyPost":"{{$deps[0] && $deps[1]}}","component[1].phoneNumber":"{{$deps[0]}}"}}}]}}},G.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{style:{width:400}},a.createElement(h,{style:{overflow:"visible",marginTop:-10}},a.createElement(h.TabPane,{key:"1",tab:"\u8D26\u5BC6\u767B\u5F55"},a.createElement(m,{form:U,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(z,{schema:Q}),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55"))),a.createElement(h.TabPane,{key:"2",tab:"\u624B\u673A\u767B\u5F55"},a.createElement(m,{form:R,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(z,{schema:W}),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#\u65B0\u7528\u6237\u6CE8\u518C"},"\u65B0\u7528\u6237\u6CE8\u518C"),a.createElement("a",{href:"#\u5FD8\u8BB0\u5BC6\u7801"},"\u5FD8\u8BB0\u5BC6\u7801?"))))}});case 38:case"end":return G.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import { Form, FormItem, Input, Password, Submit } from '@next-formily/antd'
import { Tabs, Card } from 'antd'
import * as ICONS from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name])
    },
  },
})

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '\u7528\u6237\u540D',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: '\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
}

const phoneSchema = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      title: '\u624B\u673A\u53F7',
      required: true,
      'x-validator': 'phone',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('PhoneOutlined')}}",
      },
    },
    verifyCode: {
      type: 'string',
      title: '\u9A8C\u8BC1\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'VerifyCode',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
      'x-reactions': [
        {
          dependencies: ['.phone#value', '.phone#valid'],
          fulfill: {
            state: {
              'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
              'component[1].phoneNumber': '{{$deps[0]}}',
            },
          },
        },
      ],
    },
  },
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card style={{ width: 400 }}>
        <Tabs style={{ overflow: 'visible', marginTop: -10 }}>
          <Tabs.TabPane key="1" tab="\u8D26\u5BC6\u767B\u5F55">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField schema={normalSchema} />
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="\u624B\u673A\u767B\u5F55">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField schema={phoneSchema} />
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
        </Tabs>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#\u65B0\u7528\u6237\u6CE8\u518C">\u65B0\u7528\u6237\u6CE8\u518C</a>
          <a href="#\u5FD8\u8BB0\u5BC6\u7801">\u5FD8\u8BB0\u5BC6\u7801?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{"./VerifyCode.tsx":t,react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I,"@ant-design/icons":s,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-2":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W;return P()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=G.sent,a=n.default,G.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=G.sent,r=c.createForm,G.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=G.sent,u=p.Field,G.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=G.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,G.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return S=G.sent,h=S.Tabs,N=S.Card,G.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return L=G.sent,T=L.UserOutlined,O=L.LockOutlined,U=L.PhoneOutlined,G.next=33,Promise.resolve().then(e.bind(e,43132));case 33:return R=G.sent,z=R.VerifyCode,Q=r({validateFirst:!0}),W=r({validateFirst:!0}),G.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{style:{width:400}},a.createElement(h,{style:{overflow:"visible",marginTop:-10}},a.createElement(h.TabPane,{key:"1",tab:"\u8D26\u5BC6\u767B\u5F55"},a.createElement(m,{form:Q,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"\u7528\u6237\u540D",required:!0,decorator:[d],component:[f,{prefix:a.createElement(T,null)}]}),a.createElement(u,{name:"password",title:"\u5BC6\u7801",required:!0,decorator:[d],component:[o,{prefix:a.createElement(O,null)}]}),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55"))),a.createElement(h.TabPane,{key:"2",tab:"\u624B\u673A\u767B\u5F55"},a.createElement(m,{form:W,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(u,{name:"phone",title:"\u624B\u673A\u53F7",required:!0,validator:"phone",decorator:[d],component:[f,{prefix:a.createElement(U,null)}]}),a.createElement(u,{name:"verifyCode",title:"\u9A8C\u8BC1\u7801",required:!0,reactions:function(ce){var me=ce.query(".phone");ce.setComponentProps({readyPost:me.get("valid")&&me.get("value"),phoneNumber:me.get("value")})},decorator:[d],component:[z,{prefix:a.createElement(O,null)}]}),a.createElement(i,{block:!0,size:"large"},"\u767B\u5F55")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#\u65B0\u7528\u6237\u6CE8\u518C"},"\u65B0\u7528\u6237\u6CE8\u518C"),a.createElement("a",{href:"#\u5FD8\u8BB0\u5BC6\u7801"},"\u5FD8\u8BB0\u5BC6\u7801?"))))}});case 38:case"end":return G.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, Password, Submit } from '@next-formily/antd'
import { Tabs, Card } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card style={{ width: 400 }}>
        <Tabs style={{ overflow: 'visible', marginTop: -10 }}>
          <Tabs.TabPane key="1" tab="\u8D26\u5BC6\u767B\u5F55">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="username"
                title="\u7528\u6237\u540D"
                required
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix: <UserOutlined />,
                  },
                ]}
              />
              <Field
                name="password"
                title="\u5BC6\u7801"
                required
                decorator={[FormItem]}
                component={[
                  Password,
                  {
                    prefix: <LockOutlined />,
                  },
                ]}
              />
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="\u624B\u673A\u767B\u5F55">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="phone"
                title="\u624B\u673A\u53F7"
                required
                validator="phone"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix: <PhoneOutlined />,
                  },
                ]}
              />
              <Field
                name="verifyCode"
                title="\u9A8C\u8BC1\u7801"
                required
                reactions={(field) => {
                  const phone = field.query('.phone')
                  field.setComponentProps({
                    readyPost: phone.get('valid') && phone.get('value'),
                    phoneNumber: phone.get('value'),
                  })
                }}
                decorator={[FormItem]}
                component={[
                  VerifyCode,
                  {
                    prefix: <LockOutlined />,
                  },
                ]}
              />
              <Submit block size="large">
                \u767B\u5F55
              </Submit>
            </Form>
          </Tabs.TabPane>
        </Tabs>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#\u65B0\u7528\u6237\u6CE8\u518C">\u65B0\u7528\u6237\u6CE8\u518C</a>
          <a href="#\u5FD8\u8BB0\u5BC6\u7801">\u5FD8\u8BB0\u5BC6\u7801?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{"./VerifyCode.tsx":t,react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I,"@ant-design/icons":s,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-3":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J;return P()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=H.sent,a=n.default,H.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=H.sent,r=c.createForm,H.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=H.sent,u=p.createSchemaField,H.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=H.sent,m=F.Form,d=F.FormItem,f=F.FormLayout,o=F.Input,i=F.Select,S=F.Password,h=F.Cascader,N=F.DatePicker,L=F.Submit,T=F.Space,O=F.FormGrid,U=F.Upload,R=F.ArrayItems,z=F.Editable,Q=F.FormButtonGroup,H.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return W=H.sent,w=W.action,H.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return G=H.sent,ne=G.Card,te=G.Button,H.next=41,Promise.resolve().then(e.bind(e,49320));case 41:return ce=H.sent,me=ce.UploadOutlined,q=r({validateFirst:!0}),pe=function(le){return a.createElement(U,x()(x()({},le),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(te,{icon:a.createElement(me,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},J=u({components:{FormItem:d,FormGrid:O,FormLayout:f,Input:o,DatePicker:N,Cascader:h,Select:i,Password:S,IDUpload:pe,Space:T,ArrayItems:R,Editable:z},scope:{fetchAddress:function(le){var K=function Z(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(D).reduce(function(k,X){var ee=j()(X,2),re=ee[0],se=ee[1];if(typeof se=="string")return k.concat({label:se,value:re});var ie=se.name,ve=se.code,ue=se.cities,de=se.districts,fe=Z(ue),ye=Z(de);return k.concat({label:ie,value:ve,children:fe.length?fe:ye.length?ye:void 0})},[])};le.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(Z){return Z.json()}).then(w.bound(function(Z){le.dataSource=K(Z),le.loading=!1}))}}}),H.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(ne,{title:"\u65B0\u7528\u6237\u6CE8\u518C",style:{width:620}},a.createElement(m,{form:q,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(J,null,a.createElement(J.String,{name:"username",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"}),a.createElement(J.String,{name:"password",title:"\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]}),a.createElement(J.String,{name:"confirm_password",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]}),a.createElement(J.Void,{title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid"},a.createElement(J.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"},required:!0}),a.createElement(J.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"},required:!0})),a.createElement(J.String,{name:"email",title:"\u90AE\u7BB1",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),a.createElement(J.String,{name:"gender",title:"\u6027\u522B","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),a.createElement(J.String,{name:"birthday",title:"\u751F\u65E5",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),a.createElement(J.String,{name:"address",title:"\u5730\u5740",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),a.createElement(J.String,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),a.createElement(J.Array,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},a.createElement(J.Object,{"x-component":"ArrayItems.Item"},a.createElement(J.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),a.createElement(J.Void,{name:"popover",title:"\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{dependencies:[".popover.name"],fulfill:{schema:{title:"{{$deps[0]}}"}}}]},a.createElement(J.String,{name:"name",required:!0,title:"\u59D3\u540D","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),a.createElement(J.String,{name:"email",title:"\u90AE\u7BB1","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),a.createElement(J.String,{name:"phone",required:!0,title:"\u624B\u673A\u53F7","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),a.createElement(J.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),a.createElement(J.Void,{"x-component":"ArrayItems.Addition",title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))),a.createElement(Q.FormItem,null,a.createElement(L,{block:!0,size:"large"},"\u6CE8\u518C")))))}});case 47:case"end":return H.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    Password,
    IDUpload,
    Space,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u65B0\u7528\u6237\u6CE8\u518C" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField>
            <SchemaField.String
              name="username"
              title="\u7528\u6237\u540D"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="password"
              title="\u5BC6\u7801"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.confirm_password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.String
              name="confirm_password"
              title="\u786E\u8BA4\u5BC6\u7801"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.Void
              title="\u59D3\u540D"
              x-decorator="FormItem"
              x-decorator-props={{
                asterisk: true,
                feedbackLayout: 'none',
              }}
              x-component="FormGrid"
            >
              <SchemaField.String
                name="firstName"
                x-decorator="FormItem"
                x-component="Input"
                x-component-props={{
                  placeholder: '\u59D3',
                }}
                required
              />
              <SchemaField.String
                name="lastName"
                x-decorator="FormItem"
                x-component="Input"
                x-component-props={{
                  placeholder: '\u540D',
                }}
                required
              />
            </SchemaField.Void>
            <SchemaField.String
              name="email"
              title="\u90AE\u7BB1"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="gender"
              title="\u6027\u522B"
              x-decorator="FormItem"
              x-component="Select"
              enum={[
                {
                  label: '\u7537',
                  value: 1,
                },
                {
                  label: '\u5973',
                  value: 2,
                },
                {
                  label: '\u7B2C\u4E09\u6027\u522B',
                  value: 3,
                },
              ]}
              required
            />
            <SchemaField.String
              name="birthday"
              title="\u751F\u65E5"
              required
              x-decorator="FormItem"
              x-component="DatePicker"
            />
            <SchemaField.String
              name="address"
              title="\u5730\u5740"
              required
              x-decorator="FormItem"
              x-component="Cascader"
              x-reactions="{{fetchAddress}}"
            />
            <SchemaField.String
              name="idCard"
              title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
              required
              x-decorator="FormItem"
              x-component="IDUpload"
            />
            <SchemaField.Array
              name="contacts"
              title="\u8054\u7CFB\u4EBA\u4FE1\u606F"
              required
              x-decorator="FormItem"
              x-component="ArrayItems"
            >
              <SchemaField.Object x-component="ArrayItems.Item">
                <SchemaField.Void
                  x-decorator="FormItem"
                  x-component="ArrayItems.SortHandle"
                />
                <SchemaField.Void
                  name="popover"
                  title="\u7EF4\u62A4\u8054\u7CFB\u4EBA\u4FE1\u606F"
                  x-decorator="Editable.Popover"
                  x-component="FormLayout"
                  x-component-props={{
                    layout: 'vertical',
                  }}
                  x-reactions={[
                    {
                      dependencies: ['.popover.name'],
                      fulfill: {
                        schema: {
                          title: '{{$deps[0]}}',
                        },
                      },
                    },
                  ]}
                >
                  <SchemaField.String
                    name="name"
                    required
                    title="\u59D3\u540D"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      style: {
                        width: 300,
                      },
                    }}
                  />
                  <SchemaField.String
                    name="email"
                    title="\u90AE\u7BB1"
                    x-validator={[{ required: true }, 'email']}
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      style: {
                        width: 300,
                      },
                    }}
                  />
                  <SchemaField.String
                    name="phone"
                    required
                    title="\u624B\u673A\u53F7"
                    x-validator="phone"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      style: {
                        width: 300,
                      },
                    }}
                  />
                </SchemaField.Void>
                <SchemaField.Void
                  x-decorator="FormItem"
                  x-component="ArrayItems.Remove"
                />
              </SchemaField.Object>
              <SchemaField.Void
                x-component="ArrayItems.Addition"
                title="\u65B0\u589E\u8054\u7CFB\u4EBA"
              />
            </SchemaField.Array>
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u6CE8\u518C
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,"@next-formily/reactive":l,antd:I,"@ant-design/icons":s},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-4":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J,ae;return P()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=V.sent,a=n.default,V.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=V.sent,r=c.createForm,V.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=V.sent,u=p.createSchemaField,V.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=V.sent,m=F.Form,d=F.FormItem,f=F.FormLayout,o=F.Input,i=F.Select,S=F.Password,h=F.Cascader,N=F.DatePicker,L=F.Submit,T=F.Space,O=F.FormGrid,U=F.Upload,R=F.ArrayItems,z=F.Editable,Q=F.FormButtonGroup,V.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return W=V.sent,w=W.action,V.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return G=V.sent,ne=G.Card,te=G.Button,V.next=41,Promise.resolve().then(e.bind(e,49320));case 41:return ce=V.sent,me=ce.UploadOutlined,q=r({validateFirst:!0}),pe=function(K){return a.createElement(U,x()(x()({},K),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(te,{icon:a.createElement(me,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},J=u({components:{FormItem:d,FormGrid:O,FormLayout:f,Input:o,DatePicker:N,Cascader:h,Select:i,Password:S,IDUpload:pe,Space:T,ArrayItems:R,Editable:z},scope:{fetchAddress:function(K){var Z=function D(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(k).reduce(function(X,ee){var re=j()(ee,2),se=re[0],ie=re[1];if(typeof ie=="string")return X.concat({label:ie,value:se});var ve=ie.name,ue=ie.code,de=ie.cities,fe=ie.districts,ye=D(de),Ie=D(fe);return X.concat({label:ve,value:ue,children:ye.length?ye:Ie.length?Ie:void 0})},[])};K.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(D){return D.json()}).then(w.bound(function(D){K.dataSource=Z(D),K.loading=!1}))}}}),ae={type:"object",properties:{username:{type:"string",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"},password:{type:"string",title:"\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]},confirm_password:{type:"string",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]},name:{type:"void",title:"\u59D3\u540D","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u59D3"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"\u540D"}}}},email:{type:"string",title:"\u90AE\u7BB1",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"\u6027\u522B",enum:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"\u751F\u65E5","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"\u5730\u5740","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{dependencies:[".popover.name"],fulfill:{schema:{title:"{{$deps[0]}}"}}}],properties:{name:{type:"string",title:"\u59D3\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"\u90AE\u7BB1","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"\u624B\u673A\u53F7","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"\u65B0\u589E\u8054\u7CFB\u4EBA","x-component":"ArrayItems.Addition"}}}}},V.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(ne,{title:"\u65B0\u7528\u6237\u6CE8\u518C",style:{width:620}},a.createElement(m,{form:q,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(J,{schema:ae}),a.createElement(Q.FormItem,null,a.createElement(L,{block:!0,size:"large"},"\u6CE8\u518C")))))}});case 48:case"end":return V.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    Password,
    IDUpload,
    Space,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string')
            return buf.concat({
              label: value,
              value: key,
            })
          const { name, code, cities, districts } = value
          const _cities = transform(cities)
          const _districts = transform(districts)
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length
              ? _cities
              : _districts.length
                ? _districts
                : undefined,
          })
        }, [])
      }

      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data)
            field.loading = false
          }),
        )
    },
  },
})

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '\u7528\u6237\u540D',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    password: {
      type: 'string',
      title: '\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
      'x-reactions': [
        {
          dependencies: ['.confirm_password'],
          fulfill: {
            state: {
              selfErrors:
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
            },
          },
        },
      ],
    },
    confirm_password: {
      type: 'string',
      title: '\u786E\u8BA4\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
      'x-reactions': [
        {
          dependencies: ['.password'],
          fulfill: {
            state: {
              selfErrors:
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
            },
          },
        },
      ],
    },
    name: {
      type: 'void',
      title: '\u59D3\u540D',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
      },
      'x-component': 'FormGrid',
      properties: {
        firstName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u59D3',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '\u540D',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: '\u90AE\u7BB1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: '\u6027\u522B',
      enum: [
        {
          label: '\u7537',
          value: 1,
        },
        {
          label: '\u5973',
          value: 2,
        },
        {
          label: '\u7B2C\u4E09\u6027\u522B',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: '\u751F\u65E5',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: '\u5730\u5740',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: '\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: '\u8054\u7CFB\u4EBA\u4FE1\u606F',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayItems',
      items: {
        type: 'object',
        'x-component': 'ArrayItems.Item',
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },
          popover: {
            type: 'void',
            title: '\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F',
            'x-decorator': 'Editable.Popover',
            'x-component': 'FormLayout',
            'x-component-props': {
              layout: 'vertical',
            },
            'x-reactions': [
              {
                dependencies: ['.popover.name'],
                fulfill: {
                  schema: {
                    title: '{{$deps[0]}}',
                  },
                },
              },
            ],
            properties: {
              name: {
                type: 'string',
                title: '\u59D3\u540D',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              email: {
                type: 'string',
                title: '\u90AE\u7BB1',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'email'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
              phone: {
                type: 'string',
                title: '\u624B\u673A\u53F7',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-validator': [{ required: true }, 'phone'],
                'x-component-props': {
                  style: {
                    width: 300,
                  },
                },
              },
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: '\u65B0\u589E\u8054\u7CFB\u4EBA',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u65B0\u7528\u6237\u6CE8\u518C" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u6CE8\u518C
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,"@next-formily/reactive":l,antd:I,"@ant-design/icons":s},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-5":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O,U,R,z,Q,W,w,G,ne,te,ce,me,q,pe,J;return P()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=H.sent,a=n.default,H.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=H.sent,r=c.createForm,H.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=H.sent,u=p.Field,F=p.VoidField,m=p.ArrayField,H.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return d=H.sent,f=d.Form,o=d.FormItem,i=d.Input,S=d.Select,h=d.Password,N=d.Cascader,L=d.DatePicker,T=d.Submit,O=d.FormGrid,U=d.Upload,R=d.FormButtonGroup,z=d.ArrayBase,Q=d.Editable,W=d.FormLayout,H.next=33,Promise.resolve().then(e.bind(e,70869));case 33:return w=H.sent,G=w.action,H.next=37,Promise.resolve().then(e.bind(e,22285));case 37:return ne=H.sent,te=ne.Card,ce=ne.Button,H.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return me=H.sent,q=me.UploadOutlined,pe=r({validateFirst:!0}),J=function(le){return a.createElement(U,x()(x()({},le),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(ce,{icon:a.createElement(q,null)},"\u4E0A\u4F20\u590D\u5370\u4EF6"))},H.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(te,{title:"\u65B0\u7528\u6237\u6CE8\u518C",style:{width:620}},a.createElement(f,{form:pe,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"\u7528\u6237\u540D",required:!0,decorator:[o],component:[i]}),a.createElement(u,{name:"password",title:"\u5BC6\u7801",required:!0,decorator:[o],component:[h,{checkStrength:!0}],reactions:function(K){var Z=K.query(".confirm_password");K.selfErrors=Z.get("value")&&K.value&&K.value!==Z.get("value")?"\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D":""}}),a.createElement(u,{name:"confirm_password",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,decorator:[o],component:[h,{checkStrength:!0}],reactions:function(K){var Z=K.query(".password");K.selfErrors=Z.get("value")&&K.value&&K.value!==Z.get("value")?"\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D":""}}),a.createElement(F,{name:"name",title:"\u59D3\u540D",decorator:[o,{asterisk:!0,feedbackLayout:"none"}],component:[O]},a.createElement(u,{name:"firstName",decorator:[o],component:[i,{placeholder:"\u59D3"}],required:!0}),a.createElement(u,{name:"lastName",decorator:[o],component:[i,{placeholder:"\u540D"}],required:!0})),a.createElement(u,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[o],component:[i]}),a.createElement(u,{name:"gender",title:"\u6027\u522B",decorator:[o],component:[S],dataSource:[{label:"\u7537",value:1},{label:"\u5973",value:2},{label:"\u7B2C\u4E09\u6027\u522B",value:3}],required:!0}),a.createElement(u,{name:"birthday",title:"\u751F\u65E5",required:!0,decorator:[o],component:[L]}),a.createElement(u,{name:"address",title:"\u5730\u5740",required:!0,decorator:[o],component:[N],reactions:function(K){var Z=function D(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(k).reduce(function(X,ee){var re=j()(ee,2),se=re[0],ie=re[1];if(typeof ie=="string")return X.concat({label:ie,value:se});var ve=ie.name,ue=ie.code,de=ie.cities,fe=ie.districts,ye=D(de),Ie=D(fe);return X.concat({label:ve,value:ue,children:ye.length?ye:Ie.length?Ie:void 0})},[])};K.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(D){return D.json()}).then(G.bound(function(D){K.dataSource=Z(D),K.loading=!1}))}}),a.createElement(u,{name:"idCard",title:"\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6",required:!0,decorator:[o],component:[J]}),a.createElement(m,{name:"contacts",title:"\u8054\u7CFB\u4EBA\u4FE1\u606F",decorator:[o]},function(le){var K;return a.createElement(z,null,(K=le.value)===null||K===void 0?void 0:K.map(function(Z,D){return a.createElement("div",{key:D,className:"array-items-item"},a.createElement(u,{name:"".concat(D),title:"\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F",component:[Q.Popover],reactions:function(X){X.title=X.query(".[].name").value()||X.title}},a.createElement(F,{name:"layout",component:[W,{layout:"vertical"}]},a.createElement(u,{name:"name",title:"\u59D3\u540D",required:!0,decorator:[o],component:[i,{style:{width:300}}]}),a.createElement(u,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[o],component:[i,{style:{width:300}}]}),a.createElement(u,{name:"phone",title:"\u624B\u673A\u53F7",required:!0,validator:"phone",decorator:[o],component:[i,{style:{width:300}}]}))),a.createElement(o.BaseItem,null,a.createElement(z.Remove,{index:D}),a.createElement(z.MoveDown,{index:D}),a.createElement(z.MoveUp,{index:D})))}),a.createElement(z.Addition,{title:"\u65B0\u589E\u8054\u7CFB\u4EBA"}))}),a.createElement(R.FormItem,null,a.createElement(T,{block:!0,size:"large"},"\u6CE8\u518C")))))}});case 47:case"end":return H.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field, VoidField, ArrayField } from '@next-formily/react'
import {
  Form,
  FormItem,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  FormButtonGroup,
  ArrayBase,
  Editable,
  FormLayout,
} from '@next-formily/antd'
import { action } from '@next-formily/reactive'
import { Card, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const form = createForm({
  validateFirst: true,
})

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>\u4E0A\u4F20\u590D\u5370\u4EF6</Button>
    </Upload>
  )
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u65B0\u7528\u6237\u6CE8\u518C" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <Field
            name="username"
            title="\u7528\u6237\u540D"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="password"
            title="\u5BC6\u7801"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const confirm = field.query('.confirm_password')
              field.selfErrors =
                confirm.get('value') &&
                field.value &&
                field.value !== confirm.get('value')
                  ? '\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D'
                  : ''
            }}
          />
          <Field
            name="confirm_password"
            title="\u786E\u8BA4\u5BC6\u7801"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const password = field.query('.password')
              field.selfErrors =
                password.get('value') &&
                field.value &&
                field.value !== password.get('value')
                  ? '\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D'
                  : ''
            }}
          />
          <VoidField
            name="name"
            title="\u59D3\u540D"
            decorator={[
              FormItem,
              {
                asterisk: true,
                feedbackLayout: 'none',
              },
            ]}
            component={[FormGrid]}
          >
            <Field
              name="firstName"
              decorator={[FormItem]}
              component={[
                Input,
                {
                  placeholder: '\u59D3',
                },
              ]}
              required
            />
            <Field
              name="lastName"
              decorator={[FormItem]}
              component={[
                Input,
                {
                  placeholder: '\u540D',
                },
              ]}
              required
            />
          </VoidField>
          <Field
            name="email"
            title="\u90AE\u7BB1"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="gender"
            title="\u6027\u522B"
            decorator={[FormItem]}
            component={[Select]}
            dataSource={[
              {
                label: '\u7537',
                value: 1,
              },
              {
                label: '\u5973',
                value: 2,
              },
              {
                label: '\u7B2C\u4E09\u6027\u522B',
                value: 3,
              },
            ]}
            required
          />
          <Field
            name="birthday"
            title="\u751F\u65E5"
            required
            decorator={[FormItem]}
            component={[DatePicker]}
          />
          <Field
            name="address"
            title="\u5730\u5740"
            required
            decorator={[FormItem]}
            component={[Cascader]}
            reactions={(field) => {
              const transform = (data = {}) => {
                return Object.entries(data).reduce((buf, [key, value]) => {
                  if (typeof value === 'string')
                    return buf.concat({
                      label: value,
                      value: key,
                    })
                  const { name, code, cities, districts } = value
                  const _cities = transform(cities)
                  const _districts = transform(districts)
                  return buf.concat({
                    label: name,
                    value: code,
                    children: _cities.length
                      ? _cities
                      : _districts.length
                        ? _districts
                        : undefined,
                  })
                }, [])
              }

              field.loading = true
              fetch('//unpkg.com/china-location/dist/location.json')
                .then((res) => res.json())
                .then(
                  action.bound((data) => {
                    field.dataSource = transform(data)
                    field.loading = false
                  }),
                )
            }}
          />
          <Field
            name="idCard"
            title="\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6"
            required
            decorator={[FormItem]}
            component={[IDUpload]}
          />
          <ArrayField name="contacts" title="\u8054\u7CFB\u4EBA\u4FE1\u606F" decorator={[FormItem]}>
            {(field) => (
              <ArrayBase>
                {field.value?.map((item, index) => (
                  <div key={index} className="array-items-item">
                    <Field
                      name={\`\${index}\`}
                      title="\u5B8C\u5584\u8054\u7CFB\u4EBA\u4FE1\u606F"
                      component={[Editable.Popover]}
                      reactions={(field) => {
                        field.title =
                          field.query('.[].name').value() || field.title
                      }}
                    >
                      <VoidField
                        name="layout"
                        component={[FormLayout, { layout: 'vertical' }]}
                      >
                        <Field
                          name="name"
                          title="\u59D3\u540D"
                          required
                          decorator={[FormItem]}
                          component={[
                            Input,
                            {
                              style: {
                                width: 300,
                              },
                            },
                          ]}
                        />
                        <Field
                          name="email"
                          title="\u90AE\u7BB1"
                          required
                          validator="email"
                          decorator={[FormItem]}
                          component={[
                            Input,
                            {
                              style: {
                                width: 300,
                              },
                            },
                          ]}
                        />
                        <Field
                          name="phone"
                          title="\u624B\u673A\u53F7"
                          required
                          validator="phone"
                          decorator={[FormItem]}
                          component={[
                            Input,
                            {
                              style: {
                                width: 300,
                              },
                            },
                          ]}
                        />
                      </VoidField>
                    </Field>
                    <FormItem.BaseItem>
                      <ArrayBase.Remove index={index} />
                      <ArrayBase.MoveDown index={index} />
                      <ArrayBase.MoveUp index={index} />
                    </FormItem.BaseItem>
                  </div>
                ))}
                <ArrayBase.Addition title="\u65B0\u589E\u8054\u7CFB\u4EBA" />
              </ArrayBase>
            )}
          </ArrayField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u6CE8\u518C
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,"@next-formily/reactive":l,antd:I,"@ant-design/icons":s},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-6":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T;return P()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=U.sent,a=n.default,U.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=U.sent,r=c.createForm,U.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=U.sent,u=p.createSchemaField,U.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=U.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,S=F.FormButtonGroup,U.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return h=U.sent,N=h.Card,L=r({validateFirst:!0}),T=u({components:{FormItem:d,Input:f,Password:o}}),U.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{title:"\u53D8\u66F4\u5BC6\u7801",style:{width:620}},a.createElement(m,{form:L,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(T,null,a.createElement(T.String,{name:"username",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"}),a.createElement(T.String,{name:"email",title:"\u90AE\u7BB1",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),a.createElement(T.String,{name:"old_password",title:"\u539F\u59CB\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password"}),a.createElement(T.String,{name:"password",title:"\u65B0\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]}),a.createElement(T.String,{name:"confirm_password",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]})),a.createElement(S.FormItem,null,a.createElement(i,{block:!0,size:"large"},"\u786E\u8BA4\u53D8\u66F4")))))}});case 28:case"end":return U.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  FormButtonGroup,
} from '@next-formily/antd'
import { Card } from 'antd'

const form = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
  },
})

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u53D8\u66F4\u5BC6\u7801" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField>
            <SchemaField.String
              name="username"
              title="\u7528\u6237\u540D"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="email"
              title="\u90AE\u7BB1"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="old_password"
              title="\u539F\u59CB\u5BC6\u7801"
              required
              x-decorator="FormItem"
              x-component="Password"
            />
            <SchemaField.String
              name="password"
              title="\u65B0\u5BC6\u7801"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.confirm_password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.String
              name="confirm_password"
              title="\u786E\u8BA4\u5BC6\u7801"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
                    },
                  },
                },
              ]}
            />
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u786E\u8BA4\u53D8\u66F4
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-7":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L,T,O;return P()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=R.sent,a=n.default,R.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=R.sent,r=c.createForm,R.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=R.sent,u=p.createSchemaField,R.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=R.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,S=F.FormButtonGroup,R.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return h=R.sent,N=h.Card,L=r({validateFirst:!0}),T=u({components:{FormItem:d,Input:f,Password:o}}),O={type:"object",properties:{username:{type:"string",title:"\u7528\u6237\u540D",required:!0,"x-decorator":"FormItem","x-component":"Input"},email:{type:"string",title:"\u90AE\u7BB1",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"},oldPassword:{type:"string",title:"\u539F\u59CB\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password"},password:{type:"string",title:"\u65B0\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]},confirm_password:{type:"string",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}'}}}]}}},R.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{title:"\u53D8\u66F4\u5BC6\u7801",style:{width:620}},a.createElement(m,{form:L,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(T,{schema:O}),a.createElement(S.FormItem,null,a.createElement(i,{block:!0,size:"large"},"\u786E\u8BA4\u53D8\u66F4")))))}});case 29:case"end":return R.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { createSchemaField } from '@next-formily/react'
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  FormButtonGroup,
} from '@next-formily/antd'
import { Card } from 'antd'

const form = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
  },
})

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '\u7528\u6237\u540D',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    email: {
      type: 'string',
      title: '\u90AE\u7BB1',
      required: true,
      'x-validator': 'email',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    oldPassword: {
      type: 'string',
      title: '\u539F\u59CB\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
    },
    password: {
      type: 'string',
      title: '\u65B0\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
      'x-reactions': [
        {
          dependencies: ['.confirm_password'],
          fulfill: {
            state: {
              selfErrors:
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
            },
          },
        },
      ],
    },
    confirm_password: {
      type: 'string',
      title: '\u786E\u8BA4\u5BC6\u7801',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
      'x-reactions': [
        {
          dependencies: ['.password'],
          fulfill: {
            state: {
              selfErrors:
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D" : ""}}',
            },
          },
        },
      ],
    },
  },
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u53D8\u66F4\u5BC6\u7801" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u786E\u8BA4\u53D8\u66F4
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-zh-cn-8":{component:A.memo(A.lazy($()(P()().mark(function y(){var n,a,c,r,p,u,F,m,d,f,o,i,S,h,N,L;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=O.sent,a=n.default,O.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return c=O.sent,r=c.createForm,O.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=O.sent,u=p.Field,O.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return F=O.sent,m=F.Form,d=F.FormItem,f=F.Input,o=F.Password,i=F.Submit,S=F.FormButtonGroup,O.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return h=O.sent,N=h.Card,L=r({validateFirst:!0}),O.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(N,{title:"\u53D8\u66F4\u5BC6\u7801",style:{width:620}},a.createElement(m,{form:L,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"\u7528\u6237\u540D",required:!0,decorator:[d],component:[f]}),a.createElement(u,{name:"email",title:"\u90AE\u7BB1",required:!0,validator:"email",decorator:[d],component:[f]}),a.createElement(u,{name:"old_password",title:"\u539F\u59CB\u5BC6\u7801",required:!0,decorator:[d],component:[o]}),a.createElement(u,{name:"password",title:"\u65B0\u5BC6\u7801",required:!0,decorator:[d],component:[o,{checkStrength:!0}],reactions:function(z){var Q=z.query(".confirm_password");z.selfErrors=Q.get("value")&&z.value&&z.value!==Q.get("value")?"\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D":""}}),a.createElement(u,{name:"confirm_password",title:"\u786E\u8BA4\u5BC6\u7801",required:!0,decorator:[d],component:[o,{checkStrength:!0}],reactions:function(z){var Q=z.query(".password");z.selfErrors=Q.get("value")&&z.value&&z.value!==Q.get("value")?"\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D":""}}),a.createElement(S.FormItem,null,a.createElement(i,{block:!0,size:"large"},"\u786E\u8BA4\u53D8\u66F4")))))}});case 27:case"end":return O.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  FormButtonGroup,
} from '@next-formily/antd'
import { Card } from 'antd'

const form = createForm({
  validateFirst: true,
})

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card title="\u53D8\u66F4\u5BC6\u7801" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <Field
            name="username"
            title="\u7528\u6237\u540D"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="\u90AE\u7BB1"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="old_password"
            title="\u539F\u59CB\u5BC6\u7801"
            required
            decorator={[FormItem]}
            component={[Password]}
          />
          <Field
            name="password"
            title="\u65B0\u5BC6\u7801"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const confirm = field.query('.confirm_password')
              field.selfErrors =
                confirm.get('value') &&
                field.value &&
                field.value !== confirm.get('value')
                  ? '\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D'
                  : ''
            }}
          />
          <Field
            name="confirm_password"
            title="\u786E\u8BA4\u5BC6\u7801"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const confirm = field.query('.password')
              field.selfErrors =
                confirm.get('value') &&
                field.value &&
                field.value !== confirm.get('value')
                  ? '\u786E\u8BA4\u5BC6\u7801\u4E0D\u5339\u914D'
                  : ''
            }}
          />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              \u786E\u8BA4\u53D8\u66F4
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register.zh-CN",context:{react:g||(g=e.t(A,2)),"@next-formily/core":C,"@next-formily/react":B,"@next-formily/antd":M,antd:I},renderOpts:{compile:function(){var y=$()(P()().mark(function a(){var c,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(c=u.sent).default.apply(c,r));case 3:case"end":return u.stop()}},a)}));function n(){return y.apply(this,arguments)}return n}()}}}},96389:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},60401:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},97713:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},49698:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},3548:function(_,b,e){e.r(b),e.d(b,{demos:function(){return Y}});var g=e(69854),Y={}},28288:function(_,b,e){e.r(b),e.d(b,{demos:function(){return E}});var g=e(90228),Y=e.n(g),j=e(36075),Fe=e.n(j),x=e(87999),oe=e.n(x),P=e(69854),E={"docs-demo-zh-cn-0":{component:P.memo(P.lazy(oe()(Y()().mark(function $(){var A,C,B,M;return Y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=s.sent,C=A.default,s.next=6,e.e(5145).then(e.bind(e,15145));case 6:return B=s.sent,M=B.Section,s.t0=Fe(),s.next=11,e.e(6392).then(e.bind(e,76392));case 11:return s.t1=s.sent,(0,s.t0)(s.t1),s.abrupt("return",{default:function(){return C.createElement(M,{title:"\u50BB\u74DC\u5199\u6CD5\uFF0C\u8D85\u9AD8\u6027\u80FD",style:{marginTop:40},titleStyle:{paddingBottom:100}},C.createElement("iframe",{className:"codesandbox",src:"https://codesandbox.io/embed/formilyyaliceshi-vbu4w?fontsize=12&module=%2FApp.tsx&theme=dark",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}});case 14:case"end":return s.stop()}},$)})))),asset:null,routeId:"docs/index.zh-CN",context:void 0,renderOpts:void 0},"docs-demo-zh-cn-1":{component:P.memo(P.lazy(oe()(Y()().mark(function $(){var A,C,B,M;return Y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=s.sent,C=A.default,s.next=6,e.e(5145).then(e.bind(e,15145));case 6:return B=s.sent,M=B.Section,s.t0=Fe(),s.next=11,e.e(6392).then(e.bind(e,76392));case 11:return s.t1=s.sent,(0,s.t0)(s.t1),s.abrupt("return",{default:function(){return C.createElement(M,{title:"\u62D6\u62FD\u642D\u5EFA\uFF0C\u9AD8\u6548\u5F00\u53D1",style:{marginTop:140},titleStyle:{paddingBottom:140},scale:1.2},C.createElement("a",{href:"//designable-antd.formilyjs.org",target:"_blank",rel:"noreferrer"},C.createElement("img",{src:"//img.alicdn.com/imgextra/i2/O1CN01eI9FLz22tZek2jv7E_!!6000000007178-2-tps-3683-2272.png"})))}});case 14:case"end":return s.stop()}},$)})))),asset:null,routeId:"docs/index.zh-CN",context:void 0,renderOpts:void 0},"docs-demo-zh-cn-2":{component:P.memo(P.lazy(oe()(Y()().mark(function $(){var A,C,B,M;return Y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=s.sent,C=A.default,s.next=6,e.e(5145).then(e.bind(e,15145));case 6:return B=s.sent,M=B.Section,s.t0=Fe(),s.next=11,e.e(6392).then(e.bind(e,76392));case 11:return s.t1=s.sent,(0,s.t0)(s.t1),s.abrupt("return",{default:function(){return C.createElement(M,{title:"\u7EAF\u51C0\u5185\u6838\uFF0C\u66F4\u6613\u6269\u5C55",style:{marginTop:140},titleStyle:{paddingBottom:100}},C.createElement("a",{href:"//core.formilyjs.org",target:"_blank",rel:"noreferrer"},C.createElement("img",{src:"//img.alicdn.com/imgextra/i3/O1CN01iEwHrP1NUw84xTded_!!6000000001574-55-tps-1939-1199.svg"})))}});case 14:case"end":return s.stop()}},$)})))),asset:null,routeId:"docs/index.zh-CN",context:void 0,renderOpts:void 0},"docs-demo-zh-cn-3":{component:P.memo(P.lazy(oe()(Y()().mark(function $(){var A,C,B,M,I,s;return Y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=l.sent,C=A.default,l.next=6,e.e(5145).then(e.bind(e,15145));case 6:return B=l.sent,M=B.Section,l.next=10,e.e(6955).then(e.bind(e,76955));case 10:return I=l.sent,s=I.Contributors,l.t0=Fe(),l.next=15,e.e(6392).then(e.bind(e,76392));case 15:return l.t1=l.sent,(0,l.t0)(l.t1),l.abrupt("return",{default:function(){return C.createElement(M,{title:"\u793E\u533A\u6D3B\u8DC3\uFF0C\u80FD\u8005\u4F17\u591A",style:{marginTop:100},titleStyle:{paddingBottom:140}},C.createElement(s,null))}});case 18:case"end":return l.stop()}},$)})))),asset:null,routeId:"docs/index.zh-CN",context:void 0,renderOpts:void 0},"docs-demo-zh-cn-4":{component:P.memo(P.lazy(oe()(Y()().mark(function $(){var A,C,B,M,I,s,t;return Y()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=v.sent,C=A.default,v.next=6,e.e(5145).then(e.bind(e,15145));case 6:return B=v.sent,M=B.Section,v.next=10,e.e(58).then(e.bind(e,20058));case 10:return I=v.sent,s=I.QrCode,t=I.QrCodeGroup,v.t0=Fe(),v.next=16,e.e(6392).then(e.bind(e,76392));case 16:return v.t1=v.sent,(0,v.t0)(v.t1),v.abrupt("return",{default:function(){return C.createElement(M,{title:"\u5168\u7403\u4E92\u52A9\u5171\u5EFA\u7B54\u7591\u5927\u7FA4",style:{marginTop:140},titleStyle:{paddingBottom:20,fontWeight:"bold"}},C.createElement(t,null,C.createElement(s,{link:"//img.alicdn.com/imgextra/i1/O1CN011zlc5b1uu1BDUpNg1_!!6000000006096-2-tps-978-1380.png"})))}});case 19:case"end":return v.stop()}},$)})))),asset:null,routeId:"docs/index.zh-CN",context:void 0,renderOpts:void 0}}},70269:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u5F02\u6B65\u6570\u636E\u6E90\u7BA1\u7406\uFF0C\u6838\u5FC3\u4F53\u73B0\u5728",paraId:0,tocIndex:0},{value:"Field",paraId:0,tocIndex:0},{value:"\u6A21\u578B\u4E2D\u7684 dataSource \u5C5E\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 effects \u4E2D\u4FEE\u6539 Field \u7684 dataSource\uFF0C\u4E5F\u53EF\u4EE5\u5728 reactions \u4E2D\u4FEE\u6539 dataSource \u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u5982\u679C\u5B57\u6BB5\u7EC4\u4EF6\u5185\u90E8(\u6BD4\u5982 Select)\u6709\u6D88\u8D39 dataSource \u5C5E\u6027\uFF0C\u5F53 dataSource \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5BF9\u5E94\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u91CD\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:`
\u6CE8\u610F\uFF1A\u5982\u679C\u662F\u4E1A\u52A1\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u8BF7\u624B\u52A8\u6620\u5C04dataSource\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 `,paraId:2},{value:"connect",paraId:2},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",paraId:2},{value:"observer",paraId:2},{value:" + ",paraId:2},{value:"useField",paraId:2},{value:"\u5177\u4F53\u6848\u4F8B\u53EF\u4EE5\u53C2\u8003\uFF1A",paraId:3},{value:"Select",paraId:4},{value:"TreeSelect",paraId:4},{value:"Cascader",paraId:4}]},87414:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"babel-plugin-import",paraId:0},{value:`npm install babel-plugin-import --save-dev
`,paraId:1,tocIndex:2},{value:"\u6216\u8005",paraId:2,tocIndex:2},{value:`yarn add babel-plugin-import --dev
`,paraId:3,tocIndex:2},{value:"\u4FEE\u6539 ",paraId:4,tocIndex:3},{value:".umirc.js",paraId:4,tocIndex:3},{value:"\u6216 ",paraId:4,tocIndex:3},{value:".umirc.ts",paraId:4,tocIndex:3},{value:`export default {
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@next-formily/antd',
        libraryDirectory: 'esm',
        style: true,
      },
      '@next-formily/antd',
    ],
  ],
}
`,paraId:5,tocIndex:3},{value:"\u9996\u5148\u6211\u4EEC\u9700\u8981\u5BF9",paraId:6,tocIndex:4},{value:"create-react-app",paraId:6,tocIndex:4},{value:"\u7684\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 ",paraId:6,tocIndex:4},{value:"react-app-rewired",paraId:6,tocIndex:4},{value:" \uFF08\u4E00\u4E2A\u5BF9 ",paraId:6,tocIndex:4},{value:"create-react-app",paraId:6,tocIndex:4},{value:` \u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u793E\u533A\u89E3\u51B3\u65B9\u6848\uFF09\u3002
\u5F15\u5165 `,paraId:6,tocIndex:4},{value:"react-app-rewired",paraId:6,tocIndex:4},{value:" \u5E76\u4FEE\u6539 ",paraId:6,tocIndex:4},{value:"package.json",paraId:6,tocIndex:4},{value:" \u91CC\u7684\u542F\u52A8\u914D\u7F6E\u3002\u7531\u4E8E\u65B0\u7684 ",paraId:6,tocIndex:4},{value:"react-app-rewired@2.x",paraId:6,tocIndex:4},{value:" \u7248\u672C\u7684\u5173\u7CFB\uFF0C\u4F60\u8FD8\u9700\u8981\u5B89\u88C5 ",paraId:6,tocIndex:4},{value:"customize-cra",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:`$ npm install react-app-rewired customize-cra  --save-dev
`,paraId:7,tocIndex:4},{value:"\u6216\u8005",paraId:8,tocIndex:4},{value:`$ yarn add react-app-rewired customize-cra --dev
`,paraId:9,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:10,tocIndex:4},{value:"package.json",paraId:10,tocIndex:4},{value:`"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
`,paraId:11,tocIndex:4},{value:"\u7136\u540E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A ",paraId:12,tocIndex:4},{value:"config-overrides.js",paraId:12,tocIndex:4},{value:" \u7528\u4E8E\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u3002",paraId:12,tocIndex:4},{value:`module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config
}
`,paraId:13,tocIndex:4},{value:`npm install babel-plugin-import --save-dev
`,paraId:14,tocIndex:5},{value:"\u6216\u8005",paraId:15,tocIndex:5},{value:`yarn add babel-plugin-import --dev
`,paraId:16,tocIndex:5},{value:"\u4FEE\u6539",paraId:17,tocIndex:5},{value:"config-overrides.js",paraId:17,tocIndex:5},{value:`+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('antd', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: true
+   }),
+   fixBabelImports('@next-formily/antd', {
+     libraryName: '@next-formily/antd',
+     libraryDirectory: 'esm',
+     style: true
+   }),
+ );
`,paraId:18,tocIndex:5},{value:`npm install babel-plugin-import --save-dev
`,paraId:19,tocIndex:7},{value:"\u6216\u8005",paraId:20,tocIndex:7},{value:`yarn add babel-plugin-import --dev
`,paraId:21,tocIndex:7},{value:"\u4FEE\u6539 ",paraId:22,tocIndex:7},{value:".babelrc",paraId:22,tocIndex:7},{value:" \u6216\u8005 babel-loader",paraId:22,tocIndex:7},{value:`{
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      },
      "antd"
    ],
    [
      "import",
      {
        "libraryName": "@next-formily/antd",
        "libraryDirectory": "esm",
        "style": true
      },
      "@next-formily/antd"
    ]
  ]
}
`,paraId:23,tocIndex:7},{value:"\u66F4\u591A\u914D\u7F6E\u8BF7\u53C2\u8003 ",paraId:24,tocIndex:7},{value:"babel-plugin-import",paraId:24,tocIndex:7}]},93473:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u5728\u524D\u9762\u7684\u6587\u6863\u4E2D\uFF0C\u6211\u4EEC\u5176\u5B9E\u53EF\u4EE5\u53D1\u73B0 Formily \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5C40\u90E8\u63CF\u8FF0\u903B\u8F91\u7684\u80FD\u529B\uFF0C\u4E5F\u5C31\u662F\u5B57\u6BB5\u7EC4\u4EF6\u7684 x-reactions/reactions \u5C5E\u6027\uFF0C\u800C\u4E14\u5728 Schema \u4E2D\uFF0Cx-reactions \u65E2\u80FD\u4F20\u51FD\u6570\uFF0C\u4E5F\u80FD\u4F20\u4E00\u4E2A\u7ED3\u6784\u5316\u5BF9\u8C61\uFF0C\u5F53\u7136\uFF0C\u8FD8\u6709 Formily1.x \u7EE7\u627F\u4E0B\u6765\u7684 effects\uFF0C\u90A3\u4E48\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5728 Formily2.x \u4E2D\u63CF\u8FF0\u903B\u8F91\u7684\u65B9\u5F0F\u6709\uFF1A",paraId:0,tocIndex:0},{value:"\u7EAF JSX \u6A21\u5F0F\u4E0B\u7684 effects \u6216 reactions \u5C5E\u6027",paraId:1,tocIndex:0},{value:"Schema \u6A21\u5F0F\u4E0B\u7684 effects \u6216\u7ED3\u6784\u5316 x-reactions \u5C5E\u6027",paraId:1,tocIndex:0},{value:"Schema \u6A21\u5F0F\u4E0B\u7684 effects \u6216\u51FD\u6570\u6001 x-reactions \u5C5E\u6027",paraId:1,tocIndex:0},{value:"\u8FD9\u4E48\u591A\u63CF\u8FF0\u903B\u8F91\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u9009\u62E9\uFF1F\u4EC0\u4E48\u573A\u666F\u4E0B\u662F\u6700\u4F73\u5B9E\u8DF5\u5462\uFF1F\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u7406\u89E3\u6E05\u695A effects \u548C reactions \u7684\u5B9A\u4F4D\u3002",paraId:2,tocIndex:0},{value:"\u9996\u5148\uFF0Creactions \u662F\u7528\u5728\u5177\u4F53\u5B57\u6BB5\u5C5E\u6027\u4E0A\u7684\u54CD\u5E94\u5668\uFF0C\u5B83\u4F1A\u57FA\u4E8E\u51FD\u6570\u5185\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u800C\u91CD\u590D\u6267\u884C\uFF0C\u5B83\u6700\u5927\u7684\u4F18\u70B9\u5C31\u662F\u7B80\u5355\u76F4\u63A5\uFF0C\u5BB9\u6613\u7406\u89E3\uFF0C\u6BD4\u5982\uFF1A",paraId:3,tocIndex:0},{value:`/* eslint-disable */
<Field
  name="A"
  reactions={(field) => {
    /**\u5177\u4F53\u903B\u8F91\u5B9E\u73B0**/
  }}
/>
`,paraId:4,tocIndex:0},{value:"\u7136\u540E\uFF0Ceffects \u662F\u7528\u4E8E\u5B9E\u73B0\u526F\u4F5C\u7528\u9694\u79BB\u903B\u8F91\u7BA1\u7406\u6A21\u578B\uFF0C\u5B83\u6700\u5927\u7684\u4F18\u70B9\u5C31\u662F\u5728\u5B57\u6BB5\u6570\u91CF\u8D85\u591A\u7684\u573A\u666F\u4E0B\uFF0C\u53EF\u4EE5\u8BA9\u89C6\u56FE\u4EE3\u7801\u53D8\u5F97\u66F4\u6613\u7EF4\u62A4\uFF0C\u540C\u65F6\u5B83\u8FD8\u6709\u4E00\u4E2A\u80FD\u529B\uFF0C\u5C31\u662F\u53EF\u4EE5\u6279\u91CF\u5316\u7684\u5BF9\u5B57\u6BB5\u505A\u5904\u7406\u3002\u6BD4\u5982\u6211\u4EEC\u5728 A,B,C \u5B57\u6BB5\u5C5E\u6027\u663E\u793A\u58F0\u660E x-reactions\uFF0C\u5982\u679C\u8FD9 3 \u4E2A\u5B57\u6BB5\u7684 x-reactions \u903B\u8F91\u90FD\u662F\u4E00\u6A21\u4E00\u6837\u7684\uFF0C\u90A3\u6211\u4EEC\u5728 effects \u4E2D\u53EA\u9700\u8FD9\u4E48\u5199\u5373\u53EF\uFF1A",paraId:5,tocIndex:0},{value:`onFieldReact('*(A,B,C)', (field) => {
  //...\u903B\u8F91
})
`,paraId:6,tocIndex:0},{value:"\u4F7F\u7528 effects \u8FD8\u6709\u4E00\u4E2A\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u7CFB\u5217\u7684\u53EF\u590D\u7528\u903B\u8F91\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u505A\u5230\u5F88\u65B9\u4FBF\u7684\u903B\u8F91\u53EF\u62D4\u63D2\uFF0C\u540C\u65F6\u8FD8\u80FD\u505A\u4E00\u4E9B\u5168\u5C40\u76D1\u63A7\u4E4B\u7C7B\u7684\u4E8B\u60C5\u3002",paraId:7,tocIndex:0},{value:"\u8FD9\u6837\u770B\u6765\uFF0C\u662F\u4E0D\u662F\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u5C40\u90E8\u5B9A\u4E49\u903B\u8F91\u4E86\uFF1F",paraId:8,tocIndex:0},{value:"\u5E76\u4E0D\u662F\uFF0C\u4E0A\u9762\u7684\u5199\u6CD5\u7684\u524D\u63D0\u662F\u5BF9\u4E8E\u5B57\u6BB5\u6570\u91CF\u5F88\u591A\uFF0C\u5982\u679C\u89C6\u56FE\u5C42\u6EE1\u5C4F\u7684 reactions\uFF0C\u770B\u7740\u662F\u5F88\u96BE\u53D7\u7684\uFF0C\u6240\u4EE5\u8003\u8651\u5C06\u903B\u8F91\u62BD\u79BB\u7EDF\u4E00\u7EF4\u62A4\u5219\u662F\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u7B56\u7565\u3002\u76F8\u53CD\uFF0C\u5982\u679C\u5B57\u6BB5\u6570\u91CF\u5F88\u5C11\uFF0C\u903B\u8F91\u76F8\u5BF9\u7B80\u5355\u7684\uFF0C\u76F4\u63A5\u5728\u5B57\u6BB5\u5C5E\u6027\u4E0A\u5199 reactions \u4E5F\u662F\u4E0D\u9519\u7684\uFF0C\u6E05\u6670\u660E\u4E86\u3002",paraId:9,tocIndex:0},{value:"\u540C\u65F6\uFF0C\u56E0\u4E3A JSON Schema \u662F\u53EF\u4EE5\u7ED9\u914D\u7F6E\u5316\u7CFB\u7EDF\u6D88\u8D39\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u914D\u7F6E\u754C\u9762\u4E0A\u5BF9\u5177\u4F53\u67D0\u4E2A\u5B57\u6BB5\u505A\u903B\u8F91\u914D\u7F6E\u3002\u6240\u4EE5\u6211\u4EEC\u8FD8\u662F\u9700\u8981\u652F\u6301\u5C40\u90E8\u5B9A\u4E49\u903B\u8F91\u80FD\u529B\uFF0C\u540C\u65F6\u8FD8\u9700\u8981\u652F\u6301\u7ED3\u6784\u5316\u63CF\u8FF0\u903B\u8F91\uFF0C\u6BD4\u5982\uFF1A",paraId:10,tocIndex:0},{value:`{
  "x-reactions": {
    "dependencies": ["aa"],
    "fulfill": {
      "state": {
        "visible": "{{$deps[0] == '123'}}"
      }
    }
  }
}
`,paraId:11,tocIndex:0},{value:"\u8FD9\u6837\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u51B3\u5927\u90E8\u5206\u914D\u7F6E\u573A\u666F\u7684\u8054\u52A8\u9700\u6C42\u4E86\uFF0C\u4F46\u662F\uFF0C\u8FD8\u6709\u4E00\u79CD\u573A\u666F\uFF0C\u5C31\u662F\u6211\u4EEC\u7684\u8054\u52A8\u8FC7\u7A0B\u662F\u5B58\u5728\u5F02\u6B65\u7684\uFF0C\u903B\u8F91\u975E\u5E38\u590D\u6742\u7684\uFF0C\u6216\u8005\u5B58\u5728\u5927\u91CF\u6570\u636E\u5904\u7406\u7684\uFF0C\u90A3\u6211\u4EEC\u5C31\u53EA\u80FD\u8003\u8651\u5F00\u653E\u51FD\u6570\u6001\u63CF\u8FF0\u7684\u80FD\u529B\u4E86\uFF0C\u6BD4\u5982\uFF1A",paraId:12,tocIndex:0},{value:`{
  "x-reactions": "{{(field)=>{/**\u5177\u4F53\u903B\u8F91\u5B9E\u73B0**/}}}"
}
`,paraId:13,tocIndex:0},{value:"\u8FD9\u79CD\u5C31\u5F88\u50CF\u662F\u4F4E\u4EE3\u7801\u914D\u7F6E\u4E86\uFF0C\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u4E0A\u4E0B\u6587\u4F5C\u7528\u57DF\u4E2D\u6CE8\u518C\u4E00\u7CFB\u5217\u7684\u901A\u7528\u903B\u8F91\u51FD\u6570\uFF1A",paraId:14,tocIndex:0},{value:`{
  "x-reactions": "{{customFunction}}"
}
`,paraId:15,tocIndex:0},{value:"\u6700\u7EC8\u603B\u7ED3\u4E0B\u6765\uFF0C\u6211\u4EEC\u7BA1\u7406\u4E1A\u52A1\u903B\u8F91\u7684\u65B9\u5F0F\uFF0C\u6709\u4EE5\u4E0B\u4F18\u5148\u7EA7\uFF1A",paraId:16,tocIndex:0},{value:`\u7EAF\u6E90\u7801\u6A21\u5F0F
`,paraId:17,tocIndex:0},{value:"\u5B57\u6BB5\u6570\u91CF\u5E9E\u5927\uFF0C\u903B\u8F91\u590D\u6742\uFF0C\u4F18\u5148\u9009\u62E9 effects \u4E2D\u5B9A\u4E49\u903B\u8F91",paraId:18,tocIndex:0},{value:"\u5B57\u6BB5\u6570\u91CF\u5C11\uFF0C\u903B\u8F91\u7B80\u5355\uFF0C\u4F18\u5148\u9009\u62E9 reactions \u4E2D\u5B9A\u4E49\u903B\u8F91",paraId:18,tocIndex:0},{value:`Schema \u6A21\u5F0F
`,paraId:17,tocIndex:0},{value:"\u4E0D\u5B58\u5728\u5F02\u6B65\u903B\u8F91\uFF0C\u4F18\u5148\u9009\u62E9\u7ED3\u6784\u5316 reactions \u5B9A\u4E49\u903B\u8F91",paraId:19,tocIndex:0},{value:"\u5B58\u5728\u5F02\u6B65\u903B\u8F91\uFF0C\u6216\u8005\u5927\u91CF\u8BA1\u7B97\uFF0C\u4F18\u5148\u9009\u62E9\u51FD\u6570\u6001 reactions \u5B9A\u4E49\u903B\u8F91",paraId:19,tocIndex:0},{value:"\u5BF9\u4E8E effects \u4E2D\u5982\u4F55\u73A9\u51FA\u82B1\u6765\uFF0C\u6211\u4EEC\u4E3B\u8981\u770B",paraId:20,tocIndex:0},{value:"@next-formily/core",paraId:20,tocIndex:0},{value:"\u6587\u6863\u5373\u53EF",paraId:20,tocIndex:0}]},22600:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u8054\u52A8\u8BA1\u7B97\u5668\uFF0C\u4E3B\u8981\u7528\u4E8E\u5728\u586B\u5199\u8868\u5355\u7684\u8FC7\u7A0B\u4E2D\u505A\u6C42\u503C\u6C47\u603B\uFF0C\u5728 Formily1.x \u4E2D\u5B9E\u73B0\u8FD9\u7C7B\u9700\u6C42\u7684\u6210\u672C\u975E\u5E38\u975E\u5E38\u9AD8\uFF0C\u5728 2.x \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 reactions \u8F7B\u677E\u5B9E\u73B0",paraId:0,tocIndex:0}]},4962:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Formily2.x \u5DF2\u7ECF\u653E\u5F03\u4E86\u7ED9\u8868\u5355\u7EC4\u4EF6\u548C\u5B57\u6BB5\u7EC4\u4EF6\u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u56E0\u4E3A\u8868\u5355\u5185\u90E8\u7BA1\u7406\u72B6\u6001\u6A21\u5F0F\u672C\u8EAB\u5C31\u4E0D\u662F\u53D7\u63A7\u6A21\u5F0F\uFF0C\u5728\u5C06\u53D7\u63A7\u6A21\u5F0F\u8F6C\u4E3A\u975E\u53D7\u63A7\u6A21\u5F0F\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u5F88\u591A\u8FB9\u754C\u95EE\u9898\uFF0C\u540C\u65F6\u53D7\u63A7\u6A21\u5F0F\u4F1A\u5B58\u5728\u5927\u91CF\u7684\u810F\u68C0\u67E5\u8FC7\u7A0B\uFF0C\u6027\u80FD\u5F88\u4E0D\u597D\uFF0C\u53CD\u800C\u975E\u53D7\u63A7\u6A21\u5F0F\u672C\u8EAB\u5C31\u53EF\u4EE5\u89E3\u51B3\u5927\u90E8\u5206\u95EE\u9898\u4E86\u3002",paraId:0,tocIndex:0},{value:"\u6240\u4EE5 Formily \u5C31\u4E0D\u518D\u652F\u6301\u53D7\u63A7\u6A21\u5F0F\u4E86\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u786C\u8981\u5B9E\u73B0\u666E\u901A React \u53D7\u63A7\uFF0C\u8FD8\u662F\u53EF\u4EE5\u652F\u6301\u7684\uFF0C\u53EA\u4E0D\u8FC7\u53EA\u80FD\u5B9E\u73B0\u503C\u53D7\u63A7\uFF0C\u4E0D\u80FD\u5B9E\u73B0\u5B57\u6BB5\u7EA7\u53D7\u63A7\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u4F7F\u7528\u7684 Field \u7EC4\u4EF6\uFF0C\u5C5E\u6027\u53EA\u4F1A\u5728\u521D\u6B21\u6E32\u67D3\u65F6\u751F\u6548\uFF0C\u672A\u6765\u5C5E\u6027\u53D1\u751F\u4EFB\u4F55\u53D8\u5316\u90FD\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u60F3\u8981\u81EA\u52A8\u66F4\u65B0\uFF0C\u9664\u975E\u91CD\u65B0\u521B\u5EFA Form \u5B9E\u4F8B(\u663E\u7136\u8FD9\u6837\u4F1A\u4E22\u5931\u6240\u6709\u4E4B\u524D\u7EF4\u62A4\u597D\u7684\u72B6\u6001)\u3002",paraId:1,tocIndex:0},{value:"\u6240\u4EE5\uFF0C\u6211\u4EEC\u66F4\u52A0\u63A8\u8350\u7684\u662F\u4F7F\u7528",paraId:2,tocIndex:0},{value:"@next-formily/reactive",paraId:2,tocIndex:0},{value:" \u5B9E\u73B0\u54CD\u5E94\u5F0F\u53D7\u63A7\uFF0C\u65E2\u80FD\u5B9E\u73B0\u503C\u53D7\u63A7\uFF0C\u4E5F\u80FD\u5B9E\u73B0\u5B57\u6BB5\u7EA7\u53D7\u63A7",paraId:2,tocIndex:0},{value:"\u666E\u901A\u53D7\u63A7\u6A21\u5F0F\uFF0C\u4F1A\u5F3A\u4F9D\u8D56\u810F\u68C0\u67E5\u5B9E\u73B0\u6570\u636E\u540C\u6B65\uFF0C\u540C\u65F6\u7EC4\u4EF6\u6E32\u67D3\u6B21\u6570\u4F1A\u975E\u5E38\u9AD8",paraId:3,tocIndex:1},{value:"\u54CD\u5E94\u5F0F\u53D7\u63A7\u4E3B\u8981\u662F\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@next-formily/reactive",paraId:4,tocIndex:2},{value:"\u5B9E\u73B0\u54CD\u5E94\u5F0F\u66F4\u65B0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\uFF0C\u540C\u65F6\u6027\u80FD\u5B8C\u7206\u666E\u901A\u53D7\u63A7\u66F4\u65B0",paraId:4,tocIndex:2},{value:"\u5BF9\u4E8E\u8868\u5355\u914D\u7F6E\u5316\u573A\u666F\u4F1A\u6709\u4E00\u4E2A\u9700\u6C42\uFF0C\u8868\u5355\u7684 Schema \u4F1A\u53D1\u751F\u9891\u7E41\u6539\u53D8\uFF0C\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E\u9891\u7E41\u521B\u5EFA\u65B0\u8868\u5355\u4E86\uFF0C\u4E4B\u524D\u64CD\u4F5C\u7684\u72B6\u6001\u5C31\u5E94\u8BE5\u4E22\u5F03\u4E86",paraId:5,tocIndex:3},{value:"\u7247\u6BB5\u8054\u52A8\u6700\u91CD\u8981\u7684\u662F\u9700\u8981\u624B\u52A8\u6E05\u7406\u5B57\u6BB5\u6A21\u578B\uFF0C\u5426\u5219\u65E0\u6CD5\u505A\u5230 UI \u540C\u6B65",paraId:6,tocIndex:4},{value:"\u63A8\u8350\u4F7F\u7528",paraId:7,tocIndex:7},{value:"@next-formily/reactive",paraId:7,tocIndex:7},{value:" \u5B9E\u73B0\u54CD\u5E94\u5F0F\u53D7\u63A7",paraId:7,tocIndex:7},{value:"\u4F7F\u7528\u4F20\u7EDF\u53D7\u63A7\u6A21\u5F0F\u662F\u65E0\u6CD5\u81EA\u52A8\u66F4\u65B0\u7684",paraId:8,tocIndex:8}]},45820:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u5B9E\u73B0\u4E1A\u52A1\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E3B\u8981\u662F\u4F7F\u7528",paraId:0,tocIndex:0},{value:"@next-formily/react",paraId:0,tocIndex:0},{value:" \u6216",paraId:0,tocIndex:0},{value:"@next-formily/vue",paraId:0,tocIndex:0},{value:"\u4E2D\u7684 Hooks API \u4E0E observer API",paraId:0,tocIndex:0},{value:"\u63A5\u5165\u73B0\u6210\u7EC4\u4EF6\u5E93\u7684\u8BDD\uFF0C\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528 connect/mapProps/mapReadPretty API",paraId:1,tocIndex:0},{value:"\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u4E00\u4E9B\u66F4\u590D\u6742\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5F3A\u70C8\u63A8\u8350\u76F4\u63A5\u770B",paraId:2,tocIndex:0},{value:"@next-formily/antd",paraId:2,tocIndex:0},{value:"\u6216 ",paraId:2,tocIndex:0},{value:"@next-formily/next",paraId:2,tocIndex:0},{value:"\u7684\u6E90\u7801",paraId:2,tocIndex:0}]},58400:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u603B\u4F1A\u9047\u5230\u524D\u7AEF\u6570\u636E\u7ED3\u6784\u4E0E\u540E\u7AEF\u6570\u636E\u7ED3\u6784\u4E0D\u5339\u914D\u7684\u573A\u666F\uFF0C\u770B\u4F3C\u5F88\u7B80\u5355\u7684\u95EE\u9898\uFF0C\u5176\u5B9E\u89E3\u51B3\u8D77\u6765\u975E\u5E38\u7684\u8BA9\u4EBA\u96BE\u53D7\uFF0C\u6700\u5E38\u89C1\u7684\u95EE\u9898\u5C31\u662F\uFF1A",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u65E5\u671F\u8303\u56F4\u7EC4\u4EF6\u8F93\u51FA\u7684\u662F\u6570\u7EC4\u7ED3\u6784\uFF0C\u4F46\u662F\u540E\u7AEF\u8981\u6C42\u7684\u683C\u5F0F\u662F\u62C6\u5206\u6241\u5E73\u6570\u636E\u7ED3\u6784\uFF0C\u8FD9\u79CD\u95EE\u9898\u5F88\u5927\u7A0B\u5EA6\u662F\u53D7\u540E\u7AEF\u9886\u57DF\u6A21\u578B\u6240\u9650\u5236\uFF0C\u56E0\u4E3A\u4ECE\u540E\u7AEF\u6A21\u578B\u8BBE\u8BA1\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u62C6\u5206\u6241\u5E73\u7ED3\u6784\u662F\u6700\u4F73\u65B9\u6848\uFF1B",paraId:1,tocIndex:0},{value:"\u4F46\u4ECE\u524D\u7AEF\u7EC4\u4EF6\u5316\u89D2\u5EA6\u6765\u770B\uFF0C\u6570\u7EC4\u7ED3\u6784\u53C8\u662F\u6700\u4F73\u7684\uFF1B",paraId:2,tocIndex:0},{value:"\u6240\u4EE5\u54EA\u4E00\u8FB9\u90FD\u6709\u5176\u9053\u7406\uFF0C\u53EF\u60DC\u7684\u662F\uFF0C\u6BCF\u6B21\u90FD\u53EA\u80FD\u524D\u7AEF\u53BB\u6D88\u5316\u8FD9\u6837\u4E00\u4E2A\u4E0D\u5E73\u7B49\u6761\u7EA6\uFF0C\u4E0D\u8FC7\uFF0C\u6709\u4E86 Formily\uFF0C\u4F60\u5C31\u5B8C\u5168\u4E0D\u9700\u8981\u4E3A\u8FD9\u6837\u4E00\u4E2A\u5C34\u5C2C\u5C40\u9762\u800C\u96BE\u53D7\u4E86\uFF0C",paraId:3,tocIndex:0},{value:"Formily \u63D0\u4F9B\u4E86\u89E3\u6784\u8DEF\u5F84\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\u3002",paraId:3,tocIndex:0},{value:"\uFF0C\u4E0B\u9762\u53EF\u4EE5\u770B\u770B\u4F8B\u5B50",paraId:3,tocIndex:0}]},44580:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u8868\u5355\u5E03\u5C40\u4E3B\u8981\u662F\u4F7F\u7528",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" \u6216 ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0},{value:" \u4E2D\u7684\uFF1A",paraId:0,tocIndex:0},{value:"FormLayout",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"FormItem",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"FormGrid",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"Space",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u8FD9 4 \u4E2A\u7EC4\u4EF6\u57FA\u672C\u4E0A\u80FD\u89E3\u51B3\u6240\u6709\u590D\u6742\u8868\u5355\u5E03\u5C40\u573A\u666F\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7075\u6D3B\u7684\u7EC4\u5408\u4F7F\u7528\u8FD9\u51E0\u4E2A\u7EC4\u4EF6\u5373\u53EF\u3002",paraId:2,tocIndex:0}]},41792:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Formily1.x \u4E2D\u5B9E\u73B0\u8054\u52A8\u903B\u8F91\u53EA\u6709\u4E00\u79CD\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u4E3B\u52A8\u6A21\u5F0F\uFF0C\u5FC5\u987B\u8981\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u6BB5\u7684\u4E8B\u4EF6\u53D8\u5316\u53BB\u63A7\u5236\u53E6\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5B57\u6BB5\u7684\u72B6\u6001\uFF0C\u8FD9\u6837\u5BF9\u4E8E\u4E00\u5BF9\u591A\u8054\u52A8\u573A\u666F\u5F88\u65B9\u4FBF\uFF0C\u4F46\u662F\u5BF9\u4E8E\u591A\u5BF9\u4E00\u573A\u666F\u5C31\u5F88\u9EBB\u70E6\u4E86\uFF0C\u9700\u8981\u76D1\u542C\u591A\u4E2A\u5B57\u6BB5\u7684\u53D8\u5316\u53BB\u63A7\u5236\u4E00\u4E2A\u5B57\u6BB5\u72B6\u6001\uFF0C\u6240\u4EE5 Formily2.x \u63D0\u4F9B\u4E86\u54CD\u5E94\u5F0F\u673A\u5236\uFF0C\u53EF\u4EE5\u8BA9\u8054\u52A8\u652F\u6301\u88AB\u52A8\u5F0F\u8054\u52A8\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u67D0\u4E2A\u5B57\u6BB5\u6240\u4F9D\u8D56\u7684\u5B57\u6BB5\u5373\u53EF\uFF0C\u4F9D\u8D56\u5B57\u6BB5\u53D8\u5316\u4E86\uFF0C\u88AB\u4F9D\u8D56\u7684\u5B57\u6BB5\u5373\u53EF\u81EA\u52A8\u8054\u52A8\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u52A8\u8054\u52A8\u6838\u5FC3\u662F\u57FA\u4E8E",paraId:1,tocIndex:1},{value:"FormEffectHooks",paraId:2,tocIndex:1},{value:"FieldEffectHooks",paraId:2,tocIndex:1},{value:"setFormState",paraId:2,tocIndex:1},{value:"setFieldState",paraId:2,tocIndex:1},{value:"SchemaReactions",paraId:2,tocIndex:1},{value:"\u5B9E\u73B0\u4E3B\u52A8\u8054\u52A8\uFF0C\u4F18\u70B9\u662F\u5B9E\u73B0\u4E00\u5BF9\u591A\u8054\u52A8\u65F6\u975E\u5E38\u65B9\u4FBF",paraId:3,tocIndex:1},{value:"\u88AB\u52A8\u6A21\u5F0F\u7684\u6838\u5FC3\u662F\u57FA\u4E8E",paraId:4,tocIndex:23},{value:"onFieldReact",paraId:5,tocIndex:23},{value:"\u5B9E\u73B0\u5168\u5C40\u54CD\u5E94\u5F0F\u903B\u8F91",paraId:5,tocIndex:23},{value:"FieldReaction",paraId:5,tocIndex:23},{value:"\u5B9E\u73B0\u5C40\u90E8\u54CD\u5E94\u5F0F\u903B\u8F91",paraId:5,tocIndex:23},{value:"SchemaReactions",paraId:5,tocIndex:23},{value:"\u5B9E\u73B0 Schema \u534F\u8BAE\u4E2D\u7684\u7ED3\u6784\u5316\u903B\u8F91\u63CF\u8FF0(\u5185\u90E8\u662F\u57FA\u4E8E FieldReaction \u6765\u5B9E\u73B0\u7684)",paraId:5,tocIndex:23}]},71152:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Formily \u7684\u8868\u5355\u6821\u9A8C\u4F7F\u7528\u4E86\u6781\u5176\u5F3A\u5927\u4E14\u7075\u6D3B\u7684@next-formily/validator \u6821\u9A8C\u5F15\u64CE\uFF0C\u6821\u9A8C\u4E3B\u8981\u5206\u4E24\u79CD\u573A\u666F\uFF1A",paraId:0,tocIndex:0},{value:"Markup(JSON) Schema \u573A\u666F\u534F\u8BAE\u6821\u9A8C\u5C5E\u6027\u6821\u9A8C\uFF0C\u4F7F\u7528 JSON Schema \u672C\u8EAB\u7684\u6821\u9A8C\u5C5E\u6027\u4E0E x-validator \u5C5E\u6027\u5B9E\u73B0\u6821\u9A8C",paraId:1,tocIndex:0},{value:"\u7EAF JSX \u573A\u666F\u6821\u9A8C\u5C5E\u6027\uFF0C\u4F7F\u7528 validator \u5C5E\u6027\u5B9E\u73B0\u6821\u9A8C",paraId:1,tocIndex:0},{value:"\u540C\u65F6\u6211\u4EEC\u8FD8\u80FD\u5728 effects \u6216\u8005 x-reactions/reactions \u4E2D\u5B9E\u73B0\u8054\u52A8\u6821\u9A8C",paraId:2,tocIndex:0},{value:"\u5177\u4F53\u89C4\u5219\u6821\u9A8C\u6587\u6863\u53C2\u8003 ",paraId:3,tocIndex:0},{value:"FieldValidator",paraId:3,tocIndex:0},{value:"\u8868\u5355\u6821\u9A8C\u662F\u8868\u5355\u4E2D\u4F18\u5316\u7528\u6237\u4F53\u9A8C\u548C\u4FDD\u8BC1\u6570\u636E\u51C6\u786E\u6027\u7684\u91CD\u8981\u4E00\u73AF\uFF0CFormily \u63D0\u4F9B\u4E86\u591A\u79CD\u6821\u9A8C\u65B9\u5F0F\uFF0C\u5305\u62EC\u5185\u7F6E\u89C4\u5219\u6821\u9A8C\u3001\u5185\u7F6E\u683C\u5F0F\u6821\u9A8C\u3001\u81EA\u5B9A\u4E49\u89C4\u5219\u6821\u9A8C\u7B49\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C06\u9010\u4E00\u4ECB\u7ECD\u8FD9\u4E9B\u6821\u9A8C\u65B9\u5F0F\u3002",paraId:4,tocIndex:0},{value:"\u5185\u7F6E\u89C4\u5219\u6821\u9A8C\u662F\u6307 Formily \u63D0\u4F9B\u7684\u4E00\u4E9B\u5E38\u7528\u6821\u9A8C\u89C4\u5219\uFF0C\u6BD4\u5982\u5FC5\u586B\u3001\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u3001\u957F\u5EA6\u3001\u679A\u4E3E\u3001\u5E38\u91CF\u3001\u6574\u9664\u7B49\uFF0C\u5B9E\u73B0\u4E86\u6700\u7B80\u5355\u548C\u6700\u901A\u7528\u7684\u6821\u9A8C\uFF0C\u8FD9\u4E9B\u89C4\u5219\u53EF\u4EE5\u901A\u8FC7 JSON Schema \u7684\u5C5E\u6027\u63CF\u8FF0\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 x-validator \u5C5E\u6027\u63CF\u8FF0\u3002Formily \u652F\u6301\u591A\u79CD\u5F62\u5F0F\u7684\u5185\u7F6E\u89C4\u5219\u4E66\u5199\u65B9\u5F0F\uFF0C\u5EFA\u8BAE\u56E2\u961F\u5185\u90E8\u6839\u636E\u4F7F\u7528\u4E60\u60EF\u5236\u5B9A\u56E2\u961F\u89C4\u8303\u3002",paraId:5,tocIndex:1},{value:"\u51ED\u501F Formily \u6781\u4E3A\u5F3A\u5927\u7684\u6821\u9A8C\u5F15\u64CE\uFF0C\u80FD\u591F\u6781\u4E3A\u4FBF\u6377\u5730\u9002\u914D\u8BF8\u5982 yup \u7B49\u7B2C\u4E09\u65B9\u6821\u9A8C\u5E93\u3002\u5176\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:6,tocIndex:13},{value:"\u4E3B\u8981\u901A\u8FC7",paraId:7,tocIndex:28},{value:"registerValidateLocale",paraId:7,tocIndex:28},{value:"\u6765\u5B9A\u5236\u5185\u7F6E\u6821\u9A8C\u6587\u6848",paraId:7,tocIndex:28}]},78731:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u6B22\u8FCE\u60A8\u6765\u5230\u6211\u4EEC\u7684\u793E\u533A\uFF01",paraId:0,tocIndex:1},{value:"Formily",paraId:0,tocIndex:1},{value:" \u662F\u963F\u91CC\u5DF4\u5DF4\u552F\u4E00\u5B98\u65B9\u5411\u5916\u516C\u5E03\u7684\u5F00\u6E90\u8868\u5355\u6846\u67B6\uFF0C\u529F\u80FD\u548C\u8D28\u91CF\u90FD\u6709\u4E00\u5B9A\u4FDD\u8BC1\uFF0C\u62E5\u6709\u4F17\u591A\u7684\u793E\u533A\u4F7F\u7528\u8005\uFF0C\u53C2\u4E0E\u8D21\u732E\u53EF\u4EE5\u4F7F ",paraId:0,tocIndex:1},{value:"Formily",paraId:0,tocIndex:1},{value:" \u53D8\u5F97\u5F3A\u5927\uFF0C\u4E5F\u4F1A\u8BA9\u66F4\u591A\u5F00\u53D1\u8005\u80FD\u591F\u4EAB\u53D7\u5230\u66F4\u597D\u7684\u5F00\u53D1\u8868\u5355\u7684\u4F53\u9A8C\uFF0C\u6211\u4EEC\u975E\u5E38\u611F\u8C22\u4EFB\u4F55\u5BF9\u672C\u9879\u76EE\u53D1\u8D77 ",paraId:0,tocIndex:1},{value:"Pull Request",paraId:0,tocIndex:1},{value:" \u7684\u540C\u5B66\u3002",paraId:0,tocIndex:1},{value:"features \u65B0\u589E/\u4FEE\u6539\u529F\u80FD\u7279\u6027",paraId:1,tocIndex:2},{value:"unitest \u65B0\u589E/\u4FEE\u6539\u5355\u6D4B",paraId:1,tocIndex:2},{value:"bugfix \u4FEE\u590D\u73B0\u6709 issue \u7684\u95EE\u9898",paraId:1,tocIndex:2},{value:"doc \u6587\u6863\u6539\u8FDB",paraId:1,tocIndex:2},{value:"other \u5176\u4ED6",paraId:1,tocIndex:2},{value:"\u539F\u59CB\u4ED3\u5E93\uFF1A",paraId:2,tocIndex:4},{value:"https://github.com/alibaba/formily",paraId:2,tocIndex:4},{value:"\u76EE\u6807\u4ED3\u5E93\uFF1Afork \u5230\u81EA\u5DF1\u7684 github \u4E0A ",paraId:2,tocIndex:4},{value:"\u539F\u59CB\u5206\u652F\u662F alibaba/formily master\uFF0C\u62C9\u53D6\u540E\u7684\u5206\u652F\u5E94\u8BE5\u662F quirkyshop/formily master",paraId:3,tocIndex:5},{value:"\u6CE8\u610F\uFF1A\u5EFA\u8BAE\u5206\u652F\u540D\u4E3A[feat]-[name]\uFF0C[feat]\u662F\u8FD9\u4E2A\u5206\u652F\u7684\u7C7B\u578B\uFF0C\u53EF\u9009\u7684\u6709[feat][unitest][docs][bugfix][other]\uFF0C[name]\u5219\u662F\u540D\u5B57\uFF0C\u81EA\u5B9A\u4E49\u5C31\u597D\u4E86\u3002eg. unittest-core(\u610F\u4E3A\uFF1A\u5BF9\u6838\u5FC3\u8865\u5145\u5355\u6D4B)",paraId:4,tocIndex:5},{value:"\u4EE3\u7801\u98CE\u683C\u9075\u5FAA 2 \u7A7A\u683C\uFF0C\u65E0\u5206\u53F7\uFF0C\u975E\u8BF4\u660E\u8BF7\u4E0D\u8981\u5728\u4EE3\u7801\u4E2D\u9644\u5E26\u4EFB\u4F55 console \u76F8\u5173\u7684\u65B9\u6CD5\u53CA debugger\u3002 \u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u5230\u81EA\u5DF1 fork \u51FA\u6765\u7684\u4ED3\u5E93\u63D0\u4EA4 pull request ",paraId:5,tocIndex:6},{value:"\u6CE8\u610F\u8FD9\u91CC\u7684\u5DE6\u8FB9\u76EE\u6807\u4ED3\u5E93(base repository \u662F alibaba/formily master) \uFF0C\u7136\u540E\u53F3\u8FB9\u5F53\u524D\u5206\u652F\u81EA\u5DF1\u4ED3\u5E93\u7684 doc-wiki",paraId:6,tocIndex:6},{value:"\u53C2\u8003\u6587\u6863\uFF1A",paraId:7,tocIndex:7},{value:"https://github.com/alibaba/formily/blob/master/.github/GIT_COMMIT_SPECIFIC.md",paraId:7,tocIndex:7},{value:"PR \u540D\u79F0\uFF1A\u683C\u5F0F\uFF1A",paraId:8,tocIndex:7},{value:"<type>(<scope>): <subject>",paraId:8,tocIndex:7},{value:" \u4E3E\u4F8B\uFF1A",paraId:8,tocIndex:7},{value:"feat(core): add unit test",paraId:8,tocIndex:7},{value:"PR \u5185\u5BB9\uFF1A\u5217\u4E3E\u672C\u6B21\u6539\u52A8\u7684\u5185\u5BB9",paraId:8,tocIndex:7},{value:"PR \u8981\u6C42\uFF1A\u589E\u52A0\u7684 feat \u5185\u5BB9\uFF0C\u5C3D\u91CF\u505A\u5230\u6CE8\u91CA\u6E05\u6670\uFF0C\u76F8\u5E94\u7684\u5355\u6D4B\u8986\u76D6\u8981\u5C3D\u53EF\u80FD\u8986\u76D6",paraId:8,tocIndex:7},{value:"BUGFIX \u8981\u6C42\uFF1A\u5982\u679C\u4FEE\u6539\u7684\u95EE\u9898\u548C issues \u76F8\u5173\uFF0C\u8BF7\u5728\u5185\u5BB9\u4E2D\u9644\u4E0A\u76F8\u5173\u7684 issueID\u3002",paraId:8,tocIndex:7},{value:"\u5BA1\u6838\u9636\u6BB5\u4F1A\u8FDB\u5165\u591A review \u7684\u6D41\u7A0B\uFF0C",paraId:9,tocIndex:8},{value:"@janryWang",paraId:9,tocIndex:8},{value:" \u8D1F\u8D23\u5BA1\u6838\u8FD9\u4E2A\u6539\u52A8\u662F\u5426\u5408\u5E76\uFF0C\u5176\u4ED6\u540C\u5B66\u4E5F\u4F1A\u53C2\u4E0E\u8BA8\u8BBA\uFF0C\u8BA8\u8BBA\u7684\u7ECF\u8FC7\u90FD\u4F1A\u7559\u5B58\u5728 github \u7684 PR \u91CC\uFF0C\u9489\u9489\u7FA4\u4E5F\u4F1A\u6536\u5230\u76F8\u5E94\u7684\u901A\u77E5\u3002",paraId:9,tocIndex:8},{value:"\u5F53\u770B\u5230 Pull requests \u5217\u8868\u4E2D\u7684\u72B6\u6001\u53D8\u4E3A Closed \u5373\u4E3A\u5408\u5E76\u6210\u529F\u3002 ",paraId:10,tocIndex:8},{value:`# \u9996\u5148\u5728\u81EA\u5DF1\u7684\u5206\u652F\u589E\u52A0\u4E00\u4E2A upstream\uFF0C\u5373\u539F\u4ED3\u5E93
$ git remote add upstream https://github.com/alibaba/formily.git
# \u83B7\u53D6\u539F\u4ED3\u5E93\u6700\u65B0\u7684\u53D8\u66F4
$ git fetch upstream
# \u540C\u6B65\u539F\u4ED3\u5E93\u7684\u6539\u52A8\u5230\u672C\u5730\u5206\u652F
$ git pull upstream master [\u5F53\u524D\u672C\u5730\u76EE\u6807\u5206\u652F\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u5C31\u662F\u5F53\u524D\u5206\u652F]
`,paraId:11,tocIndex:9},{value:`$ cd formily
$ yarn install # \u5B89\u88C5\u6574\u4F53\u9879\u76EE\u4F9D\u8D56
$ yarn build # \u6784\u5EFA\u6240\u6709\u9879\u76EE
$ yarn test # \u6267\u884C\u5355\u5143\u6D4B\u8BD5
`,paraId:12,tocIndex:10},{value:"\u4E3B\u9879\u76EE\u6587\u6863",paraId:13,tocIndex:11},{value:`$ yarn start
`,paraId:14,tocIndex:11},{value:"\u5185\u6838\u9879\u76EE\u6587\u6863",paraId:15,tocIndex:11},{value:`$ yarn workspace @next-formily/core start
`,paraId:16,tocIndex:11},{value:"React \u9879\u76EE\u6587\u6863",paraId:17,tocIndex:11},{value:`$ yarn workspace @next-formily/react start
`,paraId:18,tocIndex:11},{value:"Vue \u9879\u76EE\u6587\u6863",paraId:19,tocIndex:11},{value:`$ yarn workspace @next-formily/vue start
`,paraId:20,tocIndex:11},{value:"Antd \u9879\u76EE\u6587\u6863",paraId:21,tocIndex:11},{value:`$ yarn workspace @next-formily/antd start
`,paraId:22,tocIndex:11},{value:"Fusion \u9879\u76EE\u6587\u6863",paraId:23,tocIndex:11},{value:`$ yarn workspace @next-formily/next start
`,paraId:24,tocIndex:11},{value:"Reactive \u9879\u76EE\u6587\u6863",paraId:25,tocIndex:11},{value:`$ yarn workspace @next-formily/reactive start
`,paraId:26,tocIndex:11}]},60927:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Formily \u8868\u5355\u8BBE\u8BA1\u5668\u662F\u57FA\u4E8E",paraId:0,tocIndex:1},{value:"designable",paraId:0,tocIndex:1},{value:"\u800C\u6269\u5C55\u51FA\u6765\u7684\u6269\u5C55\u5305\uFF0C\u5B83\u5728\u7EE7\u627F\u4E86 designable \u7684\u57FA\u7840\u80FD\u529B\u4E0A\uFF0C\u63D0\u4F9B\u4E86 Formily \u57FA\u7840\u8868\u5355\u7684\u642D\u5EFA\u548C\u914D\u7F6E\u80FD\u529B\u3002",paraId:0,tocIndex:1},{value:"Designable \u7684\u6838\u5FC3\u7406\u5FF5\u662F\u5C06\u8BBE\u8BA1\u5668\u642D\u5EFA\u53D8\u6210\u6A21\u5757\u5316\u7EC4\u5408\uFF0C\u4E00\u5207\u53EF\u66FF\u6362\uFF0CDesignable \u672C\u8EAB\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u7ED9\u7528\u6237\u4F7F\u7528\uFF0C\u4F46\u662F\u5982\u679C\u7528\u6237\u5BF9\u7EC4\u4EF6\u4E0D\u6EE1\u610F\uFF0C\u662F\u53EF\u4EE5\u76F4\u63A5\u66FF\u6362\u7EC4\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u5927\u5316\u7075\u6D3B\u5B9A\u5236\uFF0C\u4E5F\u5C31\u662F Designable \u672C\u8EAB\u662F\u4E0D\u4F1A\u63D0\u4F9B\u4EFB\u4F55\u63D2\u69FD Plugin \u76F8\u5173\u7684 API",paraId:1,tocIndex:2},{value:"Ant Design \u7528\u6237",paraId:2,tocIndex:3},{value:`npm install --save @designable/formily-antd
`,paraId:3,tocIndex:3},{value:"Alibaba Fusion \u7528\u6237",paraId:4,tocIndex:3},{value:`npm install --save @designable/formily-next
`,paraId:5,tocIndex:3},{value:"\u793A\u4F8B\u6E90\u4EE3\u7801",paraId:6,tocIndex:4},{value:`import 'antd/dist/antd.less'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer, //\u8BBE\u8BA1\u5668\u6839\u7EC4\u4EF6\uFF0C\u4E3B\u8981\u7528\u4E8E\u4E0B\u53D1\u4E0A\u4E0B\u6587
  DesignerToolsWidget, //\u753B\u677F\u5DE5\u5177\u6302\u4EF6
  ViewToolsWidget, //\u89C6\u56FE\u5207\u6362\u5DE5\u5177\u6302\u4EF6
  Workspace, //\u5DE5\u4F5C\u533A\u7EC4\u4EF6\uFF0C\u6838\u5FC3\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u7BA1\u7406\u5DE5\u4F5C\u533A\u5185\u7684\u62D6\u62FD\u884C\u4E3A\uFF0C\u6811\u8282\u70B9\u6570\u636E\u7B49\u7B49...
  OutlineTreeWidget, //\u5927\u7EB2\u6811\u7EC4\u4EF6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u8BC6\u522B\u5F53\u524D\u5DE5\u4F5C\u533A\uFF0C\u5C55\u793A\u51FA\u5DE5\u4F5C\u533A\u5185\u6811\u8282\u70B9
  ResourceWidget, //\u62D6\u62FD\u6E90\u6302\u4EF6
  HistoryWidget, //\u5386\u53F2\u8BB0\u5F55\u6302\u4EF6
  StudioPanel, //\u4E3B\u5E03\u5C40\u9762\u677F
  CompositePanel, //\u5DE6\u4FA7\u7EC4\u5408\u5E03\u5C40\u9762\u677F
  WorkspacePanel, //\u5DE5\u4F5C\u533A\u5E03\u5C40\u9762\u677F
  ToolbarPanel, //\u5DE5\u5177\u680F\u5E03\u5C40\u9762\u677F
  ViewportPanel, //\u89C6\u53E3\u5E03\u5C40\u9762\u677F
  ViewPanel, //\u89C6\u56FE\u5E03\u5C40\u9762\u677F
  SettingsPanel, //\u53F3\u4FA7\u914D\u7F6E\u8868\u5355\u5E03\u5C40\u9762\u677F
  ComponentTreeWidget, //\u7EC4\u4EF6\u6811\u6E32\u67D3\u5668
} from '@designable/react'
import { SettingsForm } from '@designable/react-settings-form'
import {
  createDesigner,
  GlobalRegistry,
  Shortcut,
  KeyCode,
} from '@designable/core'
import {
  LogoWidget,
  ActionsWidget,
  PreviewWidget,
  SchemaEditorWidget,
  MarkupSchemaWidget,
} from './widgets'
import { saveSchema } from './service'
import {
  Form,
  Field,
  Input,
  Select,
  TreeSelect,
  Cascader,
  Radio,
  Checkbox,
  Slider,
  Rate,
  NumberPicker,
  Transfer,
  Password,
  DatePicker,
  TimePicker,
  Upload,
  Switch,
  Text,
  Card,
  ArrayCards,
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
} from '../src'

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '\u8F93\u5165\u63A7\u4EF6',
      Layouts: '\u5E03\u5C40\u7EC4\u4EF6',
      Arrays: '\u81EA\u589E\u7EC4\u4EF6',
      Displays: '\u5C55\u793A\u7EC4\u4EF6',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
      Displays: 'Displays',
    },
  },
})

const App = () => {
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: 'Form',
      }),
    [],
  )
  return (
    <Designer engine={engine}>
      <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
        <CompositePanel>
          <CompositePanel.Item title="panels.Component" icon="Component">
            <ResourceWidget
              title="sources.Inputs"
              sources={[
                Input,
                Password,
                NumberPicker,
                Rate,
                Slider,
                Select,
                TreeSelect,
                Cascader,
                Transfer,
                Checkbox,
                Radio,
                DatePicker,
                TimePicker,
                Upload,
                Switch,
                ObjectContainer,
              ]}
            />
            <ResourceWidget
              title="sources.Layouts"
              sources={[
                Card,
                FormGrid,
                FormTab,
                FormLayout,
                FormCollapse,
                Space,
              ]}
            />
            <ResourceWidget
              title="sources.Arrays"
              sources={[ArrayCards, ArrayTable]}
            />
            <ResourceWidget title="sources.Displays" sources={[Text]} />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
            <OutlineTreeWidget />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.History" icon="History">
            <HistoryWidget />
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget
                use={['DESIGNABLE', 'JSONTREE', 'MARKUP', 'PREVIEW']}
              />
            </ToolbarPanel>
            <ViewportPanel>
              <ViewPanel type="DESIGNABLE">
                {() => (
                  <ComponentTreeWidget
                    components={{
                      Form,
                      Field,
                      Input,
                      Select,
                      TreeSelect,
                      Cascader,
                      Radio,
                      Checkbox,
                      Slider,
                      Rate,
                      NumberPicker,
                      Transfer,
                      Password,
                      DatePicker,
                      TimePicker,
                      Upload,
                      Switch,
                      Text,
                      Card,
                      ArrayCards,
                      ArrayTable,
                      Space,
                      FormTab,
                      FormCollapse,
                      FormGrid,
                      FormLayout,
                      ObjectContainer,
                    }}
                  />
                )}
              </ViewPanel>
              <ViewPanel type="JSONTREE" scrollable={false}>
                {(tree, onChange) => (
                  <SchemaEditorWidget tree={tree} onChange={onChange} />
                )}
              </ViewPanel>
              <ViewPanel type="MARKUP" scrollable={false}>
                {(tree) => <MarkupSchemaWidget tree={tree} />}
              </ViewPanel>
              <ViewPanel type="PREVIEW">
                {(tree) => <PreviewWidget tree={tree} />}
              </ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel>
      </StudioPanel>
    </Designer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
`,paraId:7,tocIndex:4}]},35949:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Issue List \u4E13\u7528\u4E8E\u8DDF\u8E2A\u9519\u8BEF\u62A5\u544A\u548C\u529F\u80FD\u8BF7\u6C42\u3002 \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u63A5\u53D7\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898\u3002 \u5982\u679C\u60A8\u521B\u5EFA\u4E86\u4E0D\u7B26\u5408\u8981\u6C42\u7684 Issue\uFF0C\u5B83\u5C06\u7ACB\u5373\u88AB\u5173\u95ED\u3002",paraId:0,tocIndex:1},{value:"\u5982\u679C\u60A8\u9762\u4E34\u7684\u662F\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u8FD9\u6837\uFF1A",paraId:1,tocIndex:1},{value:"\u5148\u9605\u8BFB\u4ECB\u7ECD\u548C\u7EC4\u4EF6\u6587\u6863",paraId:2,tocIndex:1},{value:"\u786E\u4FDD\u60A8\u5DF2\u5728 FAQ \u548C changelog \u4E2D\u641C\u7D22\u4E86\u60A8\u7684\u95EE\u9898",paraId:2,tocIndex:1},{value:"\u5728",paraId:2,tocIndex:1},{value:"Discussions",paraId:2,tocIndex:1},{value:"\u4E2D\u67E5\u627E/\u8BE2\u95EE\u95EE\u9898",paraId:2,tocIndex:1},{value:"\u8BD5\u7740\u5148\u5C1D\u8BD5\u641C\u7D22\u60A8\u7684\u95EE\u9898",paraId:3,tocIndex:1},{value:"\u5B83\u53EF\u80FD\u5DF2\u7ECF\u5728\u5F00\u53D1\u5206\u652F\u4E2D\u5F97\u5230\u4E86\u89E3\u51B3\uFF0C\u751A\u81F3\u5DF2\u7ECF\u89E3\u51B3\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53D1\u73B0\u65E7\u7684\uFF0C\u5DF2\u5173\u95ED\u7684\u95EE\u9898\u4ECD\u4FDD\u7559\u5728\u6700\u65B0\u7248\u672C\u4E2D\uFF0C\u5219\u5E94\u4F7F\u7528\u4E0B\u9762\u7684\u8868\u5355\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u95EE\u9898\uFF0C\u800C\u4E0D\u662F\u5BF9\u65E7\u95EE\u9898\u8FDB\u884C\u8BC4\u8BBA\u3002",paraId:4,tocIndex:1}]},69786:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"Formily \u7528\u4E00\u53E5\u8BDD\u6765\u63CF\u8FF0\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u62BD\u8C61\u4E86\u8868\u5355\u9886\u57DF\u6A21\u578B\u7684 MVVM \u8868\u5355\u89E3\u51B3\u65B9\u6848\uFF0C\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u60F3\u6DF1\u5165\u4F7F\u7528 Formily\uFF0C\u90A3\u5FC5\u987B\u5B66\u4E60\u5E76\u4E86\u89E3 Formily \u7684\u9886\u57DF\u6A21\u578B\u5230\u5E95\u662F\u548B\u6837\u7684\uFF0C\u5B83\u5230\u5E95\u89E3\u51B3\u4E86\u54EA\u4E9B\u95EE\u9898\uFF0C\u4E86\u89E3\u5B8C\u9886\u57DF\u6A21\u578B\u4E4B\u540E\uFF0C\u5176\u5B9E\u5C31\u662F\u5982\u4F55\u6D88\u8D39\u8FD9\u4E2A\u9886\u57DF\u6A21\u578B\u7684\u89C6\u56FE\u5C42\u4E86\uFF0C\u8FD9\u4E00\u5C42\u5C31\u53EA\u9700\u8981\u770B\u5177\u4F53\u7EC4\u4EF6\u7684\u6587\u6863\u5373\u53EF\u4E86\u3002",paraId:0,tocIndex:1},{value:"\u56E0\u4E3A Formily \u7684\u5B66\u4E60\u6210\u672C\u8FD8\u662F\u6BD4\u8F83\u9AD8\u7684\uFF0C\u60F3\u8981\u5FEB\u901F\u4E86\u89E3 Formily \u7684\u5168\u8C8C\uFF0C\u6700\u91CD\u8981\u7684\u8FD8\u662F\u770B\u6587\u6863\uFF0C\u53EA\u662F\u6587\u6863\u600E\u4E48\u770B\uFF0C\u4ECE\u54EA\u91CC\u770B\u4F1A\u6BD4\u8F83\u91CD\u8981\uFF0C\u4E0B\u9762\u6211\u4EEC\u9488\u5BF9\u4E0D\u540C\u7528\u6237\u7ED9\u51FA\u4E86\u4E0D\u540C\u7684\u6587\u6863\u5B66\u4E60\u8DEF\u7EBF\u3002",paraId:1,tocIndex:2},{value:"\u5F15\u8A00\u4ECB\u7ECD\uFF0C\u56E0\u4E3A\u4F60\u8981\u4E86\u89E3 Formily \u7684\u6838\u5FC3\u601D\u8DEF\uFF0C\u662F\u5426\u9002\u5408\u4F60\u7684\u4E1A\u52A1\u573A\u666F\u3002",paraId:2,tocIndex:3},{value:"\u5FEB\u901F\u5F00\u59CB\uFF0C\u4ECE\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u5B66\u4E60\u5B9E\u9645 Formily \u4F7F\u7528\u90FD\u662F\u600E\u4E48\u4F7F\u7528\u7684\u3002",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u6587\u6863/\u6838\u5FC3\u5E93\u6587\u6863\uFF0C\u56E0\u4E3A Formily \u4E3A\u4F60\u5DF2\u7ECF\u5C01\u88C5\u597D\u4E86\u5927\u591A\u6570\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\uFF0C\u9047\u5230\u7EC4\u4EF6\u76F8\u5173\u7684\u95EE\u9898\uFF0C\u5C31\u50CF\u67E5\u5B57\u5178\u4E00\u6837\u7684\u53BB\u67E5\u770B\u7EC4\u4EF6\u6587\u6863\u5373\u53EF\u3002",paraId:2,tocIndex:3},{value:"\u573A\u666F\u6848\u4F8B\uFF0C\u4ECE\u5177\u4F53\u7684\u573A\u666F\u51FA\u53D1\uFF0C\u770B\u770B\u4EC0\u4E48\u624D\u662F\u8FD9\u4E2A\u573A\u666F\u4E0B\u7684\u6700\u4F73\u5B9E\u8DF5\u3002",paraId:2,tocIndex:3},{value:"\u4ED4\u7EC6\u6D88\u5316\u6838\u5FC3\u6982\u5FF5\uFF0C\u66F4\u6DF1\u5165\u7684\u7406\u89E3 Formily",paraId:3,tocIndex:4},{value:"\u8FDB\u9636\u6307\u5357\uFF0C\u4E3B\u8981\u5B66\u4E60\u66F4\u9AD8\u7EA7\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u6BD4\u5982\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4ECE\u7B80\u5355\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5230\u8D85\u590D\u6742\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:3,tocIndex:4},{value:"\u968F\u65F6\u67E5\u9605\u7EC4\u4EF6\u6587\u6863/\u6838\u5FC3\u5E93\u6587\u6863\uFF0C\u52A0\u6DF1\u8BB0\u5FC6",paraId:3,tocIndex:4},{value:"\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u4E0A\u7684\u7EC6\u8282\u95EE\u9898\uFF0C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u63A8\u8350\u76F4\u63A5\u770B@next-formily/antd \u6216\u8005@next-formily/next \u7684\u6E90\u7801\uFF0C\u56E0\u4E3A\u8FD9\u5C31\u662F\u6837\u677F\u4EE3\u7801\uFF0C\u8DDF\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u606F\u606F\u76F8\u5173\u3002",paraId:3,tocIndex:4},{value:"\u8D21\u732E\u6307\u5357\uFF0C\u4E86\u89E3\u6700\u57FA\u672C\u7684\u8D21\u732E\u59FF\u52BF",paraId:4,tocIndex:5},{value:"\u9605\u8BFB\u6587\u6863\uFF0C\u5982\u679C\u53D1\u73B0\u6587\u6863\u6709\u7F3A\u9677\uFF0C\u53EF\u4EE5\u63D0 PR \u4FEE\u590D",paraId:4,tocIndex:5},{value:"\u9605\u8BFB\u5355\u5143\u6D4B\u8BD5\uFF0C\u4E86\u89E3\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u6240\u5BF9\u5E94\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u9057\u6F0F\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u53EF\u4EE5\u63D0 PR",paraId:4,tocIndex:5},{value:"\u9605\u8BFB\u6E90\u7801\uFF0C\u5982\u679C\u53D1\u73B0\u6E90\u7801\u6709 Bug\uFF0C\u53EF\u4EE5\u63D0 PR",paraId:4,tocIndex:5},{value:`
\u6CE8\u610F\u4FEE\u6539\u6E90\u7801\uFF0C\u5FC5\u987B\u8981\u5E26\u4E0A\u5355\u5143\u6D4B\u8BD5
`,paraId:5},{value:"\u5982\u679C\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u63A8\u8350\u4F7F\u7528\u6587\u6863\u4E0A\u65B9\u7684\u641C\u7D22\u529F\u80FD\u5FEB\u901F\u641C\u7D22\u6587\u6863\u5185\u5BB9\uFF0C\u5FEB\u901F\u89E3\u51B3\uFF0C\u5982\u679C\u641C\u7D22\u4E0D\u5230\u7684\uFF0C\u63A8\u8350\u5230 ",paraId:6,tocIndex:6},{value:"\u8BBA\u575B",paraId:6,tocIndex:6},{value:" \u4E2D\u63D0\u95EE\uFF0C\u8FD9\u91CC\u65B9\u4FBF\u8BB0\u5F55\uFF0C\u5982\u679C\u9047\u5230\u975E\u5E38\u7D27\u6025\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u9489\u9489\u7FA4\u91CC @\u767D\u7384 \u5E2E\u5FD9\u89E3\u51B3\u3002",paraId:6,tocIndex:6},{value:"\u975E\u5E38\u4E0D\u63A8\u8350\u6587\u6863\u90FD\u4E0D\u770B\uFF0C\u5C31\u76F4\u63A5\u95EE\u5404\u79CD\u57FA\u7840\u95EE\u9898\uFF0C\u8FD9\u6837\u5F88\u4F4E\u6548",paraId:6,tocIndex:6},{value:"\u5982\u679C\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4E0D\u7B26\u5408\u9884\u671F\u7684\u884C\u4E3A\uFF0C\u5E76\u80FD\u591F\u4EE5\u6700\u5C0F\u6848\u4F8B\u590D\u73B0\u7684\uFF0C\u53EF\u4EE5\u7ED9 Formily \u63D0",paraId:7,tocIndex:7},{value:"Issue",paraId:7,tocIndex:7},{value:" \uFF0C\u975E\u5E38\u4E0D\u63A8\u8350\u5C06\u95EE\u9898\u8BB0\u5F55\u5728 issue \u91CC\uFF0C\u4F1A\u6253\u4E71 Issue \u7684\u4FE1\u606F\u6D41\uFF0C\u540C\u65F6\u4E00\u5B9A\u6CE8\u610F\uFF0C",paraId:7,tocIndex:7},{value:"\u63D0 Issue \u7684\u65F6\u5019\u8981\u5E26\u4E0A\u6700\u5C0F\u53EF\u590D\u73B0\u7684\u94FE\u63A5\u5730\u5740",paraId:7,tocIndex:7},{value:"\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u5FEB\u901F\u4FEE\u590D\uFF0C\u800C\u4E0D\u662F\u5728\u4E00\u5806\u4EE3\u7801\u91CC\u627E Bug\u3002",paraId:7,tocIndex:7},{value:"\u5982\u679C\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53D1\u73B0 Formily \u7684\u67D0\u4E9B\u8BBE\u8BA1\u5F88\u4E0D\u597D\uFF0C\u6216\u8005\u53EF\u4EE5\u6539\u8FDB\u7684\u66F4\u597D\u7684\uFF0C\u5219\u53EF\u4EE5\u5728 ",paraId:8,tocIndex:8},{value:"\u8BBA\u575B",paraId:8,tocIndex:8},{value:" \u4E2D\u63D0\u4EA4\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002",paraId:8,tocIndex:8}]},68458:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u4F7F\u7528 Formily \u5FC5\u987B\u8981\u7528\u5230",paraId:0,tocIndex:2},{value:"@next-formily/core",paraId:0,tocIndex:2},{value:"\uFF0C\u5B83\u8D1F\u8D23\u7BA1\u7406\u8868\u5355\u7684\u72B6\u6001\uFF0C\u8868\u5355\u6821\u9A8C\uFF0C\u8054\u52A8\u7B49\u7B49\u3002",paraId:0,tocIndex:2},{value:`$ npm install --save @next-formily/core
`,paraId:1,tocIndex:2},{value:"\u5355\u7EAF\u6709\u4E86\u5185\u6838\u8FD8\u4E0D\u591F\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A UI \u5E93\u6765\u63A5\u5165\u5185\u6838\u6570\u636E\uFF0C\u7528\u6765\u5B9E\u73B0\u6700\u7EC8\u7684\u8868\u5355\u4EA4\u4E92\u6548\u679C\uFF0C\u5BF9\u4E8E\u4E0D\u540C\u6846\u67B6\u7684\u7528\u6237\uFF0C\u6211\u4EEC\u6709\u4E0D\u540C\u7684\u6865\u63A5\u5E93\u3002",paraId:2,tocIndex:3},{value:"React \u7528\u6237",paraId:3,tocIndex:3},{value:`$ npm install --save @next-formily/react
`,paraId:4,tocIndex:3},{value:"Vue \u7528\u6237",paraId:5,tocIndex:3},{value:`$ npm install --save @next-formily/vue
`,paraId:6,tocIndex:3},{value:"\u60F3\u8981\u5FEB\u901F\u5B9E\u73B0\u6F02\u4EAE\u7684\u8868\u5355\uFF0C\u901A\u5E38\u6211\u4EEC\u90FD\u662F\u9700\u8981\u4F7F\u7528\u4E1A\u754C\u4F18\u79C0\u7684\u7EC4\u4EF6\u5E93\u7684\uFF0C\u6BD4\u5982",paraId:7,tocIndex:4},{value:"Ant Design ",paraId:7,tocIndex:4},{value:"\u548C ",paraId:7,tocIndex:4},{value:"Alibaba Fusion",paraId:7,tocIndex:4},{value:"\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4F18\u79C0\u7684\u7EC4\u4EF6\u5E93\uFF0C\u5728\u8868\u5355\u7684\u67D0\u4E9B\u573A\u666F\u4E0A\u8986\u76D6\u7684\u8FD8\u662F\u4E0D\u591F\u5168\u9762\uFF0C\u6BD4\u5982\u8BE6\u60C5\u9884\u89C8\u6001\u7684\u652F\u6301\uFF0CAnt Design \u662F\u4E0D\u652F\u6301\u7684\uFF0C\u8FD8\u6709\u4E00\u4E9B\u573A\u666F\u5316\u7684\u7EC4\u4EF6\u5B83\u4E5F\u662F\u4E0D\u652F\u6301\u7684\uFF0C\u6240\u4EE5 Formily \u5728\u6B64\u4E4B\u4E0A\u53C8\u5C01\u88C5\u4E86@next-formily/antd \u548C@next-formily/next\uFF0C\u4FDD\u8BC1\u7528\u6237\u5F00\u7BB1\u5373\u7528\u3002",paraId:7,tocIndex:4},{value:"Ant Design \u7528\u6237",paraId:8,tocIndex:4},{value:`$ npm install --save antd moment @next-formily/antd
`,paraId:9,tocIndex:4},{value:"Alibaba Fusion \u7528\u6237",paraId:10,tocIndex:4},{value:`$ npm install --save @alifd/next moment @next-formily/next
`,paraId:11,tocIndex:4},{value:"\u4F7F\u7528 ES Module import \u8BED\u6CD5\u5BFC\u5165\u4F9D\u8D56\u5373\u53EF",paraId:12,tocIndex:5},{value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { FormProvider, Field } from '@next-formily/react'
import { FormItem, Input } from '@next-formily/antd'
`,paraId:13,tocIndex:5},{value:"\u4ECE\u4EE5\u4E0A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B66\u5230\u5F88\u591A\u4E1C\u897F\uFF1A",paraId:14},{value:"createForm",paraId:15},{value:"\u7528\u6765\u521B\u5EFA\u8868\u5355\u6838\u5FC3\u9886\u57DF\u6A21\u578B\uFF0C\u5B83\u662F\u4F5C\u4E3A",paraId:15},{value:"MVVM",paraId:15},{value:"\u8BBE\u8BA1\u6A21\u5F0F\u7684\u6807\u51C6 ViewModel",paraId:15},{value:"FormProvider",paraId:15},{value:"\u7EC4\u4EF6\u662F\u4F5C\u4E3A\u89C6\u56FE\u5C42\u6865\u63A5\u8868\u5355\u6A21\u578B\u7684\u5165\u53E3\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u5C31\u662F\u63A5\u6536 createForm \u521B\u5EFA\u51FA\u6765\u7684 Form \u5B9E\u4F8B\uFF0C\u5E76\u5C06 Form \u5B9E\u4F8B\u4EE5\u4E0A\u4E0B\u6587\u5F62\u5F0F\u4F20\u9012\u5230\u5B50\u7EC4\u4EF6\u4E2D",paraId:15},{value:"FormLayout",paraId:15},{value:"\u7EC4\u4EF6\u662F\u7528\u6765\u6279\u91CF\u63A7\u5236",paraId:15},{value:"FormItem",paraId:15},{value:"\u6837\u5F0F\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6307\u5B9A\u5E03\u5C40\u4E3A\u4E0A\u4E0B\u5E03\u5C40\uFF0C\u4E5F\u5C31\u662F\u6807\u7B7E\u5728\u4E0A\uFF0C\u7EC4\u4EF6\u5728\u4E0B",paraId:15},{value:"Field",paraId:15},{value:`\u7EC4\u4EF6\u662F\u7528\u6765\u627F\u63A5\u666E\u901A\u5B57\u6BB5\u7684\u7EC4\u4EF6
`,paraId:15},{value:"name \u5C5E\u6027\uFF0C\u6807\u8BC6\u5B57\u6BB5\u5728\u8868\u5355\u6700\u7EC8\u63D0\u4EA4\u6570\u636E\u4E2D\u7684\u8DEF\u5F84",paraId:16},{value:`title \u5C5E\u6027\uFF0C\u6807\u8BC6\u5B57\u6BB5\u7684\u6807\u9898
`,paraId:16},{value:"\u5982\u679C decorator \u6307\u5B9A\u4E3A FormItem\uFF0C\u90A3\u4E48\u5728 FormItem \u7EC4\u4EF6\u4E2D\u4F1A\u9ED8\u8BA4\u4EE5\u63A5\u6536 title \u5C5E\u6027\u4F5C\u4E3A\u6807\u7B7E",paraId:17},{value:"\u5982\u679C\u6307\u5B9A\u4E3A\u67D0\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u90A3\u4E48 title \u7684\u6D88\u8D39\u65B9\u5219\u7531\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6765\u627F\u63A5",paraId:17},{value:"\u5982\u679C\u4E0D\u6307\u5B9A decorator\uFF0C\u90A3\u4E48 title \u5219\u4E0D\u4F1A\u663E\u793A\u5728 UI \u4E0A",paraId:17},{value:`required \u5C5E\u6027\uFF0C\u5FC5\u586B\u6821\u9A8C\u7684\u6781\u7B80\u5199\u6CD5\uFF0C\u6807\u8BC6\u8BE5\u5B57\u6BB5\u5FC5\u586B
`,paraId:16},{value:"\u5982\u679C decorator \u6307\u5B9A\u4E3A FormItem\uFF0C\u90A3\u4E48\u4F1A\u81EA\u52A8\u51FA\u73B0\u661F\u53F7\u63D0\u793A\uFF0C\u540C\u65F6\u6821\u9A8C\u5931\u8D25\u4E5F\u4F1A\u6709\u5BF9\u5E94\u7684\u72B6\u6001\u53CD\u9988\uFF0C\u8FD9\u4E9B\u90FD\u662F FormItem \u5185\u90E8\u505A\u7684\u9ED8\u8BA4\u5904\u7406",paraId:18},{value:"\u5982\u679C decorator \u6307\u5B9A\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684 UI \u6837\u5F0F\u5219\u9700\u8981\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B9E\u73B0\u65B9\u81EA\u5DF1\u5B9E\u73B0",paraId:18},{value:"\u5982\u679C\u4E0D\u6307\u5B9A decorator\uFF0C\u90A3\u4E48 required \u53EA\u662F\u4F1A\u963B\u585E\u63D0\u4EA4\uFF0C\u6821\u9A8C\u5931\u8D25\u4E0D\u4F1A\u6709\u4EFB\u4F55 UI \u53CD\u9988\u3002",paraId:18},{value:"initialValue \u5C5E\u6027\uFF0C\u4EE3\u8868\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C",paraId:16},{value:`decorator \u5C5E\u6027\uFF0C\u4EE3\u8868\u5B57\u6BB5\u7684 UI \u88C5\u9970\u5668\uFF0C\u901A\u5E38\u6211\u4EEC\u90FD\u4F1A\u6307\u5B9A\u4E3A FormItem
`,paraId:16},{value:"\u6CE8\u610F decorator \u5C5E\u6027\u4F20\u9012\u7684\u662F\u6570\u7EC4\u5F62\u5F0F\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4EE3\u8868\u6307\u5B9A\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4EE3\u8868\u6307\u5B9A\u7EC4\u4EF6\u5C5E\u6027",paraId:19},{value:`component \u5C5E\u6027\uFF0C\u4EE3\u8868\u5B57\u6BB5\u7684\u8F93\u5165\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u662F Input\uFF0C\u4E5F\u53EF\u4EE5\u662F Select\uFF0C\u7B49\u7B49
`,paraId:16},{value:"\u6CE8\u610F component \u5C5E\u6027\u4F20\u9012\u7684\u662F\u6570\u7EC4\u5F62\u5F0F\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4EE3\u8868\u6307\u5B9A\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4EE3\u8868\u6307\u5B9A\u7EC4\u4EF6\u5C5E\u6027",paraId:20},{value:"FormConsumer",paraId:15},{value:"\u7EC4\u4EF6\u662F\u4F5C\u4E3A\u54CD\u5E94\u5F0F\u6A21\u578B\u7684\u54CD\u5E94\u5668\u800C\u5B58\u5728\uFF0C\u5B83\u6838\u5FC3\u662F\u4E00\u4E2A render props \u6A21\u5F0F\uFF0C\u5728\u4F5C\u4E3A children \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u4F1A\u81EA\u52A8\u6536\u96C6\u6240\u6709\u4F9D\u8D56\uFF0C\u5982\u679C\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u501F\u52A9 FormConsumer \u6211\u4EEC\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u5404\u79CD\u8BA1\u7B97\u6C47\u603B\u7684\u9700\u6C42",paraId:15},{value:"FormButtonGroup",paraId:15},{value:"\u7EC4\u4EF6\u4F5C\u4E3A\u8868\u5355\u6309\u94AE\u7EC4\u5BB9\u5668\u800C\u5B58\u5728\uFF0C\u4E3B\u8981\u8D1F\u8D23\u6309\u94AE\u7684\u5E03\u5C40",paraId:15},{value:"Submit",paraId:15},{value:"\u7EC4\u4EF6\u4F5C\u4E3A\u8868\u5355\u63D0\u4EA4\u7684\u52A8\u4F5C\u89E6\u53D1\u5668\u800C\u5B58\u5728\uFF0C\u5176\u5B9E\u6211\u4EEC\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 form.submit \u65B9\u6CD5\u8FDB\u884C\u63D0\u4EA4\uFF0C\u4F46\u662F\u4F7F\u7528 Submit \u7684\u597D\u5904\u662F\u4E0D\u9700\u8981\u6BCF\u6B21\u90FD\u5728 Button \u7EC4\u4EF6\u4E0A\u5199 onClick \u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u540C\u65F6\u5B83\u8FD8\u5904\u7406\u4E86 Form \u7684 loading \u72B6\u6001\uFF0C\u5982\u679C onSubmit \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u4E14 Promise \u6B63\u5728 pending \u72B6\u6001\uFF0C\u90A3\u4E48\u6309\u94AE\u4F1A\u81EA\u52A8\u8FDB\u5165 loading \u72B6\u6001",paraId:15}]},14269:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u4E3B\u8981\u4F7F\u7528",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" \u6216 ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0},{value:" \u4E2D\u7684",paraId:0,tocIndex:0},{value:"FormDialog",paraId:0,tocIndex:0},{value:"\u51FD\u6570 \u548C ",paraId:0,tocIndex:0},{value:"FormDrawer",paraId:0,tocIndex:0},{value:"\u51FD\u6570",paraId:0,tocIndex:0}]},25442:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[]},96415:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[]},51259:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u56E0\u4E3A Formily \u5728\u8868\u5355\u5C42\u9762\u4E0A\u662F\u4E00\u4E2A\u975E\u5E38\u5B8C\u5907\u7684\u65B9\u6848\uFF0C\u800C\u4E14\u8FD8\u5F88\u7075\u6D3B\uFF0C\u652F\u6301\u7684\u573A\u666F\u975E\u5E38\u591A\uFF0C\u4F46\u662F\u573A\u666F\u6848\u4F8B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4E00\u4E00\u5217\u4E3E\u3002",paraId:0,tocIndex:0},{value:"\u6240\u4EE5\uFF0C\u8FD8\u662F\u5E0C\u671B\u793E\u533A\u80FD\u5E2E\u52A9 Formily \u5B8C\u5584\u66F4\u591A\u573A\u666F\u6848\u4F8B\uFF01\u6211\u4EEC\u4F1A\u4E0D\u80DC\u611F\u6FC0\uFF01\u{1F600}",paraId:1,tocIndex:0}]},31627:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u56E0\u4E3A Formily Schema \u662F\u53EF\u4EE5\u5B8C\u5168\u63CF\u8FF0 UI \u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7684\u62BD\u8C61\u51FA QueryList/QueryForm/QueryTable \u51E0\u4E2A\u7EC4\u4EF6\u6765\u7EC4\u5408\u5B9E\u73B0\u67E5\u8BE2\u5217\u8868\u7EC4\u4EF6,\u4EE5\u4E0B\u53EA\u662F\u7ED9\u51FA\u4F2A\u4EE3\u7801\uFF0C\u56E0\u4E3A\u67E5\u8BE2\u5217\u8868\u573A\u666F\u901A\u5E38\u90FD\u4F1A\u6D89\u53CA\u5927\u91CF\u4E1A\u52A1\u5C01\u88C5\uFF0C\u76EE\u524D Formily \u8FD8\u6CA1\u60F3\u597D\u600E\u4E48\u65E2\u8003\u8651\u901A\u7528\u6027\u53C8\u80FD\u8003\u8651\u4E1A\u52A1\u5FEB\u901F\u4E0A\u624B\uFF0C\u6240\u4EE5\u6682\u65F6\u4E0D\u5F00\u653E\u51FA\u5177\u4F53\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u4E0D\u8FC7\u53EF\u4EE5\u5148\u770B\u770B\u4F2A\u4EE3\u7801\uFF0C\u5982\u679C\u5B98\u65B9\u5B9E\u73B0\u8FD9\u51E0\u4E2A\u7EC4\u4EF6\uFF0C\u90A3\u4F7F\u7528\u65B9\u5F0F\u80AF\u5B9A\u4F1A\u662F\u8FD9\u6837\uFF1A",paraId:1,tocIndex:0},{value:`import React from 'react'
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
`,paraId:3,tocIndex:1},{value:"\u6CA1\u4EC0\u4E48\u7279\u6B8A\u903B\u8F91\uFF0C\u4E3B\u8981\u5C31\u662F\u7EC4\u5408 Form+FormGrid \u5B9E\u73B0\u4E00\u4E2A\u67E5\u8BE2\u8868\u5355\u5E03\u5C40",paraId:6,tocIndex:1},{value:"\u4F9D\u8D56\u4E0A\u4E0B\u6587\u4F20\u4E0B\u6765\u7684 query \u65B9\u6CD5\u5B9E\u73B0\u67E5\u8BE2\u8868\u5355\u67E5\u8BE2",paraId:6,tocIndex:1}]},90253:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u4E3B\u8981\u4F7F\u7528",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" \u6216 ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0},{value:" \u4E2D\u7684",paraId:0,tocIndex:0},{value:"FormStep",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:0,tocIndex:0}]},77406:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u4E3B\u8981\u4F7F\u7528",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" \u6216 ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0},{value:" \u4E2D\u7684",paraId:0,tocIndex:0},{value:"FormTab",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6 \u4E0E ",paraId:0,tocIndex:0},{value:"FormCollapse",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:0,tocIndex:0}]},5999:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[{value:"\u8FD9\u91CC\u7740\u91CD\u63D0\u4E00\u4E0B\uFF0CFormily2 \u76F8\u6BD4\u4E8E Formily1.x\uFF0C\u5DEE\u522B\u975E\u5E38\u5927\uFF0C\u5B58\u5728\u5927\u91CF Break Change\u3002",paraId:0,tocIndex:0},{value:"\u6240\u4EE5\u5BF9\u8001\u7528\u6237\u800C\u8A00\uFF0C\u57FA\u672C\u4E0A\u662F\u9700\u8981\u91CD\u65B0\u5B66\u4E60\u7684\uFF0CV1 \u548C V2 \u662F\u65E0\u6CD5\u505A\u5230\u5E73\u6ED1\u5347\u7EA7\u7684\u3002",paraId:1,tocIndex:0},{value:"\u4F46\u662F Formily2 \u7684\u9879\u76EE\u521D\u8877\u5C31\u662F\u4E3A\u4E86\u964D\u4F4E\u5927\u5BB6\u7684\u5B66\u4E60\u6210\u672C\uFF0C\u56E0\u4E3A\u8001\u7528\u6237\u672C\u8EAB\u5DF2\u7ECF\u5BF9 Formily \u7684\u6838\u5FC3\u601D\u60F3\u6709\u8FC7\u4E00\u5B9A\u7684\u4E86\u89E3\uFF0C\u4E3A\u4E86\u5E2E\u52A9\u8001\u7528\u6237\u66F4\u5FEB\u901F\u7684\u5B66\u4E60 Formily2\uFF0C\u672C\u6587\u4F1A\u5217\u4E3E\u51FA V1 \u548C V2 \u7684\u6838\u5FC3\u5DEE\u5F02\u70B9\uFF0C\u5E76\u4E0D\u4F1A\u5217\u4E3E\u65B0\u589E\u7684\u80FD\u529B\u3002",paraId:2,tocIndex:0},{value:"\u8FD9\u91CC\u4E3B\u8981\u6307@next-formily/core \u7684\u5DEE\u5F02",paraId:3,tocIndex:1},{value:"\u56E0\u4E3A Formily1.x \u7528\u6237\u5728\u4F7F\u7528\u5185\u6838 API \u7684\u65F6\u5019\uFF0C\u4E3B\u8981\u662F\u4F7F\u7528 setFieldState/setFormState \u4E0E getFieldState/getFormState\uFF0C\u5728 V2 \u4E2D\u4FDD\u7559\u4E86\u8FD9\u4E9B API\uFF0C\u4F46\u662F\u5185\u90E8\u7684\u6A21\u578B\u5C5E\u6027\u662F\u6709\u8BED\u4E49\u4E0A\u7684\u5DEE\u522B\u7684\uFF0C\u5DEE\u522B\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"modified",paraId:5,tocIndex:1},{value:"V1: \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u5DF2\u6539\u52A8\uFF0C\u5176\u5B9E\u5E76\u6CA1\u6709\u4EFB\u4F55\u7528\u5904\uFF0C\u56E0\u4E3A\u5B57\u6BB5\u521D\u59CB\u5316\u5C31\u4EE3\u8868\u5DF2\u6539\u52A8",paraId:6,tocIndex:1},{value:"V2: \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u88AB\u624B\u52A8\u4FEE\u6539\uFF0C\u4E5F\u5C31\u662F\u7EC4\u4EF6\u89E6\u53D1 onChange \u4E8B\u4EF6\u7684\u65F6\u5019\u624D\u4F1A\u8BBE\u7F6E\u4E3A true",paraId:6,tocIndex:1},{value:"inputed",paraId:7,tocIndex:1},{value:"V1: \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u88AB\u624B\u52A8\u4FEE\u6539",paraId:8,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 modified",paraId:8,tocIndex:1},{value:"pristine",paraId:9,tocIndex:1},{value:"V1: \u4EE3\u8868\u5B57\u6BB5 value \u662F\u5426\u7B49\u4E8E initialValue",paraId:10,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7528\u6237\u624B\u52A8\u5224\u65AD\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u5BFC\u81F4\u5927\u91CF\u810F\u68C0\u67E5",paraId:10,tocIndex:1},{value:"display",paraId:11,tocIndex:1},{value:"V1: \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u663E\u793A\uFF0C\u5982\u679C\u4E3A false\uFF0C\u4E0D\u4F1A\u79FB\u9664\u5B57\u6BB5\u503C",paraId:12,tocIndex:1},{value:"V2: \u4EE3\u8868\u5B57\u6BB5\u5C55\u793A\u6A21\u5F0F\uFF0C\u503C\u4E3A",paraId:12,tocIndex:1},{value:'"none" | "visible" | "hidden"',paraId:12,tocIndex:1},{value:"touched",paraId:13,tocIndex:1},{value:"V1: \u5197\u4F59\u5B57\u6BB5",paraId:14,tocIndex:1},{value:"V2: \u79FB\u9664",paraId:14,tocIndex:1},{value:"validating",paraId:15,tocIndex:1},{value:"V1: \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u6B63\u5728\u6821\u9A8C",paraId:16,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 validateStatus",paraId:16,tocIndex:1},{value:"effectErrors/effectWarnings",paraId:17,tocIndex:1},{value:"V1: \u4EE3\u8868\u7528\u6237\u624B\u52A8\u64CD\u4F5C\u7684 errors \u548C warnings",paraId:18,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 feedbacks",paraId:18,tocIndex:1},{value:"ruleErrors/ruleWarnings",paraId:19,tocIndex:1},{value:"V1: \u4EE3\u8868\u6821\u9A8C\u5668\u6821\u9A8C\u64CD\u4F5C\u7684 errors \u4E0E warnings",paraId:20,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 feedbacks",paraId:20,tocIndex:1},{value:"values",paraId:21,tocIndex:1},{value:"V1: \u4EE3\u8868 onChange \u4E8B\u4EF6\u8FD4\u56DE\u7684\u6240\u6709\u53C2\u6570",paraId:22,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 inputValues",paraId:22,tocIndex:1},{value:"rules",paraId:23,tocIndex:1},{value:"V1:\u4EE3\u8868\u6821\u9A8C\u89C4\u5219",paraId:24,tocIndex:1},{value:"V2:\u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 validator\uFF0C\u56E0\u4E3A rules \u7684\u5B57\u9762\u610F\u601D\u662F\u89C4\u5219\uFF0C\u4F46\u662F\u89C4\u5219\u7684\u542B\u4E49\u5F88\u5927\uFF0C\u4E0D\u5C40\u9650\u4E8E\u6821\u9A8C\u89C4\u5219",paraId:24,tocIndex:1},{value:"props",paraId:25,tocIndex:1},{value:"V1:\u4EE3\u8868\u7EC4\u4EF6\u7684\u6269\u5C55\u5C5E\u6027\uFF0C\u5B9A\u4F4D\u5F88\u4E0D\u6E05\u6670\uFF0C\u5728\u7EAF JSX \u573A\u666F\u662F\u4EE3\u8868\u7EC4\u4EF6\u5C5E\u6027\u4E0E FormItem \u5C5E\u6027\u7684\u96C6\u5408\uFF0C\u5728 Schema \u573A\u666F\u53C8\u662F\u4EE3\u8868 Schema \u5B57\u6BB5\u7684\u5C5E\u6027",paraId:26,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 decorator \u548C component",paraId:26,tocIndex:1},{value:"VirtualField",paraId:27,tocIndex:1},{value:"V1: \u4EE3\u8868\u865A\u62DF\u5B57\u6BB5",paraId:28,tocIndex:1},{value:"V2: \u6539\u540D\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:28,tocIndex:1},{value:"VoidField",paraId:28,tocIndex:1},{value:"unmount \u884C\u4E3A",paraId:29,tocIndex:1},{value:"V1: \u5B57\u6BB5 unmount\uFF0C\u5B57\u6BB5\u503C\u9ED8\u8BA4\u4F1A\u88AB\u5220\u9664",paraId:30,tocIndex:1},{value:"V2: \u79FB\u9664\uFF0C\u8FD9\u4E2A\u9ED8\u8BA4\u884C\u4E3A\u592A\u9690\u6666\uFF0C\u5982\u679C\u8981\u5220\u503C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539 value\uFF0C\u540C\u65F6\u81EA\u52A8\u5220\u503C\u7684\u884C\u4E3A\u53EA\u6709\u5B57\u6BB5 display \u4E3A none \u65F6\u624D\u4F1A\u81EA\u52A8\u5220\u503C",paraId:30,tocIndex:1},{value:"\u8FD9\u91CC\u4E3B\u8981\u6307@next-formily/react \u548C@next-formily/react-schema-renderer \u7684\u5DEE\u5F02",paraId:31,tocIndex:2},{value:"createFormActions/createAsyncFormActions",paraId:32,tocIndex:2},{value:"V1 \u521B\u5EFA\u4E00\u4E2A Form \u64CD\u4F5C\u5668\uFF0C\u53EF\u4EE5\u8C03\u7528 setFieldState/setFormState \u65B9\u6CD5",paraId:33,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528@next-formily/core \u4E2D\u7684",paraId:33,tocIndex:2},{value:"createForm",paraId:33,tocIndex:2},{value:"\u521B\u5EFA\u51FA\u6765\u7684 Form \u5B9E\u4F8B\u64CD\u4F5C\u72B6\u6001",paraId:33,tocIndex:2},{value:"Form",paraId:34,tocIndex:2},{value:"V1 \u5185\u90E8\u4F1A\u521B\u5EFA Form \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u53D7\u63A7\u4F20\u9012 values/initialValues \u5C5E\u6027\u7B49",paraId:35,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:35,tocIndex:2},{value:"FormProvider",paraId:35,tocIndex:2},{value:"SchemaForm",paraId:36,tocIndex:2},{value:"V1 \u5185\u90E8\u4F1A\u89E3\u6790 json-schema \u534F\u8BAE\uFF0C\u540C\u65F6\u4F1A\u521B\u5EFA Form \u5B9E\u4F8B\uFF0C\u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u5E76\u6E32\u67D3",paraId:37,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:37,tocIndex:2},{value:"createSchemaField",paraId:37,tocIndex:2},{value:"\u521B\u5EFA\u51FA\u6765\u7684 SchemaField \u7EC4\u4EF6\uFF0C\u4E14\u4E0D\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:37,tocIndex:2},{value:"Field",paraId:38,tocIndex:2},{value:"V1 \u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u9700\u8981\u4F7F\u7528 render props \u8FDB\u884C\u7EC4\u4EF6\u72B6\u6001\u6620\u5C04",paraId:39,tocIndex:2},{value:"V2 \u4E0D\u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u4F20\u5165 decorator/component \u5C5E\u6027\u5373\u53EF\u5FEB\u901F\u5B9E\u73B0\u72B6\u6001\u6620\u5C04",paraId:39,tocIndex:2},{value:"VirtualField",paraId:40,tocIndex:2},{value:"V1 \u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u9700\u8981\u4F7F\u7528 render props \u8FDB\u884C\u7EC4\u4EF6\u72B6\u6001\u6620\u5C04",paraId:41,tocIndex:2},{value:"V2 \u4E0D\u652F\u6301\u53D7\u63A7\u6A21\u5F0F\uFF0C\u6539\u540D",paraId:41,tocIndex:2},{value:"VoidField",paraId:41,tocIndex:2},{value:"\uFF0C\u4F20\u5165 decorator/component \u5C5E\u6027\u5373\u53EF\u5FEB\u901F\u5B9E\u73B0\u72B6\u6001\u6620\u5C04",paraId:41,tocIndex:2},{value:"FieldList",paraId:42,tocIndex:2},{value:"V1 \u4EE3\u8868\u81EA\u589E\u5B57\u6BB5\u63A7\u5236\u7EC4\u4EF6",paraId:43,tocIndex:2},{value:"V2 \u6539\u540D\u4E3A",paraId:43,tocIndex:2},{value:"ArrayField",paraId:43,tocIndex:2},{value:"FormSpy",paraId:44,tocIndex:2},{value:"V1 \u76D1\u542C\u6240\u6709\u751F\u547D\u5468\u671F\u89E6\u53D1\uFF0C\u5E76\u91CD\u65B0\u6E32\u67D3",paraId:45,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:45,tocIndex:2},{value:"FormConsumer",paraId:45,tocIndex:2},{value:"SchemaMarkupField",paraId:46,tocIndex:2},{value:"V1 \u4EE3\u8868 Schema \u63CF\u8FF0\u6807\u7B7E\u7EC4\u4EF6",paraId:47,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:47,tocIndex:2},{value:"createSchemaField",paraId:47,tocIndex:2},{value:"\u5DE5\u5382\u51FD\u6570\u521B\u5EFA\u51FA\u6765\u7684\u63CF\u8FF0\u6807\u7B7E\u7EC4\u4EF6",paraId:47,tocIndex:2},{value:"useFormQuery",paraId:48,tocIndex:2},{value:"V1 \u7528\u4E8E\u5B9E\u73B0\u8868\u5355\u67E5\u8BE2\u7684\u5FEB\u6377 Hook\uFF0C\u652F\u6301\u4E2D\u95F4\u4EF6\u673A\u5236",paraId:49,tocIndex:2},{value:"V2 \u6682\u65F6\u79FB\u9664",paraId:49,tocIndex:2},{value:"useForm",paraId:50,tocIndex:2},{value:"V1 \u4EE3\u8868\u521B\u5EFA Form \u5B9E\u4F8B",paraId:51,tocIndex:2},{value:"V2 \u4EE3\u8868\u6D88\u8D39\u4E0A\u4E0B\u6587\u4E2D\u7684 Form \u5B9E\u4F8B\uFF0C\u5982\u679C\u8981\u521B\u5EFA\uFF0C\u8BF7\u4F7F\u7528",paraId:51,tocIndex:2},{value:"createForm",paraId:51,tocIndex:2},{value:"useField",paraId:52,tocIndex:2},{value:"V1 \u4EE3\u8868\u521B\u5EFA Field \u5B9E\u4F8B",paraId:53,tocIndex:2},{value:"V2 \u4EE3\u8868\u6D88\u8D39\u4E0A\u4E0B\u6587\u4E2D\u7684 Field \u5B9E\u4F8B\uFF0C\u5982\u679C\u8981\u521B\u5EFA\uFF0C\u8BF7\u8C03\u7528",paraId:53,tocIndex:2},{value:"form.createField",paraId:53,tocIndex:2},{value:"useVirtualField",paraId:54,tocIndex:2},{value:"V1 \u4EE3\u8868\u521B\u5EFA VirtualField \u5B9E\u4F8B",paraId:55,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u5982\u679C\u8981\u521B\u5EFA\uFF0C\u8BF7\u8C03\u7528",paraId:55,tocIndex:2},{value:"form.createVoidField",paraId:55,tocIndex:2},{value:"useFormState",paraId:56,tocIndex:2},{value:"V1 \u6D88\u8D39\u4E0A\u4E0B\u6587\u4E2D\u7684 Form \u72B6\u6001",paraId:57,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:57,tocIndex:2},{value:"useForm",paraId:57,tocIndex:2},{value:"useFieldState",paraId:58,tocIndex:2},{value:"V1 \u6D88\u8D39\u4E0A\u4E0B\u6587\u4E2D\u7684 Field \u72B6\u6001",paraId:59,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:59,tocIndex:2},{value:"useField",paraId:59,tocIndex:2},{value:"useFormSpy",paraId:60,tocIndex:2},{value:"V1 \u521B\u5EFA\u751F\u547D\u5468\u671F\u76D1\u542C\u5668\uFF0C\u5E76\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3",paraId:61,tocIndex:2},{value:"V2 \u79FB\u9664",paraId:61,tocIndex:2},{value:"useSchemaProps",paraId:62,tocIndex:2},{value:"V1 \u6D88\u8D39\u4E0A\u4E0B\u6587\u4E2D\u7684 SchemaField \u7684 Props",paraId:63,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528",paraId:63,tocIndex:2},{value:"useFieldSchema",paraId:63,tocIndex:2},{value:"connect",paraId:64,tocIndex:2},{value:"V1 \u6807\u51C6 HOC",paraId:65,tocIndex:2},{value:"V2 \u9AD8\u9636\u51FD\u6570\u6539\u4E3A 1 \u9636\uFF0C\u5C5E\u6027\u6709\u5DE8\u5927\u53D8\u5316\uFF0C\u5177\u4F53\u770B",paraId:65,tocIndex:2},{value:"connect \u6587\u6863",paraId:65,tocIndex:2},{value:"registerFormField/registerVirtaulBox/registerFormComponent/registerFormItemComponent",paraId:66,tocIndex:2},{value:"V1 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6",paraId:67,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u4E0D\u518D\u652F\u6301\u5168\u5C40\u6CE8\u518C",paraId:67,tocIndex:2},{value:"FormEffectHooks",paraId:68,tocIndex:2},{value:"V1 RxJS \u751F\u547D\u5468\u671F\u94A9\u5B50",paraId:69,tocIndex:2},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4ECE@next-formily/core \u4E2D\u5BFC\u51FA\uFF0C\u4E14\u4E0D\u4F1A\u8FD4\u56DE RxJS Observable \u5BF9\u8C61",paraId:69,tocIndex:2},{value:"effects",paraId:70,tocIndex:2},{value:"V1 \u652F\u6301\u56DE\u8C03\u51FD\u6570",paraId:71,tocIndex:2},{value:"$",paraId:71,tocIndex:2},{value:"\u9009\u62E9\u5668",paraId:71,tocIndex:2},{value:"V2 \u79FB\u9664",paraId:71,tocIndex:2},{value:"$",paraId:71,tocIndex:2},{value:"\u9009\u62E9\u5668",paraId:71,tocIndex:2},{value:"\u8FD9\u91CC\u4E3B\u8981\u6307 JSON Schema \u534F\u8BAE\u4E0A\u7684\u5DEE\u5F02",paraId:72,tocIndex:3},{value:"editable",paraId:73,tocIndex:3},{value:"V1 \u76F4\u63A5\u5728 Schema \u63CF\u8FF0\u4E2D\uFF0C\u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u53EF\u7F16\u8F91",paraId:74,tocIndex:3},{value:"V2 \u6539\u540D x-editable",paraId:74,tocIndex:3},{value:"visible",paraId:75,tocIndex:3},{value:"V1 \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u663E\u793A",paraId:76,tocIndex:3},{value:"V2 \u6539\u540D x-visible",paraId:76,tocIndex:3},{value:"display",paraId:77,tocIndex:3},{value:"V1 \u4EE3\u8868\u5B57\u6BB5\u662F\u5426\u663E\u793A\uFF0C\u5982\u679C\u4E3A false\uFF0C\u4EE3\u8868\u4E0D\u5220\u503C\u7684\u9690\u85CF\u884C\u4E3A",paraId:78,tocIndex:3},{value:"V2 \u6539\u540D x-display\uFF0C\u4EE3\u8868\u5B57\u6BB5\u5C55\u793A\u6A21\u5F0F\uFF0C\u503C\u4E3A",paraId:78,tocIndex:3},{value:'"none" | "visible" | "hidden"',paraId:78,tocIndex:3},{value:"triggerType",paraId:79,tocIndex:3},{value:"V1 \u4EE3\u8868\u5B57\u6BB5\u6821\u9A8C\u65F6\u673A",paraId:80,tocIndex:3},{value:"V2 \u79FB\u9664\uFF0C\u8BF7\u4F7F\u7528",paraId:80,tocIndex:3},{value:'x-validator:[{triggerType:"onBlur",validator:()=>...}]',paraId:80,tocIndex:3},{value:"x-props",paraId:81,tocIndex:3},{value:"V1 \u4EE3\u8868 FormItem \u5C5E\u6027",paraId:82,tocIndex:3},{value:"V2 \u79FB\u9664\uFF0C\u8BF7\u4F7F\u7528 x-decorator-props",paraId:82,tocIndex:3},{value:"x-rules",paraId:83,tocIndex:3},{value:"V1 \u4EE3\u8868\u5B57\u6BB5\u6821\u9A8C\u89C4\u5219",paraId:84,tocIndex:3},{value:"V2 \u6539\u540D x-validator",paraId:84,tocIndex:3},{value:"x-linkages",paraId:85,tocIndex:3},{value:"V1 \u4EE3\u8868\u5B57\u6BB5\u8054\u52A8",paraId:86,tocIndex:3},{value:"V2 \u79FB\u9664\uFF0C\u7EDF\u4E00\u4F7F\u7528 x-reactions",paraId:86,tocIndex:3},{value:"x-mega-props",paraId:87,tocIndex:3},{value:"V1 \u4EE3\u8868 MegaLayout \u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u5C5E\u6027",paraId:88,tocIndex:3},{value:"V2 \u79FB\u9664",paraId:88,tocIndex:3},{value:"\u5728 Formily1.x \u4E2D\uFF0C\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528@next-formily/antd \u548C@next-formily/antd-components\uFF0C\u6216\u8005@next-formily/next \u548C@next-formily/next-components\uFF0C",paraId:89,tocIndex:4},{value:"\u5728 V2 \u4E2D\uFF0C\u6211\u4EEC\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6539\u53D8\uFF1A",paraId:90,tocIndex:4},{value:"@next-formily/antd \u4E0E@next-formily/antd-components \u5408\u5E76\u6210@next-formily/antd\uFF0C\u540C\u65F6\u76EE\u5F55\u7ED3\u6784\u5168\u90E8\u6539\u6210\u7EAF\u7EC4\u4EF6\u5E93\u7684\u76EE\u5F55\u7ED3\u6784\u4E86\u3002",paraId:91,tocIndex:4},{value:"\u4E0D\u4F1A\u518D\u5BFC\u51FA@next-formily/react @next-formily/core \u7684\u5185\u90E8 API",paraId:92,tocIndex:4},{value:"\u6240\u6709\u7EC4\u4EF6\u51E0\u4E4E\u90FD\u505A\u4E86\u91CD\u5199\uFF0C\u65E0\u6CD5\u5E73\u6ED1\u5347\u7EA7",paraId:93,tocIndex:4},{value:"\u79FB\u9664 styled-components",paraId:94,tocIndex:4}]},35195:function(_,b,e){e.r(b),e.d(b,{texts:function(){return g}});const g=[]}}]);
