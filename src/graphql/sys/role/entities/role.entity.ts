import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, Generated } from "typeorm"
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { BaseModel } from "src/core/lib"
import { UserRole } from "../../user-role/entities/user-role.entity"

@ObjectType()
@Entity({
  name: "sys_roles",
})
export class Role extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

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

  @OneToMany(() => UserRole, (userRole) => userRole.role, { lazy: true })
  roleUsers?: Promise<UserRole[]>
}
