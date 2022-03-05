import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID } from "@nestjs/graphql"
import { Expose } from "class-transformer"
import { BaseModel } from "src/core/lib"

@ObjectType()
@Entity({
  name: "sys_files",
})
export class File extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column()
  filename: string

  @Field(() => String, { nullable: true })
  @Column()
  mimeType: string

  @Field(() => String, { nullable: true })
  @Column()
  extension: string

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  @Expose()
  @Field(() => String, { nullable: true })
  get url(): Promise<string> {

    return new Promise<string>(async (resolve) => {    
      const file =  `${process.env.URL}uploads/${this.id}.${this.extension}`
  
      return resolve(file)
    })
  }
}
