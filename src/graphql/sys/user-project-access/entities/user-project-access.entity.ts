import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Project } from "src/graphql/bus/project/entities/project.entity"
import { User } from "../../user/entities/user.entity"

@ObjectType()
@Entity({
  name: "sys_user_project_access",
})
export class UserProjectAccess extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  userId: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  projectId: number

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
  
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.userprojectAccess, { lazy: true, })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user?: Promise<User>  

  @Field(() => Project, { nullable: true })
  @ManyToOne(() => Project, (project) => project.userProjectAccess, { lazy: true })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project?: Promise<Project>  
}
