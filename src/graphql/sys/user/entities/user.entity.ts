import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, OneToMany, JoinColumn, ManyToOne, Generated } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { UserRole } from "../../user-role/entities/user-role.entity"
import { Expose } from "class-transformer"
import { Company } from "src/graphql/bus/company/entities/company.entity"

@ObjectType()
@Entity({
  name: "sys_users",
})
export class User extends BaseModel {

  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  companyId: string

  @Field(() => Boolean, { nullable: true })
  @Column({ type: "boolean", default: false })
  active: boolean

  @Field(() => String, { nullable: true })
  @Index({ unique: true })
  @Column({default:null})
  username: string

  @Field(() => String, { nullable: true })
  @Column({default:null})
  password: string

  @Field(() => String)
  @Column()
  email: string

  @Field(() => String)
  @Column()
  firstName: string

  @Field(() => String)
  @Column()
  lastName: string

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  @Field(() => [UserRole], { nullable: true })
  @OneToMany(() => UserRole, (userRole) => userRole.user, { lazy: true })
  roleUsers?: Promise<UserRole[]>

  @Expose()
  @Field(() => String, { nullable: true})
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  //FOREIGN KEYS
  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.users, { lazy: true })
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company?: Promise<Company>
}
