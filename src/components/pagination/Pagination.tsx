import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

type PaginationControlledType = {
  totalPage: number
  setRowsForDisplaing: (arg: string) => void
}
export const PaginationControlled = ({
  totalPage,
  setRowsForDisplaing,
}: PaginationControlledType) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setRowsForDisplaing(value.toString())
  }

  return (
    <Stack spacing={2}>
      <Pagination count={totalPage} page={page} onChange={handleChange} />
    </Stack>
  )
}
