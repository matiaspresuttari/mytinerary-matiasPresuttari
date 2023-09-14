import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

//El usuario no logeado no podrá entrar a estas rutas
const UserNotExists = ({children,path}) => {
    let user = useSelector(store=>store.userReducer.user)
    console.log(user);
    if (user) {
        return children
    }

    return <Navigate to={path}/>
}

export default UserNotExists