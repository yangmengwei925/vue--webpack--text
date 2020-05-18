import Cookie from 'js-cookie'
const tokenKey='exam_system_token'


export const getCookie=()=>Cookie.get(tokenKey)
export const setCookie=(token)=>Cookie.set(tokenKey,token)
export const removeCookie=()=>Cookie.remove(tokenKey)