import { useEffect, useState } from 'react'

const useEventKeyListenser = () => {
  
  const [modeListener, setModeListener] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'm'){
        e.preventDefault();
        setModeListener(prev => !prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, [])

  return { modeListener }
}

export default useEventKeyListenser
