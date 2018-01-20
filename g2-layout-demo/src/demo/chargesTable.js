import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableRow,
  IconButton
} from 'ops-portal-component-library'
import './billingAndPickup.css'

const tableStyle = {
  dialog: { width: '80%', maxWidth: 'none' },
  toolbar: {
    backgroundColor: '#0D5DB8',
  },
  toolbarTitle: {
    color: 'whitesmoke',
    textTransform: 'uppercase',
  },
  tableHeaderDesc: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '14px',
    overflow: 'visible',
    whiteSpace: 'initial',
  },
  tableHeaderAmount: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '14px',
    float: 'right',
  },
  tableColumnDesc: {
    height: '32px',
    overflow: 'visible',
    whiteSpace: 'initial',
    paddingLeft: '20px',
    paddingTop: '14px',
    width: '170px',
  },
  tableColumnAmount: {
    height: '32px',
    textAlign: 'right',
    overflow: 'visible',
    whiteSpace: 'initial',
    width: '170px',
  },
  tableTotalChargesColumnDesc: {
    height: '32px',
    overflow: 'visible',
    whiteSpace: 'initial',
    paddingTop: '12px',
    paddingLeft: '20px',
    width: '170px',
  },
  tableTotalChargesColumnAmount: {
    height: '32px',
    textAlign: 'right',
    overflow: 'visible',
    whiteSpace: 'initial',
    width: '170px',
  },
  iconDiv: { display: 'inline' },
  tableRowStyle: {
    fontWeight: '900',
    backgroundColor: 'rgba(137, 196, 244, 0.2)',
    height: '30px',
    borderBottom: '1px solid #BDC3C7',
  },
}

const renderIcon = (iconName) => (
  <IconButton style={{ margin: '-15px' }}onTouchTap={() => console.log(iconName, ' clicked')}>
    <i className="material-icons md-18">open_in_new</i>
  </IconButton>
)

const ChargesTable = () => (
  <div>
    <div className="section header">
      <span style={{ paddingLeft: '10px' }}>Seller Billing</span>
    </div>
    <section className="col-1-1" style={{ padding: '0px' }}>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow style={{ backgroundColor: '#CCC', height: '30px' }}>
            <TableHeaderColumn style={{ height: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
              <span style={tableStyle.tableHeaderDesc}>{'Charge Type'}</span>
            </TableHeaderColumn>
            <TableHeaderColumn style={{ height: '30px' }}>
              <span style={tableStyle.tableHeaderAmount}>{'Amount'}</span>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow style={{ height: '30px' }}>
            <TableRowColumn style={tableStyle.tableColumnDesc}>
              <div style={tableStyle.iconDiv}>
                <span>Advance Charges{renderIcon('Advance Charges')}</span>
              </div>
            </TableRowColumn>
            <TableRowColumn style={tableStyle.tableColumnAmount}>
              <span>{'0.00'}</span>
            </TableRowColumn>
          </TableRow>
          <TableRow style={{ height: '30px' }}>
            <TableRowColumn style={tableStyle.tableColumnDesc}>
              <div style={tableStyle.iconDiv}>
                <span>Copart Charges{renderIcon('Copart Charges')}</span>
              </div>
            </TableRowColumn>
            <TableRowColumn style={tableStyle.tableColumnAmount}>
              <span>{'0.00'}</span>
            </TableRowColumn>
          </TableRow>
          <TableRow style={tableStyle.tableRowStyle}>
            <TableRowColumn style={tableStyle.tableColumnDesc}>
              {'Sale Price'}
            </TableRowColumn>
            <TableRowColumn style={tableStyle.tableColumnAmount}>
              <span>{'0.00'}</span>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={tableStyle.tableTotalChargesColumnDesc}>
              {'Total Charges'}
            </TableRowColumn>
            <TableRowColumn style={tableStyle.tableTotalChargesColumnAmount}>
              <span>{'0.00'}</span>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={tableStyle.tableTotalChargesColumnDesc}>
              {'Total Due From Seller'}
            </TableRowColumn>
            <TableRowColumn style={tableStyle.tableTotalChargesColumnAmount}>
              {'0.00'}
            </TableRowColumn>
          </TableRow>)
        </TableBody>
      </Table>
    </section>
  </div>
)

export default ChargesTable
