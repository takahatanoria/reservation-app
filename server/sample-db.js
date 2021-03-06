const Product = require('./model/product')

class SampleDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'サンプルテキスト---1',
        headingtext2: 'サンプルテキスト---2',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'サンプルテキスト---1',
        headingtext2: 'サンプルテキスト---2',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: 'sss',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'サンプルテキスト---1',
        headingtext2: 'サンプルテキスト---2',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: 'ccc',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'サンプルテキスト---1',
        headingtext2: 'サンプルテキスト---2',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      }
    ]
  }

  async initDb() {
    await this.cleanDb(
      this.pushProductsToDb()
    )
  }

  async cleanDb() {
    // await　はProduct.deleteManyの処理が終わってから次の関数が処理されるようにするために書かれている。awaitのある関数にはasyncをつけてあげる
    await Product.deleteMany({})
  }

   pushProductsToDb() {
     this.products.forEach(
       (product) => {
        //  このプロダクト(Product)が medule.exports = mongoose.model('Product', ProductSchema) のProductのmodel
         const newProduct = new Product(product)
         newProduct.save()
       }
     )
   }

   seeDb() {
     this.pushProductsToDb()
   }
}

module.exports = SampleDb
