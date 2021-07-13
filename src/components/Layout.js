import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import FilterListIcon from '@material-ui/icons/FilterList';

const Layout = ({ children }) => {

    return (
      <div className="layout">
        <Header />
        
        <main className="products">
        
        <Filter/>
        {/* <form className="filters">
          <h2>Filters</h2>
          <button type="button" className="filter-button">
            <img src={FilterListIcon} alt="filter-list" />
          </button>
          <div className="filter-options">
            <fieldset className="color">
              <legend>Colour</legend>
            </fieldset>
            <fieldset className="types">
              <legend>Types</legend>
            </fieldset>
          </div>
          <fieldset className="ratings">
            <legend>Ratings</legend>
          </fieldset>
        </form> */}
          <section className="results">{children}</section>
        </main>

        <Footer />
      </div>
    );
}

export default Layout
