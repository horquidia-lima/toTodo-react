# Componente Text

Um componente React reutilizável que permite renderizar diferentes elementos HTML (span, p, h1, etc.) com estilos consistentes usando Tailwind CSS e Class Variance Authority (CVA).

## Como funciona

### 1. Class Variance Authority (CVA)
```typescript
export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold"
        }
    },
    defaultVariants: {
        variant: "body-md"
    }
})
```

- **Base classes**: `"font-sans text-gray-400"` - aplicadas sempre
- **Variants**: diferentes estilos que você pode escolher
- **Default**: se não especificar variant, usa "body-md"


### 2. O Componente Explicado

```typescript
export default function Text({as="span", variant, className, children, ...props}: TextProps){
    return React.createElement(
        as,                                           // Tag HTML
        {
            className: textVariants({variant, className}), // Classes combinadas
            ...props                                  // Outras props
        },
        children                                      // Conteúdo
    )
}
```

#### Destructuring dos parâmetros:
- `as="span"` → valor padrão, se não passar `as`, usa "span"
- `variant` → qual estilo aplicar ("body-md", "body-sm-bold", etc.)
- `className` → classes CSS extras (opcional)
- `children` → conteúdo interno do componente
- `...props` → pega TODAS as outras props que não foram destructuradas

#### Por que React.createElement?

Porque o `as` é **dinâmico**! Com JSX seria impossível:
```jsx
<as className="...">children</as> // ❌ Não funciona!
```

Mas com React.createElement:
```typescript
React.createElement(as, {...}, children) // ✅ Funciona!
```

### 4. Exemplo prático do que acontece:

```typescript
// Quando você chama:
<Text as="h1" variant="body-md-bold" id="titulo">Meu título</Text>

// Os parâmetros ficam:
as = "h1"
variant = "body-md-bold"  
className = undefined
children = "Meu título"
props = {id: "titulo"} // resto das props

// React.createElement executa:
React.createElement(
  "h1",                    // elemento HTML
  {
    className: "font-sans text-gray-400 text-base leading-6 font-semibold",
    id: "titulo"           // ...props espalhadas
  },
  "Meu título"             // children
)

// Resultado final (HTML):
<h1 class="font-sans text-gray-400 text-base leading-6 font-semibold" id="titulo">
  Meu título
</h1>
```

## Vantagens do CVA vs abordagem manual

### ✅ **Usando CVA (código atual):**
- Type safety automático
- Fácil combinação de variants
- Intellisense no editor
- Menos código repetitivo

### ❌ **Abordagem manual (sem CVA):**
```typescript
const getTextStyles = (variant: string) => {
  switch(variant) {
    case "body-sm-bold": return "font-sans text-gray-400 text-sm leading-5 font-semibold"
    case "body-md": return "font-sans text-gray-400 text-base leading-6 font-normal"
    // ...
  }
}
```
- Mais código
- Sem type safety
- Difícil de manter
- Repetição das classes base

## Como usar

```tsx
// Diferentes elementos HTML
<Text as="h1" variant="body-md-bold">Título</Text>
<Text as="p" variant="body-md">Parágrafo normal</Text>
<Text variant="body-sm-bold">Span pequeno e negrito</Text>

// Com classes extras
<Text className="text-red-500" variant="body-md">Texto vermelho</Text>

// Com props HTML nativas
<Text 
  as="button" 
  variant="body-md-bold"
  onClick={() => console.log("clicou")}
  data-testid="meu-botao"
>
  Clique aqui
</Text>
```

## Por que esta abordagem é boa:

1. **Type Safety**: TypeScript sabe exatamente quais variants existem
2. **Reutilização**: Classes base aplicadas automaticamente
3. **Flexibilidade**: Fácil adicionar novas variants
4. **Manutenibilidade**: Mudanças centralizadas
5. **Performance**: Classes são concatenadas eficientemente

Essa estrutura cria um componente verdadeiramente polimórfico e type-safe! 🚀