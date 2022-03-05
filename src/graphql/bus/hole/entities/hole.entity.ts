import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Project } from '../../project/entities/project.entity';
import { Value } from "src/graphql/data/value/entities/value.entity";
import { LogForm } from '../../../log/log-form/entities/log-form.entity';

@ObjectType()
@Entity({
  name: "bus_holes",
})
export class Hole extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  projectId: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  value_prospect_id: number

  @Field(() => String, { nullable: true })
  @Column()
  code: string

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
  @ManyToOne(() => Project, (project) => project.holes, { lazy: true })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project?: Promise<Project>

  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.holes, { lazy: true })
  @JoinColumn([{ name: "value_prospect_id", referencedColumnName: "id" }])
  values?: Promise<Value>

  @Field(() => [LogForm], { nullable: true })
  @OneToMany(() => LogForm, (logForm) => logForm.hole, { lazy: true })
  logForms?: Promise<LogForm[]>
}
