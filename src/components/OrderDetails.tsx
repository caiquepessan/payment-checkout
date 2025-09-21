'use client'

import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'

interface OrderDetailsProps {
  order: {
    orderNumber: string
    orderDate: string
    status: string
    items: Array<{
      id: string
      name: string
      price: number
      quantity: number
      image: string
      description?: string
    }>
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Detalhes do Pedido</h2>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Confirmado
        </span>
      </div>

      {/* Itens do pedido */}
      <div className="space-y-4 mb-6">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-500 truncate">
                  {item.description}
                </p>
              )}
              <p className="text-sm text-gray-600">
                Quantidade: {item.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {formatCurrency(item.price * item.quantity)}
              </p>
              <p className="text-xs text-gray-500">
                {formatCurrency(item.price)} cada
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo financeiro */}
      <div className="border-t border-gray-200 pt-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">{formatCurrency(order.subtotal)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Frete</span>
            <span className="text-gray-900">{formatCurrency(order.shipping)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Impostos</span>
            <span className="text-gray-900">{formatCurrency(order.tax)}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-lg font-semibold text-primary-600">
                {formatCurrency(order.total)}
              </span>
            </div>
          </div>
        </div>
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
              Informações importantes
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Você receberá um email de confirmação com todos os detalhes do pedido. 
              O prazo de entrega começa a contar após a confirmação do pagamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
