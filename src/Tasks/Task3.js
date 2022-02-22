function Task3(params) {
    const { word } = params;
    const letterCount = word.length;
    const bgColor = letterCount % 2 == 0 ? 'red' : 'green';

    return (
        <div style={{ marginTop: '15px' }}>
            <span style={{ backgroundColor: bgColor, padding: '5px' }}>
                <strong>{word}</strong>  - {letterCount}
            </span>
        </div>
    )
}

export default Task3;