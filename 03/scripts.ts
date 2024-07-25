const multiplicationTable = (numbersToMultiplicate: number[]) => {
  numbersToMultiplicate.forEach(number => {
    for(let i = 0; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`)
    }

    console.log('---------------\n');
  })
}

multiplicationTable([1, 5, 2]);
