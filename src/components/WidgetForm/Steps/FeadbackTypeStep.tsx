import { FeadbackType, feadbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeadbackTypeStepProps {
  onFeadbackTypeChanged: (type: FeadbackType) => void;
}

export function FeadbackTypeStep({
  onFeadbackTypeChanged,
}: FeadbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-lg leading-6">Deixe seu feadback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feadbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeadbackTypeChanged(key as FeadbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
