let todo = [{
    "task": "Water the plants",
    "completed": false
  },
  {
    "task": "take a bath",
    "completed": false
  }, {
    "task": "play guitar",
    "completed": false
  }
]
//SUBMIT or ADD TODO
let toSubmit = (toadd) => {
  toadd.preventDefault();
  toadd.keyCode === 13 ? addtask() : null;
}
let delTask = (event) => {
  if (event.target.closest('.input-group-append').previousElementSibling.disabled) {
    const value = event.target.closest('.input-group-append').previousElementSibling.value;
    var filtered = todo.filter(function (el) {
      return el.task != value;
    });
    todo = filtered;
    event.target.closest('.input-group-append').parentNode.remove();
    if (!todo.length) {
      $(".container-wrap").html('<div class="text-center"><h3> No Task...</h3></div>');
    }
  } else {
    alert("You can only remove completed task");
  }
} //END OF SUBMIT 


//CHECK EVENT LISTENER
let isChecked = (event) => {
  if (event.target.checked === true) {
    event.target.parentNode.parentNode.nextElementSibling.setAttribute('disabled', '');
    const valuetofind = event.target.parentNode.parentNode.nextElementSibling.value;
    const updateState =
      todo.find(toFind => {
        if (toFind.task == valuetofind) {
          toFind.completed = !toFind.completed;

        }
      });
  } else {
    event.target.parentNode.parentNode.nextElementSibling.removeAttribute('disabled');
    const valuetofind = event.target.parentNode.parentNode.nextElementSibling.value;
    const updateState =
      todo.find(toFind => {
        if (toFind.task == valuetofind) {
          toFind.completed = !toFind.completed;

        }
      });
  }
} //END OF CHECK EVENT LISTENER
//FOCUS INPUT BOX ON LOAD
document.getElementById("add-task-input").focus();
//FILTER BUTTONS
/*let filters = $(document.createElement('ul')).addClass('nav nav-tabs').attr('role', 'group');
let filterReset = $(document.createElement('div')).addClass('filters').html('ALL').attr({
  'onclick': 'alltodos()',
  'id': 'show-all'
});
filters.append(filterReset);
$(".add.row").append(filters);
let filterComplete = $(document.createElement('div')).addClass('filters').html('COMPLETED').attr('onclick', 'showComplete()');
let filterTodo = $(document.createElement('div')).addClass('filters').html('TO DO').attr('onclick', 'showTodo()');

filters.append(filterComplete);
filters.append(filterTodo);

$(".add.row").append(filters);*/
//SHOWCOMPLETE
let showComplete = () => {
    $('#show-all').removeClass("active");
    $('#show-todo').removeClass("active");
    $('#show-complete').addClass("active","");
  let toshow = todo.filter(completed =>
    completed.completed == true
  );
  $(".container-wrap").html('');
  if (toshow.length === 0) {
    $(".container-wrap").html('<div class="text-center"><h3> No completed task... </h3></div>');
  }
  toshow.map(todoList => {
    let task = $(document.createElement('div')).addClass('all-task input-group mb-3');
    let prepend = $(document.createElement('div')).addClass('input-group-prepend');
    let inputGroup = $(document.createElement('div')).addClass('input-group-text');
    let checkbox = $(document.createElement('input')).addClass('input-group-prepend').attr({
      "type": "checkbox",
      "class": "is-checked",
      "aria-label": "Checkbox for the followint text input",
      "onclick": "isChecked(event)"
    });
    checkbox.attr(todoList.completed ? "checked" : null, "");
    let input = $(document.createElement('input')).addClass('form-control').attr({
      "class": "form-control",
      "aria-label": "Text input with checkbox",
      "onchange": "toSubmit(toadd)"
    });
    input.val(todoList.task);
    input.attr(todoList.completed ? "disabled" : null, "");
    let append = $(document.createElement('div')).addClass('input-group-append');
    let deleteBtn = $(document.createElement('button')).addClass('btn btn-danger fas fa-trash').attr({
      "type": "button",
      "class": "btn btn-danger",
      "onclick": "delTask(event)"
    }).html('<i class="fas fa-trash"></i>');
    inputGroup.append(checkbox);
    prepend.append(inputGroup);
    append.append(deleteBtn);
    task.append(prepend);
    task.append(input);
    task.append(append);
    $(".container-wrap").append(task);
  });
}

let showTodo = () => {
    $('#show-complete').removeClass("active");
    $('#show-all').removeClass("active");
    $('#show-todo').addClass("active","");  $(".container-wrap").html('');
    let toshow = todo.filter(completed =>
    completed.completed == false
  );
  $(".container-wrap").html('');
  if (toshow.length === 0) {
    $(".container-wrap").html('<div class="text-center"><h3> Nothing to do...  </h3></div>');
  }
  toshow.map(todoList => {
    let task = $(document.createElement('div')).addClass('all-task input-group mb-3');
    let prepend = $(document.createElement('div')).addClass('input-group-prepend');
    let inputGroup = $(document.createElement('div')).addClass('input-group-text');
    let checkbox = $(document.createElement('input')).addClass('input-group-prepend').attr({
      "type": "checkbox",
      "class": "is-checked",
      "aria-label": "Checkbox for the followint text input",
      "onclick": "isChecked(event)"
    });
    checkbox.attr(todoList.completed ? "checked" : null, "");
    let input = $(document.createElement('input')).addClass('form-control').attr({
      "class": "form-control",
      "aria-label": "Text input with checkbox",
      "onchange": "toSubmit(toadd)"
    });
    input.val(todoList.task);
    input.attr(todoList.completed ? "disabled" : null, "");
    let append = $(document.createElement('div')).addClass('input-group-append');
    let deleteBtn = $(document.createElement('button')).addClass('btn btn-danger fas fa-trash').attr({
      "type": "button",
      "class": "btn btn-danger",
      "onclick": "delTask(event)"
    }).html('<i class="fas fa-trash"></i>');
    inputGroup.append(checkbox);
    prepend.append(inputGroup);
    append.append(deleteBtn);
    task.append(prepend);
    task.append(input);
    task.append(append);
    $(".container-wrap").append(task);
  });
}

const alltodos = () => {
    $('#show-complete').removeClass("active");
    $('#show-todo').removeClass("active");
    $('#show-all').addClass("active","");  $(".container-wrap").html('');
  if (!todo.length) {
    $(".container-wrap").html('<div class="text-center"><h3> No task...</h3></div>');
  }
  todo.map(todoList => {
    let task = $(document.createElement('div')).addClass('all-task input-group mb-3');
    let prepend = $(document.createElement('div')).addClass('input-group-prepend');
    let inputGroup = $(document.createElement('div')).addClass('input-group-text');
    let checkbox = $(document.createElement('input')).addClass('input-group-prepend').attr({
      "type": "checkbox",
      "class": "is-checked",
      "aria-label": "Checkbox for the followint text input",
      "onclick": "isChecked(event)"
    });
    checkbox.attr(todoList.completed ? "checked" : null, "");
    let input = $(document.createElement('input')).addClass('form-control').attr({
      "class": "form-control",
      "aria-label": "Text input with checkbox",
      "onchange": "toSubmit(toadd)"
    });
    input.val(todoList.task);
    input.attr(todoList.completed ? "disabled" : null, "");
    let append = $(document.createElement('div')).addClass('input-group-append');
    let deleteBtn = $(document.createElement('button')).addClass('btn btn-danger fas fa-trash').attr({
      "type": "button",
      "class": "btn btn-danger",
      "onclick": "delTask(event)"
    }).html('<i class="fas fa-trash"></i>');
    inputGroup.append(checkbox);
    prepend.append(inputGroup);
    append.append(deleteBtn);
    task.append(prepend);
    task.append(input);
    task.append(append);
    $(".container-wrap").append(task);
  });
}
let tasktoAdd = [];

//ADD TASk
const addtask = () => {
  const add = $("#addtodo");
  const val = add.parent().prev().val();
  if (val === "" || !val.replace(/\s/g, '').length) {
    alert("This field cannot be empty!");
  } else if (val.length < 4) {
    alert("Task must be more than 3 characters");
  } else {
    tasktoAdd = [{
      "task": val,
      "completed": false
    }];
    const removeClasses = document.getElementsByClassName('all-task');
    Array.from(removeClasses).forEach((els) => {
      els.remove();
    });
    todo = [...todo, ...tasktoAdd];
    alltodos();
  }
  add.parent().prev().val("");
  $("#add-task-input").focus();
}

alltodos();
