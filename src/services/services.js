import gyItems from './gyItems'
class services {
  static getGyItemList (file) {
    const promise = new Promise(function (resolve, reject) {
      const xlsfile = 'test.xls'
      const reader = new FileReader()
      reader.onload = function(e) {
        const data = e.target.result
        const gyItem = new gyItems(data, {type: 'binary'})
        if (gyItem.success) {
          resolve(gyItem.getItems())
        } else {
          reject(new Error(gyItem.getError()))
        }
      }
      reader.readAsBinaryString(file)
    })
    return promise
  }
}

export default services
