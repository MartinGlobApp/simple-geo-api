import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID, Int, Float } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { City } from "src/graphql/data/city/entities/city.entity"
import { Hole } from '../../hole/entities/hole.entity';
import { Value } from "src/graphql/data/value/entities/value.entity"
import { ValueType } from "src/graphql/data/value-type/entities/value-type.entity"
import { LogType } from '../../../data/log-type/entities/log-type.entity';
import { UserProjectAccess } from '../../../sys/user-project-access/entities/user-project-access.entity';
import { Company } from '../../company/entities/company.entity';

@ObjectType()
@Entity({
  name: "bus_project",
})
export class Project extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column({nullable: false})
  name: string

  @Field(() => Int, { nullable: true })
  @Column("int")
  companyId: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  cityId: number

  @Field(() => Float, { nullable: true })
  @Column()
  latitude: string

  @Field(() => Float, { nullable: true })
  @Column()
  longitude: string

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

  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.projects, { lazy: true, })
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company?: Promise<Company>  

  @Field(() => City, { nullable: true })
  @ManyToOne(() => City, (city) => city.projects, { lazy: true, })
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city?: Promise<City>  

  @Field(() => [Hole], { nullable: true })
  @OneToMany(() => Hole, (hole) => hole.project, { lazy: true })
  holes?: Promise<Hole[]>

  @Field(() => [Value], { nullable: true })
  @OneToMany(() => Value, (value) => value.project, { lazy: true })
  values?: Promise<Value[]>

  @Field(() => [ValueType], { nullable: true })
  @OneToMany(() => ValueType, (valueType) => valueType.project, { lazy: true })
  valueTypes?: Promise<ValueType[]>

  @Field(() => [LogType], { nullable: true })
  @OneToMany(() => LogType, (logType) => logType.project, { lazy: true })
  logTypes?: Promise<LogType[]>

  @Field(() => [UserProjectAccess], { nullable: true })
  @OneToMany(() => UserProjectAccess, (userProjectAccess) => userProjectAccess.project, { lazy: true })
  userProjectAccess?: Promise<UserProjectAccess[]>
}
