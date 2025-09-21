export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  description?: string
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface PaymentMethod {
  type: 'credit' | 'debit' | 'pix' | 'boleto'
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  cardName?: string
  installments?: number
}

export interface CheckoutData {
  items: CartItem[]
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  shippingMethod: 'standard' | 'express' | 'overnight'
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export interface FormErrors {
  [key: string]: string | undefined
}
