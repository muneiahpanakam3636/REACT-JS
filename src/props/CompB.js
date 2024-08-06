

let CompB =(props)=>{
    return <div>
        <h2>Component-B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>wish message:{props.message}</h3>
    </div>
}
export default CompB