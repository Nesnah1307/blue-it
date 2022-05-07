function submitCommentHandler(e) {
  e.preventDefault();
  const content = $('#commentForm textarea').val();
  const post_id = location.pathname.split('/')[2];
  console.log(content);
  console.log(post_id);

  fetch('/api/comments/', {
    method: 'post',
    body: JSON.stringify({
      content,
      post_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  });
}

$('#commentForm').submit(submitCommentHandler);
