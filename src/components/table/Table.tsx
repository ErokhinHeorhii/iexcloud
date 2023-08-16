import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getRatesTC } from '../../redux/dataReducer'
import React, { useEffect } from 'react'

import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { createData } from '../../common/utils/createData'
import { StyledTableCell, StyledTableRow } from './StyledTableCell'

export default function StockTable() {
  const dispatch = useAppDispatch()
  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)
  useEffect(() => {
    dispatch(getRatesTC())
  }, [dispatch])

  const rows = symbolData.map(item => {
    return createData(item.symbol, item.priceDate, item.high, item.low, item.open, item.close)
  })
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 900, margin: '25px auto ' }} aria-label="customized table">
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
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.symbol}
              </StyledTableCell>
              <StyledTableCell align="right"> {row.priceDate}</StyledTableCell>
              <StyledTableCell align="right">{row.open}</StyledTableCell>
              <StyledTableCell align="right">{row.high}</StyledTableCell>
              <StyledTableCell align="right">{row.low}</StyledTableCell>
              <StyledTableCell align="right">{row.close}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
