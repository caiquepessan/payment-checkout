'use client'

interface TrackingInfoProps {
  tracking: {
    code: string
    status: string
    estimatedDelivery: string
    steps: Array<{
      status: 'completed' | 'current' | 'pending'
      title: string
      date: string | null
    }>
  }
}

export default function TrackingInfo({ tracking }: TrackingInfoProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'current':
        return 'bg-primary-500'
      case 'pending':
        return 'bg-gray-300'
      default:
        return 'bg-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído'
      case 'current':
        return 'Em andamento'
      case 'pending':
        return 'Pendente'
      default:
        return 'Pendente'
    }
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Rastreamento</h2>
      
      {/* Código de rastreamento */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Código de rastreamento</h3>
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-50 rounded-lg p-3">
            <p className="text-sm font-mono text-gray-900">{tracking.code}</p>
          </div>
          <button 
            onClick={() => navigator.clipboard.writeText(tracking.code)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="Copiar código"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Status atual */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Status atual</h3>
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${getStatusColor(tracking.status)}`}></div>
          <span className="text-sm font-medium text-gray-900 capitalize">
            {tracking.status === 'preparando' ? 'Preparando pedido' : tracking.status}
          </span>
        </div>
      </div>

      {/* Previsão de entrega */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Previsão de entrega</h3>
        <p className="text-sm text-gray-900">
          {tracking.estimatedDelivery}
        </p>
      </div>

      {/* Timeline de rastreamento */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Acompanhamento</h3>
        <div className="space-y-4">
          {tracking.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${getStatusColor(step.status)}`}>
                  {step.status === 'completed' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {step.status === 'current' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                  {step.status === 'pending' && (
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  )}
                </div>
                {index < tracking.steps.length - 1 && (
                  <div className={`w-0.5 h-8 ml-3 ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${
                  step.status === 'completed' ? 'text-gray-900' : 
                  step.status === 'current' ? 'text-primary-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
                {step.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    {step.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Link para rastreamento */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <a
          href={`https://www.correios.com.br/precisa-de-ajuda/rastreamento-de-objetos`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Rastrear nos Correios
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
