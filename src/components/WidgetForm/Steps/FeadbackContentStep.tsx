import { ArrowLeft, Camera } from 'phosphor-react';
import { FeadbackType, feadbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeadbackContentTypeStep {
  feadbacktype: FeadbackType;
  onFeadbackRestartRequested: () => void;
}

export function FeadbackContentStep({
  feadbacktype,
  onFeadbackRestartRequested,
}: FeadbackContentTypeStep) {
  const feadbackTypeInfo = feadbackTypes[feadbacktype];

  return (
    <>
      <header>
        <button
          onClick={onFeadbackRestartRequested}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-lg leading-6 flex items-center gap-2">
          <img
            src={feadbackTypeInfo.image.source}
            alt={feadbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feadbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:border-brand-500"
          >
            <Camera className="w-6 h-6" />
          </button>

          <button
            type="button"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:border-brand-500 transition-colors"
          >
            Enviar feadback
          </button>
        </footer>
      </form>
    </>
  );
}
