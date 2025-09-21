import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function formatCardNumber(value: string): string {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g)
  const match = matches && matches[0] || ''
  const parts = []

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join(' ')
  } else {
    return v
  }
}

export function formatExpiryDate(value: string): string {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  if (v.length >= 2) {
    return v.substring(0, 2) + '/' + v.substring(2, 4)
  }
  return v
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/[^\d]/g, '')
  
  if (cleanCPF.length !== 11) return false
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i)
  }
  let remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.charAt(9))) return false

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.charAt(10))) return false

  return true
}

export function validateCardNumber(cardNumber: string): boolean {
  const cleanNumber = cardNumber.replace(/\s/g, '')
  return /^\d{13,19}$/.test(cleanNumber)
}

export function validateCVV(cvv: string): boolean {
  return /^\d{3,4}$/.test(cvv)
}

export function validateExpiryDate(expiryDate: string): boolean {
  const [month, year] = expiryDate.split('/')
  if (!month || !year) return false
  
  const monthNum = parseInt(month)
  const yearNum = parseInt('20' + year)
  
  if (monthNum < 1 || monthNum > 12) return false
  
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1
  
  if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
    return false
  }
  
  return true
}

export function formatCEP(value: string): string {
  const v = value.replace(/\D/g, '')
  return v.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export function formatPhone(value: string): string {
  const v = value.replace(/\D/g, '')
  if (v.length <= 10) {
    return v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  } else {
    return v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
}

export interface CEPResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  erro?: boolean
}

export async function fetchCEP(cep: string): Promise<CEPResponse | null> {
  try {
    const cleanCEP = cep.replace(/\D/g, '')
    if (cleanCEP.length !== 8) return null

    const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
    const data: CEPResponse = await response.json()
    
    if (data.erro) return null
    return data
  } catch (error) {
    console.error('Erro ao buscar CEP:', error)
    return null
  }
}
