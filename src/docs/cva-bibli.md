# Função `cx` do CVA

O `cx` é uma função super útil do CVA para **combinar classes CSS**.

## O que o `cx` faz:

O `cx` (class names) é como um "misturador inteligente" de classes CSS. Ele:

- **Combina** múltiplas classes
- **Remove** duplicatas  
- **Ignora** valores falsy (undefined, null, false)
- **Resolve conflitos** do Tailwind

## Como funciona na prática:

```typescript
// Seu componente tem mt-4 como base
<MainContent className="mt-6">
  <p>Conteúdo</p>
</MainContent>
```

```typescript
// cx combina assim:
cx("mt-4 md:mt-8", "mt-6")

// Resultado final:
"md:mt-8 mt-6"
```

## Resumo

O `cx` é como um **"juiz inteligente"** que remove conflitos e sempre deixa o valor mais específico/recente vencer! Sem bugs, sem classes duplicadas! 😊