import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export const addCart = (product) => {
  return {
    type : 'ADD_ITEM_TO_CART',
    payload : product
  }
}

export const delCart = (product) => {
    return {
        type : 'DELETE_ITEM',
        payload : product
    }
}
