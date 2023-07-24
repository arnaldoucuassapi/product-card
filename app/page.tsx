'use client'
import Image from 'next/image'
import { Suspense, useState } from 'react'

export default function Home() {

  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
 
  function speakText() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    synth.speak(utterance);
  }

  return (
    <main>
      <Suspense fallback={'waiting'}>
          <h1>Texto para Áudio</h1>

          <input 
            onChange={(ev) => setSpeed(parseInt(ev.target.value))} 
            type="range"
            min="1" 
            max="2" 
          />

          <textarea 
            onChange={(ev) => setText(ev.target.value)} 
            placeholder="Digite o texto aqui..."
          ></textarea>
          
          <button onClick={speakText}>Ouvir</button>
      </Suspense>
    </main>
  )
}
