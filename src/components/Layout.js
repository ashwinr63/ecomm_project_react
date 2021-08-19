import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => {

    return (
      <div className="layout">
        <Header />
        {/* Main Product Content */}
        <main className="products">
          <section className="results">
          {children}
          </section>
        </main>

        <Footer />
      </div>
    );
}

export default Layout
