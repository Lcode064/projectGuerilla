import fetch from 'node-fetch';

const apiKey = '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';

const prompt = process.argv[2];
fetch('https://api.openai.com/v1/engines/davinci/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    prompt: prompt,
    max_tokens: 50
  })
})
.then(response => response.json())
.then(data => {
  const choices = data.choices;
  if (choices && choices.length > 0) {
    const responseText = choices[0].text.trim();
    console.log(responseText);
  }
    else {
    console.error('No response text found:', data);
  }
})
.catch(error => {
  console.error('Error making request:', error);
});
