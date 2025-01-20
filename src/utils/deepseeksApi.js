export async function askDeepseek(query) {
  const apiKey = import.meta.env.VITE_DEEPSEEKS_API_KEY;
  if (!apiKey) throw new Error('DeepSeek API key not found');

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for SocialPlug Labs.' },
        { role: 'user', content: query }
      ],
      temperature: 0.7,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error('Failed to get response from DeepSeek');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
