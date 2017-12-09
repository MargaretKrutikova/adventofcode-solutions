import inputArray from './input';

class Solutions {
  static day1(inputString) {
    let circularString = inputString + inputString[0];
    const length = circularString.length;
    
    return circularString
      .split('')
      .map((value, index, array) => index < length - 1 && value === array[index + 1] ? value : 0)
      .reduce((acc, value) => acc + +value, 0);
  }

  static day2({ array, cols }) {
    // 50376
    return array
      .map((value, index) => index % cols === 0 ? array.slice(index, index + cols) : null)
      .filter((chunk) => chunk !== null)
      .reduce((acc, chunk) => acc + (Math.max(...chunk) - Math.min(...chunk)), 0);
  }

  static day3(input) {
    // 419
    const getNumberLevel = (inputNumber, currentLevel, previousSide, previousMax) => {
      currentLevel = currentLevel || 2;
      previousSide = previousSide || 1;
      previousMax = previousMax || 1;
  
      let cuurentLevelTotal  = (previousSide + 2) * 2 + 2 * previousSide;
      let currentLevelMin = previousMax + 1, currentLevelMax = previousMax + cuurentLevelTotal;
  
      if (inputNumber >= currentLevelMin && inputNumber <= currentLevelMax) {
        return { currentLevel, currentSide: previousSide + 2, currentLevelMax };
      }
  
      return getNumberLevel(inputNumber, currentLevel + 1, previousSide + 2, currentLevelMax);
    };
    
    let { currentLevel, currentSide, currentLevelMax } = getNumberLevel(input);
    let stepsToMiddle = Math.floor(currentSide / 2);
    let middles = Array(4).fill().map((_, index) => currentLevelMax - (index * 2 + 1) * stepsToMiddle);
  
    let pathToCenter = Math.min(...middles.map(m => Math.abs(m - input))) + currentLevel - 1;
    return pathToCenter;
  }
  static day4(input) {
    // 477
    return input
      .split('\n')
      .map((phrase) => phrase.trim().split(' '))
      .filter((phrase) => (new Set(phrase)).size === phrase.length)
      .length;
  }
  static day5(input) {
    let nextPosition = 0;
    let stepsMade = 0;

    while (nextPosition < input.length) {
        let jump = input[nextPosition];
        input[nextPosition]++;
        nextPosition += jump;
        stepsMade++;
    }

    return stepsMade;
  }
  static day6(input) {
    let memoryStates = [input];
    let steps = 0;

    while (true) {
      let banks = memoryStates[memoryStates.length - 1];
      let indexMax = banks.reduce((iMax, bank, i, arr) => bank > arr[iMax] ? i : iMax, 0);
      let maxValue = banks[indexMax];

      let distributeValue = Math.floor(maxValue / banks.length), leftValue = maxValue - banks.length * distributeValue;
      let distributionArray = Array(banks.length).fill()
        .map((_, index) => index < leftValue ? distributeValue + 1 : distributeValue);

      let newBanks = banks.map((value, index) => {
        let newIndex = index - (indexMax + 1);
        if (newIndex < 0) newIndex = banks.length + newIndex;

        return (index === indexMax ? 0 : value) + distributionArray[newIndex];
      });
      steps++;

      let seenState = memoryStates.find(state => state.every((value, index) => value === newBanks[index]));
      if (seenState) break;
      memoryStates.push(newBanks);
    }
    
    return steps;
  }
}

const Answers = {
  day1: Solutions.day1(inputArray[0]),
  day2: Solutions.day2(inputArray[1]),
  day3: Solutions.day3(inputArray[2]),
  day4: Solutions.day4(inputArray[3]),
  day5: Solutions.day5(inputArray[4]),
  day6: Solutions.day6(inputArray[5])
};

export default Answers;