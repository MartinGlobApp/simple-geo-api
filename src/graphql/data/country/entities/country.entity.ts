import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { State } from "../../state/entities/state.entity"

@ObjectType()
@Entity({
  name: "data_countries",
})
export class Country extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column({
    default: null
  })
  code2: string

  @Field(() => String, { nullable: true })
  @Column({
    default: null
  })
  code3: string

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  @Field(() => [State], { nullable: true })
  @OneToMany(() => State, (state) => state.country, { lazy: true })
  states?: Promise<State[]>
}
