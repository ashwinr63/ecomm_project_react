import React from 'react'

const Filter =() => {
    return (
        <div className='filter-main'>
            <h2>Filters</h2>
            <button type="button" class="filter-button">
            <img src={"./img/filter_list_black_24dp.svg"} alt="filter-list"/>
            </button>

            <fieldset class="color">
              <legend>Colour</legend>
              <ul class="filter-list">
                <li><input type="checkbox" name="colour" value="black" id="black"/> <label htmlFor="black">Black</label></li>
                <li><input type="checkbox" name="colour" value="white" id="white"/> <label htmlFor="white">White</label></li>
                <li><input type="checkbox" name="colour" value="grey" id="grey"/> <label htmlFor="grey">Grey</label></li>
                <li><input type="checkbox" name="colour" value="red" id="red"/> <label htmlFor="red">Red</label></li>
                <li><input type="checkbox" name="colour" value="blue" id="blue"/> <label htmlFor="blue">Blue</label></li>
              </ul>
            </fieldset>
            <fieldset class="types">
              <legend>Types</legend>
              <ol class="filter-list">
                <li><input type="checkbox" name="size" value="xs" id="xs"/> <label htmlFor="xs">Gas</label></li>
                <li><input type="checkbox" name="size" value="sm" id="sm"/> <label htmlFor="sm">Diesel</label></li>
                <li><input type="checkbox" name="size" value="md" id="md"/> <label htmlFor="md">Hydrogen</label></li>
                <li><input type="checkbox" name="size" value="lg" id="lg"/> <label htmlFor="lg">Hybrid</label></li>
                <li><input type="checkbox" name="size" value="xl" id="xl"/> <label htmlFor="xl">Electric</label></li>
              </ol>
            </fieldset>
            <fieldset class="ratings">
            <legend>Ratings (above)</legend>
            <ol class="filter-list">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour"/>
                <label htmlFor="aboveFour">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree"/>
                <label htmlFor="aboveThree">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo"/>
                <label htmlFor="aboveTwo">
                  <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne"/>
                <label htmlFor="aboveOne">
                  <span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
    )
}

export default Filter