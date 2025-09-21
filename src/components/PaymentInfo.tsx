'use client'

interface PaymentInfoProps {
  payment: {
    type: 'credit' | 'debit' | 'pix' | 'boleto'
    cardNumber?: string
    cardName?: string
    installments?: number
  }
}

export default function PaymentInfo({ payment }: PaymentInfoProps) {
  const getPaymentMethodName = (type: string) => {
    switch (type) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'pix':
        return 'PIX'
      case 'boleto':
        return 'Boleto Bancário'
      default:
        return 'Método de pagamento'
    }
  }

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'credit':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2"/>
            <path d="M2 10h20" strokeWidth="2"/>
            <circle cx="8" cy="14" r="1" fill="currentColor"/>
            <circle cx="12" cy="14" r="1" fill="currentColor"/>
          </svg>
        )
      case 'debit':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2"/>
            <path d="M2 10h20" strokeWidth="2"/>
            <path d="M6 14h4" strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 14h4" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'pix':
        return (
          <svg className="w-5 h-5" viewBox="0 0 640 640" fill="#32BCAD">
            <path d="M306.4 356.5C311.8 351.1 321.1 351.1 326.5 356.5L403.5 433.5C417.7 447.7 436.6 455.5 456.6 455.5L471.7 455.5L374.6 552.6C344.3 582.1 295.1 582.1 264.8 552.6L167.3 455.2L176.6 455.2C196.6 455.2 215.5 447.4 229.7 433.2L306.4 356.5zM326.5 282.9C320.1 288.4 311.9 288.5 306.4 282.9L229.7 206.2C215.5 191.1 196.6 184.2 176.6 184.2L167.3 184.2L264.7 86.8C295.1 56.5 344.3 56.5 374.6 86.8L471.8 183.9L456.6 183.9C436.6 183.9 417.7 191.7 403.5 205.9L326.5 282.9zM176.6 206.7C190.4 206.7 203.1 212.3 213.7 222.1L290.4 298.8C297.6 305.1 307 309.6 316.5 309.6C325.9 309.6 335.3 305.1 342.5 298.8L419.5 221.8C429.3 212.1 442.8 206.5 456.6 206.5L494.3 206.5L552.6 264.8C582.9 295.1 582.9 344.3 552.6 374.6L494.3 432.9L456.6 432.9C442.8 432.9 429.3 427.3 419.5 417.5L342.5 340.5C328.6 326.6 304.3 326.6 290.4 340.6L213.7 417.2C203.1 427 190.4 432.6 176.6 432.6L144.8 432.6L86.8 374.6C56.5 344.3 56.5 295.1 86.8 264.8L144.8 206.7L176.6 206.7z"/>
          </svg>
        )
      case 'boleto':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
            <path d="M7 8h10" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 12h10" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 16h6" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="17" cy="16" r="1" fill="currentColor"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações de Pagamento</h2>
      
      {/* Método de pagamento */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-primary-600">
          {getPaymentIcon(payment.type)}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            {getPaymentMethodName(payment.type)}
          </h3>
          <p className="text-sm text-gray-600">
            Pagamento aprovado
          </p>
        </div>
      </div>

      {/* Detalhes do cartão (se aplicável) */}
      {(payment.type === 'credit' || payment.type === 'debit') && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="space-y-3">
            {payment.cardNumber && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Número do cartão</p>
                <p className="text-sm font-medium text-gray-900">{payment.cardNumber}</p>
              </div>
            )}
            
            {payment.cardName && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Nome no cartão</p>
                <p className="text-sm font-medium text-gray-900">{payment.cardName}</p>
              </div>
            )}
            
            {payment.installments && payment.installments > 1 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Parcelamento</p>
                <p className="text-sm font-medium text-gray-900">
                  {payment.installments}x sem juros
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Status do pagamento */}
      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-green-800">
            Pagamento aprovado
          </span>
        </div>
        <span className="text-xs text-green-600">
          Processado com sucesso
        </span>
      </div>

      {/* Informações de segurança */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-800">
              Transação segura
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Seu pagamento foi processado com segurança usando criptografia SSL. 
              Todos os dados estão protegidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
