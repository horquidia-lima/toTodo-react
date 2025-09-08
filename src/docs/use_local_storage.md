# useLocalStorage

## O que é localStorage?

O `localStorage` é uma "gaveta" do navegador onde você pode guardar dados que **persistem** mesmo quando a página é recarregada ou fechada.

## O que é useLocalStorage?

É um **custom hook** que combina:
- `useState` (estado do React) 
- `localStorage` (armazenamento do navegador)

## Como funciona:

### Hook básico:
```typescript
function useLocalStorage(key: string, defaultValue: any) {
  // 1. Lê do localStorage na primeira vez
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  });

  // 2. Sempre que muda, salva no localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### Uso prático:
```typescript
function App() {
  // Como useState normal, mas persiste!
  const [nome, setNome] = useLocalStorage('usuario-nome', '');
  const [tema, setTema] = useLocalStorage('tema', 'claro');

  return (
    <div>
      <input 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      <p>Olá {nome}!</p>
    </div>
  );
}
```

## Vantagens:

✅ **Persiste dados** - não perde quando recarrega a página  
✅ **Fácil de usar** - igual useState normal  
✅ **Automático** - salva sozinho sempre que muda  

## Casos de uso comuns:

- **Tema** (dark/light mode)
- **Configurações** do usuário
- **Carrinho de compras**
- **Formulários** salvos
- **Preferências** da interface

## Exemplo real - Tema:
```typescript
function App() {
  const [tema, setTema] = useLocalStorage('tema', 'claro');
  
  return (
    <div className={tema === 'escuro' ? 'dark' : 'light'}>
      <button onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
        Trocar tema
      </button>
    </div>
  );
}
```

## Diferença do useState normal:

```typescript
// useState normal - perde ao recarregar
const [nome, setNome] = useState('');

// useLocalStorage - mantém ao recarregar  
const [nome, setNome] = useLocalStorage('nome', '');
```

**Resumo:** `useLocalStorage` = `useState` + memória permanente! 🧠✨