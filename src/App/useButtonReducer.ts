import { useReducer } from 'react'

import type { ButtonProps } from '../render/Button'

type Action =
  | readonly ['add', ButtonProps]
  | readonly ['remove', number]
  | readonly ['update children', number, string]
  | readonly ['update disabled', number, boolean]
  | readonly ['update focus', number]
  | readonly ['update shortcut', number, string]
type State = readonly ButtonProps[]

const reducer: React.Reducer<State, Action> = (state, action) => {
  const trislice = <T>(array: readonly T[], index: number) =>
    [array.slice(0, index), array[index], array.slice(index + 1)] as const

  const modByIndex = <Key extends keyof ButtonProps>(
    array: readonly ButtonProps[],
    index: number,
    key: Key,
    value: ButtonProps[Key],
  ) => {
    const [prev, current, next] = trislice(array, index)
    return [...prev, { ...current, [key]: value }, ...next]
  }

  switch (action[0]) {
    case 'add':
      return [...state, action[1]]
    case 'remove': {
      const [prev, , next] = trislice(state, action[1])
      return [...prev, ...next]
    }
    case 'update children':
      return modByIndex(state, action[1], 'children', action[2])
    case 'update disabled':
      return modByIndex(state, action[1], 'disabled', action[2])
    case 'update focus': {
      const reset = state.map((button) => ({ ...button, focused: false }))
      if (action[1] === -1) {
        return reset
      }
      return modByIndex(reset, action[1], 'focused', true)
    }
    case 'update shortcut':
      return modByIndex(state, action[1], 'shortcut', action[2])
  }
}

export function useButtonReducer(): [State, React.Dispatch<Action>] {
  return useReducer(reducer, [
    {
      children: '확인',
      shortcut: 'Y',
      disabled: false,
      focused: true,
    },
  ])
}
