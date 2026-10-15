import {
  siAnthropic, siGithubcopilot, siGooglegemini, siOllama
} from 'simple-icons';

// Use local SVG path data for providers that are not exported by the installed
// Simple Icons release. This keeps the marks crisp and avoids fragile remote assets.
const openAiMark = {
  title: 'OpenAI',
  path: 'M12 2.1a5.1 5.1 0 0 0-4.9 3.7 5.1 5.1 0 0 0-4.2 7.5 5.1 5.1 0 0 0 2.6 7.3A5.1 5.1 0 0 0 12 22a5.1 5.1 0 0 0 4.9-3.7 5.1 5.1 0 0 0 4.2-7.5 5.1 5.1 0 0 0-2.6-7.3A5.1 5.1 0 0 0 12 2.1Zm0 2.5a2.6 2.6 0 0 1 2.4 1.7l-5.2 3a2.6 2.6 0 0 0-1.3 2.3v1.2l-2.7-1.6a2.6 2.6 0 0 1 2.3-3.9c.5 0 .9.1 1.3.3l1.1.6V6.8A2.6 2.6 0 0 1 12 4.6Zm5.1 2.1a2.6 2.6 0 0 1 2.2 3.9l-.7 1.1h-3.2v-1.3a2.6 2.6 0 0 0-1.3-2.3l-1-.6 2.7-1.5c.4.4.8.7 1.3.7ZM10.4 12l1.6-.9 1.6.9v1.9l-1.6.9-1.6-.9V12Zm-5.2 2.1 2.7 1.6v1.2a2.6 2.6 0 0 0 1.3 2.3l1 .6-2.7 1.5a2.6 2.6 0 0 1-2.2-3.9l.7-1.1H9v-1.3a2.6 2.6 0 0 0-1.3-2.3l-2.5-1.4v2.8Zm9.6 1.1a2.6 2.6 0 0 0 1.3-2.3v-1.2l2.7 1.6a2.6 2.6 0 0 1-2.3 3.9c-.5 0-.9-.1-1.3-.3l-1.1-.6v1.4a2.6 2.6 0 0 1-4.8 1.4l5.5-3.1Z',
  viewBox: { width: 24, height: 24 }
};
const groqMark = {
  title: 'Groq',
  path: 'M12.036 2c-3.853-.035-7 3-7.036 6.781-.035 3.782 3.055 6.872 6.908 6.907h2.42v-2.566h-2.292c-2.407.028-4.38-1.866-4.408-4.23-.029-2.362 1.901-4.298 4.308-4.326h.1c2.407 0 4.358 1.915 4.365 4.278v6.305c0 2.342-1.944 4.25-4.323 4.279a4.375 4.375 0 0 1-3.033-1.252l-1.851 1.818A7 7 0 0 0 12.029 22h.092c3.803-.056 6.858-3.083 6.879-6.816v-6.5C18.907 4.963 15.817 2 12.036 2z',
  viewBox: { width: 24, height: 24 }
};
const xaiMark = {
  title: 'xAI / Grok',
  path: 'M6.469 8.776 16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9 2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z',
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
