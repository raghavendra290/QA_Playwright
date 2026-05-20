const {test,expect}=require('@playwright/test');
const Excel=require('exceljs');


let output={rownum:-1,colnum:-1}
async function excel(textsearch,updatevalue,path){
const workbook = new Excel.Workbook();
 await workbook.xlsx.readFile(path)
    
const worksheet = workbook.getWorksheet('Sheet1');
retrieve(worksheet,textsearch);
const cell = worksheet.getCell(output.rownum,output.colnum);
cell.value=updatevalue
workbook.xlsx.writeFile(path)
}


async function retrieve(worksheet,textsearch){
await worksheet.eachRow((row,rownumber)=>{
    row.eachCell((cell,colnum)=>{
        if(cell.value==textsearch){
            output.rownum=rownumber;
            output.colnum=colnum
            console.log(output.rownum)
            console.log(output.colnum)
        }
    });
});
}


test('excel',async({page})=>{
    const textsearch='Mango'
    const updatevalue='350'
    
    
await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
const download = page.waitForEvent('download');
await page.getByRole('button',{name:'Download'}).click();
const dl=await download
const path='C:/Users/user/Downloads/download.xlsx'
await excel(textsearch,updatevalue,path);
await page.locator('#fileinput').setInputFiles(path);
 const desired= page.locator('#cell-2-undefined').first();
await expect(desired).toContainText(updatevalue);

    
})