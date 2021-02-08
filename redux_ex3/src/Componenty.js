
function Ymari(props) {
    return (
        <div className="container">
            <h1>{props.count}</h1>
            <div>
                <button onClick={props.increment}>IncrementY</button>
            </div>
        </div>
    );
}
export default Ymari