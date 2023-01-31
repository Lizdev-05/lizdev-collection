import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export const addCart = (product) => {
  return {
    type : 'ADD_TO_CART',
    payload : product
  }
}
