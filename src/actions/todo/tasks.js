import Immutable from 'immutable'
import { todoConstants } from 'constants'
import axios from 'utils/axiosClient'

export const taskAdd = name => ({ name, type: todoConstants.TASK_ADD })

export const taskDone = id => ({ id, type: todoConstants.TASK_DONE })

export const taskUndone = id => ({ id, type: todoConstants.TASK_UNDONE })

export const taskRemove = id => ({ id, type: todoConstants.TASK_REMOVE })

export const taskEdit = ({ id, name }) => ({ id, name, type: todoConstants.TASK_EDIT })

export const taskFilter = filter => ({ filter, type: todoConstants.TASK_FILTER })

const receiveTaskList = list => ({
  list: Immutable.fromJS(list),
  type: todoConstants.FETCH_TASK_LIST,
})

// export const fetchTaskList = () => (
//   async (dispatch) => {
//     const { data } = await axios.get('https://api.myjson.com/bins/aapid')
//     dispatch(receiveTaskList(data.list))
//   }
// )

export const fetchTaskList = () => (
  async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/api/todos')
    const res = await axios.get('http://localhost:3000/api/products')
    console.log(res.data)
    dispatch(receiveTaskList(data.list))
  }
)
