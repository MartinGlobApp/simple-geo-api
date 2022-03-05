import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Company } from "src/graphql/bus/company/entities/company.entity"
import { ValueType } from '../../value-type/entities/value-type.entity';
import { Hole } from "src/graphql/bus/hole/entities/hole.entity";
import { Project } from '../../../bus/project/entities/project.entity';
import { LogForm } from '../../../log/log-form/entities/log-form.entity';

@ObjectType()
@Entity({
  name: "data_values",
})
export class Value extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  projectId: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  valueTypeId: number

  @Field(() => String, { nullable: true })
  @Column()
  code: string

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
  @ManyToOne(() => Project, (project) => project.values, {
    lazy: true
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project?: Promise<Project>

  @Field(() => ValueType, { nullable: true })
  @ManyToOne(() => ValueType, (valueType) => valueType.values, {
    lazy: true
  })
  @JoinColumn([{ name: "value_type_id", referencedColumnName: "id" }])
  valueType?: Promise<Company>

  @Field(() => [Hole], { nullable: true })
  @OneToMany(() => Hole, (hole) => hole.values, { lazy: true })
  holes?: Promise<Hole[]>

  
  //FOREIGN KEYS LOG LITHOLOGY

  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder1, { lazy: true })
  order1logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder2, { lazy: true })
  order2logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder3, { lazy: true })
  order3logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder4, { lazy: true })
  order4logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder5, { lazy: true })
  order5logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder6, { lazy: true })
  order6logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder7, { lazy: true })
  order7logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder8, { lazy: true })
  order8logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder9, { lazy: true })
  order9logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder10, { lazy: true })
  order10logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder11, { lazy: true })
  order11logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder12, { lazy: true })
  order12logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder13, { lazy: true })
  order13logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder14, { lazy: true })
  order14logForms?: Promise<LogForm[]>
 
  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.valueOrder15, { lazy: true })
  order15logForms?: Promise<LogForm[]>
}
