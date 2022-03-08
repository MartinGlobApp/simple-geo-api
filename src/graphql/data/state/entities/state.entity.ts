import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, Generated } from "typeorm"
import { ObjectType, Field, ID } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"

import { Country } from "../../country/entities/country.entity"
import { City } from "../../city/entities/city.entity"

@ObjectType()
@Entity({
  name: "data_states",
})
export class State extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column()
  countryId: string

  @Field(() => Country, { nullable: true })
  @ManyToOne(() => Country, (country) => country.states, {
    lazy: true,
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country?: Promise<Country>

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  @OneToMany(() => City, (city) => city.state, { lazy: true })
  cities?: Promise<City[]>
}
