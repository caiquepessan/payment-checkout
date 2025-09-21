'use client'

import { Shield, Truck, CreditCard } from 'lucide-react'

export default function ConfirmationHeader() {
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
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">Carrinho</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">Checkout</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-900">Confirmação</span>
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
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-900">Carrinho</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-900">Checkout</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-900">Confirmação</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
