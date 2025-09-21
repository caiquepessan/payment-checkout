import { z } from 'zod'

export const shippingAddressSchema = z.object({
  firstName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  lastName: z.string().min(2, 'Sobrenome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  address: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  addressNumber: z.string().min(1, 'Número é obrigatório'),
  city: z.string().min(2, 'Cidade deve ter pelo menos 2 caracteres'),
  state: z.string().min(2, 'Estado deve ter pelo menos 2 caracteres'),
  zipCode: z.string().min(8, 'CEP deve ter pelo menos 8 dígitos'),
  country: z.string().min(2, 'País deve ter pelo menos 2 caracteres'),
})

export const paymentMethodSchema = z.object({
  type: z.enum(['credit', 'debit', 'pix', 'boleto']),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  cardName: z.string().optional(),
  installments: z.number().optional(),
}).refine((data) => {
  if (data.type === 'credit' || data.type === 'debit') {
    return data.cardNumber && data.expiryDate && data.cvv && data.cardName
  }
  return true
}, {
  message: 'Dados do cartão são obrigatórios para pagamento com cartão',
  path: ['cardNumber'],
})

export const checkoutSchema = z.object({
  shippingAddress: shippingAddressSchema,
  paymentMethod: paymentMethodSchema,
  shippingMethod: z.enum(['standard', 'express', 'overnight']),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>
