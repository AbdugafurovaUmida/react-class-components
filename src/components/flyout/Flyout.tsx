import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import DownloadData from '../../dowload/dowload-data'
import './Flyout.css'

export function Flyout() {
  const dispatch = useDispatch()
  const peopleList = useSelector((state: RootState) => state.peopleState.list)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(peopleList.length > 0)
  }, [peopleList])

  function clearHandler() {
    dispatch({ type: 'peopleSlice/clearAll' })
  }

  return (
    <div className={isActive ? ' activeFlyout ' : ' isActiveFlyout '}>
      <button onClick={clearHandler}>Unselect all</button>
      <button
        className='select-items-btn'
        onClick={() => {
          DownloadData(peopleList)
        }}
      >
        Download selected items
        <span className='selected-items'>{peopleList.length}</span>
      </button>
    </div>
  )
}
