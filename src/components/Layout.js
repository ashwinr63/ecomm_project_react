import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Filter from './Filter'
import filterlist from '../img/filter_list_black_24dp.svg'

const Layout = ({ children }) => {

    return (
      <div className="layout">
        <Header />
        
        <main className="products">
        <form class="filters">
          <h2>Filters</h2>
          <button type="button" class="filter-button">
            <img src={filterlist} alt="filter-list" />
          </button>
          <div class="filter-options">
            <fieldset class="color">
              <legend>Colour</legend>
            </fieldset>
            <fieldset class="types">
              <legend>Types</legend>
            </fieldset>
          </div>
          <fieldset class="ratings">
            <legend>Ratings</legend>
          </fieldset>
        </form>
          <section className="results">{children}</section>
        </main>

        <Footer />
      </div>
    );
}

export default Layout
