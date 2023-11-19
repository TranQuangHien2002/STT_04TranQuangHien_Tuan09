import { createStore } from "redux"
import reducer from './reduces'
var store = createStore(reducer)
export default store