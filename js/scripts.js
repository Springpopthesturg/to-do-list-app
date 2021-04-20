function newItem() {

  //add new item to, to-do list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("Field must contain letters, numbers, or characters"); //this is if the space doesn't have anything enterd and attempted to be added
  }
  else {
    $('#list').append(li);
  }

  //striking the items that are done
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });

  //The "X" button and deleting list item
  let xOutButton = $('<xOutButton></xOutButton>');
  li.append(xOutButton);
  xOutButton.append(document.createTextNode('X'));
  xOutButton.on('click', function () {
    li.addClass('delete');
  });

  //move list items
  $('#list').sortable();
}