async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 3599cfcad6954ec8bad778d6447209df`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150,
            temperature: 1.0,
            top_p: 1.0,
            n: 1
        })
    });

    const data = await response.json();
    responseDiv.innerHTML = data.choices[0].text;
}
