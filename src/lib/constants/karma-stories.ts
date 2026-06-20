export type KarmaStory = {
  id: string;
  heading: string;
  body: string;
};

export const karmaStories: KarmaStory[] = [
  {
    id: "joshua-coombes",
    heading: "#DoSomethingForNothing",
    body: "I 2015 gav London-frisøren Joshua Coombes en gratis klipning til en hjemløs mand. En uselvisk gestus, der komplet ændrede hans liv. Mandens historie rørte ham, og Joshua mærkede, hvordan det påvirkede ham positivt at hjælpe. Derfor begyndte han at klippe flere hjemløse. Joshua startede senere kampagnen #DoSomethingForNothing og endte med at påvirke tusindvis af mennesker i hele verden.",
  },
  {
    id: "ollie-birthday-cards",
    heading: "Tillykke Ollie",
    body: "Da den autistiske dreng Ollie blev 15 år, fortalte han sin mor, at han elskede at åbne fødselsdagskort. Da han ikke havde mange venner, havde han lavet et par kort til sig selv, som han glædede sig til at åbne. Moren lavede et Facebook-opslag og spurgte, om nogen mon havde lyst til at sende et kort. I løbet af de næste uger modtog Ollie over 20.000 fødselsdagskort.",
  },
];

export function getRandomKarmaStory(excludeId?: string): KarmaStory {
  const pool = excludeId
    ? karmaStories.filter((story) => story.id !== excludeId)
    : karmaStories;

  if (pool.length === 0) {
    return karmaStories[0];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}
