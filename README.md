# 🛒 Checkout Moderno

Uma página de checkout moderna, profissional e totalmente funcional construída com as melhores tecnologias do mercado.

![Checkout Preview](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional com Tailwind CSS
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🔒 **Validação Robusta**: Validação de formulários com React Hook Form + Zod
- 💳 **Múltiplos Métodos de Pagamento**: Cartão de crédito, débito, PIX e boleto
- 🚚 **Opções de Entrega**: Diferentes métodos de envio com preços
- ⚡ **Performance Otimizada**: Construído com Next.js 14 e TypeScript
- 🎭 **Animações Suaves**: Transições e micro-interações elegantes
- 🛡️ **Segurança**: Simulação de gateway de pagamento seguro

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de interface de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas TypeScript
- **Lucide React** - Ícones modernos

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/checkout-moderno.git
   cd checkout-moderno
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal do checkout
├── components/            # Componentes React
│   ├── CartSummary.tsx    # Resumo do carrinho
│   ├── CheckoutButton.tsx # Botão de finalizar compra
│   ├── Header.tsx         # Cabeçalho da página
│   ├── PaymentMethod.tsx  # Seleção de método de pagamento
│   ├── ShippingForm.tsx   # Formulário de entrega
│   ├── ShippingMethod.tsx # Seleção de método de envio
│   └── SuccessModal.tsx   # Modal de sucesso
├── lib/                   # Utilitários e configurações
│   ├── mockData.ts        # Dados mockados
│   ├── utils.ts           # Funções utilitárias
│   └── validation.ts      # Esquemas de validação
└── types/                 # Definições de tipos TypeScript
    └── checkout.ts        # Tipos do checkout
```

## 🎯 Funcionalidades

### 📋 Formulário de Entrega
- Validação em tempo real
- Campos obrigatórios com feedback visual
- Formatação automática de CEP e telefone
- Seleção de estado com dropdown

### 💳 Métodos de Pagamento
- **Cartão de Crédito**: Com opção de parcelamento
- **Cartão de Débito**: Pagamento à vista
- **PIX**: Pagamento instantâneo
- **Boleto**: Vencimento em 3 dias úteis

### 🚚 Opções de Entrega
- **Padrão**: 5-7 dias úteis (R$ 15,99)
- **Expressa**: 2-3 dias úteis (R$ 29,99)
- **Próximo Dia**: 1 dia útil (R$ 49,99)

### 🛒 Resumo do Pedido
- Lista de produtos com imagens
- Cálculo automático de subtotal, frete e impostos
- Total final destacado
- Informações de segurança

## 🎨 Design System

### Cores
- **Primary**: Azul (#3b82f6) - Botões e elementos principais
- **Gray**: Escala de cinzas para textos e backgrounds
- **Success**: Verde para confirmações
- **Warning**: Amarelo para avisos
- **Error**: Vermelho para erros

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- **Botões**: Primary, Secondary com estados hover/focus
- **Inputs**: Campos de formulário com validação visual
- **Cards**: Containers com sombra sutil
- **Modais**: Overlays com animações

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint

# Verificação de tipos
npm run type-check
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Configure o build command: `npm run build`
3. Configure o publish directory: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários
- [Zod](https://zod.dev/) - Validação de esquemas
- [Lucide](https://lucide.dev/) - Ícones
- [Unsplash](https://unsplash.com/) - Imagens de exemplo

---

⭐ **Se este projeto te ajudou, não esqueça de dar uma estrela!**
