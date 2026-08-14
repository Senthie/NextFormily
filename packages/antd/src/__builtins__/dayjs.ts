import { isArr, isFn, isEmpty } from '@next-formily/shared'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(localeData)
dayjs.extend(localizedFormat)

export const dayjsable = (value: any, format?: string) => {
  return Array.isArray(value)
    ? value.map((val) => dayjs(val, format))
    : value
      ? dayjs(value, format)
      : value
}

export const formatDayjsValue = (
  value: any,
  format: any,
  placeholder?: string,
): string | string[] => {
  const formatDate = (date: any, format: any, i = 0) => {
    if (!date) return placeholder
    const TIME_REG = /^(?:[01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/
    let _format = format
    if (isArr(format)) {
      _format = format[i]
    }
    if (isFn(_format)) {
      return _format(date)
    }
    if (isEmpty(_format)) {
      return date
    }
    // dayjs '19:55:22' 下需要传入第二个参数
    if (TIME_REG.test(date)) {
      return dayjs(date, _format).format(_format)
    }
    return dayjs(date).format(_format)
  }
  if (isArr(value)) {
    return value.map((val, index) => {
      return formatDate(val, format, index)
    })
  } else {
    return value ? formatDate(value, format) : value || placeholder
  }
}
