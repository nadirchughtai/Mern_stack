            //  Stings
 const x=' This is the first string';
const y=['This is the Second string',' String 3'];
const z= x+' '+y ;
const xyz='This is ,the NEW string';
// const newStr=x.concat(...y);    // ... Are spread operator 
//  console.log(newStr);
//  console.log(x[0]);
// console.log(x.length);   
// const sliceString=x.slice(5,10).charAt(0).toUpperCase();
// const sliceString2=y.slice(1)
// console.log(sliceString2);

// const part=x.substring(0,10);
// console.log(part);

// console.log(x.toUpperCase());
// console.log(x.trim()); //remove whitespaces

// const replaceStr = xyz.replace('This','that');
// console.log(replaceStr);

// console.log(xyz.split());
// console.log(xyz.split(' ').join(' '));
// console.log(...xyz);


                //    Logical Operators

// const a=10;
// const b=20;

// (a<8 && b>1)
// {
// console.log('True')
// } 

//  (a==5 || b==5) 
// {
//     console.log('true')
// }
// (!(x==y))
// {
//     console.log('false');
// }

                        //  Functions




//  if(g>30)
//  {
//     console.log('It is Very True');
//  }
//  else if(h<30)
//  {
//     console.log('It Wil not Run'); 
//  }


// switch (new Date().getDay()) {
//     case 0:
//       console.log( day = "Sunday");
//       break;
//     case 1:
//         console.log( day = "Monday");
//       break;
//     case 2:
//         console.log( day ="Tuesday");
//       break;
//     case 3:
//         console.log( day = "Wednesday");
//       break;
//     case 4:
//         console.log( day = "Thursday");
//       break;
//     case 5:
//         console.log( day ="Friday");
//       break;
//     case 6:
//         console.log( day = "Saturday");
//   }



const student =['Nadir','Ahmed' ,'Shahid','Amir'];
const student2 =['jsy','may','tay'];
student.push('Nayyar');
student.pop();
// console.log(student);
const SortedArray=student.sort((a,b)=> { 
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
}  );
// console.log(SortedArray);
console.log(SortedArray);
 const reverseAry= student.reverse();
//  console.log(reverseAry);


const fontDta=student.filter((elm)=> elm=='Nadir')
// console.log(fontDta);

const mappedData= student.map((elm,i)=> {
    return{
    name:elm,
    index:i
    }
} )
// console.log(mappedData);

const flatmap=student.flatMap((elm,i)=>{
    if(elm=='Nadir')
    return{
        name:elm,
        index:i,
        
    }
})

// console.log(flatmap);

for(var i=0; i<student.length; i++) {

    console.log(student[i]);
}
 var i=0;
 while(i<student.length)
 {
    console.log(student[i]);
    i++;
 }
