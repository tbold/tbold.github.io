new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("World traveller", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Full-stack developer", {delay: 2000})
  .go();