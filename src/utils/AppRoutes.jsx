import React from 'react'
import Home from '../components/Common/Home'
import Dashboard from '../components/Common/Dashboard'
import Create from '../components/Common/Create'
import Edit from '../components/Common/Edit'
import {Navigate} from 'react-router-dom'
const AppRoutes = [
              {
                            path:'/',
                            exact:true,
                            element:<Home/>
              },
              {
                  path:'/dashboard',
                  exact:true,
                  element:<Dashboard/>
              },
              {
                  path:'/create',
                  exact:true,
                  element:<Create/>
              },
              {
                  path:'/edit/:id',
                  exact:true,
                  element:<Edit/>
              },
              {
                  path:'*',
                  exact:false,
                  element:<Navigate to="/"/>
              }
          ]
          
          export default AppRoutes
              