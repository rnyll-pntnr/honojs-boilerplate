import { Schema, model } from 'mongoose'

const employeeSchema = new Schema(
  {
    employee_id: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    hired_date: { type: Date, required: true },
    status: { type: String, required: true, enum: ['Active', 'Inactive'] },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: any) => {
        ret._id = ret._id.toString()
        delete ret.__v
      },
    },
  },
)

const Employee = model('employee', employeeSchema)

export default Employee
