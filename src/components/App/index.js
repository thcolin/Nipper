import React, { Component } from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import { css } from 'aphrodite'
import Landing from 'components/App/Landing'
import Toolbar from 'components/App/Toolbar'
import Repository from 'components/App/Repository'
import Video from 'components/App/Video'
import styles from './styles'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      sticked: false
    }

    this.handleSticky = this.handleSticky.bind(this)
  }

  handleSticky(e){
    this.setState({sticked: !this.state.sticked})
  }

  render(){
    return(
      <div className={css(styles.container)}>
        <Landing />
        <StickyContainer>
          <Sticky stickyStyle={{zIndex: 2}} onStickyStateChange={this.handleSticky}>
            <Toolbar sticked={this.state.sticked} />
          </Sticky>
          <Repository />
        </StickyContainer>
      </div>
    )
  }
}

export default App