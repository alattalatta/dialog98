import { globalStyle, style } from '@vanilla-extract/css'

export const root = style({
  padding: 8,
})

export const host = style({
  width: '100%',
  height: '100%',
})

globalStyle(`${host} > canvas`, {
  display: 'block',
})
