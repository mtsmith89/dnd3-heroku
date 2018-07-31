import * as React from 'react'
import { Navbar } from 'react-bootstrap'
import './App.css'
import { getRandomRace } from './logic'
import RandomBtn from './components/RandomBtn'
import { HttpRedirect } from './components/httpRedirect'
import Header from './components/Header'
import { Row, Card, CardBody, CardText, Col } from 'reactstrap'

class App extends React.Component {
  state = {
    currentCharacter: undefined
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    const { currentCharacter } = this.state

    return (
      <div>
        <HttpRedirect />
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Header />
            </Navbar.Brand>{' '}
            {/* <RandomBtn
                              {...{
                                bsStyle: 'primary',
                                className: 'btn-margin',
                                onClick: () => this.goTo.bind(this, 'home')
                              }}
                            >
                              Home
                            </RandomBtn> */}{' '}
            {isAuthenticated() && (
              <RandomBtn onClick={this.logout.bind(this)} className="btn-margin">
                Log Out{' '}
              </RandomBtn>
            )}{' '}
            {!isAuthenticated() && (
              <RandomBtn onClick={this.login.bind(this)} className="btn-margin">
                Log In{' '}
              </RandomBtn>
            )}{' '}
            {isAuthenticated() && (
              <RandomBtn
                {...{
                  className: 'btn-margin',
                  onClick: () => {
                    getRandomRace().then(currentCharacter => {
                      this.setState({
                        currentCharacter
                      })
                    })
                  }
                }}
              >
                Generate Random Character{' '}
              </RandomBtn>
            )}{' '}
          </Navbar.Header>{' '}
        </Navbar>{' '}
        <Row>
          <Col sm="8" className="offset-2">
            <Col sm="8" className="offset-2">
              {' '}
              {currentCharacter && (
                <Card>
                  <CardBody className="equipment">
                    <CardText>
                      <div className="row">
                        <div className="col-6">
                          {' '}
                          {currentCharacter.characterGender} {currentCharacter.characterRace} {' '}
                          {currentCharacter.characterJob}{' '}
                        </div>{' '}
                        <div className="col-6">
                          <input
                            className="input-char-text"
                            type="text"
                            name="charName"
                            id="charName"
                            placeholder="Character Name"
                          />
                          <input type="button" className="char-name-button save text-right" name="save" value="Save" />
                        </div>{' '}
                      </div>{' '}
                    </CardText>{' '}
                  </CardBody>{' '}
                  <CardBody>
                    <img width="100%" src = {currentCharacter.characterImage} alt="Character" />
                    <Row>
                      <Col className="equipment" s="6">
                        <CardText> HP: {currentCharacter.characterHP} </CardText>{' '}
                        <CardText> Strength: {currentCharacter.characterAttr[0]} </CardText>{' '}
                        <CardText> Dexterity: {currentCharacter.characterAttr[1]} </CardText>{' '}
                        <CardText> Constitution: {currentCharacter.characterAttr[2]} </CardText>{' '}
                        <CardText> Inteligence: {currentCharacter.characterAttr[3]} </CardText>{' '}
                        <CardText> Wisdom: {currentCharacter.characterAttr[4]} </CardText>{' '}
                        <CardText> Charisma: {currentCharacter.characterAttr[5]} </CardText>{' '}
                      </Col>{' '}
                      <Col className="equipment" s="6">
                        <CardText>
                          Proficiencies:
                          <ul>
                            {' '}
                            {currentCharacter.characterProf.map(function(name, index) {
                              return <li key={index}> {name} </li>
                            })}{' '}
                          </ul>{' '}
                        </CardText>{' '}
                      </Col>{' '}
                    </Row>{' '}
                  </CardBody>{' '}
                </Card>
              )}{' '}
            </Col>{' '}
          </Col>{' '}
        </Row>{' '}
      </div>
    )
  }
}

export default App
