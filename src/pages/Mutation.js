import React from 'react'
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: {
        name: $name,
        quantityPerUnit: $quantityPerUnit,
    }){
        record {
            name
        }
    }
}`

export default function Mutation() {
    const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "podeserdinamico",
            quantityPerUnit: 1,
        }
    })
  return (
    <div><button onClick={() => createProduct()}></button></div>
  )
}
