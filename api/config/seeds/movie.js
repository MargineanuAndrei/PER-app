exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      const data = [
        {
          title: 'The Shape of Water',
          description: 'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.',
          rating: 8
        },
        {
          title: 'Black Panther',
          description: 'T\'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T\'Challa\'s father\'s mistake.',
          rating: 9
        },
        {
          title: 'Red Sparrow',
          description: 'Ballerina Dominika Egorova is recruited to \'Sparrow School,\' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.',
          rating: 8
        },
      ];
      return knex('movies').insert(data);
    });
};
