import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [{
                id: 1,
                name: "Brembo卡鉗",
                image: "https://1.bp.blogspot.com/-EXqrfDqC0ZQ/X0ub1ObOhSI/AAAAAAAAARY/nbG27y0w2x8bAnuss5mxv0DrhSp5JFUeACLcBGAsYHQ/s851/342936.jpg",
                amount: 1,
            },

            {
                id: 2,
                name: "環保鍊條油",
                image: "https://1.bp.blogspot.com/-6PUidBhBSMA/X0ub1PGKiyI/AAAAAAAAARc/f1P0PKMASNQlu4TWiIFUFhNAbV86GZguQCLcBGAsYHQ/s1835/342950.jpg",
                amount: 1,
            },

            {
                id: 3,
                name: "SKF Scooter Bearing",
                image: "https://1.bp.blogspot.com/-MY0a0-wA8wk/X0ub1gO4d2I/AAAAAAAAARg/QdGb_NZEGhslaMGuI_d-bcWaDf5DI7P1wCLcBGAsYHQ/s1835/342951.jpg",
                amount: 1,
            },

            {
                id: 4,
                name: "Go牛輪胎",
                image: "https://1.bp.blogspot.com/-q7NFB2pqNuQ/X0ub14HtsUI/AAAAAAAAARk/yEZCj7KhGUAGNxjx4zplbRGANuLssueoACLcBGAsYHQ/s1835/342952.jpg",
                amount: 1,
            },
            {
                id: 5,
                name: "Go牛手機支架",
                image: "https://1.bp.blogspot.com/-Fu_uVQjR6vc/X0ub2ccFOpI/AAAAAAAAARo/g4QiXQfX_bMdrJW-lVT3y38Jo37wa9cZACLcBGAsYHQ/s1424/342953.jpg",
                amount: 1,
            },
            {
                id: 6,
                name: "Gogoro 2糯米腸",
                image: "https://1.bp.blogspot.com/-mBf50T4ot9U/X0ub2aeRd-I/AAAAAAAAARs/MT75V4j45Z4-rC7CqeDm2QXsvzcG2l2cACLcBGAsYHQ/s1835/342954.jpg",
                amount: 1,
            },
            {
                id: 7,
                name: "Otar抗酸鹼油管",
                image: "https://1.bp.blogspot.com/-cTqBF7up0Ow/X0ub2_o7CVI/AAAAAAAAARw/ByOl35d_cUcGQPNcfUMeDCyAMtIavs4RgCLcBGAsYHQ/s1477/342956.jpg",
                amount: 1,
            },
        ],

        StoreCart: [],
    },
    getters: {
        products: (state) => state.products,
        StoreCart: (state) => state.StoreCart,
    },

    mutations: {
        ADD_Item(state, id) {
            state.StoreCart.push(id);
        },

        REMOVE_Item(state, index) {
            state.StoreCart.splice(index, 1);
        },
    },
    actions: {
        addItem(context, id) {
            context.commit("ADD_Item", id);
        },

        removeItem(context, index) {
            context.commit("REMOVE_Item", index);
        },
    },
    modules: {},
});