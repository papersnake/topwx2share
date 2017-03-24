import services from './services'
/*
services.getGyItemList().then(data => {
  console.log(data);
})*/


async function test() {
  try{
    const data = await services.getGyItemList()

    console.log(data)

  } catch (e) {
    console.log(e)
  }

}

let fun1
let x=0
async function test2(){
  let result
  try{
    x = await add(x,1)
    console.log(x)
  } catch(e) {
    console.log(e)
  }

  clearTimeout(fun1)

  fun1 = setTimeout(() => {
    test2()
  }, 3000);

}

async function add(x,y) {
  return x+y
}

test2()
