'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchema, CheckoutFormData } from '@/lib/validation'
import { mockCartItems, shippingOptions } from '@/lib/mockData'
import { formatCurrency } from '@/lib/utils'

// Components
import Header from '@/components/Header'
import ShippingForm from '@/components/ShippingForm'
import ShippingMethod from '@/components/ShippingMethod'
import PaymentMethod from '@/components/PaymentMethod'
import CartSummary from '@/components/CartSummary'
import CheckoutButton from '@/components/CheckoutButton'
import SuccessModal from '@/components/SuccessModal'

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      shippingMethod: 'standard',
      paymentMethod: {
        type: 'credit'
      }
    }
  })

  const selectedShippingMethod = watch('shippingMethod')
  const selectedShipping = shippingOptions.find(option => option.id === selectedShippingMethod)

  // Calcular totais
  const subtotal = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = selectedShipping?.price || 0
  const tax = subtotal * 0.1 // 10% de imposto
  const total = subtotal + shipping + tax

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true)
    
    try {
      // Simular processamento do pagamento
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Gerar número do pedido
      const newOrderNumber = `PED-${Date.now().toString().slice(-6)}`
      setOrderNumber(newOrderNumber)
      
      // Mostrar modal de sucesso
      setShowSuccessModal(true)
      
      console.log('Dados do checkout:', data)
      console.log('Total:', total)
      
    } catch (error) {
      console.error('Erro no checkout:', error)
      alert('Erro ao processar o pagamento. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCheckout = () => {
    handleSubmit(onSubmit)()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário Principal */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Informações de Entrega */}
              <ShippingForm register={register} errors={errors} setValue={setValue} watch={watch} />
              
              {/* Método de Entrega */}
              <ShippingMethod register={register} watch={watch} />
              
              {/* Método de Pagamento */}
              <PaymentMethod register={register} watch={watch} setValue={setValue} />
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CartSummary
                items={mockCartItems}
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
              
              <div className="mt-6">
                <CheckoutButton
                  total={total}
                  onCheckout={handleCheckout}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal de Sucesso */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        orderNumber={orderNumber}
        total={total}
      />
    </div>
  )
}
