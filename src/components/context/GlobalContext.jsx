import {createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'

const GlobalContext = createContext()

// exporting function as variable - children is all elements wrapped in context
export const ContextProvider = ({children}) => {
  
  // initial state for reducer

  const initialState = {
    images: [],
    // image: {},
  }

  const [state, dispatch] = useReducer(globalReducer, initialState) 


  const getInstaData = async () => {

    const response = await fetch("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=IGQVJWZAHdVTVI3UVZAxM2E3bkVtVWx6dWZA0MFFrS3dqYV9uc0FZAcjVJamYyT2xIYm8xNUhpT3NNNmhOSnNwYVRILXlGY3hEdVVobjh2V3A4cUNfMlVhUU13OF9ONlpMVld1QktUQTNEVDlXTEdBdVJVbkdzWE5PeDVXeHdj")

    const {data} = await response.json()
    

    dispatch({
        type: 'GET_USER',
        payload: data,
    })
  }


    return (
    <GlobalContext.Provider value={{getInstaData, image: state.images}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext