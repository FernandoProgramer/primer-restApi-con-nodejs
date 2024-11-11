import { connectBD } from "../db.js"

// Controladores

// Obtener todos los elementos
export const getEmployee = async (req, res) => {
    try {
        const [rows] = await connectBD.query("SELECT * FROM empleados")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Oops. algo fallo",
            error
        })
    }
}

// Obtener elementos por id
export const getEmployeeById = async (req, res) => {
    try {
        const idUser = parseInt(req.params.id)
        const [rows] = await connectBD.query("SELECT * FROM empleados WHERE id = ?", [idUser])
        if (rows <= 0) {
            return res.status(404).json({
                message: `Usuario no encontrado por el id - ${idUser} `
            })
        }

        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Oops. algo fallo",
            error
        })
    }
}

// Registrar elementos
export const savedEmployee = async (req, res) => {
    try {
        const { nombre, salario } = req.body

        const [rows] = await connectBD.query('INSERT INTO empleados (nombre, salario) VALUE (?, ?)', [nombre, salario])
        res.status(201).json({
            message: "Usuario creado con exito",
            newUser: {
                id: rows.insertId,
                nombre,
                salario
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops. algo fallo",
            error
        })
    }
}

// Actualizar elementos
export const updatedEmployee = async (req, res) => {

    try {
        const { id } = req.params
        const { nombre, salario } = req.body
        const [response] = await connectBD.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id])

        if (response.affectedRows <= 0) {
            return res.status(404).json({
                message: `Usuario no encontrado por el id - ${id} `
            })
        }

        const [rows] = await connectBD.query('SELECT * FROM empleados WHERE id = ?', [id])

        res.status(200).json({
            message: "Usuario actualizado",
            newData: {
                rows
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Oops. algo fallo",
            error
        })
    }
}

// Eliminar elemento
export const removeEmployee = async (req, res) => {
    try {
        const idUser = req.params.id
        const [rows] = await connectBD.query('DELETE FROM empleados WHERE id = ?', [idUser])
        console.log(rows)
        if (rows.affectedRows <= 0) {
            return res.status(404).json({
                message: `Usuario no encontrado por el id - ${idUser} `
            })
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Oops. algo fallo",
            error
        })
    }
}