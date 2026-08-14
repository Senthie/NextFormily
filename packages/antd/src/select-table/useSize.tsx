import type { SizeType } from 'antd/es/config-provider/SizeContext'

interface ISize {
  (
    fieldSize: 'large' | 'default' | 'small',
    searchSize?: SizeType,
    tableSize?: SizeType,
  ): {
    searchSize: SizeType
    tableSize: SizeType
  }
}

const useSize: ISize = (fieldSize = 'default', searchSize, tableSize) => {
  const fieldSizeMap: any = {
    small: {
      searchSize: 'small',
      tableSize: 'small',
    },
    default: {
      searchSize: 'medium',
      tableSize: 'medium',
    },
    large: {
      searchSize: 'large',
      tableSize: 'medium',
    },
  }
  const { searchSize: fieldSearchSize, tableSize: fieldTableSize } =
    fieldSizeMap[fieldSize]

  return {
    searchSize: searchSize || fieldSearchSize,
    tableSize: tableSize || fieldTableSize,
  }
}

export { useSize }
