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
          "f1", 'f2', 'f3'
        ],
        links: [
          { type : 'artstation', url : 'artstation.com' },
          { type : 'artstation', url : 'artstation.com' },
          { type : 'artstation', url : 'artstation.com' }
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
          "f1"
        ],
        links: [
          { type : 'artstation', url : 'artstation.com' }
        ]
      }
    ]
  }

})(window);
