function asyncFuncWrapper<ARGS extends unknown[]> (fn: (...args: ARGS) => Promise<unknown>): (...args: ARGS) => void {
  return (...args) => {
    void fn(...args)
  }
}

export default asyncFuncWrapper
