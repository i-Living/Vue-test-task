new Vue({
  el: '#app',
  data: {
    rows: [{
      name: 'Мороженое',
      count: '1',
      price: '10.0'
    }, {
      name: 'Пирожное',
      count: '2',
      price: '20.0'
    }, {
      name: 'Кофе',
      count: '3',
      price: '12.3'
    }],
  },
  methods: {
    tableClick: function(event) {
      var input = event.target.querySelector("input");

      // Check if row whith input clicked
      if (input === null) {
        return;
      } else {
        event.target.classList.add("hidden-field");
        input.focus();
      }
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
