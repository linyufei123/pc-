import http from "../utils/http";

export const getBookList = ({pageNum,pageSize})=>http.get("/api/bookList",{ _page:pageNum, _limit:pageSize})