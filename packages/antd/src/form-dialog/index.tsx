import React, { Fragment, useRef, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { createForm, IFormProps, Form } from '@next-formily/core'
import { toJS } from '@next-formily/reactive'
import { FormProvider, Observer, observer, ReactFC } from '@next-formily/react'
import {
  isNum,
  isStr,
  isBool,
  isFn,
  applyMiddleware,
  IMiddleware,
} from '@next-formily/shared'
import { Modal, ModalProps } from 'antd'
import {
  usePrefixCls,
  loading,
  createPortalProvider,
  createPortalRoot,
} from '../__builtins__'

type FormDialogRenderer =
  | React.ReactElement
  | ((form: Form) => React.ReactElement)

type ModalTitle = string | number | React.ReactElement

const isModalTitle = (props: any): props is ModalTitle => {
  return (
    isNum(props) || isStr(props) || isBool(props) || React.isValidElement(props)
  )
}

const getModelProps = (props: any): IModalProps => {
  if (isModalTitle(props)) {
    return {
      title: props,
    }
  } else {
    return props
  }
}

export interface IFormDialog {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDialog
  forConfirm(middleware: IMiddleware<Form>): IFormDialog
  forCancel(middleware: IMiddleware<Form>): IFormDialog
  open(props?: IFormProps): Promise<any>
  close(): void
}

export interface IModalProps extends ModalProps {
  onOk?: (event: React.MouseEvent<HTMLElement>) => void | boolean
  onCancel?: (
    event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
  ) => void | boolean
  loadingText?: React.ReactNode
}

export function FormDialog(
  title: IModalProps,
  id: string,
  renderer: FormDialogRenderer,
): IFormDialog
export function FormDialog(
  title: IModalProps,
  renderer: FormDialogRenderer,
): IFormDialog
export function FormDialog(
  title: ModalTitle,
  id: string,
  renderer: FormDialogRenderer,
): IFormDialog
export function FormDialog(
  title: ModalTitle,
  renderer: FormDialogRenderer,
): IFormDialog
export function FormDialog(title: any, id: any, renderer?: any): IFormDialog {
  if (isFn(id) || React.isValidElement(id)) {
    renderer = id
    id = 'form-dialog'
  }
  const env = {
    host: document.createElement('div'),
    form: null,
    promise: null,
    openMiddlewares: [],
    confirmMiddlewares: [],
    cancelMiddlewares: [],
  }
  const root = createPortalRoot(env.host, id)
  const props = getModelProps(title)
  const modal = {
    ...props,
    afterClose: () => {
      props?.afterClose?.()
      root.unmount()
    },
  }
  const DialogContent = observer(() => {
    return <Fragment>{isFn(renderer) ? renderer(env.form) : renderer}</Fragment>
  })
  const renderDialog = (
    visible = true,
    resolve?: () => any,
    reject?: () => any,
  ) => {
    return (
      <Observer>
        {() => (
          <Modal
            {...modal}
            open={visible}
            confirmLoading={env.form.submitting}
            onCancel={(e) => {
              if (modal?.onCancel?.(e) !== false) {
                reject()
              }
            }}
            onOk={async (e) => {
              if (modal?.onOk?.(e) !== false) {
                resolve()
              }
            }}
          >
            <FormProvider form={env.form}>
              <DialogContent />
            </FormProvider>
          </Modal>
        )}
      </Observer>
    )
  }

  document.body.appendChild(env.host)
  const formDialog = {
    forOpen: (middleware: IMiddleware<IFormProps>) => {
      if (isFn(middleware)) {
        env.openMiddlewares.push(middleware)
      }
      return formDialog
    },
    forConfirm: (middleware: IMiddleware<Form>) => {
      if (isFn(middleware)) {
        env.confirmMiddlewares.push(middleware)
      }
      return formDialog
    },
    forCancel: (middleware: IMiddleware<Form>) => {
      if (isFn(middleware)) {
        env.cancelMiddlewares.push(middleware)
      }
      return formDialog
    },
    open: async (props: IFormProps) => {
      if (env.promise) return env.promise
      env.promise = new Promise(async (resolve, reject) => {
        try {
          props = await loading(modal.loadingText, () =>
            applyMiddleware(props, env.openMiddlewares),
          )
          env.form = env.form || createForm(props)
        } catch (e) {
          reject(e)
        }
        root.render(() =>
          renderDialog(
            true,
            () => {
              env.form
                .submit(async () => {
                  await applyMiddleware(env.form, env.confirmMiddlewares)
                  resolve(toJS(env.form.values))
                  formDialog.close()
                })
                .catch(() => {})
            },
            async () => {
              await loading(modal.loadingText, () =>
                applyMiddleware(env.form, env.cancelMiddlewares),
              )
              formDialog.close()
            },
          ),
        )
      })
      return env.promise
    },
    close: () => {
      if (!env.host) return
      root.render(() => renderDialog(false))
    },
  }
  return formDialog
}

const DialogFooter: ReactFC = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [footer, setFooter] = useState<HTMLDivElement>()
  const footerRef = useRef<HTMLDivElement>(null)
  const prefixCls = usePrefixCls('modal')
  useLayoutEffect(() => {
    const content = ref.current?.closest(`.${prefixCls}-content`)
    if (content) {
      if (!footerRef.current) {
        footerRef.current = content.querySelector(`.${prefixCls}-footer`)
        if (!footerRef.current) {
          footerRef.current = document.createElement('div')
          footerRef.current.classList.add(`${prefixCls}-footer`)
          content.appendChild(footerRef.current)
        }
      }
      setFooter(footerRef.current)
    }
  })

  footerRef.current = footer

  return (
    <div ref={ref} style={{ display: 'none' }}>
      {footer && createPortal(props.children, footer)}
    </div>
  )
}

FormDialog.Footer = DialogFooter

FormDialog.Portal = createPortalProvider('form-dialog')

export default FormDialog
