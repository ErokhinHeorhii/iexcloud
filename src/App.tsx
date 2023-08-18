import React, { useEffect, useState } from 'react'
import { useAppSelector } from './redux/store'
import { DataForDisplayingType } from './servises/api'
import { StockTable, StringMap } from './components/table/StockTable'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './App.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/global.scss'

const App = () => {
  const [rowsForDisplaying, setRowsForDisplaying] = useState<string>('1')

  const symbolData = useAppSelector(state => state.tableData.dataForDisplaying)

  const objectData: StringMap = {
    1: symbolData.slice(0, 9),
    2: symbolData.slice(9, 18),
    3: symbolData.slice(18, 27),
    4: symbolData.slice(27, 36),
  }
  const [symbolDataState, setSymbolDataState] = useState<{ quotes: DataForDisplayingType[] }>({
    quotes: [],
  })

  useEffect(() => {
    setSymbolDataState({ quotes: objectData[rowsForDisplaying] as DataForDisplayingType[] })
  }, [symbolData, rowsForDisplaying])

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }
    console.log(result)
    if (result.destination.index === result.source.index) {
      return
    }
    const reorder = (list: DataForDisplayingType[], startIndex: number, endIndex: number) => {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    const quotes = reorder(symbolDataState.quotes, result.source.index, result.destination.index)
    setSymbolDataState({ quotes })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="stock-table">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <StockTable
              quotes={symbolDataState.quotes}
              setRowsForDisplaying={setRowsForDisplaying}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App
