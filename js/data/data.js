export const gameData = {
  lifeCount: 3,
  timeCount: 5,
  level: 1,
  answerReward: 1,
  answerCount: 0,
  fastAnswerReward: 2,
  fastAnswerCount: 0,
  points: 0
};

export const levels = [
  {
    levelType: `artist`,
    artistList: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.artistList[this.correctAnswerNum].src;
    },
    get correctAnswerArtist() {
      return this.artistList[this.correctAnswerNum].artist;
    }
  },
  {
    levelType: `genre`,
    genreList: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.genreList[this.correctAnswerNum].src;
    },
    get correctAnswerGenre() {
      return this.genreList[this.correctAnswerNum].genre;
    }
  },
  {
    levelType: `artist`,
    artistList: [
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.artistList[this.correctAnswerNum].src;
    },
    get correctAnswerArtist() {
      return this.artistList[this.correctAnswerNum].artist;
    }
  },
  {
    levelType: `genre`,
    genreList: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.genreList[this.correctAnswerNum].src;
    },
    get correctAnswerGenre() {
      return this.genreList[this.correctAnswerNum].genre;
    }
  },
  {
    levelType: `artist`,
    artistList: [
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.artistList[this.correctAnswerNum].src;
    },
    get correctAnswerArtist() {
      return this.artistList[this.correctAnswerNum].artist;
    }
  },
  {
    levelType: `genre`,
    genreList: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.genreList[this.correctAnswerNum].src;
    },
    get correctAnswerGenre() {
      return this.genreList[this.correctAnswerNum].genre;
    }
  },
  {
    levelType: `artist`,
    artistList: [
      {
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.artistList[this.correctAnswerNum].src;
    },
    get correctAnswerArtist() {
      return this.artistList[this.correctAnswerNum].artist;
    }
  },
  {
    levelType: `genre`,
    genreList: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.genreList[this.correctAnswerNum].src;
    },
    get correctAnswerGenre() {
      return this.genreList[this.correctAnswerNum].genre;
    }
  },
  {
    levelType: `artist`,
    artistList: [
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.artistList[this.correctAnswerNum].src;
    },
    get correctAnswerArtist() {
      return this.artistList[this.correctAnswerNum].artist;
    }
  },
  {
    levelType: `genre`,
    genreList: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    correctAnswerNum: 0,
    get correctAnswerSrc() {
      return this.genreList[this.correctAnswerNum].src;
    },
    get correctAnswerGenre() {
      return this.genreList[this.correctAnswerNum].genre;
    }
  }
];

// Music from https://www.youtube.com/audiolibrary/music?feature=blog
export const artistsData = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Gunnar Olsen`,
    name: `Home Stretch`,
    image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Electronic`
  }
];
