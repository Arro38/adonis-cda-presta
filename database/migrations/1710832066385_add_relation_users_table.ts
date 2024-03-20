import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    // update the users table
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('job').unsigned().references('id').inTable('jobs').index()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      // remove users_job_foreign key
      table.dropForeign('job')
      table.dropColumn('job')
    })
  }
}
