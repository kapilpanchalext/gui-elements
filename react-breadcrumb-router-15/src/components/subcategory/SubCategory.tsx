import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {}

const SubCategory = (props: Props) => {
  return (
    <div>SubCategory
        <Outlet />
    </div>
  )
}

export default SubCategory;