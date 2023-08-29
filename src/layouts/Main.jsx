import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'

const Main = () => {
    return (
        <>
            <Header/>
            <main className=''>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Main