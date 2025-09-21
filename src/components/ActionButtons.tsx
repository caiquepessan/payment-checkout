'use client'

interface ActionButtonsProps {
  orderNumber: string
}

export default function ActionButtons({ orderNumber }: ActionButtonsProps) {
  const handlePrintOrder = () => {
    window.print()
  }

  const handleDownloadInvoice = () => {
    // Simular download da nota fiscal
    const element = document.createElement('a')
    const file = new Blob(['Nota Fiscal - Pedido ' + orderNumber], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `nota-fiscal-${orderNumber}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleShareOrder = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meu Pedido',
          text: `Confira meu pedido ${orderNumber}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Erro ao compartilhar:', error)
      }
    } else {
      // Fallback para navegadores que não suportam Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Ações</h2>
      
      <div className="space-y-3">
        {/* Continuar comprando */}
        <a
          href="/"
          className="w-full btn-primary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          Continuar Comprando
        </a>

        {/* Acompanhar pedido */}
        <button
          onClick={() => window.open('https://www.correios.com.br/precisa-de-ajuda/rastreamento-de-objetos', '_blank')}
          className="w-full btn-secondary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Acompanhar Pedido
        </button>

        {/* Imprimir pedido */}
        <button
          onClick={handlePrintOrder}
          className="w-full btn-secondary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir Pedido
        </button>

        {/* Baixar nota fiscal */}
        <button
          onClick={handleDownloadInvoice}
          className="w-full btn-secondary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Baixar Nota Fiscal
        </button>

        {/* Compartilhar pedido */}
        <button
          onClick={handleShareOrder}
          className="w-full btn-secondary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          Compartilhar Pedido
        </button>
      </div>

      {/* Informações de contato */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Precisa de ajuda?</h3>
        <div className="space-y-2">
          <a
            href="mailto:suporte@loja.com"
            className="flex items-center text-sm text-gray-600 hover:text-primary-600"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            suporte@loja.com
          </a>
          <a
            href="tel:+5511999999999"
            className="flex items-center text-sm text-gray-600 hover:text-primary-600"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (11) 99999-9999
          </a>
        </div>
      </div>
    </div>
  )
}
