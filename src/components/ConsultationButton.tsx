import { useState } from 'react'
import ConsultationPopup from './ConsultationPopup'

interface Props {
  short?: boolean
}

export default function ConsulationButton({ short }: Props) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <ConsultationPopup isOpen={showPopup} setIsOpen={setShowPopup} />
      <button
        className="flex items-center rounded-md border px-2 text-sm font-semibold text-zinc-800 shadow dark:text-zinc-100"
        onClick={() => setShowPopup(true)}
      >
        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
        <span>
          {!short
            ? 'Accepting new clients - click to schedule a free consultation'
            : 'Click to schedule a free consultation'}
        </span>
      </button>
    </>
  )
}
