import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { BaseModel } from "src/core/lib"
import { City } from '../../../data/city/entities/city.entity';
import { User } from "src/graphql/sys/user/entities/user.entity";

@ObjectType()
@Entity({
  name: "bus_companies",
})
export class Company extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => Int, { nullable: true })
  @Column("int")
  cityId: number

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  //FOREIGN KEYS

  @Field(() => City, { nullable: true })
  @ManyToOne(() => City, (city) => city.companies, { lazy: true,})
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city?: Promise<City>

  @Field(() => [User], { nullable: true })
  @OneToMany(() => User, (user) => user.company, { lazy: true })
  users?: Promise<User[]>
}
