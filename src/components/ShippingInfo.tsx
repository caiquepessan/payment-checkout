'use client'

import { formatCurrency } from '@/lib/utils'

interface ShippingInfoProps {
  shipping: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    addressNumber: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  method: {
    name: string
    description: string
    price: number
  }
}

export default function ShippingInfo({ shipping, method }: ShippingInfoProps) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações de Entrega</h2>
      
      {/* Endereço de entrega */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Endereço de entrega</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-900 font-medium">
            {shipping.firstName} {shipping.lastName}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {shipping.address}, {shipping.addressNumber}
          </p>
          <p className="text-sm text-gray-600">
            {shipping.city} - {shipping.state}, {shipping.zipCode}
          </p>
          <p className="text-sm text-gray-600">
            {shipping.country}
          </p>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {shipping.email}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Telefone:</span> {shipping.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Método de entrega */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Método de entrega</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {method.name}
            </p>
            <p className="text-sm text-gray-600">
              {method.description}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">
              {formatCurrency(method.price)}
            </p>
          </div>
        </div>
      </div>

      {/* Informações de entrega */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Entrega confirmada
            </p>
            <p className="text-sm text-green-700 mt-1">
              Seu pedido será preparado e enviado conforme o método de entrega selecionado. 
              Você receberá atualizações por email.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
