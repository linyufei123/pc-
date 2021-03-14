import Loadable from "react-loadable";
import Loading from "../common/loading"

const AddBooks = Loadable({
    loader: () => import("./books/addBooks"),
    loading: Loading
})

const BooksList = Loadable({
    loader: () => import("./books/booksList"),
    loading: Loading
})


const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})

const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})


const UserInfo = Loadable({
    loader: () => import("./user/userInfo"),
    loading: Loading
})

const UserList = Loadable({
    loader: () => import("./user/userList"),
    loading: Loading
})


export {
    AddBooks,
    BooksList,
    Home,
    Login,
    UserInfo,
    UserList,
}