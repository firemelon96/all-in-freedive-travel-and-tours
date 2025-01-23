export const tours = [
  {
    slug: '4d3n-balabac-tour-package',
    package_name: '4D3N Balabac Tour Package',
    price: 'PHP 17,000 | USD 300',
    itinerary: {
      day_1: {
        schedule: [
          {
            time: '3:00-3:30 AM',
            activity: 'Pick Up Time and travel to Buliluyan Port',
          },
          { time: '8:30-9:00 AM', activity: 'Arrival in Buliluyan' },
          {
            time: '9:30-10:00 AM',
            activity: 'Ride Speedboat/Passenger Boat to campsite',
          },
          { time: '10:30 AM', activity: 'Start of Tour' },
        ],
        destinations: [
          'Canibungan Island',
          'Manta Sandbar',
          'Candaraman Island (Campsite)',
        ],
        evening: {
          activity: 'Dinner and Rest',
        },
      },
      day_2: {
        destinations: [
          'Starfish Sandbar (Front of Candaraman Island)',
          'Onok Island',
          'Snorkeling Area',
        ],
      },
      day_3: {
        destinations: ['Canimeran', 'Patawan Island', 'Tangkahan Island'],
        evening: {
          activity: 'Back to campsite, Dinner and Rest',
        },
      },
      day_4: {
        schedule: [
          { time: '5:00-6:30 AM', activity: 'Wake Up, Pack Up, Breakfast' },
          {
            time: '7:00-7:30 AM',
            activity: 'Ride Speedboat/Passenger Boat to Buliluyan Port',
          },
          { time: '8:30-9:00 AM', activity: 'Arrival at Buliluyan Port' },
          {
            time: '2:00-3:00 PM',
            activity:
              'Arrival in Puerto Princesa (Drop Off at Hotel or Airport)',
          },
        ],
        note: 'End of Tour',
      },
    },
    reminders: [
      'There is no strict itinerary to be followed in this expedition. Itinerary depends on tide and wave conditions.',
      'Missed destinations due to weather may be included on following days if weather permits.',
    ],
    inclusions: [
      'Roundtrip Airconditioned Shared Van Transfer (PPS-Buliluyan-PPS)',
      'Roundtrip Boat Transfer',
      'Meals during Island Hopping (Breakfast-Lunch-Dinner)',
      'All Entrance Fees',
      'Day Tour only in Onok Island',
      'Accommodation (Tent Only, Campsite at Candaraman Island)',
      'Life Vest',
      'Local Tour Guide',
    ],
    exclusions: [
      'Airfare',
      'Accommodation in PPS',
      'Day 1 Breakfast (guest may eat on stopovers during travel, own expense)',
      'Day 4 Lunch and Dinner',
    ],
    expectations: [
      'This is not a luxury tour. Be prepared for a rough island life experience.',
      'Transfers during the tour are on SIC (Seat-in-Coach) basis.',
      'Van and boat companions may differ based on manifest and boat capacity.',
      'Customized and private tour rates are available upon request.',
      'Island visits are subject to weather conditions for safety.',
      'Electricity on the campsite is available only from 6 PM to 6 AM.',
      'Guests need to ride a passenger boat from Buliluyan Port to Bancalaan Island for clearances.',
    ],
    things_to_bring: [
      'Towel and toiletries',
      'Sunblock, sunscreen, and repellants',
      'Personal medicine if any',
      'Cash (No ATM on the island)',
    ],
    terms_and_conditions: [
      'Open to solo travelers, couples, barkadas, and team-building groups. Exclusive group rates available upon request.',
      'Downpayment screenshot is required for verification.',
      'Full balance must be settled 2 weeks before the tour to avoid cancellation.',
      'No-show or backout within 1 week or 3 days before the tour will forfeit downpayment and full balance.',
      'Cancellations due to Acts of God or bad weather will be refunded for tours/services not completed.',
      'The agency is not responsible for personal belongings lost or damaged.',
    ],
  },
];
