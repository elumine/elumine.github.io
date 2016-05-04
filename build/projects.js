(function() {

  window.PROJECTS_STORAGE = {
    categories: [
        {
            name: 'Games',
            key: 'games',
            projects: {
                "game-project": {
                    name: "Game Project",
                    poster : true,
                    description : 'game design project desc',
                    text        : 'long desc text',
                    images      : 3,
                    date        : '2016',
                    features    : [
                        "f1"
                    ],
                    links: [
                        { type : 'artstation'     , url : 'artstatio1n.com' }
                    ]
                },
                "template-news": {
                    name: "Template News Project",
                    poster : true,
                    description : 'game design news desc',
                    date        : '2016',
                    features    : [
                        "f1"
                    ],
                    links: [
                        { type : 'artstation'     , url : 'artstatio1n.com' }
                    ],
                    content: "<template-news></template-news>"
                }
            }
        },
        {
            name: 'Level Design',
            key: 'level-design',
            projects: {
                "level-design-project": {
                    name: "Level Design Project",
                    poster : true,
                    description : 'level design project desc',
                    text        : 'long desc text',
                    images      : 3,
                    date        : '2016',
                    features    : [
                        "f1"
                    ],
                    links: [
                        { type : 'artstation'     , url : 'artstatio1n.com' }
                    ]
                }
            }
        },
        {
          name: 'Art',
          key: 'art',
          projects: {
              "art-project": {
                  name: "Art Project",
                  poster : true,
                  description : 'desc',
                  text        : 'long desc text',
                  images      : 3,
                  date        : '2016',
                  features    : [
                      "f1"
                  ],
                  links: [
                      { type : 'artstation'     , url : 'artstatio1n.com' }
                  ]
              }
          }
        },
      {
        name            : 'Programming',
        key             : 'programming',
        projects:
        {
          "multiplayer-rpg": {
            name        : 'Multiplayer RPG',
            poster      : true,
            description : 'Early freelance fun web project.',
            text        : 'long desc text',
            video       : 'index.html',
            images      : 5,
            date        : '2013',
            features    : [
                "JavaScript",
                "Canvas",
                "Socket",
                "Node",
                "HTML5"
            ],
            links: [
              { type : 'git'     , url : 'https://github.com/elumine/web.multiplayer-rpg' },
              { type : 'youtube' , url : 'https://youtu.be/jYGX3UIoDM8' }
            ]
          },
          "game-engine": {
            name        : 'Game Engine',
            poster      : true,
            description : 'Early freelance fun web project.',
            text        : 'long desc text',
            video       : 'youtube.com',
            images      : 3,
            date        : '2014',
            features    : [
                "3D",
                "Multithreading",
                "JavaScript",
                "Canvas",
                "Socket",
                "Node",
                "Worker",
                "Ajax",
                "WebGL"
            ],
            links: [
              { type : 'git'     , url : 'https://github.com/elumine/web.game-engine' },
              { type : 'youtube' , url : 'https://youtu.be/5nzaHabcD8U' },
              { type : 'live'    , url : 'http://elumine.github.io/web.game-engine' }
            ]
          },
          "canvas-video-processing": {
            name        : 'Canvas Video Processing',
            poster      : true,
            description : 'Early freelance fun web project.',
            text        : 'long desc text',
            video       : 'youtube.com',
            images      : 3,
            date        : '2014',
            features    : [ "JavaScript", "Canvas" ],
            links: [
              { type : 'youtube' , url : 'youtube.com' }
            ]
          },
          "2d-solar-system": {
            name        : '2D Solar System',
            poster      : true,
            description : 'Early freelance fun web project.',
            text        : 'long desc text',
            video       : 'youtube.com',
            images      : 3,
            date        : '2012',
            features    : [ "JavaScript", "HTML5Audio" ],
            links: [
              { type : 'git'     , url : 'https://github.com/elumine/web.solar-system' },
              { type : 'youtube' , url : 'https://youtu.be/qq4kgdadfRI' },
              { type : 'live'    , url : 'https://elumine.github.io/web.solar-system' }
            ]
          },
          "piano-synthesizer": {
            name        : 'Piano Synthesizer',
            poster      : true,
            description : 'Early freelance fun web project.',
            text        : 'long desc text',
            video       : 'youtube.com',
            images      : 3,
            date        : '2011',
            features    : [ "JavaScript", "HTML5Audio" ],
            links: [
              { type : 'git'     , url : 'https://github.com/elumine/web.piano-synthesizer' },
              { type : 'youtube' , url : 'https://elumine.github.io/web.piano-synthesizer' },
              { type : 'live'    , url : 'https://elumine.github.io/web.piano-synthesizer' }
            ]
          }
        }
      }
    ]
  }

})(window);
