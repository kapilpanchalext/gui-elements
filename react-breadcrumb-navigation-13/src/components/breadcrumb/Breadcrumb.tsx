import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#category">Category</a></li>
            <li><a href="#subcategory">Sub Category</a></li>
            <li><a href="#type">Type</a></li>
            <li><span aria-current="page">Product</span></li>
        </ul>
    </nav>
  )
}

export default Breadcrumb;