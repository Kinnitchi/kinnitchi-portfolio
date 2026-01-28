# Igor Oliveira | Portfólio Profissional

Portfólio profissional desenvolvido em **Next.js 14** com **App Router**, **TypeScript** e **CSS Modules**, seguindo as melhores práticas de desenvolvimento front-end e otimização para SEO.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety e melhor experiência de desenvolvimento
- **CSS Modules** - Estilização modular e scoped
- **Framer Motion** - Animações e microinterações (opcional)
- **React 18** - Server e Client Components

## 📁 Arquitetura do Projeto

```
portifolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raiz com metadata e configurações globais
│   └── page.tsx           # Página inicial (home)
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   └── SectionTitle.tsx
├── sections/              # Seções da página
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/                  # Dados estruturados
│   └── portfolio.ts       # Skills, experiências e projetos
├── styles/                # Estilos globais e CSS Modules
│   └── globals.css
├── public/                # Assets estáticos
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎯 Decisões Técnicas

### 1. **Next.js App Router**
Utilizei o App Router (Next.js 14) ao invés do Pages Router por:
- **Server Components por padrão**: Melhor performance e SEO
- **Layouts aninhados**: Reutilização eficiente de estrutura
- **Metadata API nativa**: SEO simplificado e type-safe
- **Streaming e Suspense**: Carregamento progressivo

### 2. **TypeScript**
TypeScript oferece:
- **Type Safety**: Redução de bugs em produção
- **IntelliSense**: Melhor experiência de desenvolvimento
- **Documentação implícita**: Interfaces servem como documentação
- **Refatoração segura**: Mudanças estruturais com confiança

### 3. **CSS Modules**
Escolhi CSS Modules ao invés de styled-components por:
- **Performance**: Sem runtime JavaScript
- **Scoped styles**: Sem conflitos de CSS
- **Zero configuração**: Funciona out-of-the-box no Next.js
- **Melhor tree-shaking**: CSS não utilizado é removido

### 4. **Estrutura de Dados Centralizada**
Dados em `data/portfolio.ts` permitem:
- **Fácil manutenção**: Atualizar conteúdo sem tocar em componentes
- **Type safety**: Interfaces garantem consistência
- **Reutilização**: Mesma fonte de dados para diferentes visualizações
- **Escalabilidade**: Fácil migração para CMS headless no futuro

### 5. **Componentes Reutilizáveis**
Componentes como `Button`, `Container`, `Section` seguem:
- **Princípio DRY**: Não repetir código
- **Composição**: Componentes pequenos e focados
- **Props interface**: API clara e documentada
- **Acessibilidade**: ARIA labels e semântica HTML

## 🎨 Padrões de Design Implementados

### Design System Minimalista
- **Paleta de cores**: Neutra com azul como accent color
- **Tipografia**: Inter (Google Fonts) com fallbacks system
- **Espaçamento**: Sistema consistente com variáveis CSS
- **Responsividade**: Mobile-first com breakpoints definidos
- **Dark mode**: Suporte via `prefers-color-scheme`

### Microinterações
- **Hover states**: Feedback visual em todos os elementos interativos
- **Transições suaves**: Easing functions consistentes
- **Transform animations**: Elevação de cards e botões
- **Focus states**: Acessibilidade para navegação via teclado

## 🔍 SEO e Performance

### Otimizações de SEO
- ✅ **Metadata completa**: Title, description, keywords
- ✅ **Open Graph**: Tags para compartilhamento em redes sociais
- ✅ **Twitter Cards**: Visualização otimizada no Twitter
- ✅ **Robots.txt**: Indexação controlada
- ✅ **Semântica HTML**: Uso correto de tags HTML5
- ✅ **Alt text**: Descrições para imagens (quando aplicável)

### Otimizações de Performance
- ✅ **Server Components**: Renderização no servidor por padrão
- ✅ **CSS Modules**: Sem runtime de CSS-in-JS
- ✅ **Code splitting**: Automático via Next.js
- ✅ **Font optimization**: Google Fonts otimizado via next/font
- ✅ **Image optimization**: next/image quando usar imagens

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Linting
npm run lint
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy na Vercel

### Deploy Automático (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure as variáveis de ambiente (se necessário)
5. Deploy automático!

### Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Configurações importantes na Vercel
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x ou superior

## 🎯 Boas Práticas Implementadas

### Código
- ✅ **Componentes funcionais**: Apenas function components
- ✅ **Props typing**: Todas as props tipadas com interfaces
- ✅ **Naming conventions**: PascalCase para componentes, camelCase para funções
- ✅ **File organization**: Um componente por arquivo
- ✅ **Import organization**: Agrupamento lógico de imports

### Performance
- ✅ **Server Components**: Componentes sem interatividade são Server Components
- ✅ **Client Components**: Apenas quando necessário (eventos, hooks)
- ✅ **Lazy loading**: Preparado para implementar quando necessário
- ✅ **Otimização de assets**: Estrutura pronta para otimização de imagens

### Acessibilidade
- ✅ **Semântica HTML**: Tags apropriadas (header, main, section, footer)
- ✅ **ARIA labels**: Em links e botões quando necessário
- ✅ **Contrast ratios**: Paleta de cores acessível
- ✅ **Keyboard navigation**: Focus states visíveis
- ✅ **Alt text**: Preparado para descrições de imagens

### SEO
- ✅ **Meta tags**: Completas e otimizadas
- ✅ **Sitemap**: Fácil de gerar via next-sitemap
- ✅ **Robots.txt**: Configuração de crawling
- ✅ **Structured data**: Preparado para JSON-LD

## 🔧 Melhorias Opcionais

### Curto Prazo
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar scroll suave entre seções
- [ ] Adicionar tema dark/light toggle manual
- [ ] Criar sitemap.xml automatizado

### Médio Prazo
- [ ] Integrar com CMS headless (Sanity, Contentful)
- [ ] Adicionar blog com MDX
- [ ] Implementar Analytics (Google Analytics, Vercel Analytics)
- [ ] Adicionar testes unitários (Jest + Testing Library)

### Longo Prazo
- [ ] Internacionalização (i18n) PT/EN
- [ ] PWA (Progressive Web App)
- [ ] Sistema de comentários no blog
- [ ] Dashboard admin para gerenciar conteúdo

## 📝 Customização

### Atualizar Conteúdo
Edite o arquivo [data/portfolio.ts](data/portfolio.ts) para atualizar:
- Skills e tecnologias
- Experiências profissionais
- Projetos

### Alterar Cores
Modifique as variáveis CSS em [styles/globals.css](styles/globals.css):
```css
:root {
  --color-accent: #2563eb; /* Sua cor de destaque */
}
```

### Adicionar Nova Seção
1. Crie componente em `sections/NomeSecao.tsx`
2. Crie CSS Module em `sections/NomeSecao.module.css`
3. Importe e adicione em `app/page.tsx`

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e profissional.

---

**Desenvolvido com ❤️ usando Next.js e TypeScript**