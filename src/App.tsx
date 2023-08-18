import React, { useState } from 'react'
import { useAppSelector } from './redux/store'
import { DataForDisplayingType } from './servises/api'
import { StockTable } from './components/table/StockTable'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { UseDropp } from './common/hooks/UseDropp'
import { LinearProgress } from '@mui/material'
import './App.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/global.scss'

const App = () => {
  const [rowsForDisplaying, setRowsForDisplaying] = useState<string>('1')
  const [symbolDataState, setSymbolDataState] = useState<{ quotes: DataForDisplayingType[] }>({
    quotes: [],
  })
  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)
  const status = useAppSelector(state => state.appData.status)
  const onDragEnd = UseDropp({ symbolData, rowsForDisplaying, symbolDataState, setSymbolDataState })

  return (
    <>
      {status === 'loading' && (
        <div className="linearProgress">
          <LinearProgress />
        </div>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="stock-table">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="container">
              <StockTable
                quotes={symbolDataState.quotes}
                setRowsForDisplaying={setRowsForDisplaying}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default App
