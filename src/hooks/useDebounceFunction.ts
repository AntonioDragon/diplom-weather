import {useRef} from 'react'

const useDebounceFunction = (
  func: Function,
  delay: number,
  cancelOldApi?: () => void
) => {
  let ref = useRef<ReturnType<typeof setTimeout>>()
  return (...args: Array<any>) => {
    clearTimeout(ref.current!)
    if (cancelOldApi) cancelOldApi()
    ref.current = setTimeout(() => func(...args), delay)
  }
}

export default useDebounceFunction
