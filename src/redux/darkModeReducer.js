const initialState = {
    darkMode : false
}
const DarkModeReducer = (state = initialState, action) =>{

     switch(action.type){
         case "LIGHT":{
             return{
                 ...state,
                 darkMode :false
             }
         }
         case "DARK":{
             return{
                ...state,
                 darkMode :true
             }
         }
         case "TOOGLE":{
             return{
                ...state,
                 darkMode :!state.darkMode
             }
         }
         default:
             return state
     }
}

export default DarkModeReducer