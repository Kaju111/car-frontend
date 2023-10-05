const reducer = (state, action) =>{

    if(action.type === "GET_SERVICES"){
        return{
            ...state,
            services : action.payload,
        }
    }
        switch(action.type){
            case "UPDATE_FILTERS_VALUE":
                const {name, value} = action.payload;

                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name] : value,
                    }
                }
        }

        
}

export default reducer
