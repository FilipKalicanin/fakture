const calculatePrice = (height, length, width, amount, stone_type) => {
  if (stone_type === "Impala") {
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
  }

  if (stone_type === "Kristal") {
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
  }

  if (stone_type === "Roso Purino") {
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
  }

  if (stone_type === "Bengal") {
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
  }

  if (stone_type === "Asoluto Nero") {
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
  }
};

export default calculatePrice;
