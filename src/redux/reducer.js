// define reducer and global state
let initial_state={loading:true,data:{},error:""}
let weather_reducer=(state=initial_state,action)=>{
    switch(action.type){
        case "Set_Loading":return {...state,loading:true}; 
        case "Get_Weather":return {...state,loading:false,data:action.payload};
        case "Set_Error":return {...state,loading :false,data:{},error:action.payload};
        default : return state;
    }
}
export default weather_reducer;