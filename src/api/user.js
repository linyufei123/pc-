import http from "../utils/http";

export const LoginApi = (values)=>http.post("/api/userList",{username:values.username,password:values.password})

export const getUerInfoList = ()=>http.get("/api/userInfoList")