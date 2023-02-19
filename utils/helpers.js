module.exports = {
    // this helper function is to format the date
    format_date: date => {
        return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
      },
      format_id: id => {
        Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      },
}