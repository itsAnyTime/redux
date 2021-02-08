
function Xmari (props) {
    return (
        <div className="container">
            <h1>{props.count}</h1>
            <div>
                <button onClick={props.increment}>IncrementX</button>
            </div>
        </div>
    );
}
export default Xmari