const calculatePrice = (height, length, width, amount, stone_type) => {
  if (stone_type === "Impala") {
    if (amount > 1) {
      if (height === 3) {
        return length * width * 130 * amount;
      }
      if (height === 4) {
        return length * width * 200 * amount;
      }
      if (height === 5) {
        return length * width * 250 * amount;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4500 * amount;
      }
    } else {
      if (height === 3) {
        return length * width * 130;
      }
      if (height === 4) {
        return length * width * 200;
      }
      if (height === 5) {
        return length * width * 250;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4500;
      }
    }
  }

  if (stone_type === "Kristal") {
    if (amount > 1) {
      if (height === 3) {
        return length * width * 110 * amount;
      }
      if (height === 4) {
        return length * width * 150 * amount;
      }
      if (height === 5) {
        return length * width * 200 * amount;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4000 * amount;
      }
    } else {
      if (height === 3) {
        return length * width * 110;
      }
      if (height === 4) {
        return length * width * 150;
      }
      if (height === 5) {
        return length * width * 200;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4000;
      }
    }
  }

  if (stone_type === "Roso Purino") {
    if (amount > 1) {
      if (height === 3) {
        return length * width * 110 * amount;
      }
      if (height === 4) {
        return length * width * 150 * amount;
      }
      if (height === 5) {
        return length * width * 200 * amount;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4000 * amount;
      }
    } else {
      if (height === 3) {
        return length * width * 110;
      }
      if (height === 4) {
        return length * width * 150;
      }
      if (height === 5) {
        return length * width * 200;
      }
      if (height > 5) {
        return length * width * (height / 100) * 4000;
      }
    }
  }

  if (stone_type === "Bengal") {
    if (amount > 1) {
      if (height === 3) {
        return length * width * 200 * amount;
      }
      if (height === 4) {
        return length * width * 250 * amount;
      }
      if (height === 5) {
        return length * width * 300 * amount;
      }
      if (height > 5) {
        return length * width * (height / 100) * 8000 * amount;
      }
    } else {
      if (height === 3) {
        return length * width * 200;
      }
      if (height === 4) {
        return length * width * 250;
      }
      if (height === 5) {
        return length * width * 300;
      }
      if (height > 5) {
        return length * width * (height / 100) * 8000;
      }
    }
  }

  if (stone_type === "Asoluto Nero") {
    if (amount > 1) {
      if (height === 3) {
        return length * width * 250 * amount;
      }
      if (height === 4) {
        return length * width * 300 * amount;
      }
      if (height === 5) {
        return length * width * 350 * amount;
      }
      if (height > 5) {
        return length * width * (height / 100) * 8000 * amount;
      }
    } else {
      if (height === 3) {
        return length * width * 250;
      }
      if (height === 4) {
        return length * width * 300;
      }
      if (height === 5) {
        return length * width * 350;
      }
      if (height > 5) {
        return length * width * (height / 100) * 8000;
      }
    }
  }
};

export default calculatePrice;
