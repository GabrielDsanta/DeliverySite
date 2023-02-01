import { createContext, ReactNode } from 'react'

interface DeliveryContextType { }

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextType)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  return (
    <DeliveryContext.Provider value={{}}>{children}</DeliveryContext.Provider>
  )
}
