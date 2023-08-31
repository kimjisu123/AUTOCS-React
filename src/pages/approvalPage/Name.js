function Name({checkList}) {

    return (
        <div style={{padding: "20px"}}>
            <ul>
                {checkList.map((selectedName, index) => (
                    <li key={index}>
                        {selectedName.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Name;
