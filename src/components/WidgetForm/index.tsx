import { useState } from 'react';
import { CloseButton } from '../CloseButton';

import bugImage from '../assets/bug.svg';
import ideaImage from '../assets/idea.svg';
import thoughtImage from '../assets/thought.svg';

const feadbackTypes = {
  BUG: {
    title: 'Problemas',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideias',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImage,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
};

type FeadbackType = keyof typeof feadbackTypes;

export function Widgetform() {
  const [feadbackType, setFeadbackType] = useState<FeadbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-lg leading-6">Deixe seu feadback</span>
        <CloseButton />
      </header>

      {!feadbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feadbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => setFeadbackType(key as FeadbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>hello word</p>
      )}

      <footer>Never stop learn, #NLW2022</footer>
    </div>
  );
}
