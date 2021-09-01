export default function Details(props) {
    return (
        <div className="justify-content-center m-3" style={{display : (props.dis) ? props.dis : 'none'}}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}
