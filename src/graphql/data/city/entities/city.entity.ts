import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { ObjectType, Field, ID } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { State } from "../../state/entities/state.entity"
import { Company } from '../../../bus/company/entities/company.entity';
import { Project } from '../../../bus/project/entities/project.entity';

@ObjectType()
@Entity({
  name: "data_cities",
})
export class City extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column("int")
  stateId: number

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

  @Field(() => State, { nullable: true })
  @ManyToOne(() => State, (state) => state.cities, { lazy: true, })
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state?: Promise<State>

  @Field(() => [Company], { nullable: true })
  @OneToMany(() => Company, (company) => company.city, { lazy: true })
  companies?: Promise<Company[]>

  @Field(() => [Project], { nullable: true })
  @OneToMany(() => Project, (project) => project.city, { lazy: true })
  projects?: Promise<Project[]>
}
