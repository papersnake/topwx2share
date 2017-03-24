/**
  用于解析高佣金XLS
**/
import xlsx from 'xlsx'
class gyItems {
  constructor (xlsfile, options) {
    this.gyitems = []
    this.options = Object.assign({}, options)
    this.xlsfiles = xlsfile
    this.success = false
    this.errorMessage = null
    this.openxls(xlsfile)
  }

  openxls (xlsfile) {
    try {
      // const book = xlsx.readFileSync(xlsfile)
      let book = null
      if (this.options.type === 'binary') {
        book = xlsx.read(xlsfile, this.options)
      } else {
        book = xlsx.readFile(xlsfile)
      }

      const firstSheetName = book.SheetNames[0]

      const sheet = book.Sheets[firstSheetName]
      const range = xlsx.utils.decode_range(sheet['!ref'])
      console.log(range)
      // let {s: {c: col_start,r: row_start}, e: {r: row_end, c: col_end}} = range
      let {e: {r: RowEnd}} = range
      let items = []
      // let tmp=sheet[xlsx.utils.encode_cell({r:39,c:11})]
      // console.log(tmp)

      for (let i = 1; i <= RowEnd; i++) {
        let item = {}
        item.itemId = this._parseValue(sheet, {r: i, c: 0})
        item.title = this._parseValue(sheet, {r: i, c: 1})
        item.pic = this._parseValue(sheet, {r: i, c: 2})
        item.detail = this._parseValue(sheet, {r: i, c: 3})
        item.price = this._parseValue(sheet, {r: i, c: 5})
        item.sellcount = this._parseValue(sheet, {r: i, c: 6})
        item.incomeRatio = this._parseValue(sheet, {r: i, c: 10})
        item.income = this._parseValue(sheet, {r: i, c: 11})
        // item.start_time = this._parseValue(sheet,{r:i,c:12})
        // item.end_time = this._parseValue(sheet,{r:i,c:13})
        item.tk_short_url = this._parseValue(sheet, {r: i, c: 15})
        item.tk_tpwd = this._parseValue(sheet, {r: i, c: 17})
        item.coupon_remian = this._parseValue(sheet, {r: i, c: 17})
        item.coupondeno = this._parseValue(sheet, {r: i, c: 20})
        item.start_time = this._parseValue(sheet, {r: i, c: 21})
        item.end_time = this._parseValue(sheet, {r: i, c: 22})
        item.coupon_url = this._parseValue(sheet, {r: i, c: 23})
        item.coupon_tpwd = this._parseValue(sheet, {r: i, c: 24})
        item.coupon_short_url = this._parseValue(sheet, {r: i, c: 25})
        items.push(item)
      }
      // console.log(items.filter( item => item.coupon_remian !== '0' ));
      this.gyitems = items.filter(item => item.coupon_remian !== '0')
      this.success = true
    } catch (e) {
      console.log(e)
      this.success = false
      this.errorMessage = e.message
    }
  }

  success () {
    return this.success
  }
  getItems () {
    return this.gyitems
  }

  getError () {
    return this.errorMessage
  }

  getItemsCount () {
    return this.gyitems.length
  }

  _parseValue (sheet, addr) {
    const cell = sheet[xlsx.utils.encode_cell(addr)]
    if (cell !== undefined) {
      return cell.v
    } else {
      return null
    }
  }

  fileName () {
    return this.xlsfiles
  }
}
export default gyItems
