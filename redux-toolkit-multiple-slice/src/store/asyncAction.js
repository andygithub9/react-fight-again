import { mywebActions } from './mywebSlice'

export const getSwFilms = () => {
  // 返回一個形參為 dispatch 的異步函數稱為 Thunk ，是 Redux Toolkit 用來做異步處理的方法
  return async (dispatch) => {
    const fetchSwFilms = async () => {
      const response = await fetch('https://swapi.dev/api/films', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })

      console.log('response: ', response)

      if (!response.ok) {
        throw new Error('請求錯誤')
      }

      const data = response.json()
      return data
    }

    try {
      // 清空 listSwFilms 狀態
      dispatch(mywebActions.listSwFilms([]))
      // 取得 fetchSwFilms 的返回值
      const requestResult = await fetchSwFilms()
      console.log(requestResult.results)

      // 更新狀態
      dispatch(mywebActions.listSwFilms(requestResult.results))
    } catch (error) {
      console.error(error)
    }
  }
}
