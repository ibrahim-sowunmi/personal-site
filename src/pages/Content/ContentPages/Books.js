import React from 'react'
import Book from '../../../components/Book/Book.js'
import Spacer from '../../../components/Utility/Spacer.js'

import { SimpleGrid, Text } from '@chakra-ui/react'

import './Books.css'

import book1 from '../../../assets/books/book1.jpg'
import book2 from '../../../assets/books/book2.jpg'
import book3 from '../../../assets/books/book3.jpg'
import book4 from '../../../assets/books/book4.jpg'
import book5 from '../../../assets/books/book5.jpg'
import book6 from '../../../assets/books/book6.jpg'
import book7 from '../../../assets/books/book7.jpg'
import book8 from '../../../assets/books/book8.jpg'
import book9 from '../../../assets/books/book9.jpg'
import book10 from '../../../assets/books/book10.jpg'
import book11 from '../../../assets/books/book11.jpg'
import book12 from '../../../assets/books/book12.jpg'
import book14 from '../../../assets/books/book14.jpg'
import book15 from '../../../assets/books/book15.jpg'
import book16 from '../../../assets/books/book16.jpg'
import book17 from '../../../assets/books/book17.jpg'
import book18 from '../../../assets/books/book18.jpg'
import book19 from '../../../assets/books/book19.jpg'
import book20 from '../../../assets/books/book20.jpg'
import book21 from '../../../assets/books/book21.jpg'
import book22 from '../../../assets/books/book22.jpg'
import book23 from '../../../assets/books/book23.jpg'
import book24 from '../../../assets/books/book24.jpg'
import book25 from '../../../assets/books/book25.jpg'
import book26 from '../../../assets/books/book26.jpg'
import book27 from '../../../assets/books/book27.jpg'
import book28 from '../../../assets/books/book28.jpg'
import book29 from '../../../assets/books/book29.jpg'
import book30 from '../../../assets/books/book30.jpg'
import book32 from '../../../assets/books/book32.jpg'
import book33 from '../../../assets/books/book33.jpg'
import book34 from '../../../assets/books/book34.jpg'
import book35 from '../../../assets/books/book35.jpg'
import book37 from '../../../assets/books/book37.jpg'
import book38 from '../../../assets/books/book38.jpg'
import book40 from '../../../assets/books/book40.jpg'
import book42 from '../../../assets/books/book42.jpg'
import book43 from '../../../assets/books/book43.jpg'
import book44 from '../../../assets/books/book44.jpg'
import book46 from '../../../assets/books/book46.jpg'
import book47 from '../../../assets/books/book47.jpg'
import book48 from '../../../assets/books/book48.jpg'
import book49 from '../../../assets/books/book49.jpg'
import book50 from '../../../assets/books/book50.jpg'
import book51 from '../../../assets/books/book51.jpg'

function Books() {
  return (
    <>
      <div>
        <Text align="center" p="10">
          The intended purpose of this page is books I've read and content I'm
          just generally a big fan of. Very much "Work in Progress". I don't
          have a CMS yet, so updating this is lowkey pain.
        </Text>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book1}
            title="The Hitchhiker's Guide to the Galaxy"
            author="Adams, Douglas"
            genre={['SciFi', 'Humor', 'Fantasy']}
            dateCompleted="Dec 18, 2021"
            rating={7.5}
            description="Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of the The Hitch Hiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out of work actor."
            review="Probably the first Comedy book I've read end to end. I tried to react Catch-22 a while back but it just didn't click for me. This is a whimsical, witty and very well written read. Plus it's heavily referrenced in pop culture but you don't realise how heavily untill it's read. "
            link={
              'https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy'
            }
            topPick={false}
          />
          <Book
            img={book2}
            title="The Six Habits of Highly Effective Sales Engineers"
            author="White, Chris"
            genre={['Business']}
            dateCompleted="Oct 26, 2021"
            rating={5.5}
            description="TECHNICAL SALES ENGINEERS / TECHNICAL PRESALES SUPPORT: In today’s digital economy, software is eating the world, and the companies with the best sales demonstrations are winning the game."
            review="Solid read. Introduced me to some concepts I weren't very familiar with. I blitzed through it, so I'm not sure if my comprehension/retention was poor or if it didn't contain much value. Will re visit at some point."
            link={
              'https://www.goodreads.com/book/show/52233196-the-six-habits-of-highly-effective-sales-engineers'
            }
          />
          <Book
            img={book3}
            title="The Forever War"
            author="Haldeman, Joe"
            genre={['SciFi', 'Militairy', 'Time Travel']}
            dateCompleted="Aug 17, 2021"
            rating={8.5}
            description="The Earth's leaders have drawn a line in the interstellar sand—despite the fact that the fierce alien enemy that they would oppose is inscrutable, unconquerable, and very far away. A reluctant conscript drafted into an elite Military unit, Private William Mandella has been propelled through space and time to fight in the distant thousand-year conflict; to perform his duties without rancor and even rise up through military ranks. Pvt. Mandella is willing to do whatever it takes to survive the ordeal and return home. But 'home' may be even more terrifying than battle, because, thanks to the time dilation caused by space travel, Mandella is aging months while the Earth he left behind is aging centuries."
            review="Great read. Highly recommend! I think it's meant to parrallel american soldiers spending a ridiculous amount of time in afghanistan gradually losing touch with society as they spend all their energy on a battlefield nobody cares about. "
            topPick={true}
            link={
              'https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book4}
            title="I, Robot"
            author="	
            Asimov, Isaac"
            genre={['SciFi', 'Fantasy']}
            dateCompleted="Jul 30, 2021"
            rating={6}
            description="Isaac Asimov's I, Robot launches readers on an adventure into a not-so-distant future where man and machine , struggle to redefinelife, love, and consciousness—and where the stakes are nothing less than survival. Filled with unforgettable characters, mind-bending speculation, and nonstop action, I, Robot is a powerful reading experience from one of the master storytellers of our time."
            review="Great read. Asimov never fails to dissapoint."
            topPick={false}
            link={'https://www.goodreads.com/book/show/41804.I_Robot'}
          />
          <Book
            img={book6}
            title="The Wastelander: Book 1 of the Godsfall Chronicles"
            author="Tipsy Wanderer, Wuxiaworld"
            genre={['Chinese', 'Fantasy', 'Wuxia', 'Dystopian']}
            dateCompleted="Aug 17, 2021"
            rating={6.5}
            description="n a desperate, twisted mutant landscape, where nobody can be trusted... Can one scavenger make a difference?

            Cloudhawk learned early on that to survive, one had to be cautious. Resources were scarce in the wastelands, and a scav's life was literally worth less than dirt. Battles to the death over food were fought every day in this post-apocalyptic nuclear desert. Somehow, he survived to age fourteen, driven by a dream told to him long ago by a crazy old man."
            review="Typical chinese wuxia churn. Unfortunately I'm addicted to this genre. Was an entertaining 15 hours."
            link={
              'https://www.goodreads.com/book/show/53528565-the-wastelander'
            }
          />
          <Book
            img={book5}
            title="The Will to Change: Men, Masculinity, and Love"
            author="hooks, bell"
            genre={['Feminism', 'Nonfiction', 'Gender', 'Psychology']}
            dateCompleted="Jun 26, 2021"
            rating={7}
            description="Men cannot change if there are no blueprints for change. Men cannot love if they are not taught the art of loving. Love is vital to maleness, to the spiritual and emotional wholeness men seek.' —bell hooks 
            Everyone needs to love and be loved—even men. But to know love, men must be able to look at the ways that patriarchal culture keeps them from knowing themselves, from being in touch with their feelings, from loving. In The Will to Change, bell hooks gets to the heart of the matter and shows men how to express the emotions that are a fundamental part of who they are—whatever their age, marital status, ethnicity, or sexual orientation."
            review="Recommended by my sister and a friend. Feminist book, initially elicits a bit of an eyerole as a more 'quantitative' person. This was a decent read though. Makes you assess the value and privileges afforded by your gender."
            link={
              'https://www.goodreads.com/book/show/17601.The_Will_to_Change'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book7}
            title="The Player of Games"
            author="	
            Banks, Iain M."
            genre={['SciFi', 'Fantasy']}
            dateCompleted="Apr 04, 2021"
            rating={8}
            description="The Culture - a humanoid/machine symbiotic society - has thrown up many great Game Players. One of the best is Jernau Morat Gurgeh, Player of Games, master of every board, computer and strategy. Bored with success, Gurgeh travels to the Empire of Azad, cruel & incredibly wealthy, to try their fabulous game, a game so complex, so like life itself, that the winner becomes emperor. Mocked, blackmailed, almost murdered, Gurgeh accepts the game and with it the challenge of his life, and very possibly his death."
            review="This book comes from an awesome imagination. The Culture’s best game player competes against an alien society where games decide everything. Maybe a little didactic, but I had a good time reading it."
            topPick={true}
            link={
              'https://www.goodreads.com/book/show/18630.The_Player_of_Games'
            }
          />
          <Book
            img={book8}
            title="Industrial Society and Its Future"
            author="Kaczynski, Theodore J."
            genre={['Philosophy', 'Politics', 'Nonfiction', 'Economics']}
            dateCompleted="Jan 15, 2021"
            rating={6}
            description="The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in 'advanced' countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world. The continued development of technology will worsen the situation. It will certainly subject human beings to greater indignities and inflict greater damage on the natural world, it will probably lead to greater social disruption and psychological suffering, and it may lead to increased physical suffering even in 'advanced' countries."
            review="If you're familiar with the meme, this whole book is summed up as 'return to monkee'. Calls into question the isssues surrounding industralisation on our well being. Heavy heavy heavy alt right political slant, which greatly detracts from it's brilliance. At time's it's genuinely captured me, but the writer is a psycho and he says psycho things. Would still recommend it though."
            link={
              'https://www.goodreads.com/book/show/225468.Industrial_Society_and_Its_Future'
            }
          />
          <Book
            img={book9}
            title="Utopia for Realists: How We Can Build the Ideal World"
            author="Bregman, Rutger"
            genre={['Philosophy', 'Politics', 'Nonfiction', 'Economics']}
            dateCompleted="Jan 08, 2021"
            rating={7}
            description="Universal basic income. A 15-hour workweek. Open borders. Does it sound too good to be true? One of Europe's leading young thinkers shows how we can build an ideal world today.

            'A more politically radical Malcolm Gladwell.'
            —The New York Times
            
            After working all day at jobs we often dislike, we buy things we don't need. Rutger Bregman, a Dutch historian, reminds us it needn't be this way—and in some places it isn't. Rutger Bregman's TED Talk about universal basic income seemed impossibly radical when he delivered it in 2014. A quarter of a million views later, the subject of that video is being seriously considered by leading economists and government leaders the world over. It's just one of the many utopian ideas that Bregman proves is possible today."
            review="Gives historical and contemporary examples of UBI and why it should work. Expected outcomes of UBI and how it's being discredited my mainstream media. Good read."
            link={
              'https://www.goodreads.com/book/show/40876575-utopia-for-realists'
            }
          />
        </SimpleGrid>
        <Spacer />
        <Text align="center" p="10">
          I've also read a lot of books that I've found good and not listed.
          They're all east asian fantasy. Machine or manually translated and
          usually horribly written with repetitive storylines but we all have
          our vices.
        </Text>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book10}
            title="A Clockwork Orange"
            author="Burgess, Anthony"
            genre={['SciFi', 'Dystopia']}
            dateCompleted="Oct 26, 2020"
            rating={7}
            description="In Anthony Burgess's influential nightmare vision of the future, criminals take over after dark. Teen gang leader Alex narrates in fantastically inventive slang that echoes the violent intensity of youth rebelling against society. Dazzling and transgressive, A Clockwork Orange is a frightening fable about good and evil and the meaning of human freedom. This edition includes the controversial last chapter not published in the first edition, and Burgess’s introduction, “A Clockwork Orange Resucked.”"
            review="Fun read. Has its own lingo and lots of ultraglory violence."
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/41817486-a-clockwork-orange'
            }
          />
          <Book
            img={book11}
            title="Pimp: The Story of My Life"
            author="	
            Slim, Iceberg"
            genre={['NonFiction', 'Biography', 'Memoir']}
            dateCompleted="Aug 17, 2020"
            rating={7.5}
            description="Robert (Iceberg Slim) Beck's first book is told without bitterness and with no pretense at moralizing. It is the smells, the sounds, the fears and the petty triumphs in the world of the street pimp."
            review="Have you ever wondered what life is like for a early 20th century black american pimp? Neither did I. This was an engaging and horrifying read. Compared to the reality of what it was to be a pimp from that era they're heavily romanticised. These guys were SEVERELY fucked up. I know a bunch of useless jive talk now though. 'Trick' is still in use. Google at your own discretion NSFW."
            topPick={true}
            link={'https://www.goodreads.com/book/show/108713.Pimp'}
          />
          <Book
            img={book12}
            title="A Random Walk Down Wall Street: The Time-Tested Strategy for Successful Investing"
            author="Malkiel, Burton G."
            genre={['Finance', 'Business', 'Gender', 'Psychology']}
            dateCompleted="Jan 09, 2020"
            rating={6}
            description="Today’s stock market is not for the faint of heart. At a time of frightening volatility, what is the average investor to do?


            The answer: turn to Burton G. Malkiel’s advice in his reassuring, authoritative, gimmick-free, and perennially best-selling guide to investing. Long established as the first book to purchase before starting a portfolio or 401(k), A Random Walk Down Wall Street now features new material on “tax-loss harvesting,” the crown jewel of tax management; the current bitcoin bubble; and automated investment advisers; as well as a brand-new chapter on factor investing and risk parity. And as always, Malkiel’s core insights—on stocks and bonds, as well as real estate investment trusts, home ownership, and tangible assets like gold and collectibles— along with the book’s classic life-cycle guide to investing, will help restore confidence and composure to anyone seeking a calm route through today’s financial markets."
            review="As of the date. I'm writing this two years after read it. I can't remember much. I do remember this book was a slog to get through. The guy in the book lauds the invisible hand of the market as god and claims there will always be an eventual and inevitable return to economic parity but within a capitalisty system but idk."
            link={
              'https://www.goodreads.com/book/show/40242274-a-random-walk-down-wall-street'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book14}
            title="The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns"
            author="Bogle, John C."
            genre={['SciFi', 'Fantasy']}
            dateCompleted="Oct 26, 2020"
            rating={7}
            description="There are a few investment managers, of course, who are very good - though in the short run, it's difficult to determine whether a great record is due to luck or talent. Most advisors, however, are far better at generating high fees than they are at generating high returns. In truth, their core competence is salesmanship. Rather than listen to their siren songs, investors - large and small - should instead read Jack Bogle's The Little Book of Common Sense Investing.' - Warren Buffett, Chairman of Berkshire Hathaway, 2014 Annual Shareholder Letter.
            "
            review="Book is written by John Bogle. Found of vanguard and the OG ETF guy, pretty cool. Basically says hedge funds suck, they get slumped by ETFs."
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/171127.The_Little_Book_of_Common_Sense_Investing'
            }
          />
          <Book
            img={book15}
            title="Black Rednecks and White Liberals"
            author="Sowell, Thomas"
            genre={['Politics', 'NonFiction', 'History', 'Economics']}
            dateCompleted="Aug 17, 2020"
            rating={6}
            description="This book presents the kind of eye-opening insights into the history and culture of race for which Sowell has become famous. As late as the 1940s and 1950s, he argues, poor Southern rednecks were regarded by Northern employers and law enforcement officials as lazy, lawless, and sexually immoral. This pattern was repeated by blacks with whom they shared a subculture in the South. Over the last half century poor whites and most blacks have moved up in class and affluence, but the ghetto remains filled with black rednecks. Their attempt to escape, Sowell shows, is hampered by their white liberal friends who turn dysfunctional black redneck culture into a sacrosanct symbol of racial identity. In addition to Black Rednecks and White Liberals, the book takes on subjects ranging from Are Jews Generic? to The Real History of Slavery."
            review="Very errrr right wing. Would I recommend it? No. Am I glad I read it? Yes. Sowell is a good writer and very intelligent. He has some really interesting thoughts on 'Middle men minorities' and the pains they face. He has some good points but paints a few issues as 'clear cut' (Segerated school, Middle class black americans, black culture being an extension or opposite side of the coin to southern rednack culture) when he is clearly a very biased man. Kind of agree with him on the hypocristy of liberal americans though. "
            link={
              'https://www.goodreads.com/book/show/3040.Black_Rednecks_and_White_Liberals'
            }
          />
          <Book
            img={book16}
            title="A Mind for Numbers: How to Excel at Math and Science"
            author="Oakley, Barbara"
            genre={['Self-help']}
            dateCompleted="Jan 09, 2020"
            rating={7}
            description="In A Mind for Numbers, Dr. Oakley lets us in on the secrets to effectively learning math and science—secrets that even dedicated and successful students wish they’d known earlier. Contrary to popular belief, math requires creative, as well as analytical, thinking. Most people think that there’s only one way to do a problem, when in actuality, there are often a number of different solutions—you just need the creativity to see them. For example, there are more than three hundred different known proofs of the Pythagorean Theorem. In short, studying a problem in a laser-focused way until you reach a solution is not an effective way to learn math. Rather, it involves taking the time to step away from a problem and allow the more relaxed and creative part of the brain to take over. A Mind for Numbers shows us that we all have what it takes to excel in math, and learning it is not as painful as some might think!"
            review="Good read. I didn't incorporate much into my daily life unfortunately. Nice with the focused and diffused mode of thinking. Interleaved learning is the way to go."
            link={
              'https://www.goodreads.com/book/show/18693655-a-mind-for-numbers'
            }
          />
        </SimpleGrid>
        <Spacer />
        <Text align="center" p="10">
          I've tried to intersperse the occasional self-helpy, educational book
          here and there.
        </Text>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book17}
            title="The Handmaid's Tale"
            author="Atwood, Margaret"
            genre={['SciFi', 'Feminism', 'Dystopia']}
            dateCompleted="Aug 19, 2019"
            rating={7.5}
            description="Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now . . ."
            review="A classic. Initially was jarred by the writing style. Helps with immersion in the end. Really stark parallels between issues of womens right and religious fundamentalism today and the fictitious world of the book."
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/38447.The_Handmaid_s_Tale'
            }
          />
          <Book
            img={book18}
            title="	
            The Lucifer Effect: Understanding How Good People Turn Evil"
            author="Zimbardo, Philip G."
            genre={['Psychology', 'NonFiction', 'Science']}
            dateCompleted="Aug 19, 2019"
            rating={7.5}
            description="Renowned social psychologist and creator of the 'Stanford Prison Experiment,' Philip Zimbardo explores the mechanisms that make good people do bad things, how moral people can be seduced into acting immorally, and what this says about the line separating good from evil."
            review=" - "
            link={
              'https://www.goodreads.com/book/show/359194.The_Lucifer_Effect'
            }
          />
          <Book
            img={book19}
            title="Bowling Alone: The Collapse and Revival of American Community"
            author="Putnam, Robert D."
            genre={['NonFiction', 'Sociology', 'Politics']}
            dateCompleted="Aug 19, 2019"
            rating={7}
            description="Once we bowled in leagues, usually after work--but no longer. This seemingly small phenomenon symbolizes a significant social change that Robert Putnam has identified in this brilliant volume, which The Economist hailed as 'a prodigious achievement.'

            Drawing on vast new data that reveal Americans' changing behavior, Putnam shows how we have become increasingly disconnected from one another and how social structures--whether they be PTA, church, or political parties--have disintegrated. Until the publication of this groundbreaking work, no one had so deftly diagnosed the harm that these broken bonds have wreaked on our physical and civic health, nor had anyone exalted their fundamental power in creating a society that is happy, healthy, and safe."
            link={'https://www.goodreads.com/book/show/478.Bowling_Alone'}
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book20}
            title="The Accidental Superpower"
            author="Zeihan, Peter"
            genre={['Politics', 'NonFiction', 'History', 'Economics']}
            dateCompleted="May 10, 2019"
            rating={7}
            description="In The Accidental Superpower, international strategist Peter Zeihan examines how the hard rules of geography are eroding the American commitment to free trade; how much of the planet is aging into a mass retirement that will enervate markets and capital supplies; and how, against all odds, it is the ever-ravenous American economy that - alone among the developed nations - is rapidly approaching energy independence. Combined, these factors are doing nothing less than overturning the global system and ushering in a new (dis)order."
            review="This is a pretty good book, read when I was depressed"
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/21926865-the-accidental-superpower'
            }
          />
          <Book
            img={book21}
            title="	
            Boychiks in the Hood: Travels in the Hasidic Underground"
            author="Eisenberg, Robert"
            genre={['NonFiction', 'Jewish', 'Religion']}
            dateCompleted="Mar 16, 2019"
            rating={7}
            description="Boychiks in the Hood is your passport to the Hasidic 'underworld' -- a destination far different from popular expectations. Join Robert Eisenberg as he hangs out with an ex-Deadhead in Antwerp, makes a pilgrimage to the grave of the revered Rebbie Nachman in the Ukraine, munches mini-bagels with Rollerblading kosher butchers in Minnesota, discovers the last remaining religious Jews in Poland, talks sex with a karate-champion-turned-rabbi in Israel, and more.Simultaneously respectful and hilarious, Boychiks in the Hood is a surprising and unforgettable journey through the world's flourishing Hasidic communities that reveals this vibrant tradition as never before."
            review="Mad sturdy jewish book. Hasidic jews are a very interesting peoples."
            link={
              'https://www.goodreads.com/book/show/282484.Boychiks_in_the_Hood'
            }
          />
          <Book
            img={book22}
            title="Flowers for Algernon"
            author="Keyes, Daniel"
            genre={['SciFi']}
            dateCompleted="Feb 10, 2019"
            rating={10}
            description="The story of a mentally disabled man whose experimental quest for intelligence mirrors that of Algernon, an extraordinary lab mouse. In diary entries, Charlie tells how a brain operation increases his IQ and changes his life. As the experimental procedure takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment seems to be a scientific breakthrough of paramount importance until Algernon begins his sudden, unexpected deterioration. Will the same happen to Charlie?"
            review="Not even gonna lie. This book made me cry. Required reading imo."
            topPick={true}
            link={
              'https://www.goodreads.com/book/show/18373.Flowers_for_Algernon'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book23}
            title="Man's Search for Meaning"
            author="	
            Frankl, Viktor E."
            genre={['Nonfiction', 'Psychology', 'Philosophy', 'History']}
            dateCompleted="Feb 08, 2019"
            rating={10}
            description="Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in the very act of living."
            review="This is a pretty good book, read when I was depressed, reads like the bible to me now. 10/10 book on life."
            topPick={true}
            link={
              'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning'
            }
          />
          <Book
            img={book24}
            title="Discrimination and Disparities"
            author="Sowell, Thomas"
            genre={['Politics', 'NonFiction', 'History', 'Economics']}
            dateCompleted="Jan 22, 2019"
            rating={6.5}
            description="Discrimination and Disparities challenges believers in such one-factor explanations of economic outcome differences as discrimination, exploitation or genetics. It is readable enough for people with no prior knowledge of economics. Yet the empirical evidence with which it backs up its analysis spans the globe and challenges beliefs across the ideological spectrum.
            The point of Discrimination and Disparities is not to recommend some particular policy 'fix' at the end, but to clarify why so many policy fixes have turned out to be counterproductive, and to expose some seemingly invincible fallacies behind many counterproductive policies.
            The final chapter deals with social visions and their human consequences"
            review=""
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/36222735-discrimination-and-disparities'
            }
          />
          <Book
            img={book25}
            title="Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy"
            author="O'Neil, Cathy"
            genre={['NonFiction', 'Science', 'Technology', 'Politics']}
            dateCompleted="Jan 22, 2019"
            rating={7}
            description="We live in the age of the algorithm. Increasingly, the decisions that affect our lives--where we go to school, whether we can get a job or a loan, how much we pay for health insurance--are being made not by humans, but by machines. In theory, this should lead to greater fairness: Everyone is judged according to the same rules.
            But as mathematician and data scientist Cathy O'Neil reveals, the mathematical models being used today are unregulated and uncontestable, even when they're wrong. Most troubling, they reinforce discrimination--propping up the lucky, punishing the downtrodden, and undermining our democracy in the process"
            review="This is a pretty good book, read when I was depressed"
            link={
              'https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction'
            }
          />
        </SimpleGrid>
        <Spacer />
        <Text align="center" p="10">
          This 2018 period was when I made a conscious decision to up my
          knowledge game and become an active reader. I read a lot of books.
        </Text>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book26}
            title="Morning Star"
            author="	
            Brown, Pierce"
            genre={['SciFi', 'Fantasy', 'Political Undertones']}
            dateCompleted="Summer, 2018"
            rating={7.5}
            description="Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations.

            Yet he spends his life willingly, knowing that his blood and sweat will one day result in a better world for his children.
            
            But Darrow and his kind have been betrayed. Soon he discovers that humanity already reached the surface generations ago. Vast cities and sprawling parks spread across the planet. Darrow—and Reds like him—are nothing more than slaves to a decadent ruling class.
            
            Inspired by a longing for justice, and driven by the memory of lost love, Darrow sacrifices everything to infiltrate the legendary Institute, a proving ground for the dominant Gold caste, where the next generation of humanity's overlords struggle for power. He will be forced to compete for his life and the very future of civilization against the best and most brutal of Society's ruling class. There, he will stop at nothing to bring down his enemies... even if it means he has to become one of them to do so."
            review="A little bit old for this when I read it. Was entertaining, political undertones and nice world building. Rags to riches story with a garnish of revengance."
            link={'https://www.goodreads.com/book/show/18966806-morning-star'}
          />
          <Book
            img={book27}
            title="Golden Son"
            author="Brown, Pierce"
            genre={['SciFi', 'Fantasy', 'Political Undertones']}
            dateCompleted="Summer, 2018"
            rating={7.5}
            description="Second book in series"
            review="A little bit old for this when I read it. Was entertaining, political undertones and nice world building. Rags to riches story with a garnish of revengance."
            topPick={false}
            link={'https://www.goodreads.com/book/show/18966819-golden-son'}
          />
          <Book
            img={book28}
            title="Red Rising"
            author="Brown, Pierce"
            genre={['SciFi', 'Fantasy', 'Political Undertones']}
            dateCompleted="Summer, 2018"
            rating={7.5}
            description="Third book in series"
            review="This is a pretty good book, read when I was depressed"
            link={'https://www.goodreads.com/book/show/15839976-red-rising'}
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book29}
            title="Brave New World"
            author="Huxley, Aldous"
            genre={['SciFi', 'Fantasy', 'Dystopian', 'Philosophy']}
            dateCompleted="Autumn, 2018"
            rating={6.5}
            description="Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist."
            review="Part of the capitalist democratic canon of books to read. Just enough truth in this book to make elements of it feel like it could come to fruition. A caste society, seedy hidden governments and a numbed populace. Decent read not that fun though. "
            link={'https://www.goodreads.com/book/show/5129.Brave_New_World'}
          />
          <Book
            img={book30}
            title="	
            Guns, Germs, and Steel: The Fates of Human Societies"
            author="Diamond, Jared"
            genre={['Politics', 'NonFiction', 'History', 'Geopolitics']}
            dateCompleted="Autumn, 2018"
            rating={7}
            description="In this 'artful, informative, and delightful' (William H. McNeill, New York Review of Books) book, Jared Diamond convincingly argues that geographical and environmental factors shaped the modern world. Societies that had a head start in food production advanced beyond the hunter-gatherer stage, and then developed writing, technology, government, and organized religion—as well as nasty germs and potent weapons of war—and adventured on sea and land to conquer and decimate preliterate cultures. A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history."
            review="One of the most informative books I've ever read. Lots of insights into geopolitical successes and failures of certain areas in the world. "
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/1842.Guns_Germs_and_Steel'
            }
          />
          <Book
            img={book32}
            title="Basic Economics: A Citizen's Guide to the Economy"
            author="Sowell, Thomas"
            genre={['Politics', 'NonFiction', 'Conservative', 'Economics']}
            dateCompleted="Spring, 2018"
            rating={6}
            description="Basic Economics is a citizen's guide to economics-for those who want to understand how the economy works but have no interest in jargon or equations. Sowell reveals the general principles behind any kind of economy-capitalist, socialist, feudal, and so on. In readable language, he shows how to critique economic policies in terms of the incentives they create, rather than the goals they proclaim. With clear explanations of the entire field, from rent control and the rise and fall of businesses to the international balance of payments, this is the first book for anyone who wishes to understand how the economy functions."
            review="Yet again. Another well written good read from sowell. Painting opinions as absolute truths is this boooks but he's smarter than me so fair enough. Decent read."
            link={'https://www.goodreads.com/book/show/3023.Basic_Economics'}
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book33}
            title="The Way of the Superior Man: A Spiritual Guide to Mastering the Challenges of Women, Work, and Sexual Desire"
            author="Deida, David"
            genre={['Self Help', 'Psychology']}
            dateCompleted="Early, 2018"
            rating={1}
            description="What is your true purpose in life? What do women really want? What makes a good lover? If you're a man reading this, you've undoubtedly asked yourself these questions—but you may not have had much luck answering them. Until now.

            In The Way of the Superior Man, David Deida explores the most important issues in men's lives—from career and family to women and intimacy to love and spirituality and relationships—to offer a practical guidebook for living a masculine life of integrity, authenticity, and freedom. Join this bestselling author and internationally renowned expert on sexual spirituality for straightforward advice, empowering skills, body practices, and more to help you realize a life of fulfillment, immediately and without compromise.
            
            'It is time to evolve beyond the macho jerk ideal, all spine and no heart,' writes David Deida. 'It is also time to evolve beyond the sensitive and caring wimp ideal, all heart and no spine.' The Way of the Superior Man presents the ultimate challenge—and reward—for today's man: to discover the 'unity of heart and spine' through the full expression of consciousness and love in the infinite openness of the present moment.'"
            review="Incel fodder. Read the whole thing because why not. Drifted a bit close to the alt right pipeline with this one."
            link={
              'https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man'
            }
          />
          <Book
            img={book34}
            title="	
            The Design of Everyday Things"
            author="Norman, Donald A."
            genre={['Design', 'NonFiction', 'Business', 'Psychology']}
            dateCompleted="Autumn, 2018"
            rating={9.5}
            description="Anyone who designs anything to be used by humans -- from physical objects to computer programs to conceptual tools -- must read this book, and it is an equally tremendous read for anyone who has to use anything created by another human. It could forever change how you experience and interact with your physical surroundings, open your eyes to the perversity of bad design and the desirability of good design, and raise your expectations about how things should be designed."
            review="Absolutely brilliant book. This book makes you question everything. The way usability has become enmeshed in our lives is fundamental for the way we experience just about everything. We don't really notice though as that's the whole point of good usability. Thoroughly enjoyed."
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things'
            }
          />
          <Book
            img={book35}
            title="Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability"
            author="Krug, Steve "
            genre={['Design', 'Nonfiction', 'Business', 'Programming']}
            dateCompleted="Summer, 2018"
            rating={7}
            description="Since Don’t Make Me Think was first published in 2000, over 400,000 Web designers and developers have relied on Steve Krug’s guide to help them understand the principles of intuitive navigation and information design.

            In this 3rd edition, Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic-–with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrated…and best of all–fun to read.
            
            If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites."
            review="This was a nice follow up read after Design of everyday things. I can't remember much but I remember enjoying it and thinking I will come back to it when I start my career as a web developer lol. - 'Ibs, 2021'"
            link={
              'https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book37}
            title="Rich Dad, Poor Dad"
            author="Kiyosaki, Robert T."
            genre={['Self help', 'Business', 'Finance', 'NonFiction']}
            dateCompleted="Early, 2018"
            rating={7}
            description="Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his 'rich dad' — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you."
            review="This is a pretty good book, read when I was depressed"
            link={'https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad'}
          />
          <Book
            img={book38}
            title="1984"
            author="	
            Orwell, George"
            genre={['SciFi', 'Dystopia', 'Politics']}
            dateCompleted="Summer, 2018"
            rating={7}
            description="Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
            review="Another book in the western canon. Paints a bleak picture of administrative over reach and the dangers of a big brother state. Ironic that it was written by a socialist and so often referenced by conservatives."
            topPick={false}
            link={'https://www.goodreads.com/book/show/40961427-1984'}
          />
          <Book
            img={book40}
            title="No More Mr. Nice Guy"
            author="	
            Glover, Robert A."
            genre={['Feminism', 'Nonfiction', 'Gender', 'Psychology']}
            dateCompleted="Summer, 2018"
            rating={7}
            description="Originally published as an e-book that became a controversial media phenomenon, No More Mr. Nice Guy! landed its author, a certified marriage and family therapist, on The O'Reilly Factor and the Rush Limbaugh radio show. Dr. Robert Glover has dubbed the 'Nice Guy Syndrome' trying too hard to please others while neglecting one's own needs, thus causing unhappiness and resentfulness. It's no wonder that unfulfilled Nice Guys lash out in frustration at their loved ones, claims Dr. Glover. He explains how they can stop seeking approval and start getting what they want in life, by presenting the information and tools to help them ensure their needs are met, to express their emotions, to have a satisfying sex life, to embrace their masculinity and form meaningful relationships with other men, and to live up to their creative potential."
            review="Another incel fodder book. He makes some decent points at times. Can't remember much but I do remember reading it and saying 'wtf' out loud a few times."
            link={
              'https://www.goodreads.com/book/show/97642.No_More_Mr_Nice_Guy'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book42}
            title="Prisoners of Geography: Ten Maps That Tell You Everything You Need to Know About Global Politics"
            author="Marshall, Tim"
            genre={['Politics', 'NonFiction', 'History', 'Geopolitics']}
            dateCompleted="Early, 2018"
            rating={10}
            topPick={true}
            description="In the bestselling tradition of Why Nations Fail and The Revenge of Geography, an award-winning journalist uses ten maps of crucial regions to explain the geo-political strategies of the world powers.

            All leaders of nations are constrained by geography. Their choices are limited by mountains, rivers, seas, and concrete. To understand world events, news organizations and other authorities often focus on people, ideas, and political movements, but without geography, we never have the full picture. Now, in the relevant and timely Prisoners of Geography, seasoned journalist Tim Marshall examines Russia, China, the USA, Latin America, the Middle East, Africa, Europe, Japan and Korea, and Greenland and the Arctic—their weather, seas, mountains, rivers, deserts, and borders—to provide a context often missing from our political reportage: how the physical characteristics of these countries affect their strengths and vulnerabilities and the decisions made by their leaders."
            review="This was a great book! My introduction to geopolitics. 'Why life is a game of CIV'. Great read, super digestible and fun maps (Which is not a thing I thought I'd say)."
            link={
              'https://www.goodreads.com/book/show/25135194-prisoners-of-geography'
            }
          />
          <Book
            img={book43}
            title="World Order"
            author="Kissinger, Henry"
            genre={[
              'Politics',
              'History',
              'NonFiction',
              'International Relations',
            ]}
            dateCompleted="Summer, 2018"
            rating={7}
            description="Henry Kissinger offers in World Order a deep meditation on the roots of international harmony and global disorder. Drawing on his experience as one of the foremost statesmen of the modern era—advising presidents, traveling the world, observing and shaping the central foreign policy events of recent decades—Kissinger now reveals his analysis of the ultimate challenge for the twenty-first century: how to build a shared international order in a world of divergent historical perspectives, violent conflict, proliferating technology, and ideological extremism."
            review="I'm no dummy by any means but this guy uses very big words, it was kind of fun to read for that reason alone haha. This was an 'america number 1' book, from a war criminal (I have not read about his war crimes at all). American exceptionalism flows from every chapter in this book. Really interesting read about foreign affairs, from americas perspective. Interesting to see how kissinger seeks to estabilish a west centric international order and the challenges he faced. "
            topPick={false}
            link={'https://www.goodreads.com/book/show/20821140-world-order'}
          />
          <Book
            img={book44}
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
            author="Manson, Mark"
            genre={['Feminism', 'Nonfiction', 'Gender', 'Psychology']}
            dateCompleted="Summer, 2018"
            rating={7}
            description="In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people.

            For decades, we’ve been told that positive thinking is the key to a happy, rich life. 'F**k positivity,' Mark Manson says. 'Let’s be honest, shit is f**ked and we have to live with it.' In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up.
            
            Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—'not everybody can be extraordinary, there are winners and losers in society, and some of it is not fair or your fault.' Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults, and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity, and forgiveness we seek."
            link={
              'https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book46}
            title="Sapiens: A Brief History of Humankind"
            author="Harari, Yuval Noah"
            genre={['NonFiction', 'History', 'Science', 'Anthropolgy']}
            dateCompleted="Early, 2018"
            rating={9}
            description="100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

            How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?
            
            In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?"
            review="Very enjoyable. This book does an insane job of wrapping up the history of everything of humankind. Doesn't say anything that was particularly new to me but it was delivered in such a digestible style that I had to give it a high rating. Would highly reccomend."
            link={'https://www.goodreads.com/book/show/23692271-sapiens'}
          />
          <Book
            img={book47}
            title="The Intelligent Investor"
            author="Graham, Benjamin"
            genre={['Finance', 'Business', 'NonFiction', 'Economics']}
            dateCompleted="Late, 2017"
            rating={5}
            description="The Classic Text Annotated to Update Graham's Timeless Wisdom for Today's Market Conditions

            The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.
            
            Over the years, market developments have proven the wisdom of Graham's strategies. While preserving the integrity of Graham's original text, this revised edition includes updated commentary by noted financial journalist Jason Zweig, whose perspective incorporates the realities of today's market, draws parallels between Graham's examples and today's financial headlines, and gives readers a more thorough understanding of how to apply Graham's principles."
            review="Summarised: 'Diversify. Dollar cost average.' This book was dense as fuck. Glazed over for most of it. Actually would not recommend. "
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/106835.The_Intelligent_Investor'
            }
          />
          <Book
            img={book48}
            title="Think and Grow Rich"
            author="Hill, Napoleon"
            genre={['NonFiction', 'Self help', 'Psychology', 'Finance']}
            dateCompleted="Summer, 2018"
            rating={7.5}
            description="Men cannot change if there are no blueprints for change. Men cannot love if they are not taught the art of loving. Love is vital to maleness, to the spiritual and emotional wholeness men seek.' —bell hooks 
            Everyone needs to love and be loved—even men. But to know love, men must be able to look at the ways that patriarchal culture keeps them from knowing themselves, from being in touch with their feelings, from loving. In The Will to Change, bell hooks gets to the heart of the matter and shows men how to express the emotions that are a fundamental part of who they are—whatever their age, marital status, ethnicity, or sexual orientation."
            review="Gets you in that 'money money mindset grindset'. Not for me but can see how it's very good for some."
            link={
              'https://www.goodreads.com/book/show/30186948-think-and-grow-rich'
            }
          />
        </SimpleGrid>
        <Spacer />
        <SimpleGrid columns={[1, 3]} spacingX={['0px', '25px']} align="center">
          <Book
            img={book50}
            title="How to Win Friends and Influence People"
            author="Carnegie, Dale"
            genre={['Self Help', 'Psychology']}
            dateCompleted="Pre, 2017"
            rating={7}
            description="Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of the The Hitch Hiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out of work actor."
            review="Decent read. I was given this book in year 11 of secondary school at an assembly thing. Collected dust for two years before I read in summer of 2017. Framework for basic EQ if I recall correctly. Seminal book by Dale Carnegie. Not to be confused with Andrew Carnegie (American steel tycoon, I conflated the two for very long)."
            topPick={false}
            link={
              'https://www.goodreads.com/book/show/106835.The_Intelligent_Investor'
            }
          />
          <Book
            img={book51}
            title="Fahrenheit 451"
            author="Bradbury, Ray"
            genre={['SciFi', 'Dystopia', 'Politics']}
            dateCompleted="Pre, 2017"
            rating={7}
            description="Sixty years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before.

            Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known."
            review=""
            topPick={false}
            link={'https://www.goodreads.com/book/show/13079982-fahrenheit-451'}
          />
          <Book
            img={book49}
            title="	
            Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think"
            author="Rosling, Hans"
            genre={['Nonfiction', 'Science', 'Psychology', 'Economics']}
            dateCompleted="Late, 2018"
            rating={8}
            description="When asked simple questions about global trends - why the world's population is increasing; how many young women go to school; how many of us live in poverty - we systematically get the answers wrong. So wrong that a chimpanzee choosing answers at random will consistently outguess journalists, Nobel laureates, and investment bankers.

            In Factfulness, Professor of International Health and a man who can make data sing, Hans Rosling, together with his two long-time collaborators Anna and Ola, offers a radical new explanation of why this happens, and reveals the ten instincts that distort our perspective.
            
            It turns out that the world, for all its imperfections, is in a much better state than we might think. But when we worry about everything all the time instead of embracing a worldview based on facts, we can lose our ability to focus on the things that threaten us most.
            
            Inspiring and revelatory, filled with lively anecdotes and moving stories, Factfulness is an urgent and essential book that will change the way you see the world."
            review="Great book. Really goes to show how most peoples mental models of the world are really out of date. I don't talk about the findings in this too much as it get you in a 'good enough' mindset with issues. Plus I think we're entering a time were we will begin to see an unravelling of a fair number of these trends."
            topPick={true}
            link={'https://www.goodreads.com/book/show/34890015-factfulness'}
          />
        </SimpleGrid>
        <Spacer />
        <Text align="center" p="10">
          Then there’s a ton of YA novels I've read before that. A few mentions
          would be the Harry Potter Series, Game of Thrones, Eragon Series and
          various other novels I've read and forgotten about.
        </Text>
        <Spacer />
      </div>
    </>
  )
}

export default Books
