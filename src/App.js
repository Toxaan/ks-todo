import React from 'react';
import {Row, ListGroup, Container, Form, Button } from 'bootstrap-4-react';

//import PropTypes from 'prop-types'

function App() { 
  return (
    <Container className="wrapper" >
      <Notes/>
    </Container>
  );
}


class Notes extends React.Component {
  constructor(){
    super();
    this.state = {
      note: [
        {name: "Встать"},
        {name: "Умыться"},
        {name: "Покушать"},
        {name: "Поспать"}
      ],
      strNote: ""
    };
  }

  addNote(str){
    if(str.trim() !== ""){
      var oldState = this.state.note;
      oldState.push({name: str})
      this.setState({
        note: oldState,
        strNote: ""
      })
    }
  }

  updateStrNode(str){
    this.setState({
      strNote: str 
    })
  }

  removeNote(id){
    var newState = this.state.note.filter((note,index) => index !== id)
    this.setState({
      note: newState
    })
  }

  render(){
    return (
      <div className="vse">
        <Form>
          <Form.Input 
              type="text"
              placeholder="Новая заметка"
              value={this.state.strNote}
              onChange={(event) => this.updateStrNode(event.target.value)}
          />
        </Form>
        <Button className="btnAdd" success onClick={() => this.addNote(this.state.strNote)} >
              Добавить заметку
        </Button>
        <ListGroup>
          {this.state.note.map((note,index) => {
            return (
              <ListGroup.Item key={index}style={{backgroundColor: "rgb(246, 248, 134)"}}>
                <Row justifyContent="between" key={index} style={{paddingLeft:"10px", paddingRight:"10px"}}>
                  <span className="perenos">
                    <strong>{index +1}</strong>
                    &nbsp;
                    {note.name}
                  </span>
                  <Button danger outline sm onClick={() => this.removeNote(index)}>x</Button>
                </Row >
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    )
  }
}

export default App;
