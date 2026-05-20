const ExcelJs = require('exceljs');
let output={rownum:-1,colnum:-1}
async function excel(SeachText,replacetext,path){
const workbook = new ExcelJs.Workbook();
 await workbook.xlsx.readFile(path)
    
const worksheet = workbook.getWorksheet('Sheet1');
retrieve(worksheet,SeachText);
const cell = worksheet.getCell(output.rownum,output.colnum);
cell.value=replacetext
workbook.xlsx.writeFile(path)
}


async function retrieve(worksheet,SeachText){
await worksheet.eachRow((row,rownumber)=>{
    row.eachCell((cell,colnum)=>{
        if(cell.value==SeachText){
            output.rownum=rownumber;
            output.colnum=colnum
            console.log(output.rownum)
            console.log(output.colnum)
        }
    });
});
}


excel("apple","Mango","C:/Users/user/Downloads/download.xlsx");

 