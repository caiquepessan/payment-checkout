import { CartItem } from '@/types/checkout'

export const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Smartphone Galaxy S24',
    price: 2499.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
    description: 'Smartphone Android com 128GB de armazenamento'
  },
  {
    id: '2',
    name: 'Fone de Ouvido Bluetooth',
    price: 199.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'Fone sem fio com cancelamento de ruído'
  },
  {
    id: '3',
    name: 'Capa Protetora Premium',
    price: 49.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop',
    description: 'Capa de silicone com proteção contra quedas'
  }
]

export const shippingOptions = [
  {
    id: 'standard',
    name: 'Entrega Padrão',
    description: '5-7 dias úteis',
    price: 15.99
  },
  {
    id: 'express',
    name: 'Entrega Expressa',
    description: '2-3 dias úteis',
    price: 29.99
  },
  {
    id: 'overnight',
    name: 'Entrega no Próximo Dia',
    description: '1 dia útil',
    price: 49.99
  }
]

export const paymentMethods = [
  {
    id: 'credit',
    name: 'Cartão de Crédito',
    description: 'Visa, Mastercard, American Express'
  },
  {
    id: 'debit',
    name: 'Cartão de Débito',
    description: 'Visa, Mastercard'
  },
  {
    id: 'pix',
    name: 'PIX',
    description: 'Pagamento instantâneo'
  },
  {
    id: 'boleto',
    name: 'Boleto Bancário',
    description: 'Vencimento em 3 dias'
  }
]

export const states = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]
