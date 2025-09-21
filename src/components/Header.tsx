'use client'

import { ShoppingCart, Shield, Truck, CreditCard } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Checkout</h1>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">Carrinho</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">Checkout</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Confirmação</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Compra Segura</span>
          </div>
        </div>
      </div>

      {/* Mobile Progress */}
      <div className="md:hidden bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ShoppingCart className="w-4 h-4 text-primary-600 mr-1" />
              <span className="text-sm font-medium text-gray-900">Carrinho</span>
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 text-primary-600 mr-1" />
              <span className="text-sm font-medium text-gray-900">Entrega</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-sm font-medium text-gray-500">Pagamento</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
