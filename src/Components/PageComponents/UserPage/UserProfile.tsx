import { FetchUserAttributesOutput} from "aws-amplify/auth";
import { ChangeEvent, useContext, useEffect, useState} from "react";
import * as Models from '../../../models/'
import * as Mutations from '../../../graphql/mutations.js';
import { UserContext } from "./UserPageLayout";
import LoadingBar from "../../PageElements/LoadingBar";
import { generateClient } from "aws-amplify/api";
import { Card, CheckboxField, Heading, View } from "@aws-amplify/ui-react";
import { NavLink } from "react-router-dom";


const client = generateClient()

interface User{
    Attributes: FetchUserAttributesOutput | undefined    
}

function ProfileInformation({Attributes}: User){
    return <>    
    <div>        
        <div className="row">
            <div className="col-1">
                <h5>Welcome</h5>
            </div>
            <div className="col-2 m-auto ms-0 me-0 text-start">
                <h5>{Attributes?.email ? Attributes?.email + "!":
                    <LoadingBar/>               
                }</h5>                
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <span>Email status: { Attributes? <span className="fst-italic">{Attributes.email_verified ? <span className="badge text-bg-success">verified</span> : <NavLink to={'/userpage/verification'}>you have to verify your email.</NavLink>}</span> : <LoadingBar size="small"/> } </span>                
            </div>        
            <div className="col-3">
                <span>Gender: {Attributes? <span className="fst-italic">{Attributes.gender ? Attributes.gender: <NavLink to={'/userpage/update-profile'}>set your gender</NavLink>} </span> : <LoadingBar size="small"/>}</span>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <span>Birthdate: {Attributes? <span className="fst-italic">{Attributes.birthdate ? Attributes.birthdate: <NavLink to={'/userpage/update-profile'}>set your birthdate</NavLink>} </span> : <LoadingBar size="small"/>}</span>
            </div>        
            <div className="col-3">
                <span>Last updated: {Attributes? <span className="fst-italic">{Attributes.updated_at ? Attributes.updated_at: "no data"} </span> : <LoadingBar size="small" />}</span>
            </div>
        </div>
    </div>    
    </>
}

interface UserLessonProps{
    LessonList: Models.Lesson[] | undefined
    HandleCheckBox: (event: ChangeEvent<HTMLInputElement> ) => void
    
}
function UserLessonList({LessonList, HandleCheckBox}: UserLessonProps){        
                
    return <>            
        {LessonList? LessonList.map((Lesson) => <>        
            <div className="row">
                <div className="col-1 mt-2 ms-2 me-auto p-1">
                    <CheckboxField className="float-end" key={Lesson.id} label={Lesson.Title} onChange={(event) => HandleCheckBox(event) } name={Lesson.Title} value={Lesson.id} labelHidden={true} size="large"/>
                </div>
                <div className="col p-0">
                    <View style={{}}>
                        <div className="accordion accordion-flush" id={"accordionExample_"+Lesson.id}>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne_"+Lesson.id} aria-expanded="true" aria-controls="collapseOne">
                                        <Heading>{Lesson.Title}</Heading>
                                    </button>
                                </div>
                                <div id={"collapseOne_"+Lesson.id} className="accordion-collapse collapse show" data-bs-parent={"#accordionExample_"+Lesson.id}>
                                    <div className="accordion-body">                                                                
                                        <Card>
                                            <p className="card-text text-body-secondary">{Lesson.Description}</p>                    
                                            <p className="fs-6 m-0">Uploaded at <span className="m-0 fs-6 fst-italic">{Lesson.createdAt}</span></p>
                                        </Card>                        
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </View>
                </div>
            </div>
        </>    
        ) : ""}    
    </>    
}

interface DeleteSelectedLessonsProps{
    LessonIDList: string[]
}
function DeleteSelectedLessons({LessonIDList}: DeleteSelectedLessonsProps){        
    LessonIDList.map((lessonID) => {
        const variables = {        
            id: lessonID         
        }        
        const DeleteLessons = async () => await client.graphql({query: Mutations.deleteLesson, variables: {input:variables}})
        DeleteLessons().then((data) => console.log(data))
    })            
}

function UserProfile (){        
    const context = useContext(UserContext);    
    const [SelectedLessonIDList, SetSelectedLessonIDList] = useState<string[]>();       

    const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {     
        event.stopPropagation();        

        const val = event.target.value
        const checked = event.target.checked    
        
        console.log(val)
        console.log(checked)

        let tempList: string[] = [];

        if (!(SelectedLessonIDList?.length === 0)){
            SelectedLessonIDList?.map((id) => {tempList.push(id)});
        }        
        
        if (tempList.length === 0){
            tempList.push(val);
        }
        if (tempList?.includes(val) && !checked){
            tempList?.splice(tempList?.indexOf(val),1)
        }
        if (!tempList?.includes(val) && checked){
            tempList?.push(val);
        }        
        SetSelectedLessonIDList(tempList);
     }    

     useEffect(()=> {
        const contextIDList: string[] = []

        context.LessonList?.map((lesson) => {
            contextIDList.push(lesson.id);
        });

        const remaningIDList: string[] = [];
        SelectedLessonIDList?.map((id) => {
            if (contextIDList.includes(id)){
                remaningIDList.push(id);
            }            
        })
        
        SetSelectedLessonIDList(remaningIDList);

     },[context.LessonList])
        
    return <>        
        <div className="container p-2 m-2">
            <div className="row" style={{ top: "4.5rem", background: "white", zIndex: 50}}>
                <div className="col p-2">                
                    <ProfileInformation Attributes={context.User.Attributes}/>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <p>Uploaded Lessons: {context.LessonList?.length ? <span className="badge text-bg-primary">{context.LessonList.length} </span> : <LoadingBar size="small"/> }
                        <a className="m-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Manage my lessons
                        </a>                        
                    </p>
                </div>
                <div className="collapse" id="collapseExample">    
                    <div className="row">
                        <div className="col-9">
                                <UserLessonList LessonList={context.LessonList} 
                                    HandleCheckBox={(event) => handleCheckBoxChange(event)}
                                    />
                        </div>                
                        <div className="col">
                            <button className="m-1 btn btn-danger" disabled={SelectedLessonIDList?.length ? false: true} onClick={() => DeleteSelectedLessons({LessonIDList: SelectedLessonIDList? SelectedLessonIDList : []})}>
                                Delete
                            </button>
                        </div>
                    </div>                    
                </div>                    
            </div>            
        </div>        
    </>;
}

export default UserProfile;