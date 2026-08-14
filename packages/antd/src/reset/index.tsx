import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd'
import { IFieldResetOptions, IFormFeedback } from '@next-formily/core'
import { useParentForm } from '@next-formily/react'

export type IResetProps = IFieldResetOptions &
  Omit<ButtonProps, 'onClick'> & {
    onClick?: (e: React.MouseEvent<Element, MouseEvent>) => boolean | void
    onResetValidateSuccess?: (payload: any) => void
    onResetValidateFailed?: (feedbacks: IFormFeedback[]) => void
  }

export const Reset: React.FC<React.PropsWithChildren<IResetProps>> = ({
  forceClear,
  validate,
  onResetValidateSuccess,
  onResetValidateFailed,
  ...props
}) => {
  const form = useParentForm()
  return (
    <Button
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          if (props.onClick(e) === false) return
        }
        form
          .reset('*', {
            forceClear,
            validate,
          })
          .then(onResetValidateSuccess)
          .catch(onResetValidateFailed)
      }}
    >
      {props.children}
    </Button>
  )
}

export default Reset
