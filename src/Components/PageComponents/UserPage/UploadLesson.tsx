
import { ChangeEvent, useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { useAuthenticator } from '@aws-amplify/ui-react';
import * as mutation from '../../../graphql/mutations'
import { MouseEvent } from 'react';


const appendAlert = (message:string, type:string) => {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder?.append(wrapper)
}

const client = generateClient();

interface Lesson{    
    UserID: string;
    Title: string;
    Description: string;
    FilePath: string;
}

async function CreateLesson(Lesson:Lesson){                    
    console.log(await client.graphql({query: mutation.createLesson, variables: {input: Lesson}}))
}

function UploadLesson(){            
    
    const [IsLoading, SetLoading] = useState(false);
    const userID = useAuthenticator((context) => [context.user]).user.userId;    

    const [Lesson, SetLesson] = useState({
        Title: "",
        Description: "",
        FilePath: "",
        UserID: ""
    });                

    useEffect(() => {
        SetLesson({
            ...Lesson,
            UserID: userID
        })
    },[])

    const HandleOnchange = (e: ChangeEvent<HTMLInputElement>) => {        
        SetLesson({
            ...Lesson,
            [e.target.name]: e.target.value
        })
    }    

    function HandleSubmit(e:MouseEvent){
        e.preventDefault();        
        
        SetLoading(true);             
        CreateLesson(Lesson).then(() => {
            SetLoading(false)
            appendAlert('Your document is succesfully uploaded!', 'success')
        });        
        
    }

    return<>
    <div id="liveAlertPlaceholder"></div>
     <form onSubmit={() => HandleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label h5">Title</label>
            <input value={Lesson.Title} name="Title" onChange={HandleOnchange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lesson title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label h5">Description</label>
            <input value={Lesson.Description} name="Description" onChange={HandleOnchange} className="form-control" id="exampleFormControlTextarea1" placeholder="Lesson description" aria-rowcount={3}></input>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label h5">URL</label>
            <input value={Lesson.FilePath} name='FilePath' onChange={HandleOnchange} type="test" className="form-control" id="exampleFormControlInput1" placeholder="Your file path"/>
        </div>        
        <button id="liveAlertBtn" type="submit" onClick={(e)=>HandleSubmit(e)} className="btn btn-primary " disabled={IsLoading}>Submit</button>        
    </form>
    </>
}

export default UploadLesson;