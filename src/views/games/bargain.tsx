import * as React from 'react'
import { Button, Progress, Popup, Transition, Dimmer, Comment, Image } from 'semantic-ui-react'
import DateType from '../../common/dateType'
import '../../assets/sass/bargain-style.scss'
import voice from '../../assets/img/music-btn.png'
import noVoice from '../../assets/img/music-btn2.png'
import logo from '../../assets/img/bargain.png'
import gift from '../../assets/img/icon-giftcenter.png'
import playBg from '../../assets/img/banner-small.png'
import closeIcon from '../../assets/img/close-btn.png'
const bgmPath = require('../../assets/bgm/bgm.mp3')

interface VoiceProps {
  setPlayMusic?: any
  playMusic: boolean
}
interface LoadingState {
  percent: number
}
interface LoadingProps {
  inited: boolean
}
interface BargainState extends VoiceProps,LoadingProps {
  setSwitchStatus?: any
  status: string
}
interface PlayGameState extends TransitionProps {
  openPopup: boolean
  oldPrice: number
  newPrice: number
  finishPrice: number
  countDownText: string
  history: any
  type: string
}
interface ProgressProps {
  value: number
  total: number
  color?: any
  size?: any
}
interface TransitionProps extends MediaProps {
  visible: boolean
  animation: string
  duration: number
  closeMask?: any
}
interface MediaProps extends HistoryProps {
  data?: any
}
interface HistoryProps {
  name?: string
  creatTime?: number
  avatar?: any
  price?: number
}

const Voice = (props: VoiceProps) => {
  return (
    <div className='g-voice'>
      <img src={props.playMusic ? voice : noVoice} onClick={() => props.setPlayMusic()} alt='声音图标' />
    </div>
  )
}

const PlayGame = (props: BargainState) => {
  return (
    <div className='g-play'>
      <Image src={logo} alt='logo' />
      <p>
        <Button color='yellow' onClick={() => props.setSwitchStatus('play')}>开始游戏</Button>
      </p>
    </div>
  )
}

const Gift = () => {
  return (
    <div className='g-gift'>
      <div className='g-light-circle'>
        <img src={gift} alt='福利' />
      </div>
    </div>
  )
}

const ProgressValue = (props: ProgressProps) => (
  <Progress progress='value' value={props.value} total={props.total} color={props.color} size={props.size} active />
)

class LoadingPage extends React.Component<LoadingProps, LoadingState> {
  constructor(props: any) {
    super(props)
    this.state = {
      percent: 0
    }
  }
  componentDidMount() {
    this.addPercent()
  }
  addPercent() {
    if (this.props.inited) {
      this.setState({
        percent: 100
      })
    } else if (this.state.percent < 90) {
      setTimeout(() => {
        this.setState({
          percent: this.state.percent + 1
        }, () => {
          this.addPercent()
        })
      }, 50)
    }
  }
  render() {
    return (
      <>
        <div className='g-container g-loading-container'>
          <Progress percent={this.state.percent} color='teal' size='tiny' />
        </div>
      </>
    )
  }
}

const UpdatePage = (props: BargainState) => {
  return (
    <>
      <div className='placeholder-box'></div>
      <PlayGame {...props} />
      <Gift />
    </>
  )
}

const MediaList = (props: MediaProps) => {
  let result = <></>
  const colorList = ['#3FB8AF', '#7FC7AF', '#FFD188', '#FF9E9D', '#BF6374', '#67617A']
  if (props.data && props.data.length) {
    let list = props.data.map((v: HistoryProps, index: number) => {
      let color = ''
      if (index < colorList.length) {
        color = colorList[index]
      } else {
        color = colorList[index % colorList.length]
      }
      return (
        <Comment key={`v-${index}`} style={{background: color}}>
          <Comment.Avatar src={v.avatar} />
          <Comment.Content>
            <Comment.Author as='a'>{v.name}</Comment.Author>
            <Comment.Metadata>
              <div>{v.creatTime}</div>
            </Comment.Metadata>
            <Comment.Text>{v.price}</Comment.Text>
          </Comment.Content>
        </Comment>
      )
    })
    
    result =  (
      <Comment.Group>
        {list}
      </Comment.Group>
    )
  }
  return result
}

const CutPriceHistoryMask = (props: TransitionProps) => {
  return (
    <Transition visible={props.visible} animation={props.animation} duration={props.duration}>
      <div className='mask-container'>
        <div className='mask-close'>
          <img src={closeIcon} alt='关闭按钮' onClick={() => props.closeMask()} />
        </div>
        <div className='mask-content'>
          <MediaList data={props.data} />
        </div>
      </div>
    </Transition>
  )
}

class PlayGamePage extends React.Component<BargainState, PlayGameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      openPopup: false,
      oldPrice: 500,
      newPrice: 200,
      finishPrice: 0,
      countDownText: '01 天 23 小时 59 分 59 秒',
      history: [],
      visible: false,
      animation: 'scale',
      duration: 700,
      type: ''
    }
  }
  timer: any = null
  leftTime = 60*60*24*2 - 2
  componentDidMount() {
    this.timer = setInterval(() => {
      this.countDown()
    }, 1000)
    setTimeout(() => {
      this.setState({
        openPopup: true
      })
    }, 100)
  }
  countDown() {
    let day = Math.floor(this.leftTime / (60*60*24))
    let hours = Math.floor(this.leftTime / 7200)
    let minutes = Math.floor((this.leftTime / 60 % 60))
    let seconds = Math.floor((this.leftTime % 60))
    let countDownText = `${day < 10 ? '0' + day : day} 天 
      ${hours < 10 ? '0' + hours : hours} 小时 
      ${minutes < 10 ? '0' + minutes : minutes} 分 
      ${seconds < 10 ? '0' + seconds : seconds} 秒`
      this.setState({
        countDownText: countDownText
      })
    this.leftTime--
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  cutPrice() {
    if (this.state.finishPrice < 300) {
      const price =  Math.floor((Math.random() * 20 + this.state.finishPrice) * 100) / 100
      const now_date = new Date().getTime()
      const data_type = new DateType()
      const change_now_date = data_type.Default_Date(now_date)
      let history = this.state.history
      history = history.concat({
        name: '小鱼',
        price: price,
        creatTime: change_now_date,
        avatar: gift
      })
      this.setState({
        finishPrice: price <= 300 ? price : 300,
        history: history
      })
    }
  }
  showMask(animation: string, type: string) {
    this.setState({
      visible: true,
      animation: animation,
      type: type
    })
  }
  closeMask() {
    this.setState({
      visible: false
    })
  }
  render() {
    let popupStyle = {
      background: '#FFC364',
      color: '#fff',
      padding: '0.3em 1em'
    }
    const { openPopup, finishPrice, oldPrice, newPrice, visible, animation, type, duration, history } = this.state
    let content = `已完成${finishPrice}，还要砍${(oldPrice - newPrice - finishPrice).toFixed(2)}`
    return(
      <div className='g-play-contaier'>
        <div className='g-playBg'>
          <img src={playBg} alt='背景图' />
        </div>
        <p className='g-play-panel'>狂砍八条街，目标200元，快来帮我砍。</p>
        <div className='g-play-page'>
          <div className='g-play-timer'>
            <div className='timer-left'></div>
              <div className='timer-center'>还剩：{this.state.countDownText}</div>
            <div className='timer-right'></div>
          </div>
        </div>
        <div className='g-play-progress' id='g-popup'>
          <Popup
            content={content}
            on='click'
            style={popupStyle}
            open={openPopup && !visible}
            trigger={<ProgressValue value={this.state.finishPrice} total={this.state.oldPrice - this.state.newPrice} color='yellow' size='small' />}
          />
          <p className='price-container'>
            <strong className='price'>原价{this.state.oldPrice}</strong>
            <strong className='price'>目标{this.state.newPrice}</strong>
          </p>
          <div className='price-container'>
            <Button color='red' className='redBtn' onClick={() => this.cutPrice()}>&nbsp;&nbsp;&nbsp;&nbsp;我砍&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button color='yellow' className='yellowBtn' onClick={() => this.showMask('fly down', 'cutPriceHistory')}>砍价动态</Button>
          </div>
          <div className='rule-container'>
            <Button size='mini'>- 活动规则 -</Button>
            <Button size='mini'>- 排行榜 -</Button>
          </div>
        </div>
        <Dimmer active={visible && type === 'cutPriceHistory'}>
          <CutPriceHistoryMask
            visible={visible && type === 'cutPriceHistory'}
            duration={duration}
            animation={animation}
            data={history}
            closeMask={() => this.closeMask()}
          />
        </Dimmer>
      </div>
    )
  }
}


class Bargain extends React.Component<{}, BargainState> {
  constructor(props: any) {
    super(props)
    this.state = {
      status: 'loading',
      playMusic: true,
      inited: false
    }
  }
  componentDidMount() {
    this.setState({
      inited: true
    }, () => {
      setTimeout(() => {
        this.setState({
          status: 'update'
        })
      }, 500)
    })
  }
  switchStatus(state: string) {
    let audio: any = this.refs.audio
    this.setState({
      status: state
    }, () => {
      if (state === 'play' && this.state.playMusic) audio.play()
    })
  }
  setPlayMusic() {
    let audio: any = this.refs.audio
    this.setState({
      playMusic: !this.state.playMusic
    }, () => {
      this.state.playMusic ? audio.play() : audio.pause()
    })
  }
  render() {
    return (
      <div className='g-bg'>
        <audio autoPlay={this.state.playMusic && this.state.status !== 'loading'} loop ref='audio'>
          <source src={bgmPath}></source>
        </audio>
        {
          this.state.status === 'loading' ? <LoadingPage inited={this.state.inited} />
          :
          <div className='g-container'>
            <Voice playMusic={this.state.playMusic} setPlayMusic={() => this.setPlayMusic()} />
            {
              this.state.status === 'update' ? <UpdatePage {...this.state} setSwitchStatus={(state: string) => this.switchStatus(state)} />
              :
              this.state.status === 'play' ? <PlayGamePage {...this.state} /> : <div>还在加载</div>
            }
          </div>
        }
      </div>
    )
  }
}

export default Bargain