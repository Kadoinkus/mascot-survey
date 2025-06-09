import { describe, it, expect, beforeEach } from 'vitest'
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.jsx'

// Ensure a clean DOM for each test
beforeEach(() => {
  window.localStorage.clear()
})

describe('language preference persistence', () => {
  it('saves selected language to localStorage', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)

    act(() => {
      root.render(<App />)
    })

    // Default should be nl
    expect(window.localStorage.getItem('lang')).toBe('nl')

    const englishBtn = container.querySelector('img[alt="English"]').closest('button')
    act(() => {
      englishBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
    })

    expect(window.localStorage.getItem('lang')).toBe('en')
    root.unmount()
  })
})
