import ApprovalMark from './ApprovalMark'

export interface FlowStep {
  label: string
  /** Short detail under the label. Only facts already stated in the copy. */
  detail?: string
}

interface SystemFlowProps {
  steps: FlowStep[]
  /** "live" draws solid purple connectors with a travelling pulse, ending in a tick;
      "planned" draws dashed connectors for work in progress. */
  state: 'live' | 'planned'
  caption: string
  /** The surface the schematic sits on. */
  tone?: 'light' | 'dark'
  /** Hide the step details, for compact use. */
  compact?: boolean
  className?: string
}

/**
 * A schematic of how work moves through a system. Deliberately drawn as a
 * diagram (dot grid, outlined nodes), never as a product screen.
 * Horizontal when its container is at least 36rem wide, vertical otherwise.
 */
export default function SystemFlow({
  steps,
  state,
  caption,
  tone = 'dark',
  compact = false,
  className = '',
}: SystemFlowProps) {
  const planned = state === 'planned'
  const light = tone === 'light'

  const frame = light
    ? 'border-rule bg-[radial-gradient(circle,rgba(22,21,31,0.09)_1px,transparent_1.2px)]'
    : 'border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1.2px)]'
  const label = light ? 'text-ink' : 'text-white'
  const detail = light ? 'text-ink-muted' : 'text-white/60'
  const node = planned
    ? `border-dashed ${light ? 'border-accent bg-sheet' : 'border-accent-on-dark bg-pitch'}`
    : `flow-node-live border-accent ${light ? 'bg-sheet' : 'bg-pitch'}`
  const dashed = light ? 'border-accent/60' : 'border-accent-on-dark/60'

  return (
    <figure className={`@container ${className}`}>
      <div className={`rounded-xl border p-5 sm:p-6 [background-size:16px_16px] ${frame}`}>
        <ol className="grid gap-6 @xl:grid-cols-4 @xl:gap-6">
          {steps.map((step, i) => {
            const last = i === steps.length - 1
            return (
              <li key={step.label} className="flow-step relative flex items-start gap-3 @xl:flex-col @xl:gap-3">
                {last && !planned ? (
                  <span className="flow-end-glow relative z-10 flex-shrink-0">
                    <ApprovalMark className="w-5 h-5" />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full border-2 @xl:mt-0 ${node}`}
                  />
                )}

                {/* Connector to the next step: vertical when stacked, horizontal when in a row. */}
                {!last && (
                  <>
                    <span
                      aria-hidden="true"
                      data-axis="y"
                      style={{ ['--i' as string]: i }}
                      className={`absolute left-[9px] top-[1.625rem] -bottom-5 w-0.5 @xl:hidden ${
                        planned ? `border-l-2 border-dashed ${dashed}` : 'flow-live-line bg-accent/45'
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      data-axis="x"
                      style={{ ['--i' as string]: i }}
                      className={`absolute hidden @xl:block left-7 -right-5 top-[9px] h-0.5 ${
                        planned ? `border-t-2 border-dashed ${dashed}` : 'flow-live-line bg-accent/45'
                      }`}
                    />
                  </>
                )}

                <div className="min-w-0">
                  <p className={`text-[0.9375rem] font-semibold leading-snug ${label}`}>{step.label}</p>
                  {step.detail && !compact && (
                    <p className={`mt-1 text-sm leading-snug ${detail}`}>{step.detail}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className={`mt-3 text-sm ${light ? 'text-ink-muted' : 'text-white/55'}`}>{caption}</figcaption>
    </figure>
  )
}
