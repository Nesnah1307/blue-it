module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_post_date: date => {
    const post_date = new Date(date);
    const month = post_date.toLocaleString('default', { month: 'long' });
  return `${month} ${post_date.getDate()}, ${post_date.getFullYear()} at ${post_date.getHours()}:${post_date.getMinutes()}`;

    
  },
  format_plural: (word, amount) => {
    if (amount != 1 && amount != 0) {
      return `${word}s`;
    }
    return word;
  },
  format_person: amount => {
    if (amount != 1) {
      return 'people';
    }
    return 'person';
  },

  //   format_url: url => {
  //     return url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('?')[0];
  //   },
};
