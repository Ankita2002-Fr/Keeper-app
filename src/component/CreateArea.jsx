import React,{useState} from 'react'
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function CreateArea(props) 
{
const [effect, setEffect] = useState(false)
const [note, setNote] = useState({
    title:"",
    content:""
})

function handleChange(event){ 

const {name, value}= event.target

setNote(prevNote => {
    return{
        ...prevNote,
        [name]:value   
    }
})
}
function handleEffect(){
setEffect(true)
}

function submitNote(event){
    props.onAdd(note)
    setNote({
        title:"",
        content:""

    })
    event.preventDefault()
}


return(
    <div>
        <form className = "create-note">
         { 
            effect &&
            <input 
            name="title" 
            onChange={handleChange} 
            value={note.title} 
            placeholder="Title"
            ></input>
         }
            <textarea 
            name="content" 
            onClick = {handleEffect}
            onChange={handleChange} 
            value={note.content} 
            placeholder="Take a note.." 
            rows={effect?"3":"1"}></textarea>

            <button onClick={submitNote} type="submit"><NoteAddIcon /></button>
        </form>
    </div>
)
}

export default CreateArea