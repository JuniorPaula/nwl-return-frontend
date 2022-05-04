import { ArrowLeft } from 'phosphor-react';
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

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
