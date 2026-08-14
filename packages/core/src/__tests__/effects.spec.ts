import {
  createForm,
  createEffectContext,
  onFieldChange,
  onFieldInit,
  onFieldInitialValueChange,
  onFieldInputValueChange,
  onFieldMount,
  onFieldReact,
  onFieldUnmount,
  onFieldValidateEnd,
  onFieldValidateStart,
  onFieldValidateFailed,
  onFieldValidateSuccess,
  onFieldValueChange,
  onFormInit,
  onFormInitialValuesChange,
  onFormInputChange,
  onFormMount,
  onFormReact,
  onFormReset,
  onFormSubmit,
  onFormSubmitEnd,
  onFormSubmitFailed,
  onFormSubmitStart,
  onFormSubmitSuccess,
  onFormSubmitValidateFailed,
  onFormSubmitValidateStart,
  onFormSubmitValidateSuccess,
  onFormSubmitValidateEnd,
  onFormUnmount,
  onFormValidateEnd,
  onFormValidateStart,
  onFormValidateFailed,
  onFormValidateSuccess,
  onFormValuesChange,
  isVoidField,
} from '../'
import { runEffects } from '../shared/effective'
import { attach, sleep } from './shared'

test('onFormInit/onFormMount/onFormUnmount', () => {
  const mount = jest.fn()
  const init = jest.fn()
  const unmount = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormInit(init)
        onFormMount(mount)
        onFormUnmount(unmount)
      },
    })
  )
  expect(init).toHaveBeenCalled()
  expect(mount).toHaveBeenCalled()
  expect(unmount).not.toHaveBeenCalled()
  form.onUnmount()
  expect(unmount).toHaveBeenCalled()
})

test('onFormValuesChange/onFormInitialValuesChange', () => {
  const valuesChange = jest.fn()
  const initialValuesChange = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormValuesChange(valuesChange)
        onFormInitialValuesChange(initialValuesChange)
      },
    })
  )
  expect(valuesChange).not.toHaveBeenCalled()
  expect(initialValuesChange).not.toHaveBeenCalled()
  form.setValues({
    aa: '123',
  })
  expect(form.values.aa).toEqual('123')
  expect(valuesChange).toHaveBeenCalled()
  form.setInitialValues({
    aa: '321',
    bb: '123',
  })
  expect(form.values.aa).toEqual('321')
  expect(form.values.bb).toEqual('123')
  expect(initialValuesChange).toHaveBeenCalled()
})

test('onFormInputChange', () => {
  const inputChange = jest.fn()
  const valuesChange = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormValuesChange(valuesChange)
        onFormInputChange(inputChange)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
    })
  )
  expect(inputChange).not.toHaveBeenCalled()
  expect(valuesChange).not.toHaveBeenCalled()
  field.setValue('123')
  expect(inputChange).not.toHaveBeenCalled()
  expect(valuesChange).toHaveBeenCalledTimes(1)
  field.onInput('123')
  expect(inputChange).toHaveBeenCalled()
  expect(valuesChange).toHaveBeenCalledTimes(1)
  field.onInput('321')
  expect(inputChange).toHaveBeenCalledTimes(2)
  expect(valuesChange).toHaveBeenCalledTimes(2)
})

test('onFormReact', () => {
  const react = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormReact((form) => {
          if (form.values.aa) {
            react()
          }
        })
      },
    })
  )
  expect(react).not.toHaveBeenCalled()
  form.setValues({ aa: 123 })
  expect(react).toHaveBeenCalled()
  form.onUnmount()

  // will not throw error
  const form2 = attach(
    createForm({
      effects() {
        onFormReact()
      },
    })
  )

  form2.onUnmount()
})

test('onFormReset', async () => {
  const reset = jest.fn()
  const form = attach(
    createForm({
      initialValues: {
        aa: 123,
      },
      effects() {
        onFormReset(reset)
      },
    })
  )

  const field = attach(
    form.createField({
      name: 'aa',
    })
  )

  field.setValue('xxxx')

  expect(field.value).toEqual('xxxx')
  expect(form.values.aa).toEqual('xxxx')
  expect(reset).not.toHaveBeenCalled()
  await form.reset()
  expect(field.value).toEqual(123)
  expect(form.values.aa).toEqual(123)
  expect(reset).toHaveBeenCalled()
})

test('onFormSubmit', async () => {
  const submit = jest.fn()
  const submitStart = jest.fn()
  const submitEnd = jest.fn()
  const submitSuccess = jest.fn()
  const submitFailed = jest.fn()
  const submitValidateStart = jest.fn()
  const submitValidateFailed = jest.fn()
  const submitValidateSuccess = jest.fn()
  const submitValidateEnd = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormSubmitStart(submitStart)
        onFormSubmit(submit)
        onFormSubmitEnd(submitEnd)
        onFormSubmitFailed(submitFailed)
        onFormSubmitSuccess(submitSuccess)
        onFormSubmitValidateStart(submitValidateStart)
        onFormSubmitValidateFailed(submitValidateFailed)
        onFormSubmitValidateSuccess(submitValidateSuccess)
        onFormSubmitValidateEnd(submitValidateEnd)
      },
    })
  )

  const field = attach(
    form.createField({
      name: 'aa',
      required: true,
    })
  )
  try {
    await form.submit()
  } catch {}
  expect(submitStart).toHaveBeenCalled()
  expect(submit).toHaveBeenCalled()
  expect(submitEnd).toHaveBeenCalled()
  expect(submitSuccess).not.toHaveBeenCalled()
  expect(submitFailed).toHaveBeenCalled()
  expect(submitValidateStart).toHaveBeenCalled()
  expect(submitValidateFailed).toHaveBeenCalled()
  expect(submitValidateSuccess).not.toHaveBeenCalled()
  expect(submitValidateEnd).toHaveBeenCalled()
  field.onInput('123')
  try {
    await form.submit()
  } catch (e) {}
  expect(submitStart).toHaveBeenCalledTimes(2)
  expect(submit).toHaveBeenCalledTimes(2)
  expect(submitEnd).toHaveBeenCalledTimes(2)
  expect(submitSuccess).toHaveBeenCalledTimes(1)
  expect(submitFailed).toHaveBeenCalledTimes(1)
  expect(submitValidateStart).toHaveBeenCalledTimes(2)
  expect(submitValidateFailed).toHaveBeenCalledTimes(1)
  expect(submitValidateSuccess).toHaveBeenCalledTimes(1)
  expect(submitValidateEnd).toHaveBeenCalledTimes(2)
})

test('onFormValidate', async () => {
  const validateStart = jest.fn()
  const validateEnd = jest.fn()
  const validateFailed = jest.fn()
  const validateSuccess = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFormValidateStart(validateStart)
        onFormValidateEnd(validateEnd)
        onFormValidateFailed(validateFailed)
        onFormValidateSuccess(validateSuccess)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
      required: true,
    })
  )
  try {
    await form.validate()
  } catch {}
  expect(validateStart).toHaveBeenCalled()
  expect(validateEnd).toHaveBeenCalled()
  expect(validateFailed).toHaveBeenCalled()
  expect(validateSuccess).not.toHaveBeenCalled()
  field.onInput('123')
  try {
    await form.validate()
  } catch {}
  expect(validateStart).toHaveBeenCalledTimes(2)
  expect(validateEnd).toHaveBeenCalledTimes(2)
  expect(validateFailed).toHaveBeenCalledTimes(1)
  expect(validateSuccess).toHaveBeenCalledTimes(1)
})

test('onFieldChange', async () => {
  const fieldChange = jest.fn()
  const valueChange = jest.fn()
  const valueChange2 = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFieldChange(
          'aa',
          [
            'value',
            'disabled',
            'initialized',
            'inputValue',
            'loading',
            'visible',
            'editable',
          ],
          fieldChange
        )
        onFieldChange('aa', valueChange)
        onFieldChange('aa', undefined, valueChange2)
        onFieldChange('aa')
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
    })
  )
  expect(fieldChange).toHaveBeenCalledTimes(1)
  field.setValue('123')
  expect(fieldChange).toHaveBeenCalledTimes(2)
  field.onInput('321')
  expect(fieldChange).toHaveBeenCalledTimes(3)
  field.setLoading(true)
  expect(fieldChange).toHaveBeenCalledTimes(3)
  await sleep()
  expect(fieldChange).toHaveBeenCalledTimes(4)
  field.setPattern('disabled')
  expect(fieldChange).toHaveBeenCalledTimes(5)
  field.setDisplay('none')
  expect(fieldChange).toHaveBeenCalledTimes(6)
  form.onUnmount()
  expect(valueChange).toHaveBeenCalledTimes(4)
  expect(valueChange2).toHaveBeenCalledTimes(4)
})

test('onFieldInit/onFieldMount/onFieldUnmount', () => {
  const fieldInit = jest.fn()
  const fieldMount = jest.fn()
  const fieldUnmount = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFieldInit('aa', fieldInit)
        onFieldMount('aa', fieldMount)
        onFieldUnmount('aa', fieldUnmount)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
    })
  )
  expect(fieldInit).toHaveBeenCalledTimes(1)
  expect(fieldMount).toHaveBeenCalledTimes(1)
  expect(fieldUnmount).toHaveBeenCalledTimes(0)
  field.onUnmount()
  expect(fieldUnmount).toHaveBeenCalledTimes(1)
})

test('onFieldInitialValueChange/onFieldValueChange/onFieldInputValueChange', () => {
  const fieldValueChange = jest.fn()
  const fieldInitialValueChange = jest.fn()
  const fieldInputValueChange = jest.fn()
  const notTrigger = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFieldInitialValueChange('aa', fieldInitialValueChange)
        onFieldValueChange('aa', fieldValueChange)
        onFieldInputValueChange('aa', fieldInputValueChange)
        onFieldValueChange('xx', notTrigger)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
    })
  )
  field.setValue('123')
  expect(fieldValueChange).toHaveBeenCalledTimes(1)
  expect(fieldInitialValueChange).toHaveBeenCalledTimes(0)
  expect(fieldInputValueChange).toHaveBeenCalledTimes(0)
  field.setInitialValue('xxx')
  expect(fieldValueChange).toHaveBeenCalledTimes(2)
  expect(fieldInitialValueChange).toHaveBeenCalledTimes(1)
  expect(fieldInputValueChange).toHaveBeenCalledTimes(0)
  field.onInput('321')
  expect(fieldValueChange).toHaveBeenCalledTimes(3)
  expect(fieldInitialValueChange).toHaveBeenCalledTimes(1)
  expect(fieldInputValueChange).toHaveBeenCalledTimes(1)
  expect(notTrigger).toHaveBeenCalledTimes(0)
})

test('onFieldReact', () => {
  const react = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFieldReact('aa', (field) => {
          if (isVoidField(field)) return
          if (field.value) {
            react()
          }
          if (field.display === 'hidden') {
            react()
          }
        })
        onFieldReact('aa', null)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
    })
  )
  expect(react).not.toHaveBeenCalled()
  form.setValues({ aa: 123 })
  expect(react).toHaveBeenCalledTimes(1)
  field.setDisplay('hidden')
  expect(react).toHaveBeenCalledTimes(3)
  form.onUnmount()
})

test('onFieldValidate', async () => {
  const validateStart = jest.fn()
  const validateFailed = jest.fn()
  const validateSuccess = jest.fn()
  const validateEnd = jest.fn()
  const form = attach(
    createForm({
      effects() {
        onFieldValidateStart('aa', validateStart)
        onFieldValidateEnd('aa', validateEnd)
        onFieldValidateFailed('aa', validateFailed)
        onFieldValidateSuccess('aa', validateSuccess)
      },
    })
  )
  const field = attach(
    form.createField({
      name: 'aa',
      required: true,
    })
  )
  try {
    await field.validate()
  } catch {}
  expect(validateStart).toHaveBeenCalled()
  expect(validateFailed).toHaveBeenCalled()
  expect(validateSuccess).not.toHaveBeenCalled()
  expect(validateEnd).toHaveBeenCalled()
  field.setValue('123')
  try {
    await field.validate()
  } catch {}
  expect(validateStart).toHaveBeenCalledTimes(2)
  expect(validateFailed).toHaveBeenCalledTimes(1)
  expect(validateSuccess).toHaveBeenCalledTimes(1)
  expect(validateEnd).toHaveBeenCalledTimes(2)
})

test('async use will throw error', async () => {
  const valueChange = jest.fn()
  let error
  const form = attach(
    createForm({
      effects() {
        setTimeout(() => {
          try {
            onFieldValueChange('aa', valueChange)
          } catch (e) {
            error = e
          }
        }, 0)
      },
    })
  )
  const aa = attach(
    form.createField({
      name: 'aa',
    })
  )
  await sleep(10)
  aa.setValue('123')
  expect(valueChange).toHaveBeenCalledTimes(0)
  expect(error).not.toBeUndefined()
})

test('effect context', async () => {
  const context = createEffectContext<number>()
  const context2 = createEffectContext<number>()
  const context3 = createEffectContext<number>(123)
  let results: any
  let error: any
  let error2: any
  const consumer = () => {
    results = context.consume()
  }
  const consumer2 = () => {
    setTimeout(() => {
      try {
        results = context2.consume()
      } catch (e) {
        error2 = e
      }
    }, 0)
  }
  attach(
    createForm({
      effects() {
        context.provide(123)
        context3.provide()
        consumer()
        setTimeout(() => {
          try {
            context2.provide(123)
          } catch (e) {
            error = e
          }
        }, 0)
        consumer2()
      },
    })
  )
  await sleep(10)
  expect(results).toEqual(123)
  expect(error).not.toBeUndefined()
  expect(error2).not.toBeUndefined()
})

test('runEffects', () => {
  expect(
    runEffects(123, () => {
      onFormMount(() => {})
    }).length
  ).toEqual(1)
})
