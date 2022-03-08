import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, Generated } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Project } from "src/graphql/bus/project/entities/project.entity"
import { LogFormItem } from '../../log-form-item/entities/log-form-item.entity';

@ObjectType()
@Entity({
  name: "data_log_types",
})
export class LogType extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => String, { nullable: true })
  @Column()
  projectId: string
  
  @Field(() => String, { nullable: true })
  @Column()
  name: string

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
  @ManyToOne(() => Project, (project) => project.logTypes, { lazy: true })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project?: Promise<Project>  

  @Field(() => [LogFormItem], { nullable: true })
  @OneToMany(() => LogFormItem, (logFormItem) => logFormItem.logForm, { lazy: true })
  logFormItmes?: Promise<LogFormItem[]>
}
