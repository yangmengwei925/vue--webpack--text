const rootModule={
    getters:{
        proRoutes:(state)=>state.routerConfig.routes,
        roles:(state)=>state.users.roles,
        name:(state)=>state.users.userName,
        userID:(state)=>state.users.userId
    }
}


export default rootModule