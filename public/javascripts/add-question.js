async function addQuestionHandler(e) {
  e.preventDefault();
  const title = $('#title').val();
  const answer = $('#answer').val();
  const difficulty_id = $('input[name="difficulty"]:checked').val();
  const language_id = $('#language option:selected').val();
  const type_id = $('input[name="type"]:checked').val();

  console.log(title, answer, difficulty_id, language_id, type_id);
  if (title && answer && difficulty_id && language_id && type_id) {
    const response = await fetch('/api/posts', {
      method: 'post',
      body: JSON.stringify({
        title,
        answer,
        difficulty_id,
        language_id,
        type_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

$('#addQuestion').submit(addQuestionHandler);
