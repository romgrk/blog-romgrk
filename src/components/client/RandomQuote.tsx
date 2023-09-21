import { useRef } from 'react'
import './RandomQuote.css'

export default function RandomQuote() {
  const index = useRef(Math.floor(Math.random() * quotes.length)).current
  const quote = quotes[index].trim()

  return (
    <div className='random-quote'>{quote}</div>
  )
}

const quotes = [
`You can start your day over at any point.`,
`
I leave my human nature to unfold
according to its destiny. I remain as I am.
There was never any journey. I am, as I always was.

 — Nisargadatta Maharaj
`,
`
It is said that before entering the sea
a river trembles with fear.
She looks back at the path she has traveled,
from the peaks of the mountains,
the long winding road crossing forests and villages.
And in front of her,
she sees an ocean so vast,
that to enter
there seems nothing more than to disappear forever.
But there is no other way.
The river can not go back.
Nobody can go back.
To go back is impossible in existence.
The river needs to take the risk
of entering the ocean
because only then will fear disappear,
because that’s where the river will know
it’s not about disappearing into the ocean,
but of becoming the ocean. "

 — Khalil Gibran
`,
`
Viktor Frankl (Book: Man's search for meaning):
“Ultimately, man should not ask what the meaning of his life is, but rather must recognize that it is he who is asked. In a word, each man is questioned by life; and he can only answer to life by answering for his own life; to life he can only respond by being responsible.”
`,

`When you demand nothing of the world, nor of God, when you want nothing, seek nothing, expect nothing then the Supreme State will come to you uninvited and unexpected!`,

`
The eye with which I see God is the same with which God sees me. My eye and God's eye is one eye, and one sight, and one knowledge, and one love.

 — Meister Eckhart
`,

`We simply always find ourselves in an unchangeable moment.`,

`
I, Awareness, do not know resistance and am, therefore, peace itself; I seek nothing and am, therefore, happiness itself; and I am intimately one with all appearances and am, as such, love itself.
 — Rupert Spira
`,

`
Sometimes we must undergo hardships, breakups, and narcissistic wounds, which shatter the flattering image that we had of ourselves, in order to discover two truths: that we are not who we thought we were; and that the loss of a cherished pleasure is not necessarily the loss of true happiness and well-being.

 — Jean-Yves Leloup
`,

`
“You have power over your mind — not outside events. Realize this, and you will find strength.”

 ― Marcus Aurelius
`,

`
Sorcerers say that we are inside a bubble. It is a bubble into which we are placed at the moment of our birth. At first the bubble is open, but then it begins to close until it has sealed us in. That bubble is our perception. We live inside that bubble all of our lives. And what we witness on its round walls is our own reflection.

 — Carlos Castaneda's Don Juan
`,

`
“It is difficult to find happiness within oneself, but it is impossible to find it anywhere else.”

― Arthur Schopenhauer
`,
`
Fear does not stop death. It stops life. And worrying does not take away tomorrow's trouble. It takes away today's peace.
`,

`
Peace is within oneself to be found in the same place as agitation and suffering. ... Where you experience suffering, you can also find freedom from suffering. Trying to run away from suffering is actually to run toward it.

 — Ajahn Chah
`,

`Many of our problems perhaps most of our problems are because we have never looked face to face, encountered them; and not looking at them is giving them energy. Being afraid of them is giving them energy, always trying to avoid them is giving them energy because you are accepting them. Your very acceptance is their existence. Other than your acceptance, they dont exist.`,

`
Do away with illness,
Do away with illness,
Do away with the great illness...
Ignorance of ‘Truth’.
Medicine Buddha,
King beyond the highest,
This prayer is relinquished to you

 — Invocation of the Medicine Buddha
`,

`
363) “If death is within you, then where are you going to run to escape? If you run away, you die; if you stay here, you die. Wherever you go it goes with you, because death lies within you; there’s nowhere you can run to. Whether you are afraid or not, you died just the same. There’s nowhere to escape death.”

Venerable Ajahn Chah
`,

`The key to Buddhist practice does not lie in what kind of image one can produce, but in seeking a secure spiritual path from within and following that path with best effort.`,

`
Thinking too well of people often allows them to behave better than they otherwise would.

― Nelson Mandela
`,
`
“In peace, may you leave this shore. In love, may you find the next. Safe passage on your travels, until our final journey to the ground. May we meet again.”

― The 100
`,
`
250) Touched By Her Light
Suppose there is someone who lives very mindfully, dwelling in concentration. She comes home, goes out, stands, sits, speaks, chops vegetables, washes pots, carries out all the activities of daily life in mindfulness and concentration. In all her actions of body, speech, and mind, she shines light of mindfulness. When other encounter her they are able to get in touch with that mindfulness, and they are influenced by it. Touched by the light of her mindfulness, the seed of mindfulness in their own consciousness begins to sprout, and naturally they also begin to cultivate mindfulness in their activities as she does.

From "Your True Home: The Everyday Wisdom of Thich Nhat Hanh"
`,
`
« Take time to find good names and take time to re-factor those names as much as necessary. As a wise stackoverflow user once said, the process of naming makes you face the horrible fact that you have no idea what the hell you're doing. »
`,
`
« Les guerriers de la lumière ont toujours une lueur particulière dans le regard.
Ils sont au monde, ils font partie de la vie des autres, et ils ont commencé leur voyage sans besace ni sandales. Il leur arrive souvent d’être lâches, et ils n’agissent pas toujours correctement.
Les guerriers de la lumière souffrent pour des causes inutiles, ont des comportements mesquins et parfois se jugent incapables de grandir. Ils se croient fréquemment indignes d’une bénédiction ou d’un miracle.
Ils ne savent pas toujours avec certitude ce qu’ils font ici. Souvent, ils passent des nuits éveillés, à penser que leur vie n’a pas de sens.
C’est pour cela qu’ils sont guerriers de la lumière. Parce qu’ils se trompent.
Parce qu’ils s’interrogent. Parce qu’ils cherchent une raison – et, certainement, ils vont la trouver.»
— Paulo Coehlo, «Manuel du Guerrier de la Lumière »
`,
`
« J'ai ainsi eu, au cours de ma vie, des tas de contacts avec des tas de gens sérieux. J'ai beaucoup vécu chez les grandes personnes. Je les ai vues de très près. Ça n'a pas trop amélioré mon opinion.
Quand j'en rencontrais une qui me paraissait un peu lucide, je faisais l'expérience sur elle de mon dessin no.1 que j'ai toujours conservé. Je voulais savoir si elle était vraiment compréhensive. Mais toujours elle me répondait: "C'est un chapeau." Alors je ne lui parlais ni de serpents boas, ni de forêts vierges, ni d'étoiles. Je me mettais à sa portée. Je lui parlais de bridge, de golf, de politique et de cravates. Et la grande personne était bien contente de connaître un homme aussi raisonnable. »
`,

`
« Le militant qui cherche avec un esprit libre et ouvert, qui ne connaît pas la certitude, qui hait le dogme, trouve dans le rire, non seulement une façon de garder l’esprit sain, mais également une clé qui lui permet de comprendre la vie. Pour un tacticien, l’humour est un élément essentiel de succès car les armes les plus puissantes du monde sont la satire et le ridicule. Le sens de l’humour permet de garder une juste perspective des choses et de prendre la réalité pour ce qu’elle est, une pincée de poussière qui brûle en l’espace d’une seconde. »

 — Saul Alinsky
`,

`
Je ne connaîtrai pas la peur, car la peur tue l'esprit. La peur est la petite mort qui conduit à l'oblitération totale. J'affronterai ma peur. Je lui permettrai de passer sur moi, au travers de moi. Et lorsqu'elle sera passée, je tournerai mon œil intérieur sur son chemin. Et là où elle sera passée, il n'y aura plus rien. Rien que moi.
 — Frank Herbert, Dune
`,

`
Fear is a liar and a dream killer. You can’t let it win.
`,
]
