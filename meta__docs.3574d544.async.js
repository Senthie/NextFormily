"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[1904],{75840:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},72812:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},52431:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},12350:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},58808:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return A}});var Q=e(90228),W=e.n(Q),he=e(87999),I=e.n(he),oe=e(69854),S=e(97204),P=e(40751),M=e(68168),A={"docs-guide-advanced-calculator-demo-0":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h,i,d;return W()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=o.sent,$=L.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return F=o.sent,c=F.Form,t=F.FormItem,l=F.NumberPicker,y=F.ArrayTable,v=F.Editable,n=F.Input,a=F.FormButtonGroup,s=F.Submit,o.next=17,Promise.resolve().then(e.bind(e,40751));case 17:return r=o.sent,p=r.createForm,o.next=21,Promise.resolve().then(e.bind(e,68168));case 21:return u=o.sent,h=u.createSchemaField,i=h({components:{FormItem:t,Editable:v,Input:n,NumberPicker:l,ArrayTable:y}}),d=p(),o.abrupt("return",{default:function(){return $.createElement(c,{form:d,layout:"vertical"},$.createElement(i,null,$.createElement(i.Array,{name:"projects",title:"Projects","x-decorator":"FormItem","x-component":"ArrayTable"},$.createElement(i.Object,null,$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Sort",align:"center"}},$.createElement(i.Void,{"x-decorator":"FormItem","x-component":"ArrayTable.SortHandle"})),$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{width:80,title:"Index",align:"center"}},$.createElement(i.String,{"x-decorator":"FormItem","x-component":"ArrayTable.Index"})),$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Price"}},$.createElement(i.Number,{name:"price","x-decorator":"Editable",required:!0,"x-component":"NumberPicker","x-component-props":{addonAfter:"$"},default:0})),$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Count"}},$.createElement(i.Number,{name:"count","x-decorator":"Editable",required:!0,"x-component":"NumberPicker",default:0})),$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Total"}},$.createElement(i.Number,{"x-decorator":"FormItem",name:"total","x-component":"NumberPicker","x-pattern":"readPretty","x-component-props":{addonAfter:"$"},"x-reactions":{dependencies:[".price",".count"],when:"{{$deps[0] && $deps[1]}}",fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}})),$.createElement(i.Void,{"x-component":"ArrayTable.Column","x-component-props":{title:"Operations",dataIndex:"operations",width:200,fixed:"right"}},$.createElement(i.Void,{"x-component":"FormItem"},$.createElement(i.Void,{"x-component":"ArrayTable.Remove"}),$.createElement(i.Void,{"x-component":"ArrayTable.MoveDown"}),$.createElement(i.Void,{"x-component":"ArrayTable.MoveUp"})))),$.createElement(i.Void,{"x-component":"ArrayTable.Addition",title:"Add"})),$.createElement(i.Number,{name:"total",title:"Total","x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-pattern":"readPretty","x-reactions":{dependencies:[".projects"],when:"{{$deps[0].length > 0}}",fulfill:{state:{value:"{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}"}}}})),$.createElement(a,null,$.createElement(s,{onSubmit:console.log},"\u63D0\u4EA4")))}});case 26:case"end":return o.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-calculator-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/calculator",context:{react:x||(x=e.t(oe,2)),"@next-formily/antd":S,"@next-formily/core":P,"@next-formily/react":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}},"docs-guide-advanced-calculator-demo-1":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return W()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=m.sent,$=L.default,m.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return F=m.sent,c=F.Form,t=F.FormItem,l=F.NumberPicker,y=F.ArrayTable,v=F.Editable,n=F.Input,a=F.FormButtonGroup,s=F.Submit,m.next=17,Promise.resolve().then(e.bind(e,40751));case 17:return r=m.sent,p=r.createForm,m.next=21,Promise.resolve().then(e.bind(e,68168));case 21:return u=m.sent,h=u.createSchemaField,i=h({components:{FormItem:t,Editable:v,Input:n,NumberPicker:l,ArrayTable:y}}),d=p(),f={type:"object",properties:{projects:{type:"array",title:"Projects","x-decorator":"FormItem","x-component":"ArrayTable",items:{type:"object",properties:{column_1:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Sort",align:"center"},properties:{sortable:{type:"void","x-component":"ArrayTable.SortHandle"}}},column_2:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:50,title:"Index",align:"center"},properties:{index:{type:"void","x-component":"ArrayTable.Index"}}},column_3:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Price"},properties:{price:{type:"number",default:0,"x-decorator":"Editable","x-component":"NumberPicker","x-component-props":{addonAfter:"$"}}}},column_4:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Count"},properties:{count:{type:"number",default:0,"x-decorator":"Editable","x-component":"NumberPicker","x-component-props":{addonAfter:"$"}}}},column_5:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Total"},properties:{total:{type:"number","x-read-pretty":!0,"x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-reactions":{dependencies:[".price",".count"],when:"{{$deps[0] && $deps[1]}}",fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}}}},column_6:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Operations"},properties:{item:{type:"void","x-component":"FormItem",properties:{remove:{type:"void","x-component":"ArrayTable.Remove"},moveDown:{type:"void","x-component":"ArrayTable.MoveDown"},moveUp:{type:"void","x-component":"ArrayTable.MoveUp"}}}}}}},properties:{add:{type:"void",title:"Add","x-component":"ArrayTable.Addition"}}},total:{type:"number",title:"Total","x-decorator":"FormItem","x-component":"NumberPicker","x-component-props":{addonAfter:"$"},"x-pattern":"readPretty","x-reactions":{dependencies:[".projects"],when:"{{$deps[0].length > 0}}",fulfill:{state:{value:"{{$deps[0].reduce((total,item)=>item.total ? total+item.total : total,0)}}"}}}}}},m.abrupt("return",{default:function(){return $.createElement(c,{form:d,layout:"vertical"},$.createElement(i,{schema:f}),$.createElement(a,null,$.createElement(s,{onSubmit:console.log},"submit")))}});case 27:case"end":return m.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-calculator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/calculator",context:{react:x||(x=e.t(oe,2)),"@next-formily/antd":S,"@next-formily/core":P,"@next-formily/react":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}}}},59234:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return l}});var Q=e(90228),W=e.n(Q),he=e(26068),I=e.n(he),oe=e(48305),S=e.n(oe),P=e(87999),M=e.n(P),A=e(69854),N=e(40751),L=e(68168),$=e(97204),F=e(70869),c=e(10006),t=e(22285),l={"docs-guide-advanced-controlled-demo-0":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B;return W()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=O.sent,n=v.default,a=v.useMemo,s=v.useState,r=v.useEffect,p=v.useRef,O.next=10,Promise.resolve().then(e.bind(e,40751));case 10:return u=O.sent,h=u.createForm,i=u.onFormValuesChange,O.next=15,Promise.resolve().then(e.bind(e,68168));case 15:return d=O.sent,f=d.createSchemaField,O.next=19,Promise.resolve().then(e.bind(e,97204));case 19:return o=O.sent,m=o.Form,b=o.FormItem,g=o.Input,C=f({components:{Input:g,FormItem:b}}),B=function(R){var D=a(function(){return h({values:R.values,effects:function(){i(function(Y){R.onChange(Y.values)})}})},[]),Z=p(1);return r(function(){D.setValues(R.values,"overwrite")},[JSON.stringify(R.values)]),n.createElement(m,{form:D},n.createElement(C,null,n.createElement(C.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"controlled target"}})),"Form component rendering times\uFF1A",Z.current++)},O.abrupt("return",{default:function(){var R=s({input:""}),D=S()(R,2),Z=D[0],z=D[1],Y=p(1);return n.createElement(n.Fragment,null,n.createElement(b,null,n.createElement(g,{value:Z.input,placeholder:"controller",onChange:function(ne){z(I()(I()({},Z),{},{input:ne.target.value}))}})),n.createElement(B,{values:Z,onChange:function(ne){z(I()({},ne))}}),"root component rendering times: ",Y.current++)}});case 26:case"end":return O.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState, useEffect, useRef } from 'react'
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
          x-component-props={{ placeholder: 'controlled target' }}
        />
      </SchemaField>
      Form component rendering times\uFF1A{count.current++}
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
          placeholder="controller"
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
      root component rendering times: {count.current++}
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-1":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O;return W()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=R.sent,n=v.default,a=v.useMemo,s=v.useRef,R.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=R.sent,p=r.createForm,R.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=R.sent,h=u.createSchemaField,R.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return i=R.sent,d=i.Form,f=i.FormItem,o=i.Input,R.next=22,Promise.resolve().then(e.bind(e,70869));case 22:return m=R.sent,b=m.observable,R.next=26,Promise.resolve().then(e.bind(e,10006));case 26:return g=R.sent,C=g.observer,B=h({components:{Input:o,FormItem:f}}),V=function(Z){var z=s(1),Y=a(function(){return p({values:Z.values})},[]);return n.createElement(d,{form:Y},n.createElement(B,null,n.createElement(B.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"controlled target"}})),"Form component rendering times\uFF1A",z.current++)},O=C(function(D){var Z=s(1);return n.createElement(f,null,n.createElement(o,{value:D.values.input,placeholder:"controller",onChange:function(Y){D.values.input=Y.target.value}}),"Controller component rendering times\uFF1A",Z.current++)}),R.abrupt("return",{default:function(){var Z=s(1),z=a(function(){return b({input:""})});return n.createElement(n.Fragment,null,n.createElement(O,{values:z}),n.createElement(V,{values:z}),"root component rendering times\uFF1A",Z.current++)}});case 32:case"end":return R.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useRef } from 'react'
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
          x-component-props={{ placeholder: 'controlled target' }}
        />
      </SchemaField>
      Form component rendering times\uFF1A{count.current++}
    </Form>
  )
}

const Controller = observer((props) => {
  const count = useRef(1)
  return (
    <FormItem>
      <Input
        value={props.values.input}
        placeholder="controller"
        onChange={(event) => {
          props.values.input = event.target.value
        }}
      />
      Controller component rendering times\uFF1A{count.current++}
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
      root component rendering times\uFF1A{count.current++}
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},"@next-formily/reactive-react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,"@next-formily/reactive":F,"@next-formily/reactive-react":c},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-2":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B;return W()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=O.sent,n=v.default,a=v.useMemo,s=v.useState,O.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=O.sent,p=r.createForm,O.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=O.sent,h=u.createSchemaField,O.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return i=O.sent,d=i.Form,f=i.FormItem,o=i.Input,m=i.Select,O.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return b=O.sent,g=b.Button,C=b.Space,B=h({components:{Input:o,FormItem:f,Select:m}}),O.abrupt("return",{default:function(){var R=s({}),D=S()(R,2),Z=D[0],z=D[1],Y=a(function(){return p()},[Z]);return n.createElement(d,{form:Y,layout:"vertical"},n.createElement(C,{style:{marginBottom:20}},n.createElement(g,{onClick:function(){z({type:"object",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}})}},"Schema1"),n.createElement(g,{onClick:function(){z({type:"object",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}})}},"Schema2")),n.createElement(B,{schema:Z}))}});case 28:case"end":return O.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState } from 'react'
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
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:t},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-3":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B;return W()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=O.sent,n=v.default,a=v.useMemo,s=v.useRef,O.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return r=O.sent,p=r.createForm,O.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return u=O.sent,h=u.createSchemaField,i=u.observer,O.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return d=O.sent,f=d.Form,o=d.FormItem,m=d.Input,b=d.Select,g=h({components:{Input:m,FormItem:o,Select:b}}),C={type_1:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}},type_2:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}}},B=i(function(){var j=s(),R=a(function(){return p()},[]),D=R.values.type,Z={type:"object",properties:{type:{type:"string",title:"Type",enum:[{label:"type 1",value:"type_1"},{label:"type 2",value:"type_2"}],"x-decorator":"FormItem","x-component":"Select"},container:C[D]}};return j.current!==D&&R.clearFormGraph("container.*"),j.current=D,n.createElement(f,{form:R,layout:"vertical"},n.createElement(g,{schema:Z}))}),O.abrupt("return",{default:B});case 26:case"end":return O.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useRef } from 'react'
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
        title: 'Type',
        enum: [
          { label: 'type 1', value: 'type_1' },
          { label: 'type 2', value: 'type_2' },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      container: DYNAMIC_INJECT_SCHEMA[currentType],
    },
  }

  if (oldTypeRef.current !== currentType) {
    form.clearFormGraph('container.*') //Recycle field model
  }

  oldTypeRef.current = currentType

  return (
    <Form form={form} layout="vertical">
      <SchemaField schema={schema} />
    </Form>
  )
})

export default App`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-4":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D;return W()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=z.sent,n=v.default,a=v.useMemo,s=v.useState,r=v.useEffect,z.next=9,Promise.resolve().then(e.bind(e,40751));case 9:return p=z.sent,u=p.createForm,z.next=13,Promise.resolve().then(e.bind(e,68168));case 13:return h=z.sent,i=h.createSchemaField,d=h.RecursionField,f=h.useForm,o=h.useField,m=h.observer,z.next=21,Promise.resolve().then(e.bind(e,97204));case 21:return b=z.sent,g=b.Form,C=b.FormItem,B=b.Input,V=b.Select,O=m(function(){var Y=o(),K=f(),ne=s({}),te=S()(ne,2),se=te[0],ie=te[1];return r(function(){K.clearFormGraph("".concat(Y.address,".*")),ie(R[K.values.type])},[K.values.type]),n.createElement(d,{basePath:Y.address,schema:se,onlyRenderProperties:!0})}),j=i({components:{Input:B,FormItem:C,Select:V,Custom:O}}),R={type_1:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"Input"}}}},type_2:{type:"void",properties:{aa:{type:"string",title:"AA","x-decorator":"FormItem",enum:[{label:"111",value:"111"},{label:"222",value:"222"}],"x-component":"Select","x-component-props":{placeholder:"Select"}},bb:{type:"string",title:"BB","x-decorator":"FormItem","x-component":"Input"}}}},D=m(function(){var Y=a(function(){return u()},[]),K={type:"object",properties:{type:{type:"string",title:"Type",enum:[{label:"type 1",value:"type_1"},{label:"type 2",value:"type_2"}],"x-decorator":"FormItem","x-component":"Select"},container:{type:"object","x-component":"Custom"}}};return n.createElement(g,{form:Y,layout:"vertical"},n.createElement(j,{schema:K}))}),z.abrupt("return",{default:D});case 31:case"end":return z.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useMemo, useState, useEffect } from 'react'
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
    form.clearFormGraph(\`\${field.address}.*\`) //Recycle field model
    //Can be obtained asynchronously
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
        title: 'Type',
        enum: [
          { label: 'type 1', value: 'type_1' },
          { label: 'type 2', value: 'type_2' },
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

export default App`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-5":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V;return W()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=j.sent,n=v.default,j.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return a=j.sent,s=a.createForm,j.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return r=j.sent,p=r.createSchemaField,j.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return u=j.sent,h=u.Form,i=u.FormItem,d=u.Input,j.next=20,Promise.resolve().then(e.bind(e,70869));case 20:return f=j.sent,o=f.observable,j.next=24,Promise.resolve().then(e.bind(e,10006));case 24:return m=j.sent,b=m.observer,g=p({components:{Input:d,FormItem:i}}),C=s(),B=o({input:""}),V=b(function(){return n.createElement(i,null,n.createElement(d,{value:B.input,placeholder:"controller",onChange:function(D){B.input=D.target.value}}))}),j.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(V,null),n.createElement(h,{form:C},n.createElement(g,null,n.createElement(g.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"controlled target"},"x-reactions":function(Z){Z.component[1].placeholder=B.input||"controlled target"}}))))}});case 31:case"end":return j.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        placeholder="controller"
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
            x-component-props={{ placeholder: 'controlled target' }}
            x-reactions={(field) => {
              field.component[1].placeholder = obs.input || 'controlled target'
            }}
          />
        </SchemaField>
      </Form>
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},"@next-formily/reactive-react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,"@next-formily/reactive":F,"@next-formily/reactive-react":c},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}},"docs-guide-advanced-controlled-demo-6":{component:A.memo(A.lazy(M()(W()().mark(function y(){var v,n,a,s,r,p,u,h,i,d,f,o,m;return W()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return v=g.sent,n=v.default,a=v.useState,g.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return s=g.sent,r=s.createForm,g.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return p=g.sent,u=p.createSchemaField,g.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return h=g.sent,i=h.Form,d=h.FormItem,f=h.Input,o=u({components:{Input:f,FormItem:d}}),m=r(),g.abrupt("return",{default:function(){var B=a(""),V=S()(B,2),O=V[0],j=V[1];return n.createElement(n.Fragment,null,n.createElement(d,null,n.createElement(f,{value:O,placeholder:"controller",onChange:function(D){j(D.target.value)}})),n.createElement(i,{form:m},n.createElement(o,null,n.createElement(o.String,{name:"input","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:O||"controlled target"}}))))}});case 22:case"end":return g.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-controlled-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
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
          placeholder="controller"
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
            x-component-props={{ placeholder: value || 'controlled target' }}
          />
        </SchemaField>
      </Form>
    </>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/controlled",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$},renderOpts:{compile:function(){var y=M()(W()().mark(function n(){var a,s=arguments;return W()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(6404).then(e.bind(e,46404));case 2:return p.abrupt("return",(a=p.sent).default.apply(a,s));case 3:case"end":return p.stop()}},n)}));function v(){return y.apply(this,arguments)}return v}()}}}},63057:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},97140:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return A}});var Q=e(90228),W=e.n(Q),he=e(87999),I=e.n(he),oe=e(69854),S=e(97204),P=e(40751),M=e(68168),A={"docs-guide-advanced-destructor-demo-0":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h,i,d;return W()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=o.sent,$=L.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return F=o.sent,c=F.Form,t=F.FormItem,l=F.DatePicker,y=F.FormButtonGroup,v=F.Radio,n=F.Submit,o.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=o.sent,s=a.createForm,r=a.onFieldValueChange,o.next=20,Promise.resolve().then(e.bind(e,68168));case 20:return p=o.sent,u=p.createSchemaField,h=p.FormConsumer,i=u({components:{FormItem:t,DatePicker:l,Radio:v}}),d=s({effects:function(){r("visible_destructor",function(b){d.setFieldState("[startDate,endDate]",function(g){g.visible=!!b.value})})}}),o.abrupt("return",{default:function(){return $.createElement(c,{form:d,layout:"vertical"},$.createElement(i,null,$.createElement(i.Boolean,{name:"visible_destructor",title:"Whether to display deconstructed fields",default:!0,enum:[{label:"yes",value:!0},{label:"no",value:!1}],"x-decorator":"FormItem","x-component":"Radio.Group"}),$.createElement(i.String,{name:"undestructor",title:"before deconstruction","x-decorator":"FormItem","x-component":"DatePicker.RangePicker"}),$.createElement(i.String,{name:"[startDate,endDate]",title:"after deconstruction",default:["2020-11-20","2021-12-30"],"x-decorator":"FormItem","x-component":"DatePicker.RangePicker"})),$.createElement("code",null,$.createElement("pre",null,$.createElement(h,null,function(b){return JSON.stringify(b.values,null,2)}))),$.createElement(y,null,$.createElement(n,{onSubmit:console.log},"submit")))}});case 26:case"end":return o.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          title="Whether to display deconstructed fields"
          default={true}
          enum={[
            { label: 'yes', value: true },
            { label: 'no', value: false },
          ]}
          x-decorator="FormItem"
          x-component="Radio.Group"
        />
        <SchemaField.String
          name="undestructor"
          title="before deconstruction"
          x-decorator="FormItem"
          x-component="DatePicker.RangePicker"
        />
        <SchemaField.String
          name="[startDate,endDate]"
          title="after deconstruction"
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
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor",context:{react:x||(x=e.t(oe,2)),"@next-formily/antd":S,"@next-formily/core":P,"@next-formily/react":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}},"docs-guide-advanced-destructor-demo-1":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h,i,d;return W()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=o.sent,$=L.default,o.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return F=o.sent,c=F.Form,t=F.FormItem,l=F.DatePicker,y=F.FormButtonGroup,v=F.Radio,n=F.Submit,o.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=o.sent,s=a.createForm,o.next=19,Promise.resolve().then(e.bind(e,68168));case 19:return r=o.sent,p=r.createSchemaField,u=r.FormConsumer,h=p({components:{FormItem:t,DatePicker:l,Radio:v}}),i=s(),d={type:"object",properties:{visible_destructor:{type:"boolean",title:"Whether to display deconstructed fields",default:!0,enum:[{label:"yes",value:!0},{label:"no",value:!1}],"x-decorator":"FormItem","x-component":"Radio.Group"},undestructor:{type:"string",title:"before deconstruction","x-decorator":"FormItem","x-component":"DatePicker.RangePicker"},"[startDate,endDate]":{type:"string",title:"after deconstruction",default:["2020-11-20","2021-12-30"],"x-decorator":"FormItem","x-component":"DatePicker.RangePicker","x-reactions":{dependencies:["visible_destructor"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}}}},o.abrupt("return",{default:function(){return $.createElement(c,{form:i,layout:"vertical"},$.createElement(h,{schema:d}),$.createElement("code",null,$.createElement("pre",null,$.createElement(u,null,function(b){return JSON.stringify(b.values,null,2)}))),$.createElement(y,null,$.createElement(n,{onSubmit:console.log},"submit")))}});case 26:case"end":return o.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Whether to display deconstructed fields',
      default: true,
      enum: [
        { label: 'yes', value: true },
        { label: 'no', value: false },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
    },
    undestructor: {
      type: 'string',
      title: 'before deconstruction',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
    },
    '[startDate,endDate]': {
      type: 'string',
      title: 'after deconstruction',
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
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor",context:{react:x||(x=e.t(oe,2)),"@next-formily/antd":S,"@next-formily/core":P,"@next-formily/react":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}},"docs-guide-advanced-destructor-demo-2":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h;return W()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=d.sent,$=L.default,d.next=6,Promise.resolve().then(e.bind(e,97204));case 6:return F=d.sent,c=F.Form,t=F.FormItem,l=F.DatePicker,y=F.FormButtonGroup,v=F.Radio,n=F.Submit,d.next=15,Promise.resolve().then(e.bind(e,40751));case 15:return a=d.sent,s=a.createForm,d.next=19,Promise.resolve().then(e.bind(e,68168));case 19:return r=d.sent,p=r.Field,u=r.FormConsumer,h=s(),d.abrupt("return",{default:function(){return $.createElement(c,{form:h,layout:"vertical"},$.createElement(p,{name:"visible_destructor",title:"Whether to display deconstructed fields",initialValue:!0,dataSource:[{label:"yes",value:!0},{label:"no",value:!1}],decorator:[t],component:[v.Group]}),$.createElement(p,{name:"undestructor",title:"before deconstruction",decorator:[t],component:[l.RangePicker]}),$.createElement(p,{name:"[startDate,endDate]",title:"after deconstruction",initialValue:["2020-11-20","2021-12-30"],decorator:[t],component:[l.RangePicker],reactions:function(m){m.visible=!!m.query("visible_destructor").value()}}),$.createElement("code",null,$.createElement("pre",null,$.createElement(u,null,function(o){return JSON.stringify(o.values,null,2)}))),$.createElement(y,null,$.createElement(n,{onSubmit:console.log},"submit")))}});case 24:case"end":return d.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-destructor-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="Whether to display deconstructed fields"
        initialValue={true}
        dataSource={[
          { label: 'yes', value: true },
          { label: 'no', value: false },
        ]}
        decorator={[FormItem]}
        component={[Radio.Group]}
      />
      <Field
        name="undestructor"
        title="before deconstruction"
        decorator={[FormItem]}
        component={[DatePicker.RangePicker]}
      />
      <Field
        name="[startDate,endDate]"
        title="after deconstruction"
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
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/destructor",context:{react:x||(x=e.t(oe,2)),"@next-formily/antd":S,"@next-formily/core":P,"@next-formily/react":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}}}},69093:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},70517:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return $}});var Q=e(36075),W=e.n(Q),he=e(90228),I=e.n(he),oe=e(87999),S=e.n(oe),P=e(69854),M=e(40751),A=e(68168),N=e(97204),L=e(38417),$={"docs-guide-advanced-linkages-demo-0":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldValueChange,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("select",function(g){d.setFieldState("input",function(C){C.display=g.value})})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('input', (state) => {
        //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-1":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input",fulfill:{state:{display:"{{$self.value}}"}}}}),t.createElement(d.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
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
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-2":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldValueChange,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("select",function(g){d.setFieldState("*(input1,input2)",function(C){C.display=g.value})})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"controlled target","x-component":"Input","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('*(input1,input2)', (state) => {
        //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-3":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"*(input1,input2)",fulfill:{state:{display:"{{$self.value}}"}}}}),t.createElement(d.String,{name:"input1",title:"controller","x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input2",title:"controller","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
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
        title="controller"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="controller"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-4":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldValueChange,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.NumberPicker,d=y({effects:function(){v("dim_1",function(g){var C=g.value,B=g.query("dim_2").value();d.setFieldState("result",function(V){V.value=C*B})}),v("dim_2",function(g){var C=g.query("dim_1").value(),B=g.value||0;d.setFieldState("result",function(V){V.value=C*B})})}}),f=a({components:{FormItem:u,Input:h,NumberPicker:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.Number,{name:"dim_1",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"dim_2",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"result",title:"controlled target","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-5":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,i=y(),d=n({components:{FormItem:p,Input:u,NumberPicker:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"dim_1",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_2"],target:"result",fulfill:{state:{value:"{{$self.value * $deps[0]}}"}}}}),t.createElement(d.Number,{name:"dim_2",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_1"],target:"result",fulfill:{state:{value:"{{$self.value * $deps[0]}}"}}}}),t.createElement(d.Number,{name:"result",title:"controller","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
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
        title="controller"
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
        title="controller"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-6":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldValueChange,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("select",function(g){d.setFieldState("input1",function(C){C.visible=!!g.value})}),v("input1",function(g){d.setFieldState("input2",function(C){C.visible=!!g.value})})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:!1,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"controlled target",default:!0,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, onFieldValueChange } from '@next-formily/core'
import { createSchemaField, FormConsumer } from '@next-formily/react'
import { Form, FormItem, Input, Select } from '@next-formily/antd'

const form = createForm({
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('input1', (state) => {
        //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
        state.visible = !!field.value
      })
    })
    onFieldValueChange('input1', (field) => {
      form.setFieldState('input2', (state) => {
        //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
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
        title="controller"
        default={false}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
        default={true}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-7":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:!1,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input1",fulfill:{state:{visible:"{{!!$self.value}}"}}}}),t.createElement(d.String,{name:"input1",title:"controlled target",default:!0,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input2",fulfill:{state:{visible:"{{!!$self.value}}"}}}}),t.createElement(d.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={false}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
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
        title="controlled target"
        default={true}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
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
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-8":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.onFieldInputValueChange,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,s=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,h=r.NumberPicker,i=y({effects:function(){v("total",function(b){b.value!==void 0&&(i.setFieldState("count",function(g){var C=i.values.price;C&&(g.value=b.value/C)}),i.setFieldState("price",function(g){var C=i.values.count;C&&(g.value=b.value/C)}))}),v("price",function(b){i.setFieldState("total",function(g){var C=i.values.count;C!==void 0&&(g.value=b.value*C)})}),v("count",function(b){i.setFieldState("total",function(g){var C=i.values.price;C!==void 0&&(g.value=b.value*C)})})}}),d=a({components:{FormItem:u,NumberPicker:h}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"total",title:"total price","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"count",title:"quantity","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"price",title:"unit price","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="total price"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="count"
        title="quantity"
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="price"
        title="unit price"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-9":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,a=v.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.NumberPicker,h=y(),i=n({components:{FormItem:p,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:h},t.createElement(i,null,t.createElement(i.Number,{name:"total",title:"total price","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":[{target:"count",effects:["onFieldInputValueChange"],dependencies:["price"],fulfill:{state:{value:"{{$deps[0] ? $self.value / $deps[0] : $target.value}}"}}},{target:"price",effects:["onFieldInputValueChange"],dependencies:["count"],fulfill:{state:{value:"{{$deps[0] ? $self.value / $deps[0] : $target.value}}"}}}]}),t.createElement(i.Number,{name:"count",title:"quantity","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{target:"total",effects:["onFieldInputValueChange"],dependencies:["price"],fulfill:{state:{value:"{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}"}}}}),t.createElement(i.Number,{name:"price",title:"unit price","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{target:"total",effects:["onFieldInputValueChange"],dependencies:["count"],fulfill:{state:{value:"{{$deps[0] !== undefined ? $self.value * $deps[0] : $target.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(h.values,null,2)))}))}});case 22:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="total price"
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
        title="quantity"
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
        title="unit price"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-10":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.onFieldValueChange,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,s=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,h=r.Input,o.t0=W(),o.next=23,Promise.resolve().then(e.bind(e,38417));case 23:return o.t1=o.sent,(0,o.t0)(o.t1),i=y({effects:function(){v("color",function(b){b.setComponentProps({style:{backgroundColor:b.value}})})}}),d=a({components:{FormItem:u,Input:h}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"color",default:"#FFFFFF",title:"color","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 28:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="color"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{"./input.less":L,react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-11":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,a=v.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.Input,f.t0=W(),f.next=22,Promise.resolve().then(e.bind(e,38417));case 22:return f.t1=f.sent,(0,f.t0)(f.t1),h=y(),i=n({components:{FormItem:p,Input:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:h},t.createElement(i,null,t.createElement(i.Number,{name:"color",default:"#FFFFFF",title:"color","x-component":"Input","x-decorator":"FormItem","x-reactions":{target:"color",fulfill:{state:{"component[1].style.backgroundColor":"{{$self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(h.values,null,2)))}))}});case 27:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="color"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          target: 'color',
          fulfill: {
            state: {
              'component[1].style.backgroundColor': '{{$self.value}}',
            },
            //The following usage is also possible
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{"./input.less":L,react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-12":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldValueChange,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("select",function(g){g.loading=!0,setTimeout(function(){g.loading=!1,d.setFieldState("input",function(C){C.display=g.value})},1e3)})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-13":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h},scope:{asyncVisible:function(b,g){b.loading=!0,setTimeout(function(){b.loading=!1,i.setFieldState(g,function(C){C.display=b.value})},1e3)}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{target:"input",effects:["onFieldInit","onFieldValueChange"],fulfill:{run:"asyncVisible($self,$target)"}}}),t.createElement(d.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-13",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          //For the initial linkage, if the field cannot be found, setFieldState will push the update into the update queue until the field appears before performing the operation
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
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
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-14":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldReact,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("input",function(g){g.display=g.query("select").value()})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-14",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-15":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-15",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-16":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldReact,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("*(input1,input2)",function(g){g.display=g.query("select").value()})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"controlled target","x-component":"Input","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-16",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-17":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input1",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}}),t.createElement(d.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{display:"{{$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-17",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
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
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-18":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldReact,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.NumberPicker,d=y({effects:function(){v("result",function(g){g.value=g.query("dim_1").value()*g.query("dim_2").value()})}}),f=a({components:{FormItem:u,Input:h,NumberPicker:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.Number,{name:"dim_1",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"dim_2",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(f.Number,{name:"result",title:"controlled target","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-18",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-19":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,i=y(),d=n({components:{FormItem:p,Input:u,NumberPicker:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"dim_1",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"dim_2",title:"controller",default:0,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"result",title:"controlled target","x-pattern":"readPretty","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:["dim_1","dim_2"],fulfill:{state:{value:"{{$deps[0] * $deps[1]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-19",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="dim_2"
        title="controller"
        default={0}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="result"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-20":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldReact,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("input1",function(g){g.visible=!!g.query("select").value()}),v("input2",function(g){g.visible=!!g.query("input1").value()})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:!1,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input1",title:"controlled target",default:!0,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-20",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={false}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
        default={true}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input2"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-21":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:!1,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input1",title:"controlled target",default:!0,enum:[{label:"display",value:!0},{label:"hide",value:!1}],"x-component":"Select","x-decorator":"FormItem","x-reactions":{dependencies:["select"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}}),t.createElement(d.String,{name:"input2",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-reactions":{dependencies:["input1"],fulfill:{state:{visible:"{{!!$deps[0]}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-21",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default={false}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input1"
        title="controlled target"
        default={true}
        enum={[
          { label: 'display', value: true },
          { label: 'hide', value: false },
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
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-22":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.onFieldReact,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,s=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,h=r.NumberPicker,i=y({effects:function(){v("total",function(b){var g=b.query("count").value(),C=b.query("price").value();g!==void 0&&C!==void 0&&(b.value=g*C)}),v("price",function(b){var g=b.query("total").value(),C=b.query("count").value();g!==void 0&&C>0&&(b.value=g/C)}),v("count",function(b){var g=b.query("total").value(),C=b.query("price").value();g!==void 0&&C>0&&(b.value=g/C)})}}),d=a({components:{FormItem:u,NumberPicker:h}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-22",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-23":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,a=v.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.NumberPicker,h=y(),i=n({components:{FormItem:p,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:h},t.createElement(i,null,t.createElement(i.Number,{name:"total",title:"\u603B\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".count",".price"],fulfill:{state:{value:"{{$deps[0] !== undefined && $deps[1] !== undefined ? $deps[0] * $deps[1] : $self.value}}"}}}}),t.createElement(i.Number,{name:"count",title:"\u6570\u91CF","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".total",".price"],fulfill:{state:{value:"{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}"}}}}),t.createElement(i.Number,{name:"price",title:"\u5355\u4EF7","x-component":"NumberPicker","x-decorator":"FormItem","x-reactions":{dependencies:[".total",".count"],fulfill:{state:{value:"{{ $deps[1] > 0 ? $deps[0] / $deps[1] : $self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(h.values,null,2)))}))}});case 22:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-23",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-24":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.onFieldReact,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,s=n.FormConsumer,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,h=r.Input,o.t0=W(),o.next=23,Promise.resolve().then(e.bind(e,38417));case 23:return o.t1=o.sent,(0,o.t0)(o.t1),i=y({effects:function(){v("color",function(b){b.setComponentProps({style:{backgroundColor:b.value}})})}}),d=a({components:{FormItem:u,Input:h}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:i},t.createElement(d,null,t.createElement(d.Number,{name:"color",default:"#FFFFFF",title:"color","x-component":"Input","x-decorator":"FormItem"})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 28:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-24",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="color"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{"./input.less":L,react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-25":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,a=v.FormConsumer,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.Input,f.t0=W(),f.next=22,Promise.resolve().then(e.bind(e,38417));case 22:return f.t1=f.sent,(0,f.t0)(f.t1),h=y(),i=n({components:{FormItem:p,Input:u}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:h},t.createElement(i,null,t.createElement(i.Number,{name:"color",default:"#FFFFFF",title:"color","x-component":"Input","x-decorator":"FormItem","x-reactions":{fulfill:{state:{"component[1].style.backgroundColor":"{{$self.value}}"}}}})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(h.values,null,2)))}))}});case 27:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-25",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="color"
        x-component="Input"
        x-decorator="FormItem"
        x-reactions={{
          fulfill: {
            state: {
              'component[1].style.backgroundColor': '{{$self.value}}',
            },
            //The following usage is also possible
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"./input.less":{type:"FILE",value:e(98425).Z}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{"./input.less":L,react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,"/home/runner/work/NextFormily/NextFormily/docs/guide/advanced/input.less":L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-26":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.onFieldReact,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,s=n.FormConsumer,m.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=m.sent,p=r.Form,u=r.FormItem,h=r.Input,i=r.Select,d=y({effects:function(){v("input",function(g){var C=g.query("select").take();if(C){var B=C.value;C.loading=!0,B&&setTimeout(function(){C.loading=!1,g.display=B},1e3)}})}}),f=a({components:{FormItem:u,Input:h,Select:i}}),m.abrupt("return",{default:function(){return t.createElement(p,{form:d},t.createElement(f,null,t.createElement(f.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(f.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-visible":!1})),t.createElement(s,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(d.values,null,2)))}))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-26",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-linkages-demo-27":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,a=v.FormConsumer,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.Select,i=y(),d=n({components:{FormItem:p,Input:u,Select:h},scope:{asyncVisible:function(b){var g=b.query("select").take();if(g){var C=g.value;g.loading=!0,C&&setTimeout(function(){g.loading=!1,b.display=C},1e3)}}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i},t.createElement(d,null,t.createElement(d.String,{name:"select",title:"controller",default:"visible",enum:[{label:"display",value:"visible"},{label:"hide",value:"none"},{label:"Hidden-reserved value",value:"hidden"}],"x-component":"Select","x-decorator":"FormItem"}),t.createElement(d.String,{name:"input",title:"controlled target","x-component":"Input","x-decorator":"FormItem","x-visible":!1,"x-reactions":"{{asyncVisible}}"})),t.createElement(a,null,function(){return t.createElement("code",null,t.createElement("pre",null,JSON.stringify(i.values,null,2)))}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-linkages-demo-27",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="controller"
        default="visible"
        enum={[
          { label: 'display', value: 'visible' },
          { label: 'hide', value: 'none' },
          { label: 'Hidden-reserved value', value: 'hidden' },
        ]}
        x-component="Select"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="input"
        title="controlled target"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/linkages",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}}}},48464:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return $}});var Q=e(82092),W=e.n(Q),he=e(90228),I=e.n(he),oe=e(87999),S=e.n(oe),P=e(69854),M=e(40751),A=e(68168),N=e(97204),L=e(70119),$={"docs-guide-advanced-validate-demo-0":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,s=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,h=y(),i=n({components:{Input:p,FormItem:r,NumberPicker:u}}),f.abrupt("return",{default:function(){return t.createElement(s,{form:h,labelCol:6,wrapperCol:10},t.createElement(i,null,t.createElement(i.String,{name:"required_1",title:"Required",required:!0,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"required_2",title:"Required","x-validator":{required:!0},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"required_3",title:"Required","x-validator":[{required:!0}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_1",title:"Maximum value (>5 error)",maximum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_2",title:"Maximum value (>5 error)","x-validator":{maximum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_3",title:"Maximum value (>5 error)","x-validator":[{maximum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_4",title:"Maximum value (>=5 error)",exclusiveMaximum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_5",title:"Maximum value (>=5 error)","x-validator":{exclusiveMaximum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"max_6",title:"Maximum value (>=5 error)","x-validator":[{exclusiveMaximum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_1",title:"Minimum value (<5 error)",minimum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_2",title:"Minimum value (<5 error)","x-validator":{minimum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_3",title:"Minimum value (<5 error)","x-validator":[{minimum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_4",title:"Minimum value (<=5 error)",exclusiveMinimum:5,"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_5",title:"Minimum value (<=5 error)","x-validator":{exclusiveMinimum:5},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"min_6",title:"Minimum value (<=5 error)","x-validator":[{exclusiveMinimum:5}],"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(i.String,{name:"length_1",title:"Length is 5","x-validator":{len:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"length_2",title:"Length is 5","x-validator":[{len:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_1",title:"Maximum length is 5",maxLength:5,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_2",title:"Maximum length is 5","x-validator":{max:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_3",title:"Maximum length is 5","x-validator":[{max:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_4",title:"Minimum length is 5",minLength:5,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_5",title:"Minimum length is 5","x-validator":{min:5},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"maxlength_6",title:"Minimum length is 5","x-validator":[{min:5}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"whitespace",title:"Exclude pure whitespace characters","x-validator":[{whitespace:!0}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"enum",title:"Enumeration match","x-validator":[{enum:["1","2","3"]}],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"const",title:"Constant match",const:"123","x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"multipleOf",title:"Divisible match",multipleOf:2,"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 22:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="Required"
        required
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_2"
        title="Required"
        x-validator={{ required: true }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_3"
        title="Required"
        x-validator={[{ required: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_1"
        title="Maximum value (>5 error)"
        maximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_2"
        title="Maximum value (>5 error)"
        x-validator={{ maximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_3"
        title="Maximum value (>5 error)"
        x-validator={[{ maximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_4"
        title="Maximum value (>=5 error)"
        exclusiveMaximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_5"
        title="Maximum value (>=5 error)"
        x-validator={{ exclusiveMaximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_6"
        title="Maximum value (>=5 error)"
        x-validator={[{ exclusiveMaximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.Number
        name="min_1"
        title="Minimum value (<5 error)"
        minimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_2"
        title="Minimum value (<5 error)"
        x-validator={{ minimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_3"
        title="Minimum value (<5 error)"
        x-validator={[{ minimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_4"
        title="Minimum value (<=5 error)"
        exclusiveMinimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_5"
        title="Minimum value (<=5 error)"
        x-validator={{ exclusiveMinimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_6"
        title="Minimum value (<=5 error)"
        x-validator={[{ exclusiveMinimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="length_1"
        title="Length is 5"
        x-validator={{ len: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="length_2"
        title="Length is 5"
        x-validator={[{ len: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_1"
        title="Maximum length is 5"
        maxLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_2"
        title="Maximum length is 5"
        x-validator={{ max: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_3"
        title="Maximum length is 5"
        x-validator={[{ max: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_4"
        title="Minimum length is 5"
        minLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_5"
        title="Minimum length is 5"
        x-validator={{ min: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_6"
        title="Minimum length is 5"
        x-validator={[{ min: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="whitespace"
        title="Exclude pure whitespace characters"
        x-validator={[{ whitespace: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="enum"
        title="Enumeration match"
        x-validator={[{ enum: ['1', '2', '3'] }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="const"
        title="Constant match"
        const="123"
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="multipleOf"
        title="Divisible match"
        multipleOf={2}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-1":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,o.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=o.sent,s=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,h=y(),i=n({components:{Input:p,FormItem:r,NumberPicker:u}}),d={type:"object",properties:{required_1:{name:"required_1",title:"Required",type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input"},required_2:{name:"required_2",title:"Required",type:"string","x-validator":{required:!0},"x-decorator":"FormItem","x-component":"Input"},required_3:{name:"required_3",title:"Required",type:"string","x-validator":[{required:!0}],"x-decorator":"FormItem","x-component":"Input"},max_1:{name:"max_1",title:"Maximum value (>5 error)",type:"number",maximum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},max_2:{name:"max_2",title:"Maximum value (>5 error)",type:"number","x-validator":{maximum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},max_3:{name:"max_3",title:"Maximum value (>5 error)",type:"number","x-validator":[{maximum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},max_4:{name:"max_4",title:"Maximum value (>=5 error))",type:"number",exclusiveMaximum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},max_5:{name:"max_5",title:"Maximum value (>=5 error))",type:"number","x-validator":{exclusiveMaximum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},max_6:{name:"max_6",title:"Maximum value (>=5 error))",type:"number","x-validator":[{exclusiveMaximum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},min_1:{name:"min_1",title:"Minimum value (<5 error))",type:"number",minimum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},min_2:{name:"min_2",title:"Minimum value (<5 error))",type:"number","x-validator":{minimum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},min_3:{name:"min_3",title:"Minimum value (<5 error))",type:"string","x-validator":[{minimum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},min_4:{name:"min_4",title:"Minimum value (<=5 error))",type:"number",exclusiveMinimum:5,"x-decorator":"FormItem","x-component":"NumberPicker"},min_5:{name:"min_5",title:"Minimum value (<=5 error))",type:"number","x-validator":{exclusiveMinimum:5},"x-decorator":"FormItem","x-component":"NumberPicker"},min_6:{name:"min_6",title:"Minimum value (<=5 error))",type:"number","x-validator":[{exclusiveMinimum:5}],"x-decorator":"FormItem","x-component":"NumberPicker"},length_1:{name:"length_1",title:"Length is 5",type:"string","x-validator":{len:5},"x-decorator":"FormItem","x-component":"Input"},length_2:{name:"length_2",title:"Length is 5",type:"string","x-validator":[{len:5}],"x-decorator":"FormItem","x-component":"Input"},maxlength_1:{name:"maxlength_1",title:"Maximum length is 5",type:"string",maxLength:5,"x-decorator":"FormItem","x-component":"Input"},maxlength_2:{name:"maxlength_2",title:"Maximum length is 5",type:"string","x-validator":{max:5},"x-decorator":"FormItem","x-component":"Input"},maxlength_3:{name:"maxlength_3",title:"Maximum length is 5",type:"string","x-validator":[{max:5}],"x-decorator":"FormItem","x-component":"Input"},minlength_1:{name:"minlength_1",title:"Minimum length is 5",type:"string",minLength:5,"x-decorator":"FormItem","x-component":"Input"},minlength_2:{name:"minlength_2",title:"Minimum length is 5",type:"string","x-validator":{min:5},"x-decorator":"FormItem","x-component":"Input"},minlength_3:{name:"minlength_3",title:"Minimum length is 5",type:"string","x-validator":[{min:5}],"x-decorator":"FormItem","x-component":"Input"},whitespace:{name:"whitespace",title:"Exclude pure whitespace characters",type:"string","x-validator":[{whitespace:!0}],"x-decorator":"FormItem","x-component":"Input"},enum:{name:"enum",title:"Enumeration match",type:"string","x-validator":[{enum:["1","2","3"]}],"x-decorator":"FormItem","x-component":"Input"},const:{name:"const",title:"Constant match",type:"string",const:"123","x-decorator":"FormItem","x-component":"Input"},multipleOf:{name:"multipleOf",title:"Divisible match",type:"string",multipleOf:2,"x-decorator":"FormItem","x-component":"NumberPicker"}}},o.abrupt("return",{default:function(){return t.createElement(s,{form:h,labelCol:6,wrapperCol:10},t.createElement(i,{schema:d}))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Required',
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_2: {
      name: 'required_2',
      title: 'Required',
      type: 'string',
      'x-validator': {
        required: true,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    required_3: {
      name: 'required_3',
      title: 'Required',
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
      title: 'Maximum value (>5 error)',
      type: 'number',
      maximum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_2: {
      name: 'max_2',
      title: 'Maximum value (>5 error)',
      type: 'number',
      'x-validator': {
        maximum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_3: {
      name: 'max_3',
      title: 'Maximum value (>5 error)',
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
      title: 'Maximum value (>=5 error))',
      type: 'number',
      exclusiveMaximum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_5: {
      name: 'max_5',
      title: 'Maximum value (>=5 error))',
      type: 'number',
      'x-validator': {
        exclusiveMaximum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    max_6: {
      name: 'max_6',
      title: 'Maximum value (>=5 error))',
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
      title: 'Minimum value (<5 error))',
      type: 'number',
      minimum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_2: {
      name: 'min_2',
      title: 'Minimum value (<5 error))',
      type: 'number',
      'x-validator': {
        minimum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_3: {
      name: 'min_3',
      title: 'Minimum value (<5 error))',
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
      title: 'Minimum value (<=5 error))',
      type: 'number',
      exclusiveMinimum: 5,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_5: {
      name: 'min_5',
      title: 'Minimum value (<=5 error))',
      type: 'number',
      'x-validator': {
        exclusiveMinimum: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    min_6: {
      name: 'min_6',
      title: 'Minimum value (<=5 error))',
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
      title: 'Length is 5',
      type: 'string',
      'x-validator': {
        len: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    length_2: {
      name: 'length_2',
      title: 'Length is 5',
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
      title: 'Maximum length is 5',
      type: 'string',
      maxLength: 5,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    maxlength_2: {
      name: 'maxlength_2',
      title: 'Maximum length is 5',
      type: 'string',
      'x-validator': {
        max: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    maxlength_3: {
      name: 'maxlength_3',
      title: 'Maximum length is 5',
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
      title: 'Minimum length is 5',
      type: 'string',
      minLength: 5,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    minlength_2: {
      name: 'minlength_2',
      title: 'Minimum length is 5',
      type: 'string',
      'x-validator': {
        min: 5,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    minlength_3: {
      name: 'minlength_3',
      title: 'Minimum length is 5',
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
      title: 'Exclude pure whitespace characters',
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
      title: 'Enumeration match',
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
      title: 'Constant match',
      type: 'string',
      const: '123',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    multipleOf: {
      name: 'multipleOf',
      title: 'Divisible match',
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-2":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=d.sent,t=c.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,y=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=d.sent,n=v.Field,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,s=a.Form,r=a.FormItem,p=a.Input,u=a.NumberPicker,h=y(),d.abrupt("return",{default:function(){return t.createElement(s,{form:h,labelCol:6,wrapperCol:10},t.createElement(n,{name:"required_1",title:"Required",required:!0,component:[p],decorator:[r]}),t.createElement(n,{name:"required_2",title:"Required",validator:{required:!0},component:[p],decorator:[r]}),t.createElement(n,{name:"required_3",title:"Required",validator:[{required:!0}],component:[p],decorator:[r]}),t.createElement(n,{name:"max_1",title:"Maximum value (>5 error)",validator:{maximum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"max_2",title:"Maximum value (>5 error)",validator:[{maximum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"max_3",title:"Maximum value (>=5 error)",validator:{exclusiveMaximum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"max_4",title:"Maximum value (>=5 error)",validator:[{exclusiveMaximum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"min_1",title:"Minimum value (<5 error)",validator:{minimum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"min_2",title:"Minimum value (<5 error)",validator:[{minimum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"min_3",title:"Minimum value (<=5 error)",validator:{exclusiveMinimum:5},component:[u],decorator:[r]}),t.createElement(n,{name:"min_4",title:"Minimum value (<=5 error)",validator:[{exclusiveMinimum:5}],component:[u],decorator:[r]}),t.createElement(n,{name:"length_1",title:"Length is 5",validator:{len:5},component:[p],decorator:[r]}),t.createElement(n,{name:"length_2",title:"Length is 5",validator:[{len:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"maxlength_1",title:"Maximum length is 5",validator:{max:5},component:[p],decorator:[r]}),t.createElement(n,{name:"maxlength_2",title:"Maximum length is 5",validator:[{max:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"minlength_1",title:"Minimum length is 5",validator:{min:5},component:[p],decorator:[r]}),t.createElement(n,{name:"minlength_2",title:"Minimum length is 5",validator:[{min:5}],component:[p],decorator:[r]}),t.createElement(n,{name:"whitespace",title:"Exclude pure whitespace characters",validator:[{whitespace:!0}],component:[p],decorator:[r]}))}});case 21:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="required_1"
      title="Required"
      required
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="required_2"
      title="Required"
      validator={{ required: true }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="required_3"
      title="Required"
      validator={[{ required: true }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="max_1"
      title="Maximum value (>5 error)"
      validator={{ maximum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_2"
      title="Maximum value (>5 error)"
      validator={[{ maximum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_3"
      title="Maximum value (>=5 error)"
      validator={{ exclusiveMaximum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="max_4"
      title="Maximum value (>=5 error)"
      validator={[{ exclusiveMaximum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_1"
      title="Minimum value (<5 error)"
      validator={{ minimum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_2"
      title="Minimum value (<5 error)"
      validator={[{ minimum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_3"
      title="Minimum value (<=5 error)"
      validator={{ exclusiveMinimum: 5 }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
    <Field
      name="min_4"
      title="Minimum value (<=5 error)"
      validator={[{ exclusiveMinimum: 5 }]}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />

    <Field
      name="length_1"
      title="Length is 5"
      validator={{ len: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="length_2"
      title="Length is 5"
      validator={[{ len: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="maxlength_1"
      title="Maximum length is 5"
      validator={{ max: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="maxlength_2"
      title="Maximum length is 5"
      validator={[{ max: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="minlength_1"
      title="Minimum length is 5"
      validator={{ min: 5 }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="minlength_2"
      title="Minimum length is 5"
      validator={[{ min: 5 }]}
      component={[Input]}
      decorator={[FormItem]}
    />

    <Field
      name="whitespace"
      title="Exclude pure whitespace characters"
      validator={[{ whitespace: true }]}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-3":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,l=c.Fragment,m.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return y=m.sent,v=y.createForm,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,m.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=m.sent,r=s.Form,p=s.FormItem,u=s.Input,h=v(),i=a({components:{Input:u,FormItem:p}}),d=function(g,C){return t.createElement(l,{key:C},t.createElement(i.String,{name:"".concat(g,"_1"),title:"".concat(g," format"),format:g,required:!0,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"".concat(g,"_2"),title:"".concat(g," format"),required:!0,"x-validator":g,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"".concat(g,"_3"),title:"".concat(g," format"),required:!0,"x-validator":{format:g},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"".concat(g,"_4"),title:"".concat(g," format"),required:!0,"x-validator":[g],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"".concat(g,"_5"),title:"".concat(g," format"),required:!0,"x-validator":[{format:g}],"x-component":"Input","x-decorator":"FormItem"}))},f=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],m.abrupt("return",{default:function(){return t.createElement(r,{form:h,labelCol:6,wrapperCol:10},t.createElement(i,null,f.map(d)))}});case 24:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { Fragment } from 'react'
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
        title={\`\${format} format\`}
        format={format}
        required
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_2\`}
        title={\`\${format} format\`}
        required
        x-validator={format}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_3\`}
        title={\`\${format} format\`}
        required
        x-validator={{ format }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_4\`}
        title={\`\${format} format\`}
        required
        x-validator={[format]}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name={\`\${format}_5\`}
        title={\`\${format} format\`}
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-4":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,o.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=o.sent,n=v.createSchemaField,o.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=o.sent,s=a.Form,r=a.FormItem,p=a.Input,u=y(),h={type:"object",properties:{}},i=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],i.forEach(function(m){Object.assign(h.properties,W()(W()(W()(W()(W()({},"".concat(m,"_1"),{title:"".concat(m," format"),type:"string",required:!0,format:m,"x-decorator":"FormItem","x-component":"Input"}),"".concat(m,"_2"),{title:"".concat(m," format"),type:"string",required:!0,"x-validator":m,"x-decorator":"FormItem","x-component":"Input"}),"".concat(m,"_3"),{title:"".concat(m," format"),type:"string",required:!0,"x-validator":{format:m},"x-decorator":"FormItem","x-component":"Input"}),"".concat(m,"_4"),{title:"".concat(m," format"),type:"string",required:!0,"x-validator":[m],"x-decorator":"FormItem","x-component":"Input"}),"".concat(m,"_5"),{title:"".concat(m," format"),type:"string",required:!0,"x-validator":[{format:m}],"x-decorator":"FormItem","x-component":"Input"}))}),d=n({components:{Input:p,FormItem:r}}),o.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(d,{schema:h}))}});case 24:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: \`\${key} format\`,
      type: 'string',
      required: true,
      format: key,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_2\`]: {
      title: \`\${key} format\`,
      type: 'string',
      required: true,
      'x-validator': key,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_3\`]: {
      title: \`\${key} format\`,
      type: 'string',
      required: true,
      'x-validator': {
        format: key,
      },
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    [\`\${key}_4\`]: {
      title: \`\${key} format\`,
      type: 'string',
      required: true,
      'x-validator': [key],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },

    [\`\${key}_5\`]: {
      title: \`\${key} format\`,
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-5":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,l=c.Fragment,o.next=7,Promise.resolve().then(e.bind(e,40751));case 7:return y=o.sent,v=y.createForm,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.Field,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=v(),i=function(b,g){return t.createElement(l,{key:g},t.createElement(a,{name:"".concat(b,"_1"),title:"".concat(b," format"),required:!0,validator:b,component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(b,"_2"),title:"".concat(b," format"),required:!0,validator:{format:b},component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(b,"_3"),title:"".concat(b," format"),required:!0,validator:[b],component:[u],decorator:[p]}),t.createElement(a,{name:"".concat(b,"_4"),title:"".concat(b," format"),required:!0,validator:[{format:b}],component:[u],decorator:[p]}))},d=["url","email","phone","ipv6","ipv4","number","integer","qq","idcard","money","zh","date","zip"],o.abrupt("return",{default:function(){return t.createElement(r,{form:h,labelCol:6,wrapperCol:10},d.map(i))}});case 23:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { Fragment } from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

const renderFormat = (format: string, key: number) => {
  return (
    <Fragment key={key}>
      <Field
        name={\`\${format}_1\`}
        title={\`\${format} format\`}
        required
        validator={format}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_2\`}
        title={\`\${format} format\`}
        required
        validator={{ format }}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_3\`}
        title={\`\${format} format\`}
        required
        validator={[format]}
        component={[Input]}
        decorator={[FormItem]}
      />
      <Field
        name={\`\${format}_4\`}
        title={\`\${format} format\`}
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-6":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.registerValidateRules,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,i=y(),d=a({components:{Input:u,FormItem:p,NumberPicker:h}}),v({global_1:function(b){return b&&b!=="123"?"error\u274E":""},global_2:function(b,g){return b&&b!=="123"?g.message:""},global_3:function(b){return b?b==="123":""},global_4:function(b){if(!b)return"";if(b<10)return{type:"error",message:"The value cannot be less than 10"};if(b<100)return{type:"warning",message:"The value is within 100"};if(b<1e3)return{type:"success",message:"The value is greater than 100 and less than 1000"}}}),o.abrupt("return",{default:function(){return t.createElement(r,{form:i,labelCol:6,wrapperCol:10},t.createElement(d,null,t.createElement(d.String,{name:"global_style_1",title:"Global registration style",required:!0,"x-validator":{global_1:!0},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"global_style_2",title:"Global registration style",required:!0,"x-validator":{global_2:!0,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"global_style_3",title:"Global registration style",required:!0,"x-validator":{global_3:!0,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"global_style_4",title:"Global registration style",required:!0,"x-validator":{global_4:!0},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_1",title:"Locally defined style",required:!0,"x-validator":function(g){return g&&g!=="123"?"error\u274E":""},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_2",title:"Locally defined style",required:!0,"x-validator":{validator:function(g,C){return g&&g!=="123"?C.message:""},message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.String,{name:"validator_style_3",title:"Locally defined style",required:!0,"x-validator":{validator:function(g){return g?g==="123":""},message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(d.Number,{name:"validator_style_4",title:"Locally defined style",required:!0,"x-validator":function(g){if(!g)return"";if(g<10)return{type:"error",message:"The value cannot be less than 10"};if(g<100)return{type:"warning",message:"The value is within 100"};if(g<1e3)return{type:"success",message:"The value is greater than 100 and less than 1000"}},"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 24:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
    return value !== '123' ? 'error\u274E' : ''
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
        message: 'The value cannot be less than 10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: 'The value is within 100',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: 'The value is greater than 100 and less than 1000',
      }
    }
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="global_style_1"
        title="Global registration style"
        required
        x-validator={{
          global_1: true,
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_2"
        title="Global registration style"
        required
        x-validator={{
          global_2: true,
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_3"
        title="Global registration style"
        required
        x-validator={{
          global_3: true,
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="global_style_4"
        title="Global registration style"
        required
        x-validator={{
          global_4: true,
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="validator_style_1"
        title="Locally defined style"
        required
        x-validator={(value) => {
          if (!value) return ''
          return value !== '123' ? 'error\u274E' : ''
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_2"
        title="Locally defined style"
        required
        x-validator={{
          validator(value, rule) {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          },
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_3"
        title="Locally defined style"
        required
        x-validator={{
          validator(value) {
            if (!value) return ''
            return value === '123'
          },
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="validator_style_4"
        title="Locally defined style"
        required
        x-validator={(value) => {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: 'The value cannot be less than 10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: 'The value is within 100',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: 'The value is greater than 100 and less than 1000',
            }
          }
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-7":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f;return I()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=m.sent,t=c.default,m.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=m.sent,y=l.createForm,v=l.registerValidateRules,m.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=m.sent,a=n.createSchemaField,m.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=m.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,i=y(),d=a({components:{Input:u,FormItem:p,NumberPicker:h}}),v({global_1:function(g){return g&&g!=="123"?"error\u274E":""},global_2:function(g,C){return g&&g!=="123"?C.message:""},global_3:function(g){return g?g==="123":""},global_4:function(g){if(!g)return"";if(g<10)return{type:"error",message:"The value cannot be less than 10"};if(g<100)return{type:"warning",message:"The value is within 100"};if(g<1e3)return{type:"success",message:"The value is greater than 100 and less than 1000"}}}),f={type:"object",properties:{global_style_1:{title:"Global registration style",required:!0,"x-validator":{global_1:!0},"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"Global registration style",required:!0,"x-validator":{global_2:!0,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_3:{title:"Global registration style",required:!0,"x-validator":{global_3:!0,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_4:{title:"Global registration style",required:!0,"x-validator":{global_4:!0},"x-component":"Input","x-decorator":"FormItem"},validator_style_1:{title:"Locally defined style",required:!0,"x-validator":`{{(value)=> {
            if (!value) return ''
            return value !== '123' ? 'error\u274E' : ''
          }}}`,"x-component":"Input","x-decorator":"FormItem"},validator_style_2:{title:"Locally defined style",required:!0,"x-validator":{validator:`{{(value, rule)=> {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          }}}`,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_3:{title:"Locally defined style",required:!0,"x-validator":{validator:`{{(value, rule)=> {
          if (!value) return ''
          return value === '123'
        }}}`,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_4:{title:"Locally defined style",required:!0,"x-validator":`{{(value, rule)=> {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: 'The value cannot be less than 10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: 'The value is within 100',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: 'The value is greater than 100 and less than 1000',
            }
          }
        }}}`,"x-component":"Input","x-decorator":"FormItem"}}},m.abrupt("return",{default:function(){return t.createElement(r,{form:i,labelCol:6,wrapperCol:10},t.createElement(d,{schema:f}))}});case 25:case"end":return m.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
    return value !== '123' ? 'error\u274E' : ''
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
        message: 'The value cannot be less than 10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: 'The value is within 100',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: 'The value is greater than 100 and less than 1000',
      }
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    global_style_1: {
      title: 'Global registration style',
      required: true,
      'x-validator': {
        global_1: true,
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_2: {
      title: 'Global registration style',
      required: true,
      'x-validator': {
        global_2: true,
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_3: {
      title: 'Global registration style',
      required: true,
      'x-validator': {
        global_3: true,
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_4: {
      title: 'Global registration style',
      required: true,
      'x-validator': {
        global_4: true,
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },

    validator_style_1: {
      title: 'Locally defined style',
      required: true,
      'x-validator': \`{{(value)=> {
            if (!value) return ''
            return value !== '123' ? 'error\u274E' : ''
          }}}\`,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_2: {
      title: 'Locally defined style',
      required: true,
      'x-validator': {
        validator: \`{{(value, rule)=> {
            if (!value) return ''
            return value !== '123' ? rule.message : ''
          }}}\`,
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_3: {
      title: 'Locally defined style',
      required: true,
      'x-validator': {
        validator: \`{{(value, rule)=> {
          if (!value) return ''
          return value === '123'
        }}}\`,
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_4: {
      title: 'Locally defined style',
      required: true,
      'x-validator': \`{{(value, rule)=> {
          if (!value) return ''
          if (value < 10) {
            return {
              type: 'error',
              message: 'The value cannot be less than 10',
            }
          } else if (value < 100) {
            return {
              type: 'warning',
              message: 'The value is within 100',
            }
          } else if (value < 1000) {
            return {
              type: 'success',
              message: 'The value is greater than 100 and less than 1000',
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-8":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,v=l.registerValidateRules,f.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=f.sent,a=n.Field,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,i=y(),v({global_1:function(m){return m&&m!=="123"?"error\u274E":""},global_2:function(m,b){return m&&m!=="123"?b.message:""},global_3:function(m){return m?m==="123":""},global_4:function(m){if(!m)return"";if(m<10)return{type:"error",message:"The value cannot be less than 10"};if(m<100)return{type:"warning",message:"The value is within 100"};if(m<1e3)return{type:"success",message:"The value is greater than 100 and less than 1000"}}}),f.abrupt("return",{default:function(){return t.createElement(r,{form:i,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"Global registration style",required:!0,validator:{global_1:!0},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"Global registration style",required:!0,validator:{global_2:!0,message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"Global registration style",required:!0,validator:{global_3:!0,message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_4",title:"Global registration style",required:!0,validator:{global_4:!0},component:[h],decorator:[p]}),t.createElement(a,{name:"validator_style_1",title:"Locally defined style",required:!0,validator:function(b){return b&&b!=="123"?"error\u274E":""},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_2",title:"Locally defined style",required:!0,validator:{validator:function(b,g){return b&&b!=="123"?g.message:""},message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_3",title:"Locally defined style",required:!0,validator:{validator:function(b){return b?b==="123":""},message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_4",title:"Locally defined style",required:!0,validator:function(b){if(!b)return"";if(b<10)return{type:"error",message:"The value cannot be less than 10"};if(b<100)return{type:"warning",message:"The value is within 100"};if(b<1e3)return{type:"success",message:"The value is greater than 100 and less than 1000"}},component:[h],decorator:[p]}))}});case 23:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'

const form = createForm()

registerValidateRules({
  global_1(value) {
    if (!value) return ''
    return value !== '123' ? 'error\u274E' : ''
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
        message: 'The value cannot be less than 10',
      }
    } else if (value < 100) {
      return {
        type: 'warning',
        message: 'The value is within 100',
      }
    } else if (value < 1000) {
      return {
        type: 'success',
        message: 'The value is greater than 100 and less than 1000',
      }
    }
  },
})

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="global_style_1"
      title="Global registration style"
      required
      validator={{
        global_1: true,
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_2"
      title="Global registration style"
      required
      validator={{
        global_2: true,
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_3"
      title="Global registration style"
      required
      validator={{
        global_3: true,
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_4"
      title="Global registration style"
      required
      validator={{
        global_4: true,
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />

    <Field
      name="validator_style_1"
      title="Locally defined style"
      required
      validator={(value) => {
        if (!value) return ''
        return value !== '123' ? 'error\u274E' : ''
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_2"
      title="Locally defined style"
      required
      validator={{
        validator(value, rule) {
          if (!value) return ''
          return value !== '123' ? rule.message : ''
        },
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_3"
      title="Locally defined style"
      required
      validator={{
        validator(value) {
          if (!value) return ''
          return value === '123'
        },
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_4"
      title="Locally defined style"
      required
      validator={(value) => {
        if (!value) return ''
        if (value < 10) {
          return {
            type: 'error',
            message: 'The value cannot be less than 10',
          }
        } else if (value < 100) {
          return {
            type: 'warning',
            message: 'The value is within 100',
          }
        } else if (value < 1000) {
          return {
            type: 'success',
            message: 'The value is greater than 100 and less than 1000',
          }
        }
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-9":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f,o,m;return I()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=g.sent,t=c.default,g.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=g.sent,y=l.createForm,v=l.registerValidateRules,g.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=g.sent,a=n.createSchemaField,g.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=g.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,g.next=22,Promise.resolve().then(e.bind(e,70119));case 22:return i=g.sent,d=i.string,f=y(),o=a({components:{Input:u,FormItem:p,NumberPicker:h}}),v({yup:function(){var C=S()(I()().mark(function V(O,j){return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,j.yup().validate(O);case 3:return D.abrupt("return","");case 6:return D.prev=6,D.t0=D.catch(0),D.abrupt("return",D.t0.errors.join(","));case 9:case"end":return D.stop()}},V,null,[[0,6]])}));function B(V,O){return C.apply(this,arguments)}return B}()}),m={type:"object",properties:{global_style_1:{title:"Maximum length is 2","x-validator":[{triggerType:"onBlur",yup:function(){return d().required("required")}},{triggerType:"onBlur",yup:function(){return d().max(2,"Maximum length is 2")}}],"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"email",required:!0,"x-validator":{triggerType:"onBlur",yup:function(){return d().email()}},"x-component":"Input","x-decorator":"FormItem"}}},g.abrupt("return",{default:function(){return t.createElement(r,{form:f,labelCol:6,wrapperCol:10},t.createElement(o,{schema:m}))}});case 29:case"end":return g.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      return '' // Return an empty string when validation is successful
    } catch (err) {
      return err.errors.join(',') // Return the error message when validation fails
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    global_style_1: {
      title: 'Maximum length is 2',
      'x-validator': [
        {
          triggerType: 'onBlur',
          yup: () => string().required('required'),
        },
        {
          triggerType: 'onBlur',
          yup: () => string().max(2, 'Maximum length is 2'),
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},yup:{type:"NPM",value:"1.7.1"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,yup:L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-10":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d,f,o;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=b.sent,t=c.default,b.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=b.sent,y=l.createForm,v=l.registerValidateRules,b.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=b.sent,a=n.Field,b.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=b.sent,r=s.Form,p=s.FormItem,u=s.Input,h=s.NumberPicker,b.next=22,Promise.resolve().then(e.bind(e,70119));case 22:return i=b.sent,d=i.string,f=i.number,o=y(),v({yup:function(){var g=S()(I()().mark(function B(V,O){return I()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.prev=0,R.next=3,O.yup().validate(V);case 3:return R.abrupt("return","");case 6:return R.prev=6,R.t0=R.catch(0),R.abrupt("return",R.t0.errors.join(","));case 9:case"end":return R.stop()}},B,null,[[0,6]])}));function C(B,V){return g.apply(this,arguments)}return C}()}),b.abrupt("return",{default:function(){return t.createElement(r,{form:o,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"email",required:!0,validator:{yup:function(){return d().email()}},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"max 30",required:!0,validator:{yup:function(){return f().max(30)}},component:[h],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"email",required:!0,validator:{yup:function(){return d().email()}},component:[u],decorator:[p]}))}});case 28:case"end":return b.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm, registerValidateRules } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input, NumberPicker } from '@next-formily/antd'
import { string, number } from 'yup'

const form = createForm()

registerValidateRules({
  yup: async (value, rule) => {
    try {
      await rule.yup().validate(value)
      return '' // Return an empty string when validation is successful
    } catch (err) {
      return err.errors.join(',') // Return the error message when validation fails
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
      title="max 30"
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},yup:{type:"NPM",value:"1.7.1"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N,yup:L},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-11":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,v=l.registerValidateFormats,f.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=f.sent,a=n.createSchemaField,f.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=f.sent,r=s.Form,p=s.FormItem,u=s.Input,h=y(),i=a({components:{Input:u,FormItem:p}}),v({custom_format:/123/}),f.abrupt("return",{default:function(){return t.createElement(r,{form:h,labelCol:6,wrapperCol:10},t.createElement(i,null,t.createElement(i.String,{name:"global_style_1",title:"Global registration style",required:!0,"x-validator":{format:"custom_format",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"global_style_2",title:"Global registration style",required:!0,"x-validator":"custom_format","x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"global_style_3",title:"Global registration style",required:!0,"x-validator":["custom_format"],"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.Number,{name:"global_style_4",title:"Global registration style",required:!0,"x-validator":{format:"custom_format",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"validator_style_1",title:"Locally defined style",required:!0,pattern:/123/,"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"validator_style_2",title:"Locally defined style",required:!0,pattern:"123","x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"validator_style_3",title:"Locally defined style",required:!0,"x-validator":{pattern:/123/,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(i.String,{name:"validator_style_4",title:"Locally defined style",required:!0,"x-validator":{pattern:"123",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"})))}});case 23:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="Global registration style"
        required
        x-validator={{
          format: 'custom_format',
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_2"
        title="Global registration style"
        required
        x-validator={'custom_format'}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="global_style_3"
        title="Global registration style"
        required
        x-validator={['custom_format']}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="global_style_4"
        title="Global registration style"
        required
        x-validator={{
          format: 'custom_format',
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="validator_style_1"
        title="Locally defined style"
        required
        pattern={/123/}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_2"
        title="Locally defined style"
        required
        pattern="123"
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_3"
        title="Locally defined style"
        required
        x-validator={{
          pattern: /123/,
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="validator_style_4"
        title="Locally defined style"
        required
        x-validator={{
          pattern: '123',
          message: 'error\u274E',
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-12":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.registerValidateFormats,o.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=o.sent,a=n.createSchemaField,o.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=o.sent,r=s.Form,p=s.FormItem,u=s.Input,h=y(),i=a({components:{Input:u,FormItem:p}}),v({custom_format:/123/}),d={type:"object",properties:{global_style_1:{title:"Global registration style",required:!0,"x-validator":{format:"custom_format",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},global_style_2:{title:"Global registration style",required:!0,"x-validator":"custom_format","x-component":"Input","x-decorator":"FormItem"},global_style_3:{title:"Global registration style",required:!0,"x-validator":["custom_format"],"x-component":"Input","x-decorator":"FormItem"},global_style_4:{title:"Global registration style",required:!0,"x-validator":{format:"custom_format",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_1:{title:"Locally defined style",required:!0,pattern:/123/,"x-component":"Input","x-decorator":"FormItem"},validator_style_2:{title:"Locally defined style",required:!0,pattern:"123","x-component":"Input","x-decorator":"FormItem"},validator_style_3:{title:"Locally defined style",required:!0,"x-validator":{pattern:/123/,message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"},validator_style_4:{title:"Locally defined style",required:!0,"x-validator":{pattern:"123",message:"error\u274E"},"x-component":"Input","x-decorator":"FormItem"}}},o.abrupt("return",{default:function(){return t.createElement(r,{form:h,labelCol:6,wrapperCol:10},t.createElement(i,{schema:d}))}});case 24:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Global registration style',
      required: true,
      'x-validator': {
        format: 'custom_format',
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_2: {
      title: 'Global registration style',
      required: true,
      'x-validator': 'custom_format',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_3: {
      title: 'Global registration style',
      required: true,
      'x-validator': ['custom_format'],
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    global_style_4: {
      title: 'Global registration style',
      required: true,
      'x-validator': {
        format: 'custom_format',
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_1: {
      title: 'Locally defined style',
      required: true,
      pattern: /123/,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_2: {
      title: 'Locally defined style',
      required: true,
      pattern: '123',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_3: {
      title: 'Locally defined style',
      required: true,
      'x-validator': {
        pattern: /123/,
        message: 'error\u274E',
      },
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    validator_style_4: {
      title: 'Locally defined style',
      required: true,
      'x-validator': {
        pattern: '123',
        message: 'error\u274E',
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-13":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=d.sent,t=c.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,y=l.createForm,v=l.registerValidateFormats,d.next=11,Promise.resolve().then(e.bind(e,68168));case 11:return n=d.sent,a=n.Field,d.next=15,Promise.resolve().then(e.bind(e,97204));case 15:return s=d.sent,r=s.Form,p=s.FormItem,u=s.Input,h=y(),v({custom_format:/123/}),d.abrupt("return",{default:function(){return t.createElement(r,{form:h,labelCol:6,wrapperCol:10},t.createElement(a,{name:"global_style_1",title:"Global registration style",required:!0,validator:{format:"custom_format",message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_2",title:"Global registration style",required:!0,validator:"custom_format",component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_3",title:"Global registration style",required:!0,validator:["custom_format"],component:[u],decorator:[p]}),t.createElement(a,{name:"global_style_4",title:"Global registration style",required:!0,validator:{format:"custom_format",message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_1",title:"Locally defined style",required:!0,validator:{pattern:/123/,message:"error\u274E"},component:[u],decorator:[p]}),t.createElement(a,{name:"validator_style_2",title:"Locally defined style",required:!0,validator:{pattern:"123",message:"error\u274E"},component:[u],decorator:[p]}))}});case 22:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-13",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title="Global registration style"
      required
      validator={{
        format: 'custom_format',
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_2"
      title="Global registration style"
      required
      validator={'custom_format'}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_3"
      title="Global registration style"
      required
      validator={['custom_format']}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="global_style_4"
      title="Global registration style"
      required
      validator={{
        format: 'custom_format',
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_1"
      title="Locally defined style"
      required
      validator={{
        pattern: /123/,
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="validator_style_2"
      title="Locally defined style"
      required
      validator={{
        pattern: '123',
        message: 'error\u274E',
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-14":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=d.sent,t=c.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,y=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=d.sent,n=v.createSchemaField,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,s=a.Form,r=a.FormItem,p=a.Input,u=y(),h=n({components:{Input:p,FormItem:r}}),d.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(h,null,t.createElement(h.String,{name:"async_validate",title:"Asynchronous verification",required:!0,"x-validator":function(m){return new Promise(function(b){setTimeout(function(){m||b(""),b(m==="123"?"":"error\u274E")},1e3)})},"x-component":"Input","x-decorator":"FormItem"}),t.createElement(h.String,{name:"async_validate_2",title:"Asynchronous verification (onBlur trigger)",required:!0,"x-validator":{triggerType:"onBlur",validator:function(m){return new Promise(function(b){setTimeout(function(){m||b(""),b(m==="123"?"":"error\u274E")},1e3)})}},"x-component":"Input","x-decorator":"FormItem"})))}});case 21:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-14",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="Asynchronous verification"
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
                resolve('error\u274E')
              }
            }, 1000)
          })
        }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="async_validate_2"
        title="Asynchronous verification (onBlur trigger)"
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
                  resolve('error\u274E')
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-15":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,s=a.Form,r=a.FormItem,p=a.Input,u=y(),h=n({components:{Input:p,FormItem:r}}),i={type:"object",properties:{async_validate:{title:"Asynchronous verification",required:!0,"x-validator":`{{(value) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!value) {
              resolve('')
            }
            if (value === '123') {
              resolve('')
            } else {
              resolve('error\u274E')
            }
          }, 1000)
        })
      }}}`,"x-component":"Input","x-decorator":"FormItem"},async_validate_2:{title:"Asynchronous verification (onBlur trigger)",required:!0,"x-validator":{triggerType:"onBlur",validator:`{{(value) => {
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
      }}}`},"x-component":"Input","x-decorator":"FormItem"}}},f.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(h,{schema:i}))}});case 22:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-15",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Asynchronous verification',
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
              resolve('error\u274E')
            }
          }, 1000)
        })
      }}}\`,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    async_validate_2: {
      title: 'Asynchronous verification (onBlur trigger)',
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-16":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=i.sent,t=c.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,y=l.createForm,i.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=i.sent,n=v.Field,i.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=i.sent,s=a.Form,r=a.FormItem,p=a.Input,u=y(),i.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(n,{name:"async_validate",title:"Asynchronous verification",required:!0,validator:function(o){return new Promise(function(m){setTimeout(function(){o||m(""),m(o==="123"?"":"error\u274E")},1e3)})},component:[p],decorator:[r]}),t.createElement(n,{name:"async_validate_2",title:"Asynchronous verification (onBlur trigger)",required:!0,validator:{triggerType:"onBlur",validator:function(o){return new Promise(function(m){setTimeout(function(){o||m(""),m(o==="123"?"":"error \u274E")},1e3)})}},component:[p],decorator:[r]}))}});case 20:case"end":return i.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-16",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { Field } from '@next-formily/react'
import { Form, FormItem, Input } from '@next-formily/antd'

const form = createForm()

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <Field
      name="async_validate"
      title="Asynchronous verification"
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
              resolve('error\u274E')
            }
          }, 1000)
        })
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
    <Field
      name="async_validate_2"
      title="Asynchronous verification (onBlur trigger)"
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
                resolve('error \u274E')
              }
            }, 1000)
          })
        },
      }}
      component={[Input]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-17":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=d.sent,t=c.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=d.sent,y=l.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=d.sent,n=v.createSchemaField,d.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=d.sent,s=a.Form,r=a.FormItem,p=a.NumberPicker,u=y(),h=n({components:{NumberPicker:p,FormItem:r}}),d.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(h,null,t.createElement(h.String,{name:"aa",title:"AA",required:!0,"x-reactions":function(m){m.selfErrors=m.query("bb").value()>=m.value?"AA must be greater than BB":""},"x-component":"NumberPicker","x-decorator":"FormItem"}),t.createElement(h.String,{name:"bb",title:"BB",required:!0,"x-reactions":function(m){m.selfErrors=m.query("aa").value()<=m.value?"AA must be greater than BB":""},"x-component":"NumberPicker","x-decorator":"FormItem"})))}});case 21:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-17",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
            field.query('bb').value() >= field.value
              ? 'AA must be greater than BB'
              : ''
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
            field.query('aa').value() <= field.value
              ? 'AA must be greater than BB'
              : ''
        }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-18":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=f.sent,y=l.createForm,f.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=f.sent,n=v.createSchemaField,f.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=f.sent,s=a.Form,r=a.FormItem,p=a.NumberPicker,u=y(),h=n({components:{NumberPicker:p,FormItem:r}}),i={type:"object",properties:{aa:{title:"AA",required:!0,"x-reactions":`{{(field) => {
          field.selfErrors =
            field.query('bb').value() >= field.value ? 'AA must be greater than BB' : ''
      }}}`,"x-component":"NumberPicker","x-decorator":"FormItem"},bb:{title:"BB",required:!0,"x-reactions":{dependencies:["aa"],fulfill:{state:{selfErrors:"{{$deps[0] <= $self.value ? 'AA must be greater than BB' : ''}}"}}},"x-component":"NumberPicker","x-decorator":"FormItem"}}},f.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(h,{schema:i}))}});case 22:case"end":return f.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-18",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
            field.query('bb').value() >= field.value ? 'AA must be greater than BB' : ''
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
            selfErrors:
              "{{$deps[0] <= $self.value ? 'AA must be greater than BB' : ''}}",
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-19":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=i.sent,t=c.default,i.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=i.sent,y=l.createForm,i.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return v=i.sent,n=v.Field,i.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return a=i.sent,s=a.Form,r=a.FormItem,p=a.NumberPicker,u=y(),i.abrupt("return",{default:function(){return t.createElement(s,{form:u,labelCol:6,wrapperCol:10},t.createElement(n,{name:"aa",title:"AA",required:!0,reactions:function(o){o.selfErrors=o.query("bb").value()>=o.value?"AA must be greater than BB":""},component:[p],decorator:[r]}),t.createElement(n,{name:"bb",title:"BB",required:!0,reactions:function(o){o.selfErrors=o.query("aa").value()<=o.value?"AA must be greater than BB":""},component:[p],decorator:[r]}))}});case 20:case"end":return i.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-19",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          field.query('bb').value() >= field.value
            ? 'AA must be greater than BB'
            : ''
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
          field.query('aa').value() <= field.value
            ? 'AA must be greater than BB'
            : ''
      }}
      component={[NumberPicker]}
      decorator={[FormItem]}
    />
  </Form>
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}},"docs-guide-advanced-validate-demo-20":{component:P.memo(P.lazy(S()(I()().mark(function F(){var c,t,l,y,v,n,a,s,r,p,u,h,i,d;return I()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return c=o.sent,t=c.default,o.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return l=o.sent,y=l.createForm,v=l.registerValidateLocale,n=l.setValidateLanguage,o.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return a=o.sent,s=a.createSchemaField,o.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return r=o.sent,p=r.Form,u=r.FormItem,h=r.Input,i=y(),d=s({components:{FormItem:u,Input:h}}),n("en-US"),v({"en-US":{required:"Custom required verification message"}}),o.abrupt("return",{default:function(){return t.createElement(p,{form:i,labelCol:6,wrapperCol:10},t.createElement(d,null,t.createElement(d.String,{name:"aa",title:"AA",required:!0,"x-component":"Input","x-decorator":"FormItem"})))}});case 25:case"end":return o.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-guide-advanced-validate-demo-20",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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

setValidateLanguage('en-US')

registerValidateLocale({
  'en-US': {
    required: 'Custom required verification message',
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
)`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/advanced/validate",context:{react:x||(x=e.t(P,2)),"@next-formily/core":M,"@next-formily/react":A,"@next-formily/antd":N},renderOpts:{compile:function(){var F=S()(I()().mark(function t(){var l,y=arguments;return I()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6404).then(e.bind(e,46404));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,y));case 3:case"end":return n.stop()}},t)}));function c(){return F.apply(this,arguments)}return c}()}}}},78337:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},80655:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},66017:function(_,E,e){e.r(E),e.d(E,{demos:function(){return oe}});var x=e(90228),Q=e.n(x),W=e(87999),he=e.n(W),I=e(69854),oe={"docs-guide-demo-0":{component:I.memo(I.lazy(he()(Q()().mark(function S(){var P,M,A,N,L,$,F,c,t;return Q()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return P=y.sent,M=P.default,y.next=6,Promise.resolve().then(e.bind(e,22285));case 6:return A=y.sent,N=A.Table,L=A.Tooltip,y.next=11,Promise.resolve().then(e.bind(e,49320));case 11:return $=y.sent,F=$.QuestionCircleOutlined,c=function(n,a){return a?M.createElement("div",null,n,M.createElement(L,{title:a},M.createElement(F,{style:{marginLeft:3}}))):n},t=[{feature:"Custom component access cost",antd:"4.x low access cost",fusion:"high",formik:"low",finalForm:"low",schemaForm:c("high","Because of coupling bootstrap"),hookForm:c("high","Because of coupling React Ref"),"formily1.x":"low","formily2.x":"low"},{feature:"performance",antd:c("4.x performance is better","Only solved the value synchronization and accurate rendering"),fusion:"bad",formik:"bad",finalForm:c("better","But only solved the value synchronization and accurate rendering"),schemaForm:"bad",hookForm:c("good","But only solved the value synchronization and accurate rendering"),"formily1.x":c("excellent","Can solve the precise rendering in the linkage process"),"formily2.x":c("excellent","Can solve the precise rendering in the linkage process")},{feature:"Whether to support dynamic rendering",antd:"no",fusion:"no",formik:"no",finalForm:"no",schemaForm:"yes",hookForm:"no","formily1.x":"yes","formily2.x":"yes"},{feature:"Whether to use out of the box",antd:"yes",fusion:"yes",formik:"no",finalForm:"no",schemaForm:"yes",hookForm:"no","formily1.x":"yes","formily2.x":"yes"},{feature:"Whether to support cross-terminal",antd:"no",fusion:"no",formik:"no",finalForm:"no",schemaForm:"no",hookForm:"no","formily1.x":"yes","formily2.x":"yes"},{feature:"Development efficiency",antd:"general",fusion:"generalv",formik:"general",finalForm:"general",schemaForm:c("low","Source code development requires manual maintenance of JSON"),hookForm:"general","formily1.x":"high","formily2.x":"high"},{feature:"Learning cost",antd:"easy",fusion:"easy",formik:"easy",finalForm:"hard",schemaForm:"hard",hookForm:"easy","formily1.x":"very hard","formily2.x":c("hard","The concept is drastically reduced")},{feature:"View code maintainability",antd:c("bad","Lots of conditional expressions"),fusion:c("bad","Lots of conditional expressions"),formik:c("bad","Lots of conditional expressions"),finalForm:c("bad","Lots of conditional expressions"),schemaForm:"good",hookForm:c("bad","Lots of conditional expressions"),"formily1.x":"good","formily2.x":"good"},{feature:"Scenario-based packaging capabilities",antd:"no",fusion:"no",formik:"no",finalForm:"no",schemaForm:"yes",hookForm:"no","formily1.x":"yes","formily2.x":"yes"},{feature:"Whether to support form preview",antd:"no",fusion:"yes",formik:"no",finalForm:"no",schemaForm:"no",hookForm:"no","formily1.x":"yes","formily2.x":"yes"}],y.abrupt("return",{default:function(){return M.createElement(N,{dataSource:t,pagination:!1,bordered:!0,scroll:{x:1600},size:"small"},M.createElement(N.Column,{title:"ability",dataIndex:"feature",width:160}),M.createElement(N.Column,{title:"Ant Design Form",dataIndex:"antd",width:160}),M.createElement(N.Column,{title:"Fusion Form",dataIndex:"fusion",width:160}),M.createElement(N.Column,{title:"Formik",dataIndex:"formik",width:160}),M.createElement(N.Column,{title:"React Final Form",dataIndex:"finalForm",width:160}),M.createElement(N.Column,{title:"React Schema Form",dataIndex:"schemaForm",width:160}),M.createElement(N.Column,{title:"React Hook Form",dataIndex:"hookForm",width:160}),M.createElement(N.Column,{title:"Formily1.x",dataIndex:"formily1.x",width:160}),M.createElement(N.Column,{title:"Formily2.x",dataIndex:"formily2.x",width:160}))}});case 16:case"end":return y.stop()}},S)})))),asset:null,routeId:"docs/guide/index",context:void 0,renderOpts:void 0}}},34041:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return n}});var Q=e(90228),W=e.n(Q),he=e(48305),I=e.n(he),oe=e(36075),S=e.n(oe),P=e(87999),M=e.n(P),A=e(69854),N=e(40751),L=e(68168),$=e(97204),F=e(27306),c=e.n(F),t=e(47012),l=e(92832),y=e.n(l),v=e(77724),n={"docs-guide-issue-helper-demo-0":{component:A.memo(A.lazy(M()(W()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se;return W()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=q.sent,r=s.default,q.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return p=q.sent,u=p.createForm,h=p.onFieldMount,i=p.onFieldReact,q.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=q.sent,f=d.Field,o=d.VoidField,q.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return m=q.sent,b=m.Form,g=m.Input,C=m.Select,B=m.Radio,V=m.FormItem,O=m.FormButtonGroup,j=m.Submit,q.next=27,Promise.resolve().then(e.t.bind(e,27306,23));case 27:return R=q.sent,D=R.default,q.next=31,Promise.resolve().then(e.bind(e,47012));case 31:return Z=q.sent,z=Z.default,q.next=35,Promise.resolve().then(e.t.bind(e,92832,23));case 35:return Y=q.sent,q.t0=S(),q.next=39,Promise.resolve().then(e.bind(e,77724));case 39:return q.t1=q.sent,(0,q.t0)(q.t1),K=new Y.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0}),ne=function(w){var ae=w.value,H=w.onChange,U=r.useState("write"),le=I()(U,2),G=le[0],J=le[1];return r.createElement("div",{style:{fontSize:12,lineHeight:1}},r.createElement(z,{value:ae,onChange:H,selectedTab:G,onTabChange:J,generateMarkdownPreview:function(k){return Promise.resolve('<div class="markdown" style="margin:0 20px;">'.concat(K.makeHtml(k)||"","</div>"))}}))},te=u({validateFirst:!0,effects:function(){h("version",function(){var w=M()(W()().mark(function ae(H){var U,le,G;return W()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,fetch("https://registry.npmmirror.com/@next-formily/core").then(function(k){return k.json()});case 2:U=T.sent,le=U.versions,G=Object.keys(le).sort(function(k,X){return D.gte(k,X)?-1:1}),H.dataSource=G.map(function(k){return{label:k,value:k}});case 6:case"end":return T.stop()}},ae)}));return function(ae){return w.apply(this,arguments)}}()),h("package",function(){var w=M()(W()().mark(function ae(H){var U;return W()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,fetch("https://formilyjs.org/.netlify/functions/npm-search?q=@formily").then(function(J){return J.json()});case 2:U=G.sent,H.dataSource=U.map(function(J){var T=J.name;return{label:T,value:T}});case 4:case"end":return G.stop()}},ae)}));return function(ae){return w.apply(this,arguments)}}()),i("bug-desc",function(w){w.visible=w.query("type").value()==="Bug Report"}),i("feature-desc",function(w){w.visible=w.query("type").value()==="Feature Request"})}}),se=function(w){var ae=w.type,H=w.title,U=w.version,le=w.package,G=w.reproduceLink,J=w.reproduceStep,T=w.expected,k=w.actually,X=w.comment,ee=w.feature,re=w.api,ce=new URL("https://github.com/alibaba/formily/issues/new"),me=`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### Reproduction link
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](`.concat(G||"",`)

### Steps to reproduce
`).concat(J||"",`

### What is expected?
`).concat(T||"",`

### What is actually happening?
`).concat(k||"",`

### Package
`).concat(le,"@").concat(U,`

---

`).concat(X||"",`

<!-- generated by formily-issue-helper. DO NOT REMOVE -->
`),ye=`
- [ ] I have searched the [issues](https://github.com/alibaba/formily/issues) of this repository and believe that this is not a duplicate.

### What problem does this feature solve?
`.concat(ee||"",`

### What does the proposed API look like?
`).concat(re||"",`


<!-- generated by formily-issue-helper. DO NOT REMOVE -->
`);return ce.searchParams.set("title","[".concat(ae,"] ").concat(H)),ce.searchParams.set("body",ae==="Bug Report"?me:ye),ce.href},q.abrupt("return",{default:function(){return r.createElement(b,{form:te,layout:"vertical",size:"large"},r.createElement(f,{title:"This is a",name:"type",required:!0,initialValue:"Bug Report",decorator:[V],component:[B.Group,{optionType:"button"}],dataSource:[{label:"Bug Report",value:"Bug Report"},{label:"Feature Request",value:"Feature Request"}]}),r.createElement(f,{title:"Title",name:"title",required:!0,decorator:[V],component:[g]}),r.createElement(o,{name:"bug-desc"},r.createElement(f,{title:"Package",name:"package",required:!0,decorator:[V],component:[C,{showSearch:!0}]}),r.createElement(f,{title:"Version",description:"Check if the issue is reproducible with the latest stable version.",name:"version",required:!0,decorator:[V],component:[C,{showSearch:!0}]}),r.createElement(f,{title:"Link to minimal reproduction",name:"reproduceLink",decorator:[V],component:[g],required:!0,validator:["url",function(w){return/\/\/(codesandbox\.io|github)/.test(w)?"":"Must Be Codesandbox Link or Github Repo"}],description:r.createElement("div",null,"This is Codesandbox templates.If you are:",r.createElement("ul",null,r.createElement("li",null,"React + Antd User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-pure-jsx-omncis",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-markup-schema-fvpevx",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-antd-json-schema-28p0fh",target:"_blank",rel:"noreferrer"},"JSON Schema")))),r.createElement("li",null,"React + Fusion User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-next-pure-jsx-ji9iiu",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-next-markup-schema-i7dm17",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-react-next-json-schema-1lm35h",target:"_blank",rel:"noreferrer"},"JSON Schema")))),r.createElement("li",null,"Vue3 + ant-design-vue User:",r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-antd-vue-pure-jsx-pp3gvv",target:"_blank",rel:"noreferrer"},"Pure JSX")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-vue-ant-design-vue-markup-schema-donivp",target:"_blank",rel:"noreferrer"},"Markup Schema")),r.createElement("li",null,r.createElement("a",{href:"https://codesandbox.io/s/formily-vue-ant-design-vue-json-schema-25g4z1",target:"_blank",rel:"noreferrer"},"JSON Schema"))))))}),r.createElement(f,{title:"Step to reproduce",description:"Clear and concise reproduction instructions are important for us to be able to triage your issue in a timely manner. Note that you can use Markdown to format lists and code.",name:"reproduceStep",decorator:[V],component:[ne],required:!0}),r.createElement(f,{title:"What is expected?",name:"expected",decorator:[V],component:[ne],required:!0}),r.createElement(f,{title:"What is actually happening?",name:"actually",decorator:[V],component:[ne],required:!0}),r.createElement(f,{title:"Any additional comments? (optional)",name:"comment",decorator:[V],component:[ne]})),r.createElement(o,{name:"feature-desc"},r.createElement(f,{title:"What problem does this feature solve?",description:r.createElement("div",null,r.createElement("p",null,"Explain your use case, context, and rationale behind this feature request. More importantly, what is the end user experience you are trying to build that led to the need for this feature?"),r.createElement("p",null,"An important design goal of Formily is keeping the API surface small and straightforward. In general, we only consider adding new features that solve a problem that cannot be easily dealt with using existing APIs (i.e. not just an alternative way of doing things that can already be done). The problem should also be common enough to justify the addition.")),name:"feature",required:!0,decorator:[V],component:[ne]}),r.createElement(f,{title:"What does the proposed API look like?",description:"Describe how you propose to solve the problem and provide code samples of how the API would work once implemented.",name:"api",required:!0,decorator:[V],component:[ne]})),r.createElement(O.Sticky,{align:"center"},r.createElement(j,{size:"large",onSubmit:function(ae){window.open(se(ae))}},"Submit")))}});case 46:case"end":return q.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-issue-helper-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
        title="This is a"
        name="type"
        required
        initialValue="Bug Report"
        decorator={[FormItem]}
        component={[Radio.Group, { optionType: 'button' }]}
        dataSource={[
          { label: 'Bug Report', value: 'Bug Report' },
          { label: 'Feature Request', value: 'Feature Request' },
        ]}
      />
      <Field
        title="Title"
        name="title"
        required
        decorator={[FormItem]}
        component={[Input]}
      />
      <VoidField name="bug-desc">
        <Field
          title="Package"
          name="package"
          required
          decorator={[FormItem]}
          component={[Select, { showSearch: true }]}
        />
        <Field
          title="Version"
          description="Check if the issue is reproducible with the latest stable version."
          name="version"
          required
          decorator={[FormItem]}
          component={[Select, { showSearch: true }]}
        />

        <Field
          title="Link to minimal reproduction"
          name="reproduceLink"
          decorator={[FormItem]}
          component={[Input]}
          required
          validator={[
            'url',
            (value) => {
              return /\\/\\/(codesandbox\\.io|github)/.test(value)
                ? ''
                : 'Must Be Codesandbox Link or Github Repo'
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
                        href="https://codesandbox.io/s/formily-react-next-json-schema-1lm35h"
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
          title="Step to reproduce"
          description="Clear and concise reproduction instructions are important for us to be able to triage your issue in a timely manner. Note that you can use Markdown to format lists and code."
          name="reproduceStep"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="What is expected?"
          name="expected"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="What is actually happening?"
          name="actually"
          decorator={[FormItem]}
          component={[MdInput]}
          required
        />
        <Field
          title="Any additional comments? (optional)"
          name="comment"
          decorator={[FormItem]}
          component={[MdInput]}
        />
      </VoidField>
      <VoidField name="feature-desc">
        <Field
          title="What problem does this feature solve?"
          description={
            <div>
              <p>
                Explain your use case, context, and rationale behind this
                feature request. More importantly, what is the end user
                experience you are trying to build that led to the need for this
                feature?
              </p>
              <p>
                An important design goal of Formily is keeping the API surface
                small and straightforward. In general, we only consider adding
                new features that solve a problem that cannot be easily dealt
                with using existing APIs (i.e. not just an alternative way of
                doing things that can already be done). The problem should also
                be common enough to justify the addition.
              </p>
            </div>
          }
          name="feature"
          required
          decorator={[FormItem]}
          component={[MdInput]}
        />

        <Field
          title="What does the proposed API look like?"
          description="Describe how you propose to solve the problem and provide code samples of how the API would work once implemented."
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
          Submit
        </Submit>
      </FormButtonGroup.Sticky>
    </Form>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},semver:{type:"NPM",value:"7.8.5"},"react-mde":{type:"NPM",value:"11.5.0"},showdown:{type:"NPM",value:"2.1.0"}},entry:"index.tsx"},routeId:"docs/guide/issue-helper",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,semver:F,"react-mde":t,showdown:l,"react-mde/lib/styles/css/react-mde-all.css":v},renderOpts:{compile:function(){var a=M()(W()().mark(function r(){var p,u=arguments;return W()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}}}},57670:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},39863:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return A}});var Q=e(90228),W=e.n(Q),he=e(87999),I=e.n(he),oe=e(69854),S=e(40751),P=e(68168),M=e(97204),A={"docs-guide-quick-start-demo-0":{component:oe.memo(oe.lazy(I()(W()().mark(function N(){var L,$,F,c,t,l,y,v,n,a,s,r,p,u,h;return W()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return L=d.sent,$=L.default,d.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return F=d.sent,c=F.createForm,d.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return t=d.sent,l=t.FormProvider,y=t.FormConsumer,v=t.Field,d.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return n=d.sent,a=n.FormItem,s=n.FormLayout,r=n.Input,p=n.FormButtonGroup,u=n.Submit,h=c(),d.abrupt("return",{default:function(){return $.createElement(l,{form:h},$.createElement(s,{layout:"vertical"},$.createElement(v,{name:"input",title:"Input box",required:!0,initialValue:"Hello world",decorator:[a],component:[r]})),$.createElement(y,null,function(){return $.createElement("div",{style:{marginBottom:20,padding:5,border:"1px dashed #666"}},"Real-time response\uFF1A",h.values.input)}),$.createElement(p,null,$.createElement(u,{onSubmit:console.log},"submit")))}});case 24:case"end":return d.stop()}},N)})))),asset:{type:"BLOCK",id:"docs-guide-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          title="Input box"
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
            Real-time response\uFF1A{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"}},entry:"index.tsx"},routeId:"docs/guide/quick-start",context:{react:x||(x=e.t(oe,2)),"@next-formily/core":S,"@next-formily/react":P,"@next-formily/antd":M},renderOpts:{compile:function(){var N=I()(W()().mark(function $(){var F,c=arguments;return W()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(6404).then(e.bind(e,46404));case 2:return l.abrupt("return",(F=l.sent).default.apply(F,c));case 3:case"end":return l.stop()}},$)}));function L(){return N.apply(this,arguments)}return L}()}}}},23051:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},49626:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return n}});var Q=e(36075),W=e.n(Q),he=e(90228),I=e.n(he),oe=e(48305),S=e.n(oe),P=e(26068),M=e.n(P),A=e(87999),N=e.n(A),L=e(69854),$=e(40751),F=e(68168),c=e(97204),t=e(70869),l=e(22285),y=e(49320),v=e(67319),n={"docs-guide-scenes-edit-detail-demo-0":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U;return I()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=G.sent,r=s.default,p=s.useState,u=s.useEffect,G.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=G.sent,i=h.createForm,G.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=G.sent,f=d.createSchemaField,G.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return o=G.sent,m=o.Form,b=o.FormItem,g=o.FormLayout,C=o.Input,B=o.Select,V=o.Cascader,O=o.DatePicker,j=o.Submit,R=o.FormGrid,D=o.Upload,Z=o.ArrayItems,z=o.Editable,Y=o.FormButtonGroup,G.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return K=G.sent,ne=K.action,G.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=G.sent,se=te.Card,ie=te.Button,q=te.Spin,G.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=G.sent,w=pe.UploadOutlined,ae=i({validateFirst:!0}),H=function(T){return r.createElement(D,M()(M()({},T),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(ie,{icon:r.createElement(w,null)},"Upload a copy"))},U=f({components:{FormItem:b,FormGrid:R,FormLayout:g,Input:C,DatePicker:O,Cascader:V,Select:B,IDUpload:H,ArrayItems:Z,Editable:z},scope:{fetchAddress:function(T){var k=function X(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ee).reduce(function(re,ce){var me=S()(ce,2),ye=me[0],ue=me[1];if(typeof ue=="string")return re.concat({label:ue,value:ye});var de=ue.name,fe=ue.code,ve=ue.cities,Fe=ue.districts,xe=X(ve),Ie=X(Fe);return re.concat({label:de,value:fe,children:xe.length?xe:Ie.length?Ie:void 0})},[])};T.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(X){return X.json()}).then(ne.bound(function(X){T.dataSource=k(X),T.loading=!1}))}}}),G.abrupt("return",{default:function(){var T=p(!0),k=S()(T,2),X=k[0],ee=k[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),ee(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(se,{title:"Edit User",style:{width:620}},r.createElement(q,{spinning:X},r.createElement(m,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(U,null,r.createElement(U.String,{name:"username",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"}),r.createElement(U.Void,{title:"Name","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid"},r.createElement(U.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstName"},required:!0}),r.createElement(U.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"},required:!0})),r.createElement(U.String,{name:"email",title:"Email",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),r.createElement(U.String,{name:"gender",title:"Gender","x-decorator":"FormItem","x-component":"Select",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),r.createElement(U.String,{name:"birthday",title:"Birthday",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),r.createElement(U.String,{name:"address",title:"Address",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),r.createElement(U.String,{name:"idCard",title:"ID",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),r.createElement(U.Array,{name:"contacts",title:"Contacts",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},r.createElement(U.Object,{"x-component":"ArrayItems.Item"},r.createElement(U.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),r.createElement(U.Void,{name:"popover",title:"Contact Informations","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}]},r.createElement(U.String,{name:"name",required:!0,title:"Name","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(U.String,{name:"email",title:"Email","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(U.String,{name:"phone",required:!0,title:"Phone Number","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),r.createElement(U.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),r.createElement(U.Void,{"x-component":"ArrayItems.Addition",title:"Add Contact"}))),r.createElement(Y.FormItem,null,r.createElement(j,{block:!0,size:"large"},"Submit"))))))}});case 48:case"end":return G.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
      <Card title="Edit User" style={{ width: 620 }}>
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
                title="Username"
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.Void
                title="Name"
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
                    placeholder: 'firstName',
                  }}
                  required
                />
                <SchemaField.String
                  name="lastName"
                  x-decorator="FormItem"
                  x-component="Input"
                  x-component-props={{
                    placeholder: 'lastname',
                  }}
                  required
                />
              </SchemaField.Void>
              <SchemaField.String
                name="email"
                title="Email"
                required
                x-validator="email"
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="gender"
                title="Gender"
                x-decorator="FormItem"
                x-component="Select"
                enum={[
                  {
                    label: 'male',
                    value: 1,
                  },
                  {
                    label: 'female',
                    value: 2,
                  },
                  {
                    label: 'third gender',
                    value: 3,
                  },
                ]}
                required
              />
              <SchemaField.String
                name="birthday"
                title="Birthday"
                required
                x-decorator="FormItem"
                x-component="DatePicker"
              />
              <SchemaField.String
                name="address"
                title="Address"
                required
                x-decorator="FormItem"
                x-component="Cascader"
                x-reactions="{{fetchAddress}}"
              />
              <SchemaField.String
                name="idCard"
                title="ID"
                required
                x-decorator="FormItem"
                x-component="IDUpload"
              />
              <SchemaField.Array
                name="contacts"
                title="Contacts"
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
                    title="Contact Informations"
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
                      title="Name"
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
                      title="Email"
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
                      title="Phone Number"
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
                  title="Add Contact"
                />
              </SchemaField.Array>
            </SchemaField>
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                Submit
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}},"docs-guide-scenes-edit-detail-demo-1":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U,le;return I()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=J.sent,r=s.default,p=s.useState,u=s.useEffect,J.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=J.sent,i=h.createForm,J.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=J.sent,f=d.createSchemaField,J.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return o=J.sent,m=o.Form,b=o.FormItem,g=o.FormLayout,C=o.Input,B=o.Select,V=o.Cascader,O=o.DatePicker,j=o.Submit,R=o.FormGrid,D=o.Upload,Z=o.ArrayItems,z=o.Editable,Y=o.FormButtonGroup,J.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return K=J.sent,ne=K.action,J.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=J.sent,se=te.Card,ie=te.Button,q=te.Spin,J.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=J.sent,w=pe.UploadOutlined,ae=i({validateFirst:!0}),H=function(k){return r.createElement(D,M()(M()({},k),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(ie,{icon:r.createElement(w,null)},"Upload a copy"))},U=f({components:{FormItem:b,FormGrid:R,FormLayout:g,Input:C,DatePicker:O,Cascader:V,Select:B,IDUpload:H,ArrayItems:Z,Editable:z},scope:{fetchAddress:function(k){var X=function ee(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(re).reduce(function(ce,me){var ye=S()(me,2),ue=ye[0],de=ye[1];if(typeof de=="string")return ce.concat({label:de,value:ue});var fe=de.name,ve=de.code,Fe=de.cities,xe=de.districts,Ie=ee(Fe),ge=ee(xe);return ce.concat({label:fe,value:ve,children:Ie.length?Ie:ge.length?ge:void 0})},[])};k.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(ee){return ee.json()}).then(ne.bound(function(ee){k.dataSource=X(ee),k.loading=!1}))}}}),le={type:"object",properties:{username:{type:"string",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"},name:{type:"void",title:"Name","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstName"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"}}}},email:{type:"string",title:"Email",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"Gender",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"Birthday","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"Address","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"ID","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"Contacts","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"Contact Informations","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}],properties:{name:{type:"string",title:"Name",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"Email","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"Phone Number","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"Add Contact","x-component":"ArrayItems.Addition"}}}}},J.abrupt("return",{default:function(){var k=p(!0),X=S()(k,2),ee=X[0],re=X[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),re(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(se,{title:"Edit User",style:{width:620}},r.createElement(q,{spinning:ee},r.createElement(m,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(U,{schema:le}),r.createElement(Y.FormItem,null,r.createElement(j,{block:!0,size:"large"},"Submit"))))))}});case 49:case"end":return J.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'void',
      title: 'Name',
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
            placeholder: 'firstName',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'lastname',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: 'Email',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: 'Gender',
      enum: [
        {
          label: 'male',
          value: 1,
        },
        {
          label: 'female',
          value: 2,
        },
        {
          label: 'third gender',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: 'Birthday',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: 'Address',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: 'ID',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: 'Contacts',
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
            title: 'Contact Informations',
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
                title: 'Name',
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
                title: 'Email',
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
                title: 'Phone Number',
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
          title: 'Add Contact',
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
      <Card title="Edit User" style={{ width: 620 }}>
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
                Submit
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}},"docs-guide-scenes-edit-detail-demo-2":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U,le,G;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=T.sent,r=s.default,p=s.useState,u=s.useEffect,T.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=T.sent,i=h.createForm,T.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=T.sent,f=d.Field,o=d.VoidField,m=d.ArrayField,T.next=18,Promise.resolve().then(e.bind(e,97204));case 18:return b=T.sent,g=b.Form,C=b.FormItem,B=b.FormLayout,V=b.Input,O=b.Select,j=b.Cascader,R=b.DatePicker,D=b.Submit,Z=b.FormGrid,z=b.Upload,Y=b.ArrayBase,K=b.Editable,ne=b.FormButtonGroup,T.next=34,Promise.resolve().then(e.bind(e,70869));case 34:return te=T.sent,se=te.action,T.next=38,Promise.resolve().then(e.bind(e,22285));case 38:return ie=T.sent,q=ie.Card,pe=ie.Button,w=ie.Spin,T.next=44,Promise.resolve().then(e.bind(e,49320));case 44:return ae=T.sent,H=ae.UploadOutlined,T.t0=W(),T.next=49,Promise.resolve().then(e.bind(e,67319));case 49:return T.t1=T.sent,(0,T.t0)(T.t1),U=i({validateFirst:!0}),le=function(X){return r.createElement(z,M()(M()({},X),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),r.createElement(pe,{icon:r.createElement(H,null)},"Upload a copy"))},G=function(X){var ee=function re(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ce).reduce(function(me,ye){var ue=S()(ye,2),de=ue[0],fe=ue[1];if(typeof fe=="string")return me.concat({label:fe,value:de});var ve=fe.name,Fe=fe.code,xe=fe.cities,Ie=fe.districts,ge=re(xe),be=re(Ie);return me.concat({label:ve,value:Fe,children:ge.length?ge:be.length?be:void 0})},[])};X.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(re){return re.json()}).then(se.bound(function(re){X.dataSource=ee(re),X.loading=!1}))},T.abrupt("return",{default:function(){var X=p(!0),ee=S()(X,2),re=ee[0],ce=ee[1];return u(function(){setTimeout(function(){U.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),ce(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(q,{title:"Edit User",style:{width:620}},r.createElement(w,{spinning:re},r.createElement(g,{form:U,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(f,{name:"username",title:"Username",required:!0,decorator:[C],component:[V]}),r.createElement(o,{name:"name",title:"Name",decorator:[C,{asterisk:!0,feedbackLayout:"none"}],component:[Z]},r.createElement(f,{name:"firstName",decorator:[C],component:[V,{placeholder:"firstName"}],required:!0}),r.createElement(f,{name:"lastName",decorator:[C],component:[V,{placeholder:"lastname"}],required:!0})),r.createElement(f,{name:"email",title:"Email",required:!0,validator:"email",decorator:[C],component:[V]}),r.createElement(f,{name:"gender",title:"Gender",decorator:[C],component:[O],dataSource:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),r.createElement(f,{name:"birthday",title:"Birthday",required:!0,decorator:[C],component:[R]}),r.createElement(f,{name:"address",title:"Address",required:!0,decorator:[C],component:[j],reactions:G}),r.createElement(f,{name:"idCard",title:"ID",required:!0,decorator:[C],component:[le]}),r.createElement(m,{name:"contacts",title:"Contacts",decorator:[C]},function(me){var ye;return r.createElement(Y,null,(ye=me.value)===null||ye===void 0?void 0:ye.map(function(ue,de){return r.createElement("div",{key:de,className:"array-items-item"},r.createElement(f,{name:"".concat(de),title:"Contact Informations",component:[K.Popover],reactions:function(ve){ve.title=ve.query(".[].name").value()||ve.title}},r.createElement(o,{name:"layout",component:[B,{layout:"vertical"}]},r.createElement(f,{name:"name",title:"Name",required:!0,decorator:[C],component:[V,{style:{width:300}}]}),r.createElement(f,{name:"email",title:"Email",required:!0,validator:"email",decorator:[C],component:[V,{style:{width:300}}]}),r.createElement(f,{name:"phone",title:"Phone Number",required:!0,validator:"phone",decorator:[C],component:[V,{style:{width:300}}]}))),r.createElement(C.BaseItem,null,r.createElement(Y.Remove,{index:de}),r.createElement(Y.MoveDown,{index:de}),r.createElement(Y.MoveUp,{index:de})))}),r.createElement(Y.Addition,{title:"Add Contact"}))}),r.createElement(ne.FormItem,null,r.createElement(D,{block:!0,size:"large"},"Submit"))))))}});case 55:case"end":return T.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
      <Card title="Edit User" style={{ width: 620 }}>
        <Spin spinning={loading}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <Field
              name="username"
              title="Username"
              required
              decorator={[FormItem]}
              component={[Input]}
            />
            <VoidField
              name="name"
              title="Name"
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
                    placeholder: 'firstName',
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
                    placeholder: 'lastname',
                  },
                ]}
                required
              />
            </VoidField>
            <Field
              name="email"
              title="Email"
              required
              validator="email"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="gender"
              title="Gender"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={[
                {
                  label: 'male',
                  value: 1,
                },
                {
                  label: 'female',
                  value: 2,
                },
                {
                  label: 'third gender',
                  value: 3,
                },
              ]}
              required
            />
            <Field
              name="birthday"
              title="Birthday"
              required
              decorator={[FormItem]}
              component={[DatePicker]}
            />
            <Field
              name="address"
              title="Address"
              required
              decorator={[FormItem]}
              component={[Cascader]}
              reactions={fetchAddress}
            />
            <Field
              name="idCard"
              title="ID"
              required
              decorator={[FormItem]}
              component={[IDUpload]}
            />
            <ArrayField name="contacts" title="Contacts" decorator={[FormItem]}>
              {(field) => (
                <ArrayBase>
                  {field.value?.map((item, index) => (
                    <div key={index} className="array-items-item">
                      <Field
                        name={\`\${index}\`}
                        title="Contact Informations"
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
                            title="Name"
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
                            title="Email"
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
                            title="Phone Number"
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
                  <ArrayBase.Addition title="Add Contact" />
                </ArrayBase>
              )}
            </ArrayField>
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                Submit
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./index.less":{type:"FILE",value:e(19755).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{"./index.less":v,react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/index.less":v},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}},"docs-guide-scenes-edit-detail-demo-3":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U;return I()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=G.sent,r=s.default,p=s.useState,u=s.useEffect,G.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=G.sent,i=h.createForm,G.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=G.sent,f=d.createSchemaField,o=d.useField,G.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return m=G.sent,b=m.Form,g=m.FormItem,C=m.FormLayout,B=m.Input,V=m.Select,O=m.Cascader,j=m.DatePicker,R=m.FormGrid,D=m.Upload,Z=m.ArrayItems,z=m.Editable,Y=m.PreviewText,G.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return K=G.sent,ne=K.action,G.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=G.sent,se=te.Card,ie=te.Button,q=te.Spin,G.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=G.sent,w=pe.UploadOutlined,ae=i({readPretty:!0,validateFirst:!0}),H=function(T){var k=o();return r.createElement(D,M()(M()({},T),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),k.editable&&r.createElement(ie,{icon:r.createElement(w,null)},"Upload a copy"))},U=f({components:{FormItem:g,FormGrid:R,FormLayout:C,Input:B,DatePicker:j,Cascader:O,Select:V,IDUpload:H,ArrayItems:Z,Editable:z},scope:{fetchAddress:function(T){var k=function X(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ee).reduce(function(re,ce){var me=S()(ce,2),ye=me[0],ue=me[1];if(typeof ue=="string")return re.concat({label:ue,value:ye});var de=ue.name,fe=ue.code,ve=ue.cities,Fe=ue.districts,xe=X(ve),Ie=X(Fe);return re.concat({label:de,value:fe,children:xe.length?xe:Ie.length?Ie:void 0})},[])};T.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(X){return X.json()}).then(ne.bound(function(X){T.dataSource=k(X),T.loading=!1}))}}}),G.abrupt("return",{default:function(){var T=p(!0),k=S()(T,2),X=k[0],ee=k[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),ee(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(Y.Placeholder,{value:"-"},r.createElement(se,{title:"User Details",style:{width:620}},r.createElement(q,{spinning:X},r.createElement(b,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(U,null,r.createElement(U.String,{name:"username",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"}),r.createElement(U.Void,{title:"Name","x-decorator":"FormItem","x-decorator-props":{feedbackLayout:"none"},"x-component":"FormGrid"},r.createElement(U.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstName"},required:!0}),r.createElement(U.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"},required:!0})),r.createElement(U.String,{name:"email",title:"Email",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),r.createElement(U.String,{name:"gender",title:"Gender","x-decorator":"FormItem","x-component":"Select",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),r.createElement(U.String,{name:"birthday",title:"Birthday",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),r.createElement(U.String,{name:"address",title:"Address",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),r.createElement(U.String,{name:"idCard",title:"ID",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),r.createElement(U.Array,{name:"contacts",title:"Contacts",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},r.createElement(U.Object,{"x-component":"ArrayItems.Item"},r.createElement(U.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),r.createElement(U.Void,{name:"popover",title:"Contact Informations","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}]},r.createElement(U.String,{name:"name",required:!0,title:"Name","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(U.String,{name:"email",title:"Email","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),r.createElement(U.String,{name:"phone",required:!0,title:"Phone Number","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),r.createElement(U.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),r.createElement(U.Void,{"x-component":"ArrayItems.Addition",title:"Add Contact"}))))))))}});case 48:case"end":return G.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      {field.editable && (
        <Button icon={<UploadOutlined />}>Upload a copy</Button>
      )}
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
        <Card title="User Details" style={{ width: 620 }}>
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
                  title="Username"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.Void
                  title="Name"
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
                      placeholder: 'firstName',
                    }}
                    required
                  />
                  <SchemaField.String
                    name="lastName"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      placeholder: 'lastname',
                    }}
                    required
                  />
                </SchemaField.Void>
                <SchemaField.String
                  name="email"
                  title="Email"
                  required
                  x-validator="email"
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.String
                  name="gender"
                  title="Gender"
                  x-decorator="FormItem"
                  x-component="Select"
                  enum={[
                    {
                      label: 'male',
                      value: 1,
                    },
                    {
                      label: 'female',
                      value: 2,
                    },
                    {
                      label: 'third gender',
                      value: 3,
                    },
                  ]}
                  required
                />
                <SchemaField.String
                  name="birthday"
                  title="Birthday"
                  required
                  x-decorator="FormItem"
                  x-component="DatePicker"
                />
                <SchemaField.String
                  name="address"
                  title="Address"
                  required
                  x-decorator="FormItem"
                  x-component="Cascader"
                  x-reactions="{{fetchAddress}}"
                />
                <SchemaField.String
                  name="idCard"
                  title="ID"
                  required
                  x-decorator="FormItem"
                  x-component="IDUpload"
                />
                <SchemaField.Array
                  name="contacts"
                  title="Contacts"
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
                      title="Contact Informations"
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
                        title="Name"
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
                        title="Email"
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
                        title="Phone Number"
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
                    title="Add Contact"
                  />
                </SchemaField.Array>
              </SchemaField>
            </Form>
          </Spin>
        </Card>
      </PreviewText.Placeholder>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}},"docs-guide-scenes-edit-detail-demo-4":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U,le;return I()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=J.sent,r=s.default,p=s.useState,u=s.useEffect,J.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=J.sent,i=h.createForm,J.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=J.sent,f=d.createSchemaField,o=d.useField,J.next=17,Promise.resolve().then(e.bind(e,97204));case 17:return m=J.sent,b=m.Form,g=m.FormItem,C=m.FormLayout,B=m.Input,V=m.Select,O=m.Cascader,j=m.DatePicker,R=m.FormGrid,D=m.Upload,Z=m.ArrayItems,z=m.Editable,Y=m.PreviewText,J.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return K=J.sent,ne=K.action,J.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return te=J.sent,se=te.Card,ie=te.Button,q=te.Spin,J.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return pe=J.sent,w=pe.UploadOutlined,ae=i({readPretty:!0,validateFirst:!0}),H=function(k){var X=o();return r.createElement(D,M()(M()({},k),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),X.editable&&r.createElement(ie,{icon:r.createElement(w,null)},"Upload a copy"))},U=f({components:{FormItem:g,FormGrid:R,FormLayout:C,Input:B,DatePicker:j,Cascader:O,Select:V,IDUpload:H,ArrayItems:Z,Editable:z},scope:{fetchAddress:function(k){var X=function ee(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(re).reduce(function(ce,me){var ye=S()(me,2),ue=ye[0],de=ye[1];if(typeof de=="string")return ce.concat({label:de,value:ue});var fe=de.name,ve=de.code,Fe=de.cities,xe=de.districts,Ie=ee(Fe),ge=ee(xe);return ce.concat({label:fe,value:ve,children:Ie.length?Ie:ge.length?ge:void 0})},[])};k.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(ee){return ee.json()}).then(ne.bound(function(ee){k.dataSource=X(ee),k.loading=!1}))}}}),le={type:"object",properties:{username:{type:"string",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"},name:{type:"void",title:"Name","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstName"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"}}}},email:{type:"string",title:"Email",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"Gender",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"Birthday","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"Address","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"ID","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"Contacts","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"Contact Informations","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{fulfill:{schema:{title:'{{$self.query(".name").value() }}'}}}],properties:{name:{type:"string",title:"Name",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"Email","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"Phone Number","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"Add Contact","x-component":"ArrayItems.Addition"}}}}},J.abrupt("return",{default:function(){var k=p(!0),X=S()(k,2),ee=X[0],re=X[1];return u(function(){setTimeout(function(){ae.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),re(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(Y.Placeholder,{value:"-"},r.createElement(se,{title:"User Details",style:{width:620}},r.createElement(q,{spinning:ee},r.createElement(b,{form:ae,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(U,{schema:le}))))))}});case 49:case"end":return J.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      {field.editable && (
        <Button icon={<UploadOutlined />}>Upload a copy</Button>
      )}
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
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'void',
      title: 'Name',
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
            placeholder: 'firstName',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'lastname',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: 'Email',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: 'Gender',
      enum: [
        {
          label: 'male',
          value: 1,
        },
        {
          label: 'female',
          value: 2,
        },
        {
          label: 'third gender',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: 'Birthday',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: 'Address',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: 'ID',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: 'Contacts',
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
            title: 'Contact Informations',
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
                title: 'Name',
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
                title: 'Email',
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
                title: 'Phone Number',
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
          title: 'Add Contact',
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
        <Card title="User Details" style={{ width: 620 }}>
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
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}},"docs-guide-scenes-edit-detail-demo-5":{component:L.memo(L.lazy(N()(I()().mark(function a(){var s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae,H,U,le,G;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return s=T.sent,r=s.default,p=s.useState,u=s.useEffect,T.next=8,Promise.resolve().then(e.bind(e,40751));case 8:return h=T.sent,i=h.createForm,T.next=12,Promise.resolve().then(e.bind(e,68168));case 12:return d=T.sent,f=d.Field,o=d.VoidField,m=d.ArrayField,b=d.useField,T.next=19,Promise.resolve().then(e.bind(e,97204));case 19:return g=T.sent,C=g.Form,B=g.FormItem,V=g.FormLayout,O=g.Input,j=g.Select,R=g.Cascader,D=g.DatePicker,Z=g.FormGrid,z=g.ArrayBase,Y=g.Upload,K=g.PreviewText,ne=g.Editable,T.next=34,Promise.resolve().then(e.bind(e,70869));case 34:return te=T.sent,se=te.action,T.next=38,Promise.resolve().then(e.bind(e,22285));case 38:return ie=T.sent,q=ie.Card,pe=ie.Button,w=ie.Spin,T.next=44,Promise.resolve().then(e.bind(e,49320));case 44:return ae=T.sent,H=ae.UploadOutlined,T.t0=W(),T.next=49,Promise.resolve().then(e.bind(e,67319));case 49:return T.t1=T.sent,(0,T.t0)(T.t1),U=i({validateFirst:!0,readPretty:!0}),le=function(X){var ee=b();return r.createElement(Y,M()(M()({},X),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),ee.editable&&r.createElement(pe,{icon:r.createElement(H,null)},"Upload a copy"))},G=function(X){var ee=function re(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(ce).reduce(function(me,ye){var ue=S()(ye,2),de=ue[0],fe=ue[1];if(typeof fe=="string")return me.concat({label:fe,value:de});var ve=fe.name,Fe=fe.code,xe=fe.cities,Ie=fe.districts,ge=re(xe),be=re(Ie);return me.concat({label:ve,value:Fe,children:ge.length?ge:be.length?be:void 0})},[])};X.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(re){return re.json()}).then(se.bound(function(re){X.dataSource=ee(re),X.loading=!1}))},T.abrupt("return",{default:function(){var X=p(!0),ee=S()(X,2),re=ee[0],ce=ee[1];return u(function(){setTimeout(function(){U.setInitialValues({username:"Aston Martin",firstName:"Aston",lastName:"Martin",email:"aston_martin@aston.com",gender:1,birthday:"1836-01-03",address:["110000","110000","110101"],idCard:[{name:"this is image",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",uid:"rc-upload-1615825692847-2",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],contacts:[{name:"Zhang San",phone:"13245633378",email:"zhangsan@gmail.com"},{name:"Li Si",phone:"16873452678",email:"lisi@gmail.com"}]}),ce(!1)},2e3)},[]),r.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},r.createElement(K.Placeholder,{value:"-"},r.createElement(q,{title:"Edit User",style:{width:620}},r.createElement(w,{spinning:re},r.createElement(C,{form:U,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},r.createElement(f,{name:"username",title:"Username",required:!0,decorator:[B],component:[O]}),r.createElement(o,{name:"name",title:"Name",decorator:[B,{feedbackLayout:"none"}],component:[Z]},r.createElement(f,{name:"firstName",decorator:[B],component:[O,{placeholder:"firstName"}],required:!0}),r.createElement(f,{name:"lastName",decorator:[B],component:[O,{placeholder:"lastname"}],required:!0})),r.createElement(f,{name:"email",title:"Email",required:!0,validator:"email",decorator:[B],component:[O]}),r.createElement(f,{name:"gender",title:"Gender",decorator:[B],component:[j],dataSource:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),r.createElement(f,{name:"birthday",title:"Birthday",required:!0,decorator:[B],component:[D]}),r.createElement(f,{name:"address",title:"Address",required:!0,decorator:[B],component:[R],reactions:G}),r.createElement(f,{name:"idCard",title:"ID",required:!0,decorator:[B],component:[le]}),r.createElement(m,{name:"contacts",title:"Contacts",decorator:[B]},function(me){var ye;return r.createElement(z,null,(ye=me.value)===null||ye===void 0?void 0:ye.map(function(ue,de){return r.createElement("div",{key:de,className:"array-items-item"},r.createElement(f,{name:"".concat(de),title:"Contact Informations",component:[ne.Popover],reactions:function(ve){ve.title=ve.query(".[].name").value()||ve.title}},r.createElement(o,{name:"layout",component:[V,{layout:"vertical"}]},r.createElement(f,{name:"name",title:"Name",required:!0,decorator:[B],component:[O,{style:{width:300}}]}),r.createElement(f,{name:"email",title:"Email",required:!0,validator:"email",decorator:[B],component:[O,{style:{width:300}}]}),r.createElement(f,{name:"phone",title:"Phone Number",required:!0,validator:"phone",decorator:[B],component:[O,{style:{width:300}}]}))))}),r.createElement(z.Addition,{title:"Add Contact"}))}))))))}});case 55:case"end":return T.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-edit-detail-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react'
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
      {field.editable && (
        <Button icon={<UploadOutlined />}>Upload a copy</Button>
      )}
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
          {
            name: 'Zhang San',
            phone: '13245633378',
            email: 'zhangsan@gmail.com',
          },
          { name: 'Li Si', phone: '16873452678', email: 'lisi@gmail.com' },
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
        <Card title="Edit User" style={{ width: 620 }}>
          <Spin spinning={loading}>
            <Form
              form={form}
              labelCol={5}
              wrapperCol={16}
              onAutoSubmit={console.log}
            >
              <Field
                name="username"
                title="Username"
                required
                decorator={[FormItem]}
                component={[Input]}
              />
              <VoidField
                name="name"
                title="Name"
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
                      placeholder: 'firstName',
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
                      placeholder: 'lastname',
                    },
                  ]}
                  required
                />
              </VoidField>
              <Field
                name="email"
                title="Email"
                required
                validator="email"
                decorator={[FormItem]}
                component={[Input]}
              />
              <Field
                name="gender"
                title="Gender"
                decorator={[FormItem]}
                component={[Select]}
                dataSource={[
                  {
                    label: 'male',
                    value: 1,
                  },
                  {
                    label: 'female',
                    value: 2,
                  },
                  {
                    label: 'third gender',
                    value: 3,
                  },
                ]}
                required
              />
              <Field
                name="birthday"
                title="Birthday"
                required
                decorator={[FormItem]}
                component={[DatePicker]}
              />
              <Field
                name="address"
                title="Address"
                required
                decorator={[FormItem]}
                component={[Cascader]}
                reactions={fetchAddress}
              />
              <Field
                name="idCard"
                title="ID"
                required
                decorator={[FormItem]}
                component={[IDUpload]}
              />
              <ArrayField
                name="contacts"
                title="Contacts"
                decorator={[FormItem]}
              >
                {(field) => (
                  <ArrayBase>
                    {field.value?.map((item, index) => (
                      <div key={index} className="array-items-item">
                        <Field
                          name={\`\${index}\`}
                          title="Contact Informations"
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
                              title="Name"
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
                              title="Email"
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
                              title="Phone Number"
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
                    <ArrayBase.Addition title="Add Contact" />
                  </ArrayBase>
                )}
              </ArrayField>
            </Form>
          </Spin>
        </Card>
      </PreviewText.Placeholder>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./index.less":{type:"FILE",value:e(19755).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/edit-detail",context:{"./index.less":v,react:x||(x=e.t(L,2)),"@next-formily/core":$,"@next-formily/react":F,"@next-formily/antd":c,"@next-formily/reactive":t,antd:l,"@ant-design/icons":y,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/index.less":v},renderOpts:{compile:function(){var a=N()(I()().mark(function r(){var p,u=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(6404).then(e.bind(e,46404));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,u));case 3:case"end":return i.stop()}},r)}));function s(){return a.apply(this,arguments)}return s}()}}}},37313:function(_,E,e){var x;e.r(E),e.d(E,{demos:function(){return y}});var Q=e(48305),W=e.n(Q),he=e(26068),I=e.n(he),oe=e(90228),S=e.n(oe),P=e(87999),M=e.n(P),A=e(69854),N=e(40751),L=e(68168),$=e(97204),F=e(22285),c=e(49320),t=e(43132),l=e(70869),y={"docs-guide-scenes-login-register-demo-0":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D;return S()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=z.sent,a=n.default,z.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=z.sent,r=s.createForm,z.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=z.sent,u=p.createSchemaField,z.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=z.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,z.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return b=z.sent,g=b.Tabs,C=b.Card,z.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return B=z.sent,z.next=30,Promise.resolve().then(e.bind(e,43132));case 30:return V=z.sent,O=V.VerifyCode,j=r({validateFirst:!0}),R=r({validateFirst:!0}),D=u({components:{FormItem:d,Input:f,Password:o,VerifyCode:O},scope:{icon:function(K){return a.createElement(B[K])}}}),z.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{style:{width:400}},a.createElement(g,{style:{overflow:"visible",marginTop:-10}},a.createElement(g.TabPane,{key:"1",tab:"Password Login"},a.createElement(i,{form:j,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(D,null,a.createElement(D.String,{name:"username",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":{required:!0},"x-component-props":{prefix:"{{icon('UserOutlined')}}"}}),a.createElement(D.String,{name:"password",title:"Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{prefix:"{{icon('LockOutlined')}}"}})),a.createElement(m,{block:!0,size:"large"},"Log in"))),a.createElement(g.TabPane,{key:"2",tab:"Mobile Login"},a.createElement(i,{form:R,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(D,null,a.createElement(D.String,{name:"phone",title:"Phone Number",required:!0,"x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('PhoneOutlined')}}"}}),a.createElement(D.String,{name:"verifyCode",title:"Verification Code",required:!0,"x-decorator":"FormItem","x-component":"VerifyCode","x-component-props":{prefix:"{{icon('LockOutlined')}}"},"x-reactions":[{dependencies:[".phone#value",".phone#valid"],fulfill:{state:{"component[1].readyPost":"{{$deps[0] && $deps[1]}}","component[1].phoneNumber":"{{$deps[0]}}"}}}]})),a.createElement(m,{block:!0,size:"large"},"Log in")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#Sign up"},"Sign up"),a.createElement("a",{href:"#Forgot password"},"Forgot password?"))))}});case 36:case"end":return z.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          <Tabs.TabPane key="1" tab="Password Login">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="username"
                  title="Username"
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
                  title="Password"
                  required
                  x-decorator="FormItem"
                  x-component="Password"
                  x-component-props={{
                    prefix: "{{icon('LockOutlined')}}",
                  }}
                />
              </SchemaField>
              <Submit block size="large">
                Log in
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Mobile Login">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="phone"
                  title="Phone Number"
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
                  title="Verification Code"
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
                Log in
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
          <a href="#Sign up">Sign up</a>
          <a href="#Forgot password">Forgot password?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{"./VerifyCode.tsx":t,react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F,"@ant-design/icons":c,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-1":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z;return S()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=K.sent,a=n.default,K.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=K.sent,r=s.createForm,K.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=K.sent,u=p.createSchemaField,K.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=K.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,K.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return b=K.sent,g=b.Tabs,C=b.Card,K.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return B=K.sent,K.next=30,Promise.resolve().then(e.bind(e,43132));case 30:return V=K.sent,O=V.VerifyCode,j=r({validateFirst:!0}),R=r({validateFirst:!0}),D=u({components:{FormItem:d,Input:f,Password:o,VerifyCode:O},scope:{icon:function(te){return a.createElement(B[te])}}}),Z={type:"object",properties:{username:{type:"string",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('UserOutlined')}}"}},password:{type:"string",title:"Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{prefix:"{{icon('LockOutlined')}}"}}}},z={type:"object",properties:{phone:{type:"string",title:"Phone Number",required:!0,"x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{prefix:"{{icon('PhoneOutlined')}}"}},verifyCode:{type:"string",title:"Verification Code",required:!0,"x-decorator":"FormItem","x-component":"VerifyCode","x-component-props":{prefix:"{{icon('LockOutlined')}}"},"x-reactions":[{dependencies:[".phone#value",".phone#valid"],fulfill:{state:{"component[1].readyPost":"{{$deps[0] && $deps[1]}}","component[1].phoneNumber":"{{$deps[0]}}"}}}]}}},K.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{style:{width:400}},a.createElement(g,{style:{overflow:"visible",marginTop:-10}},a.createElement(g.TabPane,{key:"1",tab:"Password Login"},a.createElement(i,{form:j,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(D,{schema:Z}),a.createElement(m,{block:!0,size:"large"},"Log in"))),a.createElement(g.TabPane,{key:"2",tab:"Mobile Login"},a.createElement(i,{form:R,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(D,{schema:z}),a.createElement(m,{block:!0,size:"large"},"Log in")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#Sign up"},"Sign up"),a.createElement("a",{href:"#Forgot password"},"Forgot password?"))))}});case 38:case"end":return K.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: 'Password',
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
      title: 'Phone Number',
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
      title: 'Verification Code',
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
          <Tabs.TabPane key="1" tab="Password Login">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField schema={normalSchema} />
              <Submit block size="large">
                Log in
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Mobile Login">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField schema={phoneSchema} />
              <Submit block size="large">
                Log in
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
          <a href="#Sign up">Sign up</a>
          <a href="#Forgot password">Forgot password?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{"./VerifyCode.tsx":t,react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F,"@ant-design/icons":c,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-2":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z;return S()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=K.sent,a=n.default,K.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=K.sent,r=s.createForm,K.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=K.sent,u=p.Field,K.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=K.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,K.next=22,Promise.resolve().then(e.bind(e,22285));case 22:return b=K.sent,g=b.Tabs,C=b.Card,K.next=27,Promise.resolve().then(e.bind(e,49320));case 27:return B=K.sent,V=B.UserOutlined,O=B.LockOutlined,j=B.PhoneOutlined,K.next=33,Promise.resolve().then(e.bind(e,43132));case 33:return R=K.sent,D=R.VerifyCode,Z=r({validateFirst:!0}),z=r({validateFirst:!0}),K.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{style:{width:400}},a.createElement(g,{style:{overflow:"visible",marginTop:-10}},a.createElement(g.TabPane,{key:"1",tab:"Password Login"},a.createElement(i,{form:Z,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"Username",required:!0,decorator:[d],component:[f,{prefix:a.createElement(V,null)}]}),a.createElement(u,{name:"password",title:"Password",required:!0,decorator:[d],component:[o,{prefix:a.createElement(O,null)}]}),a.createElement(m,{block:!0,size:"large"},"Log in"))),a.createElement(g.TabPane,{key:"2",tab:"Mobile Login"},a.createElement(i,{form:z,layout:"vertical",size:"large",onAutoSubmit:console.log},a.createElement(u,{name:"phone",title:"Phone Number",required:!0,validator:"phone",decorator:[d],component:[f,{prefix:a.createElement(j,null)}]}),a.createElement(u,{name:"verifyCode",title:"Verification Code",required:!0,reactions:function(se){var ie=se.query(".phone");se.setComponentProps({readyPost:ie.get("valid")&&ie.get("value"),phoneNumber:ie.get("value")})},decorator:[d],component:[D,{prefix:a.createElement(O,null)}]}),a.createElement(m,{block:!0,size:"large"},"Log in")))),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("a",{href:"#Sign up"},"Sign up"),a.createElement("a",{href:"#Forgot password"},"Forgot password?"))))}});case 38:case"end":return K.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
          <Tabs.TabPane key="1" tab="Password Login">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="username"
                title="Username"
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
                title="Password"
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
                Log in
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Mobile Login">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="phone"
                title="Phone Number"
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
                title="Verification Code"
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
                Log in
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
          <a href="#Sign up">Sign up</a>
          <a href="#Forgot password">Forgot password?</a>
        </div>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"},"./VerifyCode.tsx":{type:"FILE",value:e(35656).Z}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{"./VerifyCode.tsx":t,react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F,"@ant-design/icons":c,"/home/runner/work/NextFormily/NextFormily/docs/guide/scenes/VerifyCode.tsx":t},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-3":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w;return S()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=H.sent,a=n.default,H.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=H.sent,r=s.createForm,H.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=H.sent,u=p.createSchemaField,H.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=H.sent,i=h.Form,d=h.FormItem,f=h.FormLayout,o=h.Input,m=h.Select,b=h.Password,g=h.Cascader,C=h.DatePicker,B=h.Submit,V=h.Space,O=h.FormGrid,j=h.Upload,R=h.ArrayItems,D=h.Editable,Z=h.FormButtonGroup,H.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return z=H.sent,Y=z.action,H.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return K=H.sent,ne=K.Card,te=K.Button,H.next=41,Promise.resolve().then(e.bind(e,49320));case 41:return se=H.sent,ie=se.UploadOutlined,q=r({validateFirst:!0}),pe=function(le){return a.createElement(j,I()(I()({},le),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(te,{icon:a.createElement(ie,null)},"Upload a copy"))},w=u({components:{FormItem:d,FormGrid:O,FormLayout:f,Input:o,DatePicker:C,Cascader:g,Select:m,Password:b,IDUpload:pe,Space:V,ArrayItems:R,Editable:D},scope:{fetchAddress:function(le){var G=function J(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(T).reduce(function(k,X){var ee=W()(X,2),re=ee[0],ce=ee[1];if(typeof ce=="string")return k.concat({label:ce,value:re});var me=ce.name,ye=ce.code,ue=ce.cities,de=ce.districts,fe=J(ue),ve=J(de);return k.concat({label:me,value:ye,children:fe.length?fe:ve.length?ve:void 0})},[])};le.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(J){return J.json()}).then(Y.bound(function(J){le.dataSource=G(J),le.loading=!1}))}}}),H.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(ne,{title:"Sign up",style:{width:620}},a.createElement(i,{form:q,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(w,null,a.createElement(w.String,{name:"username",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"}),a.createElement(w.String,{name:"password",title:"Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]}),a.createElement(w.String,{name:"confirm_password",title:"Confirm Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]}),a.createElement(w.Void,{title:"name","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid"},a.createElement(w.String,{name:"firstName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstname"},required:!0}),a.createElement(w.String,{name:"lastName","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"},required:!0})),a.createElement(w.String,{name:"email",title:"Email",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),a.createElement(w.String,{name:"gender",title:"Gender","x-decorator":"FormItem","x-component":"Select",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),a.createElement(w.String,{name:"birthday",title:"Birthday",required:!0,"x-decorator":"FormItem","x-component":"DatePicker"}),a.createElement(w.String,{name:"address",title:"Address",required:!0,"x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"}),a.createElement(w.String,{name:"idCard",title:"ID",required:!0,"x-decorator":"FormItem","x-component":"IDUpload"}),a.createElement(w.Array,{name:"contacts",title:"Contacts",required:!0,"x-decorator":"FormItem","x-component":"ArrayItems"},a.createElement(w.Object,{"x-component":"ArrayItems.Item"},a.createElement(w.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"}),a.createElement(w.Void,{name:"popover",title:"Contact Information","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{dependencies:[".popover.name"],fulfill:{schema:{title:"{{$deps[0]}}"}}}]},a.createElement(w.String,{name:"name",required:!0,title:"Name","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),a.createElement(w.String,{name:"email",title:"Email","x-validator":[{required:!0},"email"],"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}}),a.createElement(w.String,{name:"phone",required:!0,title:"Phone Number","x-validator":"phone","x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}})),a.createElement(w.Void,{"x-decorator":"FormItem","x-component":"ArrayItems.Remove"})),a.createElement(w.Void,{"x-component":"ArrayItems.Addition",title:"Add Contact"}))),a.createElement(Z.FormItem,null,a.createElement(B,{block:!0,size:"large"},"Sign up")))))}});case 47:case"end":return H.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
      <Card title="Sign up" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField>
            <SchemaField.String
              name="username"
              title="Username"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="password"
              title="Password"
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
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.String
              name="confirm_password"
              title="Confirm Password"
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
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.Void
              title="name"
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
                  placeholder: 'firstname',
                }}
                required
              />
              <SchemaField.String
                name="lastName"
                x-decorator="FormItem"
                x-component="Input"
                x-component-props={{
                  placeholder: 'lastname',
                }}
                required
              />
            </SchemaField.Void>
            <SchemaField.String
              name="email"
              title="Email"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="gender"
              title="Gender"
              x-decorator="FormItem"
              x-component="Select"
              enum={[
                {
                  label: 'male',
                  value: 1,
                },
                {
                  label: 'female',
                  value: 2,
                },
                {
                  label: 'third gender',
                  value: 3,
                },
              ]}
              required
            />
            <SchemaField.String
              name="birthday"
              title="Birthday"
              required
              x-decorator="FormItem"
              x-component="DatePicker"
            />
            <SchemaField.String
              name="address"
              title="Address"
              required
              x-decorator="FormItem"
              x-component="Cascader"
              x-reactions="{{fetchAddress}}"
            />
            <SchemaField.String
              name="idCard"
              title="ID"
              required
              x-decorator="FormItem"
              x-component="IDUpload"
            />
            <SchemaField.Array
              name="contacts"
              title="Contacts"
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
                  title="Contact Information"
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
                    title="Name"
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
                    title="Email"
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
                    title="Phone Number"
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
                title="Add Contact"
              />
            </SchemaField.Array>
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Sign up
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,"@next-formily/reactive":l,antd:F,"@ant-design/icons":c},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-4":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w,ae;return S()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=U.sent,a=n.default,U.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=U.sent,r=s.createForm,U.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=U.sent,u=p.createSchemaField,U.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=U.sent,i=h.Form,d=h.FormItem,f=h.FormLayout,o=h.Input,m=h.Select,b=h.Password,g=h.Cascader,C=h.DatePicker,B=h.Submit,V=h.Space,O=h.FormGrid,j=h.Upload,R=h.ArrayItems,D=h.Editable,Z=h.FormButtonGroup,U.next=32,Promise.resolve().then(e.bind(e,70869));case 32:return z=U.sent,Y=z.action,U.next=36,Promise.resolve().then(e.bind(e,22285));case 36:return K=U.sent,ne=K.Card,te=K.Button,U.next=41,Promise.resolve().then(e.bind(e,49320));case 41:return se=U.sent,ie=se.UploadOutlined,q=r({validateFirst:!0}),pe=function(G){return a.createElement(j,I()(I()({},G),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(te,{icon:a.createElement(ie,null)},"Upload a copy"))},w=u({components:{FormItem:d,FormGrid:O,FormLayout:f,Input:o,DatePicker:C,Cascader:g,Select:m,Password:b,IDUpload:pe,Space:V,ArrayItems:R,Editable:D},scope:{fetchAddress:function(G){var J=function T(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(k).reduce(function(X,ee){var re=W()(ee,2),ce=re[0],me=re[1];if(typeof me=="string")return X.concat({label:me,value:ce});var ye=me.name,ue=me.code,de=me.cities,fe=me.districts,ve=T(de),Fe=T(fe);return X.concat({label:ye,value:ue,children:ve.length?ve:Fe.length?Fe:void 0})},[])};G.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(T){return T.json()}).then(Y.bound(function(T){G.dataSource=J(T),G.loading=!1}))}}}),ae={type:"object",properties:{username:{type:"string",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"},password:{type:"string",title:"Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4password\u4E0D\u5339\u914D" : ""}}'}}}]},confirm_password:{type:"string",title:"Confirm Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]},name:{type:"void",title:"name","x-decorator":"FormItem","x-decorator-props":{asterisk:!0,feedbackLayout:"none"},"x-component":"FormGrid",properties:{firstName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"firstname"}},lastName:{type:"string",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"lastname"}}}},email:{type:"string",title:"Email",required:!0,"x-decorator":"FormItem","x-component":"Input","x-validator":"email"},gender:{type:"string",title:"Gender",enum:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],"x-decorator":"FormItem","x-component":"Select"},birthday:{type:"string",required:!0,title:"Birthday","x-decorator":"FormItem","x-component":"DatePicker"},address:{type:"string",required:!0,title:"Address","x-decorator":"FormItem","x-component":"Cascader","x-reactions":"{{fetchAddress}}"},idCard:{type:"string",required:!0,title:"ID","x-decorator":"FormItem","x-component":"IDUpload"},contacts:{type:"array",required:!0,title:"Contacts","x-decorator":"FormItem","x-component":"ArrayItems",items:{type:"object","x-component":"ArrayItems.Item",properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},popover:{type:"void",title:"improve contact information","x-decorator":"Editable.Popover","x-component":"FormLayout","x-component-props":{layout:"vertical"},"x-reactions":[{dependencies:[".popover.name"],fulfill:{schema:{title:"{{$deps[0]}}"}}}],properties:{name:{type:"string",title:"Name",required:!0,"x-decorator":"FormItem","x-component":"Input","x-component-props":{style:{width:300}}},email:{type:"string",title:"Email","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"email"],"x-component-props":{style:{width:300}}},phone:{type:"string",title:"Phone Number","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0},"phone"],"x-component-props":{style:{width:300}}}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}},properties:{addition:{type:"void",title:"Add Contact","x-component":"ArrayItems.Addition"}}}}},U.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(ne,{title:"Sign up",style:{width:620}},a.createElement(i,{form:q,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(w,{schema:ae}),a.createElement(Z.FormItem,null,a.createElement(B,{block:!0,size:"large"},"Sign up")))))}});case 48:case"end":return U.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    password: {
      type: 'string',
      title: 'Password',
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
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "\u786E\u8BA4password\u4E0D\u5339\u914D" : ""}}',
            },
          },
        },
      ],
    },
    confirm_password: {
      type: 'string',
      title: 'Confirm Password',
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
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
            },
          },
        },
      ],
    },
    name: {
      type: 'void',
      title: 'name',
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
            placeholder: 'firstname',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: 'lastname',
          },
        },
      },
    },
    email: {
      type: 'string',
      title: 'Email',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'email',
    },
    gender: {
      type: 'string',
      title: 'Gender',
      enum: [
        {
          label: 'male',
          value: 1,
        },
        {
          label: 'female',
          value: 2,
        },
        {
          label: 'third gender',
          value: 3,
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    birthday: {
      type: 'string',
      required: true,
      title: 'Birthday',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'string',
      required: true,
      title: 'Address',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-reactions': '{{fetchAddress}}',
    },
    idCard: {
      type: 'string',
      required: true,
      title: 'ID',
      'x-decorator': 'FormItem',
      'x-component': 'IDUpload',
    },
    contacts: {
      type: 'array',
      required: true,
      title: 'Contacts',
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
            title: 'improve contact information',
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
                title: 'Name',
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
                title: 'Email',
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
                title: 'Phone Number',
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
          title: 'Add Contact',
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
      <Card title="Sign up" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Sign up
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,"@next-formily/reactive":l,antd:F,"@ant-design/icons":c},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-5":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O,j,R,D,Z,z,Y,K,ne,te,se,ie,q,pe,w;return S()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=H.sent,a=n.default,H.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=H.sent,r=s.createForm,H.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=H.sent,u=p.Field,h=p.VoidField,i=p.ArrayField,H.next=16,Promise.resolve().then(e.bind(e,97204));case 16:return d=H.sent,f=d.Form,o=d.FormItem,m=d.Input,b=d.Select,g=d.Password,C=d.Cascader,B=d.DatePicker,V=d.Submit,O=d.FormGrid,j=d.Upload,R=d.FormButtonGroup,D=d.ArrayBase,Z=d.Editable,z=d.FormLayout,H.next=33,Promise.resolve().then(e.bind(e,70869));case 33:return Y=H.sent,K=Y.action,H.next=37,Promise.resolve().then(e.bind(e,22285));case 37:return ne=H.sent,te=ne.Card,se=ne.Button,H.next=42,Promise.resolve().then(e.bind(e,49320));case 42:return ie=H.sent,q=ie.UploadOutlined,pe=r({validateFirst:!0}),w=function(le){return a.createElement(j,I()(I()({},le),{},{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"}}),a.createElement(se,{icon:a.createElement(q,null)},"Upload a copy"))},H.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(te,{title:"Sign up",style:{width:620}},a.createElement(f,{form:pe,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"Username",required:!0,decorator:[o],component:[m]}),a.createElement(u,{name:"password",title:"Password",required:!0,decorator:[o],component:[g,{checkStrength:!0}],reactions:function(G){var J=G.query(".confirm_password");G.selfErrors=J.get("value")&&G.value&&G.value!==J.get("value")?"Confirm that the password does not match":""}}),a.createElement(u,{name:"confirm_password",title:"Confirm Password",required:!0,decorator:[o],component:[g,{checkStrength:!0}],reactions:function(G){var J=G.query(".password");G.selfErrors=J.get("value")&&G.value&&G.value!==J.get("value")?"Confirm that the password does not match":""}}),a.createElement(h,{name:"name",title:"Name",decorator:[o,{asterisk:!0,feedbackLayout:"none"}],component:[O]},a.createElement(u,{name:"firstName",decorator:[o],component:[m,{placeholder:"firstname"}],required:!0}),a.createElement(u,{name:"lastName",decorator:[o],component:[m,{placeholder:"lastname"}],required:!0})),a.createElement(u,{name:"email",title:"Email",required:!0,validator:"email",decorator:[o],component:[m]}),a.createElement(u,{name:"gender",title:"Gender",decorator:[o],component:[b],dataSource:[{label:"male",value:1},{label:"female",value:2},{label:"third gender",value:3}],required:!0}),a.createElement(u,{name:"birthday",title:"Birthday",required:!0,decorator:[o],component:[B]}),a.createElement(u,{name:"address",title:"Address",required:!0,decorator:[o],component:[C],reactions:function(G){var J=function T(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.entries(k).reduce(function(X,ee){var re=W()(ee,2),ce=re[0],me=re[1];if(typeof me=="string")return X.concat({label:me,value:ce});var ye=me.name,ue=me.code,de=me.cities,fe=me.districts,ve=T(de),Fe=T(fe);return X.concat({label:ye,value:ue,children:ve.length?ve:Fe.length?Fe:void 0})},[])};G.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(function(T){return T.json()}).then(K.bound(function(T){G.dataSource=J(T),G.loading=!1}))}}),a.createElement(u,{name:"idCard",title:"ID",required:!0,decorator:[o],component:[w]}),a.createElement(i,{name:"contacts",title:"Contacts",decorator:[o]},function(le){var G;return a.createElement(D,null,(G=le.value)===null||G===void 0?void 0:G.map(function(J,T){return a.createElement("div",{key:T,className:"array-items-item"},a.createElement(u,{name:"".concat(T),title:"Contact Informations",component:[Z.Popover],reactions:function(X){X.title=X.query(".[].name").value()||X.title}},a.createElement(h,{name:"layout",component:[z,{layout:"vertical"}]},a.createElement(u,{name:"name",title:"Name",required:!0,decorator:[o],component:[m,{style:{width:300}}]}),a.createElement(u,{name:"email",title:"Email",required:!0,validator:"email",decorator:[o],component:[m,{style:{width:300}}]}),a.createElement(u,{name:"phone",title:"Phone Number",required:!0,validator:"phone",decorator:[o],component:[m,{style:{width:300}}]}))),a.createElement(o.BaseItem,null,a.createElement(D.Remove,{index:T}),a.createElement(D.MoveDown,{index:T}),a.createElement(D.MoveUp,{index:T})))}),a.createElement(D.Addition,{title:"Add Contact"}))}),a.createElement(R.FormItem,null,a.createElement(V,{block:!0,size:"large"},"Sign up")))))}});case 47:case"end":return H.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Button icon={<UploadOutlined />}>Upload a copy</Button>
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
      <Card title="Sign up" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <Field
            name="username"
            title="Username"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="password"
            title="Password"
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
                  ? 'Confirm that the password does not match'
                  : ''
            }}
          />
          <Field
            name="confirm_password"
            title="Confirm Password"
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
                  ? 'Confirm that the password does not match'
                  : ''
            }}
          />
          <VoidField
            name="name"
            title="Name"
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
                  placeholder: 'firstname',
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
                  placeholder: 'lastname',
                },
              ]}
              required
            />
          </VoidField>
          <Field
            name="email"
            title="Email"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="gender"
            title="Gender"
            decorator={[FormItem]}
            component={[Select]}
            dataSource={[
              {
                label: 'male',
                value: 1,
              },
              {
                label: 'female',
                value: 2,
              },
              {
                label: 'third gender',
                value: 3,
              },
            ]}
            required
          />
          <Field
            name="birthday"
            title="Birthday"
            required
            decorator={[FormItem]}
            component={[DatePicker]}
          />
          <Field
            name="address"
            title="Address"
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
            title="ID"
            required
            decorator={[FormItem]}
            component={[IDUpload]}
          />
          <ArrayField name="contacts" title="Contacts" decorator={[FormItem]}>
            {(field) => (
              <ArrayBase>
                {field.value?.map((item, index) => (
                  <div key={index} className="array-items-item">
                    <Field
                      name={\`\${index}\`}
                      title="Contact Informations"
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
                          title="Name"
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
                          title="Email"
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
                          title="Phone Number"
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
                <ArrayBase.Addition title="Add Contact" />
              </ArrayBase>
            )}
          </ArrayField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Sign up
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},"@next-formily/reactive":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"},"@ant-design/icons":{type:"NPM",value:"6.3.2"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,"@next-formily/reactive":l,antd:F,"@ant-design/icons":c},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-6":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V;return S()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=j.sent,a=n.default,j.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=j.sent,r=s.createForm,j.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=j.sent,u=p.createSchemaField,j.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=j.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,b=h.FormButtonGroup,j.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return g=j.sent,C=g.Card,B=r({validateFirst:!0}),V=u({components:{FormItem:d,Input:f,Password:o}}),j.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{title:"change password",style:{width:620}},a.createElement(i,{form:B,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(V,null,a.createElement(V.String,{name:"username",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"}),a.createElement(V.String,{name:"email",title:"Email",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"}),a.createElement(V.String,{name:"old_password",title:"Old Password",required:!0,"x-decorator":"FormItem","x-component":"Password"}),a.createElement(V.String,{name:"password",title:"New Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]}),a.createElement(V.String,{name:"confirm_password",title:"Confirm Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]})),a.createElement(b.FormItem,null,a.createElement(m,{block:!0,size:"large"},"Confirm")))))}});case 28:case"end":return j.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Card title="change password" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField>
            <SchemaField.String
              name="username"
              title="Username"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="email"
              title="Email"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="old_password"
              title="Old Password"
              required
              x-decorator="FormItem"
              x-component="Password"
            />
            <SchemaField.String
              name="password"
              title="New Password"
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
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.String
              name="confirm_password"
              title="Confirm Password"
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
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
                    },
                  },
                },
              ]}
            />
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Confirm
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-7":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B,V,O;return S()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=R.sent,a=n.default,R.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=R.sent,r=s.createForm,R.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=R.sent,u=p.createSchemaField,R.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=R.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,b=h.FormButtonGroup,R.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return g=R.sent,C=g.Card,B=r({validateFirst:!0}),V=u({components:{FormItem:d,Input:f,Password:o}}),O={type:"object",properties:{username:{type:"string",title:"Username",required:!0,"x-decorator":"FormItem","x-component":"Input"},email:{type:"string",title:"Email",required:!0,"x-validator":"email","x-decorator":"FormItem","x-component":"Input"},oldPassword:{type:"string",title:"Old Password",required:!0,"x-decorator":"FormItem","x-component":"Password"},password:{type:"string",title:"New Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".confirm_password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]},confirm_password:{type:"string",title:"Confirm Password",required:!0,"x-decorator":"FormItem","x-component":"Password","x-component-props":{checkStrength:!0},"x-reactions":[{dependencies:[".password"],fulfill:{state:{selfErrors:'{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}'}}}]}}},R.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{title:"change password",style:{width:620}},a.createElement(i,{form:B,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(V,{schema:O}),a.createElement(b.FormItem,null,a.createElement(m,{block:!0,size:"large"},"Confirm")))))}});case 29:case"end":return R.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    email: {
      type: 'string',
      title: 'Email',
      required: true,
      'x-validator': 'email',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    oldPassword: {
      type: 'string',
      title: 'Old Password',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
    },
    password: {
      type: 'string',
      title: 'New Password',
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
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
            },
          },
        },
      ],
    },
    confirm_password: {
      type: 'string',
      title: 'Confirm Password',
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
                '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "Confirm that the password does not match" : ""}}',
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
      <Card title="change password" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Confirm
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}},"docs-guide-scenes-login-register-demo-8":{component:A.memo(A.lazy(M()(S()().mark(function v(){var n,a,s,r,p,u,h,i,d,f,o,m,b,g,C,B;return S()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return n=O.sent,a=n.default,O.next=6,Promise.resolve().then(e.bind(e,40751));case 6:return s=O.sent,r=s.createForm,O.next=10,Promise.resolve().then(e.bind(e,68168));case 10:return p=O.sent,u=p.Field,O.next=14,Promise.resolve().then(e.bind(e,97204));case 14:return h=O.sent,i=h.Form,d=h.FormItem,f=h.Input,o=h.Password,m=h.Submit,b=h.FormButtonGroup,O.next=23,Promise.resolve().then(e.bind(e,22285));case 23:return g=O.sent,C=g.Card,B=r({validateFirst:!0}),O.abrupt("return",{default:function(){return a.createElement("div",{style:{display:"flex",justifyContent:"center",background:"#eee",padding:"40px 0"}},a.createElement(C,{title:"change password",style:{width:620}},a.createElement(i,{form:B,labelCol:5,wrapperCol:16,onAutoSubmit:console.log},a.createElement(u,{name:"username",title:"Username",required:!0,decorator:[d],component:[f]}),a.createElement(u,{name:"email",title:"Email",required:!0,validator:"email",decorator:[d],component:[f]}),a.createElement(u,{name:"old_password",title:"Old Password",required:!0,decorator:[d],component:[o]}),a.createElement(u,{name:"password",title:"New Password",required:!0,decorator:[d],component:[o,{checkStrength:!0}],reactions:function(D){var Z=D.query(".confirm_password");D.selfErrors=Z.get("value")&&D.value&&D.value!==Z.get("value")?"Confirm that the password does not match":""}}),a.createElement(u,{name:"confirm_password",title:"Confirm Password",required:!0,decorator:[d],component:[o,{checkStrength:!0}],reactions:function(D){var Z=D.query(".password");D.selfErrors=Z.get("value")&&D.value&&D.value!==Z.get("value")?"Confirm that the password does not match":""}}),a.createElement(b.FormItem,null,a.createElement(m,{block:!0,size:"large"},"Confirm change")))))}});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-scenes-login-register-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Card title="change password" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <Field
            name="username"
            title="Username"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="Email"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="old_password"
            title="Old Password"
            required
            decorator={[FormItem]}
            component={[Password]}
          />
          <Field
            name="password"
            title="New Password"
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
                  ? 'Confirm that the password does not match'
                  : ''
            }}
          />
          <Field
            name="confirm_password"
            title="Confirm Password"
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
                  ? 'Confirm that the password does not match'
                  : ''
            }}
          />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Confirm change
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}`},react:{type:"NPM",value:"19.2.8"},"@next-formily/core":{type:"NPM",value:"3.1.2"},"@next-formily/react":{type:"NPM",value:"3.1.2"},"@next-formily/antd":{type:"NPM",value:"3.1.2"},antd:{type:"NPM",value:"6.6.0"}},entry:"index.tsx"},routeId:"docs/guide/scenes/login-register",context:{react:x||(x=e.t(A,2)),"@next-formily/core":N,"@next-formily/react":L,"@next-formily/antd":$,antd:F},renderOpts:{compile:function(){var v=M()(S()().mark(function a(){var s,r=arguments;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(6404).then(e.bind(e,46404));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,r));case 3:case"end":return u.stop()}},a)}));function n(){return v.apply(this,arguments)}return n}()}}}},8487:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},81446:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},33748:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},92981:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},48304:function(_,E,e){e.r(E),e.d(E,{demos:function(){return Q}});var x=e(69854),Q={}},57831:function(_,E,e){e.r(E),e.d(E,{demos:function(){return P}});var x=e(90228),Q=e.n(x),W=e(36075),he=e.n(W),I=e(87999),oe=e.n(I),S=e(69854),P={"docs-demo-0":{component:S.memo(S.lazy(oe()(Q()().mark(function M(){var A,N,L,$;return Q()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=c.sent,N=A.default,c.next=6,e.e(5145).then(e.bind(e,15145));case 6:return L=c.sent,$=L.Section,c.t0=he(),c.next=11,e.e(6392).then(e.bind(e,76392));case 11:return c.t1=c.sent,(0,c.t0)(c.t1),c.abrupt("return",{default:function(){return N.createElement($,{title:"Fool Writing, Ultra-high Performance",style:{marginTop:40},titleStyle:{paddingBottom:100,fontWeight:"bold"}},N.createElement("iframe",{className:"codesandbox",src:"https://codesandbox.io/embed/formilyyaliceshi-vbu4w?fontsize=12&module=%2FApp.tsx&theme=dark",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}});case 14:case"end":return c.stop()}},M)})))),asset:null,routeId:"docs/index",context:void 0,renderOpts:void 0},"docs-demo-1":{component:S.memo(S.lazy(oe()(Q()().mark(function M(){var A,N,L,$;return Q()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=c.sent,N=A.default,c.next=6,e.e(5145).then(e.bind(e,15145));case 6:return L=c.sent,$=L.Section,c.t0=he(),c.next=11,e.e(6392).then(e.bind(e,76392));case 11:return c.t1=c.sent,(0,c.t0)(c.t1),c.abrupt("return",{default:function(){return N.createElement($,{title:"Form Builder,Efficient Development",style:{marginTop:140,fontWeight:"bold"},titleStyle:{paddingBottom:140},scale:1.2},N.createElement("a",{href:"//designable-antd.formilyjs.org",target:"_blank",rel:"noreferrer"},N.createElement("img",{src:"//img.alicdn.com/imgextra/i2/O1CN01eI9FLz22tZek2jv7E_!!6000000007178-2-tps-3683-2272.png"})))}});case 14:case"end":return c.stop()}},M)})))),asset:null,routeId:"docs/index",context:void 0,renderOpts:void 0},"docs-demo-2":{component:S.memo(S.lazy(oe()(Q()().mark(function M(){var A,N,L,$;return Q()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=c.sent,N=A.default,c.next=6,e.e(5145).then(e.bind(e,15145));case 6:return L=c.sent,$=L.Section,c.t0=he(),c.next=11,e.e(6392).then(e.bind(e,76392));case 11:return c.t1=c.sent,(0,c.t0)(c.t1),c.abrupt("return",{default:function(){return N.createElement($,{title:"Pure Core, More Extensibility",style:{marginTop:140},titleStyle:{paddingBottom:100,fontWeight:"bold"}},N.createElement("a",{href:"//core.formilyjs.org",target:"_blank",rel:"noreferrer"},N.createElement("img",{src:"//img.alicdn.com/imgextra/i4/O1CN019qbf1b1ChnTfT9x3X_!!6000000000113-55-tps-1939-1199.svg"})))}});case 14:case"end":return c.stop()}},M)})))),asset:null,routeId:"docs/index",context:void 0,renderOpts:void 0},"docs-demo-3":{component:S.memo(S.lazy(oe()(Q()().mark(function M(){var A,N,L,$,F,c;return Q()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=l.sent,N=A.default,l.next=6,e.e(5145).then(e.bind(e,15145));case 6:return L=l.sent,$=L.Section,l.next=10,e.e(6955).then(e.bind(e,76955));case 10:return F=l.sent,c=F.Contributors,l.t0=he(),l.next=15,e.e(6392).then(e.bind(e,76392));case 15:return l.t1=l.sent,(0,l.t0)(l.t1),l.abrupt("return",{default:function(){return N.createElement($,{title:"Active Community & Genius People",style:{marginTop:100},titleStyle:{paddingBottom:140,fontWeight:"bold"}},N.createElement(c,null))}});case 18:case"end":return l.stop()}},M)})))),asset:null,routeId:"docs/index",context:void 0,renderOpts:void 0},"docs-demo-4":{component:S.memo(S.lazy(oe()(Q()().mark(function M(){var A,N,L,$,F,c,t;return Q()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,69854,19));case 2:return A=y.sent,N=A.default,y.next=6,e.e(5145).then(e.bind(e,15145));case 6:return L=y.sent,$=L.Section,y.next=10,e.e(58).then(e.bind(e,20058));case 10:return F=y.sent,c=F.QrCode,t=F.QrCodeGroup,y.t0=he(),y.next=16,e.e(6392).then(e.bind(e,76392));case 16:return y.t1=y.sent,(0,y.t0)(y.t1),y.abrupt("return",{default:function(){return N.createElement($,{title:"High-Quality Community Group",style:{marginTop:140},titleStyle:{paddingBottom:20,fontWeight:"bold"}},N.createElement(t,null,N.createElement(c,{link:"//img.alicdn.com/imgextra/i1/O1CN011zlc5b1uu1BDUpNg1_!!6000000006096-2-tps-978-1380.png"})))}});case 19:case"end":return y.stop()}},M)})))),asset:null,routeId:"docs/index",context:void 0,renderOpts:void 0}}},55043:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Asynchronous data source management, the core is reflected in the dataSource property of the ",paraId:0,tocIndex:0},{value:"Field",paraId:0,tocIndex:0},{value:" model. We can modify the dataSource of the Field in effects, or modify the dataSource property in reactions.",paraId:0,tocIndex:0},{value:"If the field component (such as Select) has a consumer dataSource property, when the dataSource changes, the corresponding component will automatically re-render.",paraId:1,tocIndex:0},{value:`
Note: If it is a business custom component, please manually map the data-$usource to the custom component, you can use  `,paraId:2},{value:"connect",paraId:2},{value:" or ",paraId:2},{value:"observer",paraId:2},{value:" + ",paraId:2},{value:"useField",paraId:2},{value:"Specific cases can refer to:",paraId:3},{value:"Select",paraId:4},{value:"TreeSelect",paraId:4},{value:"Cascader",paraId:4}]},67983:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"babel-plugin-import",paraId:0},{value:`npm install babel-plugin-import --save-dev
`,paraId:1,tocIndex:2},{value:"or",paraId:2,tocIndex:2},{value:`yarn add babel-plugin-import --dev
`,paraId:3,tocIndex:2},{value:"Modify ",paraId:4,tocIndex:3},{value:".umirc.js",paraId:4,tocIndex:3},{value:" or ",paraId:4,tocIndex:3},{value:".umirc.ts",paraId:4,tocIndex:3},{value:`export default {
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
`,paraId:5,tocIndex:3},{value:"First, we need to customize the default configuration of ",paraId:6,tocIndex:4},{value:"create-react-app",paraId:6,tocIndex:4},{value:", here we use ",paraId:6,tocIndex:4},{value:"react-app-rewired",paraId:6,tocIndex:4},{value:" \uFF08A community solution for custom configuration of ",paraId:6,tocIndex:4},{value:"create-react-app",paraId:6,tocIndex:4},{value:`)
Introduce `,paraId:6,tocIndex:4},{value:"react-app-rewired",paraId:6,tocIndex:4},{value:" and modify the startup configuration in ",paraId:6,tocIndex:4},{value:"package.json",paraId:6,tocIndex:4},{value:". Due to the new ",paraId:6,tocIndex:4},{value:"react-app-rewired@2.x",paraId:6,tocIndex:4},{value:" version, you also need to install ",paraId:6,tocIndex:4},{value:"customize-cra",paraId:6,tocIndex:4},{value:".",paraId:6,tocIndex:4},{value:`$ npm install react-app-rewired customize-cra  --save-dev
`,paraId:7,tocIndex:4},{value:"or",paraId:8,tocIndex:4},{value:`$ yarn add react-app-rewired customize-cra --dev
`,paraId:9,tocIndex:4},{value:"modify ",paraId:10,tocIndex:4},{value:"package.json",paraId:10,tocIndex:4},{value:`"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
`,paraId:11,tocIndex:4},{value:"Then create a ",paraId:12,tocIndex:4},{value:"config-overrides.js",paraId:12,tocIndex:4},{value:" in the project root directory to modify the default configuration.",paraId:12,tocIndex:4},{value:`module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config
}
`,paraId:13,tocIndex:4},{value:`npm install babel-plugin-import --save-dev
`,paraId:14,tocIndex:5},{value:"or",paraId:15,tocIndex:5},{value:`yarn add babel-plugin-import --dev
`,paraId:16,tocIndex:5},{value:"modify ",paraId:17,tocIndex:5},{value:"config-overrides.js",paraId:17,tocIndex:5},{value:`+ const { override, fixBabelImports } = require('customize-cra');

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
`,paraId:19,tocIndex:7},{value:"or",paraId:20,tocIndex:7},{value:`yarn add babel-plugin-import --dev
`,paraId:21,tocIndex:7},{value:"Modify ",paraId:22,tocIndex:7},{value:".babelrc",paraId:22,tocIndex:7},{value:" or babel-loader",paraId:22,tocIndex:7},{value:`{
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
`,paraId:23,tocIndex:7},{value:"For more configuration, please refer to ",paraId:24,tocIndex:7},{value:"babel-plugin-import",paraId:24,tocIndex:7}]},92594:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"In the previous document, we can actually find that Formily has provided the ability to describe the logic locally, that is, the x-reactions/reactions property of the field component. And in Schema, x-reactions can pass both functions and a structured object. Of course, there are also effects inherited from Formily 1.x, So to summarize, the ways to describe logic in Formily 2.x are:",paraId:0,tocIndex:0},{value:"Effects or reactions property in pure JSX mode",paraId:1,tocIndex:0},{value:"Effects or structured x-reactions property in Schema mode",paraId:1,tocIndex:0},{value:"Effects or functional x-reactions property in Schema mode",paraId:1,tocIndex:0},{value:"With so many ways of describing logic, how should we choose? What scenarios are best practices? First, we need to understand the positioning of effects and reactions.",paraId:2,tocIndex:0},{value:"First of all, reactions are responders used on specific field properties. They will be executed repeatedly based on the data changes that the function depends on. Its biggest advantage is that it is simple, straightforward and easy to understand, such as:",paraId:3,tocIndex:0},{value:`/* eslint-disable */
<Field
  name="A"
  reactions={(field) => {
    /**specific logic implementation**/
  }}
/>
`,paraId:4,tocIndex:0},{value:"Then, effects are used to implement the side-effect isolation logic management model. Its biggest advantage is that it can make the view code easier to maintain in a scenario with a large number of fields. At the same time, it also has the ability to process fields in batches. For example, we declare x-reactions in the field properties of A, B, C. If the x-reactions logic of these three fields are exactly the same, then we only need to write this in effects:",paraId:5,tocIndex:0},{value:`onFieldReact('*(A,B,C)', (field) => {
  //...logic
})
`,paraId:6,tocIndex:0},{value:"Another advantage of using effects is that a series of reusable logic plug-ins can be implemented, which can be very convenient logic pluggable, and at the same time can do some things like global monitoring.",paraId:7,tocIndex:0},{value:"In this way, do we not need to define the logic locally?",paraId:8,tocIndex:0},{value:`No, the premise of the above writing is that for a large number of fields, if the view layer is full of reactions, it looks uncomfortable, so it is a better strategy to consider extracting logic from unified maintenance.
On the contrary, if the number of fields is small and the logic is relatively simple, it is also good to write reactions directly on the field attributes, which is clear.`,paraId:9,tocIndex:0},{value:"At the same time, because JSON Schema can be consumed by the configuration system, we need to logically configure a specific field on the configuration interface. So we still need to support local definition logic capabilities, and also need to support structured description logic, such as:",paraId:10,tocIndex:0},{value:`{
  "x-reactions": {
    "dependencies": ["aa"],
    "fulfill": {
      "state": {
        "visible": "{{$deps[0] == '123'}}"
      }
    }
  }
}
`,paraId:11,tocIndex:0},{value:"This can well solve the linkage requirements of most configuration scenarios. However, there is another scenario, that is, our linkage process is asynchronous, the logic is very complicated, or there is a large amount of data processing, then we can only consider open up the ability to describe functional states, such as:",paraId:12,tocIndex:0},{value:`{
  "x-reactions": "{{(field)=>{/**specific logic implementation**/}}}"
}
`,paraId:13,tocIndex:0},{value:"This is very similar to a low-code configuration. Of course, we can also register a series of general logic functions in the context scope:",paraId:14,tocIndex:0},{value:`{
  "x-reactions": "{{customFunction}}"
}
`,paraId:15,tocIndex:0},{value:"In conclusion, the way we manage business logic has the following priorities:",paraId:16,tocIndex:0},{value:`Pure source mode
`,paraId:17,tocIndex:0},{value:"The number of fields is huge and the logic is complex, and the logic defined in effects is preferred.",paraId:18,tocIndex:0},{value:"The number of fields is small, the logic is simple, and the logic defined in reactions is preferred",paraId:18,tocIndex:0},{value:`Schema mode
`,paraId:17,tocIndex:0},{value:"There is no asynchronous logic, structured reactions are preferred to define logic.",paraId:19,tocIndex:0},{value:"There is asynchronous logic, or a large number of calculations, the functional state reactions are preferred to define logic.",paraId:19,tocIndex:0},{value:"For how to play with effects in effects, we mainly look at the ",paraId:20,tocIndex:0},{value:"@next-formily/core",paraId:20,tocIndex:0},{value:" document.",paraId:20,tocIndex:0}]},56787:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Linkage calculator is mainly used for evaluation and summarization in the process of filling in the form. In Formily 1.x, the cost of realizing this kind of demand is very high. In 2.x, we can easily implement it with the help of reactions.",paraId:0,tocIndex:0}]},38017:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Formily 2.x has given up supporting controlled mode for form components and field components. Because the internal management state mode of the form itself is not a controlled mode, there will be many boundary problems in the process of changing the controlled mode to the uncontrolled mode. At the same time, the controlled mode will have a large number of dirty inspection processes, and the performance is very poor. Instead, the controlled mode itself can solve most of the problems.",paraId:0,tocIndex:0},{value:"So Formily no longer supports the controlled mode, but if we insist on implementing ordinary React controlled, we can still support it. It can only achieve value control, not field-level control, which is the Field component we use. The properties will only take effect during the first rendering. Any changes to the properties in the future will not be automatically updated. If you want to update automatically, unless you recreate the Form instance (obviously this will lose all the previously maintained state).",paraId:1,tocIndex:0},{value:"Therefore, we more recommend using ",paraId:2,tocIndex:0},{value:"@next-formily/reactive",paraId:2,tocIndex:0},{value:" to achieve responsive control, which can achieve both value control and field-level control.",paraId:2,tocIndex:0},{value:"Ordinary controlled mode, which will rely heavily on dirty checking to achieve data synchronization, and the number of component renderings will be very high.",paraId:3,tocIndex:1},{value:"Responsive control is mainly to use ",paraId:4,tocIndex:2},{value:"@next-formily/reactive",paraId:4,tocIndex:2},{value:" to achieve responsive updates, we can easily achieve two-way binding, while the performance is full of normal controlled updates.",paraId:4,tocIndex:2},{value:"There will be a requirement for the form configuration scenario. The Schema of the form will change frequently. In fact, it is equivalent to frequently creating new forms. The state of the previous operation should be discarded.",paraId:5,tocIndex:3},{value:"The most important thing for fragment linkage is to manually clean up the field model, otherwise the UI cannot be synchronized",paraId:6,tocIndex:4},{value:"It is recommended to use ",paraId:7,tocIndex:7},{value:"@next-formily/reactive",paraId:7,tocIndex:7},{value:" to achieve responsive control.",paraId:7,tocIndex:7},{value:"It is not possible to update automatically when using traditional controlled mode.",paraId:8,tocIndex:8}]},82748:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"The realization of business custom components mainly uses the Hooks API and observer API in ",paraId:0,tocIndex:0},{value:"@next-formily/react",paraId:0,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"@next-formily/vue",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"To access the ready-made component library, we mainly use connect/mapProps/mapReadPretty API.",paraId:1,tocIndex:0},{value:"If you want to implement some more complex custom components, we strongly recommend looking directly at the source code of ",paraId:2,tocIndex:0},{value:"@next-formily/antd",paraId:2,tocIndex:0},{value:" or ",paraId:2,tocIndex:0},{value:"@next-formily/next",paraId:2,tocIndex:0},{value:".",paraId:2,tocIndex:0}]},31272:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Many times, we always encounter scenarios where the front-end data structure does not match the back-end data structure. The seemingly simple problem is actually very uncomfortable to solve. The most common problems are:",paraId:0,tocIndex:0},{value:"The output of the front-end date range component is an array structure, but the format required by the back-end is to split a flat data structure. This problem is largely limited by the back-end domain model. Because from the perspective of back-end model design, splitting the flat structure is the best solution;",paraId:1,tocIndex:0},{value:"But from the perspective of front-end componentization, the array structure is the best;",paraId:2,tocIndex:0},{value:"So each side has its truth, but unfortunately, it can only cancel such an unequal treaty at the front end every time. However, with Formily, you don\u2019t need to feel uncomfortable for such an embarrassing situation. ",paraId:3,tocIndex:0},{value:"Formily provides the ability to deconstruct the path, which can help users quickly solve such problems.",paraId:3,tocIndex:0},{value:" Let's take a look at an example",paraId:3,tocIndex:0}]},99420:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"The form layout mainly uses ",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0},{value:":",paraId:0,tocIndex:0},{value:"FormLayout",paraId:1,tocIndex:0},{value:" Component",paraId:1,tocIndex:0},{value:"FormItem",paraId:1,tocIndex:0},{value:" Component",paraId:1,tocIndex:0},{value:"FormGrid",paraId:1,tocIndex:0},{value:" Component",paraId:1,tocIndex:0},{value:"Space",paraId:1,tocIndex:0},{value:" Component",paraId:1,tocIndex:0},{value:"These 4 components can basically solve all complex form layout scenarios, we only need to flexibly combine these components.",paraId:2,tocIndex:0}]},58085:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:`There is only one mode to realize linkage logic in Formily 1.x, that is, active mode. It is necessary to monitor the event changes of one or more fields to control the state of another or more fields.
This is very convenient for one-to-many linkage scenarios, but it is very troublesome for many-to-one scenarios. It is necessary to monitor the changes of multiple fields to control the state of a field. Therefore, Formily 2.x provides a responsive mechanism that allows the linkage to support passive linkage. You only need to pay attention to the field that a field depends on. When the dependent field changes, the dependent field can be automatically linked.`,paraId:0,tocIndex:0},{value:"The core of active linkage is based on",paraId:1,tocIndex:1},{value:"FormEffectHooks",paraId:2,tocIndex:1},{value:"FieldEffectHooks",paraId:2,tocIndex:1},{value:"setFormState",paraId:2,tocIndex:1},{value:"setFieldState",paraId:2,tocIndex:1},{value:"SchemaReactions",paraId:2,tocIndex:1},{value:"Realize active linkage, the advantage is that it is very convenient to realize one-to-many linkage.",paraId:3,tocIndex:1},{value:"The core of the passive mode is based on",paraId:4,tocIndex:23},{value:"onFieldReact",paraId:5,tocIndex:23},{value:" Implement global reactive logic",paraId:5,tocIndex:23},{value:"FieldReaction",paraId:5,tocIndex:23},{value:" Implement partial responsive logic",paraId:5,tocIndex:23},{value:"SchemaReactions",paraId:5,tocIndex:23},{value:" Implement the structured logical description in the Schema protocol (the internal implementation is based on FieldReaction)",paraId:5,tocIndex:23}]},13316:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Formily's form validation uses the extremely powerful and flexible @next-formily/validator validation engine. There are two main scenarios for validation:",paraId:0,tocIndex:0},{value:"Markup(JSON) Schema scene protocol verification property verification, using JSON Schema's own verification property and x-validator property to achieve verification",paraId:1,tocIndex:0},{value:"Pure JSX scene verification properties, use validator property to achieve verification",paraId:1,tocIndex:0},{value:"At the same time, we can also implement linkage verification in effects or x-reactions/reactions",paraId:2,tocIndex:0},{value:"Specific rule verification document reference ",paraId:3,tocIndex:0},{value:"FieldValidator",paraId:3,tocIndex:0},{value:"Form validation is an important part of optimizing user experience and ensuring data accuracy in forms. Formily provides various validation methods, including built-in rule validation, built-in format validation, and custom rule validation. In the following sections, we will introduce these validation methods one by one.",paraId:4,tocIndex:0},{value:"Built-in rule validation refers to the common validation rules provided by Formily, such as required, max, min, len, enum, const, multipleOf, etc. These rules can be described using JSON Schema properties or the x-validator property. Formily supports multiple ways of writing built-in rules and it is recommended for teams to establish internal conventions based on their usage habits.",paraId:5,tocIndex:1},{value:"With the powerful validation engine of Formily, it is extremely convenient to adapt to third-party validation libraries such as yup. Here is an example of how to use it:",paraId:6,tocIndex:13},{value:"Mainly through ",paraId:7,tocIndex:28},{value:"registerValidateLocale",paraId:7,tocIndex:28},{value:" to customize the built-in verification messages",paraId:7,tocIndex:28}]},71272:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Welcome to our community!",paraId:0,tocIndex:1},{value:"Formily",paraId:0,tocIndex:1},{value:" It is the only official open-source form framework announced by Alibaba. Its functions and quality are guaranteed. It has a large number of community users. Participating in contributions can make ",paraId:0,tocIndex:1},{value:"Formily",paraId:0,tocIndex:1},{value:" stronger and allow more developers to enjoy a better experience of developing forms. we are very grateful to any people who initiated ",paraId:0,tocIndex:1},{value:"Pull Request",paraId:0,tocIndex:1},{value:" for this project.",paraId:0,tocIndex:1},{value:"Add&Update features",paraId:1,tocIndex:2},{value:"Add/Update unit test cases",paraId:1,tocIndex:2},{value:"Fix the existing issue",paraId:1,tocIndex:2},{value:"Documentation improvements",paraId:1,tocIndex:2},{value:"Other",paraId:1,tocIndex:2},{value:"Original repository: ",paraId:2,tocIndex:4},{value:"https://github.com/alibaba/formily",paraId:2,tocIndex:4},{value:"Target repository: fork to your own github ",paraId:2,tocIndex:4},{value:"The original branch is alibaba/formily master, The branch after pulling should be quirkyshop/formily master",paraId:3,tocIndex:5},{value:"Note: The recommended branch name is [feat]-[name], [feat] is the type of this branch. Featdoc[other] is optional, and [name] is the name, just customize it. eg. unittest-core (meaning: add single test to the core)",paraId:4,tocIndex:5},{value:"The code style follows 2 spaces and no semicolons. Please do not include any console-related methods and debuggers in the code unless it is explained. After the development is completed, submit a pull request to the repository you forked.",paraId:5,tocIndex:6},{value:"Note the target repository on the left here(base repository is alibaba/formily master) . And then the doc-wiki of the current branch own repository on the right.",paraId:6,tocIndex:6},{value:"Reference documents: ",paraId:7,tocIndex:7},{value:"https://github.com/alibaba/formily/blob/master/.github/GIT_COMMIT_SPECIFIC.md",paraId:7,tocIndex:7},{value:"PR name: format: ",paraId:8,tocIndex:7},{value:"<type>(<scope>): <subject>",paraId:8,tocIndex:7},{value:" For example: ",paraId:8,tocIndex:7},{value:"feat(core): add unit test",paraId:8,tocIndex:7},{value:"PR content: List the content of this change",paraId:8,tocIndex:7},{value:"PR requirements: the added feat content, as far as possible, make clear comments. And the corresponding single test coverage should be covered as much \u5173\u6CE8\u6881\u5E05\u62BD\u5927\u5956 possible.",paraId:8,tocIndex:7},{value:"BUGFIX requirements: If the modified issue is related to issues, please include the relevant issueID in the content.",paraId:8,tocIndex:7},{value:"The review phase will enter a multi-review process,",paraId:9,tocIndex:8},{value:"@janryWang",paraId:9,tocIndex:8},{value:" is responsible for reviewing whether this change is merged, and other people will also participate in the discussion. The discussion will be stored in the PR of github, and the DingTalk group will also receive corresponding notifications.",paraId:9,tocIndex:8},{value:"When you see that the status in the Pull requests list changes to Closed, the merge is successful. ",paraId:10,tocIndex:8},{value:`# First, add "upstream" to your branch, that is, the source repository
$ git remote add upstream https://github.com/alibaba/formily.git
# Get the latest changes to the source repository
$ git fetch upstream
# Synchronize the changes of the source repository to the local branch
$ git pull upstream master [The current local target branch, if not filled in, the current branch will be]
`,paraId:11,tocIndex:9},{value:`$ cd formily
$ yarn install # Install overall project dependencies
$ yarn build # Build all projects
$ yarn test # Perform unit tests
`,paraId:12,tocIndex:10},{value:"Main project document",paraId:13,tocIndex:11},{value:`$ yarn start
`,paraId:14,tocIndex:11},{value:"Core project documentation",paraId:15,tocIndex:11},{value:`$ yarn workspace @next-formily/core start
`,paraId:16,tocIndex:11},{value:"React project documentation",paraId:17,tocIndex:11},{value:`$ yarn workspace @next-formily/react start
`,paraId:18,tocIndex:11},{value:"Vue project documentation",paraId:19,tocIndex:11},{value:`$ yarn workspace @next-formily/vue start
`,paraId:20,tocIndex:11},{value:"Antd project documentation",paraId:21,tocIndex:11},{value:`$ yarn workspace @next-formily/antd start
`,paraId:22,tocIndex:11},{value:"Fusion project documentation",paraId:23,tocIndex:11},{value:`$ yarn workspace @next-formily/next start
`,paraId:24,tocIndex:11},{value:"Reactive project documentation",paraId:25,tocIndex:11},{value:`$ yarn workspace @next-formily/reactive start
`,paraId:26,tocIndex:11}]},93562:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Formily Form Designer is an extension package based on ",paraId:0,tocIndex:1},{value:"designable",paraId:0,tocIndex:1},{value:". It inherits the basic capabilities of designable, and provides Formily basic form building and configuration capabilities.",paraId:0,tocIndex:1},{value:"The core concept of Designable is to turn the designer into a modular combination, everything can be replaced, Designable itself provides a series of out-of-the-box components for users to use, but if users are not satisfied with the components, they can directly replace the components. To achieve maximum flexible customization, that is, Designable itself does not provide any plug-in related APIs",paraId:1,tocIndex:2},{value:"Ant Design users",paraId:2,tocIndex:3},{value:`npm install --save @designable/formily-antd
`,paraId:3,tocIndex:3},{value:"Alibaba Fusion users",paraId:4,tocIndex:3},{value:`npm install --save @designable/formily-next
`,paraId:5,tocIndex:3},{value:"Example Source Code",paraId:6,tocIndex:4},{value:`import 'antd/dist/antd.less'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer, //Designer root component, mainly used to deliver context
  DesignerToolsWidget, //Drawing board tool pendant
  ViewToolsWidget, //View switching tool pendant
  Workspace, //Workspace components, core components, used to manage drag and drop behavior in the workspace, tree node data, etc...
  OutlineTreeWidget, //Outline tree component, it will automatically identify the current workspace and display the tree nodes in the workspace
  ResourceWidget, //Drag and drop the source widget
  HistoryWidget, //History widget
  StudioPanel, //Main layout panel
  CompositePanel, //Left combined layout panel
  WorkspacePanel, //Workspace layout panel
  ToolbarPanel, //Toolbar layout panel
  ViewportPanel, //Viewport layout panel
  ViewPanel, //View layout panel
  SettingsPanel, //Configure the form layout panel on the right
  ComponentTreeWidget, //Component tree renderer
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
      Inputs: 'Input controls',
      Layouts: 'Layout components',
      Arrays: 'Self-incrementing components',
      Displays: 'Display components',
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
`,paraId:7,tocIndex:4}]},18396:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"The issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, it will be closed immediately.",paraId:0,tocIndex:1},{value:"For usage questions, please use the following resources:",paraId:1,tocIndex:1},{value:"Read the introduce and components documentation",paraId:2,tocIndex:1},{value:"Make sure you have search your question in FAQ and changelog",paraId:2,tocIndex:1},{value:"Look for / ask questions on ",paraId:2,tocIndex:1},{value:"Discussions",paraId:2,tocIndex:1},{value:"Also try to search for your issue",paraId:3,tocIndex:1},{value:"it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.",paraId:4,tocIndex:1}]},79710:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"To describe Formily in one sentence, it is an MVVM form solution that abstracts the form domain model. Therefore, if you want to use Formily in depth, you must learn and understand what Formily's domain model is like and what problems does it solve. After understanding the domain model, it is actually how to consume the view layer of this domain model. This layer only needs to look at the documentation of the specific components.",paraId:0,tocIndex:1},{value:"Because Formily\u2019s learning costs are still relatively high, if you want to quickly understand the full picture of Formily, the most important thing is to read the documentation. It's just how to look at the document and where it will be more important. Below we give different document learning routes for different users.",paraId:1,tocIndex:2},{value:"Introduction, because you need to understand Formily's core ideas and whether it is suitable for your business scenario.",paraId:2,tocIndex:3},{value:"Quick start, learn how to use Formily in practice from the simplest example.",paraId:2,tocIndex:3},{value:"Component documentation/core library documentation, because Formily has already encapsulated most of the out-of-the-box components for you. If you encounter component-related problems, you can just check the component documentation just like looking up a dictionary.",paraId:2,tocIndex:3},{value:"Scenario case, starting from the specific scenario, see what is the best practice in this scenario.",paraId:2,tocIndex:3},{value:"Digest the core concepts carefully and have a deeper understanding of Formily.",paraId:3,tocIndex:4},{value:"Advanced guide, mainly to learn more advanced usage methods, such as custom components, from simple custom components to super complex custom components.",paraId:3,tocIndex:4},{value:"Read component documents/core library documents at any time to deepen memory",paraId:3,tocIndex:4},{value:"For the details and best practices of custom component development, it is recommended to look directly at the source code of @next-formily/antd or @next-formily/next, because this is the boilerplate code and is closely related to the actual business scenario.",paraId:3,tocIndex:4},{value:"Contribution guide, understand the most basic contribution posture.",paraId:4,tocIndex:5},{value:"Read the document, if you find that the document is defective, you can submit a PR to fix it.",paraId:4,tocIndex:5},{value:"Read the unit test to understand the implementation details corresponding to each test case. If you find that there are missing test cases, you can submit a PR.",paraId:4,tocIndex:5},{value:"Read the source code, if you find a bug in the source code, you can raise a PR.",paraId:4,tocIndex:5},{value:`
Pay attention to modify the source code, you must bring unit tests
`,paraId:5},{value:"If you encounter problems during the development process, it is recommended to use the search function at the top of the document to quickly search for the content of the document and solve it quickly. If you can\u2019t find it, I recommend you to ask questions in the ",paraId:6,tocIndex:6},{value:"forum",paraId:6,tocIndex:6},{value:". It is convenient to record. If you encounter a very urgent problem, you can help solve it in the Dingding group @\u767D\u7384. ",paraId:6,tocIndex:6},{value:"It is not recommended to ask various basic questions directly without reading the document, which is very inefficient",paraId:6,tocIndex:6},{value:"If you find behaviors that do not meet expectations during the development process and can be reproduced in the smallest case, you can submit an ",paraId:7,tocIndex:7},{value:"issue",paraId:7,tocIndex:7},{value:` to Formily
It is strongly not recommended to record the problem in the issue, which will disrupt the information flow of Issue. At the same time, `,paraId:7,tocIndex:7},{value:"be sure to bring the smallest reproducible link address when mentioning Issue",paraId:7,tocIndex:7},{value:", so that developers can quickly locate the problem and fix it quickly, instead of Find bugs in a bunch of codes.",paraId:7,tocIndex:7},{value:"If during the development process you find that some of Formily's designs are not good, or can be improved better, you can submit your own ideas in the ",paraId:8,tocIndex:8},{value:"forum",paraId:8,tocIndex:8}]},2282:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"To use Formily, you must use ",paraId:0,tocIndex:2},{value:"@next-formily/core",paraId:0,tocIndex:2},{value:", which is responsible for managing the status of the form, form verification, linkage, and so on.",paraId:0,tocIndex:2},{value:`$ npm install --save @next-formily/core
`,paraId:1,tocIndex:2},{value:"The kernel alone is not enough. We also need a UI library to access kernel data to achieve the final form interaction effect. For users of different frameworks, we have different bridge libraries.",paraId:2,tocIndex:3},{value:"React users",paraId:3,tocIndex:3},{value:`$ npm install --save @next-formily/react
`,paraId:4,tocIndex:3},{value:"Vue users",paraId:5,tocIndex:3},{value:`$ npm install --save @next-formily/vue
`,paraId:6,tocIndex:3},{value:"To quickly implement beautiful forms, we usually need to use industry-leading component libraries, such as ",paraId:7,tocIndex:4},{value:"Ant Design",paraId:7,tocIndex:4},{value:" and ",paraId:7,tocIndex:4},{value:"Alibaba Fusion",paraId:7,tocIndex:4},{value:". However, these excellent component libraries are not fully covered in some scenes of the form. For example, the detailed preview state is not supported by Ant Design, and some scene-based components are not supported, so Formily is in On top of this, @next-formily/antd and @next-formily/next are encapsulated to ensure that users can use it out of the box.",paraId:7,tocIndex:4},{value:"Ant Design users",paraId:8,tocIndex:4},{value:`$ npm install --save antd moment @next-formily/antd
`,paraId:9,tocIndex:4},{value:"Alibaba Fusion users",paraId:10,tocIndex:4},{value:`$ npm install --save @alifd/next moment @next-formily/next
`,paraId:11,tocIndex:4},{value:"Use ES Module import syntax to import dependencies",paraId:12,tocIndex:5},{value:`import React from 'react'
import { createForm } from '@next-formily/core'
import { FormProvider, Field } from '@next-formily/react'
import { FormItem, Input } from '@next-formily/antd'
`,paraId:13,tocIndex:5},{value:"From the above examples, we can learn a lot:",paraId:14},{value:"createForm",paraId:15},{value:" is used to create the core domain model of the form, which is the standard ViewModel as the ",paraId:15},{value:"MVVM",paraId:15},{value:" design pattern.",paraId:15},{value:"The ",paraId:15},{value:"FormProvider",paraId:15},{value:" component is used as the entrance to the view layer bridge form model. It has only one parameter, which is to receive the Form instance created by createForm and pass the Form instance to the child component in the form of context.",paraId:15},{value:"The ",paraId:15},{value:"FormLayout",paraId:15},{value:" component is a component used to control the style of ",paraId:15},{value:"FormItem",paraId:15},{value:" in batches. Here we specify the layout as top and bottom layout, that is, the label is on the top and the component is on the bottom.",paraId:15},{value:"The ",paraId:15},{value:"Field",paraId:15},{value:` component is a component used to undertake common fields.
`,paraId:15},{value:"The name attribute identifies the path of the field in the final submitted data of the form.",paraId:16},{value:`Title attribute, which identifies the title of the field
`,paraId:16},{value:"If the decorator is specified as FormItem, then the title attribute will be received as the label by default in the FormItem component.",paraId:17},{value:"If specified as a custom component, the consumer of the title will be taken over by the custom component.",paraId:17},{value:"If decorator is not specified, then the title will not be displayed on the UI.",paraId:17},{value:`Required attribute, a shorthand for required verification, which identifies that the field is required
`,paraId:16},{value:"If the decorator is specified as FormItem, then an asterisk prompt will automatically appear, and there will be corresponding status feedback if the verification fails. These are the default processing done inside the FormItem.",paraId:18},{value:"If the decorator is specified as a custom component, the corresponding UI style needs to be implemented by the custom component implementer.",paraId:18},{value:"If decorator is not specified, then required will just block submission, and there will be no UI feedback for verification failure.",paraId:18},{value:"InitialValue property, which represents the default value of the field",paraId:16},{value:`Decorator attribute, representing the UI decorator of the field, usually we will specify it as FormItem
`,paraId:16},{value:"Note that the decorator attribute is passed in the form of an array, the first parameter represents the specified component type, and the second parameter represents the specified component attribute.",paraId:19},{value:`The component attribute, which represents the input control of the field, can be Input or Select, etc.
`,paraId:16},{value:"Note that the component property is passed in the form of an array, the first parameter represents the specified component type, and the second parameter represents the specified component property.",paraId:20},{value:"The ",paraId:15},{value:"FormConsumer",paraId:15},{value:" component exists as a responder of a responsive model. Its core is a render props mode. In the callback function as children, all dependencies are automatically collected. If the dependencies change, it will be re-rendered. With the help of FormConsumer, we can Conveniently realize the needs of various calculations and summaries.",paraId:15},{value:"The ",paraId:15},{value:"FormButtonGroup",paraId:15},{value:" component exists as a form button group container and is mainly responsible for the layout of the buttons.",paraId:15},{value:"The ",paraId:15},{value:"Submit",paraId:15},{value:" component exists as an action trigger for form submission. In fact, we can also directly use the form.submit method to submit. But the advantage of using Submit is that there is no need to write the onClick event handler on the Button component every time, and it also handles the loading state of the Form. If the onSubmit method returns a Promise and the Promise is pending, the button will automatically enter the loading state.",paraId:15}]},99866:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Mainly use the ",paraId:0,tocIndex:0},{value:"FormDialog",paraId:0,tocIndex:0},{value:" function and ",paraId:0,tocIndex:0},{value:"FormDrawer",paraId:1,tocIndex:0},{value:" function in ",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0}]},81987:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[]},2339:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[]},86148:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Because Formily is a very complete solution at the form level, and it is also very flexible. It supports a lot of scenarios, but we can't list them all.",paraId:0,tocIndex:0},{value:"Therefore, I still hope that the community can help Formily improve more scenarios! We would be very grateful!\u{1F600}",paraId:1,tocIndex:0}]},88944:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Because Formily Schema can completely describe the UI, we can simply abstract out the QueryList/QueryForm/QueryTable components to combine to implement the query list component. The following is only the pseudo code, because the query list scenario usually involves a lot of business packaging. At present, Formily hasn't figured out how to consider both versatility and quick start of business, so it will not open up specific components for the time being.",paraId:0,tocIndex:0},{value:"But you can take a look at the pseudo-code first. If these components are officially implemented, the usage will definitely be like this:",paraId:1,tocIndex:0},{value:`import React from 'react'
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
`,paraId:3,tocIndex:1},{value:"There is no special logic, the main thing is to combine Form+FormGrid to realize a query form layout",paraId:6,tocIndex:1},{value:"Realize query form query by relying on the query method passed down from the context",paraId:6,tocIndex:1}]},67968:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Mainly use the ",paraId:0,tocIndex:0},{value:"FormStep",paraId:0,tocIndex:0},{value:" component in ",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0}]},12470:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"Mainly use the ",paraId:0,tocIndex:0},{value:"FormTab",paraId:0,tocIndex:0},{value:" component and ",paraId:0,tocIndex:0},{value:"FormCollapse",paraId:0,tocIndex:0},{value:" component in ",paraId:0,tocIndex:0},{value:"@next-formily/antd",paraId:0,tocIndex:0},{value:" or ",paraId:0,tocIndex:0},{value:"@next-formily/next",paraId:0,tocIndex:0}]},81434:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[{value:"It is important to mention here that Formily2 is very different from Formily1.x, and there are a lot of Break Changes.",paraId:0,tocIndex:0},{value:"Therefore, for old users, they basically need to learn again, and V1 and V2 cannot be upgraded smoothly.",paraId:1,tocIndex:0},{value:"But the original intention of the Formily2 project is to reduce everyone's learning costs, because the old users themselves have a certain understanding of Formily's core ideas. In order to help old users learn Formily2 more quickly, this article will list the core differences between V1 and V2. , and will not list the new capabilities.",paraId:2,tocIndex:0},{value:"This mainly refers to the difference between @next-formily/core",paraId:3,tocIndex:1},{value:"Because Formily1.x users mainly use setFieldState/setFormState and getFieldState/getFormState when using the core APIs, these APIs are retained in V2, but the internal model properties are semantically different. The differences are as follows:",paraId:4,tocIndex:1},{value:"modified",paraId:5,tocIndex:1},{value:"V1: Represent whether the field has been changed, in fact, it is of no use, because the initialization of the field means that it has been changed.",paraId:6,tocIndex:1},{value:"V2: Indicates whether the field is manually modified, that is, it will be set to true when the component triggers the onChange event.",paraId:6,tocIndex:1},{value:"inputed",paraId:7,tocIndex:1},{value:"V1: Represent Whether the field has been manually modified",paraId:8,tocIndex:1},{value:"V2: Remove, use modified uniformly",paraId:8,tocIndex:1},{value:"pristine",paraId:9,tocIndex:1},{value:"V1:Represent whether the field value is equal to initialValue",paraId:10,tocIndex:1},{value:"V2: Remove, user manual judgment, this attribute will cause a lot of dirty checks",paraId:10,tocIndex:1},{value:"display",paraId:11,tocIndex:1},{value:"V1: Represent whether the field is displayed, if it is false, the field value will not be removed",paraId:12,tocIndex:1},{value:"V2: Represent the field display mode, the value is ",paraId:12,tocIndex:1},{value:'"none" | "visible" | "hidden"',paraId:12,tocIndex:1},{value:"touched",paraId:13,tocIndex:1},{value:"V1: Redundant field",paraId:14,tocIndex:1},{value:"V2: Remove",paraId:14,tocIndex:1},{value:"validating",paraId:15,tocIndex:1},{value:"V1: Whether the representative field is being verified",paraId:16,tocIndex:1},{value:"V2: Remove, use validateStatus uniformly",paraId:16,tocIndex:1},{value:"effectErrors/effectWarnings",paraId:17,tocIndex:1},{value:"V1: Errors and warnings that represent the manual operation of the user",paraId:18,tocIndex:1},{value:"V2: Remove, use feedbacks uniformly",paraId:18,tocIndex:1},{value:"ruleErrors/ruleWarnings",paraId:19,tocIndex:1},{value:"V1: Errors and warnings representing the verification operation of the validator",paraId:20,tocIndex:1},{value:"V2: Remove, use feedbacks uniformly",paraId:20,tocIndex:1},{value:"values",paraId:21,tocIndex:1},{value:"V1: Represent all the parameters returned by the onChange event",paraId:22,tocIndex:1},{value:"V2: Remove, use inputValues uniformly",paraId:22,tocIndex:1},{value:"rules",paraId:23,tocIndex:1},{value:"V1: Represent verification rules",paraId:24,tocIndex:1},{value:"V2: Remove, use validator uniformly, because rules literally means rules, but the meaning of rules is very big, not limited to verification rules",paraId:24,tocIndex:1},{value:"props",paraId:25,tocIndex:1},{value:"V1: Represent the extended attributes of the component, and the positioning is very unclear. In the pure JSX scenario, it represents the collection of component attributes and FormItem attributes. In the Schema scenario, it represents the attributes of the Schema field.",paraId:26,tocIndex:1},{value:"V2: Remove, use decorator and component uniformly",paraId:26,tocIndex:1},{value:"VirtualField",paraId:27,tocIndex:1},{value:"V1: Represents a virtual field",paraId:28,tocIndex:1},{value:"V2: Renamed and use ",paraId:28,tocIndex:1},{value:"VoidField",paraId:28,tocIndex:1},{value:" uniformly",paraId:28,tocIndex:1},{value:"This mainly refers to the difference between @next-formily/react and @next-formily/react-schema-renderer.",paraId:29,tocIndex:2},{value:"createFormActions/createAsyncFormActions",paraId:30,tocIndex:2},{value:"V1 Create a Form operator, you can call the setFieldState/setFormState method.",paraId:31,tocIndex:2},{value:"V2 is removed, and the operation status of the Form instance created by ",paraId:31,tocIndex:2},{value:"createForm",paraId:31,tocIndex:2},{value:" in @next-formily/core is used uniformly.",paraId:31,tocIndex:2},{value:"Form",paraId:32,tocIndex:2},{value:"V1 will create a Form instance inside, which can control the transfer of values/initialValues attributes, etc.",paraId:33,tocIndex:2},{value:"V2 removed, unified use of ",paraId:33,tocIndex:2},{value:"FormProvider",paraId:33,tocIndex:2},{value:"SchemaForm",paraId:34,tocIndex:2},{value:"V1 will parse the json-schema protocol internally, create a Form instance, support controlled mode, and render it.",paraId:35,tocIndex:2},{value:"V2 is removed, the SchemaField component created by ",paraId:35,tocIndex:2},{value:"createSchemaField",paraId:35,tocIndex:2},{value:" is used uniformly, and the controlled mode is not supported.",paraId:35,tocIndex:2},{value:"Field",paraId:36,tocIndex:2},{value:"V1 supports controlled mode, which requires the use of render props for component state mapping.",paraId:37,tocIndex:2},{value:"V2 does not support controlled mode, you can quickly implement state mapping by passing in the decorator/component property.",paraId:37,tocIndex:2},{value:"VirtualField",paraId:38,tocIndex:2},{value:"V1 supports controlled mode, which requires the use of render props for component state mapping.",paraId:39,tocIndex:2},{value:"V2 does not support controlled mode, renamed ",paraId:39,tocIndex:2},{value:"VoidField",paraId:39,tocIndex:2},{value:", and passed in the decorator/component property to quickly implement state mapping.",paraId:39,tocIndex:2},{value:"FieldList",paraId:40,tocIndex:2},{value:"V1 Represent auto-incremented field control component",paraId:41,tocIndex:2},{value:"V2 Renamed to ",paraId:41,tocIndex:2},{value:"ArrayField",paraId:41,tocIndex:2},{value:"FormSpy",paraId:42,tocIndex:2},{value:"V1 Monitor all life cycle triggers and re-render",paraId:43,tocIndex:2},{value:"V2 Remove and use ",paraId:43,tocIndex:2},{value:"FormConsumer",paraId:43,tocIndex:2},{value:"SchemaMarkupField",paraId:44,tocIndex:2},{value:"V1 Stands for Schema description label component",paraId:45,tocIndex:2},{value:"V2 Remove, unified use the description label component created by the ",paraId:45,tocIndex:2},{value:"createSchemaField",paraId:45,tocIndex:2},{value:"useFormQuery",paraId:46,tocIndex:2},{value:"V1 Fast Hook for realizing form query, supporting middleware mechanism",paraId:47,tocIndex:2},{value:"V2 Temporarily remove",paraId:47,tocIndex:2},{value:"useForm",paraId:48,tocIndex:2},{value:"V1 Represents the creation of a Form instance",paraId:49,tocIndex:2},{value:"V2 Represents the Form instance in the consumption context, if you want to create it, please use ",paraId:49,tocIndex:2},{value:"createForm",paraId:49,tocIndex:2},{value:"useField",paraId:50,tocIndex:2},{value:"V1 Represents the creation of a Field instance",paraId:51,tocIndex:2},{value:"V2 Represents the Field instance in the consumption context, if you want to create it, please call ",paraId:51,tocIndex:2},{value:"form.createField",paraId:51,tocIndex:2},{value:"useVirtualField",paraId:52,tocIndex:2},{value:"V1 Represents the creation of a VirtualField instance",paraId:53,tocIndex:2},{value:"V2 Remove, if you want to create, please call ",paraId:53,tocIndex:2},{value:"form.createVoidField",paraId:53,tocIndex:2},{value:"useFormState",paraId:54,tocIndex:2},{value:"V1 Form state in consumption context",paraId:55,tocIndex:2},{value:"V2 Remove, use ",paraId:55,tocIndex:2},{value:"useForm",paraId:55,tocIndex:2},{value:" uniformly",paraId:55,tocIndex:2},{value:"useFieldState",paraId:56,tocIndex:2},{value:"V1 consume Field status in context",paraId:57,tocIndex:2},{value:"V2 Remove, use ",paraId:57,tocIndex:2},{value:"useField",paraId:57,tocIndex:2},{value:"useFormSpy",paraId:58,tocIndex:2},{value:"V1 Create a lifecycle listener and trigger a re-render",paraId:59,tocIndex:2},{value:"V2 Remove",paraId:59,tocIndex:2},{value:"useSchemaProps",paraId:60,tocIndex:2},{value:"V1Cconsume rops of SchemaField in context",paraId:61,tocIndex:2},{value:"V2 Remove, use ",paraId:61,tocIndex:2},{value:"useFieldSchema",paraId:61,tocIndex:2},{value:" uniformly",paraId:61,tocIndex:2},{value:"connect",paraId:62,tocIndex:2},{value:"V1 Standard HOC",paraId:63,tocIndex:2},{value:"V2 The higher-order function is changed to 1st order, and the properties have changed dramatically. See the ",paraId:63,tocIndex:2},{value:"connect document",paraId:63,tocIndex:2},{value:" for details",paraId:63,tocIndex:2},{value:"registerFormField/registerVirtaulBox/registerFormComponent/registerFormItemComponent",paraId:64,tocIndex:2},{value:"V1 Globally registered components",paraId:65,tocIndex:2},{value:"V2 Remove, global registration is no longer supported",paraId:65,tocIndex:2},{value:"FormEffectHooks",paraId:66,tocIndex:2},{value:"V1 RxJS lifecycle hook",paraId:67,tocIndex:2},{value:"V2 Remove, export from @next-formily/core uniformly, and will not return RxJS Observable object",paraId:67,tocIndex:2},{value:"effects",paraId:68,tocIndex:2},{value:"V1 Support callback function",paraId:69,tocIndex:2},{value:"$",paraId:69,tocIndex:2},{value:" selector",paraId:69,tocIndex:2},{value:"V2 Remove",paraId:69,tocIndex:2},{value:"$",paraId:69,tocIndex:2},{value:"selector",paraId:69,tocIndex:2},{value:"This mainly refers to the difference in the JSON Schema protocol",paraId:70,tocIndex:3},{value:"editable",paraId:71,tocIndex:3},{value:"V1 is directly in the Schema description, indicating whether the field can be edited",paraId:72,tocIndex:3},{value:"V2 Renamed x-editable",paraId:72,tocIndex:3},{value:"visible",paraId:73,tocIndex:3},{value:"V1 Indicates whether the field is displayed",paraId:74,tocIndex:3},{value:"V2 Renamed x-visible",paraId:74,tocIndex:3},{value:"display",paraId:75,tocIndex:3},{value:"V1 Represent whether the field is displayed or not, if it is false, it represents the hidden behavior without deleting the value",paraId:76,tocIndex:3},{value:"V2 Renamed x-display, which represents the field display mode, and the value is",paraId:76,tocIndex:3},{value:'"none" | "visible" | "hidden"',paraId:76,tocIndex:3},{value:"triggerType",paraId:77,tocIndex:3},{value:"V1 Represent the field verification timing",paraId:78,tocIndex:3},{value:"V2 Remove, please use",paraId:78,tocIndex:3},{value:'x-validator:[{triggerType:"onBlur",validator:()=>...}]',paraId:78,tocIndex:3},{value:"x-props",paraId:79,tocIndex:3},{value:"V1 Represents the FormItem property",paraId:80,tocIndex:3},{value:"V2 Remove, please use x-decorator-props",paraId:80,tocIndex:3},{value:"x-rules",paraId:81,tocIndex:3},{value:"V1 Represent field verification rules",paraId:82,tocIndex:3},{value:"V2 Renamed x-validator",paraId:82,tocIndex:3},{value:"x-linkages",paraId:83,tocIndex:3},{value:"V1 Represent field linkage",paraId:84,tocIndex:3},{value:"V2 Remove, use x-reactions uniformly",paraId:84,tocIndex:3},{value:"x-mega-props",paraId:85,tocIndex:3},{value:"V1 Represent the sub-component properties of the MegaLayout component",paraId:86,tocIndex:3},{value:"V2 Remove",paraId:86,tocIndex:3},{value:"In Formily 1.x, we mainly use @next-formily/antd and @next-formily/antd-components, or @next-formily/next and @next-formily/next-components.",paraId:87,tocIndex:4},{value:"In V2, we have the following changes:",paraId:88,tocIndex:4},{value:"@next-formily/antd and @next-formily/antd-components were merged into @next-formily/antd, and the directory structure was changed to that of a pure component library.",paraId:89,tocIndex:4},{value:"The internal API of @next-formily/react @next-formily/core will no longer be exported.",paraId:90,tocIndex:4},{value:"Almost all components have been rewritten and cannot be smoothly upgraded.",paraId:91,tocIndex:4},{value:"Remove styled-components.",paraId:92,tocIndex:4}]},96736:function(_,E,e){e.r(E),e.d(E,{texts:function(){return x}});const x=[]}}]);
