import React, { useState } from 'react'
import { StockTable } from './components/table/StockTable'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './App.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/global.scss'
import { useAppSelector } from './redux/store'

const App = () => {
  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)

  const [state, setState] = useState({ quotes: symbolData })

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }
    const reorder = (list: any, startIndex: any, endIndex: any) => {
      const result = list
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }
    const quotes = reorder(state.quotes, result.source.index, result.destination.index)

    setState({ quotes })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="stock-table">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <StockTable />

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App
