'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'

interface CheckoutButtonProps {
  total: number
  onCheckout: () => void
  isLoading?: boolean
}

export default function CheckoutButton({ total, onCheckout, isLoading = false }: CheckoutButtonProps) {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 -mx-6 -mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-gray-900">Total:</span>
        <span className="text-2xl font-bold text-primary-600">
          {formatCurrency(total)}
        </span>
      </div>
      
      <button
        onClick={onCheckout}
        disabled={isLoading}
        className={`w-full btn-primary flex items-center justify-center ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Finalizar Compra
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-3">
        Ao finalizar a compra, você concorda com nossos{' '}
        <a href="#" className="text-primary-600 hover:text-primary-700 underline">
          Termos de Uso
        </a>{' '}
        e{' '}
        <a href="#" className="text-primary-600 hover:text-primary-700 underline">
          Política de Privacidade
        </a>
      </p>
    </div>
  )
}
