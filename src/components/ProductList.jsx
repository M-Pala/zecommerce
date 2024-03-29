import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const {filtered_products:products, grid_view} = useFilterContext()

  if(products.length < 1){
    return (
      <h5>
        Sorry, No products for your search...
      </h5>
    )
  }

  if(!grid_view){
    return <ListView products={products}/>
  }
  return (
    <GridView products={products}>ProductList</GridView>
  )
}

export default ProductList