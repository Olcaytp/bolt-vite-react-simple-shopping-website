import React, { createContext, useState, useContext } from 'react'

type User = {
  id: string
  name: string
  email: string
  isSeller: boolean
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    // TODO: Implement actual login logic with API
    setUser({ id: '1', name: 'John Doe', email, isSeller: false })
  }

  const register = async (name: string, email: string, password: string) => {
    // TODO: Implement actual registration logic with API
    setUser({ id: '1', name, email, isSeller: false })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}