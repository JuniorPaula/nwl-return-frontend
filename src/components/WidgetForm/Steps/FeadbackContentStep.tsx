import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeadbackType, feadbackTypes } from '..';
import { api } from '../../../lib/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../Loading';
import { ScreeshotButton } from '../ScreenshotButton';

interface FeadbackContentTypeStep {
  feadbacktype: FeadbackType;
  onFeadbackRestartRequested: () => void;
  onFeadbackSent: () => void;
}

export function FeadbackContentStep({
  feadbacktype,
  onFeadbackRestartRequested,
  onFeadbackSent,
}: FeadbackContentTypeStep) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeadback, setIsSendingFeadback] = useState(false);

  const feadbackTypeInfo = feadbackTypes[feadbacktype];

  async function handleScreenshotFeadback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeadback(true);

    await api.post('/feadback', {
      type: feadbacktype,
      comment,
      screenshot,
    });

    setIsSendingFeadback(false);

    onFeadbackSent();
  }

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

      <form className="my-4 w-full" onSubmit={handleScreenshotFeadback}>
        <textarea
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreeshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeadback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:border-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeadback ? <Loading /> : 'Enviar feadback'}
          </button>
        </footer>
      </form>
    </>
  );
}
