(function() {

  window.DATA_STORAGE = {
    articles: [
      {
        key         : 'article0',
        name        : "Game Project",
        category    : "games",
        poster      : true,
        description : 'project desc',
        text        : 'long desc text',
        images      : 3,
        date        : '2016',
        features    : [
          '3dcoat',
          '3dmax',
          'after-effects',
          'cryengine',
          'maya',
          'photoshop',
          'premiere',
          'sound-forge',
          'source2',
          'substance-designer',
          'substance-painter',
          'unity',
          'unreal-engine'
        ],
        links: [
          { type : 'artstation', url : 'artstation.com' },
          { type : 'git', url : 'github.com' },
          { type : 'google-play', url : 'google-play.com' },
          { type : 'linkedin', url : 'linkedin.com' }
        ],
        content: [
          '<todo-tag></todo-tag>'
        ].join('')
      }, {
        key         : 'article1',
        name        : "Art Project",
        category    : "art",
        poster      : true,
        description : 'project desc',
        text        : 'long desc text',
        images      : 4,
        date        : '2016',
        features    : [
          'coffee',
          'cpp',
          'css',
          'html',
          'java',
          'js',
          'node',
          'python',
          'ruby',
          'sharp',
          'ts'
        ],
        links: [
          { type : 'live', url : 'live.com' },
          { type : 'steam', url : 'steam.com' },
          { type : 'youtube', url : 'youtube.com' }
        ],
        content: [
          '<todo-tag></todo-tag>'
        ].join('')
      }
    ]
  }

})(window);
