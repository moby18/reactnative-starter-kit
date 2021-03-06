import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ScreenC from './ScreenC'
import { getFiltering } from '../../selectors/filterSelector'
import { getValue } from '../../selectors/valueSelector'

let filterValue = 'Apple' // hardcoded value for filtering

const mapStateToProps = (state) => {
  return {
    value: getValue(state),
    list: getFiltering(state, filterValue)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenC)
