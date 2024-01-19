
import { Flex, useAuthenticator } from "@aws-amplify/ui-react";
import { NavLink, Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import {listLessons, listUserToLessons} from '../../../graphql/queries.js' 
import {generateClient } from 'aws-amplify/api';
import * as Models from '../../../models/index.js'
import {FetchUserAttributesOutput, fetchUserAttributes } from "aws-amplify/auth";


const client = generateClient();

interface User{
    UserID: string
    Attributes: FetchUserAttributesOutput | undefined
}

interface UserPageActionProps{
    RequestCount: number | undefined
}
function UserPageActionList({RequestCount}: UserPageActionProps){    
    return <>                
        <Flex>
            <nav className="position-sticky vh-100" style={{top:"3.4rem"}}>            
                    <ul className="list-group w-100 overflow-auto overflow-x-hidden" style={{height: "calc(100vh - 10rem)"}}>
                        <li className="list-group-item d-flex justify-content-between align-items-start border border-0" >
                            <div className="ms-2 me-auto">
                                <NavLink className="fw-bold " to={"/userpage/my-profile"}>My Profile</NavLink>
                            </div>            
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start border border-0" >
                            <div className="ms-2 me-auto">
                                <NavLink className="fw-bold button" to={"/userpage/upload-lesson"}>Upload Lesson</NavLink>
                            </div>            
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start border border-0" >
                            <div className="ms-2 me-auto">
                                <NavLink className="fw-bold button" to={"/userpage/requests"}>Requests<span className="badge ms-1 rounded-pill bg-danger">{RequestCount}</span></NavLink>
                            </div>            
                        </li>
                    </ul>            
            </nav>        
            <div className="vr"></div>                            
        </Flex>
        
    </>
}

async function GetUserAttributes() {
    return await fetchUserAttributes().then((UserAttributes) => {
        return {Attributes: UserAttributes};
    });
}

interface UserContext{    
    LessonList: Models.Lesson[] | undefined   
    UserToLessonList: Models.UserToLesson[] | undefined 
    User: User    
}

interface GraphQLRLesson {
    data: {
        listLessons: {
            items: Models.Lesson[]
        }
    }
}

interface GraphQLRUserToLesson {
    data: {
        listUserToLessons: {
            items: Models.UserToLesson[]
        }
    }
}

export const UserContext = createContext<UserContext>({LessonList: [], UserToLessonList: [], User: {UserID: '',Attributes: {}}});
function UserPageLayout() {    

    const [LessonList, SetLessonList] = useState<Models.Lesson[]>();    
    const [UserToLessonList, SetUserToLessonList] = useState<Models.UserToLesson[]>();    
    const [UserAttributes, SetUserAttributes] = useState<FetchUserAttributesOutput>()
    const {user} = useAuthenticator((context) => [context.user]);               

    const fetchData = () => {
        const variables = {            
            filter: {
                UserID:{
                    eq: user.userId         
                } 
            }              
        };
        GetUserAttributes().then((User) => SetUserAttributes(User.Attributes));      
        
        const listLessonsPromise = async() => await client.graphql({
            query: listLessons,
            variables: variables
        });
        
        listLessonsPromise().then((data) => {data = data as GraphQLRLesson;
            SetLessonList(data.data.listLessons.items);
        })                        
        
        LessonList?.map((lesson) => {
            const UserToLessonVar = {
                query: listUserToLessons,
                variables: {
                    filter: {
                        UserID: {
                            eq: lesson.UserID
                        }
                    }
                }
            }
            const listUserToLessonPromise = async() => await client.graphql({
                query: listUserToLessons,
                variables: UserToLessonVar
            })
            listUserToLessonPromise().then((data) => {data = data as GraphQLRUserToLesson;
                const tempArr = UserToLessonList;
                tempArr?.push(data.data.listUserToLessons.items);
                SetUserToLessonList(tempArr)
            })
        })

        

    }

    useEffect(() => {                     
        fetchData();        
    }, [LessonList,UserToLessonList])
    

    return<>
        <UserContext.Provider value={{LessonList: LessonList, UserToLessonList: UserToLessonList,  User: {UserID: user.userId, Attributes:UserAttributes }}}>            
            <Flex>
                <UserPageActionList RequestCount={UserToLessonList?.length}/>                                                                
                <Outlet/>                                                           
            </Flex>                                        
        </UserContext.Provider>        
    </>
}

export default UserPageLayout;