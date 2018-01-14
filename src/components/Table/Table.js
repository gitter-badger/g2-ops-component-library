import React from 'react'
import {
  Table as MuiTable,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import { wrapMuiContext } from '../../wrapMuiContext'

/**
*
* @example ../../examples/Table.md
*/
const Table = (props) => (
  <MuiTable {...props}>
    {props.children}
  </MuiTable>
)

export default wrapMuiContext(Table)
export {
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
}
