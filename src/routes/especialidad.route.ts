import { Router } from "express";
import {
    insertarEspecialidad,
    listarEspecialidades,
    listarEspecialidadId,
    actualizarEspecialidad,
    eliminarEspecialidad
} from "../controllers/especialidad.controller";

const router: Router = Router();

router.post('/', insertarEspecialidad);
router.get('/', listarEspecialidades);
router.get('/:id', listarEspecialidadId);
router.put('/:id', actualizarEspecialidad);
router.delete('/:id', eliminarEspecialidad);

export default router;