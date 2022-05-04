module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount != 1 && amount != 0) {
      return `${word}s`;
    }
    return word;
  },
  format_person: (amount) => {
    if (amount != 1) {
      return 'people';
    }
    return "person";
  },

  //   format_url: url => {
  //     return url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('?')[0];
  //   },
};
