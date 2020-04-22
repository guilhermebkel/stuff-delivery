import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	BaseEntity
} from "typeorm"

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
	name: string
	
	@Column()
	email: string
	
	@Column()
	admin: boolean
	
	@Column()
	encrypted_password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
	updated_at: Date
	
	@DeleteDateColumn()
  deleted_at: Date
}

export default User