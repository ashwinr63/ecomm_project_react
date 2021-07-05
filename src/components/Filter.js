import React from 'react'

const Filter =() => {
    return (
        <div className='filter-main'>
            <h2>Filters</h2>
            <button type="button" class="filter-button">
            <img src="./img/filter_list_black_24dp.svg" alt="filter-list"/>
            </button>

            <fieldset>
            <legend>Colour</legend>
            </fieldset>
        </div>
    )
}

export default Filter