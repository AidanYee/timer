
const args = process.argv.slice(2) //can input values from terminal 

for (const time of args) {
  if(time > 0){
    setTimeout(() => process.stdout.write('\x07'), time *1000); //need to make time = secconds comapred to milliseconds
  }
}
