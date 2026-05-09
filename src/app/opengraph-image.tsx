import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), 'public/brand/fegan-digital-wordmark-white.png')
  )
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0d0d0c',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Wordmark */}
        <img
          src={logoSrc}
          width={280}
          height={73}
          style={{ marginBottom: '52px', objectFit: 'contain' }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.15',
            marginBottom: '20px',
            maxWidth: '860px',
          }}
        >
          AI Automation & Digital Systems
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.5',
            maxWidth: '720px',
          }}
        >
          Practical systems for small businesses in Newry, Ireland & the UK.
        </div>

        {/* Purple accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '6px',
            backgroundColor: '#6633ff',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
