'use client'

import { CartItem } from '@/types/checkout'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'

interface CartSummaryProps {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export default function CartSummary({ items, subtotal, shipping, tax, total }: CartSummaryProps) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumo do Pedido</h2>
      
      {/* Itens do carrinho */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
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
              <p className="text-sm text-gray-500">
                Qtd: {item.quantity}
              </p>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-4"></div>

      {/* Totais */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Frete</span>
          <span className="text-gray-900">{formatCurrency(shipping)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Impostos</span>
          <span className="text-gray-900">{formatCurrency(tax)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Garantia */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Compra 100% Segura
            </p>
            <p className="text-sm text-green-700">
              Seus dados estão protegidos com criptografia SSL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
