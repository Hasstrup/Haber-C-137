import  React, {Component} from 'react'
import { Link } from 'react-router-dom'

class LandingComponent extends Component {
  constructor(){
    super()
    this.state = {
      selector: ''
    }
  }

  componentDidMount(){
    this.setState({ selector: this.props.selector })
  }

  viewContent = () => {
    this.props.history.push(`/view${this.state.selector}`)
  }

  newContent = () => {
    this.props.history.push(`/new${this.state.selector}`)
  }


  render() {
    if(this.props.selector === ''){
    return(
        <div>
          <div className='row' id='landingg'>
            <div className='col-md-6'>
              <div id='first-col'>
              <div>
                <div>
                  <svg id="i-options" viewBox="0 0 32 32" width="32" height="32" fill="none"
                    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
                  </svg>
                </div>
                <h2 id='landing-first'><strong> Students {'++'} </strong>  </h2>
                <hr/>
                </div>
                </div>
                <div id='col-paragraph'>
                  <p id='landing-text'>
                  Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                  prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami  {'tri-tip'} filet
                    mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                    beef ribs hamburger tri-tip t-bone swine.
                  </p>
                  <a href='/students'>
                    <svg id="i-arrow-right" viewBox="0 0 32 32" width="20" height="20" fill="none"
                      stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                    </svg>
                  </a>
                </div>
            </div>
            <div className='col-md-6'>
              <div id='container-fluid'>
              <img className="img-fluid img-thumbnail" src="https://i.imgur.com/Anvgc5p.jpg" alt="Card image cap"/>
            </div>
            </div>
          <div className='row' id='landingg2'>
            <div className='col-md-6'>
              <div className="card" id='card-ex2' style={{width: 22 + 'rem'}}>
                <img className="card-img-top" src="https://i.ytimg.com/vi/eGnRGGsgr4w/maxresdefault.jpg" alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">Aaaaaarghhhhhhh morty{'!'} Dreaming again {'?'}</p>
                  </div>
                </div>
            </div>
            <div className='col-md-6'>
              <div id='first-col' className='special-ting'>
              <div>
                <div>
                  <svg id="i-options" viewBox="0 0 32 32" width="32" height="32" fill="none"
                    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
                  </svg>
                </div>
                <h2 id='landing-first'><strong> Teachers Maybe {'?'} </strong>  </h2>
                <hr/>
                </div>
                </div>
                <div id='col-paragraph'>
                  <p id='landing-text'>
                  Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                  prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami  {'tri-tip'} filet
                    mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                    beef ribs hamburger tri-tip t-bone swine.
                  </p>
                  <a href='/teachers'>
                    <svg id="i-arrow-right" viewBox="0 0 32 32" width="20" height="20" fill="none"
                      stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                    </svg>
                  </a>
                </div>
            </div>


          </div>

            <div className='row' id='landingg3'>
              <div className='col-md-6'>
                <div id='first-col' className='special-ting'>
                <div>
                  <div>
                    <svg id="i-options" viewBox="0 0 32 32" width="32" height="32" fill="none"
                      stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
                    </svg>
                  </div>
                  <h2 id='landing-first'><strong> Explore Classes </strong>  </h2>
                  <hr/>
                  </div>
                  </div>
                  <div id='col-paragraph'>
                    <p id='landing-text'>
                    Bacon ipsum dolor amet shoulder tenderloin frankfurter pork loin kevin
                    prosciutto ground round brisket {'ribeye. Jowl'} pork pork loin pastrami  {'tri-tip'} filet
                      mignon chicken {'hamburger. Chicken'}ham pork chop, fatback cow kielbasa cupim spare ribs
                      beef ribs hamburger tri-tip t-bone swine.
                    </p>
                    <a href='/classes'>
                      <svg id="i-arrow-right" viewBox="0 0 32 32" width="20" height="20" fill="none"
                        stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                      </svg>
                    </a>
                  </div>
              </div>

              <div className='col-md-6'>
                <div className="card" id='card-ex3' style={{width: 25 + 'rem'}}>
                  <img className="card-img-top"  src="https://pre00.deviantart.net/0de8/th/pre/f/2015/191/b/5/rick_and_morty__wallpaper__by_ghotire-d90pvce.png" alt="Card image cap"/>
                    <div className="card-body">
                      <p className="card-text">Oh No Rick{'!'} Classes {'??'} Classes {'??'} Ohhh Goddd</p>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>


)} else {

        let picture1;
        let picture2;

        switch(this.state.selector) {

          case 'class':

              picture1='https://static.tumblr.com/141e3a1f2517d0e2162d7f25ba5b2a22/ybrrwhc/ZLLnyh8b2/tumblr_static_tumblr_static__640.jpg';
              picture2='https://static.tumblr.com/1913d8e5efb351c3266c95d4d622de6f/a3yoyjq/dfjo8jak1/tumblr_static_tumblr_static_3obswxj2le68k0soo8888skgw_640.jpg'
          break;

          case 'student':
              picture1='https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/120046/width754/image-20160425-22390-ofqddp.jpg'
              picture2='http://assets.nydailynews.com/polopoly_fs/1.965651.1319718340!/img/httpImage/image.jpg_gen/derivatives/article_750/alg-preschool-graduates-jpg.jpg'
          break;

          case 'teacher':
                picture1='http://rt2qxflpae-flywheel.netdna-ssl.com/wp-content/uploads/2014/12/043012-national-black-male-teacher.png';
                picture2='http://www.blackteacherproject.org/wp-content/uploads/2016/02/BTLSI2017NYC-web.png';
          break;

          default:
            null

        }



  return(
        <div id='specc'>

              <div className='row' id='seconding-row'>
                <div className='col-md-6' id='seconded-row'>
                  <div id='first-col'>
                  <div className='container'>
                    <div class="card" id='land-card' style={{ width: 20 + 'rem' }}>
                      <img class="card-img-top" src={picture1} alt="Card image cap"/>
                        <div class="card-body">
                          <h4 class="card-title"> View {this.props.selector}{this.state.selector === 'class' ? 'es' : 's'}</h4>
                          <p class="card-text"> comes {'with'} the awesome ability to {'do'} the following   </p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"> Edit {this.props.selector}{this.state.selector === 'class' ? 'es' : 's'} </li>
                          <li class="list-group-item"> Delete {this.props.selector}{this.state.selector === 'class' ? 'es' : 's'}</li>
                          <li class="list-group-item" id='last-card-body' onClick={() => this.viewContent()}><a> Click to proceed </a></li>
                        </ul>

                      </div>
                      </div>
                  </div>
                </div>

                  <div className='col-md-6' id='third-row'>
                    <div id='first-col'>
                    <div class="card" id='land-card' style={{width: 20 + 'rem'}}>
                      <img class="card-img-top" src={picture2} alt="Card image cap"/>
                        <div class="card-body">
                          <h4 class="card-title"> Create {'new'} {this.state.selector}</h4>
                          <p class="card-text">Add to our existing database {'of'}  {this.props.selector}{this.state.selector === 'class' ? 'es' : 's'}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">  Please provide a valid image url  </li>
                          <li class="list-group-item"> Rah! Let's get started </li>
                          <li class="list-group-item" id='last-card-body' onClick={() => this.newContent() }>  <a> Click to proceed! </a></li>
                        </ul>

                      </div>
                       </div>
                    </div>


        </div>
      </div>
      )


}
}
}

export default LandingComponent
