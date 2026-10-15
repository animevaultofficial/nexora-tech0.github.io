import {
  siAnthropic, siGithubcopilot, siGooglegemini, siOllama
} from 'simple-icons';

// Small inline vector marks keep these provider logos available even when the
// installed Simple Icons release does not export their named constants.
const openAiMark = {
  title: 'OpenAI',
  path: 'M12 2.1a5.1 5.1 0 0 0-4.9 3.7 5.1 5.1 0 0 0-4.2 7.5 5.1 5.1 0 0 0 2.6 7.3A5.1 5.1 0 0 0 12 22a5.1 5.1 0 0 0 4.9-3.7 5.1 5.1 0 0 0 4.2-7.5 5.1 5.1 0 0 0-2.6-7.3A5.1 5.1 0 0 0 12 2.1Zm0 2.5a2.6 2.6 0 0 1 2.4 1.7l-5.2 3a2.6 2.6 0 0 0-1.3 2.3v1.2l-2.7-1.6a2.6 2.6 0 0 1 2.3-3.9c.5 0 .9.1 1.3.3l1.1.6V6.8A2.6 2.6 0 0 1 12 4.6Zm5.1 2.1a2.6 2.6 0 0 1 2.2 3.9l-.7 1.1h-3.2v-1.3a2.6 2.6 0 0 0-1.3-2.3l-1-.6 2.7-1.5c.4.4.8.7 1.3.7ZM10.4 12l1.6-.9 1.6.9v1.9l-1.6.9-1.6-.9V12Zm-5.2 2.1 2.7 1.6v1.2a2.6 2.6 0 0 0 1.3 2.3l1 .6-2.7 1.5a2.6 2.6 0 0 1-2.2-3.9l.7-1.1H9v-1.3a2.6 2.6 0 0 0-1.3-2.3l-2.5-1.4v2.8Zm9.6 1.1a2.6 2.6 0 0 0 1.3-2.3v-1.2l2.7 1.6a2.6 2.6 0 0 1-2.3 3.9c-.5 0-.9-.1-1.3-.3l-1.1-.6v1.4a2.6 2.6 0 0 1-4.8 1.4l5.5-3.1Z',
  viewBox: { width: 24, height: 24 }
};
const groqMark = {
  title: 'Groq',
  path: 'M5 3h14a2 2 0 0 1 2 2v3h-4V7H7v10h10v-2h4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 6h10v4H11V9Z',
  viewBox: { width: 24, height: 24 }
};
const xaiMark = {
  title: 'xAI',
  path: 'M3 3h5.2l12.8 18h-5.2L3 3Zm0 18 7.2-10.1 2.6 3.7L8.2 21H3Zm10.6-11.4L16.2 6l4.8-3h-5.2l-4.8 3 2.6 3.6Z',
  viewBox: { width: 24, height: 24 }
};

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
    icon: openAiMark,
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
    icon: groqMark,
    color: '#f47d5d',
    model: 'openai/gpt-oss-120b',
    setup: 'Add a Groq API key and select a model.'
  },
  {
    id: 'xai',
    name: 'xAI / Grok',
    icon: xaiMark,
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
