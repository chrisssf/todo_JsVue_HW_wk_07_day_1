import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  // console.log("loaded JS file");

  new Vue({
    el: '#app',
    data: {
      toDo: [
        {name: "buy toilet paper", priority: "low"},
        {name: "eat caaaaake", priority: "low"},
        {name: "reflect on life choices", priority: "low"}
      ],
      newTask: {name: "", priority: ""}
    },
    methods: {
      addTask: function() {
        this.toDo.push(this.newTask);
        this.newTask = {name: "", priority: ""};
      },
      givePriority: function(task) {
        if (task.priority === "low"){
          return "low"
        } else {
          return "high"
        }
      }
    }
  });
});
