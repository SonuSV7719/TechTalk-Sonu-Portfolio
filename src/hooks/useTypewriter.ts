import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000
}: TypewriterOptions) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const nextWord = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % words.length);
    setIsDeleting(false);
    setIsWaiting(false);
  }, [words.length]);

  useEffect(() => {
    if (isWaiting) return;

    const currentWord = words[selectedIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length === currentWord.length) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, delayBetweenWords);
          return;
        }
        
        setText(currentWord.slice(0, text.length + 1));
      } else {
        if (text.length === 0) {
          nextWord();
          return;
        }
        
        setText(text.slice(0, -1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    selectedIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    isWaiting,
    nextWord
  ]);

  return text;
}