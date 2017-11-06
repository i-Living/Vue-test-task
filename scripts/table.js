new Vue({
  el: '#app',
  data: {
    rows: [{
      name: 'Мороженое',
      count: '1',
      price: '10.0'
    }, {
      name: 'Пироженое',
      count: '2',
      price: '20.0'
    }, {
      name: 'Кофе',
      count: '3',
      price: '12.3'
    }],
  },
  methods: {
    rowClick: function(event) {
      event.target.classList.add("hidden-field");
      var input = event.target.querySelector("input");
      input.focus();
    },
    updateValue: function(event) {
      event.target.parentNode.classList.remove("hidden-field");
    },
    addRow: function() {
      this.rows.push({
        name: "",
        count: "",
        price: ""
      });
    },
    removeRow: function(row) {
      var index = this.rows.indexOf(row)
      this.rows.splice(index, 1);
    }
  },
  computed: {
    total: function() {
      var result = 0;
      this.rows.forEach(item => result += item.count * item.price);
      return result;
    }
  }
})
