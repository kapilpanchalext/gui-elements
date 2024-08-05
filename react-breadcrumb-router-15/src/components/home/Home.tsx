import React from 'react'
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../breadcrumb/BreadCrumb';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <BreadCrumb />
      <Outlet />        
    </div>
  )
}

export default Home;