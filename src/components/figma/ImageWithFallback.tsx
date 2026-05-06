import React, { useEffect, useRef, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean
  rootMargin?: string
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isInView, setIsInView] = useState(Boolean(props.priority))
  const imgRef = useRef<HTMLImageElement>(null)

  const {
    src,
    alt,
    style,
    className,
    priority = false,
    rootMargin = '300px',
    loading,
    decoding,
    fetchPriority,
    onError,
    ...rest
  } = props

  useEffect(() => {
    if (priority || !src) {
      setIsInView(true)
      return
    }

    const node = imgRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [priority, rootMargin, src])

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(event)
    setDidError(true)
  }

  const resolvedLoading = loading ?? (priority ? 'eager' : 'lazy')
  const resolvedDecoding = decoding ?? 'async'
  const resolvedFetchPriority = fetchPriority ?? (priority ? 'high' : 'low')
  const resolvedSrc = isInView ? src : undefined

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          loading="lazy"
          decoding="async"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      fetchPriority={resolvedFetchPriority}
      onError={handleError}
      {...rest}
    />
  )
}
