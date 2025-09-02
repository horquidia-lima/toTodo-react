# Componente Icon

## Análise do Componente Icon

### 1. Definição das Variantes
```typescript
export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin"
        }
    },
    defaultVariants: {
        animate: false
    }
})
```

**O que faz:**
- `cva("")` cria uma função que gera classes CSS baseadas em variantes
- A string vazia `""` são as classes base (nenhuma neste caso)
- **Variante `animate`**: 
  - `false`: nenhuma classe adicional
  - `true`: adiciona a classe `animate-spin` (rotação contínua do Tailwind CSS)
- **Padrão**: `animate: false` (sem animação por padrão)

### 2. Interface do Componente
```typescript
interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants>{
    svg: React.FC<React.ComponentProps<"svg">>
}
```

**Breakdown:**
- **`React.ComponentProps<"svg">`**: Herda todas as props nativas de um elemento SVG (como `width`, `height`, `onClick`, etc.)
- **`VariantProps<typeof iconVariants>`**: Adiciona as props das variantes (`animate` neste caso)
- **`svg`**: Prop obrigatória que recebe um componente React que renderiza SVG

### 3. O Componente
```typescript
export default function Icon({svg: SvgComponent, animate, className, ...props}: IconProps){
    return <SvgComponent className={iconVariants({animate, className})} {...props}/>
}
```

**Como funciona:**
- **Destructuring**: Extrai `svg` (renomeado para `SvgComponent`), `animate`, `className` e o resto das props
- **`iconVariants({animate, className})`**: Gera as classes CSS baseadas na variante `animate` e combina com `className` personalizada
- **`{...props}`**: Passa todas as outras props para o componente SVG

### 5. Exemplo de Uso
```typescript
// Importação do SVG como componente React
import TrashIcon from "./assets/icons/trash.svg?react"

// Uso do componente Icon
<Icon svg={TrashIcon} animate={true} width={24} height={24} />
```

### Esclarecimento sobre React.FC

O que é: FC significa "Function Component". É um tipo que define um componente funcional React. Um componente funcional é simplesmente uma função JavaScript que retorna JSX.

**Importante:** `React.FC` é um conceito de **tipagem TypeScript** para componentes React, não algo específico do SVG. No meu caso, estou usando para garantir que a prop `svg` seja compatível com elementos SVG.

O `React.FC` pode ser usado com qualquer tipo de props, mas atualmente a comunidade React prefere não usá-lo na definição de componentes, optando por funções simples com tipagem direta das props.

## vite-plugin-svgr

O **vite-plugin-svgr** é um plugin que converte arquivos SVG em componentes React automaticamente.

### Instalação
```bash
npm install --save-dev vite-plugin-svgr
```

### Configuração no vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()]
})
```

### Configuração no vite-env.d.ts
Para que funcione corretamente com TypeScript, adicione a referência de tipos:

```typescript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

### Como funciona:
1. **Importação especial**: `import TrashIcon from "./assets/icons/trash.svg?react"`
   - O `?react` indica ao Vite para processar o SVG como componente React
   - Sem isso, seria importado como URL string

2. **Conversão automática**: 
   - Pega o arquivo SVG e transforma em um componente React funcional
   - Mantém todas as propriedades e estrutura do SVG original
   - Permite passar props como `width`, `height`, `className`, etc.

3. **Vantagens**:
   - **Performance**: SVGs são inline, não precisam de requests HTTP separados
   - **Flexibilidade**: Pode alterar cores, tamanhos e estilos via CSS/props
   - **Tree-shaking**: Só inclui os SVGs que você realmente usa
   - **TypeScript**: Componentes têm tipagem automática

