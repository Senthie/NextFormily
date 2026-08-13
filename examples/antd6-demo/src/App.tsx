import React, { useMemo, useState } from 'react'
import { createForm, onFieldValueChange } from '@formily/core'
import {
  FormProvider,
  Field,
  createSchemaField,
  FormConsumer,
} from '@formily/react'
import {
  FormItem,
  FormLayout,
  FormButtonGroup,
  FormStep,
  Input,
  Password,
  NumberPicker,
  Select,
  Radio,
  Checkbox,
  Switch,
  DatePicker,
  TimePicker,
  TreeSelect,
  Cascader,
  ArrayTable,
  Submit,
  Reset,
  FormDialog,
  FormDrawer,
  PreviewText,
} from '@formily/antd'
import { Button, message } from 'antd'
import { jsonFormSchema } from './json-schema-template'

/* ============ 1. JSX 模式：基础控件 + dayjs 日期 + 联动 + 校验 ============ */
const BasicForm = () => {
  const form = useMemo(
    () =>
      createForm({
        validateFirst: true,
        effects() {
          onFieldValueChange('select', (field) => {
            form.setFieldState('visible-field', (state) => {
              state.visible = field.value === 'yes'
            })
          })
        },
      }),
    []
  )
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={14}>
        <Field
          name="input"
          title="输入框"
          required
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="password"
          title="密码"
          decorator={[FormItem]}
          component={[Password]}
        />
        <Field
          name="number"
          title="数字"
          required
          decorator={[FormItem]}
          component={[NumberPicker]}
        />
        <Field
          name="select"
          title="选择框(联动开关)"
          required
          dataSource={[
            { label: '是', value: 'yes' },
            { label: '否', value: 'no' },
          ]}
          decorator={[FormItem]}
          component={[Select]}
        />
        <Field
          name="visible-field"
          title="联动显示"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="radio"
          title="单选"
          dataSource={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
          decorator={[FormItem]}
          component={[Radio.Group]}
        />
        <Field
          name="checkbox"
          title="复选"
          dataSource={[
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ]}
          decorator={[FormItem]}
          component={[Checkbox.Group]}
        />
        <Field
          name="switch"
          title="开关"
          decorator={[FormItem]}
          component={[Switch]}
        />
        {/* dayjs 迁移验证：DatePicker / RangePicker / TimePicker */}
        <Field
          name="date"
          title="日期(dayjs)"
          required
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="range"
          title="日期范围(dayjs)"
          decorator={[FormItem]}
          component={[DatePicker.RangePicker]}
        />
        <Field
          name="time"
          title="时间(dayjs)"
          decorator={[FormItem]}
          component={[TimePicker]}
        />
        <Field
          name="tree"
          title="树选择"
          dataSource={[
            {
              label: '父节点',
              value: 'parent',
              children: [{ label: '子节点', value: 'child' }],
            },
          ]}
          decorator={[FormItem]}
          component={[TreeSelect]}
        />
        <Field
          name="cascader"
          title="级联"
          dataSource={[
            {
              label: '浙江省',
              value: 'zhejiang',
              children: [{ label: '杭州', value: 'hangzhou' }],
            },
          ]}
          decorator={[FormItem]}
          component={[Cascader]}
        />
      </FormLayout>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
    </FormProvider>
  )
}

/* ============ 2. Markup Schema 模式 ============ */
const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
    DatePicker,
    Select,
  },
})

const SchemaForm = () => {
  const form = useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={14}>
        <SchemaField>
          <SchemaField.String
            name="schema-input"
            title="Schema 输入"
            required
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaField.Number
            name="schema-number"
            title="Schema 数字"
            x-decorator="FormItem"
            x-component="NumberPicker"
          />
          <SchemaField.String
            name="schema-date"
            title="Schema 日期"
            x-decorator="FormItem"
            x-component="DatePicker"
          />
          <SchemaField.String
            name="schema-select"
            title="Schema 选择"
            enum={[
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ]}
            x-decorator="FormItem"
            x-component="Select"
          />
        </SchemaField>
      </FormLayout>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
    </FormProvider>
  )
}

/* ============ 3. FormStep（Steps items 重构验证，需 Markup Schema 模式） ============ */
const StepSchemaField = createSchemaField({
  components: { FormItem, Input, NumberPicker, FormStep },
})

const StepForm = () => {
  const form = useMemo(() => createForm(), [])
  const formStep = useMemo(() => FormStep.createFormStep(), [])
  return (
    <FormProvider form={form}>
      <StepSchemaField>
        <StepSchemaField.Void
          x-component="FormStep"
          x-component-props={{ formStep }}
        >
          <StepSchemaField.Void
            name="step1"
            x-component="FormStep.StepPane"
            x-component-props={{ title: '基本信息' }}
          >
            <StepSchemaField.String
              name="step-name"
              title="姓名"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
          </StepSchemaField.Void>
          <StepSchemaField.Void
            name="step2"
            x-component="FormStep.StepPane"
            x-component-props={{ title: '详细信息' }}
          >
            <StepSchemaField.Number
              name="step-age"
              title="年龄"
              x-decorator="FormItem"
              x-component="NumberPicker"
            />
          </StepSchemaField.Void>
        </StepSchemaField.Void>
      </StepSchemaField>
      <FormButtonGroup>
        <Button onClick={() => formStep.back()}>上一步</Button>
        <Button onClick={() => formStep.next()}>下一步</Button>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

/* ============ 4. ArrayTable（TableColumnType + size 验证，需 Markup Schema 模式） ============ */
const ArrayTableSchemaField = createSchemaField({
  components: { FormItem, Input, NumberPicker, DatePicker, ArrayTable },
})

const ArrayTableForm = () => {
  const form = useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <ArrayTableSchemaField>
        <ArrayTableSchemaField.Array name="list" x-component="ArrayTable">
          <ArrayTableSchemaField.Object>
            <ArrayTableSchemaField.Object
              x-component="ArrayTable.Column"
              x-component-props={{ title: '名称', dataIndex: 'name' }}
            >
              <ArrayTableSchemaField.String
                name="name"
                x-decorator="FormItem"
                x-component="Input"
              />
            </ArrayTableSchemaField.Object>
            <ArrayTableSchemaField.Object
              x-component="ArrayTable.Column"
              x-component-props={{ title: '数量', dataIndex: 'count' }}
            >
              <ArrayTableSchemaField.Number
                name="count"
                x-decorator="FormItem"
                x-component="NumberPicker"
              />
            </ArrayTableSchemaField.Object>
            <ArrayTableSchemaField.Object
              x-component="ArrayTable.Column"
              x-component-props={{ title: '日期', dataIndex: 'date' }}
            >
              <ArrayTableSchemaField.String
                name="date"
                x-decorator="FormItem"
                x-component="DatePicker"
              />
            </ArrayTableSchemaField.Object>
            <ArrayTableSchemaField.Object
              x-component="ArrayTable.Column"
              x-component-props={{
                title: '操作',
                dataIndex: 'operations',
                width: 200,
              }}
            >
              <ArrayTableSchemaField.Void x-component="FormItem">
                <ArrayTableSchemaField.Void x-component="ArrayTable.Remove" />
                <ArrayTableSchemaField.Void x-component="ArrayTable.MoveUp" />
                <ArrayTableSchemaField.Void x-component="ArrayTable.MoveDown" />
              </ArrayTableSchemaField.Void>
            </ArrayTableSchemaField.Object>
          </ArrayTableSchemaField.Object>
          <ArrayTableSchemaField.Void
            x-component="ArrayTable.Addition"
            title="添加一行"
          />
        </ArrayTableSchemaField.Array>
      </ArrayTableSchemaField>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
    </FormProvider>
  )
}

/* ============ 5. FormDialog / FormDrawer（visible→open 迁移验证） ============ */
const DialogDemo = () => {
  const onDialog = () => {
    FormDialog('弹窗表单', () => (
      <Field
        name="dialog-name"
        title="名称"
        required
        decorator={[FormItem]}
        component={[Input]}
      />
    ))
      .open()
      .then((values) => console.log('dialog values:', values))
  }
  const onDrawer = () => {
    FormDrawer('抽屉表单', () => (
      <Field
        name="drawer-name"
        title="名称"
        required
        decorator={[FormItem]}
        component={[Input]}
      />
    ))
      .open()
      .then((values) => console.log('drawer values:', values))
  }
  return (
    <FormButtonGroup>
      <Button type="primary" onClick={onDialog}>
        打开弹窗
      </Button>
      <Button onClick={onDrawer}>打开抽屉</Button>
    </FormButtonGroup>
  )
}

/* ============ 6. 阅读态（PreviewText） ============ */
const ReadPrettyForm = () => {
  const form = useMemo(
    () =>
      createForm({
        readPretty: true,
        initialValues: {
          'rp-input': '张三',
          'rp-date': '2024-01-01',
          'rp-select': ['a'],
        },
      }),
    []
  )
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={14}>
        <Field
          name="rp-input"
          title="文本"
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="rp-date"
          title="日期"
          decorator={[FormItem]}
          component={[DatePicker]}
        />
        <Field
          name="rp-select"
          title="多选"
          dataSource={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
          decorator={[FormItem]}
          component={[Select]}
        />
      </FormLayout>
      <PreviewText.Placeholder value="暂无数据">
        <FormConsumer>
          {(form) => (
            <div className="demo-json-preview">
              {JSON.stringify(form.values, null, 2)}
            </div>
          )}
        </FormConsumer>
      </PreviewText.Placeholder>
    </FormProvider>
  )
}

/* ============ 7. JSON Schema 模式（纯 JSON 模板 + 提交展示） ============ */
const JsonSchemaField = createSchemaField({
  components: {
    FormItem,
    FormLayout,
    Input,
    NumberPicker,
    Select,
    Radio,
    Switch,
    DatePicker,
    ArrayTable,
  },
})

const JsonSchemaForm = () => {
  const [submitted, setSubmitted] = useState<any>(null)
  const form = useMemo(() => createForm(), [])
  const onSubmit = (values: any) => {
    setSubmitted(values)
    message.success('提交成功！')
  }
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={14}>
        <JsonSchemaField schema={jsonFormSchema} />
      </FormLayout>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={onSubmit}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
      {submitted && (
        <div className="demo-json-preview">
          <div style={{ color: '#7ee787', marginBottom: 8 }}>
            ✅ 提交内容（{new Date().toLocaleTimeString()}）：
          </div>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </FormProvider>
  )
}

/* ============ 汇总 ============ */
const App = () => {
  return (
    <div className="demo-card">
      <h1 style={{ textAlign: 'center' }}>
        Formily · React {React.version} + antd 运行验证
      </h1>

      <section>
        <h2 className="demo-section-title">
          1. JSX 模式（联动 / 校验 / dayjs 日期）
        </h2>
        <BasicForm />
      </section>

      <section>
        <h2 className="demo-section-title">2. Markup Schema 模式</h2>
        <SchemaForm />
      </section>

      <section>
        <h2 className="demo-section-title">3. FormStep（Steps items API）</h2>
        <StepForm />
      </section>

      <section>
        <h2 className="demo-section-title">4. ArrayTable（可增删排序）</h2>
        <ArrayTableForm />
      </section>

      <section>
        <h2 className="demo-section-title">
          5. FormDialog / FormDrawer（open API）
        </h2>
        <DialogDemo />
      </section>

      <section>
        <h2 className="demo-section-title">6. 阅读态（PreviewText）</h2>
        <ReadPrettyForm />
      </section>

      <section>
        <h2 className="demo-section-title">
          7. JSON Schema 模板（纯 JSON 构建 + 提交展示）
        </h2>
        <JsonSchemaForm />
      </section>
    </div>
  )
}

export default App
