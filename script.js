$(function() {
  // Exercise 1
  $('.accordion-header').on('click', function() {
    $('.accordion-header').not(this).next('.accordion-content').slideUp();
    $(this).next('.accordion-content').slideToggle('fast', function() {
      console.log('Content Toggled')
    });
  });

  // Exercise 2
  $('.todos button').on('click', function() {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        const $ul = $('.todos ul').empty();
        response.todos.forEach(todo => {
          $ul.append($('<li>').text(todo.todo));
        });
      },
      error: function() {
        alert('Failed to load to-do items.');
      }
    });
  });
});