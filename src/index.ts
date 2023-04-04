const axios = require('axios');

const prompt:string = 'Once upon a midnight dreary';
const maxTokens = 50;
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/engine/davinci-codex/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
};

axios.post(apiUrl, {
  prompt: prompt,
  max_tokens: maxTokens
}, {
  headers: headers
})
.then(response => {
  const text = response.data.choices[0].text;
  console.log(text);
})
.catch(error => {
  console.error(error);
});
