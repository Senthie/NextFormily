import { unstable_useCompatFactory } from '@next-formily/reactive-react'
import { Form } from '@next-formily/core'
import { uid } from '@next-formily/shared'
import { useForm } from './useForm'

export const useFormEffects = (effects?: (form: Form) => void) => {
  const form = useForm()
  unstable_useCompatFactory(() => {
    const id = uid()
    form.addEffects(id, effects)
    return {
      dispose() {
        form.removeEffects(id)
      },
    }
  })
}
