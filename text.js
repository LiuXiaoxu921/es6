const scanf=require('scanf');
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);//连接起来
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));//和


// console.log("输入两个数");
// let a=scanf("%d");
// let b=scanf("%d");
// if(a>b){
//      console.log(a);
// }
// else if(b>a){
//     console.log(b);
// }
// else{
//     console.log(b);

// }



// const arr=[];
 
// while(1){
//     console.log("1--添加");
//     console.log("2--显示");
//     console.log("3--删除");
//     console.log("4--退出");
//     const x=scanf("%d");
//     if(x===1){
//        const a=scanf("%d");
//        arr.push(a);
//     }
//     if(x===2){

//         for(let i=0;i<arr.length;i++){
//             const hh=arr[i];
//             console.log(hh);
//         }
    

//      }
//      if(x===3){
//         arr.pop();
//      }
//      if(x===4){
//         console.log('退出');
//          break;
//      }

// }




//遍历数组
// console.log(arr.length);
// for( let i=0;i<arr.length;i++){
//          let hh=arr[i];
//          console.log(hh);
// }
//坐标
// let arr=[];

//  while(1){
//      console.log("1--输入一个坐标");
//      console.log("2--显示所有坐标");
//      console.log("3--删除最后一个坐标");
//      console.log("4--推出");
//      const a=scanf("%d");
//      if(a===1){
//        console.log("横坐标");
//        const x=scanf("%d");
//        console.log("纵坐标");
//        const y=scanf("%d");
//        const z={
//           'x':x,
//           'y':y,
//        }
//     arr.push(z);
//      }
//      if(a===2){
//         console.log('2---显示全部坐标');
//                 for(let i=0;i<arr.length;i++){
//                     let syk=arr[i];
//                     // console.log(syk);
//                     console.log(`第${i+1}坐标为(${syk.x},${syk.y})`);
//                 }
//                 //  console.log(arr);
               


                
//     }
//     if(a===3){
//         arr.pop();
//     }
//     if(a===4){
//         console.log('退出');
//             break;
//     }
   
//  }


//键值对
//  let xinlong={
//         a:1,  //横坐标
//        b:2,  //纵坐标
//      }
// console.log(xinlong.b);// console.log(xinlong.a); console.log(xinlong.a);



//学生管理系统
const student=[];
while(1){
    console.log("1--添加一个学生成绩");
    console.log("2--显示所有学生成绩");
    console.log("3--删除最后一个学生成绩");
    console.log("4--退出");
    const choose=scanf("%d");
    if(choose===1){
       console.log("输入学生的成绩");
       console.log("数学成绩");
       const math=scanf("%d");
       console.log("语文成绩");
       const chinese=scanf("%d");
       console.log("英语成绩");
       const english=scanf("%d");
       let x={
           'math':math,
           'chinese':chinese,
           'english':english
       }
       student.push(x);
       console.log("添加成功");
      

    }
    if(choose===2){
        console.log("显示所有学生成绩");
        for(let i=0;i<student.length;i++)
        {
         const chengji=student[i];
     
         console.log(`第${i+1}个学生的成绩,数学:${chengji.math}语文:${chengji.chinese}英语:${chengji.english}`);   
        }
      
    }
    if(choose===3){
       console.log("确定要删除最后一个吗");
       console.log("确定按1");
       console.log("不确定按2");
       const y=scanf("%d");
       if(y===1){
          student.pop();
          console.log("成功删除");
          console.log("回车继续");
         
          scanf('%d');
       }
       else{
            continue;
       }
    }
    if(choose===4){
        console.log('退出');
        break;
    }

}