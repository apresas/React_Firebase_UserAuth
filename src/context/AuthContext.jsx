import React from 'react'

const AuthContext = React.createContext()


export default function AuthProvided({children}) {
  return (
<AuthContext.Provider>
    {children}
</AuthContext.Provider>
  )
}
