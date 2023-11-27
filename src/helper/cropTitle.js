//this is will trim down the title if length of the title is greater than the given offset in the constants file
function cropTitle(title, maxLength) {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  }

export default cropTitle;
