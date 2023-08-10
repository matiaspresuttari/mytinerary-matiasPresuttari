import Header from '../components/Header'
import Footer from '../components/footer'

const Main = ({children}) => {
    return (
        <>
            <Header/>
            <main className='container'>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Main