console.log(1=='1')  //true
console.log(1==='1') //false
// (==) it checks whether the vallue is same on both sides or can become same after datatype conversion---->Loose equality
// (===) it checks whether both the datatype and value is same or not on t=both the sides----->Strict Equality

//Peculiar cases
console.log(0=='') //true why? because Number('')=0.
console.log('false'==false) //from the refrence from the table both will be first converted into number...Number('false')=Nan and Number(false)=0...so it is false
console.log(''== false) //true, both typecast to 0
// any wide space is 0
// so following result holds
console.log('\n'==0)
console.log('\t'==0)
console.log(' '==0)
// All the above results are true But remember this below statement is false
console.log('\n'=='\t') //why ? because they have same datatype but different number of spaces so they are unequal..hence false
// IMP this doesn't hold good for abstract equality
// a=b,b=c ..... implies that .. a=c
console.log([1,2]==[1,2]) //false because incase of non-primitive datatype the value is not data of the array but the refrence to the base address...since both the array have different base address so it is false
//IMP if we take two non-primitive datatype and compare them either by == or === and if the result comes out to be true it means that they belong to the same refrence



