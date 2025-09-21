'use client'

import { CheckCircle, X } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  orderNumber: string
  total: number
}

export default function SuccessModal({ isOpen, onClose, orderNumber, total }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Pedido Confirmado!</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Order Details */}
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">
            Seu pedido foi processado com sucesso!
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Número do pedido: <span className="font-medium text-gray-900">{orderNumber}</span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Total: {formatCurrency(total)}
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Próximos passos:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Você receberá um email de confirmação</li>
            <li>• O pedido será processado em até 24h</li>
            <li>• Você receberá o código de rastreamento</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full btn-primary"
          >
            Continuar Comprando
          </button>
          <button
            onClick={onClose}
            className="w-full btn-secondary"
          >
            Acompanhar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}
