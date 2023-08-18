import { styled, TableCell, TableRow } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: '150px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}))

export const tableContainer = {
  maxWidth: 1200,
  margin: '25px auto ',
  height: '650px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
export const table = {
  maxWidth: 950,
  margin: '10px auto',
}

export const paginationContainer = {
  display: 'flex',
  justifyContent: 'center',
}
