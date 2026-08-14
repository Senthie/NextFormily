import { useContext } from 'react'
import { SchemaContext } from '../shared'
import { Schema } from '@next-formily/json-schema'

export const useFieldSchema = (): Schema => {
  return useContext(SchemaContext)
}
