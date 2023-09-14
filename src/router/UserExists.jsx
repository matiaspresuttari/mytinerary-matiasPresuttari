import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

//El usuario logeado no podrá entrar a estas rutas
const UserExists = ({children,path}) => {
    let user = useSelector(store=>store.userReducer.user)
    console.log(user);
    if (user) {
        return <Navigate to={path}/>
    }

    return children
}

export default UserExists