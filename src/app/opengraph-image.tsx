import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Fegan Digital: AI Automation and Digital Systems'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), 'public/brand/fegan-digital-wordmark-white-purple.png')
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
          // The same soft purple glow used behind the site's dark sections.
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(102,51,255,0.38), rgba(102,51,255,0) 55%), radial-gradient(circle at 5% 100%, rgba(102,51,255,0.2), rgba(102,51,255,0) 45%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* The original white + purple wordmark (1576 × 408). next/image is not supported inside ImageResponse. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={300}
          height={78}
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
          AI Automation and Digital Systems
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '1.5',
            maxWidth: '760px',
          }}
        >
          Practical systems for businesses and organisations. Based in Newry, serving Ireland and the UK.
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
