import { useState, useCallback, useMemo } from 'react'

export interface ExpandableConfig {
  /**
   * Maximum length of the truncated text
   * @default 100
   */
  maxLength?: number
  /**
   * Custom ellipsis to show at the end of truncated text
   * @default "..."
   */
  ellipsis?: string
}

export interface ExpandableReturn {
  /** The text to display based on expanded state */
  displayText: string
  /** Whether the text is currently expanded */
  isExpanded: boolean
  /** Function to toggle the expanded state */
  toggleExpand: () => void
  /** Whether the text is long enough to be truncated */
  shouldShowMore: boolean
  /** ARIA attributes for accessibility */
  ariaAttributes: {
    role: "region"
    "aria-expanded": boolean
    "aria-label": string
  }
}

/**
 * A hook for managing expandable/collapsible text content
 * @param initialDescription - The full text content to be managed
 * @param config - Configuration options for the expandable behavior
 * @returns Object containing display text and controls
 * @throws Will throw an error if initialDescription is not a string
 */
export function useExpandableDescription(
  initialDescription: string,
  config: ExpandableConfig = {}
): ExpandableReturn {
  // Validate input
  if (typeof initialDescription !== 'string') {
    throw new TypeError('initialDescription must be a string')
  }

  // Default configuration
  const {
    maxLength = 100,
    ellipsis = '...'
  } = config

  // State for expanded/collapsed
  const [isExpanded, setIsExpanded] = useState(false)

  // Memoize whether text needs truncation
  const shouldShowMore = useMemo(() => 
    initialDescription.length > maxLength,
    [initialDescription.length, maxLength]
  )

  // Memoize the display text
  const displayText = useMemo(() => {
    if (isExpanded || !shouldShowMore) {
      return initialDescription
    }
    return `${initialDescription.slice(0, maxLength)}${ellipsis}`
  }, [initialDescription, isExpanded, shouldShowMore, maxLength, ellipsis])

  // Callback for toggling expanded state
  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  // Memoize ARIA attributes
  const ariaAttributes = useMemo(() => ({
    role: "region" as const,
    "aria-expanded": isExpanded,
    "aria-label": isExpanded ? "Show less" : "Show more"
  }), [isExpanded])

  return {
    displayText,
    isExpanded,
    toggleExpand,
    shouldShowMore,
    ariaAttributes
  }
}

