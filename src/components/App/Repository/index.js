import React, { Component, PropTypes } from 'react'
import { css } from 'aphrodite'
import Video from 'components/App/Video'
import Error from 'components/Shared/Error'
import Button from 'components/Shared/Button'
import styles from './styles'

// const propTypes = {
//   errors: PropTypes.arrayOf(Error).isRequired,
//   videos: PropTypes.arrayOf(PropTypes.element).isRequired,
//   showMore: PropTypes.bool,
//   showLoading: PropTypes.bool
// }
//
// const defaultProps = {
//   errors: [],
//   videos: [],
//   showMore: false,
//   showLoading: false
// }

class Repository extends Component{
  // componentWillReceiveProps(next){
  //   if(!!next.videos.length){
  //
  //   }
  //
  //   console.log('update errors', next)
  // }

  render(){
    return(
      <section className={css(styles.global)}>
        {this.props.errors.map(error =>
          <Error
            key={error.id}
            {...error}
          />
        )}
        {this.props.videos.map(video =>
          <Video
            key={video.id}
            {...video}
          />
        )}
        {this.props.showMore &&
          <Button
            appearance={showLoading ? 'light':'plain'}
            className={css(styles.button)}
            disabled={showLoading ? true:false}
            icon={showLoading ? 'fa-circle-o-notch fa-spin fa-fw':'fa-caret-down'}
          >
            {showLoading ? 'Loading':'More'}
          </Button>
        }
      </section>
    )
  }
}

Repository.propTypes = propTypes
Repository.defaultProps = defaultProps

export default Repository
