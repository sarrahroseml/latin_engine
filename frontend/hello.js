
async function sendrequest (latinwords) {
    try {
        const response = await 
        fetch("http://localhost:8080/runscript", { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({words: latinwords}),

            }
        )
        console.log("Server response:", response);

        if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
        }
        const result = await response.json()
        console.log("Parsed JSON:", result);


    } catch (error) {
        console.error('Error:',error)
    }
}




