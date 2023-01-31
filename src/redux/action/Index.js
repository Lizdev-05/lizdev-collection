import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export const addCart = (product) => {
  return {
    type : 'ADD_TO_CART',
    payload : product
  }
}

export const delItem = (product) {
    return {
        type : 'DELETE_ITEM',
        payload : product
    }
}
