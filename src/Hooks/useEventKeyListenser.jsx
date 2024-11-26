import { useEffect, useState } from 'react'

const useEventKeyListenser = () => {
  
  const [isKeyTriggered, setIsKeyTriggered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'm'){
        e.preventDefault();
        setIsKeyTriggered(prev => !prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, [])

  return { isKeyTriggered }
}

export default useEventKeyListenser
