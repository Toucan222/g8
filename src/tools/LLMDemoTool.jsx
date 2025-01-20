import { useState } from 'react'
import { askDeepseek } from '../utils/deepseeksApi'

export default function LLMDemoTool() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResponse('')

    try {
      const result = await askDeepseek(prompt)
      setResponse(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          style={{ width: '100%', minHeight: '100px', marginBottom: '1rem' }}
        />
        <button 
          type="submit" 
          disabled={loading || !prompt.trim()}
        >
          {loading ? 'Asking DeepSeek...' : 'Ask DeepSeek'}
        </button>
      </form>

      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          Error: {error}
        </div>
      )}

      {response && (
        <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
          <strong>Response:</strong>
          <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            {response}
          </div>
        </div>
      )}
    </div>
  )
}
