function Name({checkList}) {

    return (
        <div style={{padding: "20px"}}>
            <ul style={{marginTop: "30px", marginLeft: "15px"}}>
                {checkList.map((selectedName, index) => (
                    <li key={index} style={{border:"1px solid #ecead8", padding:"5px", width: "130px", textAlign: "center", borderRadius: "10px",
                                            margin: "3px", backgroundColor: "#ecead8", boxShadow: "0 2px 4px 0 rgba(200,200,200, 0.4)"}}>
                        {selectedName.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Name;
