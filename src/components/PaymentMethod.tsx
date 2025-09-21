'use client'

import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form'
import { CheckoutFormData } from '@/lib/validation'
import { paymentMethods } from '@/lib/mockData'
import { formatCardNumber, formatExpiryDate } from '@/lib/utils'
import { useState } from 'react'

interface PaymentMethodProps {
  register: UseFormRegister<CheckoutFormData>
  watch: UseFormWatch<CheckoutFormData>
  setValue: UseFormSetValue<CheckoutFormData>
}

export default function PaymentMethod({ register, watch, setValue }: PaymentMethodProps) {
  const selectedType = watch('paymentMethod.type')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)
    setValue('paymentMethod.cardNumber', formatted)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value)
    setExpiryDate(formatted)
    setValue('paymentMethod.expiryDate', formatted)
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Método de Pagamento</h2>
      
      {/* Seleção do tipo de pagamento */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
              selectedType === method.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="radio"
              value={method.id}
              className="sr-only"
              {...register('paymentMethod.type')}
            />
            
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                selectedType === method.id
                  ? 'border-primary-500 bg-primary-500'
                  : 'border-gray-300'
              }`}>
                {selectedType === method.id && (
                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                )}
              </div>
              
              <div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">{method.icon}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {method.name}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {method.description}
                </p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Formulário do cartão */}
      {(selectedType === 'credit' || selectedType === 'debit') && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900">Dados do Cartão</h3>
          
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Número do Cartão *
            </label>
            <input
              type="text"
              id="cardNumber"
              className="input-field"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
              Nome no Cartão *
            </label>
            <input
              type="text"
              id="cardName"
              className="input-field"
              placeholder="Nome como está no cartão"
              {...register('paymentMethod.cardName')}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                Validade *
              </label>
              <input
                type="text"
                id="expiryDate"
                className="input-field"
                placeholder="MM/AA"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength={5}
              />
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                CVV *
              </label>
              <input
                type="text"
                id="cvv"
                className="input-field"
                placeholder="000"
                maxLength={4}
                {...register('paymentMethod.cvv')}
              />
            </div>
          </div>

          {selectedType === 'credit' && (
            <div>
              <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-2">
                Parcelas
              </label>
              <select
                id="installments"
                className="input-field"
                {...register('paymentMethod.installments', { valueAsNumber: true })}
              >
                <option value={1}>1x sem juros</option>
                <option value={2}>2x sem juros</option>
                <option value={3}>3x sem juros</option>
                <option value={6}>6x sem juros</option>
                <option value={12}>12x com juros</option>
              </select>
            </div>
          )}
        </div>
      )}

      {/* Informações para PIX */}
      {selectedType === 'pix' && (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Pagamento via PIX
              </p>
              <p className="text-sm text-green-700">
                Você receberá o QR Code para pagamento após finalizar o pedido
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Informações para Boleto */}
      {selectedType === 'boleto' && (
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                Pagamento via Boleto
              </p>
              <p className="text-sm text-yellow-700">
                O boleto será gerado após finalizar o pedido e vence em 3 dias úteis
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
