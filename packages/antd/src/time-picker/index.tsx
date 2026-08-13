import type { Dayjs } from 'dayjs'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import {
  TimePicker as AntdTimePicker,
  TimePickerProps as AntdTimePickerProps,
  TimeRangePickerProps,
} from 'antd'
import { PreviewText } from '../preview-text'
import { formatDayjsValue, dayjsable } from '../__builtins__'

type ComposedTimePicker = React.FC<
  React.PropsWithChildren<AntdTimePickerProps>
> & {
  RangePicker?: React.FC<React.PropsWithChildren<TimeRangePickerProps>>
}

const mapTimeFormat = function () {
  return (props: any) => {
    const format = props['format'] || 'HH:mm:ss'
    const onChange = props.onChange
    return {
      ...props,
      format,
      value: dayjsable(props.value, format),
      onChange: (value: Dayjs | Dayjs[]) => {
        if (onChange) {
          onChange(formatDayjsValue(value, format))
        }
      },
    }
  }
}

export const TimePicker: ComposedTimePicker = connect(
  AntdTimePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimePicker)
)

TimePicker.RangePicker = connect(
  AntdTimePicker.RangePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimeRangePicker)
)

export default TimePicker
