import React, {useState} from 'react'
import FilterListIcon from '@material-ui/icons/FilterList'


const Filter =() => {
    return (
        <div className='filter-main'>
            <h2>Filters</h2>
            <button type="button" className="filter-button">
            <img src={FilterListIcon} alt="filter-list"/>
            </button>

            <fieldset className="color">
              <legend>Colour</legend>
              <ul className="filter-list">
                <li><input type="checkbox" name="colour" value="black" id="black"/> <label htmlFor="black">Black</label></li>
                <li><input type="checkbox" name="colour" value="white" id="white"/> <label htmlFor="white">White</label></li>
                <li><input type="checkbox" name="colour" value="grey" id="grey"/> <label htmlFor="grey">Grey</label></li>
                <li><input type="checkbox" name="colour" value="red" id="red"/> <label htmlFor="red">Red</label></li>
                <li><input type="checkbox" name="colour" value="blue" id="blue"/> <label htmlFor="blue">Blue</label></li>
              </ul>
            </fieldset>
            <fieldset className="types">
              <legend>Types</legend>
              <ol className="filter-list">
                <li><input type="checkbox" name="size" value="xs" id="xs"/> <label htmlFor="xs">Gas</label></li>
                <li><input type="checkbox" name="size" value="sm" id="sm"/> <label htmlFor="sm">Diesel</label></li>
                <li><input type="checkbox" name="size" value="md" id="md"/> <label htmlFor="md">Hydrogen</label></li>
                <li><input type="checkbox" name="size" value="lg" id="lg"/> <label htmlFor="lg">Hybrid</label></li>
                <li><input type="checkbox" name="size" value="xl" id="xl"/> <label htmlFor="xl">Electric</label></li>
              </ol>
            </fieldset>
            <fieldset className="ratings">
            <legend>Ratings (above)</legend>
            <ol className="filter-list">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour"/>
                <label htmlFor="aboveFour">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree"/>
                <label htmlFor="aboveThree">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo"/>
                <label htmlFor="aboveTwo">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne"/>
                <label htmlFor="aboveOne">
                  <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
    )
}

export default Filter