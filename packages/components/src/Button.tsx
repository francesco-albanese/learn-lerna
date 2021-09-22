import React from 'react';

export default function Button(props: {onClick: () => void}) {
  return (
    <button {...props}>Click!</button>
  )
}