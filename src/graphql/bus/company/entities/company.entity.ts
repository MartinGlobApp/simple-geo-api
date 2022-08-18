import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, Generated } from "typeorm"
import { ObjectType, Field, ID} from '@nestjs/graphql';

import { BaseModel } from "src/core/lib"
import { User } from "src/graphql/sys/user/entities/user.entity";
import { DataVersion } from '../../data-version/entities/data-version.entity';
import { type } from "os";

@ObjectType()
@Entity({
  name: "bus_companies",
})
export class Company extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => String, { nullable: true, })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column({type: "longtext"})
  data: string

  @Field(() => Number, { nullable: true })
  @Column()
  dataSizeInBytes: number

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
  @Field(() => [User], { nullable: true })
  @OneToMany(() => User, (user) => user.company, { lazy: true })
  users?: Promise<User[]>

  @Field(() => [DataVersion], { nullable: true })
  @OneToMany(() => DataVersion, (dataVersion) => dataVersion.company, { lazy: true })
  dataVersions?: Promise<DataVersion[]>
}
