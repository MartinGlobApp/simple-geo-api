import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Company } from '../../../bus/company/entities/company.entity';
import { Value } from "../../value/entities/value.entity";
import { Project } from '../../../bus/project/entities/project.entity';
import { LogFormItem } from "../../log-form-item/entities/log-form-item.entity";

@ObjectType()
@Entity({
  name: "data_value_type",
})
export class ValueType extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  projectId: number

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column()
  description: string

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

  @Field(() => Project, { nullable: true })
  @ManyToOne(() => Project, (project) => project.valueTypes, {
    lazy: true
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project?: Promise<Project>

  @Field(() => [Value], { nullable: true })
  @OneToMany(() => Value, (value) => value.valueType, { lazy: true })
  values?: Promise<Value[]>

  @Field(() => [LogFormItem], { nullable: true })
  @OneToMany(() => LogFormItem, (logFormItem) => logFormItem.valueType, { lazy: true })
  logFormItmes?: Promise<LogFormItem[]>
}
