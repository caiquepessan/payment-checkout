'use client'

import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { CheckoutFormData } from '@/lib/validation'
import { shippingOptions } from '@/lib/mockData'
import { formatCurrency } from '@/lib/utils'

interface ShippingMethodProps {
  register: UseFormRegister<CheckoutFormData>
  watch: UseFormWatch<CheckoutFormData>
}

export default function ShippingMethod({ register, watch }: ShippingMethodProps) {
  const selectedMethod = watch('shippingMethod')

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Método de Entrega</h2>
      
      <div className="space-y-4">
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className={`relative flex items-start p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
              selectedMethod === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="radio"
              value={option.id}
              className="sr-only"
              {...register('shippingMethod')}
            />
            
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedMethod === option.id
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {option.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {option.description}
                  </p>
                </div>
              </div>
              
              <div className="text-sm font-medium text-gray-900">
                {formatCurrency(option.price)}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Informações adicionais */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-800">
              Informações sobre entrega
            </p>
            <p className="text-sm text-blue-700 mt-1">
              O prazo de entrega começa a contar após a confirmação do pagamento. 
              Você receberá um código de rastreamento por email.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
