import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, Generated } from "typeorm"
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { BaseModel } from "src/core/lib"
import { City } from '../../../data/city/entities/city.entity';
import { User } from "src/graphql/sys/user/entities/user.entity";
import { Project } from '../../project/entities/project.entity';

@ObjectType()
@Entity({
  name: "bus_companies",
})
export class Company extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column()
  cityId: string

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

  @Field(() => [Project], { nullable: true })
  @OneToMany(() => Project, (project) => project.company, { lazy: true })
  projects?: Promise<Project[]>
}
