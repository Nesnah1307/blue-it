// fill in data
function fillData() {
  const difficulty_id = $('.difficulty-part').attr('data-answer');
  const language_id = $('.language-part').attr('data-answer');
  const type_id = $('.type-part').attr('data-answer');
  $(`input[value=${difficulty_id}]`).attr('checked', 'checked');
  $(`option[value='${language_id}']`).attr('selected', true);
  $(`input[value=${type_id}]`).attr('checked', 'checked');
}

fillData();

async function addQuestionHandler(e) {
  e.preventDefault();
  const title = $('#title').val();
  const answer = $('#answer').val();
  const difficulty_id = $('input[name="difficulty"]:checked').val();
  const language_id = $('#language option:selected').val();
  const type_id = $('input[name="type"]:checked').val();
  const id = location.pathname.split('/')[3];

  if (title && answer && difficulty_id && language_id && type_id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'put',
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
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

$('#addQuestion').submit(addQuestionHandler);
