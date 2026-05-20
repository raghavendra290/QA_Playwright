const ExcelJs = require('exceljs');
var  marks = Array(6);
var marks= new Array(20,30,40,50,60,70);
let submarks=marks.slice(2,5)
console.log(submarks)

let has=50;
marks.push(65);
console.log(marks)
marks.pop()
marks.unshift(10)
console.log(marks)
console.log(typeof(marks))
console.log(marks.includes(70))
console.log(marks.indexOf(70))


let himmu=[
    {price:1000,status:"dev"},
    {price:2000,status:"tester"},
    {price:3000,status:"dev"}

]

let totalprice=himmu.filter(h=>h.status==="dev").map(o=>o.price).reduce((add,value)=>add+value,0)
console.log(totalprice)




async function excel(){
const workbook = new ExcelJs.workbook();
await workbook.xlsx.readFile("C:/Users/user/Downloads/download.xlsx")
const worksheet = workbook.getWorksheet('sheet1');
worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell, ColNumber)=>{
        console.log(cell.value);
    })
})
}