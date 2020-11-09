import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import sortReducer from "./SortReducer";
import pageReducer from "./PageReducer";
import filterReducer from "./FilterReducer";



const RootReducer = combineReducers({
    searchReducer: searchReducer,
    sortReducer: sortReducer,
    pageReducer: pageReducer,
    filterReducer: filterReducer,
  });
  
  export default RootReducer
