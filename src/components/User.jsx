import React from 'react'

export const User = (user) => {
  return (
     <span className="user">
                <span className="name">{user.name}</span>
                <span className="handle">{user.handle}</span>
              </span>
  )
}
