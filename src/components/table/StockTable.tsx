import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getRatesTC } from '../../redux/dataReducer'
import React, { useEffect } from 'react'

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { createData } from '../../common/utils/createData'
import { StyledTableCell, StyledTableRow, table, tableContainer } from './StyledTableCell'
import { PaginationControlled } from '../pagination/Pagination'
import { DataForDisplayingType } from '../../servises/api'
import { Draggable } from 'react-beautiful-dnd'

type StockTableType = {
  quotes: DataForDisplayingType[]
  setRowsForDisplaying: (number: string) => void
}
export const StockTable = ({ quotes, setRowsForDisplaying }: StockTableType) => {
  const dispatch = useAppDispatch()
  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)

  useEffect(() => {
    dispatch(getRatesTC())
  }, [dispatch])

  const rows = quotes.map(item => {
    return createData(item.symbol, item.priceDate, item.high, item.low, item.open, item.close)
  })

  const numberOnPage = 8
  const totalPage = Math.round(symbolData.length / numberOnPage)

  return (
    <>
      <TableContainer component={Paper} sx={tableContainer}>
        <h3>Stock Quote for Apple (last month)</h3>
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
            {rows.map((row, index) => (
              <Draggable
                draggableId={`id-${row.priceDate}`}
                index={index}
                key={`id-${row.priceDate}`}
              >
                {provided => (
                  <StyledTableRow
                    key={`id-${row.priceDate}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.symbol}
                    </StyledTableCell>
                    <StyledTableCell align="right"> {row.priceDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.open.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="right">{row.high.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="right">{row.low.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="right">{row.close.toFixed(2)}</StyledTableCell>
                  </StyledTableRow>
                )}
              </Draggable>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PaginationControlled totalPage={totalPage} setRowsForDisplaing={setRowsForDisplaying} />
      </Container>
    </>
  )
}
