import React from 'react'
import { NavHeader } from '../components/NavHeader'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <NavHeader/>
      <Outlet/>
    </div>
  )
}
