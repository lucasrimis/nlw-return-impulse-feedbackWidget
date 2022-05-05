import { FeebackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeebackTypeStepProps {
  onFeedbackTypeChanged: (type: FeebackType) => void;
}


export function FeebackTypeStep({ onFeedbackTypeChanged }: FeebackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
          <button 
            key={ key } 
            type='button' 
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-500 focus:border-violet-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeebackType)}
          >
            <img src={value.image.source} alt={value.image.alt}/>
            <span>{value.title}</span>
          </button>
          );
        }) }
      </div>
    </>
  );
}