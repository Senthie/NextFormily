"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[9051],{77373:function(r,a,n){n.r(a);var i=n(64686),_=n(84323),m=n(73552),u=n(87413),p=n(7265),o=n(20472),h=n(8902),g=n(18210),d=n(79891),s=n(73693),l=n(69854),t=n(93562),e=n(13225);function c(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"form-designer-development-guide",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#form-designer-development-guide",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form designer development guide"]}),(0,e.jsxs)("h2",{id:"introduction",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Introduction"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"http://img.alicdn.com/imgextra/i2/O1CN01eI9FLz22tZek2jv7E_!!6000000007178-2-tps-3683-2272.png",alt:""})}),(0,e.jsxs)("p",{children:[t.texts[0].value,(0,e.jsx)("a",{href:"https://github.com/alibaba/designable",children:t.texts[1].value}),t.texts[2].value]}),(0,e.jsxs)("h2",{id:"core-concept",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#core-concept",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Core Concept"]}),(0,e.jsx)("p",{children:t.texts[3].value}),(0,e.jsxs)("h2",{id:"install",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Install"]}),(0,e.jsx)("p",{children:t.texts[4].value}),(0,e.jsx)(o.Z,{lang:"bash",children:t.texts[5].value}),(0,e.jsx)("p",{children:t.texts[6].value}),(0,e.jsx)(o.Z,{lang:"bash",children:t.texts[7].value}),(0,e.jsxs)("h2",{id:"get-started-quickly",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#get-started-quickly",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Get started quickly"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://github.com/alibaba/designable/tree/main/formily/antd/playground",children:t.texts[8].value})}),(0,e.jsx)(o.Z,{lang:"tsx",children:t.texts[9].value})]})})})})}a.default=c},93562:function(r,a,n){n.r(a),n.d(a,{texts:function(){return i}});const i=[{value:"Formily Form Designer is an extension package based on ",paraId:0,tocIndex:1},{value:"designable",paraId:0,tocIndex:1},{value:". It inherits the basic capabilities of designable, and provides Formily basic form building and configuration capabilities.",paraId:0,tocIndex:1},{value:"The core concept of Designable is to turn the designer into a modular combination, everything can be replaced, Designable itself provides a series of out-of-the-box components for users to use, but if users are not satisfied with the components, they can directly replace the components. To achieve maximum flexible customization, that is, Designable itself does not provide any plug-in related APIs",paraId:1,tocIndex:2},{value:"Ant Design users",paraId:2,tocIndex:3},{value:`npm install --save @designable/formily-antd
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
`,paraId:7,tocIndex:4}]}}]);
