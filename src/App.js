import React, {Component} from 'react'
import { Input, Container, Button, Header } from 'semantic-ui-react'
import Note from './components/notes'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      noteTxt:"",
      notes:[]
  }
}
  addNote(){
    if (this.state.noteTxt === "") {return}
    let notesArr = this.state.notes
    notesArr.push(this.state.noteTxt)
    this.setState({noteTxt: ""})
    this.textInput.focus();
  }
  
  updateNoteTxt(noteTxt){
    this.setState({ noteTxt: noteTxt.target.value})
  }
  handleKeyPress = (event) =>{
    if (event.key === "Enter"){
      let notesArr = this.state.notes
      notesArr.push(this.state.noteTxt)
      this.setState({noteTxt: ""})

    }
  }
  deleteNote(index) {
    let notesArr = this.state.notes
    notesArr.splice( index, 1)
    this.setState({notes:notesArr})
  }
  render(){

    let notes = this.state.notes.map((val,key)=>{
      return <Note key={key} text={val} deleteMethod={()=> this.deleteNote(key)} />
    })

    return(
      <div>
         <Container text>
         <Header as='h2' style={{marginTop:"1em"}}disabled>
           To-do-List
         </Header>
         <Input ref={((input)=>{this.textInput = input})}
         
         style={{width:"100%", marginTop:"4em"}} transparent placeholder='Write a note....'
         value={this.state.noteTxt} 
         onChange={noteTxt => this.updateNoteTxt(noteTxt)}
         onKeyPress={this.handleKeyPress.bind(this)}
         />
         <Button fluid basic style={{marginTop:"1em"}} onClick={this.addNote.bind(this)}>Add Note</Button>
         {notes}
         </Container>
      </div>
      )
  }
    
}
export default App
