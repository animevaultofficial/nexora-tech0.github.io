import {
  siAnthropic, siGithubcopilot, siGooglegemini, siOllama, siOpenai, siGroq, siX
} from 'simple-icons';

export const aiProviders = [
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    icon: siGithubcopilot,
    color: '#ffffff',
    model: 'Auto',
    setup: 'Sign in with the linked GitHub account; EFITH can fetch the available Copilot models.'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    icon: siOpenai,
    color: '#8bd1c1',
    model: 'gpt-5.5',
    setup: 'Add an OpenAI API key and select a model.'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    icon: siGooglegemini,
    color: '#9c8bff',
    model: 'gemini-3.8-flash',
    setup: 'Add a Google API key and select a model.'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    icon: siAnthropic,
    color: '#dc9e79',
    model: 'claude-opus-5-5',
    setup: 'Add an Anthropic API key and select a model.'
  },
  {
    id: 'groq',
    name: 'Groq',
    icon: siGroq,
    color: '#f47d5d',
    model: 'openai/gpt-oss-120b',
    setup: 'Add a Groq API key and select a model.'
  },
  {
    id: 'xai',
    name: 'xAI / Grok',
    icon: siX,
    color: '#d6d8de',
    model: 'grok-4.7',
    setup: 'Add an xAI API key and select a model.'
  },
  {
    id: 'ollama',
    name: 'Ollama (local)',
    icon: siOllama,
    color: '#e8e8ed',
    model: 'llama3.2:3b',
    setup: 'Connect to the configured local Ollama-compatible endpoint.'
  },
  {
    id: 'custom',
    name: 'OpenAI-compatible API',
    symbol: '{ }',
    color: '#e49bb6',
    model: 'Your model ID',
    setup: 'Set an API base URL, model ID, and API key.'
  }
];
