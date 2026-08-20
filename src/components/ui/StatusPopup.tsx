'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { LaptopIcon, ThumbsUpIcon, WarningIcon } from '@phosphor-icons/react'

interface StatusPopupProps {
  open: boolean
  onClose: () => void
  status?: 'success' | 'error'
  title: string
  message: string
  autoCloseMs?: number
}

const PATH = 'M34 50 C90 26, 150 26, 206 50'

// Shared cadence for the whole choreography: the message departs at TRAVEL_BEGIN,
// covers the path over TRAVEL_DUR, and arrives (or stalls) at ARRIVE — all of it
// repeats on that same TRAVEL_DUR cadence for as long as the popup stays open.
const TRAVEL_DUR = '2.2s'
const TRAVEL_BEGIN = '0.5s'
const ARRIVE = '1.93s'

/**
 * A client → hub reveal, told with the same technique as the hero's network
 * map (a dashed connection + an animateMotion dot). The line fades in once,
 * then the message travels on a continuous loop — on success arriving to a
 * burst + thumbs-up from the Kochi hub, on error stalling partway with a
 * warning shake — repeating for as long as the popup is open.
 */
function SignalDiagram({ status }: { status: 'success' | 'error' }) {
  const ok = status === 'success'
  const accent = ok ? '#00B8A9' : '#F87171'
  const accentDim = ok ? 'rgba(0,184,169,0.3)' : 'rgba(248,113,113,0.3)'
  const dotKeyPoints = ok ? '0;0;1;1' : '0;0;0.5;0.5'

  return (
    <div className="relative w-[240px] h-[92px] mx-auto">
      <svg width="240" height="92" viewBox="0 0 240 92" fill="none" className="absolute inset-0" aria-hidden="true">
        <path d={PATH} stroke={accentDim} strokeWidth="1.4" strokeDasharray="4,4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.05s" fill="freeze" />
        </path>

        {/* The message: travels on a loop, arriving (or stalling) in sync with the hub's reaction each cycle. */}
        <circle r="4" fill={accent} opacity="0">
          <animateMotion
            dur={TRAVEL_DUR}
            begin={TRAVEL_BEGIN}
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints={dotKeyPoints}
            keyTimes="0;0.05;0.65;1"
            path={PATH}
          />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.82;1" dur={TRAVEL_DUR} begin={TRAVEL_BEGIN} repeatCount="indefinite" />
        </circle>

        {ok ? (
          /* Arrival burst, recurring each cycle */
          <circle cx="206" cy="46" r="4" fill="none" stroke={accent} strokeWidth="2">
            <animate attributeName="r" values="4;28;28" keyTimes="0;0.5;1" dur={TRAVEL_DUR} begin={ARRIVE} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;0;0" keyTimes="0;0.5;1" dur={TRAVEL_DUR} begin={ARRIVE} repeatCount="indefinite" />
          </circle>
        ) : (
          /* Stall spark where the message drops, recurring each cycle */
          <circle cx="120" cy="34" r="0" fill="none" stroke={accent} strokeWidth="1.5">
            <animate attributeName="r" values="0;13;13" keyTimes="0;0.4;1" dur={TRAVEL_DUR} begin={ARRIVE} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0" keyTimes="0;0.4;1" dur={TRAVEL_DUR} begin={ARRIVE} repeatCount="indefinite" />
          </circle>
        )}

        {/* Hub ambient pulse — loops softly for as long as the popup is open */}
        <circle cx="206" cy="46" r="19" fill={ok ? 'rgba(0,184,169,0.10)' : 'rgba(248,113,113,0.08)'} stroke={accentDim} strokeWidth="1">
          <animate attributeName="r" values="19;25;19" dur="2.4s" begin={ARRIVE} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" begin={ARRIVE} repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Client node */}
      <div
        className={`absolute w-9 h-9 rounded-full border flex items-center justify-center ${ok ? 'bg-blue-light/15 border-blue-light/40' : 'bg-red-400/15 border-red-400/40'}`}
        style={{ left: 34, top: 50, transform: 'translate(-50%, -50%)' }}
      >
        <LaptopIcon size={16} weight="fill" className={ok ? 'text-blue-light' : 'text-red-300'} />
      </div>

      {/* Hub node — reacts once the message arrives (or fails to) */}
      <div
        className={`absolute w-12 h-12 rounded-full flex items-center justify-center ${ok ? 'bg-teal status-icon-bump' : 'bg-red-500 status-icon-shake'}`}
        style={{ left: 206, top: 46, boxShadow: ok ? '0 0 22px rgba(0,184,169,0.5)' : '0 0 22px rgba(239,68,68,0.4)' }}
      >
        {ok ? (
          <ThumbsUpIcon size={20} weight="fill" className="text-white" />
        ) : (
          <WarningIcon size={20} weight="fill" className="text-white" />
        )}
      </div>
    </div>
  )
}

export default function StatusPopup({ open, onClose, status = 'success', title, message, autoCloseMs = 6000 }: StatusPopupProps) {
  useEffect(() => {
    if (!open) return
    const timer = setTimeout(onClose, autoCloseMs)
    return () => clearTimeout(timer)
  }, [open, autoCloseMs, onClose])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // `open` only ever flips to true from a client-side event (form submit), so by the
  // time this is true we're guaranteed to be past hydration and `document` exists —
  // no need for a mount-detection effect just to guard the portal call.
  if (!open || typeof document === 'undefined') return null

  const ok = status === 'success'
  const accentFrom = ok ? 'from-teal' : 'from-red-500'
  const accentTo = ok ? 'to-blue-light' : 'to-orange-400'

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm success-backdrop-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="alert"
        aria-live="polite"
        className="relative w-full max-w-[380px] rounded-2xl border border-white/10 bg-gradient-to-br from-navy to-navy-mid shadow-2xl overflow-hidden success-popup-in"
      >
        {/* Top accent bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />

        {/* Glow orbs, same technique as the hero's .orb elements */}
        <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none ${ok ? 'bg-blue-light/20' : 'bg-red-500/15'}`} />
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none ${ok ? 'bg-teal/20' : 'bg-orange-400/15'}`} />
        {/* Faint grid, same technique as .hero__grid */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-6 z-10 text-white/40 hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative pt-6 pb-6 px-6 flex flex-col items-center text-center">
          <SignalDiagram status={status} />
          <p className="mt-3 text-white font-700 text-[16px] success-text-in" style={{ animationDelay: '0.15s' }}>
            {title}
          </p>
          <p className="mt-1.5 text-white/60 text-sm leading-relaxed max-w-[280px] success-text-in" style={{ animationDelay: '0.25s' }}>
            {message}
          </p>
        </div>

        {/* Auto-close progress bar — CSS-driven so it always restarts cleanly on remount */}
        <div className="relative h-[3px] w-full bg-white/10">
          <div
            className={`h-full bg-gradient-to-r ${accentFrom} ${accentTo} success-progress`}
            style={{ animationDuration: `${autoCloseMs}ms` }}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
