import React, { Component } from 'react'
import { Breadcrumbs, Breadcrumb } from 'react-breadcrumbs'
import Container from './container'
import AppBarComponent from './appbar'

class Demo extends Component {
  render() {
    return (
      <div>
        <AppBarComponent />
        <Breadcrumbs className="breadcrumbsContainer">
          <Breadcrumb
            data={{
              title: 'Home / Lot Review / Lot 50031301',
              pathname: '/',
            }}
          />
        </Breadcrumbs>
        <Container />
      </div>
    )
  }
}

export default Demo
