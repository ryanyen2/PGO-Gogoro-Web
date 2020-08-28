<template>
<div>
  <b-container>
    <p style="font-style: italic;">(點選展開購物清單)</p>
    <b-button variant='info' v-b-toggle.collapse-1>喜愛的商品數量: {{ cartCount }}</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-list-group>
        <b-list-group-item
          v-for="(item, index) in cart"
          :key="index"
        >
          <b-row>
            <b-col cols=6><h6>{{ item.name }} </h6></b-col>
            <b-col><img :src="item.image" height="50" /></b-col>
            <b-col>{{ '$' + item.price }}</b-col>
            <b-col>{{item.amount}}</b-col>
            <b-col><b-button variant='danger' @click="removeItem(index)">移除</b-button></b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-collapse>
  </b-container>
  <b-container class='con'>
     <div>
      <b-card
        v-for='item in products'
        :key="item.id"
        :title='item.name'
        class="card"
      >
      <img :src='item.image' alt="image" height='200em' />
        <b-card-text>
          {{"$" + item.price }}
        </b-card-text>
        <template v-slot:footer>
          <b-form-input 
            style='max-width: 5em; margin-right:.5em; display:inline-block;'
            placeholder='amount' 
            type="number"
            v-model="item.amount"
            min="1"
          />
          <b-button variant='info' @click="addItem(item.id)">增加到購物籃</b-button>
        </template>
      </b-card>
    </div>
  </b-container>
 
</div>
  
</template>

<script>
export default {
  name: "Shopping",
  computed: {
    products() {
      return this.$store.getters.products;
    },
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
    cart() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id;
        });
      });
    }
  },
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    },
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
    showList() {
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.con {
  // border: 2px dashed #17a2b8;
  text-align: center;
  align-items: center;
}
.card{
  margin-top: 2em;
  width: 33%;
  min-width: 20em;
  display: inline-block;;
}
</style>