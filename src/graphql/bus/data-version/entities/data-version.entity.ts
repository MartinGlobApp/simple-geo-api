import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Company } from "../../company/entities/company.entity"

@ObjectType()
@Entity({
  name: "bus_data_versions",
})
export class DataVersion extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  companyId: string

  @Field(() => String, { nullable: true })
  @Column()
  data: string

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  //FOREIGN KEYS
  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.users, { lazy: true })
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company?: Promise<Company>
}
