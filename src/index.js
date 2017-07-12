import React from 'react'
import ReactDOM from 'react-dom'
import { join } from 'path-extra'
import { Provider } from 'react-redux'

import 'rc-slider/assets/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/index.css'

import { KanceptsMain } from './ui'
import { register } from './registerServiceWorker'

import { store } from './store'

/*

   TODO

   - planner

     - tooltip on expeditions

   - table

     - impl numeric view: the idea is to force general cost view
     - tooltips

   - ship list

     - sorting
     - find a way to allow list modification

   - settings (TODO)

     - i18n
     - autoconfig table
     - data import / export

 */

ReactDOM.render(
  (
    <div className="root">
      <link
        rel="stylesheet"
        href={join(__dirname,'..','assets','index.css')}
      />
      <Provider store={store}>
        <KanceptsMain />
      </Provider>
    </div>
  ),
  document.getElementById('root'))
register()
