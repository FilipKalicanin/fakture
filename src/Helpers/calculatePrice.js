const calculatePrice = (height, length, width, stone_type) => {
  if (stone_type === "Impala") {
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

  if (stone_type === "Kristal") {
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

  if (stone_type === "Roso Purino") {
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

  if (stone_type === "Bengal") {
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

  if (stone_type === "Asoluto Nero") {
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
};

export default calculatePrice;
