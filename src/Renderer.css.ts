import { globalStyle, style } from '@vanilla-extract/css'

export const host = style({})

globalStyle(`${host} > canvas`, {
  display: 'block',
})
