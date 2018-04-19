// @flow

import type { Node } from 'react'
import React from 'react'

import {
  Table as MuiTable,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import { wrapMuiContext } from '../../wrapMuiContext'

const Table = wrapMuiContext(MuiTable)

export { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
