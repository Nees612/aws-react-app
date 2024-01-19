
interface LoadingBarProps{
    size?: string
}
export default function LoadingBar({size}: LoadingBarProps){    
    const additionalclass = size === 'small' ? 'spinner-border-sm' : ''
    return <>
        <div className={"spinner-border text-primary "+ additionalclass} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </>
}
