import facebookIcon from '@/assets/svg/icon-facebook.svg';
import mediumIcon from '@/assets/svg/icon-medium.svg';
import SetlistComponent from '@/components/SetlistComponent/SetlistComponent'

import setlistRepository from '../../data/SetlistRepository'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Escoge la canción',
      settings: {
        songs: [],
        newSong: {
          title: '',
          author: '',
          votes: 0
        },
        userID:'0002'
      },
      setlist:{
        songsAdded:[]
      },
      temp:''
    }
  },
  components: { 
    'c-setlist': SetlistComponent
  },
  created: function()
  {
    setlistRepository.on('added', (newSong) => {
      this.settings.songs.unshift(newSong) // add the note to the beginning of the array
    });

    this.settings.songs = setlistRepository.fetchSongs();   

    this.setlist.songsAdded = setlistRepository.fetchSetlist();   

  },
  methods: {
    addSong: function(song, id) { 
      setlistRepository.addSongToSetlist(song.id, '-KxA-jkTciF1f1zcL4Oq', this.settings.userID);
    },
    sortedSongs: function() {
      return this.setlist.songsAdded.sort((a, b) => b.votes - a.votes);
    }
  } 
}
