import {useEffect} from 'react'

const useClickOutside = (
  current: HTMLElement,
  handler: (state: boolean) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!current || current.contains(event.target as Node)) {
        return
      }
      handler(false)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [current, handler])
}

export default useClickOutside
