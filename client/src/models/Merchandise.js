export default class Merchandise {
  description;
  length;
  dimension;
  quantity;
  weight;
  maxHeight;

  constructor(defaultDimension) {
    this.dimension = defaultDimension;
  }
  
  get lengthInMeter() {
    return this.dimension[0] / 100;
  }

  get widthInMeter() {
    return this.dimension[1] / 100;
  }

  get weightInTons() {
    return this.weight / 1000;
  }
  
  get isValid() {
    return !!this.dimension && !!this.description && !!this.maxHeight && !!this.weight && !!this.quantity;
  }
}