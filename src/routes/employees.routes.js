import { Router } from "express"
import { getEmployee, getEmployeeById, removeEmployee, savedEmployee, updatedEmployee } from "../controllers/employees.controller.js"

const router = Router()

router.get('/employee', getEmployee) // Method: GET
router.get('/employee/:id', getEmployeeById) // Method: GET

router.post('/employee/saved', savedEmployee) // Method: POST

router.patch('/employee/updated/:id', updatedEmployee) // Method: PATCH

router.delete('/employee/delete/:id', removeEmployee) // Method: DELETE

export default router