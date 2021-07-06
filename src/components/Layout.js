import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Filter from './Filter'

const Layout = ({children}) => {

    return  (
        <div className="layout">
        <Header/>

        <main className="products">
        <section className="results">
        {children}
        </section>
        </main>

        <Footer/>
        </div>
    )
}

export default Layout
