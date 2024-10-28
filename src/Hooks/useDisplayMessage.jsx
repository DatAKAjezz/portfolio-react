import { useState, useEffect } from "react";

const useDisplayMessage = (message, delay, typeOfDisplay) => {
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [visibilityState, setVisibilityState] = useState("visible");

//   const delayAsync = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
      if (displayedMessage.length < message.length) {
        const timer = setTimeout(() => {
          setDisplayedMessage(message.slice(0, displayedMessage.length + 1));
        }, delay);
        return () => clearTimeout(timer);
      } else if (displayedMessage.length === message.length && typeOfDisplay === "intro") {
                const timer = setTimeout(() => setVisibilityState("fading"), 1500);
                return () => clearTimeout(timer);
              };

  }, [displayedMessage, message, delay, typeOfDisplay]);

  useEffect(() => {
    if (visibilityState === "fading") {
      const timer = setTimeout(() => setVisibilityState("hidden"), 1000);
      return () => clearTimeout(timer);
    }
  }, [visibilityState]);

  return { displayedMessage, visibilityState };
};

export default useDisplayMessage;
