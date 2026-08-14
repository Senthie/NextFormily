import { ISchema } from '@next-formily/json-schema'

/**
 * JSON Schema 表单模板
 *
 * 用法：
 *   <SchemaField schema={jsonFormSchema} />
 *   <Submit onSubmit={values => console.log(values)}>提交</Submit>
 *
 * 特性：
 * - 纯 JSON 定义表单（无需 JSX 编排字段）
 * - 支持 required 校验、enum 数据源
 * - 支持 `{{ }}` 表达式做联动（x-reactions）
 * - 支持嵌套对象 / 数组（ArrayTable 自增表格）
 */
export const jsonFormSchema: ISchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: '姓名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入姓名',
      },
    },
    age: {
      type: 'number',
      title: '年龄',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    gender: {
      type: 'string',
      title: '性别',
      required: true,
      enum: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
    },
    hobbies: {
      type: 'array',
      title: '爱好',
      enum: [
        { label: '阅读', value: 'reading' },
        { label: '运动', value: 'sports' },
        { label: '音乐', value: 'music' },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        mode: 'multiple',
        placeholder: '可多选',
      },
    },
    enabled: {
      type: 'boolean',
      title: '开启联动',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-reactions': {
        target: 'remark',
        fulfill: {
          state: {
            visible: '{{$self.value === true}}',
          },
        },
        otherwise: {
          state: {
            visible: false,
          },
        },
      },
    },
    remark: {
      type: 'string',
      title: '备注（开启联动后显示）',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    date: {
      type: 'string',
      title: '日期',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
    },
    address: {
      type: 'object',
      title: '地址（嵌套对象）',
      'x-decorator': 'FormItem',
      'x-component': 'FormLayout',
      properties: {
        province: {
          type: 'string',
          title: '省份',
          required: true,
          enum: [
            { label: '浙江省', value: 'zhejiang' },
            { label: '江苏省', value: 'jiangsu' },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        city: {
          type: 'string',
          title: '城市',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
    items: {
      type: 'array',
      title: '订单明细（ArrayTable）',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      items: {
        type: 'object',
        properties: {
          productCol: {
            type: 'void',
            title: '商品',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '商品',
              dataIndex: 'product',
              width: 200,
            },
            properties: {
              product: {
                type: 'string',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
            },
          },
          priceCol: {
            type: 'void',
            title: '单价',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '单价',
              dataIndex: 'price',
              width: 140,
            },
            properties: {
              price: {
                type: 'number',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
              },
            },
          },
          countCol: {
            type: 'void',
            title: '数量',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '数量',
              dataIndex: 'count',
              width: 140,
            },
            properties: {
              count: {
                type: 'number',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
              },
            },
          },
          operations: {
            type: 'void',
            title: '操作',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: '操作',
              dataIndex: 'operations',
              width: 200,
            },
            properties: {
              op: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
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
          title: '添加明细',
          'x-component': 'ArrayTable.Addition',
        },
      },
    },
  },
}
