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

const Table = <T: { children: Node }>(props: T) => <MuiTable {...props}>{props.children}</MuiTable>

export default wrapMuiContext(Table)
export { TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
