import {useEffect, useState} from 'react'

const useEventsSelect = (
  currentRef: HTMLUListElement | null,
  eventClose: (state: boolean) => void,
  eventSetSelectElement: (isActiveButtonSelect: number) => void,
  paramsLength: number
) => {
  const [isActiveButtonSelect, setIsActiveButtonSelect] = useState<
    number | null
  >(null)

  useEffect(() => {
    if (currentRef) {
      const keydownListener = (event: KeyboardEvent) => {
        event.preventDefault()
        const listElements = currentRef.children
        if (event.key === 'ArrowUp') {
          if (isActiveButtonSelect === 0 || isActiveButtonSelect === null) {
            setIsActiveButtonSelect(paramsLength - 1)
            listElements[paramsLength - 1].scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            })
          } else {
            setIsActiveButtonSelect(isActiveButtonSelect - 1)
            listElements[isActiveButtonSelect - 1].scrollIntoView({
              block: 'nearest',
              behavior: 'smooth'
            })
          }
        }
        if (event.key === 'ArrowDown') {
          if (
            isActiveButtonSelect === paramsLength - 1 ||
            isActiveButtonSelect === null
          ) {
            setIsActiveButtonSelect(0)
            listElements[0].scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          } else {
            setIsActiveButtonSelect(isActiveButtonSelect + 1)
            listElements[isActiveButtonSelect + 1].scrollIntoView({
              block: 'nearest',
              behavior: 'smooth'
            })
          }
        }
        if (event.key === 'Enter' && isActiveButtonSelect !== null) {
          eventSetSelectElement(isActiveButtonSelect)
        }
        if (event.key === 'Escape') {
          setIsActiveButtonSelect(null)
          eventClose(false)
        }
      }
      currentRef.addEventListener('keydown', keydownListener)
      return () => {
        currentRef.removeEventListener('keydown', keydownListener)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRef, isActiveButtonSelect])

  return isActiveButtonSelect
}

export default useEventsSelect
