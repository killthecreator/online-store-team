export interface Data {
  name: string;
  brand: Brand;
  category: Category;
  description: string;
  amount: number;
  price: number;
  photos: string[];
}

type Brand =
  | "Novation"
  | "Moog"
  | "Korg"
  | "Roland"
  | "Yamaha"
  | "DW"
  | "Tama"
  | "Ludwig"
  | "Pearl"
  | "Mapex"
  | "Schecter"
  | "Jackson"
  | "Fender"
  | "Gibson"
  | "Ibanez"
  | "B.C.Rich"
  | "Epiphone"
  | "AKG"
  | "Shure"
  | "Rode"
  | "Sennheiser"
  | "Neumann";
type Category = "guitars" | "basses" | "drums" | "keyboards" | "microphones";

export const data: Data[] = [
  {
    name: "Fender Player Stratocaster",
    brand: "Fender",
    category: "guitars",
    description: `Get classic Strat sound with modern updates in a special finish.\n
    Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice.\n\n
    This limited-edition Player Series Stratocaster comes in a special black finish with black pickguard and puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a modern neck profile, medium-jumbo frets and a freshly redesigned 2-point fulcrum vibrato bridge.`,
    amount: 5,
    price: 1049,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Player-Plus-Meteora-HH-Maple-Fingerboard-Electric-Guitar-Silver-Burst/L91740000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L91740000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L46833000001000-05-500x500.jpg",
    ],
  },
  {
    name: "Fender Player Plus Meteora",
    brand: "Fender",
    category: "guitars",
    description: `Stand out with advanced features and distinct Fender style.\n
    The Fender Meteora started life as what would have been a limited-run entry in their Alternate Reality series. When it sold out almost immediately, Fender looked at the fresh-from-scratch, space-age body design and realized that this was a guitar that was more than just a temporary fantasia. Armed with that original design and bursting with fresh ideas, Fender created the Player Plus Meteora. Loaded with a newly designed humbucker, the Fireball, and sharing a range of the playability features for which the Player Plus series has become known, the Player Plus Meteora looks like a future that we've all been waiting for. `,
    amount: 5,
    price: 1199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Player-Plus-Meteora-HH-Maple-Fingerboard-Electric-Guitar-Silver-Burst/L91740000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L91740000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L91740000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Fender Troy Van Leeuwen",
    brand: "Fender",
    category: "guitars",
    description: `Distinctive color combo and versatile electronics make this signature model stand out.\n
    Well back into the 1990s and right up to this day, Troy Van Leeuwen has contributed deftly textural guitar work and atmospherics to some of alt-heavy rock's most acclaimed and forward-thinking bands. From the influential '90s alternative of Failure to A Perfect Circle, Queens of the Stone Age, Eagles of Death Metal, Puscifer and others, Van Leeuwen's multi-instrumental expertise has given great color and power to a great deal of very creative rock music.`,
    amount: 5,
    price: 1599,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Troy-Van-Leeuwen-Jazzmaster-Electric-Guitar-Oxblood/J05497000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J05497000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78562000001000-05-500x500.jpg",
    ],
  },
  {
    name: "Fender Jim Root Stratocaster",
    brand: "Fender",
    category: "guitars",
    description: `An intense signature Fender Strat designed for metal.\n
    The Fender Jim Root Stratocaster electric guitar is as unique as Slipknot's guitar maestro himself. Featuring a black mahogany body and a 25-1/2" scale maple neck with a thin "C" shape and an oversized headstock fitted with Fender Deluxe cast/sealed locking tuning machines. A smooth ebony fretboard sports 22 jumbo frets and a 12" to 16" compound radius that promotes super fast shredding. The Fender Jim Root guitar has an EMG-60 active humbucker (neck) and EMG-81 active humbucker (bridge) that let your solos roar through the crowd. A 6-saddle strings-through-body hardtail bridge adds even more sustain to the Fender Stratocaster sound. Includes a hardshell guitar case.`,
    amount: 5,
    price: 1949,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Jim-Root-Stratocaster-Electric-Guitar-Black/584384000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/584384000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88432000001000-05-500x500.jpg",
    ],
  },
  {
    name: "Fender American Professional",
    brand: "Fender",
    category: "guitars",
    description: `Upgraded from headstock to strap button, the American Professional II Strat\n
    Since its debut in 1954, the Stratocaster has undergone constant refinement to meet the needs and desires of the working guitarist. The American Professional II Strat may be one of the most complete evolutions of this time-tested, player-proven guitar yet.\n
    Bringing touches previously reserved for Custom Shop instruments to a production guitar makes this a very special player. The lightweight alder rings beautifully, building the tonal foundation for the instrument. With a smoothly rolled fingerboard edge, sculpted neck heel and a satin neck finish that feels almost naked, it's an incredibly comfortable guitar to play.`,
    amount: 5,
    price: 1699,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/American-Professional-II-Stratocaster-Maple-Fingerboard-Left-Handed-Electric-Guitar-Mercury/L78018000003000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78018000003000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78018000003000-05-500x500.jpg",
    ],
  },
  {
    name: "Gibson Lzzy Hale",
    brand: "Gibson",
    category: "guitars",
    description: `Powerhouse looks and sound with a pair of 70s Tribute pickups.\n
    The Gibson Lzzy Hale Signature Explorerbird electric guitar is a hard-rocking, eye-catching instrument that is built for heavy music. Lzzy Hale, first female brand ambassador for Gibson, is known for her explosive live performances with her band Halestorm. Her new Explorerbird combines the body shape of the classic Explorer and a Non-Reverse Firebird headstock into an artist model that is sure to turn heads and excite audiences. It has a mahogany body paired with a SlimTaper mahogany neck and Indian rosewood fingerboard. The cardinal red nitrocellulose lacquer finish is complimented by gold hardware and frets, as well as gold screws and rods on the powerful 70s Tribute pickups.`,
    amount: 5,
    price: 2799,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Lzzy-Hale-Signature-Explorerbird-Electric-Guitar-Cardinal-Red/L94413000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L94413000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L94413000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Gibson Dave Mustaine Flying V",
    brand: "Gibson",
    category: "guitars",
    description: `The signature power and sound of Dave Mustaine in a dynamic design.\n
    The Gibson Dave Mustaine Flying V EXP electric guitar delivers the powerful, heavy sound and exceptional playing performance that is signature of Mustaine—legendary guitarist, vocalist, songwriter and founder of the multi-platinum selling and Grammy Award-winning band, Megadeth. His new Gibson Flying V EXP Artist model features a mahogany body, 25.5” scale mahogany neck with a compound radius, and ebony fingerboard with 24 medium-jumbo frets and mother-of-pearl “teeth” inlays. Kick your sound up a notch with the dual Dave Mustaine Signature Seymour Duncan Thrash Factor humbucking pickups, as well as the Tune-O-Matic bridge and stopbar tailpiece. Additional appointments include an Explorer-style headstock, Grover Mini Rotomatic tuners with Kidney buttons, a GraphTech nut and black chrome hardware. Comes with a deluxe hardshell case.`,
    amount: 5,
    price: 2799,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Dave-Mustaine-Flying-V-EXP-Electric-Guitar-Silver-Metallic/L88083000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88083000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88083000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Gibson SG Standard",
    brand: "Gibson",
    category: "guitars",
    description: `A guitar that inspired many greats.\n
    The Gibson SG Standard boasts classic looks and a full set of features associated with the desirable late-'60s style SG models. With a rounded-profile mahogany neck; bound, 22-fret rosewood fingerboard; stable, long-tenon, 19th-fret neck joint and a solid mahogany body, it delivers that iconic rock tone with singing sustain. The 490R and 490T Alnico II pickups provide the power to drive your amp to new heights, and a black, 5-ply, full-face pickguard puts this versatile classic in a category all its own.`,
    amount: 5,
    price: 1799,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/SG-Standard-Electric-Guitar-Ebony/L54573000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L54573000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L54573000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Gibson Slash Les Paul",
    brand: "Gibson",
    category: "guitars",
    description: `Solidbody electric guitar with mahogany body, AAA flame maple top, mahogany neck with rosewood fretboard and two humbuckers.\n
    The new Gibson Slash Core Collection Les Paul Standard features a “best-of” list of Slash's favorite elements from his personal stash of Paul's, both vintage and Custom Shop. It's Slash's first signature model to include pickups of his own design—SlashBuckers. Other core features include a custom neck profile, a flame maple top with a stunning finish, color-coordinated hardware and more. If you're a Slash fan (as we are), a Slash Core Collection Les Paul Standard might just become part of your own collection.`,
    amount: 5,
    price: 3199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Slash-Les-Paul-Standard-Electric-Guitar-Victoria-Gold-Top/L72812000006000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72812000006000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72812000006000-05-500x500.jpg",
    ],
  },
  {
    name: "Gibson ES-335 Figured Limited-Edition",
    brand: "Gibson",
    category: "guitars",
    description: `A classic Gibson with premium features.\n
    The Gibson Limited-Edition ES-335 Figured blends form and function with a figured maple body and top, rounded mahogany neck and stopbar tailpiece. It's equipped with Gibson's Memphis Historic Spec II (MHS II) humbucking pickups and an ABR-1 bridge. Completing this impressive model is a 22-fret rosewood fretboard and a gloss finish.`,
    amount: 5,
    price: 3999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/ES-335-Figured-Limited-Edition-Semi-Hollow-Electric-Guitar-Blueberry-Burst/L76591000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L76591000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L76591000001000-05-500x500.jpg",
    ],
  },
  {
    name: "Ibanez PIA3761 Steve Vai Signature",
    brand: "Ibanez",
    category: "guitars",
    description: `A new collaboration from Steve Vai and Ibanez with DiMarzio pickups.\n
    The Steve Vai Signature JEM has been a best seller for Ibanez and for us at Musician's Friend since it first launched over 30 years ago. Now, Steve Vai and Ibanez have developed a new signature guitar as an evolution of that original design. Three years in development, the result is the Steve Vai Signature PIA (Paradise in Art).`,
    amount: 5,
    price: 3499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/PIA3761-Steve-Vai-Signature-Electric-Guitar-Onyx/L72871000005000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72871000005000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72871000005000-04-500x500.jpg",
    ],
  },
  {
    name: "Ibanez RG550 Genesis",
    brand: "Ibanez",
    category: "guitars",
    description: `The Ibanez RG550 Genesis Collection Series - featuring a Basswood body and the acclaimed Super Wizard 5-piece Maple/Walnut neck\n
    Ibanez builds guitars for all levels of players - from beginners to the most demanding masters of the instrument. Regardless of price, Ibanez always strives to offer the absolute best sound, style, and playability in its class.
    It all started in 1987, as the debut of the Ibanez RG was a milestone in rock guitar history. With its spartan look, supreme playability and versatility due to innovative specs, the RG made a big impact then, and is still evolving today. The Ibanez Genesis Collection brings back vibe of the "good old days" with precise construction by Japanese craftsmanship, proving that this iconic guitar has always led the rock guitar scene.  `,
    amount: 5,
    price: 999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/RG550-Genesis-Collection-Electric-Guitar-Purple-Neon/K59743000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K59743000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K59743000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Ibanez Munky APEX30",
    brand: "Ibanez",
    category: "guitars",
    description: `Signature 7-String from Korn guitarist Munky with DiMarzio pickups, 3-piece maple neck and new EverTune bridge.\n
    The Ibanez Munky Signature APEX30 is a collaboration between Ibanez and Korn guitarist James “Munky” Shaffer. For nearly 20 years, Munky and Ibanez have been designing signature guitars that constantly challenged the idea of what the 7-string guitar could (and should) be. That legacy continues with the Ibanez APEX30. As a recording and performing artist in the band Korn for nearly 30 years, Munky's Ibanez signature models have adapted and evolved along with him and Korn's music. The new Ibanez APEX30 personifies that next stage in the evolution. The first Ibanez signature model to feature the Evertune tuning system, Munky's APEX30 can withstand the beating that he puts it through on stage, remaining perfectly in tune throughout the performance.`,
    amount: 5,
    price: 1599,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Munky-APEX30-Signature-7-String-Electric-Guitar-Metallic-Gray-Matte/L74777000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L74777000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L74777000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Ibanez FRM300 Paul Gilbert",
    brand: "Ibanez",
    category: "guitars",
    description: `A versatile electric designed for Paul Gilbert.\n
    The Ibanez FRM300 Paul Gilbert Signature was built in honor of the popular Mr. Big and Racer X guitarist. A tinkerer as well as a musician, Paul endlessly searches for ways to improve his instrument as a vehicle for musical ideas, and the FRM300 represents the latest version of his iconic axe. This Paul Gilbert signature is built with a 3-piece okoume/maple neck for optimal stability, an ebony fretboard with narrow and tall frets for clear tone, and an okoume body for a bright, solid sound. DiMarzio PG-13 pickups, specially wound for Paul Gilbert, offer extra clarity without losing bite and feature unique characteristics of both normal humbuckers and single coils. Additional features include a Gibraltar Performer bridge for rich sustain and a Quik Change III tailpiece for fast, easy string changes.`,
    amount: 5,
    price: 1199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/FRM300-Paul-Gilbert-Signature-Model-Electric-Guitar-Purple/L82540000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L82540000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L82540000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Ibanez RGAR42HP RGA High Performance",
    brand: "Ibanez",
    category: "guitars",
    description: `Get selected materials and high-profile electronics with this Ibanez.\n
    Ibanez guitars have become a strong name in metal guitars for their outstanding playability and performance. With selected materials and high-profile electronics and hardware, every detail is deeply considered and designed. The Ibanez High Performance series delivers high-end performance and road warrior dependability.`,
    amount: 5,
    price: 799,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/RGAR42HP-RGA-High-Performance-Electric-Guitar-Yellow-Matte/L72311000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72311000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72311000001000-03-500x500.jpg",
    ],
  },
  {
    name: "B.C. Rich Mockingbird Extreme",
    brand: "B.C.Rich",
    category: "guitars",
    description: `Dark and devilish\n
    More than a mere rock machine, the Mockingbird Extreme offers active Fluence Modern humbuckers that are versatile, featuring a multi-voice pull switch and kill switch. You can get crazy with the Floyd Rose 1000 Series locking tremolo and maintain tuning stability. `,
    amount: 5,
    price: 1499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Mockingbird-Extreme-with-Floyd-Rose-Electric-Guitar-Black-Matte/L70432000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70432000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/Mockingbird-Extreme-Exotic-with-Evertune-Bridge-Electric-Guitar-Black-Cherry/L70415000003000-00-500x500.jpg",
    ],
  },
  {
    name: "B.C. Rich Warbeast Extreme",
    brand: "B.C.Rich",
    category: "guitars",
    description: `Beastly warlock power\n
    With a body that combines the Warlock and Beast shapes, the Warbeast is an epically B.C. Rich style guitar. The ultra-in-your-face upper and lower horns from the Beast is combined with the more comfortable rear of a Warlock for an extra playable instrument that's still ridiculously aggressive in its looks. This Extreme version features growly and versatile Fishman Fluence pickups and a locking Floyd Rose tremolo system. `,
    amount: 5,
    price: 1499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Warbeast-Extreme-with-Floyd-Rose-Electric-Guitar-Black-Matte/L70272000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70272000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70272000001000-07-500x500.jpg",
    ],
  },
  {
    name: "B.C. Rich Stealth Legacy",
    brand: "B.C.Rich",
    category: "guitars",
    description: `Built for speed, delivers much more\n
    More than a mere metal machine, the Stealth Legacy offers USA-made DiMarzio humbuckers that have a wealth of heavy tones. The striking body shape is balanced and lightweight, offering everything needed to take command of the stage. `,
    amount: 5,
    price: 1299,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Stealth-Legacy-Electric-Guitar-Black/L70273000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70273000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70273000001000-03-500x500.jpg",
    ],
  },
  {
    name: "B.C. Rich Warlock Extreme Exotic",
    brand: "B.C.Rich",
    category: "guitars",
    description: `Get extreme and exotic\n
    Make a statement as bold as your sound with the B.C. Rich Warlock Extreme Exotic. It's shred-ready with a locking Floyd and Fishman Fluence pickups, plus a quilted maple top that cannot be ignored.`,
    amount: 5,
    price: 1599,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Warlock-Extreme-Exotic-with-Floyd-Rose-Electric-Guitar-Reptile-Eye/L70268000004000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70268000004000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70268000004000-03-500x500.jpg",
    ],
  },
  {
    name: "B.C. Rich Jr-V Extreme",
    brand: "B.C.Rich",
    category: "guitars",
    description: `Get a truly Extreme V\n
    Built on a classic alternative design, the JR-V looks like an arrow ready to take flight. Its active Fishman humbuckers cut through the most brutal mix and its Floyd Rose locking tremolo assures tuning stability on the deepest of dive bombs.`,
    amount: 5,
    price: 1499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Jr-V-Extreme-with-Floyd-Rose-Electric-Guitar-Black-Matte/L70271000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70271000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L70271000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Epiphone Extura Prophecy",
    brand: "Epiphone",
    category: "guitars",
    description: `Futuristic style and fantastic Fluence pickups make for a spec'd-out powerhouse for the modern player.
    The Epiphone Prophecy Extura combines the elegance of the Explorer—Gibson's radical electric solidbody from 1958—and the original Epiphone Prophecy from 2001. The Prophecy Extura puts all 24 frets within reach thanks to its modern contoured heel, making this a suitable shredder for the technically-inclined soloist.`,
    amount: 5,
    price: 899,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Extura-Prophecy-Electric-Guitar-Black-Aged-Gloss/L78220000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78220000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78220000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Epiphone Flying V Prophecy",
    brand: "Epiphone",
    category: "guitars",
    description: `An Inspired by Gibson classic Flying V with modern upgrades and Fishman pickups.\n
    A rare Gibson classic is reimagined with the Epiphone Flying V Prophecy electric guitar. With its iconic shape, this classic Inspired by Gibson model breaks tradition and sets new standards in speed, sound and technique. Front and center is a pair of custom-voiced Fishman Fluence pickups that deliver three distinct tones—a warm vintage humbucker, hot modern humbucker and a shimmering hum-free, slightly overwound single-coil sound. These three tones are all accessed by push/pull Volume and Tone pots.`,
    amount: 5,
    price: 899,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Flying-V-Prophecy-Electric-Guitar-Black-Aged-Gloss/L78218000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78218000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78218000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Epiphone SG Muse",
    brand: "Epiphone",
    category: "guitars",
    description: `Electric Guitar with Mahogany Body, Mahogany Custom C Neck, Indian Laurel Fingerboard and 2 Alnico Classic PRO Humbuckers with Coil-Split
    Though it takes its inspiration from a classic Gibson model, the Epiphone SG Muse is designed for the modern player with upgraded features and new metallic finishes. If you like a fast-playing electric guitar powered by a pair of Alnico Classic PROs and built for performance, like we do at Musician's Friend, then the Epiphone SG Muse is for you. Featuring a classic all-mahogany body and highly playable Custom C neck, the Epiphone SG Muse can help shape your sound and kick up your performance.`,
    amount: 5,
    price: 429,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/SG-Muse-Electric-Guitar-Wanderlust-Green-Metallic/L73373000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73373000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73373000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Epiphone Joan Jett Olympic Special",
    brand: "Epiphone",
    category: "guitars",
    description: `A sleek single-humbucker powerhouse based on Joan Jett's own favorite stage guitar.
    The Epiphone Joan Jett Olympic Special electric is based on the longtime favorite stage guitar of the legendary rock musician herself. A member of the Rock and Roll Hall of Fame, Joan Jett's artistic vision and pioneering spirit have inspired countless musicians of all ages worldwide. The Joan Jett Olympic Special is a lightweight, stage-ready powerhouse with all the essentials you need for unstoppable rock tone. It features a mahogany body and mahogany neck in a custom Olympic Special profile, topped with an Indian laurel fingerboard with 22 frets and dot inlays. Its sound is driven by a single PowerHammer PRO humbucker wired to a single CTS volume potentiometer, with a Speed-style volume knob and on/off toggle switch for “kill switch” functionality. `,
    amount: 5,
    price: 549,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Joan-Jett-Olympic-Special-Electric-Guitar-Worn-White/L88188000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88188000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88188000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Epiphone Joe Bonamassa 1962 ES-335",
    brand: "Epiphone",
    category: "guitars",
    description: `A meticulous replica of a beloved instrument, with Gibson Burstbucker 2 and 3 pickups.
    The Epiphone Joe Bonamassa 1962 ES-335 semi-hollow electric guitar is a tribute to a legendary guitarist and one of his cherished instruments. In 1996, Bonamassa purchased a red 1962 Gibson ES-335 and used it on his first solo album, A New Day Yesterday. In 2001, he sold the guitar to help fund his move to L.A, but as the 20th anniversary of Bonamassa's first record approached, a strange twist of fate and an unexpected phone call resulted in him being reunited with his old friend—that same red ES-335 that propelled him through his first solo effort and launched him into a new life on the West Coast.`,
    amount: 5,
    price: 1299,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Joe-Bonamassa-1962-ES-335-Semi-Hollow-Electric-Guitar-Sixties-Cherry/L96526000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L96526000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L96526000001000-04-500x500.jpg",
    ],
  },
  {
    name: "Fender Player Plus Meteora",
    brand: "Fender",
    category: "basses",
    description: `Discover classic Fender style and advanced features to spark your creativity and stand out from the crowd.
    Fender legacy instruments are legendary and ubiquitous, but the Fender design team is also committed to style rethinks, surprises and inspired wackiness—as evidenced by its Parallel Universe and Alternate Reality series. The space-age Meteora first appeared as a limited-edition Parallel Universe guitar in 2018, debuted as an even more exclusive Custom Shop version in 2020 and is now alighting for all as the Fender Player Plus Meteora line—which for the very first time includes a bass. The Player Plus Meteora active bass is armed with Fireball humbuckers that offer a galaxy of tones. Also equipped with 3-band EQ, a HiMass bridge and unfettered access to high frets, you can really light up the sky with the Player Plus Meteora bass.`,
    amount: 5,
    price: 1199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Player-Plus-Meteora-Bass-With-Pau-Ferro-Fingerboard-Opal-Spark/L89776000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L89776000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L89776000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Fender Player Plus Jazz Bass",
    brand: "Fender",
    category: "basses",
    description: `5-string Jazz Bass with dual single-coil pickups.\n
    We've been really excited by the Fender's Player Plus Series. The concept of taking the popular Player Series and adding features from some of their top-tier USA-built guitars is, we think, genius. The Fender Player Plus Jazz Bass V takes advantages of some of these premium features to create an instrument that we think you'll love, whether you're a touring pro, a serious enthusiast or just someone who wants a great bass to play. With Fender's latest generation noiseless pickups, a 3-band active EQ, and other premium touches, the Player Plus Jazz Bass is a great choice for players who care about their sound.`,
    amount: 5,
    price: 1249,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Player-Plus-Jazz-Bass-V-Pau-Ferro-Fingerboard-Tequila-Sunrise/L84321000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L84321000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L84321000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Fender Player Plus Active Precision",
    brand: "Fender",
    category: "basses",
    description: `Solidbody Electric Bass With Maple Neck and Fretboard, Two Single-Coil Pickups and 3-Band Active EQ
    The Fender Player Plus Precision Bass is an accessible update to an instrument that has stood the test of time. Since its introduction in 1951, the P Bass has been seen in the hands of players like Brian Wilson of the Beach Boys, Sting, Duff McKagan from Guns N’ Roses and Stax Records great Donald "Duck" Dunn. We love the Precision for the same reasons they do—the warm, unmistakable sound lays a solid foundation like no other. The Player Plus P Bass adds pro-level features like Noiseless pickups, rolled fingerboard edges and a 3-band active EQ. There's more than meets the eye on this bass, though. Keep reading to discover why we're pumped about the Player Plus. `,
    amount: 5,
    price: 1149,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Player-Plus-Active-Precision-Bass-Maple-Fingerboard-Cosmic-Jade/L84311000002000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L84311000002000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L84311000002000-03-500x500.jpg",
    ],
  },
  {
    name: "Fender Jaguar",
    brand: "Fender",
    category: "basses",
    description: `Elegant finish with ebony fingerboard and versatile electronics.
    Designed to highlight the legacy of Fender's beloved offset guitars, the Player Jaguar Bass brings a modern feature set to familiar body shape. The Player Jaguar Bass is loaded with a Player Series P Bass split-coil pickup and a Player Series Jazz Bass bridge pickup to satisfy the needs of any playing style. Painted in black—with a matching headcap—and outfitted with a dark ebony fretboard and black hardware, this Limited Edition Blackout Player Jaguar Bass is ready for the stage.`,
    amount: 5,
    price: 979,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Jaguar-Bass-Limited-Edition-Ebony-Fingerboard-Black/L72165000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72165000001000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L72165000001000-03-500x500.jpg",
    ],
  },
  {
    name: "Fender Player Precision",
    brand: "Fender",
    category: "basses",
    description: `Genuine Fender style and tone.
    There's nothing more classic than a Fender electric bass, and the Player Precision Bass is as authentic as it gets—genuine Fender style and the rumbling, seismic sound that spawned a thousand imitations. With its smooth playing feel and spotlight-ready style, this thunderous bass is ready to enter the studio or prowl the stage and help show the world your creative vision.
    Respecting heritage while maintaining innovative spirit, the fat, punchy Player Series split-coil Precision Bass middle pickup is packed with legendary Fender bass tone, turned up to 11 for modern ears. Master volume and tone controls are close to hand to shape the pickup's powerful voice so you can easily craft your sound.
    `,
    amount: 5,
    price: 849,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Player-Precision-Bass-Pau-Ferro-Fingerboard-Silver/L21563000006000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L21563000006000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L21563000006000-03-500x500.jpg"],
  },
  {
    name: "B.C. Rich Mockingbird Heritage Classic",
    brand: "B.C.Rich",
    category: "basses",
    description: `Neck-thru design and active pickups for impressive tone.
    The B.C. Rich Mockingbird Heritage Classic Electric Bass features neck-thru design, AAA quilted maple top and an ebony fingerboard with cloud inlays. This remarkable bass is equipped with active EQ for greater clarity and punch, one master volume, one treble, one bass and one blend control. What makes each B.C. Rich instrument instantly recognizable is its bold and unique design. This Mockingbird Heritage Classic 4-string bass is an excellent example of what happens when eye-catching looks meet powerful tone. You won't be disappointed.`,
    amount: 5,
    price: 1299,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Mockingbird-Heritage-Classic-Electric-Bass-Tobacco-Burst/L71546000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L71546000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L71546000001000-03-500x500.jpg"],
  },
  {
    name: "B.C. Rich Extreme Chris Kael",
    brand: "B.C.Rich",
    category: "basses",
    description: `A signature bass with active EMG pickups.\n
    Likes its namesake, the Warlock Extreme Chris Kael Electric Bass means business. It features a Warlock mahogany body with neck-thru-body design for extreme sustain. The neck is a 5-piece construction using maple and wenge for stability and ebony for the fingerboard. Active electronics include a set of EMG pickups in a P/J configuration EMG active EQ. It all adds up to an affordable signature bass with all the right stuff to command the stage. Case sold separately.`,
    amount: 5,
    price: 1299,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Extreme-Chris-Kael-Electric-Bass-Matte-White/L70433000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L70433000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L70433000001000-06-500x500.jpg"],
  },
  {
    name: "Ibanez AFB200",
    brand: "Ibanez",
    category: "basses",
    description: `A hollowbody for today's player with vintage looks and modern feel.
    The Artcore Bass series was designed for players that are used to solidbody basses but want the acoustic tone of a hollow body. The AFB200's 30.3" scale neck increases playing comfort, tone and natural low-end resonance while the acoustic body widens the palette of sounds at your disposal. The AFB200 features bridge and neck ACHB humbucking pickups that deliver classic tone, punch and extra output. The ART-1 wooden bridge gives the AFB200 an even more thumpin' natural acoustic sound. Its Sure Grip III knobs are designed for precise control with non-slip functionality and classic looks.`,
    amount: 5,
    price: 599,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/AFB200-Bass-Transparent-Black-Sunburst/H91422000004000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H91422000004000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H91422000004000-03-500x500.jpg"],
  },
  {
    name: "Ibanez GSRM20 Mikro Short-Scale",
    brand: "Ibanez",
    category: "basses",
    description: `Compact and comfortable.
    Having trouble fitting in? If it's because you're pierced and tattooed and attend a prepped out conservative school far from urban areas, we can't help you. If it's because you need a smaller bass for the tour bus or running scales in cramped quarters, we can. The Ibanez Mikro electric bass offers anyone who needs a compact axe or the comfort of a smaller neck (most especially young rockers) a real alternative to small bass guitars that are really only toys.`,
    amount: 5,
    price: 199,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/GSRM20-Mikro-Short-Scale-Bass-Guitar-Roadster-Orange-Metallic/516148000004000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/516148000004000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/516148000004000-01-500x500.jpg"],
  },
  {
    name: "Ibanez Mezzo SRMD200",
    brand: "Ibanez",
    category: "basses",
    description: `Full sound that fits.
    Despite inheriting the sleek and sophisticated beauty of the revolutionary SR bass, the SR Mezzo was designed to be fun to play. The SR Mezzo’s 32” medium scale allows for both easy playing and a rich low-end. The SR Mezzo’s full sonic palette will make hitting the stage a blast. No matter the style of music, the SR Mezzo fits you perfectly.`,
    amount: 5,
    price: 329,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Mezzo-SRMD200-Electric-Bass-Candy-Apple-Matte/L44911000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L44911000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L44911000001000-03-500x500.jpg"],
  },
  {
    name: "Ibanez GSR Mikro 5-String",
    brand: "Ibanez",
    category: "basses",
    description: `A bass designed for younger players or those who want a compact and comfortable instrument at an unbelievable price.
    Ibanez GSR Mikro basses offer anyone who needs a compact axe or the comfort of a smaller neck (especially young rockers) a real alternative to small basses that are really only toys. Mikros have the same warranty, high quality, and careful set-up as Ibanez's full-size SR and GSR models. The GSRM25's 28.6" scale neck is perfect for students and smaller players. GSRM25 aquires the same bridge as other full size GSRs. A sturdy B15 bridge is one feature on the well-equipped GSRM25 Mikro bass.`,
    amount: 5,
    price: 249,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/GSR-Mikro-5-String-Bass-Guitar-Black/H86345000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H86345000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H86345000001000-02-500x500.jpg"],
  },
  {
    name: "Ibanez Premium SR1605DW",
    brand: "Ibanez",
    category: "basses",
    description: `An affordable bass with a smooth neck and great-sounding electronics.
    As part of the SR Premium Series, the Ibanez Premium SR1605DW bass guitar shares many of the high-end appointments of the Prestige line. An extraordinary attention to detail manifests itself in features like super-smooth hand-crimped frets along with a Mono-rail 5S bridge for a wider intonation adjustment range and adjustable saddles for various string spacing. With an African mahogany body and elegant poplar burl top, the SR1605DW creates a solid, well-balanced tone while Aguilar DCB pickups provide developed overtones, bright sustain and smooth note decay.`,
    amount: 5,
    price: 1599,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Premium-SR1605DW-5-String-Electric-Bass-Guitar-Autumn-Sunset-Sky/L80198000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L80198000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L80198000001000-03-500x500.jpg"],
  },
  {
    name: "Ibanez EHB1005MS 5-String",
    brand: "Ibanez",
    category: "basses",
    description: `Modern design and advanced electronics for the progressive multi-scale bassist.
    The Ibanez EHB1005MS multi-scale 5-string bass features an American Basswood body and the 5-piece roasted Maple/Walnut neck for well-balanced tone and clear attack. The Roasted Maple in the neck is heat-treated to increase stability, durability, moisture resistance, and tolerance of temperature changes. The Roasted Maple fretboard is also heat-treated for a balanced attack and rich sustain. Highly durable stainless steel frets accentuate tonal brightness and will not rust. Luminescent side dot inlays provide clear visibility in dark environments and the truss rod adjustment is located at the end of neck for easy access.`,
    amount: 5,
    price: 1349,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/EHB1005MS-5-String-Multi-Scale-Ergonomic-Headless-Bass-Flat-Black/L72438000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L72438000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L72438000001000-03-500x500.jpg"],
  },
  {
    name: "Ibanez MDB5 Mike D'Antonio",
    brand: "Ibanez",
    category: "basses",
    description: `Signature bass of Killswitch Engage bassist Mike D'Antonio.
    The Ibanez MDB5 is the signature bass of Mike D'Antonio from American metal band Killswitch Engage. This electric bass features the traditional Ibanez Destroyer bass shape and D'Antonio's special fretboard inlay. Built with a 3-piece maple neck for enriched resonance, a rosewood fretboard for speedy bass lines and an okoume body for a bright and solid sound, the MDB5 bass offers a comfortable playing experience that metal players will love. Seymour Duncan SPB-1 and SJB-2b pickups produce a smooth, warm tone and a wide range of sounds, while the Accu-cast B200 series bridge provides volume and punch which can be especially felt in the low mids. An Ibanez hardshell case is also included for portable storage and protection between gigs.`,
    amount: 5,
    price: 999,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/MDB5-Mike-DAntonio-Signature-Electric-Bass-Oxblood-Weathered-Black/L90620000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L90620000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L90620000001000-03-500x500.jpg"],
  },
  {
    name: "Jackson JS Series Spectra",
    brand: "Jackson",
    category: "basses",
    description: `Classic style with active and passive electronics.
    Versatile style and enormous sound collide in the all-new JS Series Spectra Bass JS23. The brand-new offset body style was designed with the artist in mind.
    The poplar body with large upper horn evenly distributes weight throughout the instrument, providing perfect balance by reducing neck dive for hours of comfortable playing. A 12” radius bound laurel fingerboard with 24 frets sits atop the bolt-on maple neck, which features a scarf joint design and speed neck contour.`,
    amount: 5,
    price: 259,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/JS-Series-Spectra-Bass-JS23-Red-Stain/L73114000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73114000002000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73114000002000-03-500x500.jpg"],
  },
  {
    name: "Jackson JS Series Kelly Bird JS3Q",
    brand: "Jackson",
    category: "basses",
    description: `Thunderous tone with formidable looks.
    The JS Series Kelly Bird Bass truly delivers thunderous tone with formidable looks based on Jackson’s classic Kelly body style.
    The Kelly Bird JS3Q four-string bass features a 34”-scale length, a lightweight poplar body with a quilt maple top, bolt-on maple neck with graphite reinforcement and scarf joint and a 12”-16” compound radius bound amaranth fingerboard with 21 jumbo frets and pearloid block inlays.`,
    amount: 5,
    price: 399,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/JS-Series-Kelly-Bird-JS3Q-Bass-Transparent-Blue-Burst/L58296000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L58296000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L58296000001000-03-500x500.jpg"],
  },
  {
    name: "Jackson CBX IV David Ellefson",
    brand: "Jackson",
    category: "basses",
    description: `Designed for highly technical playing and versatile sound.
    Designed in conjunction with one of the founding fathers of thrash metal—highly acclaimed bassist David Ellefson of Megadeth—the X Series Signature David Ellefson Concert Bass CBX IV is a beast of a bass. Bearing his personal touches, packed with enormous Jackson sound and the hyper-fast playability required by the fleet-fingered bassist, this instrument is a force to be reckoned with.
    Redesigned ergonomic contours provide the perfect platform for launching a musical assault—the upper contour provides a comfortably stable anchor for pick or fingerstyle playing alike while the lower contour provides perfect balance when propped on a knee for monitor stands. Built for highly technical lightspeed playing, the 12”-16” compound radius laurel fingerboard flattens out as you move up the neck for increased playing comfort and speedy articulation.`,
    amount: 5,
    price: 649,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/CBX-IV-David-Ellefson-Signature-Electric-Bass-Satin-Black/L51550000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L51550000002000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L51550000002000-03-500x500.jpg"],
  },
  {
    name: "1",
    brand: "Jackson",
    category: "basses",
    description: `Durable bass made for style and tonal flexibility at an accessible price.
    With modern style, flexible tone and incomparable value, the Jackson X Series Spectra Bass SBX IV takes the adventurous player on a bold bass odyssey. The offset Spectra Bass body style was designed for the gigging musician with a poplar body and larger upper horn that evenly distributes weight throughout the instrument for perfect balance and playing comfort. The graphite-reinforced through-body maple neck creates formidable sustain, while the laurel fingerboard provides superior playability.`,
    amount: 5,
    price: 699,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/X-Series-Spectra-Bass-SBX-IV-Satin-Graphite/L73037000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73037000002000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73037000002000-03-500x500.jpg"],
  },
  {
    name: "Jackson X Series Concert",
    brand: "Jackson",
    category: "basses",
    description: `Punchy bass with no-nonsense aesthetics.
    The Jackson X Series Concert Bass CBXNT DX IV is a highly versatile bass designed for one express purpose—bringing the thunder. Upgraded electronics, classically brutal style and fast, efficient playability make this bass a fundamental force to be reckoned with. Perfect for rock or metal, this 34”-scale bass pairs a poplar body with a graphite-reinforced neck that generates formidable sustain as well as withstands aggressive playing styles. The heart of this four-string beast is a Jackson J-style bridge pickup and Jackson P-style neck pickup, mated to an active 3-band EQ circuit for adding punch, cut or rumble to your sound. A stylish chrome Jackson Bass Bacher IV string-through-body hardtail bridge enhances note attack and sustain without altering your carefully crafted tone while the sealed die-cast tuning machines keep strings in tune, no matter how hard you dig into them. Highly affordable, the CBXNT DX IV is the ideal weapon for the bassist who requires high-performance bass technology.`,
    amount: 5,
    price: 749,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/X-Series-Concert-Bass-CBXNT-DX-IV-Absynthe-Frost/L81759000003000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81759000003000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81759000003000-03-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research C-5 GT",
    brand: "Schecter",
    category: "basses",
    description: `Every guitar or bass you purchase from Musician's Friend (electric or acoustic, New or Open Box) includes two years of protection from manufacturer defects.`,
    amount: 5,
    price: 1249,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/C-5-GT-Left-handed-Satin-Trans-Purple/L84168000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L84168000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L84168000001000-03-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research Ultra",
    brand: "Schecter",
    category: "basses",
    description: `Upgraded pickups for a thick dynamic sound.
    Schecter is excited to reintroduce the Ultra Bass Series. Looking for a bass that has a unique shape and great feel with a thick dynamic sound? Then the Ultra is perfect for you. Bringing back the original Schecter Ultra body shape with upgraded EMG TBHZ pickups! This bass has the features and style you have been missing from bass arsenal!`,
    amount: 5,
    price: 1049,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Ultra-Bass-4-String-Electric-Bass-Satin-Black/L78802000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L78802000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L78802000001000-03-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research Michael Anthony",
    brand: "Schecter",
    category: "basses",
    description: `WARNING: This product can expose you to chemicals including Titanium dioxide (airborne, unbound particles of respirable size), which is known to the State of California to cause cancer, and Ethylene glycol monoethyl ether, which is known to cause birth defects or other reproductive harm. `,
    amount: 5,
    price: 1449,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Michael-Anthony-MA-5-KOA-5-String-Electric-Bass-Natural/L83577000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83577000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83577000001000-03-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research C-5 Silver Mountain",
    brand: "Schecter",
    category: "basses",
    description: `Every guitar or bass you purchase from Musician's Friend (electric or acoustic, New or Open Box) includes two years of protection from manufacturer defects.`,
    amount: 5,
    price: 1349,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/C-5-Silver-Mountain-5-String-Electric-Bass-Toxic-Venom/L84790000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L84790000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L84790000001000-05-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research Omen Elite",
    brand: "Schecter",
    category: "basses",
    description: `Smooth playability and versatile electronics at an affordable price.
    The Schecter Omen Elite-4 bass guitar offers top-notch appointments at an affordable price. Featuring a mahogany body, an ultrafast maple neck and a 16" radius rosewood fingerboard, the Elite-4 bass is designed for speed and comfortable performance regardless of playing style. Equipped with a calibrated set of Schecter Diamond Heretic J-Bucker pickups, this 4-string electric bass delivers earthshaking tone that is fully customizable with master volume, master tone and blend controls, along with a 3-way toggle that switches between series, parallel or split-coil settings. Additional features include Schecter bass tuners and a Schecter Custom bass bridge for enhanced tuning stability.`,
    amount: 5,
    price: 599,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Omen-Elite-4-4-String-Electric-Bass-Guitar-Black-Cherry-Burst/L83536000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83536000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83536000001000-03-500x500.jpg"],
  },
  {
    name: "Schecter Guitar Research Riot-4 Session",
    brand: "Schecter",
    category: "basses",
    description: `Lefty bass with active electronics.
    This stylish and affordable electric bass features an 18V active pickup system with two EMG-designed single coils. The electronics consist of a master volume and a master blend knob that mixes the relative volume of the middle and bridge pickups. There is also a three-band active rotary EQ with cut and boost controls for bass/middle/treble. The satin finish lets the swamp ash grain show though and the lines and hardware complement to the inherent stylishness of this versatile bass guitar. Lefty 4-string.`,
    amount: 5,
    price: 849,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Riot-4-Session-Left-Handed-Electric-Bass-Guitar-Satin-Aged-Natural/J05303000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J05303000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J05303000001000-03-500x500.jpg"],
  },
  {
    name: "Mapex Armory Series",
    brand: "Mapex",
    category: "drums",
    description: `Versatile hybrid maple/birch shells with an upgraded Armory series snare.
    The Armory Series by Mapex features a 6-ply birch and maple that outputs a warm, focused tone. SONIClear bearing edge allows the heads to sit flat and increase shell resonance. Mapex Saturn IV-style lugs ensure a firm tune while providing a low-mass aesthetic.
    In addition, all Armory shell packs include the 14" x 5-1/2" Tomahawk Black-Plated Steel Snare. The Tomahawk produces a bright, focused and loud backbeat and adds style to all Armory shell packs.`,
    amount: 5,
    price: 999,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Armory-Series-5-Piece-Jazz-Rock-Shell-Pack-Desert-Dune/J04249000008000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J04249000008000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J04249000008000-02-500x500.jpg"],
  },
  {
    name: "Mapex LT628S Armory",
    brand: "Mapex",
    category: "drums",
    description: `Birch/maple shell pack with 22" bass drum.
    The LT628S Armory Series is an exciting realization of the Mapex hybrid shell concept. A fusion of birch and maple delivers the ultimate tonal expression, and the SONIClear bearing edge allows the drum head to sit flat, bringing out the best response by optimizing the relationship between head and shell. The Studioease Shell Pack includes a 22x18" bass drum (no mount), 10x7" and 12x8" toms, 14x12" and 16x14" floor toms with SONIClear floor tom legs, a 14x5.5" Armory Tomahawk Steel snare and two tom mount TH800s.`,
    amount: 5,
    price: 899,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/LT628S-Armory-Series-6-Piece-Studioease-Shell-Pack-Fast-Toms-With-22-Bass-Drum-Tanzanite-Burst/L86159000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L86159000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L86159000001000-02-500x500.jpg"],
  },
  {
    name: "Mapex Mars Maple Fusion",
    brand: "Mapex",
    category: "drums",
    description: `5-piece all-maple shell pack with 20" bass drum.
    The Mars Fusion shell pack from Mapex emits buttery, classic tone transmitted through beautifully finished maple shells appointed with the SONIClear bearing edge. This allows the drumhead to sit flat, producing excellent response and a wide tuning range by optimizing the relationship between head and shell. This 5-piece maple shell pack comes with a 20" x 16" bass drum with mount, a 10" x 7" tom and 12" x 8" tom, 14" x 12" floor tom with three floor tom legs, a 14" x 5.5" matching snare and a double tom holder.`,
    amount: 5,
    price: 899,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Mars-Maple-Fusion-5-Piece-Shell-Pack-with-20-in.-Bass-Drum-Matte-Black/L98085000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98085000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98085000001000-02-500x500.jpg"],
  },
  {
    name: "Mapex Saturn Evolution Workhorse",
    brand: "Mapex",
    category: "drums",
    description: `Birch shell pack suited for any playing style.
    The revolutionary Mapex Halo Mount is a lateral, unique "under lug-line" suspension system that unlocks the freedom of full resonance and allows the drum to sing with an open, pure tone. The Adjustment Knob acts as a built-in Equalizer that can slightly dampen the resonance of the shell, producing a tighter and quicker decay. Whether you like to go dry in a jazz gig, or sound huge in a packed arena, the Saturn Evolution has the whole package for you. First introduced as a special edition in 2012, the Birch/Walnut hybrid shell has made its return to the Saturn Evolution line with Design Lab features. The new shell formula perfectly combines the sonic characteristics of walnut with articulate punch of birch, delivering a Dark, Punchy, Dry sound. The birch toms deliver clear and punchy sounds in the high register while the maple kick produces a warm, round tone in the low end. The result is a redefined sonic identity that speaks to today's music scene. Plies get progressively thicker, depths graduate by 1/2", and bearing edges change as the drums get larger in diameter. The combination of all of these details creates an amazing symphony in one kit.`,
    amount: 5,
    price: 2979,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Saturn-Evolution-Workhorse-Birch-5-Piece-Shell-Pack-with-22-in.-Bass-Drum-Polar-White/L83429000003000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83429000003000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L83429000003000-02-500x500.jpg"],
  },
  {
    name: "Mapex Saturn V Tour",
    brand: "Mapex",
    category: "drums",
    description: `The Saturn V Tour Edition honors the past while pushing forward.
    MAPEX is proud to introduce the Saturn V Tour Edition, an expansion of the existing Saturn V line. Built with the same maple/walnut hybrid shell and SONIClear™ Bearing Edge that characterize the distinctive sound of Saturn V, the Tour Edition delivers modern performance with a classic look. Rack toms possess clarity and warmth while the floor toms and bass drums produce a dense punch with deep low-end. The Tour Edition is available in four classic-style wrap finishes, perfectly suited to hold up to the rigors of the road. The one-up and one-down core configurations have been assembled for the gigging drummer, but can be easily customized to produce a wide range of set-ups by adding drums.`,
    amount: 5,
    price: 1329,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Saturn-V-Tour-3-Piece-Shell-Pack-Vintage-Sparkle/K35551000004000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K35551000004000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K35551000004000-03-500x500.jpg"],
  },
  {
    name: "Pearl Music City Custom Masters",
    brand: "Pearl",
    category: "drums",
    description: `The epitome of custom Pearl drums.
    Featuring 4-ply Maple reinforcement rings, Masters Maple Reserve is a natural choice for the most discerning musical pallet. This classic integration increases shell stability and tonal control, delivering rich, sustained lows and lively sonic punch. The MRV Series uses Premium North American Maple veneers from our exclusive Masterworks supply vault, the thin, 4-ply shell configuration (with reinforcement rings).`,
    amount: 5,
    price: 3582,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Music-City-Custom-Masters-Maple-Reserve-4-Piece-Shell-Pack-Black-Oyster-Glitter/K36989000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K36989000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K36989000001000-02-500x500.jpg"],
  },
  {
    name: "Pearl Roadshow Complete",
    brand: "Pearl",
    category: "drums",
    description: `Everything you need to drum up your rhythm.
    Every aspect of Pearl's Roadshow series drum set has been designed with one goal in mind: to make you sound better and play faster on a more reliable, higher-quality instrument. The ultimate full-sized drum kit package for the student or fusion player, the Roadshow RS525SBX comes complete with everything you need to set up and start your drumming journey. Its hardwood drum shells and tuning appointments are reinforced for better tone, and each of the included stands features double-support bracing and custom touches, common on only the most elite gear. Each Roadshow kit includes a brass cymbal set, featuring a 20" ride, 16" crash and 14" Hybrid Hats for accelerated learning and practice.`,
    amount: 5,
    price: 749,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Roadshow-Complete-5-Piece-Drum-Set-With-Hardware-and-Cymbals-Charcoal-Metallic/L98942000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98942000002000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98942000002000-02-500x500.jpg"],
  },
  {
    name: "Pearl President Series Phenolic",
    brand: "Pearl",
    category: "drums",
    description: `7th anniversary edition President Series shell pack with cases.
    Few "vintage" instruments have the rare presence of Pearl's original President Series. Introduced in 1967, the President Series was the first drum set to utilize the unique benefits of hermetically pressurized Phenolic shells. In celebration of Pearl's history of quality and craftsmanship, President Series Phenolic shells make a triumphant return in a Limited Edition, 75th Anniversary drum set. Exuding pristine vintage style with focused updated function, President Series Phenolic drums feature the tonal articulation and feel of the original with a modern-classic retool. Special appointments include the original "Battleship" lug, adjustable internal tone mufflers, classic felt bass drum muffling strip, bass drum shell-mounted cymbal holder and adjustable "Gullwing" style bass drum spurs.`,
    amount: 5,
    price: 3689,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/President-Series-Phenolic-4-Piece-Shell-Pack-with-Cases-Pearl-White-Oyster/L85822000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85822000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85822000001000-02-500x500.jpg"],
  },
  {
    name: "Pearl President Series Deluxe",
    brand: "Pearl",
    category: "drums",
    description: `Classic style shell pack with dark tone.
    Pearl President Series Deluxe drums are a modern take on a familiar favorite and a testament to Pearl's 75 years of drum quality and innovation. The President Deluxe Series Shell Pack revives the darkly unique tonality of Lauan Shells for a traditionally full, controlled playing experience. Presenting prime vintage style without the shortcomings of yesterday's fittings, President Series Deluxe features a recasting of the classic "Battleship" lug and adjustable tone mufflers on each drum. Each President Series Deluxe drum kit comes standard with Remo CS "Black Dot" UT heads, classic felt bass drum muffling strip, removable bass drum hoop-mounted cymbal holder, and adjustable "Gullwing" style bass drum spurs.`,
    amount: 5,
    price: 1599,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/President-Series-Deluxe-3-Piece-Shell-Pack-with-22-in.-Bass-Drum-Ocean-Ripple/L85244000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85244000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85244000001000-02-500x500.jpg"],
  },
  {
    name: "Pearl Session Studio Select",
    brand: "Pearl",
    category: "drums",
    description: `For over a quarter century, Pearl's Session Series has yielded some of the most harmonically vibrant recorded drum tones ever captured in the studio environment. Returning with a custom upgrade from our Masterworks spectrum, new Session Studio Select drums shift to a thin, 5.4 mm EvenPly-Six combination of Masters-grade birch and African mahogany.
    The result is a blend of pre-EQ'd clarity and warmth with the added controlled punch of Pearl's fresh 60-degree bearing edge. In addition to a host of finish and hardware upgrades, Session Studio Select drums carry on Pearl's tradition of value for the pro player; with three specially-priced shell sets, each including a FREE added floor tom.`,
    amount: 5,
    price: 1969,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Session-Studio-Select-Series-5-Piece-Shell-Pack-Nicotine-White-Marine-Pearl-Large/L18428000004000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L18428000004000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L18428000004000-03-500x500.jpg"],
  },
  {
    name: "Ludwig Breakbeats by Questlove",
    brand: "Ludwig",
    category: "drums",
    description: `Signature shell pack of Roots drummer, Questlove.
    Breakbeats by Ludwig marks the return of Ahmir "Questlove" Thompson to the drums of his youth. With a setup compact enough for an apartment, cab and a coffeehouse, Breakbeats by Ludwig are an ideal companion for the gigging, urban percussionist. The driving force behind these drums are the 7-ply poplar shells that produce punchy, focused attack with dry, clipped resonance. A 45-degree bearing edge ensures quick, classic shell response, while triple-flanged hoops will endure the best rimshots you can produce. `,
    amount: 5,
    price: 549,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Breakbeats-by-Questlove-4-Piece-Shell-Pack-Blue-Sparkle/L95201000003000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L95201000003000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L95201000003000-02-500x500.jpg"],
  },
  {
    name: "Ludwig Pocket Kit Black Sparkle",
    brand: "Ludwig",
    category: "drums",
    description: `A premier, all-inclusive drum set designed for the needs of an elementary player.
    Co-developed with Ahmir "Questlove" Thompson to meet the needs of drummers ranging from ages 4-10 years old, the Ludwig Pocket Kit is an all-inclusive setup designed for the early player. These drums are tunable and include all needed hardware and cymbals. Even a pair of drumsticks!

    Also included is access to a series of powerful, web-based lessons to aid with key setup, adjustment and playing technique. Available in multiple, high-quality wrap finishes.`,
    amount: 5,
    price: 249,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Pocket-Kit-Black-Sparkle/J41130000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/Pocket-Kit-White-Sparkle/J41130000003000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/Pocket-Kit-Wine-Red-Sparkle/J41130000002000-00-500x500.jpg"],
  },
  {
    name: "Ludwig Classic Oak",
    brand: "Ludwig",
    category: "drums",
    description: `3-piece maple/oak shell pack with dark, aggressive attack and speedy decay
    Part of the reimagined Classic Oak drum series, this Ludwig Fab 3-piece shell pack lives up to the timeless Ludwig name with high-end construction and dark, aggressive sound. The shell consists of a 3-ply core of North American Maple, surrounded by single inner and outer plies of American Red Oak. The total of 5 wood plies keeps the shells thin at 6.5 mm, increasing the dark resonance and speeding up the decay for clear articulation on every stroke. Shells are cut to dual 45-degree bearing edges.`,
    amount: 5,
    price: 2749,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Classic-Oak-3-Piece-Fab-Shell-Pack-with-22-in.-Bass-Drum-Tennessee-Whiskey/L73911000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73911000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L73911000001000-02-500x500.jpg"],
  },
  {
    name: "Ludwig Vistalite 50th Anniversary Fab",
    brand: "Ludwig",
    category: "drums",
    description: `Celebrate 50 years of innovation.
    The Ludwig Vistalite 50th Anniversary Fab 3-piece shell pack is a celebration of a classic, featuring a 22" x 14" bass drum, 13" x 9" tom and 16" x 16" floor tom. As 1972 signaled the rise of a new era of music and fashion, Ludwig released the Vistalite series to challenged the idea of what drums could be. It had sound with a presence unmatched by traditionally built drums and a look that would command gem-like admiration. Ludwug had ear to the ground and its finger on the pulse to compliment this era of galactic glamour.`,
    amount: 5,
    price: 3699,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Vistalite-50th-Anniversary-Fab-3-Piece-Shell-Pack-with-22-in.-Bass-Drum-Red-Yellow-Red/L93913000003000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L93913000003000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L93913000003000-03-500x500.jpg"],
  },
  {
    name: "Ludwig Neusonic 3 piece FAB",
    brand: "Ludwig",
    category: "drums",
    description: `Cherry/maple shell pack with 22" bass drum.
    Ludwig drums have long been the industry standard of tone, quality and versatility and the Neusonic series drums are no exception. The Neusonic FAB Shell Pack continues this tradition with a 6-ply Cherry/Maple shell, complete with a durable outer ply that is applied to the shell in-mold as the drum is actually being constructed. Not only is the finish durable, it also literally becomes one with the shell, eliminating any possibility of separation or gaps creating one resonating piece. Neusonic drums also come with a 45-degree bearing edge, Mini-Elite lugs and 2.3mm triple flange hoops. Lightweight, powerful and definitive, the Ludwig Neusonic is the perfect addition to your working pallet of sounds.`,
    amount: 5,
    price: 1349,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Neusonic-3-piece-FAB-Shell-Pack-with-22-in.-Bass-Drum-Black-Velvet/L85733000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85733000002000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85733000002000-02-500x500.jpg"],
  },
  {
    name: "Tama Superstar Classic",
    brand: "Tama",
    category: "drums",
    description: `Maple shell kit with vintage vibes and modern features.
    The TAMA Superstar Classic kit is vintage inspired while incorporating modern build technology. This kit consists of a 22"x14" bass drum, 12"x8" tom and 16"x16" floor tom with legs. Thin, 100% maple shells deliver a balanced, clear sound and feature 5mm, 6-ply for the tom and floor tom and 7mm, 8-ply for the bass drum. The bass drum is non-drilled (without mount plate); the 12" tom is mounted using TAMA's popular MC69 single tom attachment, which is included. The combination of rich, full tones with the straightforward "one-up, one-down" configuration provides an excellent sounding and versatile kit suitable for a wide array of music settings.`,
    amount: 5,
    price: 679,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Superstar-Classic-3-Piece-Shell-Pack-with-22-in.-Bass-Drum-Sea-Blue-Sparkle/L91708000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L91708000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L91708000001000-02-500x500.jpg"],
  },
  {
    name: "Tama Club-JAM 4-Piece Pancake Kit",
    brand: "Tama",
    category: "drums",
    description: `Compact and portable drum kit with toms, snare and bass drum.
    This TAMA Club-JAM Pancake Kit combines compact portability with professional-quality sound and reliable durability. With a lightweight and minimalist design, the Club-JAM Pancake Kit contains a 3.5" deep tom, floor tom, 4" deep snare drum and a bass drum that can all be easily packed into a single bag thanks to their ultrashallow shells. The single-headed toms produce a crisp, warm sound with a strong attack, while the double-headed snare drum delivers a bright, sharp sound. Combined with significant low end from the double-headed bass drum, the Pancake Kit is excellent for a wide range of genres and styles. Whether you're playing live or in the studio, the Club-JAM Pancake Kit delivers a unique and satisfying musical experience.`,
    amount: 5,
    price: 349,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Club-JAM-4-Piece-Pancake-Kit-With-18-Bass-Drum-Champagne-Mist-Chrome-Shell-Hardware/L92283000001001-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L92283000001001-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L92283000001001-02-500x500.jpg"],
  },
  {
    name: "Tama Cocktail-JAM Mini",
    brand: "Tama",
    category: "drums",
    description: `Compact, easy to carry and a great sound.
    The Cocktail-JAM Mini is a compact and easy-to-transport drum kit. Its drums are 2 inches smaller in diameter than the full-size Cocktail-JAM Kit. It is compact in size but very scalable, allowing you to add cymbals and cowbells by using the compact clamps and attachments. You can pack the entire kit and its hardware easily into just two bags, which are included with the kit. Get going with drum sound.`,
    amount: 5,
    price: 629,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Cocktail-JAM-Mini-4-Piece-Shell-Pack-with-14-in.-Bass-Drum-Hairline-Black/L81902000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81902000001000-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81902000001000-03-500x500.jpg"],
  },
  {
    name: "Tama Starclassic Performer",
    brand: "Tama",
    category: "drums",
    description: `A hybrid shell for a more expressive sound.
    TAMA's Starclassic shell design has included drums with various wood types, including pure maple, pure birch, pure bubinga and "hybrid" bubinga/birch and walnut/birch. TAMA's evolution into the hybrid shell has been widely appreciated by drummers due to the complex and expressive sonic properties these hybrid shells produce. TAMA's newest Starclassic Performer series centers on a TAMA hybrid shell–maple/birch–to offer drummers a complex, powerful and expressive sound supported by rugged Starclassic performance. TAMA's Starclassic Performer series evolves the Starclassic legacy to provide a unique TAMA sonic component that redefines the art of professional drum set sound and expression at an undeniable value.`,
    amount: 5,
    price: 1449,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Starclassic-Performer-4-Piece-Shell-Pack-With-22-Bass-Drum-Caramel-Aurora/L81856000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81856000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L81856000001000-02-500x500.jpg"],
  },
  {
    name: "Tama STAR Factory Vault",
    brand: "Tama",
    category: "drums",
    description: `4`,
    amount: 5,
    price: 8999,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/STAR-Factory-Vault--Mahogany-5-Piece-Shell-Pack-With-22-Bass-Drum-Caramel-Tineo-Burst/L96078000000001-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/Velocity-5-Piece-Shell-Pack-Spring-Green/L85384000005000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L85384000005000-01-500x500.jpg"],
  },
  {
    name: "DW Design Series Acrylic",
    brand: "DW",
    category: "drums",
    description: `5-piece acrylic shell pack in vibrant Sea Glass finish
    This special-edition DW Design Series 5-piece acrylic shell pack features a bold Sea Glass finish, harkening back to the original Drum Workshop headquarters in Santa Monica, California. The seamless 5 mm shells offer the articulate voice and projection of acrylic, with all the hardware touches of DW Design Series drums. That includes DW's proprietary suspension tom mounts, True-Pitch tuning, MAG throw-off and branded heads by Remo. With these premium features, the Design Series sets a new standard for quality and affordability from a name drummers trust.`,
    amount: 5,
    price: 2299,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Design-Series-Acrylic-5-Piece-Shell-Pack-With-Chrome-Hardware-Sea-Glass/L78200000000001-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L78200000000001-02-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L78200000000001-03-500x500.jpg"],
  },
  {
    name: "DW 50th Anniversary",
    brand: "DW",
    category: "drums",
    description: `6-piece persimmon and spruce shell pack celebrating 50 years of DW.
    The DW 50th Anniversary 6-piece kit features persimmon and spruce shells that deliver warm tonality without compromising any attack. The shells are finished with inlaid maple and feature rosewood 50th Anniversary badges and bands that hug the shells in quilted maple veneers. These special drums are also equipped with antique gold hardware that features all the top-end options of the Collector's Series, including a STM mounts (Suspended Tom Mounts), MAG throw off, True-Hoops and a 3-position butt plate. This drum kit includes 10 x 8" and 12 x 9" mounted toms, 14 x 12" and 16 x 14" floor toms, an 22 x 18" kick drum and a 14 x 6.5" snare. These special drums will be limited to 100 pieces. Each kit will include a signed certificate of authenticity.`,
    amount: 5,
    price: 11999,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/50th-Anniversary-6-Piece-Shell-Pack-With-Antique-Gold-Hardware/L98706000000000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98706000000000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L98706000000000-02-500x500.jpg"],
  },
  {
    name: "DW Performance Series",
    brand: "DW",
    category: "drums",
    description: `Handcrafted drums to elevate your drumming performance.
    With a look that is decidedly DW and a tone to match, the Performance Series exemplifies DW's commitment to handcrafted drums and value. The foundation of this kit, advanced HVX shells, were conceived, designed and constructed by John Good and the DW Custom Shop team in their Oxnard, California shell shop.`,
    amount: 5,
    price: 3271,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Performance-Series-5-Piece-Shell-Pack-Pewter-Sparkle-with-Chrome-Hardware/H80092000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H80092000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/Performance-Series-5-Piece-Shell-Pack-White-Marine-Finish-with-Chrome-Hardware/H80092000007000-00-500x500.jpg"],
  },
  {
    name: "DW Collector's Series Satin Oil ",
    brand: "DW",
    category: "drums",
    description: `Customizable drums that represent a pinnacle in boutique-style drum making.
    DW's flagship line, the Collector's Series, are the original US-made custom drums. For years, drum makers have preferred maple for its resonant tonal qualities. Maple is a traditional shell material that provides low-end punch, warmth and attack. This DW Shell Pack features North American maple shells with 3-ply reinforcement hoops. Toms 8-13" are 6-ply, while 14" and bigger (including bass drums) are 7-ply.`,
    amount: 5,
    price: 5633,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/Collectors-Series-Satin-Oil-5-Piece-Shell-Pack-Ox-Blood-Red-Chrome-Hardware/H82139000001001-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/H82139000001001-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/SSC-Collectors-Series-4-Piece-Finish-Ply-Shell-Pack-with-24-Bass-Drum-with-Satin-Chrome-Hardware-Black-Ice/K35848000001000-00-500x500.jpg"],
  },
  {
    name: "DW SSC Collector's Series",
    brand: "DW",
    category: "drums",
    description: `The culmination of decades of DW's pioneering shell technology and unrivaled customization.
    DW's legendary Collector's Series is the gold standard of their custom drum line, offered in North American Hard Rock Maple, Select Heartwood Birch, and Maple/Mahogany. Collector's Series® is the original American Made custom drum set. Choose from a myriad of state-of-the art California Custom Shop shell configurations and a seemingly endless array of high-end finishes and drum hardware color options to create your very own dream set-up.`,
    amount: 5,
    price: 3293,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/SSC-Collectors-Series-3-Piece-Finish-Ply-Shell-Pack-with-Chrome-Hardware-Blue-Moonstone/K35802000002000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K35802000002000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/K35802000002000-02-500x500.jpg"],
  },
  {
    name: "1",
    brand: "Yamaha",
    category: "keyboards",
    description: `Compact synthesizer designed to give you control of your sound.
    The Yamaha MODX6+ is the smallest and lightest keyboard in the MODX+ series. Designed for synth players, MODX6+ offers a wide range of sound design capabilities, thanks to its 8-operator, fully programmable FM-X engine with up to 128-note polyphony (double the original MODX). The MODX6+ features 61 semi-weighted, synth-action keys that are perfect for banging out blazing leads and solos. Like the rest of the MODX+ series, MODX6+ gets its power from the same technology found in the flagship MONTAGE keyboard, combining Yamaha's AMW2 (Advanced Wave Memory 2) technology, and the advanced synthesis capability of FM-X (Frequency Modulation). Together, these two iconic sound engines provide an impressive palette for playback and complex sound design. If you're looking for cutting-edge technology in a 5-octave synth, the Yamaha MODX6+ might be the perfect instrument for you.`,
    amount: 5,
    price: 1499,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/MODX6-61-Key-Synthesizer/L96787000000000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L96787000000000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/L96787000000000-05-500x500.jpg"],
  },
  {
    name: "Yamaha Montage 8",
    brand: "Yamaha",
    category: "keyboards",
    description: `DX and MOTIF technologies fused together with unprecedented power.
    In their new flagship keyboard, the Montage, Yamaha debuts the Motion Control Synthesis Engine, which combines and controls two iconic sound engines: AWM2 (high-quality waveform and subtractive synthesis) and FM-X (modern, pure Frequency Modulation synthesis). These two engines can be freely zoned or layered across eight parts in a single MONTAGE Performance.`,
    amount: 5,
    price: 3999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Montage-8-Flagship-Synthesizer/J32068000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J32068000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J32068000000000-05-500x500.jpg"],
  },
  {
    name: "Yamaha MX88BK",
    brand: "Yamaha",
    category: "keyboards",
    description: `Versatile, powerful with DAW software included.
    The MX88 music synthesizer is the complete solution for the modern piano player, aspiring music producer or live performer. Featuring an 88-note weighted keyboard, MX88 boasts realistic piano touch and sound thanks to over 100 years of piano manufacturing experience.`,
    amount: 5,
    price: 1199,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/MX88BK-Music-Synthesizer-Black/J51637000001000-00-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J51637000001000-01-500x500.jpg", "https://media.musiciansfriend.com/is/image/MMGS7/J51637000001000-05-500x500.jpg"],
  },
  {
    name: "Yamaha Montage 6 61-Key silver",
    brand: "Yamaha",
    category: "keyboards",
    description: `If you liked the DX and Motif, get ready to love Montage.
    Welcome to the new era in Synthesizers from the company that brought you the industry-changing DX and the hugely popular Motif.
    Building on the legacy of these two iconic keyboards, the Yamaha Montage 6 61-Key Flagship Synthesizer sets the next milestone for Synthesizers with sophisticated dynamic control, massive sound creation and streamlined workflow all combined in a powerful keyboard designed to inspire your creativity. `,
    amount: 5,
    price: 2999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Montage-6-61-Key-Flagship-Synthesizer-White/L68758000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L68758000000000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L68758000000000-05-500x500.jpg"
    ],
  },
  {
    name: "Yamaha Montage 6 61-Key black",
    brand: "Yamaha",
    category: "keyboards",
    description: `Another breakthrough for Yamaha.
    In their new flagship keyboard, the MONTAGE, Yamaha debuts the Motion Control Synthesis Engine, which combines and controls two iconic sound engines: AWM2 (high-quality waveform and subtractive synthesis) and FM-X (modern, pure Frequency Modulation synthesis.) These two engines can be freely zoned or layered across eight parts in a single MONTAGE Performance.`,
    amount: 5,
    price: 2999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Montage-6-61-Key-Flagship-Synthesizer/J32030000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J32030000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J32030000000000-05-500x500.jpg"],
  },
  {
    name: "Roland AX-Edge Keytar",
    brand: "Roland",
    category: "keyboards",
    description: `49-note keytar synthesizer for incredibly dynamic performances.
    Today's audiences crave dynamic performances that stand out. As an artist, you want to connect with your fans and take your moment in the spotlight. The AX-Edge builds on decades of refinement and learning from artists the world over about what makes the ultimate performance synthesizer. The AX-Edge has a sleek, modern design with a customizable look via interchangeable Edge Blades, 49 full-sized keys and a sound-set crafted specifically for keytarists. And throughout the AX-Edge, you’ll find thoughtful design features that give you the freedom and confidence to truly express yourself on stage.`,
    amount: 5,
    price: 1199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/AX-Edge-Keytar-Synthesizer-Black/L42549000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L42549000001000-03-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L42549000001000-01-500x500.jpg"],
  },
  {
    name: "Roland JD-Xi",
    brand: "Roland",
    category: "keyboards",
    description: `A blending of two technologies.
    What do you get when you combine an interactive analog synthesizer with real-time parameter control and a keyboard with one of the most popular and highly rated digital sound libraries in the world? You get the Roland JD-Xi, an analog/digital crossover synthesizer that is the perfect instrument to address the needs of the contemporary creative musician.`,
    amount: 5,
    price: 599,
    photos: [
      "hhttps://media.musiciansfriend.com/is/image/MMGS7/JD-Xi-Synthesizer/J19805000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J19805000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J19805000000000-05-500x500.jpg"
    ],
  },
  {
    name: "Roland JUPITER-Xm",
    brand: "Roland",
    category: "keyboards",
    description: `Self-contained, ultra-portable, idea machine.
    Since the release of the JUPITER-4 in 1978, the name JUPITER has marked the pinnacle of Roland sound and playability. Roland synthesizers with the JUPITER name carry our most advanced sound technologies, are supremely playable, and are built from premium materials.`,
    amount: 5,
    price: 1699,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/JUPITER-Xm-Keyboard-Synthesizer/L69261000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L69261000000000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L69261000000000-03-500x500.jpg"
    ],
  },
  {
    name: "Roland JUNO-X",
    brand: "Roland",
    category: "keyboards",
    description: `The legendary JUNO experience reimagined with the power of Roland's ZEN-Core synthesis system.
    The Roland JUNO-X gives you three JUNOs in one. It boasts the authentic sounds of the JUNO-60 and JUNO-106 in all their glory, plus a new JUNO-X engine that imbues the JUNO spirit with more sonic muscle and expression.
    JUNO-X elevates Roland's legendary synthesizer series into a new era, fusing authentic vintage spirit with modern creative power. Compose and perform with the next-generation JUNO-X engine, historic JUNO-60 and JUNO-106 models, sounds from the XV-5080 and RD pianos, Model Expansions and more. And bring them all together with a familiar hands-on interface. Backed by the immense range of Roland's ZEN-Core Synthesis System, JUNO-X goes wherever your music lives—past, present or future. This JUNO-X Model presents a natural evolution of the historic JUNO voice. Create even fatter sounds with an enhanced version of Roland's famous Super Saw waveform and go deeper with velocity sensitivity, pitch envelope control and more. There's also a new Chorus III mode to complement the two beloved chorus modes from the original JUNOs.`,
    amount: 5,
    price: 2099,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/JUNO-X-Synthesizer/L94702000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L94702000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L94702000000000-03-500x500.jpg"],
  },
  {
    name: "Roland JUNO-DS61",
    brand: "Roland",
    category: "keyboards",
    description: `Performance instrument with new and old Juno developments.
    Roland's JUNO synths are known everywhere for their great sound, ease of use, and exceptional value. Beginning in the '70s with some of the earliest mass-produced analog synthesizers, the Juno line's new releases are always hotly anticipated. The JUNO-DS61 takes the iconic series to a new level of performance, adding many powerful enhancements while still keeping operation streamlined and simple. Versatile, intuitive, and highly mobile, the JUNO-DS61 puts you in creative command, making it easy to produce exceptional music everywhere you play.`,
    amount: 5,
    price: 699,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/JUNO-DS61-Synthesizer/J26978000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J26978000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J26978000000000-05-500x500.jpg"
    ],
  },
  {
    name: "Korg Prologue 16-Voice Polyphonic",
    brand: "Korg",
    category: "keyboards",
    description: `Korg's next-generation, 16-voice analog synthesizer with multi-engine oscillator and more.
    Prologue is a fully-programmable, full-featured, professional synthesizer. Preceded by the 4-voice polyphonic minilogue and the monophonic monologue, this long-awaited debut marks the Prologue as the flagship of the series. Equipped with a full-sized keyboard, prologue is a polyphonic analog synthesizer with powerful analog circuits that are descended directly from the earlier models of the series. Together with a newly developed digital multi engine and gorgeous DSP-based effects, prologue expands the variety of sounds and the possibilities for user customization.`,
    amount: 5,
    price: 1699,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Prologue-16-Voice-Polyphonic-Analog-Synthesizer/K82364000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K82364000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K82364000000000-03-500x500.jpg"
    ],
  },
  {
    name: "Korg RK100S 2 Keytar",
    brand: "Korg",
    category: "keyboards",
    description: `More beautiful than ever, the long-awaited rebirth of KORG's famous keytar is here.
    Since its debut, the RK-100S keytar has been a hit for its uniquely ergonomic styling, powerful sound engine and standout looks. Now by popular demand, the RK-100S returns in a big way.
    The artisanal wooden body inherited from the original RK-100 is a hallmark of the 100S, which is now available in a finish that accentuates its woodgrain. Numerous sounds ideal for solo performance have been added, making the RK-100S fit instantly into any musician’s stage performance.`,
    amount: 5,
    price: 699,
    photos: ["https://media.musiciansfriend.com/is/image/MMGS7/RK100S-2-Keytar-Synthesizer-Red/L91037000001000-00-500x500.jpg",
    "https://media.musiciansfriend.com/is/image/MMGS7/L91037000001000-01-500x500.jpg",
    "https://media.musiciansfriend.com/is/image/MMGS7/L91037000001000-03-500x500.jpg"
  ],
  },
  {
    name: "Korg Nu:Tekt NTS-1 Digital DIY",
    brand: "Korg",
    category: "keyboards",
    description: `A world of synthesis at your fingertips.
    The Nu:Tekt NTS-1 digital KIT is a unique, flexible, and easy DIY synthesizer that you can easily assemble yourself, without any soldering (tool included!. Korg is always building new ways to experience hands-on, fun music-making. Now, you can too.
    The first of its kind from KORG's DIY-focused Nu:Tekt brand, NTS-1 packs a powerful synth and multi-effects engine into a compact form factor that you can carry and connect anywhere. Its DIY nature means it's also very customizable. Explore the possibilities!`,
    amount: 5,
    price: 119,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/NuTekt-NTS-1-Digital-DIY-Synthesizer/L69997000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L69997000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L69997000000000-02-500x500.jpg"
    ],
  },
  {
    name: "KORG monologue Monophonic Analog",
    brand: "Korg",
    category: "keyboards",
    description: `Fully programmable analog monophonic synthesizer with 25 slim keys.
    The monologue by Korg is a programmable analog monophonic synthesizer that shares the sleek layout, knob-per-function workflow and high-quality construction of the best-selling minilogue. monologue is a new synth for all types of musicians; rock keyboard players appreciate its sine, saw and square wave leads and EDM producers will find its bass patches attractive for recording and shows.`,
    amount: 5,
    price: 299,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/monologue-Monophonic-Analog-Synthesizer-Black/J47249000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J47249000001000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J47249000001000-05-500x500.jpg"],
  },
  {
    name: "KORG microKORG-S",
    brand: "Korg",
    category: "keyboards",
    description: `Synth/Vocoder with built-in speakers.
    The microKORG-S analog modeling synthesizer was an instant success when it was released in 2002. Since then, it has found its way into the hands of musicians all over the world. There is a line between fixing what isn’t broken and improving on a great design, and the engineers at KORG hold the microKORG in such reverence that its update and rejuvenation was a high-priority project. The chief goal was to ensure that the microKORG-S would remain one of the world’s most beloved synthesizers for years to come.`,
    amount: 5,
    price: 529,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/microKORG-S-Synthesizer-Vocoder-With-Built-In-Speaker-System/J44910000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J44910000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J44910000000000-05-500x500.jpg"
    ],
  },
  {
    name: "Moog Minimoog Model D",
    brand: "Moog",
    category: "keyboards",
    description: `A reissue of a Moog synthesizer classic—with modern upgrades.
    More than a half century since its release in 1970, Minimoog Model D synthesizer is back in production at the Moog factory in Asheville, North Carolina. An exceptional sonic tool and one of the most beloved and iconic synthesizers ever designed, it returns to the hands of synthesists of all kinds, and serves as inspiration for the next generation of electronic musicians.`,
    amount: 5,
    price: 4999,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Minimoog-Model-D-Monophonic-Analog-Synthesizer-2022-Reissue-Dark-Cherry/L98500000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L98500000001000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L98500000001000-02-500x500.jpg"
    ],
  },
  {
    name: "Moog Matriarch Dark Semi-Modular",
    brand: "Moog",
    category: "keyboards",
    description: `A sleek, all-black finish on this semi-modular analog synth.
    Matriarch Dark brings a sleek, classic finish to the Moog Matriarch. Matriarch Dark presents the same great features, sounds and specs as the original colorful Matriarch. Now offered in an all-black color scheme, it invokes the timeless look of Moog's classic modular control panels.`,
    amount: 5,
    price: 2199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Matriarch-Dark-Semi-Modular-Analog-Synthesizer/L78714000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78714000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78714000000000-02-500x500.jpg"
    ],
  },
  {
    name: "Moog Grandmother Dark Semi-Modular",
    brand: "Moog",
    category: "keyboards",
    description: `A sleek, all-black finish on this semi-modular analog synth.
    Grandmother Dark offers a sleek finish for Moog Grandmother. Grandmother Dark presents the same great features, sounds and specs as the original colorful Grandmother. In this all-black color scheme, it invokes the timeless look of Moog's classic modular control panels.`,
    amount: 5,
    price: 1149,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Grandmother-Dark-Semi-Modular-Analog-Synthesizer/L78713000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78713000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L78713000000000-02-500x500.jpg"],
  },
  {
    name: "Moog Grandmother Semi-Modular Analog",
    brand: "Moog",
    category: "keyboards",
    description: `Semi-modular analog synthesizer with 32-note Fatar keybed and built-in spring reverb tank.
    A reflection of Moog's modular synth heritage, Grandmother is a semi-modular analog synthesizer. Designed to be enjoyed by synth enthusiasts of all levels, Moog Grandmother makes the sound creation process as much fun as hearing the results. With no presets, Grandmother offers a blank slate for seemingly limitless creative exploration. Those with advanced synthesizer knowledge will be able to dial in familiar sounds quickly. Those with a more basic understanding of synthesis will quickly learn the joy of creating custom sounds.`,
    amount: 5,
    price: 1249,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Grandmother-Semi-Modular-Analog-Synthesizer/L20578000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L20578000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L20578000000000-02-500x500.jpg"
    ],
  },
  {
    name: "Moog Subsequent 37",
    brand: "Moog",
    category: "keyboards",
    description: `The original, reissued to its finest detail.
    The Subsequent 37 is a (2-note) paraphonic analog synthesizer that builds on the award-winning design of the Sub 37 Tribute Edition. Its control panel has 40 knobs and 74 switches, placing a vast array of analog sound design tools and onboard sequencing options immediately at your command. The Subsequent 37 improves upon its source through the implementation of user-requested enhancements. Each enhancement maintains the magic and character of its predecessor while also providing access to new dimensions of sound and improved playability.`,
    amount: 5,
    price: 1899,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Subsequent-37/K35611000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K35611000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/K35611000000000-02-500x500.jpg"
    ],
  },
  {
    name: "Novation Summit 16-Voice Polyphonic",
    brand: "Novation",
    category: "keyboards",
    description: `Peak taken to its logical extreme.
    Built on the innovative foundations of Novation's critically acclaimed Peak, Summit is a three-oscillator-per-voice, 16-voice keyboard synth aimed at the professional or semi-professional musician seeking an inspiring, empowering instrument for use both live and in the studio. In fact, Summit effectively puts the power of two Peaks at your fingertips, enabling two completely independent patches to be split or layered across the keyboard, or switched between on the fly.`,
    amount: 5,
    price: 2299,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Summit-16-Voice-Polyphonic-Synthesizer/L58195000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L58195000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L58195000000000-03-500x500.jpg"
    ],
  },
  {
    name: "Novation Bass Station II",
    brand: "Novation",
    category: "keyboards",
    description: `The classic Novation Bass Station, reworked for the 21st Century.
    Bass Station II is an analog mono-synth with a talent for bass, but a sound engine that is versatile enough to kick out sharp leads and crisp arpeggios. It brings the best elements of the original Bass Station into a brand-new design with reworked modulation, effects, filters and more; like the Bass Station, but much much bigger.`,
    amount: 5,
    price: 499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Bass-Station-II/H96667000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H96667000000000-06-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H96667000000000-07-500x500.jpg"
    ],
  },
  {
    name: "Novation MiniNova Mini-Keys",
    brand: "Novation",
    category: "keyboards",
    description: `A powerful performance synth with the same sound engine as the UltraNova.
    MiniNova is a powerful mini-keys synth with incredible performance controls which enable you to tweak and warp the onboard sounds, and your own voice. It has the same synth-engine as it's big brother - the UltraNova - and comes with 256 awesome sounds so you can get started straight away. If you want to dig deeper, it's got a fully editable Nova-class synth engine (derived from the legendary Supernova series in the 1990s).`,
    amount: 5,
    price: 499,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MiniNova-Mini-Keys-Synthesizer/H88070000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H88070000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H88070000000000-02-500x500.jpg"
    ],
  },
  {
    name: "Novation Peak Desktop Synthesizer",
    brand: "Novation",
    category: "keyboards",
    description: `Novation Peak 8-Voice Desktop Synth
    Peak is an 8-voice desktop polyphonic synthesizer with three New Oxford Oscillators for each voice. The oscillators sound completely analog by being high-quality NCOs (Numerically-Controlled Oscillators), but gain the flexibility of the digital domain with 17 digital wavetables. They can also become a linear FM source using either the analog-sounding NCOs or digital wavetables, so they are able to cross-modulate in a recursive loop.`,
    amount: 5,
    price: 1439,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Peak-Desktop-Synthesizer-With-Decksaver-Cover-and-Stand/L73260000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73260000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73260000000000-02-500x500.jpg"
    ],
  },
  {
    name: "Novation MiniNova",
    brand: "Novation",
    category: "keyboards",
    description: `Novation MiniNova Mini-Keys Synthesizer
    MiniNova is a powerful mini-keys synth with incredible performance controls which enable you to tweak and warp the onboard sounds, and your own voice. It has the same synth-engine as it's big brother - the UltraNova - and comes with 256 awesome sounds so you can get started straight away. If you want to dig deeper, it's got a fully editable Nova-class synth engine (derived from the legendary Supernova series in the 1990s).`,
    amount: 5,
    price: 478,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MiniNova-Synthesizer-with-Gig-Bag/L73259000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73259000000000-02-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L73259000000000-03-500x500.jpg"
    ],
  },
  {
    name: "Shure SM58",
    brand: "Shure",
    category: "microphones",
    description:
      "The legendary Shure SM58 dynamic vocal microphone is an industry standard for both lead and backup vocals on stage and in the studio.",
    amount: 5,
    price: 89,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/SM58-Dynamic-Handheld-Vocal-Microphone/270101000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270101000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270101000000000-02-500x500.jpg",
    ],
  },
  {
    name: "Shure SM7B",
    brand: "Shure",
    category: "microphones",
    description:
      "Popular radio and TV mic features excellent shielding against electromagnetic hum.",
    amount: 5,
    price: 359,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/SM7B-Cardioid-Dynamic-Microphone/270247000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270247000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270247000000000-04-500x500.jpg",
    ],
  },
  {
    name: "Shure SM57",
    brand: "Shure",
    category: "microphones",
    description:
      "The Shure SM57 is one of the most popular professional instrument microphones of all time. ",
    amount: 5,
    price: 89,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/SM57-Dynamic-Instrument-Microphone/270102000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270102000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270102000000000-02-500x500.jpg",
    ],
  },
  {
    name: "Shure PGA58",
    brand: "Shure",
    category: "microphones",
    description:
      "Cardioid dynamic vocal microphone delivers excellent sound for lead and backup vocal performance.",
    amount: 5,
    price: 53,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/PGA58-Cardioid-Dynamic-Vocal-Microphone/J22608000000000-00-500x500.jpg",
      "https://musicmarket.by/images/detailed/1012/888880021379-204.jpg",
    ],
  },
  {
    name: "Shure MV7X",
    brand: "Shure",
    category: "microphones",
    description: "Modeling microphone designed for podcasters.",
    amount: 5,
    price: 161,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MV7X-XLR-Podcast-Microphone/L88443000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88443000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L88443000000000-02-500x500.jpg",
    ],
  },
  {
    name: "AKG P5i",
    brand: "AKG",
    category: "microphones",
    description:
      "High-performance vocal microphone, with HARMAN Connected PA compatibility.",
    amount: 5,
    price: 95,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/P5i-Handheld-Vocal-Microphone-Black/J50642000001000-00-500x500.jpg",
    ],
  },
  {
    name: "AKG P120",
    brand: "AKG",
    category: "microphones",
    description: "Studio vocal mic with instrument capability.",
    amount: 5,
    price: 75,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/P120-Project-Studio-Condenser-Microphone/J10279000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J10279000000000-01-500x500.jpg",
    ],
  },
  {
    name: "AKG C518ML",
    brand: "AKG",
    category: "microphones",
    description:
      "Mic up your drums or percussion instruments with this excellent performer!",
    amount: 5,
    price: 219,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/C518ML-Miniature-Cardioid-Condenser-Microphone/270507000000000-00-500x500.jpg",
    ],
  },
  {
    name: "AKG Perception P4",
    brand: "AKG",
    category: "microphones",
    description:
      "From instrument amps and woodwinds to drums and percussion, this mic can handle 'em all.",
    amount: 5,
    price: 79,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/Perception-P4-Dynamic-Instrument-Mic/485818000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/485818000000000-01-500x500.jpg",
    ],
  },
  {
    name: "AKG D112 MkII",
    brand: "AKG",
    category: "microphones",
    description: "An industry standard for kick drums or bass guitars.",
    amount: 5,
    price: 229,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/D112-MkII-Professional-Bass-Drum-Microphone/J21191000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J21191000000000-04-500x500.jpg",
    ],
  },
  {
    name: "Sennheiser e 835",
    brand: "Sennheiser",
    category: "microphones",
    description:
      "Dynamic cardioid microphone optimized for speech and vocal performances.",
    amount: 5,
    price: 100,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/e-835-Cardioid-Dynamic-Vocal-Microphone/270825000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270825000000000-01-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270825000000000-02-500x500.jpg",
    ],
  },
  {
    name: "Sennheiser MK4",
    brand: "Sennheiser",
    category: "microphones",
    description: "A studio-quality condenser priced for the home studio.",
    amount: 5,
    price: 300,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MK4-Large-Diaphragm-Studio-Condenser-Microphone/H70286000001001-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H70286000001001-01-500x500.jpg",
    ],
  },
  {
    name: "Sennheiser evolution e 902",
    brand: "Sennheiser",
    category: "microphones",
    description:
      "From Sennheiser's award-winning e 900 series - a great dynamic kick drum microphone.",
    amount: 5,
    price: 199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/evolution-e-902-Dynamic-Kick-Drum-Microphone/270859000000000-00-500x500.jpg",
    ],
  },
  {
    name: "Sennheiser MD 421-II",
    brand: "Sennheiser",
    category: "microphones",
    description:
      "The Sennheiser MD 421-II mic is one of the best-known microphones in the world. Walk into any drum booth in any major studio and you'll most likely see Sennheiser MD 421-II mics on the toms.",
    amount: 5,
    price: 399,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MD-421-II-Microphone/270820000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/270820000000000-01-500x500.jpg",
    ],
  },
  {
    name: "Sennheiser MKE 200",
    brand: "Sennheiser",
    category: "microphones",
    description: "Enhance your audio quality with this step-up mic.",
    amount: 5,
    price: 99,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/MKE-200-Directional-On-Camera-Microphone/L77927000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L77927000000000-01-500x500.jpg",
    ],
  },
  {
    name: "Rode NT-USB",
    brand: "Rode",
    category: "microphones",
    description:
      "The RØDE NT-USB Mini USB microphone serves up the pristine sound quality of RØDE’s world-renowned studio mics in a compact, easy-to-use USB microphone.",
    amount: 5,
    price: 87,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/NT-USB-Mini-USB-Microphone/L74693000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L74693000000000-01-500x500.jpg",
    ],
  },
  {
    name: "Rode PodMic",
    brand: "Rode",
    category: "microphones",
    description:
      "The all-new PodMic is a broadcast-grade dynamic microphone designed for podcast applications. ",
    amount: 5,
    price: 89,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/PodMic-Dynamic-Podcasting-Microphone-Black/L51541000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/L51541000001000-02-500x500.jpg",
    ],
  },
  {
    name: "Rode NT2-A",
    brand: "Rode",
    category: "microphones",
    description: 'A multi-pattern dual 1" condenser microphone',
    amount: 5,
    price: 350,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/NT2-A-Studio-Condenser-Microphone-Bundle/H76023000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/H76023000000000-01-500x500.jpg",
    ],
  },
  {
    name: "Rode NTG-2",
    brand: "Rode",
    category: "microphones",
    description:
      "A battery powered shotgun mic that gives you complete mobility.",
    amount: 5,
    price: 218,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/NTG-2-Multi-Powered-Shotgun-Microphone/581429000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/581429000000000-01-500x500.jpg",
    ],
  },
  {
    name: 'Rode M5 Compact 1/2"',
    brand: "Rode",
    category: "microphones",
    description:
      "The M5 Matched Pair are an ideal microphone set for studio or live capture.",
    amount: 5,
    price: 199,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/M5-Compact-1-2-Condenser-Microphone--Matched-Pair/J09584000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/J09584000000000-06-500x500.jpg",
    ],
  },
  {
    name: "Neumann U 87 Ai",
    brand: "Neumann",
    category: "microphones",
    description: "The world’s most famous studio mic.",
    amount: 5,
    price: 3295,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/U-87-Ai-Large-Diaphragm-Condenser-Microphone-Matte-Black/L75976000001000-00-500x500.jpg",
    ],
  },
  {
    name: "Neumann TLM 49",
    brand: "Neumann",
    category: "microphones",
    description:
      "A studio microphone with a retro look, warm sound, and is optimized for vocal recordings with the capsule of the legendary M 49 and U 47.",
    amount: 5,
    price: 1695,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/TLM-49-Condenser-Studio-Microphone/271417000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/271417000000000-04-500x500.jpg",
    ],
  },
  {
    name: "Neumann TLM 102",
    brand: "Neumann",
    category: "microphones",
    description:
      "From one of the biggest names in microphones, big sound at a smaller size, smaller price.",
    amount: 5,
    price: 729,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/TLM-102-Condenser-Microphone-Nickel-Silver/584192000232000-00-500x500.jpg",
    ],
  },
  {
    name: "Neumann KMS 105",
    brand: "Neumann",
    category: "microphones",
    description: "For superlative vocal reproduction onstage.",
    amount: 5,
    price: 729,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/KMS-105-Microphone-Black/271409000001000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/271409000001000-01-500x500.jpg",
    ],
  },
  {
    name: "Neumann TLM 67 Set Z",
    brand: "Neumann",
    category: "microphones",
    description: "A classic remade for the sound of a new generation.",
    amount: 5,
    price: 2495,
    photos: [
      "https://media.musiciansfriend.com/is/image/MMGS7/TLM-67-Set-Z-Condenser-Microphone-Package/500391000000000-00-500x500.jpg",
      "https://media.musiciansfriend.com/is/image/MMGS7/500391000000000-01-500x500.jpg",
    ],
  },
];
