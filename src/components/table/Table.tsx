import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getRatesTC } from '../../redux/dataReducer'
import React, { useEffect, useState } from 'react'

import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { createData, CreateDataReturnType } from '../../common/utils/createData'
import { StyledTableCell, StyledTableRow, table, tableContainer } from './StyledTableCell'
import { PaginationControlled } from '../pagination/Pagination'

type StringMap = { [key: string]: CreateDataReturnType[] }
export default function StockTable() {
  const [rowsForDisplaing, setRowsForDisplaing] = useState<string>('1')
  const dispatch = useAppDispatch()
  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)

  useEffect(() => {
    dispatch(getRatesTC())
  }, [dispatch])

  const rows = symbolData.map(item => {
    return createData(item.symbol, item.priceDate, item.high, item.low, item.open, item.close)
  })

  const objectData: StringMap = {
    1: symbolData.slice(0, 9),
    2: symbolData.slice(9, 18),
    3: symbolData.slice(18, 27),
    4: symbolData.slice(27, 36),
  }

  const numberOnPage = 8
  const totalPage = Math.round(rows.length / numberOnPage)

  return (
    <TableContainer component={Paper} sx={tableContainer}>
      <Table sx={table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Symbol</StyledTableCell>
            <StyledTableCell align="right">PriceDate</StyledTableCell>
            <StyledTableCell align="right">Open</StyledTableCell>
            <StyledTableCell align="right">High</StyledTableCell>
            <StyledTableCell align="right">Low</StyledTableCell>
            <StyledTableCell align="right">Close</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objectData[rowsForDisplaing].map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.symbol}
              </StyledTableCell>
              <StyledTableCell align="right"> {row.priceDate}</StyledTableCell>
              <StyledTableCell align="right">{row.open.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{row.high.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{row.low.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{row.close.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationControlled totalPage={totalPage} setRowsForDisplaing={setRowsForDisplaing} />
    </TableContainer>
  )
}
