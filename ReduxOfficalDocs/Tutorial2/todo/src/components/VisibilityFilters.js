/**
 * The <VisibilityFilters /> component needs to be able to read from the store which filter is currently active, 
 * and dispatch actions to the store. 
 * 
 * Therefore, we need to pass both a mapStateToProps and mapDispatchToProps. 
 * 
 * The mapStateToProps here can be a simple accessor of the visibilityFilter state. 
 * 
 * And the mapDispatchToProps will contain the setFilter action creator.
 */

import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux'; //连接当前component和store
import { setFilter } from '../redux/actions'; //dispatch给store的action，告诉store现在用户选择set哪个filter
import { VISIBILITY_FILTERS } from '../constants';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span key={`visibility-filter-${currentFilter}`}
                        className={cx("filter", currentFilter === activeFilter && "filter--active")}
                        onClick={() => {
                            setFilter(currentFilter)
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};



const mapStateToProps = (state) => {
    return { activeFilter: state.VisibilityFilter };
}

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);