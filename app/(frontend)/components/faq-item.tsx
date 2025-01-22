import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

type Props = {
  question: string;
  answer: {
    text: string;
    examples: string[];
  };
};

export const FaqItem = ({ question, answer }: Props) => {
  return (
    <Collapsible className='text-center'>
      <CollapsibleTrigger className='text-2xl w-full font-semibold p-2 border'>
        {question}
      </CollapsibleTrigger>
      <CollapsibleContent className='py-4 bg-slate-200 text-xl'>
        {answer.text}
        <ul className=''>
          {answer.examples.map((answer, i) => (
            <li key={answer} className='text-stone-700'>
              {i + 1}. {answer}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};
