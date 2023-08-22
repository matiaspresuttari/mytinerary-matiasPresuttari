import Header from '../components/Header'
import Footer from '../components/footer'

const Main = ({children}) => {
    return (
        <>
            <Header/>
            <main className=''>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Main