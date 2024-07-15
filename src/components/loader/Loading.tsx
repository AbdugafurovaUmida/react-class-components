import './Loading.css'

type Props = {
  backgroundOpacity?: number
}

export default function Loading({ backgroundOpacity }: Props) {
  return (
    <div
      className='loader-container'
      style={{
        backgroundColor: backgroundOpacity ? `rgba(255,255,255, ${backgroundOpacity})` : '#242424',
      }}
    >
      Loading...
    </div>
  )
}
