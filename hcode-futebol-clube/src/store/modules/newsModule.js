export default {
  state: {
    news: [{
      id: 1,
      title: 'Começam os treinos para a nova temporada',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam placeat pariatur est inventore accusamus deleniti ad sapiente odio eius, aut perspiciatis, fugiat exercitationem alias beatae ex rerum, iusto doloribus nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem repellendus quo quasi architecto, repellat delectus cum ducimus temporibus minus accusantium vitae vero, laborum iure autem numquam quis soluta. Accusamus!',
      date: '2020-01-01',
      img: 'news1.jpg',
      imgInfo: 'Notícia 1'
    }, {
      id: 2,
      title: 'Jogo de quarta-feira termina empatado',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam placeat pariatur est inventore accusamus deleniti ad sapiente odio eius, aut perspiciatis, fugiat exercitationem alias beatae ex rerum, iusto doloribus nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem repellendus quo quasi architecto, repellat delectus cum ducimus temporibus minus accusantium vitae vero, laborum iure autem numquam quis soluta. Accusamus!',
      date: '2020-07-01',
      img: 'news2.jpg',
      imgInfo: 'Notícia 2'
    }, {
      id: 3,
      title: 'A inauguração do novo estádio será na semana que vem',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam placeat pariatur est inventore accusamus deleniti ad sapiente odio eius, aut perspiciatis, fugiat exercitationem alias beatae ex rerum, iusto doloribus nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem repellendus quo quasi architecto, repellat delectus cum ducimus temporibus minus accusantium vitae vero, laborum iure autem numquam quis soluta. Accusamus!',
      date: '2020-01-20',
      img: 'news3.jpg',
      imgInfo: 'Notícia 3'
    }]
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getNewsFromId: state => id => {
      let notice = state.news.find(item => {
        return (item.id == id)
      });

      return notice;
    }
  }
}