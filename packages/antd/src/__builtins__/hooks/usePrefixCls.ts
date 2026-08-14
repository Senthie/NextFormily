import { useContext } from 'react'
import { ConfigProvider } from 'antd'

export const usePrefixCls = (
  tag?: string,
  props?: object,
) => {
  const prefixCls = (props as { prefixCls?: string } | undefined)?.prefixCls
  if ('ConfigContext' in ConfigProvider) {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
    return getPrefixCls(tag, prefixCls)
  } else {
    const prefix = prefixCls ?? 'ant-'
    return `${prefix}${tag ?? ''}`
  }
}
