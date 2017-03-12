import React from 'react'
import { connect } from 'react-redux'
import { analyze } from 'actions'
import Form from 'components/App/Landing/Form'

var smoothScroll = require('smoothscroll')

const mapStateToProps = (state) => {
  return {
    disabled: state.downloading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (model, id) => {
      smoothScroll(document.querySelector('.toolbar'))
      dispatch(analyze(model, id))
    }
  }
}

const AnalyzeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default AnalyzeForm
