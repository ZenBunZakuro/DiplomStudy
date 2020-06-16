import { rerenderEntireTree } from "../render";

let state = {
    listPage: {
        listData: [{
                id: 1,
                image: 'https://images.homedepot-static.com/productImages/b6f29ab9-550e-4545-bfe5-7f6dd17b77bc/svn/toter-commercial-trash-cans-79296-r2968-64_1000.jpg',
                navigation: 'Местоположение',
                description: 'Some quick example text to build on the card title and make up the bulk of\n' +
                    '                    the card\'s content.',
                price: 100 + " сом"
            },
            {
                id: 2,
                image: 'https://cdn.vox-cdn.com/thumbor/HtJAvKiBn56ZgQVnwXb3EAb4hqY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11572057/Revolutionary_Technology_To_Produce_Paper_From_Plastic_Bottles_In_Trash_13.jpg',
                navigation: 'Местоположение',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
                    '                    the card\'s content.',
                price: 2000 + " сом"
            },
            {
                id: 3,
                image: 'https://russian.eurasianet.org/sites/default/files/styles/article/public/2019-12/IMG_5707.jpg?itok=SajX9-SF',
                navigation: 'Местоположение',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
                price: 1200 + " сом"
            }
        ], //Массив данных с лентой постов
        newPostDescription: '',
        newPostPrice: '',
        newPostLocation: 'Бишкек,Ак-жол,Новая 4.1'

    },
    dialogsPage: {
        dialogsData: [{
                id: 1,
                avatar: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
                name: 'Alexandra'
            },
            {
                id: 2,
                avatar: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                name: 'Andrei'
            },
            {
                id: 3,
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Dimych'
            },
            {
                id: 4,
                avatar: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                name: 'Victor'
            },
            {
                id: 5,
                avatar: 'https://6.viki.io/image/bc802eb298c041f0b5f5926968d8f79d.jpeg?s=900x600&e=t',
                name: 'Valera'
            },
            {
                id: 6,
                avatar: 'https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg',
                name: 'Sovia'
            }
        ], //Массив данных с диалогами
        messageData: [
            { id: 1, message: 'Сообщение 1' },
            { id: 2, message: 'Сообщение 2' },
            { id: 1, message: 'yo' },
            { id: 2, message: 'Yo' },
            { id: 1, message: 'Yo?' },
            { id: 2, message: 'Yo' },
        ], //Массив данных с сообщениями
    },
    profilePage: {
        profileData: [{
                id: 1,
                profileWallpaper: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
                profileImage: 'https://sun9-68.userapi.com/c850532/v850532540/191eec/OITHD8ZRuRU.jpg',
                profileTitle: 'Туратбеков Бахтияр',
                profileDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }] //Массив данных с данными о профиле
    }
}

export let addPost = (postImg, postNavigation, postDescription, postPrice) => {
    let newPost = {
        id: 3,
        image: postImg,
        navigation: postNavigation,
        description: postDescription,
        price: postPrice + " сом"
    };
    state.listPage.listData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostChange = (l, d, p) => {
    state.listPage.newPostDescription = d;
    state.listPage.newPostPrice = p;
    state.listPage.newPostLocation = l;
    rerenderEntireTree(state);
}

export default state;