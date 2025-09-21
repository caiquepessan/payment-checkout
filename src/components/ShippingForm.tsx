'use client'

import { useState } from 'react'
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { CheckoutFormData } from '@/lib/validation'
import { states } from '@/lib/mockData'
import { formatCEP, formatPhone, fetchCEP } from '@/lib/utils'

interface ShippingFormProps {
  register: UseFormRegister<CheckoutFormData>
  errors: FieldErrors<CheckoutFormData>
  setValue: UseFormSetValue<CheckoutFormData>
  watch: UseFormWatch<CheckoutFormData>
}

export default function ShippingForm({ register, errors, setValue, watch }: ShippingFormProps) {
  const [isLoadingCEP, setIsLoadingCEP] = useState(false)
  const [cepError, setCepError] = useState('')
  const [cepSuccess, setCepSuccess] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')
  
  const currentZipCode = watch('shippingAddress.zipCode')

  const handleCEPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCEP = formatCEP(e.target.value)
    setValue('shippingAddress.zipCode', formattedCEP)
    
    const cleanCEP = formattedCEP.replace(/\D/g, '')
    
    if (cleanCEP.length === 8) {
      setIsLoadingCEP(true)
      setCepError('')
      setCepSuccess(false)
      
      try {
        const cepData = await fetchCEP(cleanCEP)
        
        if (cepData) {
          setValue('shippingAddress.address', cepData.logradouro)
          setValue('shippingAddress.city', cepData.localidade)
          setValue('shippingAddress.state', cepData.uf)
          setValue('shippingAddress.country', 'Brasil')
          setCepSuccess(true)
        } else {
          setCepError('CEP não encontrado')
          setCepSuccess(false)
        }
      } catch (error) {
        setCepError('Erro ao buscar CEP')
        setCepSuccess(false)
      } finally {
        setIsLoadingCEP(false)
      }
    } else {
      setCepSuccess(false)
      setCepError('')
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value)
    setPhoneValue(formattedPhone)
    setValue('shippingAddress.phone', formattedPhone)
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações de Entrega</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="firstName"
            className={`input-field ${errors.shippingAddress?.firstName ? 'input-error' : ''}`}
            placeholder="Seu nome"
            {...register('shippingAddress.firstName')}
          />
          {errors.shippingAddress?.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.firstName.message}</p>
          )}
        </div>

        {/* Sobrenome */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Sobrenome *
          </label>
          <input
            type="text"
            id="lastName"
            className={`input-field ${errors.shippingAddress?.lastName ? 'input-error' : ''}`}
            placeholder="Seu sobrenome"
            {...register('shippingAddress.lastName')}
          />
          {errors.shippingAddress?.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className={`input-field ${errors.shippingAddress?.email ? 'input-error' : ''}`}
            placeholder="seu@email.com"
            {...register('shippingAddress.email')}
          />
          {errors.shippingAddress?.email && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.email.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            className={`input-field ${errors.shippingAddress?.phone ? 'input-error' : ''}`}
            placeholder="(11) 99999-9999"
            value={phoneValue}
            onChange={handlePhoneChange}
            maxLength={15}
          />
          {errors.shippingAddress?.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.phone.message}</p>
          )}
        </div>

        {/* CEP */}
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
            CEP *
          </label>
          <div className="relative">
            <input
              type="text"
              id="zipCode"
              className={`input-field pr-10 ${errors.shippingAddress?.zipCode || cepError ? 'input-error' : ''}`}
              placeholder="00000-000"
              value={currentZipCode || ''}
              onChange={handleCEPChange}
              maxLength={9}
            />
            {isLoadingCEP && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="animate-spin h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
            {cepSuccess && !isLoadingCEP && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          {errors.shippingAddress?.zipCode && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.zipCode.message}</p>
          )}
          {cepError && (
            <p className="mt-1 text-sm text-red-600">{cepError}</p>
          )}
          {cepSuccess && (
            <p className="mt-1 text-sm text-green-600">
              ✓ CEP encontrado! Rua, cidade e estado preenchidos automaticamente.
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Digite apenas números. A rua será preenchida automaticamente.
          </p>
        </div>

        {/* Endereço */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Endereço *
          </label>
          <input
            type="text"
            id="address"
            className={`input-field ${errors.shippingAddress?.address ? 'input-error' : ''}`}
            placeholder="Rua, avenida, etc. (preenchido automaticamente)"
            {...register('shippingAddress.address')}
          />
          {errors.shippingAddress?.address && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.address.message}</p>
          )}
        </div>

        {/* Número e Complemento */}
        <div>
          <label htmlFor="addressNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Número e Complemento *
          </label>
          <input
            type="text"
            id="addressNumber"
            className={`input-field ${errors.shippingAddress?.addressNumber ? 'input-error' : ''}`}
            placeholder="Ex: 123, apto 45"
            {...register('shippingAddress.addressNumber')}
          />
          {errors.shippingAddress?.addressNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.addressNumber.message}</p>
          )}
        </div>

        {/* Cidade */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            Cidade *
          </label>
          <input
            type="text"
            id="city"
            className={`input-field ${errors.shippingAddress?.city ? 'input-error' : ''}`}
            placeholder="Cidade (preenchida automaticamente)"
            {...register('shippingAddress.city')}
          />
          {errors.shippingAddress?.city && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.city.message}</p>
          )}
        </div>

        {/* Estado */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            Estado *
          </label>
          <select
            id="state"
            className={`input-field ${errors.shippingAddress?.state ? 'input-error' : ''}`}
            {...register('shippingAddress.state')}
          >
            <option value="">Estado (preenchido automaticamente)</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.shippingAddress?.state && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.state.message}</p>
          )}
        </div>

        {/* País */}
        <div className="md:col-span-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            País *
          </label>
          <input
            type="text"
            id="country"
            className={`input-field ${errors.shippingAddress?.country ? 'input-error' : ''}`}
            placeholder="Brasil"
            defaultValue="Brasil"
            {...register('shippingAddress.country')}
          />
          {errors.shippingAddress?.country && (
            <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.country.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}
