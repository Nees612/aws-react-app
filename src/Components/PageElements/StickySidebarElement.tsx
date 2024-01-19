
interface Props{
    SidebarContent: React.ReactNode
}


function StickySidebarElement({SidebarContent}: Props) {
    return <>
        <div className="container p-2 m-2 text-start position-sticky" style={{top: "4rem", width: "fit-content"}}>
            <div className="overflow-auto overflow-x-hidden" style={{height: "calc(100vh - 6rem)"}}>
                {SidebarContent}
            </div>
        </div>
    </>
}

export default StickySidebarElement;