import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { ObjectType, Field, ID } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"

import { User } from "../../user/entities/user.entity"
import { Role } from "../../role/entities/role.entity"

@ObjectType()
@Entity({
  name: "sys_user_roles",
})
export class UserRole extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column("int")
  userId: number

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.roleUsers, {
    lazy: true,
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user?: Promise<User>

  @Field(() => String, { nullable: true })
  @Column("int")
  roleId: number

  @Field(() => Role, { nullable: true })
  @ManyToOne(() => Role, (role) => role.roleUsers, {
    lazy: true,
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role?: Promise<Role>

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date
}
