/*
Explain what the following code does: ((n & (n-1)) == 0).


It Checks the if the number is power of 2, EXAMPLE:
1,2,4,8,16,32, etc.

All the time we add a new binary number we are entering to a new 2 powered number field
example:
From 1000 to 10000 could be a number from 8 to 16 in binary but in this case those are the numbers that we really want to extract.
It results to be a littly bit tricky but only when we rest 1 to a number poer of 2 we get a hint
10000
01111

Now we are using & bitwise operator to check if there is an existent bit position where we have 1s
10000 & 01111 = 00000
As you can see we are getting as a result 0 only  when numbers powered of two are present we can see another example when it doesn't happen
10001 & 10000 = 10000

so we have this function that would help to find powerd of 2 numbers.

let isPoweredOfTwo = n => (n & (n -2)) == 0;


*/
