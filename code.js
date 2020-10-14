


const coin = {
  state: 0,
  flip: function () {
    coin.state = Math.floor(Math.random() * 2);
    console.log(coin.state);
    return coin.state;
  },

  toString: function () {
    let string;
    this.flip();
    if (this.state === 0) {
      string = "Heads";
    } else {
      if (this.state === 1) {
        string = "Tails";
      }
    }
    return string;
  },

  toHTML: function () {
    const image = document.createElement("img");
    this.flip();
    if (this.state === 0) {
      image.src = "https://i.ibb.co/RQPxVjZ/heads.jpg";
    } else {
      image.src = "https://i.ibb.co/FmJBKRj/quarter.jpg";
    }
    return image;
  },
};

function display20Flips() {
  const results = [];
  for (i = 0; i < 20; i++) {
    coin.flip();
    results.push(coin.toString());
    document.body.append(coin.toString());
    // document.write(coin.toString())
  }
  //  return the results of the "results" into n array"
  console.log(results);
  return results;

  // push string to results
  // object is a list of properties and methods with keys and values. access using .key.
}

function display20Images() {
  const results = [];
  for (i = 0; i < 20; i++) {
    coin.flip();
    results.push(coin.toHTML());
    document.body.append(coin.toHTML());
  }
  return results;
}
display20Images();

display20Flips();
