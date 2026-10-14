import {
  siAstro, siC, siCplusplus, siCss, siDart, siDocker, siFsharp,
  siGo, siGraphql, siGnubash, siHtml5, siJavascript, siJson, siKotlin,
  siLua, siMarkdown, siOpenjdk, siPhp, siPrisma, siPython, siR, siReact,
  siRuby, siRust, siSass, siSvelte, siSwift, siTypescript, siVuedotjs,
  siXml, siYaml
} from 'simple-icons';

export const techStackGroups = [
  {
    name: 'Web & UI',
    entries: [
      { name: 'JavaScript', ext: '.js · .mjs · .cjs', icon: siJavascript },
      { name: 'JSX / React', ext: '.jsx', icon: siReact },
      { name: 'TypeScript', ext: '.ts · .mts · .cts', icon: siTypescript, diagnostics: true },
      { name: 'TSX', ext: '.tsx', icon: siTypescript, diagnostics: true },
      { name: 'HTML', ext: '.html · .htm', icon: siHtml5 },
      { name: 'CSS', ext: '.css', icon: siCss },
      { name: 'SCSS', ext: '.scss', icon: siSass },
      { name: 'Sass', ext: '.sass', icon: siSass },
      { name: 'Less', ext: '.less' },
      { name: 'Vue', ext: '.vue', icon: siVuedotjs },
      { name: 'Svelte', ext: '.svelte', icon: siSvelte },
      { name: 'Astro', ext: '.astro', icon: siAstro }
    ]
  },
  {
    name: 'Programming languages',
    entries: [
      { name: 'Python', ext: '.py · .pyw', icon: siPython },
      { name: 'C', ext: '.c · .h', icon: siC },
      { name: 'C++', ext: '.cc · .cpp · .cxx · .hpp · .hh', icon: siCplusplus },
      { name: 'C#', ext: '.cs' },
      { name: 'F#', ext: '.fs', icon: siFsharp },
      { name: 'Go', ext: '.go', icon: siGo },
      { name: 'Rust', ext: '.rs', icon: siRust },
      { name: 'Java', ext: '.java', icon: siOpenjdk },
      { name: 'Kotlin', ext: '.kt · .kts', icon: siKotlin },
      { name: 'Swift', ext: '.swift', icon: siSwift },
      { name: 'PHP', ext: '.php', icon: siPhp },
      { name: 'Ruby', ext: '.rb', icon: siRuby },
      { name: 'Lua', ext: '.lua', icon: siLua },
      { name: 'R', ext: '.r', icon: siR },
      { name: 'Dart', ext: '.dart', icon: siDart }
    ]
  },
  {
    name: 'Data, query & docs',
    entries: [
      { name: 'JSON', ext: '.json', icon: siJson },
      { name: 'JSONC', ext: '.jsonc', icon: siJson },
      { name: 'JSON5', ext: '.json5', icon: siJson },
      { name: 'YAML', ext: '.yml · .yaml', icon: siYaml },
      { name: 'TOML', ext: '.toml' },
      { name: 'SQL', ext: '.sql' },
      { name: 'GraphQL', ext: '.graphql · .gql', icon: siGraphql },
      { name: 'XML / SVG', ext: '.xml · .svg', icon: siXml },
      { name: 'Prisma', ext: '.prisma', icon: siPrisma },
      { name: 'Markdown', ext: '.md', icon: siMarkdown },
      { name: 'MDX', ext: '.mdx', icon: siMarkdown },
      { name: 'reStructuredText', ext: '.rst' }
    ]
  },
  {
    name: 'Shell & build',
    entries: [
      { name: 'Shell / Bash / Zsh', ext: '.sh · .bash · .zsh', icon: siGnubash },
      { name: 'PowerShell', ext: '.ps1' },
      { name: 'Windows Batch', ext: '.bat · .cmd' },
      { name: 'Dockerfile', ext: 'Dockerfile', icon: siDocker },
      { name: 'Makefile', ext: 'Makefile' },
      { name: 'Plain text', ext: '.env · .txt · .gitignore' }
    ]
  }
];

export const techStackLanguageCount = techStackGroups.reduce((total, group) => total + group.entries.length, 0);
