import StickySidebarElement from "../Components/PageElements/StickySidebarElement";
import ArticleListElement from "../Components/PageElements/ArticleListElement";
import TopicListElement from "../Components/PageElements/TopicListElement";


function HomePageLayout (){
    
    return <>    
        <div className="row w-100">
            <div className="col-3"><StickySidebarElement SidebarContent={<TopicListElement/>}/></div>                         
            <div className="col-8">{<ArticleListElement/>}</div>        
        </div>                 
    </>
}

export default HomePageLayout;