import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Check, Dumbbell, Route, X } from 'lucide-react';
import FadeInWrapper from '../app/(frontend)/components/fade-in-wrapper';
import PortraitVideoCard from '@/app/(frontend)/components/video';

type Itinerary = {
  day: string;
  activities: string[];
  destinations: string[];
};

type Props = {
  itineraries?: Itinerary[];
  inclusions?: string[];
  exclusions?: string[];
  expectations?: string[];
  thingsToBring?: string[];
  termsAndConditions?: string[];
  destinations?: string[];
  highlights?: string[];
  videoUrl?: string;
};

export const CollapsibleBox = ({
  inclusions,
  exclusions,
  expectations,
  thingsToBring,
  termsAndConditions,
  itineraries,
  destinations,
  highlights,
  videoUrl,
}: Props) => {
  return (
    <div>
      {itineraries &&
        itineraries.map((itinerary, i) => (
          <Collapsible key={itinerary.day} className='text-start'>
            <FadeInWrapper delay={i * 500}>
              <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
                <Badge variant='primary'>{itinerary.day}</Badge>
              </CollapsibleTrigger>
            </FadeInWrapper>
            <CollapsibleContent className='p-4 border'>
              <div className='flex flex-col gap-2'>
                {itinerary.activities.length > 0 && (
                  <div className='space-y-2'>
                    <span className='text-xl flex items-center font-semibold'>
                      <Dumbbell className='size-5 mr-2' /> Activities
                    </span>
                    {itinerary.activities.map((activity) => (
                      <p key={activity} className='text-slate-700 pl-2'>
                        {activity}
                      </p>
                    ))}
                  </div>
                )}
                {itinerary.destinations.length > 0 && (
                  <div className='space-y-2'>
                    <span className='text-xl flex items-center font-semibold'>
                      <Route className='size-5 mr-2' />
                      Destinations
                    </span>
                    {itinerary.destinations.map((destination) => (
                      <p key={destination} className='text-slate-700 pl-2'>
                        {destination}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      {inclusions && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Inclusions :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {inclusions.map((inc) => (
                <p key={inc} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-sky-500' />{' '}
                  <span className='flex-1'>{inc}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {destinations && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Destinations :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {destinations.map((inc) => (
                <p key={inc} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-sky-500' />{' '}
                  <span className='flex-1'>{inc}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {highlights && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Trip Highlights :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {highlights.map((inc) => (
                <p key={inc} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-sky-500' /> {inc}
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {videoUrl && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Media :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <FadeInWrapper direction='right' className='p-2 w-full'>
              <div className='mx-14'>
                <PortraitVideoCard videoUrl={videoUrl || ''} />
              </div>
            </FadeInWrapper>
          </CollapsibleContent>
        </Collapsible>
      )}
      {exclusions && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Exclusions :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {exclusions.map((item) => (
                <p key={item} className='text-slate-700 pl-2 flex items-center'>
                  <X className='size-4 mr-2 text-rose-500' />{' '}
                  <span className='flex-1'>{item}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {expectations && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Expectations :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {expectations.map((item) => (
                <p key={item} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-slate-500' />{' '}
                  <span className='flex-1'>{item}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {thingsToBring && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Things to Bring :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {thingsToBring.map((item) => (
                <p key={item} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-slate-500' />{' '}
                  <span className='flex-1'>{item}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      {termsAndConditions && (
        <Collapsible className='text-start'>
          <CollapsibleTrigger className=' flex items-center gap-2 text-xl w-full p-2 shadow-sm transition ease-in-out border'>
            <p className='text-xl font-semibold'>Terms and Conditions :</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='bg-white p-4 border'>
            <div className='flex flex-col gap-2'>
              {termsAndConditions.map((item) => (
                <p key={item} className='text-slate-700 pl-2 flex items-center'>
                  <Check className='size-4 mr-2 text-slate-500' />{' '}
                  <span className='flex-1'>{item}</span>
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};
