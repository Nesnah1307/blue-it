function deletePostHandler() {
  const id = location.pathname.split('/')[3];
  fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  });
}

$('.delete').click(deletePostHandler);
