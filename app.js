// Chapter 17-20

// question1
// var a=[[2,3],[5,6],[8,7],[3,7]];

// question2
// var a=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// question3
// for (var i=0;i<=10;i++){
//     print(i);
// }

// question4
// a=+prompt("ENter any number")
// t=+prompt("Enter any number")
// for ( var i=1;i<=t;i++){
//     console.log(a +" x "+i +" = "+a*i);
// }

// question5
// fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for (var i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// question6
// console.log("Counting")
// for (var i=1;i<=15;i++){
//     console.log(i)
// }
// console.log("Reverse")
// for (var i=10;i>=1;i--){
//     console.log(i)
// }
// console.log("Even")
// for (var i=0;i<=20;i+=2){
//     console.log(i)
// }
// console.log("Odd")
// for (var i=1;i<=19;i+=2){
//     console.log(i)
// }
// console.log("Series")
// for (var i=2;i<=20;i+=2){
//     console.log(i+"k")
// }

// question7
// a = ["cake", "apple pie", "cookie", "chips", "patties"]
// input=prompt("What do you want to order")
// check=0
// for (var i=0;i<a.length;i++){
//     if (a[i]==input){
//         console.log("Found coockie at index"+i)
//         check=1;
//     }
// }
// if (check==0){
//     console.log("coockie not availible")
// }

// question8
// a= [24, 53, 78, 91, 12]
// largest=a[0];
// for (var i=0;i<a.length;i++){
//     if (a[i]>a[0]){
//         largest=a[i]
//     }
// }
// console.log("The LARGEST IS " ,largest);

// // question9
// a= [24, 53, 78, 91, 12]
// smallest=a[0];
// for (var i=0;i<a.length;i++){
//     if (a[i]<a[0]){
//         smallest=a[i]
//     }
// }
// console.log("The SMALLEST IS " ,smallest);

// question10
// for (i=1;i<=100;i++ ){
// console.log(5*i);
// }

// Chapter 13-15

// question1
// var a=new Array("Apple","Mango","Banana","Strawberry")
// console.log(a)

// question2
// var a=["Apple","Mango","Banana","Strawberry"]
// console.log(a)

// question3
// sa=["Apple","Mango","Banana","Strawberry"]

// question4
// sa=[4,5,6,3]

// question5
// sa=[true,false]

// question6
// sa=["Apple",true,5]

// question7
// var education=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
// for (var i=0;i<education.length;i++){
//     console.log(education[i]);
// }

// question8
// var names=["Micheal", "John", "Tony"]
// var scores=[320,230,480]
// totalScores=500
// for (var i =0; i<names.length;i++){
//     console.log("Scores of "+ names[i]+" is "+scores[i]+" Percentage: "+(scores[i]/totalScores*100+"%"))
// }

// question9
// var color=[]
// beginning=prompt("Enter Color you want to add at the beginning")
// color.unshift(beginning)
// end=prompt("Enter Color you want to add at the end")
// color.push(end)
// console.log(color)
// beginning1=prompt("Enter 1st Color you want to add at the beginning")
// beginning2=prompt("Enter 2nd Color you want to add at the beginning")
// color.unshift(beginning1,beginning2)
// console.log(color)
// color.pop()
// console.log(color)
// addColor=prompt("enter color name")
// index=prompt("enter index number")
// color.splice(index,0,addColor)
// console.log(color)
// delColor=+prompt("enter number of colors want to delete")
// delindex=prompt("enter index number")
// color.splice(index,delColor)
// console.log(color)



// question10
// var scores=[320,230,480,120]
// for (var i=0;i<scores.length;i++){
//     for (j=0;j<scores.length;j++){
//         if( scores[i]<scores[j]){
//             temp=scores[j]
//             scores[j]=scores[i]
//             scores[i]=temp
//         }
//     }
// }
// console.log(scores)

// question11
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities=cities.slice(2,4)
// console.log(selectedCities)

// question12
// var arr = ["This ", " is ", " my ", " cat"]
// var a=arr.join("")
// console.log(arr)
// console.log(a)

// question13
// var devices=["keyboard","mouse","printer","monitor"]
// for(var i=0;i<devices.length;i++){
//     console.log(devices[i])
// }

// question14
// var devices=["keyboard","mouse","printer","monitor"]
// for(var i=devices.length-1;i>=0;i--){
//     console.log(devices[i])
// }

// question 15
// var mobiles=["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// document.write(
//    "<label for=mobiles>choose a mobile</label> <select id=mobiles name=mobiles><option>"+mobiles[0]+"</option><option>"+mobiles[1]+"</option><option>"+mobiles[2]+"</option><option>"+mobiles[3]+"</option><option>"+mobiles[4]+"</option><option>"+mobiles[5]+"</option></select>"
// )