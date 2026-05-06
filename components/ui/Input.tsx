// components/ui/Input.tsx

'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react'

/**
 * Input Component
 * 
 * Floating label input field with validation states
 * 
 * Props:
 * @param label - Input label text
 * @param error - Error message to display
 * @param multiline - Render as textarea
 * 
 * Features:
 * - Floating label animation
 * - Focus states with gold accent
 * - Error state styling
 * - Accessible form field
 */

interface BaseInputProps {
  label: string
  error?: string
  multiline?: boolean
}

type InputProps = BaseInputProps & InputHTMLAttributes<HTMLInputElement>
type TextareaProps = BaseInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Input({ 
  label, 
  error, 
  multiline = false,
  ...props 
}: InputProps | TextareaProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: any) => {
    setHasValue(e.target.value.length > 0)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  const baseClasses = `
    w-full px-4 py-3 
    bg-white/5 border border-white/10 rounded-lg
    text-white placeholder-transparent
    focus:outline-none focus:border-kinertic-gold focus:ring-1 focus:ring-kinertic-gold
    transition-all duration-300
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
  `

  const labelClasses = `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${focused || hasValue 
      ? 'top-1 text-xs text-kinertic-gold' 
      : 'top-3 text-base text-gray-400'
    }
  `

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${baseClasses} min-h-[120px] resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          placeholder={label}
          rows={5}
        />
      ) : (
        <input
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
          className={baseClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          placeholder={label}
        />
      )}
      <label className={labelClasses}>
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}