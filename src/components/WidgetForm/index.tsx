import { useState } from 'react';
import { FeadbackTypeStep } from './Steps/FeadbackTypeStep';
import { FeadbackContentStep } from './Steps/FeadbackContentStep';
import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';

export const feadbackTypes = {
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

export type FeadbackType = keyof typeof feadbackTypes;

export function Widgetform() {
  const [feadbackType, setFeadbackType] = useState<FeadbackType | null>(null);

  function handleRestartFeadback() {
    setFeadbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feadbackType ? (
        <FeadbackTypeStep onFeadbackTypeChanged={setFeadbackType} />
      ) : (
        <FeadbackContentStep
          feadbacktype={feadbackType}
          onFeadbackRestartRequested={handleRestartFeadback}
        />
      )}

      <footer>Never stop learn, #NLW2022</footer>
    </div>
  );
}
