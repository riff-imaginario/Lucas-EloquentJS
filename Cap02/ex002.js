// 1..100; For numbers divisible by 3, print 'Fizz'; For numbers divisible by 5 and not three, print 'Buzz';

for (let i=1; i <= 100; i++) {
    if (i % 3 == 0)
        console.log(`${i}- Fizz`)
    else if (i % 5 == 0 && i % 3 != 0)
        console.log(`${i}- Buzz`)
}