'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { formatCurrency } from '@/lib/utils'
import { mockCartItems } from '@/lib/mockData'

// Components
import ConfirmationHeader from '@/components/ConfirmationHeader'
import OrderDetails from '@/components/OrderDetails'
import ShippingInfo from '@/components/ShippingInfo'
import PaymentInfo from '@/components/PaymentInfo'
import TrackingInfo from '@/components/TrackingInfo'
import ActionButtons from '@/components/ActionButtons'

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const [orderData, setOrderData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento dos dados do pedido
    const loadOrderData = async () => {
      setIsLoading(true)
      
      // Simular delay de carregamento
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Dados mockados do pedido (em uma aplicação real, viria da API)
      const mockOrderData = {
        orderNumber: searchParams.get('order') || 'PED-123456',
        orderDate: new Date().toLocaleDateString('pt-BR'),
        status: 'confirmado',
        items: mockCartItems,
        subtotal: mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        shipping: 29.99,
        tax: mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.1,
        total: mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 29.99 + (mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.1),
        shippingAddress: {
          firstName: 'João',
          lastName: 'Silva',
          email: 'joao.silva@email.com',
          phone: '(11) 99999-9999',
          address: 'Rua das Flores, 123',
          addressNumber: '123, apto 45',
          city: 'São Paulo',
          state: 'SP',
          zipCode: '01234-567',
          country: 'Brasil'
        },
        paymentMethod: {
          type: 'credit',
          cardNumber: '**** **** **** 1234',
          cardName: 'JOÃO SILVA',
          installments: 3
        },
        shippingMethod: {
          name: 'Entrega Expressa',
          description: '2-3 dias úteis',
          price: 29.99
        },
        tracking: {
          code: 'BR123456789SP',
          status: 'preparando',
          estimatedDelivery: '25/01/2024',
          steps: [
            { status: 'completed', title: 'Pedido confirmado', date: '20/01/2024 14:30' },
            { status: 'completed', title: 'Pagamento aprovado', date: '20/01/2024 14:32' },
            { status: 'current', title: 'Preparando pedido', date: '20/01/2024 15:00' },
            { status: 'pending', title: 'Enviado', date: null },
            { status: 'pending', title: 'Em trânsito', date: null },
            { status: 'pending', title: 'Entregue', date: null }
          ]
        }
      }
      
      setOrderData(mockOrderData)
      setIsLoading(false)
    }

    loadOrderData()
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ConfirmationHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <svg className="animate-spin h-12 w-12 text-primary-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-gray-600">Carregando detalhes do pedido...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ConfirmationHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Pedido não encontrado</h1>
            <p className="text-gray-600 mb-8">Não foi possível encontrar os detalhes do pedido.</p>
            <a href="/" className="btn-primary">
              Voltar ao início
            </a>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ConfirmationHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da confirmação */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pedido Confirmado!</h1>
          <p className="text-lg text-gray-600">
            Número do pedido: <span className="font-semibold text-primary-600">{orderData.orderNumber}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Realizado em {orderData.orderDate}
          </p>
        </div>

        {/* Grid de informações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-8">
            <OrderDetails order={orderData} />
            <ShippingInfo shipping={orderData.shippingAddress} method={orderData.shippingMethod} />
            <PaymentInfo payment={orderData.paymentMethod} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <TrackingInfo tracking={orderData.tracking} />
            <ActionButtons orderNumber={orderData.orderNumber} />
          </div>
        </div>
      </main>
    </div>
  )
}
