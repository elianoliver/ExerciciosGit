# Guia de Estrutura SASS - Agência Criativa Web

## 📋 Visão Geral

Este projeto utiliza **SASS** (Syntactically Awesome Style Sheets) com uma estrutura modular e escalável, seguindo boas práticas e a metodologia **BEM** (Block Element Modifier).

## 📁 Estrutura de Diretórios

```
ExerciciosGit/
├── scss/                    # Arquivos SASS (fonte)
│   ├── _variaveis.scss     # Variáveis (cores, dimensões, tipografia)
│   ├── _mixins.scss        # Mixins reutilizáveis
│   ├── _base.scss          # Estilos base e reset
│   ├── _layout.scss        # Layout geral (header, footer, banner)
│   ├── _componentes.scss   # Componentes (botões, cards, serviços, etc)
│   └── estilos.scss        # Arquivo principal (importações)
├── css/                     # CSS compilado (destino)
│   ├── estilos.css         # CSS compilado
│   └── estilos.css.map     # Source map para debug
├── index.html              # HTML principal
├── package.json            # Configuração npm e dependências
└── .gitignore              # Arquivos ignorados pelo git
```

## 🎨 Arquivos SASS Explicados

### 1. `_variaveis.scss`
Centraliza todas as variáveis do projeto:
- **Cores**: cores primárias, secundárias, cinzas, sombras
- **Tipografia**: fontes, tamanhos, line-heights
- **Espaçamentos**: xs, sm, md, lg, xl
- **Layout**: padding, border-radius
- **Breakpoints**: mobile-first approach (tablet: 768px, desktop: 1024px)

```scss
$cor-primaria: #007BFF;
$espacamento-md: 1.5rem;
$breakpoint-tablet: 768px;
```

### 2. `_mixins.scss`
Contém mixins reutilizáveis para reduzir duplicação:
- `@mixin espacamento()` - Espaçamento padrão
- `@mixin botao-base()` - Estilos de botão
- `@mixin card-hover()` - Efeito hover em cards
- `@mixin flex-center()` - Flexbox centrado
- `@mixin media-tablet/desktop/desktop-lg()` - Media queries
- `@mixin focus-visible()` - Acessibilidade
- `@mixin aspect-ratio()` - Proporção responsiva

```scss
@mixin media-tablet {
  @media (min-width: $breakpoint-tablet) {
    @content;
  }
}
```

### 3. `_base.scss`
Estilos base e globais:
- Reset CSS (*margin, padding, box-sizing)
- Tipografia global (html, body, headings, paragraphs)
- Classes de tipografia (.heading, .text)
- Utilitários (.container, .section, .grid)

### 4. `_layout.scss`
Estrutura geral da página:
- **Header**: logo, navegação, menu toggle (hamburger)
- **Banner**: seção hero com imagem de fundo
- **Footer**: rodapé com copyright

Inclui responsividade com media queries aninhadas:

```scss
.header__nav {
  @include media-desktop {
    width: auto;
    position: static;
  }
}
```

### 5. `_componentes.scss`
Componentes específicos do projeto:
- `.btn` - Botões
- `.about` - Seção "Sobre Nós"
- `.services` - Grid de serviços
- `.testimonials` - Depoimentos
- `.contact` - Seção de contato com formulário

Todos os componentes seguem BEM:

```scss
.services {
  &__grid { }
  &__item { }
  &__title { }
}
```

### 6. `estilos.scss`
Arquivo principal que importa todos os partials:

```scss
@use 'variaveis' as *;    // Variáveis globais
@use 'mixins' as *;       // Mixins disponíveis
@use 'base' as *;         // Reset e base
@use 'layout' as *;       // Layout
@use 'componentes' as *;  // Componentes
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Compilação

**Compilar SASS uma vez:**
```bash
npm run sass
```

**Compilar em tempo real (watch mode):**
```bash
npm run sass:watch
```

**Compilar minificado:**
```bash
npm run sass:minify
```

## 🎯 Metodologia BEM

O projeto segue a convenção BEM para nomeação de classes:

```scss
// Bloco
.services { }

// Elemento (bloco__elemento)
.services__grid { }
.services__item { }
.services__title { }

// Modificador (elemento--modificador)
.heading--secondary { }
.section--alternate { }
.btn--hover { }
```

## 📱 Responsividade (Mobile First)

A estrutura segue uma abordagem **mobile-first**:

1. **Mobile** (padrão, sem media query)
2. **Tablet** (min-width: 768px)
3. **Desktop** (min-width: 1024px)
4. **Large Desktop** (min-width: 1200px)

```scss
.services__grid {
  @include grid-responsive(1);  // Mobile: 1 coluna

  @include media-tablet {
    grid-template-columns: repeat(2, 1fr);  // Tablet: 2 colunas
  }

  @include media-desktop {
    grid-template-columns: repeat(4, 1fr);  // Desktop: 4 colunas
  }
}
```

## ✨ Boas Práticas Implementadas

✅ **Variáveis centralizadas** - Fácil manutenção e consistência
✅ **Mixins reutilizáveis** - Reduz duplicação de código
✅ **Aninhamento moderado** - Máximo 2 níveis para legibilidade
✅ **Nomenclatura BEM** - Estrutura clara e compreensível
✅ **Operadores SASS** - Cálculos proporcionais (calc, divisão)
✅ **Media queries organizadas** - Mobile-first e fácil de manter
✅ **Acessibilidade** - Focus states e contrast adequado
✅ **Comentários explicativos** - Explicam principais seções

## 🔧 Customização

Para customizar cores, tamanhos ou qualquer constante do projeto, edite `scss/_variaveis.scss`:

```scss
// Exemplo: Mudar cor primária
$cor-primaria: #FF69B4;  // De azul para rosa

// Exemplo: Aumentar espaçamento
$espacamento-md: 2rem;   // De 1.5rem para 2rem
```

Após editar, recompile:
```bash
npm run sass
```

## 📚 Recursos Adicionais

- [Documentação SASS Oficial](https://sass-lang.com/documentation)
- [Metodologia BEM](http://getbem.com/)
- [Mobile First](https://www.nngroup.com/articles/mobile-first-web-design/)

---

**Desenvolvido com ❤️ seguindo boas práticas de CSS modular e escalável.**
