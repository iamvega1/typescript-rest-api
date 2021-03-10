import mongoose from 'mongoose'

export class Database {
  static async connect() {
    await mongoose.connect(process.env.DB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('💹 connected to MongoDB')
  }
}
