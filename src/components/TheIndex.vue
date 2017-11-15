<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <!-- // TODO: Iterate over movies and display some things -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'TheIndex',
  data () {
    return {
      movies: [
        {
          id: 'ged3f',
          title: 'Blade Runner',
          director: 'Ridley Scott',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
          rating: 0,
          list: false
        },
        {
          id: 'gd38s',
          title: 'The Goonies',
          director: 'Richard Donner',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'In order to save their home from foreclosure, a group of misfits set out to find a pirate\'s ancient valuable treasure.',
          rating: 0,
          list: false
        },
        {
          id: '23jh3',
          title: 'Breathless',
          director: 'Jean-Luc Godard',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he reunites with a hip American journalism student and attempts to persuade her to run away with him to Italy.',
          rating: 0,
          list: false,
          featured: true
        },
        {
          id: 'euf38',
          title: 'Raiders of the Lost Ark',
          director: 'Steven Spielberg',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.',
          rating: 0,
          list: false
        },
        {
          id: 'xnvb3',
          title: 'This Is Spinal Tap',
          director: 'Rob Reiner',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'Spinal Tap, one of England\'s loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour.',
          rating: 0,
          list: false
        },
        {
          id: 'kri39',
          title: 'The Revenant',
          director: 'Alejandro González Iñárritu',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
          rating: 0,
          list: false
        },
        {
          id: 'jeh38',
          title: '8½',
          director: 'Federico Fellini',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'A harried movie director retreats into his memories and fantasies.',
          rating: 0,
          list: false
        },
        {
          id: 'oi39c',
          title: 'E.T. the Extra-Terrestrial',
          director: 'Steven Spielberg',
          thumbnail: 'http://via.placeholder.com/250x350',
          synopsis: 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.',
          rating: 0,
          list: false
        }
      ]
    }
  }
}
</script>
